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
    const circumference = 2 * Math.PI * 50; // 원의 둘레
  
    const strokeLength = (circumference * percentage) / 100;
    const gapLength = circumference - strokeLength;
  
    return `${strokeLength}, ${gapLength}`;
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

    const deleteTodo = async (id) => {
      const todoDoc = doc(todoCollection, id);
      const todoSnapshot = await getDoc(todoDoc);
    
      if (todoSnapshot.exists()) {
        const todoData = todoSnapshot.data();
    
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

    const joinPublicTodo = async (publicTodoId) => {
      const publicTodoDocRef = doc(publicTodoCollection, publicTodoId);
      const publicTodoSnapshot = await getDoc(publicTodoDocRef);
    
      if (publicTodoSnapshot.exists()) {
        const publicTodoData = publicTodoSnapshot.data();
        
        // 현재 로그인한 사용자의 정보를 가져옵니다.
        const currentUser = data?.user;
        
        // 이미 참여한 경우 함수를 종료합니다.
        if (publicTodoData.joinedUsers && publicTodoData.joinedUsers[currentUser.id]) {
          return;
        }
        
        // joinedUsers 필드를 업데이트합니다.
        const joinedUser = { userId: currentUser.id, completed: false };
        const updatedJoinedUsers = {
          ...publicTodoData.joinedUsers,
          [currentUser.id]: joinedUser
        };
        
        await updateDoc(publicTodoDocRef, { joinedUsers: updatedJoinedUsers });
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