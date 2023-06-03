/* 
  할 일 목록을 관리하고 렌더링하는 주요 컴포넌트입니다.
  상태 관리를 위해 `useState` 훅을 사용하여 할 일 목록과 입력값을 관리합니다.
  할 일 목록의 추가, 삭제, 완료 상태 변경 등의 기능을 구현하였습니다.
*/
import React, { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import TodoItem from "@/components/TodoItem";
import styles from "@/styles/TodoList.module.css";

import { db } from "@/firebase";
import {
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
import tailwindConfig from "../../tailwind.config";

// DB의 todos 컬렉션 참조를 만듭니다. 컬렉션 사용시 잘못된 컬렉션 이름 사용을 방지합니다.
const todoCollection = collection(db, "todos");
const publicTodoCollection = collection (db, "publicTodos");
const myPublicTodoCollection = collection (db, "myPublicTodos");

const handleLogout = async () => {
  await signOut();
};

// TodoList 컴포넌트를 정의합니다.
const TodoList = () => {
  // 상태를 관리하는 useState 훅을 사용하여 할 일 목록과 입력값을 초기화합니다.
  const [todos, setTodos] = useState([]);
  const [publicTodos, setPublicTodos] = useState([]);
  const [myPublicTodos, setMyPublicTodos] = useState([]); // myPublicTodo 카테고리 추가
  const [input, setInput] = useState("");
  const [publicInput, setPublicInput] = useState(""); // public 카테고리 인풋 추가. 
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // personal 달성도 원 그래프로 시각화
  const personalCompletionPercentage = () => {
    const completedCount = todos.filter((todo) => todo.completed).length;
    const totalCount = todos.length;
    const percentage = totalCount !== 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    const circumference = 2 * Math.PI * 50; // 원의 둘레
  
    // strokeDasharray에 적용할 값 계산
    const strokeLength = (circumference * percentage) / 100;
    const gapLength = circumference - strokeLength;
  
    return `${strokeLength}, ${gapLength}`;
  };

  // 달성도를 0-100사이 숫자로 리턴
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
    totalTasks++;
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
  };

const toggleTodo = async (id, isPublic) => {
  const collectionRef = isPublic ? publicTodoCollection : todoCollection;
  const todoDocRef = doc(collectionRef, id);
  const todoSnapshot = await getDoc(todoDocRef);

 
  
  if (todoSnapshot.exists()) {
    
  

    const todoData = todoSnapshot.data();
    const updatedCompleted = !todoData.completed;
    
    await updateDoc(todoDocRef, { completed: updatedCompleted });
    
    const updatedTodos = isPublic ? [...publicTodos] : [...todos];
    const todoIndex = updatedTodos.findIndex((todo) => todo.id === id);

    
    if (todoIndex !== -1) {
      updatedTodos[todoIndex] = { ...updatedTodos[todoIndex], completed: updatedCompleted };
      
      if (isPublic) {
        setPublicTodos(updatedTodos);
      } else {
        setTodos(updatedTodos);
      }
    }
  
}
};
  
  // deleteTodo 함수는 할 일을 목록에서 삭제하는 함수입니다.
    // 해당 id를 가진 할 일을 제외한 나머지 목록을 새로운 상태로 저장합니다.
    // setTodos(todos.filter((todo) => todo.id !== id));
    // 해당 id를 가진 할 일을 찾아 삭제합니다.
    const deleteTodo = async (id) => {
      const todoDoc = doc(todoCollection, id);
      const todoSnapshot = await getDoc(todoDoc);
    
      if (todoSnapshot.exists()) {
        const todoData = todoSnapshot.data();
    
        // Check if the user is the administrator before allowing the deletion
        if (todoData.isPublic) {
          if (todoData.administratorId === data?.user?.id){
          await deleteDoc(todoDoc);
          setPublicTodos(
            publicTodos.filter((publicTodo) => publicTodo.id !== id)
          );
          }
        } else {
          deleteDoc(todoDoc);
          setTodos(todos.filter((todo) => {
        return todo.id !== id;
      })
          );

        }
      }
    };

// 사용자가 'publicTodo'에 join하는 함수
const joinPublicTodo = (userId, publicTodoId) => {
  // 'publicTodos'에서 해당 publicTodo 가져오기
  const publicTodoRef = doc(db, "publicTodos", doc.id); // publicTodo에 입력 안되는 문제 해결하고 다시 시험해봐야 함.
  getDoc(publicTodoRef)
    .then((publicTodoSnapshot) => {
      if (publicTodoSnapshot.exists()) {
        // publicTodo의 할 일 데이터 가져오기
        const publicTodoData = publicTodoSnapshot.data();

        // 'myPublicTodos'에서 사용자 문서 가져오기
        const userDocRef = doc(db, "myPublicTodos", userId);
        return getDoc(userDocRef)
          .then((userDocSnapshot) => {
            if (userDocSnapshot.exists()) {
              // 이미 해당 사용자의 문서가 존재하면 할 일 추가
              const todos = userDocSnapshot.data().todos || [];
              const updatedTodos = [...todos, publicTodoData.todo];
              return updateDoc(userDocRef, { todos: updatedTodos });
            } else {
              // 해당 사용자의 문서가 존재하지 않으면 새로 생성하고 할 일 추가
              const data = { todos: [publicTodoData.todo] };
              return setDoc(userDocRef, data);
            }
          })
          .then(() => {
            console.log('Join completed successfully!');
          })
          .catch((error) => {
            console.error('Error updating/creating user document:', error);
          });
      } else {
        console.log('Public todo does not exist!');
      }
    })
    .catch((error) => {
      console.error('Error getting publicTodo:', error);
    });
};

// 사용 예시: joinPublicTodo('userId', 'publicTodoId');
// 사용 예시: checkPublicTodo('userId', 'publicTodoId', true);


  // Join 버튼을 클릭할 때 실행되는 함수
  // const joinPublicTodo = (id) => {
  //   // Join 가능한 publicTodo의 id를 설정합니다.
  //   setJoinableTodoId(id);
  // };

  // // Join 가능한 publicTodo의 id를 이용하여 해당 publicTodo를 가져오는 함수
  // const getJoinableTodo = (id) => {
  //   return publicTodos.find((publicTodo) => publicTodo.id === id);
  // };

  // // Join 가능한 publicTodo를 가져오고 해당 publicTodo의 구성원 수행 여부를 확인할 수 있게 합니다.
  // const joinableTodo = joinableTodoId ? getJoinableTodo(joinableTodoId) : null;

  // // Join 가능한 publicTodo에 대한 구성원 수행 여부 체크 기능
  // const checkMemberCompletion = (memberId) => {
  //   memberId에 해당하는 사용자의 수행 여부를 확인하는 로직을 추가합니다.
  //   구성원의 수행 여부를 표시하거나 처리할 수 있는 컴포넌트를 렌더링합니다.
  // };
  
  return (
    <div className={styles.container}>
      <div className="w-1/2 pr-4">
        <button className={styles.logoutButton} onClick={() => signOut()}>
          Logout
        </button>
      </div>
      <h1 className="text-xl mb-4 font-bold underline underline-offset-4 decoration-wavy text-pink-500">
        {data?.user?.name}'s Todo List
      </h1>
      <div className={styles.inputContainer}></div>
      Personal Todo
      <input
        type="text"
        className="shadow-lg w-full p-1 mb-4 border border-gray-300 rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
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
        <div className="w-1/2 pr-4">
        <h2 className="text-lg font-medium mb-2">Personal Todo List</h2>
         {/* personal Todo 달성도를 원 그래프로 시각화 */}
         <div className="flex items-center justify-center">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#e6e6e6"
              strokeWidth="10"
            />
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#ff5d5d"
              strokeWidth="10"
              strokeDasharray={`${personalCompletionPercentage()}, 100`}
              transform="rotate(-90) translate(-120)"
            />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="18"
            >
              {/* 0-100사이 퍼센트 숫자를 표시 */}
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
      <div className="w-1/2 pl-4">
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
    />

{/* 검색 결과를 출력합니다. */}
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
          <span>{result.text}</span>
          {!result.joined && (
            <button 
              onClick={() => 
                joinPublicTodo()

              }
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
            addPublicTodo();
          }}
        >
          Add Todo
        </button>
        <div className="w-1/2 pr-4">
        <h2 className="text-lg font-medium mb-2">Public Todo List</h2>
        <ul>
          {publicTodos
              .filter((publicTodo) => publicTodo.isPublic)
              .filter((publicTodo) => publicTodo.completed)
              .map((publicTodo) => (
                <TodoItem
                  key={publicTodo.id}
                  todo={publicTodo}
                  onToggle={() => toggleTodo(publicTodo.id)}
                  // onDelete={() => deleteTodo(publicTodo.id)}
                />
              ))}
        </ul>
        {/* Join 가능한 Public Todo 출력 */}
        {/* {joinableTodo && (
          <div class="grid">
            <ul>
              {publicTodos
                  .filter((joinableTodo) => !joinableTodo.completed)
                  .map((joinableTodo) => (
                    <TodoItem
                      key={joinableTodo.id}
                      todo={joinableTodo}
                      onToggle={() => toggleTodo(joinableTodo.id)}
                      onDelete={() => deleteTodo(joinableTodo.id)}
                    />
                  ))}
            </ul>
          </div>
        )} */}
      </div>
      <div className="w-1/2 pl-4">
        <h2 className="text-lg font-medium mb-2">Completed Todo</h2>
        <ul>
          {publicTodos
              .filter((publicTodo) => publicTodo.isPublic)
              .filter((publicTodo) => publicTodo.completed)
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