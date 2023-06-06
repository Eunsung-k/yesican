import React, { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import TodoItem from "@/components/TodoItem";
import styles from "@/styles/TodoList.module.css";

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
const myPublicTodoCollection = collection (db, "myPublicTodos");

const handleLogout = async () => {
  await signOut();
};

const today =  () => {
  let now = new Date(); //현재 날짜 및 시간
  const month = new Array('January','February', 'March', 'April','May','June','July','August','September','October','November','December');
  let todayMonth = month[now.getMonth()];
  let todayDate = now.getDate() // 현재 날짜
  const week = new Array('Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday');
  let dayWeek = week[now.getDay()]; //weekday에 지정된 날짜의 요일(0~6)반환

  let daySuffix = 'th';
  if (todayDate === 1 || todayDate === 21 || todayDate === 31) {
    daySuffix = 'st';
  } else if (todayDate === 2 || todayDate === 22) {
    daySuffix = 'nd';
  } else if (todayDate === 3 || todayDate === 23) {
    daySuffix = 'rd';
  }

  return dayWeek + ', ' + todayMonth + ' ' + todayDate + daySuffix;
}

// TodoList 컴포넌트를 정의합니다.
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [publicTodos, setPublicTodos] = useState([]);
  const [myPublicTodos, setMyPublicTodos] = useState([]); // myPublicTodo 카테고리 추가
  const [input, setInput] = useState("");
  const [publicInput, setPublicInput] = useState(""); // public 카테고리 인풋 추가. 
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const personalCompletionPercentage = () => {
    const completedCount = todos.filter((todo) => todo.completed).length;
    const totalCount = todos.length;
    const percentage = totalCount !== 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    const barWidth = (440 * percentage) / 100; // 가로 막대의 너비
    
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

  //검색
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //join
  const [joinableTodoId, setJoinableTodoId] = useState(null);

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
  
    const getUserTodos = async () => {
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


  // addTodo 함수는 입력값을 이용하여 새로운 할 일을 목록에 추가하는 함수입니다.
  const addTodo = async() => {
    // 입력값이 비어있는 경우 함수를 종료합니다.
    if (input.trim() === "") return;
    const docRef = await addDoc(todoCollection, {
      userId: data?.user?.id,
      text: input,
      completed: false,
      date: selectedDate,
      time: selectedTime,
      datetime: new Date(),
      isPublic: false,
    });

    const newTodo = {id: docRef.id, text: input, completed: false, date: selectedDate, time: selectedTime };
    setTodos([...todos, newTodo]);
    setInput("");
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const addPublicTodo = async() => {
    if (publicInput.trim() === "") return;
    const docRef = await addDoc(publicTodoCollection, {
      text: publicInput,
      completed: false,
      date: selectedDate,
      time: selectedTime,
      datetime: new Date(),
      isPublic: true,
      administratorId: data?.user?.id, // Set the administrator ID
  });
    const newPublicTodo = {id: docRef.id, text: publicInput, completed: false, date: selectedDate, time: selectedTime};
    setPublicTodos([...publicTodos, newPublicTodo]);
    setPublicInput("");
    setSelectedDate(null);
    setSelectedTime(null);
    console.log('here');
    console.log(docRef.id);
    console.log('end');
    return docRef.id;
  };


  const toggleTodo = async (id, isPublic) => {
  const collectionRef = isPublic ? publicTodoCollection : todoCollection;
  const todoDocRef = doc(collectionRef, id);
  const todoSnapshot = await getDoc(todoDocRef);

  if (todoSnapshot.exists()) {
    const todoData = todoSnapshot.data();
    const updatedCompleted = !todoData.completed;

    await updateDoc(todoDocRef, { completed: updatedCompleted });

    if (isPublic) {
      setPublicTodos(prevPublicTodos => {
        return prevPublicTodos.map(todo =>
          todo.id === id ? { ...todo, completed: updatedCompleted } : todo
        );
      });
    } else {
      setTodos(prevTodos => {
        return prevTodos.map(todo =>
          todo.id === id ? { ...todo, completed: updatedCompleted } : todo
        );
      });
    }
  }
};

  
  
  

  const deleteTodo = async (id) => {
    const todoDoc = doc(todoCollection, id);
    const publicTodoDoc = doc(publicTodoCollection, id);
    
    const todoSnapshot = await getDoc(publicTodoDoc);
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
      }
    };
    
    const toggleJoinedTodo = async (publicTodoId) => {
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
          // User has already joined, so toggle the completed value
          const joinedUser = publicTodoData.joinedUsers[currentUser.id];
          const updatedJoinedUsers = {
            ...publicTodoData.joinedUsers,
            [currentUser.id]: {
              ...joinedUser,
              completed: !joinedUser.completed,
            },
          };
    
          await updateDoc(publicTodoDocRef, { joinedUsers: updatedJoinedUsers });
        }
      }
    };    
    
  return (
    <div className={styles.container}>
      <div className="w-1/2 pr-4">
        <button className={styles.logoutButton} onClick={() => signOut()}>
          Logout
        </button>
      </div>
      <h1 className="text-2xl mt-10 font-bold  text-pink-500">
        YES {data?.user?.name} CAN DO
      </h1>
      <h2 className="text-xl text-center my-10 font-bold text-black-500">
        {today()} 
        </h2>
      <div className={styles.inputContainer}></div>
      Personal Todo
      <input
        type="text"
        className="shadow-lg w-full p-1 mb-4 border border-gray-300 rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="personal todo 입력" // 검색창에 연한 회색 글씨 띄우기
      />
      <input
        type="date"
        className={styles.itemInput}
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)} 
        />
      <input
        type="time"
        className={styles.itemInput}
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
      />
      <div class="grid">
        <button
          className="w-40 justify-self-end p-1 mb-4 bg-pink-500 text-white border border-pink-500 rounded hover:bg-white hover:text-pink-500"
          onClick={() => {
            addTodo();
          }}
        >
          Add Todo
        </button>
        <div className="w-3/3 ">
        <h2 className="text-lg font-medium mb-2">Personal Todo List</h2>
         {/* Todo 달성도를 가로 막대 그래프로 시각화 */}
