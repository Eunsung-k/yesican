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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_kakao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/kakao */ \"next-auth/providers/kakao\");\n/* harmony import */ var next_auth_providers_kakao__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_kakao__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// import Providers from \"next-auth/providers\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_kakao__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.KAKAO_CLIENT_ID,\n            clientSecret: process.env.KAKAO_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        async session ({ session , token , user  }) {\n            session.user.id = token.sub;\n            session.user.name = token.name;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNxQjtBQUN0RCwrQ0FBK0M7QUFFL0MsaUVBQWVBLGdEQUFRQSxDQUFDO0lBQ3BCRSxXQUFXO1FBQ1BELGdFQUFhQSxDQUFDO1lBQ1ZFLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtZQUNyQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxtQkFBbUI7UUFDakQ7S0FLSDtJQUVEQyxXQUFXO1FBQ1AsTUFBTUMsU0FBUSxFQUFFQSxRQUFPLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFLEVBQUU7WUFDcENGLFFBQVFFLElBQUksQ0FBQ0MsRUFBRSxHQUFHRixNQUFNRyxHQUFHO1lBQzNCSixRQUFRRSxJQUFJLENBQUNHLElBQUksR0FBR0osTUFBTUksSUFBSTtZQUM5QixPQUFPTDtRQUNYO0lBQ0o7QUFDSixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NzhhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgS2FrYW9Qcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9rYWthb1wiO1xyXG4vLyBpbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBLYWthb1Byb3ZpZGVyKHtcclxuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LktBS0FPX0NMSUVOVF9JRCxcclxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5LQUtBT19DTElFTlRfU0VDUkVULFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIFByb3ZpZGVyLkdvb2dsZSh7XHJcbiAgICAgICAgLy8gICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxyXG4gICAgICAgIC8vICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxyXG4gICAgICAgIC8vIH0pLFxyXG4gICAgXSxcclxuXHJcbiAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4sIHVzZXIgfSkge1xyXG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5zdWI7XHJcbiAgICAgICAgICAgIHNlc3Npb24udXNlci5uYW1lID0gdG9rZW4ubmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pOyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIktha2FvUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJLQUtBT19DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJLQUtBT19DTElFTlRfU0VDUkVUIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsImlkIiwic3ViIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

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