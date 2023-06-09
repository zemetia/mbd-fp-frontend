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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/nprogress.css */ \"./src/styles/nprogress.css\");\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Toast */ \"./src/components/Toast.tsx\");\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/api */ \"./src/lib/api.ts\");\n/* harmony import */ var _seo_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/seo.config */ \"./src/seo.config.ts\");\n/* harmony import */ var _store_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/store/helper */ \"./src/store/helper.tsx\");\n/* harmony import */ var _store_useSubjectStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/store/useSubjectStore */ \"./src/store/useSubjectStore.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeStart\", (nprogress__WEBPACK_IMPORTED_MODULE_5___default().start));\nnext_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeError\", (nprogress__WEBPACK_IMPORTED_MODULE_5___default().done));\nnext_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeComplete\", (nprogress__WEBPACK_IMPORTED_MODULE_5___default().done));\nconst defaultQueryFn = async (param)=>{\n    let { queryKey  } = param;\n    const { data  } = await _lib_api__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"\".concat(queryKey === null || queryKey === void 0 ? void 0 : queryKey[0]));\n    return data;\n};\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__.QueryClient({\n    defaultOptions: {\n        queries: {\n            queryFn: defaultQueryFn\n        }\n    }\n});\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const subjectStore = _store_useSubjectStore__WEBPACK_IMPORTED_MODULE_10__[\"default\"].usePickedSubjects();\n    const hydrateSubject = (0,_store_helper__WEBPACK_IMPORTED_MODULE_9__.usePersistStoreHydration)(subjectStore);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__.QueryClientProvider, {\n        client: queryClient,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Kuliah\\\\Mata Kuliah\\\\Rencana FRS\\\\informatika-its-frs-data\\\\src\\\\pages\\\\_app.page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_4__.DefaultSeo, {\n                ..._seo_config__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n            }, void 0, false, {\n                fileName: \"D:\\\\Kuliah\\\\Mata Kuliah\\\\Rencana FRS\\\\informatika-its-frs-data\\\\src\\\\pages\\\\_app.page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            hydrateSubject && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Kuliah\\\\Mata Kuliah\\\\Rencana FRS\\\\informatika-its-frs-data\\\\src\\\\pages\\\\_app.page.tsx\",\n                lineNumber: 43,\n                columnNumber: 26\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Kuliah\\\\Mata Kuliah\\\\Rencana FRS\\\\informatika-its-frs-data\\\\src\\\\pages\\\\_app.page.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"VjTnumeXUM2bHRTkC5OQ9GXbECQ=\", false, function() {\n    return [\n        _store_useSubjectStore__WEBPACK_IMPORTED_MODULE_10__[\"default\"].usePickedSubjects,\n        _store_helper__WEBPACK_IMPORTED_MODULE_9__.usePersistStoreHydration\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBOEI7QUFDRTtBQU1EO0FBRUU7QUFDSztBQUNKO0FBRUs7QUFDWDtBQUNHO0FBQzJCO0FBQ0o7QUFFdERFLDREQUFnQixDQUFDLG9CQUFvQkUsd0RBQWU7QUFDcERGLDREQUFnQixDQUFDLG9CQUFvQkUsdURBQWM7QUFDbkRGLDREQUFnQixDQUFDLHVCQUF1QkUsdURBQWM7QUFFdEQsTUFBTVUsaUJBQWlCLGVBQXNDO1FBQS9CLEVBQUVDLFNBQVEsRUFBZ0I7SUFDdEQsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBRyxNQUFNVixvREFBTyxDQUFDLEdBQWlCLE9BQWRTLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsUUFBVSxDQUFDLEVBQUU7SUFDL0MsT0FBT0M7QUFDVDtBQUNBLE1BQU1FLGNBQWMsSUFBSWxCLCtEQUFXQSxDQUFDO0lBQ2xDbUIsZ0JBQWdCO1FBQ2RDLFNBQVM7WUFDUEMsU0FBU1A7UUFDWDtJQUNGO0FBQ0Y7QUFFZSxTQUFTUSxJQUFJLEtBQWtDLEVBQUU7UUFBcEMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksR0FBbEM7O0lBQzFCLE1BQU1DLGVBQWVoQixpRkFBaUM7SUFDdEQsTUFBTWtCLGlCQUFpQm5CLHVFQUF3QkEsQ0FBQ2lCO0lBQ2hELHFCQUNFLDhEQUFDeEIsdUVBQW1CQTtRQUFDMkIsUUFBUVY7OzBCQUMzQiw4REFBQ2IseURBQUtBOzs7OzswQkFDTiw4REFBQ0YsZ0RBQVVBO2dCQUFFLEdBQUdJLG1EQUFHOzs7Ozs7WUFDbEJvQixnQ0FBa0IsOERBQUNKO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUdqRCxDQUFDO0dBVnVCRjs7UUFDRGIsaUZBQWlDaUI7UUFDL0JsQixtRUFBd0JBOzs7S0FGekJjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLnBhZ2UudHN4PzkzYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCAnQC9zdHlsZXMvbnByb2dyZXNzLmNzcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIFF1ZXJ5Q2xpZW50LFxyXG4gIFF1ZXJ5Q2xpZW50UHJvdmlkZXIsXHJcbiAgUXVlcnlPcHRpb25zLFxyXG59IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5pbXBvcnQgblByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcblxyXG5pbXBvcnQgVG9hc3QgZnJvbSAnQC9jb21wb25lbnRzL1RvYXN0JztcclxuaW1wb3J0IGFwaSBmcm9tICdAL2xpYi9hcGknO1xyXG5pbXBvcnQgU0VPIGZyb20gJ0Avc2VvLmNvbmZpZyc7XHJcbmltcG9ydCB7IHVzZVBlcnNpc3RTdG9yZUh5ZHJhdGlvbiB9IGZyb20gJ0Avc3RvcmUvaGVscGVyJztcclxuaW1wb3J0IHVzZVN1YmplY3RTdG9yZSBmcm9tICdAL3N0b3JlL3VzZVN1YmplY3RTdG9yZSc7XHJcblxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgblByb2dyZXNzLnN0YXJ0KTtcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIG5Qcm9ncmVzcy5kb25lKTtcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIG5Qcm9ncmVzcy5kb25lKTtcclxuXHJcbmNvbnN0IGRlZmF1bHRRdWVyeUZuID0gYXN5bmMgKHsgcXVlcnlLZXkgfTogUXVlcnlPcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KGAke3F1ZXJ5S2V5Py5bMF19YCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHtcclxuICBkZWZhdWx0T3B0aW9uczoge1xyXG4gICAgcXVlcmllczoge1xyXG4gICAgICBxdWVyeUZuOiBkZWZhdWx0UXVlcnlGbixcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIGNvbnN0IHN1YmplY3RTdG9yZSA9IHVzZVN1YmplY3RTdG9yZS51c2VQaWNrZWRTdWJqZWN0cygpO1xyXG4gIGNvbnN0IGh5ZHJhdGVTdWJqZWN0ID0gdXNlUGVyc2lzdFN0b3JlSHlkcmF0aW9uKHN1YmplY3RTdG9yZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxyXG4gICAgICA8VG9hc3QgLz5cclxuICAgICAgPERlZmF1bHRTZW8gey4uLlNFT30gLz5cclxuICAgICAge2h5ZHJhdGVTdWJqZWN0ICYmIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz59XHJcbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUm91dGVyIiwiRGVmYXVsdFNlbyIsIm5Qcm9ncmVzcyIsIlRvYXN0IiwiYXBpIiwiU0VPIiwidXNlUGVyc2lzdFN0b3JlSHlkcmF0aW9uIiwidXNlU3ViamVjdFN0b3JlIiwiZXZlbnRzIiwib24iLCJzdGFydCIsImRvbmUiLCJkZWZhdWx0UXVlcnlGbiIsInF1ZXJ5S2V5IiwiZGF0YSIsImdldCIsInF1ZXJ5Q2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwicXVlcnlGbiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN1YmplY3RTdG9yZSIsInVzZVBpY2tlZFN1YmplY3RzIiwiaHlkcmF0ZVN1YmplY3QiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.page.tsx\n"));

/***/ })

});