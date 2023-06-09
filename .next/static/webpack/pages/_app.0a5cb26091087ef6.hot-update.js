"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/lib/cookies.ts":
/*!****************************!*\
  !*** ./src/lib/cookies.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSchedule\": function() { return /* binding */ getSchedule; },\n/* harmony export */   \"getToken\": function() { return /* binding */ getToken; },\n/* harmony export */   \"removeToken\": function() { return /* binding */ removeToken; },\n/* harmony export */   \"setSchedule\": function() { return /* binding */ setSchedule; },\n/* harmony export */   \"setToken\": function() { return /* binding */ setToken; }\n/* harmony export */ });\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-cookie */ \"./node_modules/universal-cookie/es6/index.js\");\n\nconst cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n// !important: rename this file to cookies.ts\nconst getToken = ()=>{\n    return cookies.get(\"@myevent/token\");\n};\nconst setToken = (token)=>{\n    cookies.set(\"@myevent/token\", token, {\n        path: \"/\"\n    });\n};\nconst removeToken = ()=>{\n    cookies.remove(\"@myevent/token\", {\n        path: \"/\"\n    });\n};\nconst setSchedule = (schedule)=>{\n    cookies.set(\"@frsifits/schedule\", JSON.stringify(schedule), {\n        path: \"/\"\n    });\n};\nconst getSchedule = ()=>{\n    return cookies.get(\"@frsifits/schedule\");\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2Nvb2tpZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXVDO0FBSXZDLE1BQU1DLFVBQVUsSUFBSUQsd0RBQU9BO0FBQzNCLDZDQUE2QztBQUN0QyxNQUFNRSxXQUFXLElBQWM7SUFDcEMsT0FBT0QsUUFBUUUsR0FBRyxDQUFDO0FBQ3JCLEVBQUU7QUFFSyxNQUFNQyxXQUFXLENBQUNDLFFBQWtCO0lBQ3pDSixRQUFRSyxHQUFHLENBQUMsa0JBQWtCRCxPQUFPO1FBQ25DRSxNQUFNO0lBQ1I7QUFDRixFQUFFO0FBRUssTUFBTUMsY0FBYyxJQUFNO0lBQy9CUCxRQUFRUSxNQUFNLENBQUMsa0JBQWtCO1FBQy9CRixNQUFNO0lBQ1I7QUFDRixFQUFFO0FBRUssTUFBTUcsY0FBYyxDQUFDQyxXQUFpQztJQUMzRFYsUUFBUUssR0FBRyxDQUFDLHNCQUFzQk0sS0FBS0MsU0FBUyxDQUFDRixXQUFXO1FBQzFESixNQUFNO0lBQ1I7QUFDRixFQUFFO0FBRUssTUFBTU8sY0FBYyxJQUEwQjtJQUNuRCxPQUFPYixRQUFRRSxHQUFHLENBQUM7QUFDckIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL2Nvb2tpZXMudHM/Mjc1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuXHJcbmltcG9ydCBTdWJqZWN0SW50ZXJmYWNlIGZyb20gJ0AvdHlwZXMvZW50aXR5L3N1YmplY3QtaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG4vLyAhaW1wb3J0YW50OiByZW5hbWUgdGhpcyBmaWxlIHRvIGNvb2tpZXMudHNcclxuZXhwb3J0IGNvbnN0IGdldFRva2VuID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgcmV0dXJuIGNvb2tpZXMuZ2V0KCdAbXlldmVudC90b2tlbicpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFRva2VuID0gKHRva2VuOiBzdHJpbmcpID0+IHtcclxuICBjb29raWVzLnNldCgnQG15ZXZlbnQvdG9rZW4nLCB0b2tlbiwge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVRva2VuID0gKCkgPT4ge1xyXG4gIGNvb2tpZXMucmVtb3ZlKCdAbXlldmVudC90b2tlbicsIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRTY2hlZHVsZSA9IChzY2hlZHVsZTogU3ViamVjdEludGVyZmFjZVtdKSA9PiB7XHJcbiAgY29va2llcy5zZXQoJ0BmcnNpZml0cy9zY2hlZHVsZScsIEpTT04uc3RyaW5naWZ5KHNjaGVkdWxlKSwge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNjaGVkdWxlID0gKCk6IFN1YmplY3RJbnRlcmZhY2VbXSA9PiB7XHJcbiAgcmV0dXJuIGNvb2tpZXMuZ2V0KCdAZnJzaWZpdHMvc2NoZWR1bGUnKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkNvb2tpZXMiLCJjb29raWVzIiwiZ2V0VG9rZW4iLCJnZXQiLCJzZXRUb2tlbiIsInRva2VuIiwic2V0IiwicGF0aCIsInJlbW92ZVRva2VuIiwicmVtb3ZlIiwic2V0U2NoZWR1bGUiLCJzY2hlZHVsZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRTY2hlZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/cookies.ts\n"));

/***/ })

});