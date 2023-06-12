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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Signin)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Signin() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center h-screen\",\n        children: session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid m-auto text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"m-4\",\n                    children: [\n                        \"Signed in as \",\n                        session.user.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\CSY\\\\OneDrive - SNU\\\\문서\\\\GitHub\\\\yesican\\\\src\\\\pages\\\\auth\\\\signin.js\",\n                    lineNumber: 12,\n                    columnNumber: 12\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: `w-40\r\n                       justify-self-center\r\n                       p-1 mb-4\r\n                     bg-pink-500 text-white\r\n                       border border-pink-500 rounded\r\n                     hover:bg-white hover:text-pink-500`,\n                    onClick: ()=>router.push(\"/\"),\n                    children: \"Go to Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CSY\\\\OneDrive - SNU\\\\문서\\\\GitHub\\\\yesican\\\\src\\\\pages\\\\auth\\\\signin.js\",\n                    lineNumber: 13,\n                    columnNumber: 12\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: `w-40\r\n                       justify-self-center\r\n                       p-1 mb-4\r\n                     text-pink-500\r\n                       border border-pink-500 rounded\r\n                     hover:bg-white hover:text-pink-500`,\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CSY\\\\OneDrive - SNU\\\\문서\\\\GitHub\\\\yesican\\\\src\\\\pages\\\\auth\\\\signin.js\",\n                    lineNumber: 24,\n                    columnNumber: 12\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\CSY\\\\OneDrive - SNU\\\\문서\\\\GitHub\\\\yesican\\\\src\\\\pages\\\\auth\\\\signin.js\",\n            lineNumber: 11,\n            columnNumber: 10\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid m-auto text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"m-4\",\n                    children: \"Not signed in\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CSY\\\\OneDrive - SNU\\\\문서\\\\GitHub\\\\yesican\\\\src\\\\pages\\\\auth\\\\signin.js\",\n                    lineNumber: 38,\n                    columnNumber: 12\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: `w-40\r\n                       justify-self-center\r\n                       p-1 mb-4\r\n                     bg-pink-500 text-white\r\n                       border border-pink-500 rounded\r\n                     hover:bg-white hover:text-pink-500`,\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(),\n                    children: \"Sign in\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CSY\\\\OneDrive - SNU\\\\문서\\\\GitHub\\\\yesican\\\\src\\\\pages\\\\auth\\\\signin.js\",\n                    lineNumber: 39,\n                    columnNumber: 12\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\CSY\\\\OneDrive - SNU\\\\문서\\\\GitHub\\\\yesican\\\\src\\\\pages\\\\auth\\\\signin.js\",\n            lineNumber: 37,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\CSY\\\\OneDrive - SNU\\\\문서\\\\GitHub\\\\yesican\\\\src\\\\pages\\\\auth\\\\signin.js\",\n        lineNumber: 9,\n        columnNumber: 6\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXV0aC9zaWduaW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDdUI7QUFFL0MsU0FBU0ksU0FBUztJQUMvQixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxNQUFNQyxRQUFPLEVBQUUsR0FBR04sMkRBQVVBO0lBRXBDLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVO2tCQUNaRix3QkFDQyw4REFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzt3QkFBTTt3QkFBY0YsUUFBUUcsSUFBSSxDQUFDQyxJQUFJOzs7Ozs7OzhCQUNwRCw4REFBQ0M7b0JBQ0NILFdBQVcsQ0FBQzs7Ozs7dURBSzhCLENBQUM7b0JBQzNDSSxTQUFTLElBQU1SLE9BQU9TLElBQUksQ0FBQzs4QkFDNUI7Ozs7Ozs4QkFHRCw4REFBQ0Y7b0JBQ0NILFdBQVcsQ0FBQzs7Ozs7dURBSzhCLENBQUM7b0JBQzNDSSxTQUFTLElBQU1WLHdEQUFPQTs4QkFDdkI7Ozs7Ozs7Ozs7O2lDQUtILDhEQUFDSztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQU07Ozs7Ozs4QkFDckIsOERBQUNHO29CQUNDSCxXQUFXLENBQUM7Ozs7O3VEQUs4QixDQUFDO29CQUMzQ0ksU0FBUyxJQUFNWCx1REFBTUE7OEJBQ3RCOzs7Ozs7Ozs7OztnQkFJSjs7Ozs7O0FBR1AsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvcGFnZXMvYXV0aC9zaWduaW4uanM/MGU0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuIGltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25Jbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduaW4oKSB7XHJcbiAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGgtc2NyZWVuXCI+XHJcbiAgICAgICB7c2Vzc2lvbiA/IChcclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG0tYXV0byB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS00XCI+U2lnbmVkIGluIGFzIHtzZXNzaW9uLnVzZXIubmFtZX08L2Rpdj5cclxuICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmLWNlbnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgIHAtMSBtYi00XHJcbiAgICAgICAgICAgICAgICAgICAgIGJnLXBpbmstNTAwIHRleHQtd2hpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICBib3JkZXIgYm9yZGVyLXBpbmstNTAwIHJvdW5kZWRcclxuICAgICAgICAgICAgICAgICAgICAgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1waW5rLTUwMGB9XHJcbiAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XHJcbiAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgR28gdG8gSG9tZVxyXG4gICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctNDBcclxuICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGYtY2VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcC0xIG1iLTRcclxuICAgICAgICAgICAgICAgICAgICAgdGV4dC1waW5rLTUwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJvcmRlciBib3JkZXItcGluay01MDAgcm91bmRlZFxyXG4gICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LXBpbmstNTAwYH1cclxuICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX1cclxuICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICBTaWduIG91dFxyXG4gICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICkgOiAoXHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtLWF1dG8gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNFwiPk5vdCBzaWduZWQgaW48L2Rpdj5cclxuICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmLWNlbnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgIHAtMSBtYi00XHJcbiAgICAgICAgICAgICAgICAgICAgIGJnLXBpbmstNTAwIHRleHQtd2hpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICBib3JkZXIgYm9yZGVyLXBpbmstNTAwIHJvdW5kZWRcclxuICAgICAgICAgICAgICAgICAgICAgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1waW5rLTUwMGB9XHJcbiAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX1cclxuICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICBTaWduIGluXHJcbiAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgKX1cclxuICAgICA8L2Rpdj5cclxuICAgKTtcclxuIH0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU2Vzc2lvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJTaWduaW4iLCJyb3V0ZXIiLCJkYXRhIiwic2Vzc2lvbiIsImRpdiIsImNsYXNzTmFtZSIsInVzZXIiLCJuYW1lIiwiYnV0dG9uIiwib25DbGljayIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/auth/signin.js\n");

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