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
    const barWidth = (500 * percentage) / 100; // 가로 막대의 너비
    
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
        const joinedUser = { completed: !publicTodoData.completed };
        const updatedJoinedUsers = {
          ...(publicTodoData.joinedUsers || {}),
          [currentUser.id]: joinedUser,
        };
    
        await updateDoc(publicTodoDocRef, { joinedUsers: updatedJoinedUsers });
      }
    };
    

    

    const toggleJoinedUser = async (publicTodoId) => {
      const publicTodoDocRef = doc(publicTodoCollection, publicTodoId);
      const publicTodoSnapshot = await getDoc(publicTodoDocRef);
    
      if (publicTodoSnapshot.exists()) {
        const publicTodoData = publicTodoSnapshot.data();
        
        // Get the current user's information
        const currentUser = data?.user;
        
        // If the user has already joined, remove them from the joinedUsers
        if (publicTodoData.joinedUsers && publicTodoData.joinedUsers[currentUser.id]) {
          const updatedJoinedUsers = { ...publicTodoData.joinedUsers };
          delete updatedJoinedUsers[currentUser.id];
          
          await updateDoc(publicTodoDocRef, { joinedUsers: updatedJoinedUsers });
        } else {
          // If the user hasn't joined, add them to the joinedUsers
          const joinedUser = { completed: false };
          const updatedJoinedUsers = {
            ...publicTodoData.joinedUsers,
            [currentUser.id]: joinedUser,
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
        <div className="w-3/3 ">
        <h2 className="text-lg font-medium mb-2">Personal Todo List</h2>
         {/* personal Todo 달성도를 가로 막대 그래프로 시각화 */}
          <div className="flex items-center justify-center pr-10">
            <svg width="500" height="30" viewBox="0 0 700 30">
              <rect
                x="20"
                y="0"
                width="500"
                height="20"
                fill="#e6e6e6"
                rx="10"
              />
              <rect
                x="20"
                y="0"
                width={personalCompletionPercentage()}
                height="20"
                fill="#ff5d5d"
                rx="10"
              />
              <text
                x="40%"
                y="40%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="18"
              >
                {/* 0-100사이 퍼센트 숫자를 표시 */}
                {personalCompletionPercentageindex()}%
              </text>
              <text
                x="88%"
                y="30%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="18"
              >
                personal Todo 달성도
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
    />

{/* 검색 결과를 출력합니다. */}
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
          <span>{result.text}</span>
          {!result.joined && (
            <button 
              onClick={() => 
                joinPublicTodo(result.id)}
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
        <div className="w-3/3">
        <h2 className="text-lg font-medium mb-2">Public Todo List</h2>
        <ul>
        {publicTodos.map(todo => (
  <div key={todo.id}>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodo(todo.id, true)}
    />
    <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
  </div>
))}

</ul>

      </div>
      <div className="w-3/3 pl-4">
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
