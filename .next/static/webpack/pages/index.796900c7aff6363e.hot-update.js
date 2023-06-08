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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/*\n  각각의 할 일 항목을 렌더링하는 컴포넌트입니다.\n  각 할 일의 완료 상태에 따라 체크박스와 텍스트 스타일을 동기화하며,\n  삭제 버튼을 통해 해당 할 일을 삭제할 수 있습니다.\n  이 컴포넌트는 `TodoList.js`에서 사용되어 할 일 목록을 구성합니다.\n*/ \n\n\n// TodoItem 컴포넌트를 정의합니다.\nconst TodoItem = (param)=>{\n    let { todo , onToggle , onDelete , currentUserId  } = param;\n    var _todo_joinedUsers;\n    const joinedUser = (_todo_joinedUsers = todo.joinedUsers) === null || _todo_joinedUsers === void 0 ? void 0 : _todo_joinedUsers[currentUserId];\n    const isCompleted = todo.completed || joinedUser && joinedUser.completed;\n    const handleToggle = ()=>{\n        onToggle(todo.id, todo.isPublic); // Pass the todo id and isPublic flag to the onToggle function\n    };\n    // 각 할 일 항목을 렌더링합니다.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_2___default().todoItem),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                checked: isCompleted,\n                onChange: handleToggle\n            }, void 0, false, {\n                fileName: \"/Users/leemir/Desktop/2023 Spring/wep programming/team/yesican/src/components/TodoItem.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: \"완료했습니다.\"\n            }, void 0, false, {\n                fileName: \"/Users/leemir/Desktop/2023 Spring/wep programming/team/yesican/src/components/TodoItem.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_2___default().todoText),\n                style: {\n                    textDecoration: isCompleted ? \"line-through\" : \"none\"\n                },\n                children: todo.text\n            }, void 0, false, {\n                fileName: \"/Users/leemir/Desktop/2023 Spring/wep programming/team/yesican/src/components/TodoItem.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: todo.date\n            }, void 0, false, {\n                fileName: \"/Users/leemir/Desktop/2023 Spring/wep programming/team/yesican/src/components/TodoItem.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            \"\\xa0\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: todo.time\n            }, void 0, false, {\n                fileName: \"/Users/leemir/Desktop/2023 Spring/wep programming/team/yesican/src/components/TodoItem.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            \"\\xa0\\xa0\\xa0\\xa0\\xa0\\xa0\\xa0\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onDelete,\n                children: \"Delete\"\n            }, void 0, false, {\n                fileName: \"/Users/leemir/Desktop/2023 Spring/wep programming/team/yesican/src/components/TodoItem.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/leemir/Desktop/2023 Spring/wep programming/team/yesican/src/components/TodoItem.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TodoItem;\n// TodoItem 컴포넌트를 내보냅니다.\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoItem);\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2RvSXRlbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7O0FBS0E7QUFDMEI7QUFDd0I7QUFFbEQsd0JBQXdCO0FBQ3hCLE1BQU1FLFdBQVcsU0FBaUQ7UUFBaEQsRUFBRUMsS0FBSSxFQUFFQyxTQUFRLEVBQUVDLFNBQVEsRUFBRUMsY0FBYSxFQUFFO1FBQ3hDSDtJQUFuQixNQUFNSSxhQUFhSixDQUFBQSxvQkFBQUEsS0FBS0ssV0FBVyxjQUFoQkwsK0JBQUFBLEtBQUFBLElBQUFBLGlCQUFrQixDQUFDRyxjQUFjO0lBQ3BELE1BQU1HLGNBQWNOLEtBQUtPLFNBQVMsSUFBS0gsY0FBY0EsV0FBV0csU0FBUztJQUV6RSxNQUFNQyxlQUFlLElBQU07UUFDekJQLFNBQVNELEtBQUtTLEVBQUUsRUFBRVQsS0FBS1UsUUFBUSxHQUFHLDhEQUE4RDtJQUNsRztJQUVBLG9CQUFvQjtJQUNwQixxQkFDRSw4REFBQ0M7UUFBR0MsV0FBV2QsNkVBQWU7OzBCQUc1Qiw4REFBQ2dCO2dCQUFNQyxNQUFLO2dCQUFXQyxTQUFTVjtnQkFBYVcsVUFBVVQ7Ozs7OzswQkFDdkQsOERBQUNVO2dCQUFPQyxTQUFROzs7Ozs7MEJBR2hCLDhEQUFDQztnQkFDQ1IsV0FBV2QsNkVBQWU7Z0JBQzFCd0IsT0FBTztvQkFBRUMsZ0JBQWdCakIsY0FBYyxpQkFBaUIsTUFBTTtnQkFBQzswQkFFOUROLEtBQUt3QixJQUFJOzs7Ozs7MEJBR1osOERBQUNKOzBCQUFNcEIsS0FBS3lCLElBQUk7Ozs7OztZQUFROzBCQUV4Qiw4REFBQ0w7MEJBQU1wQixLQUFLMEIsSUFBSTs7Ozs7O1lBQVE7MEJBR3hCLDhEQUFDUjtnQkFBT0MsU0FBU2pCOzBCQUFVOzs7Ozs7Ozs7Ozs7QUFHakM7S0FoQ01IO0FBa0NOLHdCQUF3QjtBQUN4QiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ub2RvSXRlbS5qcz9kNTIyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIOqwgeqwgeydmCDtlaAg7J28IO2VreuqqeydhCDroIzrjZTrp4HtlZjripQg7Lu07Y+s64SM7Yq47J6F64uI64ukLlxuICDqsIEg7ZWgIOydvOydmCDsmYTro4wg7IOB7YOc7JeQIOuUsOudvCDssrTtgazrsJXsiqTsmYAg7YWN7Iqk7Yq4IOyKpO2DgOydvOydhCDrj5nquLDtmZTtlZjrqbAsXG4gIOyCreygnCDrsoTtirzsnYQg7Ya17ZW0IO2VtOuLuSDtlaAg7J287J2EIOyCreygnO2VoCDsiJgg7J6I7Iq164uI64ukLlxuICDsnbQg7Lu07Y+s64SM7Yq464qUIGBUb2RvTGlzdC5qc2Dsl5DshJwg7IKs7Jqp65CY7Ja0IO2VoCDsnbwg66qp66Gd7J2EIOq1rOyEse2VqeuLiOuLpC5cbiovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ub2RvTGlzdC5tb2R1bGUuY3NzXCI7XG5cbi8vIFRvZG9JdGVtIOy7tO2PrOuEjO2KuOulvCDsoJXsnZjtlanri4jri6QuXG5jb25zdCBUb2RvSXRlbSA9ICh7IHRvZG8sIG9uVG9nZ2xlLCBvbkRlbGV0ZSwgY3VycmVudFVzZXJJZCB9KSA9PiB7XG4gIGNvbnN0IGpvaW5lZFVzZXIgPSB0b2RvLmpvaW5lZFVzZXJzPy5bY3VycmVudFVzZXJJZF07XG4gIGNvbnN0IGlzQ29tcGxldGVkID0gdG9kby5jb21wbGV0ZWQgfHwgKGpvaW5lZFVzZXIgJiYgam9pbmVkVXNlci5jb21wbGV0ZWQpO1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICBvblRvZ2dsZSh0b2RvLmlkLCB0b2RvLmlzUHVibGljKTsgLy8gUGFzcyB0aGUgdG9kbyBpZCBhbmQgaXNQdWJsaWMgZmxhZyB0byB0aGUgb25Ub2dnbGUgZnVuY3Rpb25cbiAgfTtcblxuICAvLyDqsIEg7ZWgIOydvCDtla3rqqnsnYQg66CM642U66eB7ZWp64uI64ukLlxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy50b2RvSXRlbX0+XG4gICAgICB7Lyog7LK07YGs67CV7Iqk66W8IOugjOuNlOunge2VmOqzoCwg7LK07YGs67CV7Iqk7J2YIOyDge2DnOulvCDtlaAg7J287J2YIOyZhOujjCDsg4Htg5zsmYAg64+Z6riw7ZmU7ZWp64uI64ukLlxuICAgICAgICAgIOyytO2BrOuwleyKpOydmCDsg4Htg5zqsIAg67OA6rK965CY66m0IG9uVG9nZ2xlIO2VqOyImOulvCDtmLjstpztlZjsl6wg7JmE66OMIOyDge2DnOulvCDsl4XrjbDsnbTtirjtlanri4jri6QuICovfVxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2lzQ29tcGxldGVkfSBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlfSAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPVwi7JmE66OM7ZaI7Iq164uI64ukLlwiPjwvYnV0dG9uPlxuXG4gICAgICB7Lyog7ZWgIOydvOydmCDthY3siqTtirjrpbwg66CM642U66eB7ZWY6rOgLCDsmYTro4wg7IOB7YOc7JeQIOuUsOudvCDthY3siqTtirjsl5Ag7Leo7IaM7ISg7J2EIOyggeyaqe2VqeuLiOuLpC4gKi99XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50b2RvVGV4dH1cbiAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IGlzQ29tcGxldGVkID8gXCJsaW5lLXRocm91Z2hcIiA6IFwibm9uZVwiIH19XG4gICAgICA+XG4gICAgICAgIHt0b2RvLnRleHR9XG4gICAgICA8L3NwYW4+XG5cbiAgICAgIDxzcGFuPnt0b2RvLmRhdGV9PC9zcGFuPlxuICAgICAgJm5ic3A7XG4gICAgICA8c3Bhbj57dG9kby50aW1lfTwvc3Bhbj5cbiAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xuICAgICAgey8qIOyCreygnCDrsoTtirzsnYQg66CM642U66eB7ZWY6rOgLCDtgbTrpq0g7IucIG9uRGVsZXRlIO2VqOyImOulvCDtmLjstpztlZjsl6wg7ZW064u5IO2VoCDsnbzsnYQg7IKt7KCc7ZWp64uI64ukLiAqL31cbiAgICAgIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PkRlbGV0ZTwvYnV0dG9uPlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG4vLyBUb2RvSXRlbSDsu7Ttj6zrhIztirjrpbwg64K067O064OF64uI64ukLlxuZXhwb3J0IGRlZmF1bHQgVG9kb0l0ZW07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJUb2RvSXRlbSIsInRvZG8iLCJvblRvZ2dsZSIsIm9uRGVsZXRlIiwiY3VycmVudFVzZXJJZCIsImpvaW5lZFVzZXIiLCJqb2luZWRVc2VycyIsImlzQ29tcGxldGVkIiwiY29tcGxldGVkIiwiaGFuZGxlVG9nZ2xlIiwiaWQiLCJpc1B1YmxpYyIsImxpIiwiY2xhc3NOYW1lIiwidG9kb0l0ZW0iLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiIsInRvZG9UZXh0Iiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHQiLCJkYXRlIiwidGltZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TodoItem.js\n"));

/***/ })

});