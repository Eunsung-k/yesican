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

/***/ "./src/components/TodoItem.js":
/*!************************************!*\
  !*** ./src/components/TodoItem.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/*\r\n  각각의 할 일 항목을 렌더링하는 컴포넌트입니다.\r\n  각 할 일의 완료 상태에 따라 체크박스와 텍스트 스타일을 동기화하며,\r\n  삭제 버튼을 통해 해당 할 일을 삭제할 수 있습니다.\r\n  이 컴포넌트는 `TodoList.js`에서 사용되어 할 일 목록을 구성합니다.\r\n*/ \n\n\n// TodoItem 컴포넌트를 정의합니다.\nconst TodoItem = (param)=>{\n    let { todo , onToggle , onDelete , currentUserId , onDeletePub  } = param;\n    var _todo_joinedUsers;\n    const joinedUser = (_todo_joinedUsers = todo.joinedUsers) === null || _todo_joinedUsers === void 0 ? void 0 : _todo_joinedUsers[currentUserId];\n    const isCompleted = todo.completed || joinedUser && joinedUser.completed;\n    console.log(currentUserId);\n    console.log(todo);\n    console.log(todo.completed);\n    console.log(joinedUser && joinedUser.completed);\n    // 각 할 일 항목을 렌더링합니다.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_2___default().todoItem),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                checked: isCompleted,\n                onChange: onToggle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nyk75\\\\Documents\\\\GitHub\\\\yesican\\\\src\\\\components\\\\TodoItem.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: \"완료했습니다.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nyk75\\\\Documents\\\\GitHub\\\\yesican\\\\src\\\\components\\\\TodoItem.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_2___default().todoText),\n                style: {\n                    textDecoration: isCompleted ? \"line-through\" : \"none\"\n                },\n                children: todo.text\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nyk75\\\\Documents\\\\GitHub\\\\yesican\\\\src\\\\components\\\\TodoItem.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: todo.date\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nyk75\\\\Documents\\\\GitHub\\\\yesican\\\\src\\\\components\\\\TodoItem.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            \"\\xa0\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: todo.time\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nyk75\\\\Documents\\\\GitHub\\\\yesican\\\\src\\\\components\\\\TodoItem.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            \"\\xa0\\xa0\\xa0\\xa0\\xa0\\xa0\\xa0\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onDelete,\n                children: \"DeleteGroup\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nyk75\\\\Documents\\\\GitHub\\\\yesican\\\\src\\\\components\\\\TodoItem.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onDeletePub,\n                children: \"DeleteList\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nyk75\\\\Documents\\\\GitHub\\\\yesican\\\\src\\\\components\\\\TodoItem.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nyk75\\\\Documents\\\\GitHub\\\\yesican\\\\src\\\\components\\\\TodoItem.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TodoItem;\n// TodoItem 컴포넌트를 내보냅니다.\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoItem);\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2RvSXRlbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7O0FBS0E7QUFDMEI7QUFDd0I7QUFFbEQsd0JBQXdCO0FBQ3hCLE1BQU1FLFdBQVcsU0FBOEQ7UUFBN0QsRUFBRUMsS0FBSSxFQUFFQyxTQUFRLEVBQUVDLFNBQVEsRUFBRUMsY0FBYSxFQUFFQyxZQUFXLEVBQUU7UUFDckRKO0lBQW5CLE1BQU1LLGFBQWFMLENBQUFBLG9CQUFBQSxLQUFLTSxXQUFXLGNBQWhCTiwrQkFBQUEsS0FBQUEsSUFBQUEsaUJBQWtCLENBQUNHLGNBQWM7SUFDcEQsTUFBTUksY0FBY1AsS0FBS1EsU0FBUyxJQUFLSCxjQUFjQSxXQUFXRyxTQUFTO0lBQ3pFQyxRQUFRQyxHQUFHLENBQUNQO0lBQ1pNLFFBQVFDLEdBQUcsQ0FBQ1Y7SUFDWlMsUUFBUUMsR0FBRyxDQUFDVixLQUFLUSxTQUFTO0lBQzFCQyxRQUFRQyxHQUFHLENBQUNMLGNBQVlBLFdBQVdHLFNBQVM7SUFDNUMsb0JBQW9CO0lBQ3BCLHFCQUNFLDhEQUFDRztRQUFHQyxXQUFXZCw2RUFBZTs7MEJBRzVCLDhEQUFDZ0I7Z0JBQU1DLE1BQUs7Z0JBQVdDLFNBQVNUO2dCQUFhVSxVQUFVaEI7Ozs7OzswQkFDdkQsOERBQUNpQjtnQkFBT0MsU0FBUTs7Ozs7OzBCQUdoQiw4REFBQ0M7Z0JBQ0NSLFdBQVdkLDZFQUFlO2dCQUMxQndCLE9BQU87b0JBQUVDLGdCQUFnQmhCLGNBQWMsaUJBQWlCLE1BQU07Z0JBQUM7MEJBRTlEUCxLQUFLd0IsSUFBSTs7Ozs7OzBCQUdaLDhEQUFDSjswQkFBTXBCLEtBQUt5QixJQUFJOzs7Ozs7WUFBUTswQkFFeEIsOERBQUNMOzBCQUFNcEIsS0FBSzBCLElBQUk7Ozs7OztZQUFROzBCQUd4Qiw4REFBQ1I7Z0JBQU9DLFNBQVNqQjswQkFBVTs7Ozs7OzBCQUMzQiw4REFBQ2dCO2dCQUFPQyxTQUFTZjswQkFBYTs7Ozs7Ozs7Ozs7O0FBR3BDO0tBaENNTDtBQWtDTix3QkFBd0I7QUFDeEIsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kb0l0ZW0uanM/ZDUyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gIOqwgeqwgeydmCDtlaAg7J28IO2VreuqqeydhCDroIzrjZTrp4HtlZjripQg7Lu07Y+s64SM7Yq47J6F64uI64ukLlxyXG4gIOqwgSDtlaAg7J287J2YIOyZhOujjCDsg4Htg5zsl5Ag65Sw6528IOyytO2BrOuwleyKpOyZgCDthY3siqTtirgg7Iqk7YOA7J287J2EIOuPmeq4sO2ZlO2VmOupsCxcclxuICDsgq3soJwg67KE7Yq87J2EIO2Gte2VtCDtlbTri7kg7ZWgIOydvOydhCDsgq3soJztlaAg7IiYIOyeiOyKteuLiOuLpC5cclxuICDsnbQg7Lu07Y+s64SM7Yq464qUIGBUb2RvTGlzdC5qc2Dsl5DshJwg7IKs7Jqp65CY7Ja0IO2VoCDsnbwg66qp66Gd7J2EIOq1rOyEse2VqeuLiOuLpC5cclxuKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ub2RvTGlzdC5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBUb2RvSXRlbSDsu7Ttj6zrhIztirjrpbwg7KCV7J2Y7ZWp64uI64ukLlxyXG5jb25zdCBUb2RvSXRlbSA9ICh7IHRvZG8sIG9uVG9nZ2xlLCBvbkRlbGV0ZSwgY3VycmVudFVzZXJJZCwgb25EZWxldGVQdWIgfSkgPT4ge1xyXG4gIGNvbnN0IGpvaW5lZFVzZXIgPSB0b2RvLmpvaW5lZFVzZXJzPy5bY3VycmVudFVzZXJJZF07XHJcbiAgY29uc3QgaXNDb21wbGV0ZWQgPSB0b2RvLmNvbXBsZXRlZCB8fCAoam9pbmVkVXNlciAmJiBqb2luZWRVc2VyLmNvbXBsZXRlZCk7XHJcbiAgY29uc29sZS5sb2coY3VycmVudFVzZXJJZClcclxuICBjb25zb2xlLmxvZyh0b2RvKVxyXG4gIGNvbnNvbGUubG9nKHRvZG8uY29tcGxldGVkKVxyXG4gIGNvbnNvbGUubG9nKGpvaW5lZFVzZXImJmpvaW5lZFVzZXIuY29tcGxldGVkKVxyXG4gIC8vIOqwgSDtlaAg7J28IO2VreuqqeydhCDroIzrjZTrp4Htlanri4jri6QuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy50b2RvSXRlbX0+XHJcbiAgICAgIHsvKiDssrTtgazrsJXsiqTrpbwg66CM642U66eB7ZWY6rOgLCDssrTtgazrsJXsiqTsnZgg7IOB7YOc66W8IO2VoCDsnbzsnZgg7JmE66OMIOyDge2DnOyZgCDrj5nquLDtmZTtlanri4jri6QuXHJcbiAgICAgICAgICDssrTtgazrsJXsiqTsnZgg7IOB7YOc6rCAIOuzgOqyveuQmOuptCBvblRvZ2dsZSDtlajsiJjrpbwg7Zi47Lac7ZWY7JesIOyZhOujjCDsg4Htg5zrpbwg7JeF642w7J207Yq47ZWp64uI64ukLiAqL31cclxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2lzQ29tcGxldGVkfSBvbkNoYW5nZT17b25Ub2dnbGV9IC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz1cIuyZhOujjO2WiOyKteuLiOuLpC5cIj48L2J1dHRvbj5cclxuXHJcbiAgICAgIHsvKiDtlaAg7J287J2YIO2FjeyKpO2KuOulvCDroIzrjZTrp4HtlZjqs6AsIOyZhOujjCDsg4Htg5zsl5Ag65Sw6528IO2FjeyKpO2KuOyXkCDst6jshozshKDsnYQg7KCB7Jqp7ZWp64uI64ukLiAqL31cclxuICAgICAgPHNwYW5cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50b2RvVGV4dH1cclxuICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogaXNDb21wbGV0ZWQgPyBcImxpbmUtdGhyb3VnaFwiIDogXCJub25lXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0b2RvLnRleHR9XHJcbiAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgIDxzcGFuPnt0b2RvLmRhdGV9PC9zcGFuPlxyXG4gICAgICAmbmJzcDtcclxuICAgICAgPHNwYW4+e3RvZG8udGltZX08L3NwYW4+XHJcbiAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgICB7Lyog7IKt7KCcIOuyhO2KvOydhCDroIzrjZTrp4HtlZjqs6AsIO2BtOumrSDsi5wgb25EZWxldGUg7ZWo7IiY66W8IO2YuOy2nO2VmOyXrCDtlbTri7kg7ZWgIOydvOydhCDsgq3soJztlanri4jri6QuICovfVxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT5EZWxldGVHcm91cDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlUHVifT5EZWxldGVMaXN0PC9idXR0b24+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBUb2RvSXRlbSDsu7Ttj6zrhIztirjrpbwg64K067O064OF64uI64ukLlxyXG5leHBvcnQgZGVmYXVsdCBUb2RvSXRlbTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiVG9kb0l0ZW0iLCJ0b2RvIiwib25Ub2dnbGUiLCJvbkRlbGV0ZSIsImN1cnJlbnRVc2VySWQiLCJvbkRlbGV0ZVB1YiIsImpvaW5lZFVzZXIiLCJqb2luZWRVc2VycyIsImlzQ29tcGxldGVkIiwiY29tcGxldGVkIiwiY29uc29sZSIsImxvZyIsImxpIiwiY2xhc3NOYW1lIiwidG9kb0l0ZW0iLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiIsInRvZG9UZXh0Iiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHQiLCJkYXRlIiwidGltZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TodoItem.js\n"));

/***/ })

});