<div className="flex items-center justify-center pr-10">
  <svg width="500" height="30" viewBox="0 0 700 30">
    <text
      x="0"
      y="40%"
      dominantBaseline="middle"
      textAnchor="start"
      fontSize="20
      "
    >
      personal Todo 달성도
    </text>
    <rect
      x="200"
      y="0"
      width="440"
      height="20"
      fill="#e6e6e6"
      rx="10"
    />
    <rect
      x="200"
      y="0"
      width={personalCompletionPercentage()}
      height="20"
      fill="#ec4899"
      rx="10"
    />
    <text
      x={200 + personalCompletionPercentage() + 10}
      y="40%"
      dominantBaseline="middle"
      textAnchor="start"
      fontSize="18"
    >
      {personalCompletionPercentageindex()}%
    </text>
  </svg>
</div>

        <ul>
          {todos
              .filter((todo) => !todo.completed)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={() => toggleTodo(todo.id)}
                  onDelete={() => deleteTodo(todo.id)}
                />
              ))}
        </ul>
      </div>
      <div className="w-3/3 pl-4">
        <h2 className="text-lg font-medium mb-2">Completed Todo</h2>
        <ul>
          {todos
              .filter((todo) => todo.completed)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={() => toggleTodo(todo.id)}
                  onDelete={() => deleteTodo(todo.id)}
                />
              ))} 
        </ul>
      </div>  
    </div>
     
{/* public section rendering */}
    <div className={styles.inputContainer}></div>
      Public Todo
      <input
       type="text"
       className="shadow-lg w-full p-1 mb-4 border border-gray-300 rounded"
       value={searchInput}
       onChange={(e) => setSearchInput(e.target.value)}
       placeholder="public todo 검색" // 검색창에 연한 회색 글씨 띄우기
    />

{/* 검색 결과를 출력합니다. */}
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
          <span>{result.text}</span>
          {!result.joined && (
            <button 
              onClick={() => {
                joinPublicTodo(result.id);}}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Join
            </button>
          )}
        </li>
        ))}
      </ul>
      <input
        type="text"
        className="shadow-lg w-full p-1 mb-4 border border-gray-300 rounded"
        value={publicInput}
        onChange={(e) => setPublicInput(e.target.value)}
        placeholder="public todo 입력" // 검색창에 연한 회색 글씨 띄우기
      />
      <input
        type="date"
        className={styles.itemInput}
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)} 
        />
      <input
        type="time"
        className={styles.itemInput}
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
      />
      <div class="grid">
        <button
          className="w-40 justify-self-end p-1 mb-4 bg-pink-500 text-white border border-pink-500 rounded hover:bg-white hover:text-pink-500"
          onClick={() => {
            const promise = addPublicTodo();
            promise.then((doc_id) => joinPublicTodo(doc_id));
          }}
        >
          Add Todo
        </button>
       {/* 2. Public Todo 달성도 표시 */}
      <div className="w-3/3 pl-4">
        <h2 className="text-lg font-medium mb-2">Public Todo 달성도</h2>
        <ul>
          {publicTodos.map((publicTodo) => {
            const { completedCount, totalCount } = calculatePublicTodoCompletion(publicTodo);
            const completionPercentage = totalCount !== 0 ? Math.round((completedCount / totalCount) * 100) : 0;
            const displayText = `${completedCount}/${totalCount}`;
            return (
              <li key={publicTodo.id} className="flex items-center mb-2">
                <span className="w-1/2">{publicTodo.text} : {displayText} (완료/전체)</span>

                <div className="w-1/2 flex items-center">
                  <div className="relative w-full h-4 bg-gray-300 rounded">
                    <div
                      className="absolute top-0 left-0 h-full bg-pink-500 rounded"
                      style={{ width: `${completionPercentage}%` }}
                    ></div>
                  </div>
                  <span className="ml-2">{completionPercentage}%</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
        <div className="w-3/3">
        <h2 className="text-lg font-medium mb-2">Public Todo List</h2>
        <ul>
          {publicTodos
            .filter((publicTodo) => publicTodo.joinedUsers && publicTodo.joinedUsers[data?.user.id])
            .map(todo => (
              <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={() => toggleJoinedTodo(todo.id)}
                  onDelete={() => deleteTodo(todo.id)}
                />
))}

</ul>

      </div>
      <div className="w-3/3 pl-4">
        <h2 className="text-lg font-medium mb-2">Completed Todo</h2>
        <ul>
          {publicTodos
              .filter((publicTodo) => publicTodo.isPublic)
              .filter((publicTodo) => publicTodo.completed)
              .filter((publicTodo) => publicTodo.joinedUsers && publicTodo.joinedUsers[data?.user.id])
              .map((publicTodo) => (
                <TodoItem
                  key={publicTodo.id}
                  todo={publicTodo}
                  onToggle={() => toggleTodo(publicTodo.id)}
                  onDelete={() => deleteTodo(publicTodo.id)}
                />
              ))
            } 
        </ul>
      </div>
    </div>
  </div>
  );
};
export default TodoList;