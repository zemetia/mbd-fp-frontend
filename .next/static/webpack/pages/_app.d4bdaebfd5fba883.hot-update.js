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

/***/ "./src/pages/_app.page.tsx":
/*!*********************************!*\
  !*** ./src/pages/_app.page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/nprogress.css */ \"./src/styles/nprogress.css\");\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Toast */ \"./src/components/Toast.tsx\");\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/api */ \"./src/lib/api.ts\");\n/* harmony import */ var _seo_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/seo.config */ \"./src/seo.config.ts\");\n\n\n\n\n\n\n\n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeStart\", (nprogress__WEBPACK_IMPORTED_MODULE_5___default().start));\nnext_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeError\", (nprogress__WEBPACK_IMPORTED_MODULE_5___default().done));\nnext_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeComplete\", (nprogress__WEBPACK_IMPORTED_MODULE_5___default().done));\nconst defaultQueryFn = async (param)=>{\n    let { queryKey  } = param;\n    const { data  } = await _lib_api__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"\".concat(queryKey === null || queryKey === void 0 ? void 0 : queryKey[0]));\n    return data;\n};\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.QueryClient({\n    defaultOptions: {\n        queries: {\n            queryFn: defaultQueryFn\n        }\n    }\n});\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.QueryClientProvider, {\n        client: queryClient,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Kuliah\\\\Mata Kuliah\\\\Rencana FRS\\\\informatika-its-frs-data\\\\src\\\\pages\\\\_app.page.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_4__.DefaultSeo, {\n                ..._seo_config__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n            }, void 0, false, {\n                fileName: \"D:\\\\Kuliah\\\\Mata Kuliah\\\\Rencana FRS\\\\informatika-its-frs-data\\\\src\\\\pages\\\\_app.page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Kuliah\\\\Mata Kuliah\\\\Rencana FRS\\\\informatika-its-frs-data\\\\src\\\\pages\\\\_app.page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Kuliah\\\\Mata Kuliah\\\\Rencana FRS\\\\informatika-its-frs-data\\\\src\\\\pages\\\\_app.page.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDRTtBQU1EO0FBRUU7QUFDSztBQUNKO0FBRUs7QUFDWDtBQUNHO0FBRS9CRSw0REFBZ0IsQ0FBQyxvQkFBb0JFLHdEQUFlO0FBQ3BERiw0REFBZ0IsQ0FBQyxvQkFBb0JFLHVEQUFjO0FBQ25ERiw0REFBZ0IsQ0FBQyx1QkFBdUJFLHVEQUFjO0FBRXRELE1BQU1RLGlCQUFpQixlQUFzQztRQUEvQixFQUFFQyxTQUFRLEVBQWdCO0lBQ3RELE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUcsTUFBTVIsb0RBQU8sQ0FBQyxHQUFpQixPQUFkTyxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFFBQVUsQ0FBQyxFQUFFO0lBQy9DLE9BQU9DO0FBQ1Q7QUFDQSxNQUFNRSxjQUFjLElBQUloQiw4REFBV0EsQ0FBQztJQUNsQ2lCLGdCQUFnQjtRQUNkQyxTQUFTO1lBQ1BDLFNBQVNQO1FBQ1g7SUFDRjtBQUNGO0FBRWUsU0FBU1EsSUFBSSxLQUFrQyxFQUFFO1FBQXBDLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEdBQWxDO0lBQzFCLHFCQUNFLDhEQUFDckIsc0VBQW1CQTtRQUFDc0IsUUFBUVA7OzBCQUMzQiw4REFBQ1gseURBQUtBOzs7OzswQkFDTiw4REFBQ0YsZ0RBQVVBO2dCQUFFLEdBQUdJLG1EQUFHOzs7Ozs7MEJBQ25CLDhEQUFDYztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQztLQVJ1QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAucGFnZS50c3g/OTNiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0ICdAL3N0eWxlcy9ucHJvZ3Jlc3MuY3NzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgUXVlcnlDbGllbnQsXHJcbiAgUXVlcnlDbGllbnRQcm92aWRlcixcclxuICBRdWVyeU9wdGlvbnMsXHJcbn0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IERlZmF1bHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XHJcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuXHJcbmltcG9ydCBUb2FzdCBmcm9tICdAL2NvbXBvbmVudHMvVG9hc3QnO1xyXG5pbXBvcnQgYXBpIGZyb20gJ0AvbGliL2FwaSc7XHJcbmltcG9ydCBTRU8gZnJvbSAnQC9zZW8uY29uZmlnJztcclxuXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBuUHJvZ3Jlc3Muc3RhcnQpO1xyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgblByb2dyZXNzLmRvbmUpO1xyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgblByb2dyZXNzLmRvbmUpO1xyXG5cclxuY29uc3QgZGVmYXVsdFF1ZXJ5Rm4gPSBhc3luYyAoeyBxdWVyeUtleSB9OiBRdWVyeU9wdGlvbnMpID0+IHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoYCR7cXVlcnlLZXk/LlswXX1gKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoe1xyXG4gIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICBxdWVyaWVzOiB7XHJcbiAgICAgIHF1ZXJ5Rm46IGRlZmF1bHRRdWVyeUZuLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxyXG4gICAgICA8VG9hc3QgLz5cclxuICAgICAgPERlZmF1bHRTZW8gey4uLlNFT30gLz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlJvdXRlciIsIkRlZmF1bHRTZW8iLCJuUHJvZ3Jlc3MiLCJUb2FzdCIsImFwaSIsIlNFTyIsImV2ZW50cyIsIm9uIiwic3RhcnQiLCJkb25lIiwiZGVmYXVsdFF1ZXJ5Rm4iLCJxdWVyeUtleSIsImRhdGEiLCJnZXQiLCJxdWVyeUNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInF1ZXJ5Rm4iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.page.tsx\n"));

/***/ })

});