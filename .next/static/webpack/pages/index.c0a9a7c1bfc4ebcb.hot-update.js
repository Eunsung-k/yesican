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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/*\r\n  각각의 할 일 항목을 렌더링하는 컴포넌트입니다.\r\n  각 할 일의 완료 상태에 따라 체크박스와 텍스트 스타일을 동기화하며,\r\n  삭제 버튼을 통해 해당 할 일을 삭제할 수 있습니다.\r\n  이 컴포넌트는 `TodoList.js`에서 사용되어 할 일 목록을 구성합니다.\r\n*/ \n\n\n// TodoItem 컴포넌트를 정의합니다.\nconst TodoItem = (param)=>{\n    let { todo , onToggle , onDelete , currentUserId , onDeletePub , weeklyGoal  } = param;\n    var _todo_joinedUsers;\n    const joinedUser = (_todo_joinedUsers = todo.joinedUsers) === null || _todo_joinedUsers === void 0 ? void 0 : _todo_joinedUsers[currentUserId];\n    const isCompleted = todo.completed || joinedUser && joinedUser.completed;\n    // 각 할 일 항목을 렌더링합니다.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_2___default().todoItem),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                checked: isCompleted,\n                onChange: onToggle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\CSY\\\\OneDrive - SNU\\\\문서\\\\GitHub\\\\yesican\\\\src\\\\components\\\\TodoItem.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: \"완료했습니다.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\CSY\\\\OneDrive - SNU\\\\문서\\\\GitHub\\\\yesican\\\\src\\\\components\\\\TodoItem.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_2___default().todoText),\n                style: {\n                    textDecoration: isCompleted ? \"line-through\" : \"none\"\n                },\n                children: todo.text\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\CSY\\\\OneDrive - SNU\\\\문서\\\\GitHub\\\\yesican\\\\src\\\\components\\\\TodoItem.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \" 주 \",\n                    todo.weeklyGoal,\n                    \"회\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\CSY\\\\OneDrive - SNU\\\\문서\\\\GitHub\\\\yesican\\\\src\\\\components\\\\TodoItem.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            \"\\xa0 \\xa0\\xa0\\xa0\\xa0\\xa0\\xa0\\xa0\",\n            onDelete && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onDelete,\n                children: \"Delete\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\CSY\\\\OneDrive - SNU\\\\문서\\\\GitHub\\\\yesican\\\\src\\\\components\\\\TodoItem.js\",\n                lineNumber: 37,\n                columnNumber: 20\n            }, undefined),\n            onDeletePub && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onDeletePub,\n                children: \"DeletePub\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\CSY\\\\OneDrive - SNU\\\\문서\\\\GitHub\\\\yesican\\\\src\\\\components\\\\TodoItem.js\",\n                lineNumber: 38,\n                columnNumber: 23\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\CSY\\\\OneDrive - SNU\\\\문서\\\\GitHub\\\\yesican\\\\src\\\\components\\\\TodoItem.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TodoItem;\n// TodoItem 컴포넌트를 내보냅니다.\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoItem);\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2RvSXRlbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7O0FBS0E7QUFDMEI7QUFDd0I7QUFFbEQsd0JBQXdCO0FBQ3hCLE1BQU1FLFdBQVcsU0FBMEU7UUFBekUsRUFBRUMsS0FBSSxFQUFFQyxTQUFRLEVBQUVDLFNBQVEsRUFBRUMsY0FBYSxFQUFFQyxZQUFXLEVBQUVDLFdBQVUsRUFBRTtRQUNqRUw7SUFBbkIsTUFBTU0sYUFBYU4sQ0FBQUEsb0JBQUFBLEtBQUtPLFdBQVcsY0FBaEJQLCtCQUFBQSxLQUFBQSxJQUFBQSxpQkFBa0IsQ0FBQ0csY0FBYztJQUNwRCxNQUFNSyxjQUFjUixLQUFLUyxTQUFTLElBQUtILGNBQWNBLFdBQVdHLFNBQVM7SUFFekUsb0JBQW9CO0lBQ3BCLHFCQUNFLDhEQUFDQztRQUFHQyxXQUFXYiw2RUFBZTs7MEJBRzVCLDhEQUFDZTtnQkFBTUMsTUFBSztnQkFBV0MsU0FBU1A7Z0JBQWFRLFVBQVVmOzs7Ozs7MEJBQ3ZELDhEQUFDZ0I7Z0JBQU9DLFNBQVE7Ozs7OzswQkFHaEIsOERBQUNDO2dCQUNDUixXQUFXYiw2RUFBZTtnQkFDMUJ1QixPQUFPO29CQUFFQyxnQkFBZ0JkLGNBQWMsaUJBQWlCLE1BQU07Z0JBQUM7MEJBRTlEUixLQUFLdUIsSUFBSTs7Ozs7OzBCQUlaLDhEQUFDSjs7b0JBQUs7b0JBQUluQixLQUFLSyxVQUFVO29CQUFDOzs7Ozs7O1lBQVE7WUFLakNILDBCQUFZLDhEQUFDZTtnQkFBT0MsU0FBU2hCOzBCQUFVOzs7Ozs7WUFDdkNFLDZCQUFlLDhEQUFDYTtnQkFBT0MsU0FBU2Q7MEJBQWE7Ozs7Ozs7Ozs7OztBQUdwRDtLQTlCTUw7QUFnQ04sd0JBQXdCO0FBQ3hCLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RvZG9JdGVtLmpzP2Q1MjIiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICDqsIHqsIHsnZgg7ZWgIOydvCDtla3rqqnsnYQg66CM642U66eB7ZWY64qUIOy7tO2PrOuEjO2KuOyeheuLiOuLpC5cclxuICDqsIEg7ZWgIOydvOydmCDsmYTro4wg7IOB7YOc7JeQIOuUsOudvCDssrTtgazrsJXsiqTsmYAg7YWN7Iqk7Yq4IOyKpO2DgOydvOydhCDrj5nquLDtmZTtlZjrqbAsXHJcbiAg7IKt7KCcIOuyhO2KvOydhCDthrXtlbQg7ZW064u5IO2VoCDsnbzsnYQg7IKt7KCc7ZWgIOyImCDsnojsirXri4jri6QuXHJcbiAg7J20IOy7tO2PrOuEjO2KuOuKlCBgVG9kb0xpc3QuanNg7JeQ7IScIOyCrOyaqeuQmOyWtCDtlaAg7J28IOuqqeuhneydhCDqtazshLHtlanri4jri6QuXHJcbiovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvVG9kb0xpc3QubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gVG9kb0l0ZW0g7Lu07Y+s64SM7Yq466W8IOygleydmO2VqeuLiOuLpC5cclxuY29uc3QgVG9kb0l0ZW0gPSAoeyB0b2RvLCBvblRvZ2dsZSwgb25EZWxldGUsIGN1cnJlbnRVc2VySWQsIG9uRGVsZXRlUHViLCB3ZWVrbHlHb2FsIH0pID0+IHtcclxuICBjb25zdCBqb2luZWRVc2VyID0gdG9kby5qb2luZWRVc2Vycz8uW2N1cnJlbnRVc2VySWRdO1xyXG4gIGNvbnN0IGlzQ29tcGxldGVkID0gdG9kby5jb21wbGV0ZWQgfHwgKGpvaW5lZFVzZXIgJiYgam9pbmVkVXNlci5jb21wbGV0ZWQpO1xyXG5cclxuICAvLyDqsIEg7ZWgIOydvCDtla3rqqnsnYQg66CM642U66eB7ZWp64uI64ukLlxyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMudG9kb0l0ZW19PlxyXG4gICAgICB7Lyog7LK07YGs67CV7Iqk66W8IOugjOuNlOunge2VmOqzoCwg7LK07YGs67CV7Iqk7J2YIOyDge2DnOulvCDtlaAg7J287J2YIOyZhOujjCDsg4Htg5zsmYAg64+Z6riw7ZmU7ZWp64uI64ukLlxyXG4gICAgICAgICAg7LK07YGs67CV7Iqk7J2YIOyDge2DnOqwgCDrs4Dqsr3rkJjrqbQgb25Ub2dnbGUg7ZWo7IiY66W8IO2YuOy2nO2VmOyXrCDsmYTro4wg7IOB7YOc66W8IOyXheuNsOydtO2KuO2VqeuLiOuLpC4gKi99XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtpc0NvbXBsZXRlZH0gb25DaGFuZ2U9e29uVG9nZ2xlfSAvPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9XCLsmYTro4ztlojsirXri4jri6QuXCI+PC9idXR0b24+XHJcblxyXG4gICAgICB7Lyog7ZWgIOydvOydmCDthY3siqTtirjrpbwg66CM642U66eB7ZWY6rOgLCDsmYTro4wg7IOB7YOc7JeQIOuUsOudvCDthY3siqTtirjsl5Ag7Leo7IaM7ISg7J2EIOyggeyaqe2VqeuLiOuLpC4gKi99XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudG9kb1RleHR9XHJcbiAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IGlzQ29tcGxldGVkID8gXCJsaW5lLXRocm91Z2hcIiA6IFwibm9uZVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICB7dG9kby50ZXh0fVxyXG4gICAgICA8L3NwYW4+XHJcblxyXG4gICAgICB7Lyp3ZWVrbHlHb2FsIOugjOuNlOungSovfVxyXG4gICAgICA8c3Bhbj4g7KO8IHt0b2RvLndlZWtseUdvYWx97ZqMPC9zcGFuPiBcclxuICAgICAgJm5ic3A7XHJcbiAgICAgIFxyXG4gICAgICAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcclxuICAgICAgey8qIOyCreygnCDrsoTtirzsnYQg66CM642U66eB7ZWY6rOgLCDtgbTrpq0g7IucIG9uRGVsZXRlIO2VqOyImOulvCDtmLjstpztlZjsl6wg7ZW064u5IO2VoCDsnbzsnYQg7IKt7KCc7ZWp64uI64ukLiAqL31cclxuICAgICAge29uRGVsZXRlICYmIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PkRlbGV0ZTwvYnV0dG9uPn1cclxuICAgICAge29uRGVsZXRlUHViICYmIDxidXR0b24gb25DbGljaz17b25EZWxldGVQdWJ9PkRlbGV0ZVB1YjwvYnV0dG9uPn1cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIFRvZG9JdGVtIOy7tO2PrOuEjO2KuOulvCDrgrTrs7Trg4Xri4jri6QuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9JdGVtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJUb2RvSXRlbSIsInRvZG8iLCJvblRvZ2dsZSIsIm9uRGVsZXRlIiwiY3VycmVudFVzZXJJZCIsIm9uRGVsZXRlUHViIiwid2Vla2x5R29hbCIsImpvaW5lZFVzZXIiLCJqb2luZWRVc2VycyIsImlzQ29tcGxldGVkIiwiY29tcGxldGVkIiwibGkiLCJjbGFzc05hbWUiLCJ0b2RvSXRlbSIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwidG9kb1RleHQiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TodoItem.js\n"));

/***/ })

});