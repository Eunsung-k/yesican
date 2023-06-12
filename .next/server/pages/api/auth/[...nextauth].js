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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next-auth/providers/kakao":
/*!********************************************!*\
  !*** external "next-auth/providers/kakao" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/kakao");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_kakao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/kakao */ \"next-auth/providers/kakao\");\n/* harmony import */ var next_auth_providers_kakao__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_kakao__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_kakao__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.KAKAO_CLIENT_ID,\n            clientSecret: process.env.KAKAO_CLIENT_SECRET\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        async session ({ session , token , user  }) {\n            session.user.id = token.sub;\n            session.user.name = token.name;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ3FCO0FBQ0U7QUFFeEQsaUVBQWVBLGdEQUFRQSxDQUFDO0lBQ3BCRyxXQUFXO1FBQ1BGLGdFQUFhQSxDQUFDO1lBQ1ZHLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtZQUNyQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxtQkFBbUI7UUFDakQ7UUFDQVAsaUVBQWNBLENBQUM7WUFDWEUsVUFBVUMsUUFBUUMsR0FBRyxDQUFDSSxnQkFBZ0I7WUFDdENGLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0ssb0JBQW9CO1FBQ2xEO0tBQ0g7SUFFREMsV0FBVztRQUNQLE1BQU1DLFNBQVEsRUFBRUEsUUFBTyxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRSxFQUFFO1lBQ3BDRixRQUFRRSxJQUFJLENBQUNDLEVBQUUsR0FBR0YsTUFBTUcsR0FBRztZQUMzQkosUUFBUUUsSUFBSSxDQUFDRyxJQUFJLEdBQUdKLE1BQU1JLElBQUk7WUFDOUIsT0FBT0w7UUFDWDtJQUNKO0FBQ0osRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzc4YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBLYWthb1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2tha2FvXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgS2FrYW9Qcm92aWRlcih7XG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuS0FLQU9fQ0xJRU5UX0lELFxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5LQUtBT19DTElFTlRfU0VDUkVULFxuICAgICAgICB9KSxcbiAgICAgICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgICAgICB9KSxcbiAgICBdLFxuXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiwgdXNlciB9KSB7XG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5zdWI7XG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIubmFtZSA9IHRva2VuLm5hbWU7XG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiS2FrYW9Qcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiS0FLQU9fQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiS0FLQU9fQ0xJRU5UX1NFQ1JFVCIsIkdPT0dMRV9DTElFTlRfSUQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsInVzZXIiLCJpZCIsInN1YiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();