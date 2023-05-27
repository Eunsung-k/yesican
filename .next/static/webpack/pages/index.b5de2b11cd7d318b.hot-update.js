"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TodoList.js":
/*!************************************!*\
  !*** ./src/components/TodoList.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_TodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/TodoItem */ \"./src/components/TodoItem.js\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/firebase */ \"./src/firebase/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* \n  할 일 목록을 관리하고 렌더링하는 주요 컴포넌트입니다.\n  상태 관리를 위해 `useState` 훅을 사용하여 할 일 목록과 입력값을 관리합니다.\n  할 일 목록의 추가, 삭제, 완료 상태 변경 등의 기능을 구현하였습니다.\n*/ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// DB의 todos 컬렉션 참조를 만듭니다. 컬렉션 사용시 잘못된 컬렉션 이름 사용을 방지합니다.\nconst todoCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"todos\");\nconst handleLogout = async ()=>{\n    await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n};\n// TodoList 컴포넌트를 정의합니다.\nconst TodoList = ()=>{\n    var _data_user;\n    _s();\n    // 상태를 관리하는 useState 훅을 사용하여 할 일 목록과 입력값을 초기화합니다.\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedDate, setSelectedDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [selectedTime, setSelectedTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // const [userNickname, setUserNickname] = useState(null);\n    const { data , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const getTodos = async ()=>{\n        var _data_user, _data_user1;\n        // const q = query(todoCollection, orderBy(\"datetime\", \"asc\"));\n        if (!(data === null || data === void 0 ? void 0 : (_data_user = data.user) === null || _data_user === void 0 ? void 0 : _data_user.name)) return;\n        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.query)(todoCollection, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.where)(\"userId\", \"==\", data === null || data === void 0 ? void 0 : (_data_user1 = data.user) === null || _data_user1 === void 0 ? void 0 : _data_user1.id), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.orderBy)(\"datetime\", \"asc\"));\n        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.onSnapshot)(q, (querySnapshot)=>{\n            const newTodos = [];\n            querySnapshot.forEach((doc)=>{\n                newTodos.push({\n                    id: doc.id,\n                    ...doc.data()\n                });\n            });\n            setTodos(newTodos);\n        });\n        return unsubscribe;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = getTodos();\n        return ()=>{\n            unsubscribe;\n        };\n    }, [\n        data\n    ]);\n    // addTodo 함수는 입력값을 이용하여 새로운 할 일을 목록에 추가하는 함수입니다.\n    const addTodo = async ()=>{\n        var _data_user;\n        // 입력값이 비어있는 경우 함수를 종료합니다.\n        if (input.trim() === \"\") return;\n        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.addDoc)(todoCollection, {\n            userId: data === null || data === void 0 ? void 0 : (_data_user = data.user) === null || _data_user === void 0 ? void 0 : _data_user.id,\n            text: input,\n            completed: false,\n            date: selectedDate,\n            time: selectedTime,\n            datetime: new Date()\n        });\n        const newTodo = {\n            id: docRef.id,\n            text: input,\n            completed: false,\n            date: selectedDate,\n            time: selectedTime\n        };\n        setTodos([\n            ...todos,\n            newTodo\n        ]);\n        setInput(\"\");\n        setSelectedDate(null);\n        setSelectedTime(null);\n    };\n    // toggleTodo 함수는 체크박스를 눌러 할 일의 완료 상태를 변경하는 함수입니다.\n    const toggleTodo = (id)=>{\n        // 할 일 목록에서 해당 id를 가진 할 일의 완료 상태를 반전시킵니다.\n        const newTodos = todos.map((todo)=>{\n            if (todo.id === id) {\n                const todoDoc = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(todoCollection, id);\n                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.updateDoc)(todoDoc, {\n                    completed: !todo.completed\n                });\n                return {\n                    ...todo,\n                    completed: !todo.completed\n                };\n            } else {\n                return todo;\n            }\n        });\n        setTodos(newTodos);\n    };\n    // deleteTodo 함수는 할 일을 목록에서 삭제하는 함수입니다.\n    // 해당 id를 가진 할 일을 제외한 나머지 목록을 새로운 상태로 저장합니다.\n    // setTodos(todos.filter((todo) => todo.id !== id));\n    // 해당 id를 가진 할 일을 찾아 삭제합니다.\n    const deleteTodo = (id)=>{\n        const todoDoc = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(todoCollection, id);\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.deleteDoc)(todoDoc);\n        setTodos(todos.filter((todo)=>{\n            return todo.id !== id;\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2 pr-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_6___default().logoutButton),\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"/Users/eunsungkim/Documents/GitHub/yesican/src/components/TodoList.js\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/eunsungkim/Documents/GitHub/yesican/src/components/TodoList.js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl mb-4 font-bold underline underline-offset-4 decoration-wavy text-pink-500\",\n                children: [\n                    data === null || data === void 0 ? void 0 : (_data_user = data.user) === null || _data_user === void 0 ? void 0 : _data_user.name,\n                    \"'s Todo List\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eunsungkim/Documents/GitHub/yesican/src/components/TodoList.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_6___default().inputContainer)\n            }, void 0, false, {\n                fileName: \"/Users/eunsungkim/Documents/GitHub/yesican/src/components/TodoList.js\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                className: \"shadow-lg w-full p-1 mb-4 border border-gray-300 rounded\",\n                value: input,\n                onChange: (e)=>setInput(e.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/eunsungkim/Documents/GitHub/yesican/src/components/TodoList.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"date\",\n                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_6___default().itemInput),\n                value: selectedDate,\n                onChange: (e)=>setSelectedDate(e.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/eunsungkim/Documents/GitHub/yesican/src/components/TodoList.js\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"time\",\n                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_6___default().itemInput),\n                value: selectedTime,\n                onChange: (e)=>setSelectedTime(e.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/eunsungkim/Documents/GitHub/yesican/src/components/TodoList.js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"grid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-40 justify-self-end p-1 mb-4 bg-pink-500 text-white border border-pink-500 rounded hover:bg-white hover:text-pink-500\",\n                        onClick: ()=>{\n                            addTodo();\n                        },\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eunsungkim/Documents/GitHub/yesican/src/components/TodoList.js\",\n                        lineNumber: 149,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/2 pr-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-medium mb-2\",\n                                children: \"Todo List\"\n                            }, void 0, false, {\n                                fileName: \"/Users/eunsungkim/Documents/GitHub/yesican/src/components/TodoList.js\",\n                                lineNumber: 158,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: todos.filter((todo)=>!todo.completed).map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        todo: todo,\n                                        onToggle: ()=>toggleTodo(todo.id)\n                                    }, todo.id, false, {\n                                        fileName: \"/Users/eunsungkim/Documents/GitHub/yesican/src/components/TodoList.js\",\n                                        lineNumber: 163,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/eunsungkim/Documents/GitHub/yesican/src/components/TodoList.js\",\n                                lineNumber: 159,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/eunsungkim/Documents/GitHub/yesican/src/components/TodoList.js\",\n                        lineNumber: 157,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/2 pl-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-medium mb-2\",\n                                children: \"Completed Todo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/eunsungkim/Documents/GitHub/yesican/src/components/TodoList.js\",\n                                lineNumber: 172,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: todos.filter((todo)=>todo.completed).map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        todo: todo,\n                                        onDelete: ()=>deleteTodo(todo.id)\n                                    }, todo.id, false, {\n                                        fileName: \"/Users/eunsungkim/Documents/GitHub/yesican/src/components/TodoList.js\",\n                                        lineNumber: 177,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/eunsungkim/Documents/GitHub/yesican/src/components/TodoList.js\",\n                                lineNumber: 173,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/eunsungkim/Documents/GitHub/yesican/src/components/TodoList.js\",\n                        lineNumber: 171,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eunsungkim/Documents/GitHub/yesican/src/components/TodoList.js\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/eunsungkim/Documents/GitHub/yesican/src/components/TodoList.js\",\n        lineNumber: 120,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoList, \"gkfdDfN+zrQap4EZMBUMcns2wxs=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTlCO0dBM0pNZjs7UUFRcUJoQix1REFBVUE7OztLQVIvQmdCO0FBNkpOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RvZG9MaXN0LmpzPzAxZDMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gIO2VoCDsnbwg66qp66Gd7J2EIOq0gOumrO2VmOqzoCDroIzrjZTrp4HtlZjripQg7KO87JqUIOy7tO2PrOuEjO2KuOyeheuLiOuLpC5cbiAg7IOB7YOcIOq0gOumrOulvCDsnITtlbQgYHVzZVN0YXRlYCDtm4XsnYQg7IKs7Jqp7ZWY7JesIO2VoCDsnbwg66qp66Gd6rO8IOyeheugpeqwkuydhCDqtIDrpqztlanri4jri6QuXG4gIO2VoCDsnbwg66qp66Gd7J2YIOy2lOqwgCwg7IKt7KCcLCDsmYTro4wg7IOB7YOcIOuzgOqyvSDrk7HsnZgg6riw64ql7J2EIOq1rO2YhO2VmOyYgOyKteuLiOuLpC5cbiovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCBUb2RvSXRlbSBmcm9tIFwiQC9jb21wb25lbnRzL1RvZG9JdGVtXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ub2RvTGlzdC5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvZmlyZWJhc2VcIjtcbmltcG9ydCB7XG4gIGNvbGxlY3Rpb24sXG4gIHF1ZXJ5LFxuICBkb2MsXG4gIGdldERvY3MsXG4gIGFkZERvYyxcbiAgdXBkYXRlRG9jLFxuICBkZWxldGVEb2MsXG4gIG9yZGVyQnksXG4gIHdoZXJlLFxuICBvblNuYXBzaG90LFxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbi8vIERC7J2YIHRvZG9zIOy7rOugieyFmCDssLjsobDrpbwg66eM65Ot64uI64ukLiDsu6zroInshZgg7IKs7Jqp7IucIOyemOuqu+uQnCDsu6zroInshZgg7J2066aEIOyCrOyaqeydhCDrsKnsp4Dtlanri4jri6QuXG5jb25zdCB0b2RvQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oZGIsIFwidG9kb3NcIik7XG5cbmNvbnN0IGhhbmRsZUxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgc2lnbk91dCgpO1xufTtcblxuLy8gVG9kb0xpc3Qg7Lu07Y+s64SM7Yq466W8IOygleydmO2VqeuLiOuLpC5cbmNvbnN0IFRvZG9MaXN0ID0gKCkgPT4ge1xuICAvLyDsg4Htg5zrpbwg6rSA66as7ZWY64qUIHVzZVN0YXRlIO2bheydhCDsgqzsmqntlZjsl6wg7ZWgIOydvCDrqqnroZ3qs7wg7J6F66Cl6rCS7J2EIOy0iOq4sO2ZlO2VqeuLiOuLpC5cbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZWxlY3RlZERhdGUsIHNldFNlbGVjdGVkRGF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3NlbGVjdGVkVGltZSwgc2V0U2VsZWN0ZWRUaW1lXSA9IHVzZVN0YXRlKG51bGwpO1xuICAvLyBjb25zdCBbdXNlck5pY2tuYW1lLCBzZXRVc2VyTmlja25hbWVdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcblxuICBjb25zdCBnZXRUb2RvcyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBjb25zdCBxID0gcXVlcnkodG9kb0NvbGxlY3Rpb24sIG9yZGVyQnkoXCJkYXRldGltZVwiLCBcImFzY1wiKSk7XG4gICAgaWYgKCFkYXRhPy51c2VyPy5uYW1lKSByZXR1cm47XG5cbiAgICBjb25zdCBxID0gcXVlcnkoXG4gICAgICB0b2RvQ29sbGVjdGlvbixcbiAgICAgIHdoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgZGF0YT8udXNlcj8uaWQpLFxuICAgICAgb3JkZXJCeShcImRhdGV0aW1lXCIsIFwiYXNjXCIpXG4gICAgKVxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb25TbmFwc2hvdChxLCAocXVlcnlTbmFwc2hvdCkgPT4ge1xuICAgICAgY29uc3QgbmV3VG9kb3MgPSBbXTtcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgIG5ld1RvZG9zLnB1c2goeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pO1xuICAgICAgfSk7XG4gICAgICBzZXRUb2RvcyhuZXdUb2Rvcyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVuc3Vic2NyaWJlO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBnZXRUb2RvcygpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB1bnN1YnNjcmliZTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG5cbiAgLy8gYWRkVG9kbyDtlajsiJjripQg7J6F66Cl6rCS7J2EIOydtOyaqe2VmOyXrCDsg4jroZzsmrQg7ZWgIOydvOydhCDrqqnroZ3sl5Ag7LaU6rCA7ZWY64qUIO2VqOyImOyeheuLiOuLpC5cbiAgY29uc3QgYWRkVG9kbyA9IGFzeW5jKCkgPT4ge1xuICAgIC8vIOyeheugpeqwkuydtCDruYTslrTsnojripQg6rK97JqwIO2VqOyImOulvCDsooXro4ztlanri4jri6QuXG4gICAgaWYgKGlucHV0LnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuO1xuICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGFkZERvYyh0b2RvQ29sbGVjdGlvbiwge1xuICAgICAgdXNlcklkOiBkYXRhPy51c2VyPy5pZCxcbiAgICAgIHRleHQ6IGlucHV0LFxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgIGRhdGU6IHNlbGVjdGVkRGF0ZSxcbiAgICAgIHRpbWU6IHNlbGVjdGVkVGltZSxcbiAgICAgIGRhdGV0aW1lOiBuZXcgRGF0ZSgpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgbmV3VG9kbyA9IHtpZDogZG9jUmVmLmlkLCB0ZXh0OiBpbnB1dCwgY29tcGxldGVkOiBmYWxzZSwgZGF0ZTogc2VsZWN0ZWREYXRlLCB0aW1lOiBzZWxlY3RlZFRpbWUgfTtcbiAgICBzZXRUb2RvcyhbLi4udG9kb3MsIG5ld1RvZG9dKTtcbiAgICBzZXRJbnB1dChcIlwiKTtcbiAgICBzZXRTZWxlY3RlZERhdGUobnVsbCk7XG4gICAgc2V0U2VsZWN0ZWRUaW1lKG51bGwpO1xuICB9O1xuICBcbiAgLy8gdG9nZ2xlVG9kbyDtlajsiJjripQg7LK07YGs67CV7Iqk66W8IOuIjOufrCDtlaAg7J287J2YIOyZhOujjCDsg4Htg5zrpbwg67OA6rK97ZWY64qUIO2VqOyImOyeheuLiOuLpC5cbiAgY29uc3QgdG9nZ2xlVG9kbyA9IChpZCkgPT4ge1xuICAgIC8vIO2VoCDsnbwg66qp66Gd7JeQ7IScIO2VtOuLuSBpZOulvCDqsIDsp4Qg7ZWgIOydvOydmCDsmYTro4wg7IOB7YOc66W8IOuwmOyghOyLnO2CteuLiOuLpC5cbiAgICBjb25zdCBuZXdUb2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgICAgaWYodG9kby5pZCA9PT0gaWQpIHtcbiAgICAgICAgY29uc3QgdG9kb0RvYyA9IGRvYyh0b2RvQ29sbGVjdGlvbiwgaWQpO1xuICAgICAgICB1cGRhdGVEb2ModG9kb0RvYywgeyBjb21wbGV0ZWQ6ICF0b2RvLmNvbXBsZXRlZCB9KTtcbiAgICAgICAgcmV0dXJuIHsgLi4udG9kbywgY29tcGxldGVkOiAhdG9kby5jb21wbGV0ZWQgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2V0VG9kb3MobmV3VG9kb3MpO1xuICB9O1xuICBcbiAgLy8gZGVsZXRlVG9kbyDtlajsiJjripQg7ZWgIOydvOydhCDrqqnroZ3sl5DshJwg7IKt7KCc7ZWY64qUIO2VqOyImOyeheuLiOuLpC5cbiAgICAvLyDtlbTri7kgaWTrpbwg6rCA7KeEIO2VoCDsnbzsnYQg7KCc7Jm47ZWcIOuCmOuouOyngCDrqqnroZ3snYQg7IOI66Gc7Jq0IOyDge2DnOuhnCDsoIDsnqXtlanri4jri6QuXG4gICAgLy8gc2V0VG9kb3ModG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZCkpO1xuICAgIC8vIO2VtOuLuSBpZOulvCDqsIDsp4Qg7ZWgIOydvOydhCDssL7slYQg7IKt7KCc7ZWp64uI64ukLlxuICBjb25zdCBkZWxldGVUb2RvID0gKGlkKSA9PiB7XG4gICAgY29uc3QgdG9kb0RvYyA9IGRvYyh0b2RvQ29sbGVjdGlvbiwgaWQpO1xuICAgIGRlbGV0ZURvYyh0b2RvRG9jKTtcbiAgICBzZXRUb2RvcyhcbiAgICAgIHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICByZXR1cm4gdG9kby5pZCAhPT0gaWQ7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHByLTRcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvdXRCdXR0b259IG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+XG4gICAgICAgICAgTG9nb3V0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBtYi00IGZvbnQtYm9sZCB1bmRlcmxpbmUgdW5kZXJsaW5lLW9mZnNldC00IGRlY29yYXRpb24td2F2eSB0ZXh0LXBpbmstNTAwXCI+XG4gICAgICAgIHtkYXRhPy51c2VyPy5uYW1lfSdzIFRvZG8gTGlzdFxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRDb250YWluZXJ9PjwvZGl2PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93LWxnIHctZnVsbCBwLTEgbWItNCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWRcIlxuICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1JbnB1dH1cbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkRGF0ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZERhdGUoZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGltZVwiXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1JbnB1dH1cbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkVGltZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZFRpbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQwIGp1c3RpZnktc2VsZi1lbmQgcC0xIG1iLTQgYmctcGluay01MDAgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLXBpbmstNTAwIHJvdW5kZWQgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1waW5rLTUwMFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgYWRkVG9kbygpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBZGQgVG9kb1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBwci00XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIG1iLTJcIj5Ub2RvIExpc3Q8L2gyPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RvZG9zXG4gICAgICAgICAgICAgIC5maWx0ZXIoKHRvZG8pID0+ICF0b2RvLmNvbXBsZXRlZClcbiAgICAgICAgICAgICAgLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgICAgICAgIDxUb2RvSXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXt0b2RvLmlkfVxuICAgICAgICAgICAgICAgICAgdG9kbz17dG9kb31cbiAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlPXsoKSA9PiB0b2dnbGVUb2RvKHRvZG8uaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHBsLTRcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gbWItMlwiPkNvbXBsZXRlZCBUb2RvPC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHt0b2Rvc1xuICAgICAgICAgICAgICAuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmNvbXBsZXRlZClcbiAgICAgICAgICAgICAgLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgICAgICAgIDxUb2RvSXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXt0b2RvLmlkfVxuICAgICAgICAgICAgICAgICAgdG9kbz17dG9kb31cbiAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBkZWxldGVUb2RvKHRvZG8uaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfSBcbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJUb2RvSXRlbSIsInN0eWxlcyIsImRiIiwiY29sbGVjdGlvbiIsInF1ZXJ5IiwiZG9jIiwiZ2V0RG9jcyIsImFkZERvYyIsInVwZGF0ZURvYyIsImRlbGV0ZURvYyIsIm9yZGVyQnkiLCJ3aGVyZSIsIm9uU25hcHNob3QiLCJ0b2RvQ29sbGVjdGlvbiIsImhhbmRsZUxvZ291dCIsIlRvZG9MaXN0IiwiZGF0YSIsInRvZG9zIiwic2V0VG9kb3MiLCJpbnB1dCIsInNldElucHV0Iiwic2VsZWN0ZWREYXRlIiwic2V0U2VsZWN0ZWREYXRlIiwic2VsZWN0ZWRUaW1lIiwic2V0U2VsZWN0ZWRUaW1lIiwic3RhdHVzIiwiZ2V0VG9kb3MiLCJ1c2VyIiwibmFtZSIsInEiLCJpZCIsInVuc3Vic2NyaWJlIiwicXVlcnlTbmFwc2hvdCIsIm5ld1RvZG9zIiwiZm9yRWFjaCIsInB1c2giLCJhZGRUb2RvIiwidHJpbSIsImRvY1JlZiIsInVzZXJJZCIsInRleHQiLCJjb21wbGV0ZWQiLCJkYXRlIiwidGltZSIsImRhdGV0aW1lIiwiRGF0ZSIsIm5ld1RvZG8iLCJ0b2dnbGVUb2RvIiwibWFwIiwidG9kbyIsInRvZG9Eb2MiLCJkZWxldGVUb2RvIiwiZmlsdGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiYnV0dG9uIiwibG9nb3V0QnV0dG9uIiwib25DbGljayIsImgxIiwiaW5wdXRDb250YWluZXIiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJpdGVtSW5wdXQiLCJjbGFzcyIsImgyIiwidWwiLCJvblRvZ2dsZSIsIm9uRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TodoList.js\n"));

/***/ })

});