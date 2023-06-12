"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth/signin";
exports.ids = ["pages/auth/signin"];
exports.modules = {

/***/ "./src/pages/auth/signin.js":
/*!**********************************!*\
  !*** ./src/pages/auth/signin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Signin)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Signin() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const welcomeMessage = \"Welcome to the TODO web service!\\nThis is a Todo web service!\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center h-screen\",\n        children: session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid m-auto text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"m-4\",\n                    children: [\n                        \"Signed in as \",\n                        session.user.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/leemir/Desktop/2023 Spring/wep programming/team/yesican/src/pages/auth/signin.js\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: `w-40\n                       justify-self-center\n                       p-1 mb-4\n                     bg-pink-500 text-white\n                       border border-pink-500 rounded\n                     hover:bg-white hover:text-pink-500`,\n                    onClick: ()=>router.push(\"/\"),\n                    children: \"Go to Home\"\n                }, void 0, false, {\n                    fileName: \"/Users/leemir/Desktop/2023 Spring/wep programming/team/yesican/src/pages/auth/signin.js\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: `w-40\n                       justify-self-center\n                       p-1 mb-4\n                     text-pink-500\n                       border border-pink-500 rounded\n                     hover:bg-white hover:text-pink-500`,\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"/Users/leemir/Desktop/2023 Spring/wep programming/team/yesican/src/pages/auth/signin.js\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/leemir/Desktop/2023 Spring/wep programming/team/yesican/src/pages/auth/signin.js\",\n            lineNumber: 13,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid m-auto text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"m-4\",\n                    children: welcomeMessage\n                }, void 0, false, {\n                    fileName: \"/Users/leemir/Desktop/2023 Spring/wep programming/team/yesican/src/pages/auth/signin.js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"m-4\",\n                    children: \"Not signed in\"\n                }, void 0, false, {\n                    fileName: \"/Users/leemir/Desktop/2023 Spring/wep programming/team/yesican/src/pages/auth/signin.js\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: `w-40\n                       justify-self-center\n                       p-1 mb-4\n                     bg-pink-500 text-white\n                       border border-pink-500 rounded\n                     hover:bg-white hover:text-pink-500`,\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(),\n                    children: \"Sign in\"\n                }, void 0, false, {\n                    fileName: \"/Users/leemir/Desktop/2023 Spring/wep programming/team/yesican/src/pages/auth/signin.js\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/leemir/Desktop/2023 Spring/wep programming/team/yesican/src/pages/auth/signin.js\",\n            lineNumber: 39,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/leemir/Desktop/2023 Spring/wep programming/team/yesican/src/pages/auth/signin.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXV0aC9zaWduaW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDc0I7QUFFL0MsU0FBU0ksU0FBUztJQUMvQixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxNQUFNQyxRQUFPLEVBQUUsR0FBR04sMkRBQVVBO0lBRXBDLE1BQU1PLGlCQUFpQjtJQUV2QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWkgsd0JBQ0MsOERBQUNFO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7d0JBQU07d0JBQWNILFFBQVFJLElBQUksQ0FBQ0MsSUFBSTs7Ozs7Ozs4QkFDcEQsOERBQUNDO29CQUNDSCxXQUFXLENBQUM7Ozs7O3VEQUsrQixDQUFDO29CQUM1Q0ksU0FBUyxJQUFNVCxPQUFPVSxJQUFJLENBQUM7OEJBQzVCOzs7Ozs7OEJBR0QsOERBQUNGO29CQUNDSCxXQUFXLENBQUM7Ozs7O3VEQUsrQixDQUFDO29CQUM1Q0ksU0FBUyxJQUFNWCx3REFBT0E7OEJBQ3ZCOzs7Ozs7Ozs7OztpQ0FLSCw4REFBQ007WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNaRjs7Ozs7OzhCQUVILDhEQUFDQztvQkFBSUMsV0FBVTs4QkFBTTs7Ozs7OzhCQUNyQiw4REFBQ0c7b0JBQ0NILFdBQVcsQ0FBQzs7Ozs7dURBSytCLENBQUM7b0JBQzVDSSxTQUFTLElBQU1aLHVEQUFNQTs4QkFDdEI7Ozs7Ozs7Ozs7O2dCQUlKOzs7Ozs7QUFHUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wYWdlcy9hdXRoL3NpZ25pbi5qcz8wZTQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduaW4oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcblxuICBjb25zdCB3ZWxjb21lTWVzc2FnZSA9IFwiV2VsY29tZSB0byB0aGUgVE9ETyB3ZWIgc2VydmljZSFcXG5UaGlzIGlzIGEgVG9kbyB3ZWIgc2VydmljZSFcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlblwiPlxuICAgICAge3Nlc3Npb24gPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtLWF1dG8gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNFwiPlNpZ25lZCBpbiBhcyB7c2Vzc2lvbi51c2VyLm5hbWV9PC9kaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy00MFxuICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGYtY2VudGVyXG4gICAgICAgICAgICAgICAgICAgICAgIHAtMSBtYi00XG4gICAgICAgICAgICAgICAgICAgICBiZy1waW5rLTUwMCB0ZXh0LXdoaXRlXG4gICAgICAgICAgICAgICAgICAgICAgIGJvcmRlciBib3JkZXItcGluay01MDAgcm91bmRlZFxuICAgICAgICAgICAgICAgICAgICAgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1waW5rLTUwMGB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgR28gdG8gSG9tZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctNDBcbiAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmLWNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICBwLTEgbWItNFxuICAgICAgICAgICAgICAgICAgICAgdGV4dC1waW5rLTUwMFxuICAgICAgICAgICAgICAgICAgICAgICBib3JkZXIgYm9yZGVyLXBpbmstNTAwIHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtcGluay01MDBgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbk91dCgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24gb3V0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG0tYXV0byB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS00XCI+XG4gICAgICAgICAgICB7d2VsY29tZU1lc3NhZ2V9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTRcIj5Ob3Qgc2lnbmVkIGluPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy00MFxuICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGYtY2VudGVyXG4gICAgICAgICAgICAgICAgICAgICAgIHAtMSBtYi00XG4gICAgICAgICAgICAgICAgICAgICBiZy1waW5rLTUwMCB0ZXh0LXdoaXRlXG4gICAgICAgICAgICAgICAgICAgICAgIGJvcmRlciBib3JkZXItcGluay01MDAgcm91bmRlZFxuICAgICAgICAgICAgICAgICAgICAgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1waW5rLTUwMGB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTZXNzaW9uIiwic2lnbkluIiwic2lnbk91dCIsIlNpZ25pbiIsInJvdXRlciIsImRhdGEiLCJzZXNzaW9uIiwid2VsY29tZU1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJ1c2VyIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/auth/signin.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/auth/signin.js"));
module.exports = __webpack_exports__;

})();