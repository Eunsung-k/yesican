import React, { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import TodoItem from "@/components/TodoItem";
import { today, getMidnight, weekRange } from "@/utils";
import styles from "@/styles/TodoList.module.css";
import Head from 'next/head';

import { db } from "@/firebase";

import {
  getFirestore,
  collection,
  query,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  orderBy,
  where,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import tailwindConfig from "../../tailwind.config";

const todoCollection = collection(db, "todos");
const publicTodoCollection = collection (db, "publicTodos");

const handleLogout = async () => {
  await signOut();
};

// TodoList 컴포넌트를 정의합니다.
const TodoList = () => {
  const [myDate, setMyDate] = useState(new Date()); //날짜별로 투두리스트 저장 테스트
  const [weeklyGoal, setWeeklyGoal] = useState(null);//weeklyGoal
  const [inputGoal, setInputGoal] = useState(null); //weeklygaol
  const [weeklyCompleted, setWeeklyCompleted] = useState(0);
  const [isGoalOptionsOpen, setIsGoalOptionsOpen] = useState(false); //weeklyGoal 테스트
  const [isGoalOptionsOpenPub, setIsGoalOptionsOpenPub] = useState(false); //weeklyGoal 테스트
  const [weeklyGoalPub, setWeeklyGoalPub] = useState(null);//weeklyGoal public 테스트
  const [inputGoalPub, setInputGoalPub] = useState(null); //weeklygaol public  테스트

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substr(0, 10)); //
  const { weekStart, weekEnd } = weekRange(selectedDate);//주간 범위

  const [todos, setTodos] = useState([]);
  const [publicTodos, setPublicTodos] = useState([]);
  const [input, setInput] = useState("");
  const [publicInput, setPublicInput] = useState(""); // public 카테고리 인풋 추가. 

  const [isAdmin, setIsAdmin] = useState(false); // Add isAdmin state

  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false); // 퍼블릭 검색 팝업 상태 변수
  const [weekPopupOpen, setweekPopupOpen] = useState(false); // 주n회 팝업 상태 변수
  const [personalPopupOpen,setpersonalPopupOpen] = useState(false); // 혼자 할 일 팝업 상태 변수
  const [personalcomPopupOpen,setpersonalcomPopupOpen] = useState(false); // 혼자 할 일 달성도 팝업 상태 변수
  const [publicPopupOpen,setpublicPopupOpen] = useState(false); // 함께 할 일 팝업  상태 변수
  const [publiccomPopupOpen,setpubliccomPopupOpen] = useState(false); // 함께 할 일 참여도 팝업 상태 변수
  const [otherpublicPopupOpen,setotherpublicPopupOpen] = useState(false); // 다른 함께 할 일 팝업 상태 변수



//Personal Todo 달성도 
  const personalCompletionPercentage = () => {
    const completedCount = todos.filter((todo) => todo.completed).length;
    const totalCount = todos.length;
    const percentage = totalCount !== 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    const barWidth = (800 * percentage) / 100; // 가로 막대의 너비
    
    return barWidth;
  };
  

  const personalCompletionPercentageindex = () => {
    const completedCount = todos.filter((todo) => todo.completed).length;
    const totalCount = todos.length;
    const percentage = totalCount !== 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    const rangeStart = 0; // 범위 시작값
    const rangeEnd = 100; // 범위 끝값
    
    // percentage 값을 0-100 범위로 변환
    const scaledValue = (percentage * (rangeEnd - rangeStart)) / 100 + rangeStart;
    
    return scaledValue;
  };

 // 1. Public Todo 달성도 계산 함수
  const calculatePublicTodoCompletion = (publicTodo) => {
    const joinedUsers = publicTodo.joinedUsers;
    if (!joinedUsers) {
      return {
        completedCount: 0,
        totalCount: 0,
      };
    }
    const joinedUserIds = Object.keys(joinedUsers);
    const completedCount = joinedUserIds.reduce((count, userId) => {
      if (joinedUsers[userId].completed) {
        return count + 1;
      }
      return count;
    }, 0);
    const totalCount = joinedUserIds.length;
    return {
      completedCount,
      totalCount,
    };
  };

  //팝업
 // 다른 함께 할 일 찾아보기 팝업
 const toggleSearchPopup = () => {
  setIsSearchPopupOpen(!isSearchPopupOpen);
};

 // 주 n회 팝업
 const weekPopup = () => {
  setweekPopupOpen(!weekPopupOpen);
};

// 혼자 할 일 팝업
const personalPopup = () => {
  setpersonalPopupOpen(!personalPopupOpen);
};

// 혼자 할 일 달성도 팝업
const personalcomPopup = () => {
  setpersonalcomPopupOpen(!personalcomPopupOpen);
};

// 함께 할 일 팝업
const publicPopup = () => {
  setpublicPopupOpen(!publicPopupOpen);
};

// 함께 할 일 참여도 팝업
const publiccomPopup = () => {
  setpubliccomPopupOpen(!publiccomPopupOpen);
};

 // 다른 함께 할 일 팝업
 const otherpublicPopup = () => {
  setotherpublicPopupOpen(!otherpublicPopupOpen);
};

  //검색
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // 검색어 입력값이 변경될 때마다 검색 결과를 업데이트합니다.
  useEffect(() => {
    // 검색어가 비어있는 경우 모든 publicTodos를 검색 결과로 설정합니다.
    if (searchInput.trim() === "") {
      setSearchResults(publicTodos.filter((publicTodo) => publicTodo.isPublic));
    } else {
      // 검색어가 있는 경우 검색어를 포함하는 publicTodos를 검색 결과로 설정합니다.
      const filteredResults = publicTodos.filter((publicTodo) =>
        publicTodo.text.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  }, [searchInput, publicTodos]);

  const { data, status } = useSession();

  useEffect(() => {
    let userUnsubscribe;
    let publicUnsubscribe;
  
    const getUserTodos = async () =>{
      if (!data?.user?.name) return;
      const userTodoQuery = query(
        todoCollection,
        where("userId", "==", data?.user?.id),
        orderBy("datetime", "asc")
      );
  
      userUnsubscribe = onSnapshot(userTodoQuery, (querySnapshot) => {
        const newTodos = [];
        querySnapshot.forEach((doc) => {
          newTodos.push({ id: doc.id, ...doc.data() });
        });
        setTodos(newTodos);
      });
    };
  
    const getPublicTodos = async () => {
      const publicTodoQuery = query(
        publicTodoCollection,
        orderBy("datetime", "asc")
      );
  
      publicUnsubscribe = onSnapshot(publicTodoQuery, (querySnapshot) => {
        const newPublicTodos = [];
        querySnapshot.forEach((doc) => {
          newPublicTodos.push({ id: doc.id, ...doc.data() });
        });
        setPublicTodos(newPublicTodos);
      });
    };
  
    getUserTodos();
    getPublicTodos();
  
    return () => {
      if (userUnsubscribe) {
        userUnsubscribe();
      }
      if (publicUnsubscribe) {
        publicUnsubscribe();
      }
    };
  }, [data]);


    // 입력값 변경 시 inputGoal 상태 업데이트
    const handleGoalInputChange = (event) => {
      setInputGoal(parseInt(event.target.value));
    };

  // addTodo 함수는 입력값을 이용하여 새로운 할 일을 목록에 추가하는 함수입니다.
  const addTodo = async() => {
    // 입력값이 비어있는 경우 함수를 종료합니다.
    if (input.trim() === "") return;
    const docRef = await addDoc(todoCollection, {
      userId: data?.user?.id,
      text: input,
      completed: false,
      date: selectedDate,
      datetime: new Date(),
      isPublic: false,
      createdDate: new Date(), // 리스트를 추가한 날짜 정보를 추가합니다.
      weeklyGoal: inputGoal, // 주간 목표 초기값 설정
      weeklyCompleted: 0, // 주간 완료 횟수
    });

    const newTodo = {
      id: docRef.id, 
      text: input, 
      completed: false, 
      date: selectedDate, 
      datetime: new Date(),
      createdDate: new Date(), // 리스트를 추가한 날짜 정보를 추가합니다.
      weeklyGoal: inputGoal, // 주간 목표 초기값 설정
      weeklyCompleted: 0, // 주간 완료 횟수
     };

    setTodos([...todos, newTodo]);
    setInput("");
    setSelectedDate(null);
    setInputGoal(null);//todo 입력창에서 설정한 주간 목표 횟수
  };

    // goal 입력
    const handleGoalSelect = (weeklyGoal) => {
      setInputGoal(weeklyGoal);
      setIsGoalOptionsOpen(false);
    };

   // goal 옵션 토글
    const toggleGoalOptions = () => {
      setIsGoalOptionsOpen(!isGoalOptionsOpen);
    };


  // add public todo 함수는 입력값을 이용하여 새로운 할 일을 목록에 추가하는 함수입니다.
  const addPublicTodo = async() => {
    if (publicInput.trim() === "") return;
    const docRef = await addDoc(publicTodoCollection, {
      text: publicInput,
      completed: false,
      date: selectedDate,
      datetime: new Date(),
      isPublic: true,
      administratorId: data?.user?.id,
      createdDate: new Date(),
      weeklyGoal: inputGoalPub,
      weeklycompledted: 0,
    });
  
    const newPublicTodo = {
      id: docRef.id,
      text: publicInput,
      completed: false,
      date: selectedDate,
      createdDate: new Date(),
      weeklyGoal: inputGoalPub,
      weeklycompledted: 0,
    };
  
    setPublicTodos((prevPublicTodos) => {
      const updatedPublicTodos = [...prevPublicTodos, newPublicTodo];
      return updatedPublicTodos;
    });
  
    const publicTodoDocRef = doc(publicTodoCollection, docRef.id);
    const publicTodoSnapshot = await getDoc(publicTodoDocRef);
  
    if (publicTodoSnapshot.exists()) {
      const publicTodoData = publicTodoSnapshot.data();
      const currentUser = data?.user;
  
      if (
        currentUser &&
        publicTodoData.joinedUsers &&
        publicTodoData.joinedUsers[currentUser.id]
      ) {
        return;
      }
  
      const joinedUser = { completed: false };
      const updatedJoinedUsers = {
        ...(publicTodoData.joinedUsers || {}),
        [currentUser.id]: joinedUser,
      };
  
      await updateDoc(publicTodoDocRef, { joinedUsers: updatedJoinedUsers });
  
      setPublicTodos((prevPublicTodos) => {
        const updatedPublicTodos = prevPublicTodos.map((todo) => {
          if (todo.id === docRef.id) {
            return {
              ...todo,
              joinedUsers: updatedJoinedUsers,
            };
          }
          return todo;
        });
        return updatedPublicTodos;
      });
    }
  
    setPublicInput("");
    setSelectedDate(null);
    setIsAdmin(true);
    setInputGoalPub(null);
    console.log('here');
    console.log(docRef.id);
    console.log('end');
    return docRef.id;
  };

      // pubic weeklygoal 입력
      const handleGoalSelectPub = (weeklyGoalPub) => {
        setInputGoalPub(weeklyGoalPub);
        setIsGoalOptionsOpenPub(false);
      };
  
     // public weeklygoal 옵션 토글
      const toggleGoalOptionsPub = () => {
        setIsGoalOptionsOpenPub(!isGoalOptionsOpenPub);
      };

  const toggleTodo = async (id, isPublic, weeklyGoal, weeklyCompleted) => {
    const collectionRef = isPublic ? publicTodoCollection : todoCollection;
    const todoDocRef = doc(collectionRef, id);
    const todoSnapshot = await getDoc(todoDocRef);

    if (todoSnapshot.exists()) {
      const todoData = todoSnapshot.data();
      const updatedCompleted = !todoData.completed;
      const updatedWeeklyCompleted = updatedCompleted ? weeklyCompleted + 1 : weeklyCompleted - 1;
      await updateDoc(todoDocRef, { completed: updatedCompleted });

      if (isPublic) {
        setPublicTodos(prevPublicTodos => {
          return prevPublicTodos.map(todo =>
            todo.id === id ? { ...todo, completed: updatedCompleted,  weeklyCompleted: updatedWeeklyCompleted } : todo
          );
        });
      } else {
        setTodos(prevTodos => {
          return prevTodos.map(todo =>
            todo.id === id 
            ? { ...todo, completed: updatedCompleted,  weeklyCompleted: updatedWeeklyCompleted } : todo
          );
        });
      }
     // if (updatedCompleted) {
     //   setWeeklyCompleted(weeklyCompleted => weeklyCompleted + 1);
     // } else {
     //   setWeeklyCompleted(weeklyCompleted => weeklyCompleted - 1);
     // }
    }
      
    };

    const calculateWeeklyCompletedCount = (todos, weekStart, weekEnd) => {
      let completedCount = 0;
      let goalCount = 0;
      todos.forEach((todo) => {
        if (todo.completed && isDateInRange(todo.date, weekStart, weekEnd)) {
          completedCount++;
        }
        if (isDateInRange(todo.date, weekStart, weekEnd)) {
          goalCount++;
        }
      });
      return `${completedCount}/${goalCount}`;
    };
  

//기존 deletetodo
/*
  const deleteTodo = async (id) => {
    const todoDoc = doc(todoCollection, id);
    const publicTodoDoc = doc(publicTodoCollection, id);
    
    const todoSnapshot = await getDoc(todoDoc);
    if(todoSnapshot.exists()) {
      const todoData = todoSnapshot.data();
  
      if(todoData.isPublic && todoData.administratorId!=data?.user.id) {
        const current_id = data?.user.id;
        delete todoData.joinedUsers[current_id];
        await updateDoc(publicTodoDoc, { joinedUsers:todoData.joinedUsers});
        return;
      }
    }
    
    try {
      // Delete from 'todoCollection' if exists
      const todoSnapshot = await getDoc(todoDoc);
      if (todoSnapshot.exists()) {
        await deleteDoc(todoDoc);
        setTodos((prevTodos) =>
          prevTodos.filter((todo) => todo.id !== id)
        );
      }
  
      // Remove from 'publicTodos'
      setPublicTodos((prevPublicTodos) => prevPublicTodos.filter((publicTodo) => publicTodo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
    try {
      // Delete from 'publicTodoCollection' if exists
      const publicTodoSnapshot = await getDoc(publicTodoDoc);
      if (publicTodoSnapshot.exists()) {
        await deleteDoc(publicTodoDoc);
        setPublicTodos((prevPublicTodos) =>
          prevPublicTodos.filter((publicTodo) => publicTodo.id !== id)
        );
      }
  
      // Remove from 'todos'
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

*/

  //그룹장이 그룹을 지우는 deletion 기능. 
  const deleteTodo = async (id) => {
    const todoDoc = doc(todoCollection, id);
    const publicTodoDoc = doc(publicTodoCollection, id);
    
    const todoSnapshot = await getDoc(todoDoc);
    if(todoSnapshot.exists()) {
      const todoData = todoSnapshot.data();
  
      if(todoData.isPublic && todoData.administratorId!=data?.user.id) {
        /*
        const current_id = data?.user.id;
        delete todoData.joinedUsers[current_id];
        await updateDoc(publicTodoDoc, { joinedUsers:todoData.joinedUsers});
        */
        return;
      }
    }
    
    try {
      // Delete from 'todoCollection' if exists
      const todoSnapshot = await getDoc(todoDoc);
      if (todoSnapshot.exists()) {
        await deleteDoc(todoDoc);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      }
  
      // Delete from 'publicTodoCollection' if exists
      const publicTodoSnapshot = await getDoc(publicTodoDoc);
      if (publicTodoSnapshot.exists()) {
        const publicTodoData = publicTodoSnapshot.data();
  
        // Check if the user is an administrator of the public todo
        if (publicTodoData.administratorId === data?.user?.id) {
          await deleteDoc(publicTodoDoc);
          setPublicTodos((prevPublicTodos) =>
            prevPublicTodos.filter((publicTodo) => publicTodo.id !== id)
          );
        }
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  //조인한 그룹을 내 퍼블릭 투두 목록에서 지우는 deletion 기능

  const deleteMyPublicTodo = async (id) => {
    const publicTodoDocRef = doc(publicTodoCollection, id);

    
    // Remove from user's public todo list if exists
    const publicTodoSnapshot = await getDoc(publicTodoDocRef);
    if (publicTodoSnapshot.exists()) {
      const publicTodoData = publicTodoSnapshot.data();
    

      // Check if the user is the owner of the public todo
      
        // Remove the public todo from the user's public todo list
        const updatedJoinedUsers = { ...publicTodoData.joinedUsers };
        delete updatedJoinedUsers[data?.user?.id];

        await updateDoc(publicTodoDocRef, { joinedUsers: updatedJoinedUsers });
      
    }
  
};



  
const joinPublicTodo = async (publicTodoId) => {
  const publicTodoDocRef = doc(publicTodoCollection, publicTodoId);
  const publicTodoSnapshot = await getDoc(publicTodoDocRef);

  if (publicTodoSnapshot.exists()) {
    const publicTodoData = publicTodoSnapshot.data();

    // Get the current user's information
    const currentUser = data?.user;

    // Check if the user has already joined
    if (
      currentUser &&
      publicTodoData.joinedUsers &&
      publicTodoData.joinedUsers[currentUser.id]
    ) {
      return;
    }

    // Update the joinedUsers field
    const joinedUser = { completed: false };
    const updatedJoinedUsers = {
      ...(publicTodoData.joinedUsers || {}),
      [currentUser.id]: joinedUser,
    };

    await updateDoc(publicTodoDocRef, { joinedUsers: updatedJoinedUsers });

    // Update the publicTodos state with the updated joinedUsers
    setPublicTodos((prevPublicTodos) => {
      const updatedPublicTodos = prevPublicTodos.map((todo) => {
        if (todo.id === publicTodoId) {
          return {
            ...todo,
            joinedUsers: updatedJoinedUsers,
          };
        }
        return todo;
      });
      return updatedPublicTodos;
    });
  }
};
    
  const toggleJoinedTodo = async (publicTodoId) => {
    const publicTodoDocRef = doc(publicTodoCollection, publicTodoId);
    const publicTodoSnapshot = await getDoc(publicTodoDocRef);

    if (publicTodoSnapshot.exists()) {
      const publicTodoData = publicTodoSnapshot.data();
      const updatedCompleted = !publicTodoData.completed;
      // Get the current user's information
      const currentUser = data?.user;
  
      // Check if the user has already joined
      if (
        currentUser &&
        publicTodoData.joinedUsers &&
        publicTodoData.joinedUsers[currentUser.id]
      ) {
        // User has already joined, so toggle the completed value
        const joinedUser = publicTodoData.joinedUsers[currentUser.id];
        const updatedCompleted = !joinedUser.completed;
        const updatedJoinedUsers = {
          ...publicTodoData.joinedUsers,
          [currentUser.id]: {
            ...joinedUser,
            completed: updatedCompleted,
          },
        };
  
        await updateDoc(publicTodoDocRef, { joinedUsers: updatedJoinedUsers });
  
        // Update the publicTodos state with the updated completed status
        setPublicTodos((prevPublicTodos) => {
          return prevPublicTodos.map((todo) => {
            if (todo.id === publicTodoId) {
              return {
                ...todo,
                joinedUsers: updatedJoinedUsers,
                completed: updatedCompleted,
              };
            }
            return todo;
          });
        });
      }
    }
  };


   
    
  return (
  <div style = {{ fontFamily: 'SUITE-Regular'}}>
    <div className="container py-4 mx-auto px-4">
      {/* 로그아웃 버튼 */}
      <div className="w-1/2 pr-4">
        <button className={styles.logoutButton} onClick={() => signOut()}>
          Logout
        </button>
      </div>

      {/*타이틀*/}
      <div className="container mt-20">
        <div class="my-3 border-solid border-2 border-black ...">
          <h1 className="text-3xl text-left pt-20 pb-5 px-5  font-bold text-black-500 bg-white">
           YES, "{data?.user?.name}" CAN DO!
          </h1>
        </div>
      </div>

      {/* 날짜 */}
        <div className="container mx auto ">
          <div class="border-solid border-2 border-black ...">
            <h1 className="text-xl text-center py-5 font-bold text-black-500 bg-white">
              {today()}
          </h1>
          </div>
        </div>
    
      {/*personal todo*/}
      <div className="container mx auto">
        <div class="flex flex-row">
          <div class="mr-1.5 my-3 basis-1/2 border-solid border-2 border-black ... bg-white">
            {/*퍼스널투두*/}
            <h1 className="my-5 mx-5 text-2xl text-left font-bold text-black-500">
              혼자 할 일
            {/* 혼자할일 아이콘 */}
            <button onClick={personalPopup}>
                ❓ 
                </button>
                </h1>
          {/* 혼자 할일 팝업 */}
          {personalPopupOpen && (
                  <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="flex justify-between mb-4">
                      <div
                    className="box"
                    style={{
                      position: "absolute",
                      width: 550,
                      height: 350,
                      border: "2px solid #000",
                      borderRadius: "15px",
                      boxSizing: "border-box",
                      transform: "translate(-50%,-50%)",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.6)",
                      // padding: "10px",
                    }}
                  >
                    <button onClick={personalPopup}
                    style={{ marginLeft: '5px' }}>
                    X
                      </button>
                    <h2 className="text-2xl text-center m-4 font-bold"style={{marginTop: "-5px" }}>▶ 혼자 할 일</h2>
                    <h3 className="text-xl  m-4"style={{ margin: "0.20rem 0", marginLeft: "2rem",marginRight: "2rem" ,marginTop: "35px" }}>
                    ● 생활 루틴, 과제, 약속 등 나의 할 일을 기록합니다. 이 필드는 나에게만 보입니다! 
                    </h3>
                    <h3 className="text-xl  m-4"style={{margin: "0.20rem 0", marginLeft: "2rem",marginRight: "2rem"}}>
                    ● 입력창에 할 일을 입력하고 추가하기 버튼을 눌러 리스트업합니다. 할 일을 완료했다면 체크박스를 누르세요!
                    </h3>
                    <h3 className="text-xl  m-4"style={{margin: "0.20rem 0", marginLeft: "2rem",marginRight: "2rem"}}>
                    ● 삭제하려면 '할 일 삭제하기' 버튼을 누릅니다.
                    </h3>
                      </div>
                      </div>
                  </div>
                )}
            
            <div class="flex items-center">
              <div class=" mr-10 grow">
                {/* 퍼스널 투두 입력창 */}
                <input
                type="text"
                className="mx-10 my-4 shadow-lg w-10/12 p-1 mb-4 border border-gray-300 rounded"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="혼자 할 일 추가" // 검색창에 연한 회색 글씨 띄우기
                />
              </div>
               {/* 주n회 검색 아이콘 */}
            <div className="flex items-center ">
                <button onClick={weekPopup} className="text-sm text-gray-500 mx-auto block ">
                ❓ 
                </button>
              </div>
                        {/* 주n회 검색 팝업 */}
                {weekPopupOpen && (
                  <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="flex justify-between mb-4">
                      <div
                    className="box"
                    style={{
                      position: "absolute",
                      width: 550,
                      height: 350,
                      border: "2px solid #000",
                      borderRadius: "15px",
                      boxSizing: "border-box",
                      transform: "translate(-50%,-50%)",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.6)",
                      // padding: "10px",
                    }}
                  >
                    <button onClick={weekPopup}
                    style={{ marginLeft: '5px' }}>
                    X
                      </button>
                    <h2 className="text-2xl text-center m-4 font-bold"style={{marginTop: "-5px" }}>▶ 주 몇 회 할지 설정</h2>
                    <h3 className="text-xl  m-4"style={{ margin: "0.20rem 0", marginLeft: "2rem",marginRight: "2rem" ,marginTop: "60px" }}>
                    ● 할 일을 추가하기 전 주 몇 회 할 것인지 계획해봅시다!
                    </h3>
                    <h3 className="text-xl  m-4"style={{margin: "0.20rem 0", marginLeft: "2rem",marginRight: "2rem"}}>
                    ● 'n'을 누르고 숫자를 클릭한 후 추가하기 버튼을 누르면 됩니다.
                    </h3>
                      </div>
                      </div>
                  </div>
                )}{/* 여기*/}

                <div class=" mr-10 grow-0">
                  주&nbsp;
                  <button onClick={toggleGoalOptions}>
                  {inputGoal ? inputGoal : "n"}회
                  </button>
                  {isGoalOptionsOpen && (
                    <ul>
                      {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                        <li key={num} onClick={() => handleGoalSelect(num)}>
                        {num}
                      </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div>
                  <button class="bg-gray-900 text-white font-bold mx-4 my-4 py-2 px-4 rounded-full"
                  onClick={() => {addTodo();}}
                  >
                  추가하기
                  </button>
                </div>
                </div>
                <div className="text-sm text-white mx-auto block">____</div>
                {/*퍼스널 투두 리스트*/}
                <div>
                <h1 className="my-4 mx-5 text-xl text-left font-bold text-black-500">
                    할 일 목록
                  </h1>
                  {/* 퍼스널 투두 리스트 목록 */}
                  <div >
                    <ul>
                    {todos
                        .filter((todo) => !todo.completed)
                        .map((todo) => (
                          <TodoItem
                            key={todo.id}
                            todo={todo}
                            onToggle={() => toggleTodo(todo.id)}
                            onDeletePer={() => deleteTodo(todo.id)}
                            
                          />
                        ))}
                    </ul>
                  </div>
                  {/* 퍼스널 컴플리트 투두 목록 */}
                  <div>
                    <ul>
                      {todos
                          .filter((todo) => todo.completed)
                          .map((todo) => (
                            <TodoItem
                              key={todo.id}
                              todo={todo}
                              weeklyGoal={weeklyGoal} // weeklyGoal prop 전달
                              onToggle={() => toggleTodo(todo.id)}
                              onDeletePer={() => deleteTodo(todo.id)}  
                            />
                          ))} 
                    </ul>                                      
                  </div> 
                </div>
                {/* 퍼스널 Todo 달성도 */}
                <div className="w-3/3"></div>
                <h2 className="my-4 mx-5 text-xl text-left font-bold text-black-500">혼자 할 일 달성도 {/* 혼자할일 아이콘 */}
                <button onClick={personalcomPopup}>
                ❓ 
                </button>
                </h2>
          {/* 혼자 할일 달성도 팝업 */}
          {personalcomPopupOpen && (
                  <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="flex justify-between mb-4">
                      <div
                    className="box"
                    style={{
                      position: "absolute",
                      width: 550,
                      height: 350,
                      border: "2px solid #000",
                      borderRadius: "15px",
                      boxSizing: "border-box",
                      transform: "translate(-50%,-50%)",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.6)",
                      // padding: "10px",
                    }}
                  >
                    <button onClick={personalcomPopup}
                    style={{ marginLeft: '5px' }}>
                    X
                      </button>
                    <h2 className="text-2xl text-center m-4 font-bold"style={{marginTop: "-5px" }}>▶ 혼자 할 일 달성도</h2>
                    <h3 className="text-xl  m-4"style={{ margin: "0.20rem 0", marginLeft: "2rem",marginRight: "2rem" ,marginTop: "60px" }}>
                    ● 오늘 등록한 혼자 할 일들을 얼마나 달성했는지를 보여줍니다.
                    </h3>
                    <h3 className="text-xl  m-4"style={{margin: "0.20rem 0", marginLeft: "2rem",marginRight: "2rem"}}>
                    ● 꼭 100%를 달성해봅시다!
                    </h3>
                      </div>
                      </div>
                  </div>
                )}

                <div className="my-5 mx-10">
                  <svg viewBox="0 0 800 50">

                    <rect
                      x="0"
                      y="0"
                      width="800"
                      height="45"
                      fill="#e6e6e6"
                      rx="10"
                    />
                    <rect
                      x="0"
                      y="0"
                      width={personalCompletionPercentage()}
                      height="45"
                      fill="#ec4899"
                      rx="10"
                    />
                    <text
                      x={personalCompletionPercentage() - 100}
                      y="55%"
                      dominantBaseline="middle"
                      textAnchor="start"
                      fontSize="30"
                    >
                      {personalCompletionPercentageindex()}%
                      </text>
                    </svg>
                  </div>
              </div>

              <div class="ml-1.5 my-3 basis-1/2 border-solid border-2 border-black ... bg-white">
            {/*퍼블릭투두*/}
            <h1 className="my-5 mx-5 text-2xl text-left font-bold text-black-500">
              함께 할 일
            {/* 함께할일 아이콘 */}
            <button onClick={publicPopup}>
                ❓ 
                </button>
                </h1>
          {/* 함께 할일 팝업 */}
          {publicPopupOpen && (
                  <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="flex justify-between mb-4">
                      <div
                    className="box"
                    style={{
                      position: "absolute",
                      width: 550,
                      height: 350,
                      border: "2px solid #000",
                      borderRadius: "15px",
                      boxSizing: "border-box",
                      transform: "translate(-50%,-50%)",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.6)",
                      // padding: "10px",
                    }}
                  >
                    <button onClick={publicPopup}
                    style={{ marginLeft: '5px' }}>
                    X
                      </button>
                    <h2 className="text-2xl text-center m-4 font-bold"style={{marginTop: "-5px" }}>▶ 함께 할 일</h2>
                    <h3 className="text-xl  m-4"style={{ margin: "0.20rem 0", marginLeft: "2rem",marginRight: "2rem" ,marginTop: "30px" }}>
                    ● 같은 목표를 다른 사람들과 공유합니다. 혼자 있을 때는 미루게 되는 일들, 그룹원들과 함께 해봅시다!
                    </h3>
                    <h3 className="text-xl  m-4"style={{margin: "0.20rem 0", marginLeft: "2rem",marginRight: "2rem"}}>
                    ● 다른 함께 할 일 찾아보기에서 이미 존재하는 그룹에 들어갈 수도, 추가하기 버튼을 눌러 내가 직접 그룹을 만들 수도 있습니다. 
                    </h3>
                    <h3 className="text-xl  m-4"style={{margin: "0.20rem 0", marginLeft: "2rem",marginRight: "2rem"}}>
                    ● '🗑'를 눌러 내가 만든 함께 할 일은 모든 사람들에게서 삭제할 수도, '❌'를 눌러 내 목록에서만 삭제할 수도 있습니다.
                    </h3>
                      </div>
                      </div>
                  </div>
                )}

            
            <div className="flex items-center">
              <div class="mr=10 grow">
                {/* 퍼블릭 투두 추가창 */}
                <input 
                type="text"
                className="mx-10 my-4 shadow-lg w-10/12 p-1 mb-4 border border-gray-300 rounded"
                value={publicInput}
                onChange={(e) => setPublicInput(e.target.value)}
                placeholder="함께 할 일 추가 " // 검색창에 연한 회색 글씨 띄우기
                />
              </div>
           {/* 주n회 검색 아이콘 */}
           <div className="flex items-center ">
                <button onClick={weekPopup} className="text-sm text-gray-500 mx-auto block">
                ❓ 
                </button>
              </div>
          {/* 주n회 검색 팝업 */}
          {weekPopupOpen && (
                  <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="flex justify-between mb-4">
                      <div
                    className="box"
                    style={{
                      position: "absolute",
                      width: 550,
                      height: 350,
                      border: "2px solid #000",
                      borderRadius: "15px",
                      boxSizing: "border-box",
                      transform: "translate(-50%,-50%)",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.6)",
                      // padding: "10px",
                    }}
                  >
                    <button onClick={weekPopup}
                    style={{ marginLeft: '5px' }}>
                    X
                      </button>
                    <h2 className="text-2xl text-center m-4 font-bold"style={{marginTop: "-5px" }}>▶ 주 몇 회 할지 설정</h2>
                    <h3 className="text-xl  m-4"style={{ margin: "0.20rem 0", marginLeft: "2rem",marginRight: "2rem" ,marginTop: "60px" }}>
                    ● 할 일을 추가하기 전 주 몇 회 할 것인지 계획해봅시다!
                    </h3>
                    <h3 className="text-xl  m-4"style={{margin: "0.20rem 0", marginLeft: "2rem",marginRight: "2rem"}}>
                    ● 'n'을 누르고 숫자를 클릭한 후 추가하기 버튼을 누르면 됩니다.
                    </h3>
                      </div>
                      </div>
                  </div>
                )}

              <div class="mr-10 grow-0">
               주&nbsp;
                <button onClick={toggleGoalOptionsPub}>
                  {inputGoalPub ? inputGoalPub : "n"}회
                </button>
                  {isGoalOptionsOpenPub && (
                    <ul>
                     {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <li key={num} onClick={() => handleGoalSelectPub(num)}>
                      {num}
                     </li>
                     ))}
                  </ul>
                 )}
              </div>
              <div>
                <button class="bg-gray-900 text-white font-bold mx-4 my-4 py-2 px-4 rounded-full"
                  onClick={() => {addPublicTodo();}}
                  >
                    추가하기
                </button>
              </div>
            </div>
            <div className="flex items-center ">
                <button onClick={toggleSearchPopup} className="text-sm text-gray-500 "
                style={{ marginLeft: '40px' }}>
                  🔎 다른 함께 할 일 찾아보기
                  
                </button>
                {/* 다른 함께 할일 아이콘 */}
      <button onClick={otherpublicPopup}>
                ❓ 
                </button>
              </div>
          {/* 다른 함께 할일 팝업 */}
          {otherpublicPopupOpen && (
                  <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="flex justify-between mb-4">
                      <div
                    className="box"
                    style={{
                      position: "absolute",
                      width: 550,
                      height: 350,
                      border: "2px solid #000",
                      borderRadius: "15px",
                      boxSizing: "border-box",
                      transform: "translate(-50%,-50%)",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.6)",
                      // padding: "10px",
                    }}
                  >
                    <button onClick={otherpublicPopup}
                    style={{ marginLeft: '5px' }}>
                    X
                      </button>
                    <h2 className="text-2xl text-center m-4 font-bold"style={{marginTop: "-5px" }}>▶ 다른 함께 할 일 찾아보기</h2>
                    <h3 className="text-xl  m-4"style={{ margin: "0.20rem 0", marginLeft: "2rem",marginRight: "2rem" ,marginTop: "60px" }}>
                    ● 클릭하여 다른 사람이 만든 함께 할 일을 검색할 수 있습니다.
                    </h3>
                    <h3 className="text-xl  m-4"style={{margin: "0.20rem 0", marginLeft: "2rem",marginRight: "2rem"}}>
                    ● '참여하기'를 누르면 다른 함께 할 일이 내 목록에 리스트업됩니다!
                    </h3>
                      </div>
                      </div>
                  </div>
                )}
            {/* 퍼블릭 검색 아이콘 */}
            
              {/* 퍼블릭 검색 팝업 */}
      {isSearchPopupOpen && (
        <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
          <div className="flex justify-between mb-4">
            <button onClick={toggleSearchPopup}>
            X
            </button>
            </div>
            <input
              type="text"
              className="shadow-lg w-full p-1 mb-4 border border-gray-300 rounded"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="함께 할 일 검색 :"
            />
            {/* 퍼블릭 검색 결과 목록 */}
            <div style={{ height: "400px", overflowY: "scroll" }}>
            <ul>
              {searchResults.map((result) => (
                <li key={result.id}>
                  <span>{result.text}</span>
                  {!result.joined && (
                    <button onClick={() => joinPublicTodo(result.id)}
                    className="ml-auto">
                      참여하기
                    </button>
                  )}
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      )}

{/* 퍼블릭투두 리스트 */}
            <div>
            <h1 className="my-4 mx-5 text-xl text-left font-bold text-black-500">
                    할 일 목록
                  </h1>
            <div>
            <ul>
             {publicTodos
              .filter((publicTodo) => publicTodo.joinedUsers && publicTodo.joinedUsers[data?.user.id])
              .filter((publicTodo) => !publicTodo.joinedUsers[data?.user.id].completed)
              .map((todo) => (
                <TodoItem
                   key={todo.id}
                   todo={todo}
                   onToggle={() => toggleJoinedTodo(todo.id)}
                   currentUserId={data?.user.id}
                   administratorId={todo.administratorId}
                   onDelete={() => deleteTodo(todo.id)}
                   onDeletePub={() => deleteMyPublicTodo(todo.id)}
                  />
                 ))}   
            </ul>
            </div>
            <ul>
          {publicTodos
              .filter((publicTodo) => publicTodo.joinedUsers && publicTodo.joinedUsers[data?.user.id])
              .filter((publicTodo) => publicTodo.joinedUsers[data?.user.id].completed)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={() => toggleJoinedTodo(todo.id)}
                  onDelete={() => deleteTodo(todo.id)}
                  administratorId={todo.administratorId}
                  currentUserId={data?.user.id}
                  onDeletePub={() => deleteMyPublicTodo(todo.id)}
                />
              ))
            } 
        </ul>
        </div>
                {/* 퍼블릭 Todo 달성도 */}
                <h2 className="my-4 mx-5 text-xl text-left font-bold text-black-500">함께 할 일 달성도{/* 함께할일 참여도 아이콘 */}
             <button onClick={publiccomPopup}>
                ❓ 
                </button>
                </h2>
          {/* 함께 할일 참여도 팝업 */}
          {publiccomPopupOpen && (
                  <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="flex justify-between mb-4">
                      <div
                    className="box"
                    style={{
                      position: "absolute",
                      width: 550,
                      height: 350,
                      border: "2px solid #000",
                      borderRadius: "15px",
                      boxSizing: "border-box",
                      transform: "translate(-50%,-50%)",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.6)",
                      // padding: "10px",
                    }}
                  >
                    <button onClick={publiccomPopup}
                    style={{ marginLeft: '5px' }}>
                    X
                      </button>
                    <h2 className="text-2xl text-center m-4 font-bold"style={{marginTop: "-5px" }}>▶ 함께 할 일 달성도</h2>
                    <h3 className="text-xl  m-4"style={{ margin: "0.20rem 0", marginLeft: "2rem",marginRight: "2rem" ,marginTop: "60px" }}>
                    ● 같은 할 일을 공유하는 사람들이 얼마나 해당 목표를 달성했는지 보여줍니다. 
                    </h3>
                    <h3 className="text-xl  m-4"style={{margin: "0.20rem 0", marginLeft: "2rem",marginRight: "2rem"}}>
                    ● 해당 함께 할 일을 참여한 모든 사람 중 이를 달성한 사람의 비율을 보여줍니다.
                    </h3>
                      </div>
                      </div>
                  </div>
                )}

                <div>
                  <ul className="my-5 mx-10">
                {publicTodos
                  .filter((publicTodo) => publicTodo.joinedUsers && publicTodo.joinedUsers[data?.user.id])
                  .map((publicTodo) => {
                    const { completedCount, totalCount } = calculatePublicTodoCompletion(publicTodo);
                    const completionPercentage = totalCount !== 0 ? Math.round((completedCount / totalCount) * 100) : 0;
                    const displayText = `${completedCount}/${totalCount}`;
                    return (
                      <li key={publicTodo.id} className="flex items-center mb-2">
                        <span className="w-1/2">{publicTodo.text} : {displayText} (달성/전체)</span>
                        <div className="w-1/2 flex items-center">    
                          <div className="relative w-full h-4 bg-gray-300 rounded">
                             <div className="absolute top-0 left-0 h-full bg-pink-500 rounded"
                                style={{ width: `${completionPercentage}%` }}> 
                               </div>
                            </div>
                         <span className="ml-2">{completionPercentage}%</span>
                       </div>
                     </li>
                    );
                  })}
              </ul>
              </div>
              </div>
            </div>
          </div>
       </div>
       </div>
  );
}
export default TodoList;