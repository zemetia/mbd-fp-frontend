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

/***/ "./src/pages/main/components/JadwalModal.tsx":
/*!***************************************************!*\
  !*** ./src/pages/main/components/JadwalModal.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ JadwalModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var use_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-local-storage */ \"./node_modules/use-local-storage/dist/index.js\");\n/* harmony import */ var use_local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_local_storage__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_modal_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/modal/Modal */ \"./src/components/modal/Modal.tsx\");\n/* harmony import */ var _json_dosen_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/json/dosen.json */ \"./src/json/dosen.json\");\n/* harmony import */ var _parsing_ParseFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/parsing/ParseFunction */ \"./src/parsing/ParseFunction.tsx\");\n/* harmony import */ var _store_useSubjectStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/useSubjectStore */ \"./src/store/useSubjectStore.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// type JadwalModalProps = {\n//   open: boolean;\n//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;\n// };\nfunction JadwalModal() {\n    _s();\n    const subjectStore = (0,_store_useSubjectStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [jadwal, setJadwal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [schedule, setSchedule] = use_local_storage__WEBPACK_IMPORTED_MODULE_2___default()(\"schedule\");\n    const onJadwalChange = (e)=>{\n        setJadwal(e.target.value);\n    };\n    const handleSave = ()=>{\n        setOpen(false);\n        localStorage.setItem(\"schedule\", jadwal);\n        subjectStore.addSchedule((0,_parsing_ParseFunction__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(jadwal, _json_dosen_json__WEBPACK_IMPORTED_MODULE_4__));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        open: open,\n        setOpen: setOpen,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Title, {\n                children: \"title\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Kuliah\\\\Mata Kuliah\\\\Rencana FRS\\\\informatika-its-frs-data\\\\src\\\\pages\\\\main\\\\components\\\\JadwalModal.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Body, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative p-6 flex-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white h-full w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"shadow-md shadow-neutral-400 resize-none w-full h-60 rounded-2xl drop-shadow-md p-3\",\n                                onChange: onJadwalChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Kuliah\\\\Mata Kuliah\\\\Rencana FRS\\\\informatika-its-frs-data\\\\src\\\\pages\\\\main\\\\components\\\\JadwalModal.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Kuliah\\\\Mata Kuliah\\\\Rencana FRS\\\\informatika-its-frs-data\\\\src\\\\pages\\\\main\\\\components\\\\JadwalModal.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Kuliah\\\\Mata Kuliah\\\\Rencana FRS\\\\informatika-its-frs-data\\\\src\\\\pages\\\\main\\\\components\\\\JadwalModal.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-end py-2 px-6 gap-2 border-t border-solid border-slate-200 rounded-b\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-black text-white hover:bg-neutral-800 uppercase text-xs px-6 py-3 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                            type: \"button\",\n                            onClick: handleSave,\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Kuliah\\\\Mata Kuliah\\\\Rencana FRS\\\\informatika-its-frs-data\\\\src\\\\pages\\\\main\\\\components\\\\JadwalModal.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Kuliah\\\\Mata Kuliah\\\\Rencana FRS\\\\informatika-its-frs-data\\\\src\\\\pages\\\\main\\\\components\\\\JadwalModal.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Kuliah\\\\Mata Kuliah\\\\Rencana FRS\\\\informatika-its-frs-data\\\\src\\\\pages\\\\main\\\\components\\\\JadwalModal.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Kuliah\\\\Mata Kuliah\\\\Rencana FRS\\\\informatika-its-frs-data\\\\src\\\\pages\\\\main\\\\components\\\\JadwalModal.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(JadwalModal, \"jTSxmI9/VOapkgKWzjUz74uHR9E=\", false, function() {\n    return [\n        _store_useSubjectStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        (use_local_storage__WEBPACK_IMPORTED_MODULE_2___default())\n    ];\n});\n_c = JadwalModal;\nvar _c;\n$RefreshReg$(_c, \"JadwalModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWFpbi9jb21wb25lbnRzL0phZHdhbE1vZGFsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE4QztBQUNFO0FBRUg7QUFDUDtBQUNRO0FBQ1E7QUFFdEQsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQiw0REFBNEQ7QUFDNUQsS0FBSztBQUVVLFNBQVNNLGNBQWM7O0lBQ3BDLE1BQU1DLGVBQWVGLGtFQUFlQTtJQUNwQyxNQUFNLENBQUNHLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQVM7SUFDN0MsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFVLElBQUk7SUFDOUMsTUFBTSxDQUFDWSxVQUFVQyxZQUFZLEdBQzNCWix3REFBZUEsQ0FBcUI7SUFFdEMsTUFBTWEsaUJBQWlCLENBQUNDLElBQXdDO1FBQzlETixVQUFVTSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDMUI7SUFFQSxNQUFNQyxhQUFhLElBQU07UUFDdkJQLFFBQVEsS0FBSztRQUNiUSxhQUFhQyxPQUFPLENBQUMsWUFBWVo7UUFDakNELGFBQWFjLFdBQVcsQ0FBQ2pCLGtFQUFPQSxDQUFDSSxRQUFRTCw2Q0FBS0E7SUFDaEQ7SUFFQSxxQkFDRSw4REFBQ0QsK0RBQUtBO1FBQUNRLE1BQU1BO1FBQU1DLFNBQVNBOzswQkFDMUIsOERBQUNULHFFQUFXOzBCQUFDOzs7Ozs7MEJBQ2IsOERBQUNBLG9FQUFVOztrQ0FDVCw4REFBQ3NCO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0M7Z0NBQ0NELFdBQVU7Z0NBQ1ZFLFVBQVViOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUloQiw4REFBQ1U7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNHOzRCQUNDSCxXQUFVOzRCQUNWSSxNQUFLOzRCQUNMQyxTQUFTWjtzQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWCxDQUFDO0dBekN1Qlo7O1FBQ0RELDhEQUFlQTtRQUlsQ0osMERBQWVBOzs7S0FMS0siLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21haW4vY29tcG9uZW50cy9KYWR3YWxNb2RhbC50c3g/M2E5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VFdmVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VMb2NhbFN0b3JhZ2UgZnJvbSAndXNlLWxvY2FsLXN0b3JhZ2UnO1xyXG5cclxuaW1wb3J0IE1vZGFsIGZyb20gJ0AvY29tcG9uZW50cy9tb2RhbC9Nb2RhbCc7XHJcbmltcG9ydCBEb3NlbiBmcm9tICdAL2pzb24vZG9zZW4uanNvbic7XHJcbmltcG9ydCBQYXJzaW5nIGZyb20gJ0AvcGFyc2luZy9QYXJzZUZ1bmN0aW9uJztcclxuaW1wb3J0IHVzZVN1YmplY3RTdG9yZSBmcm9tICdAL3N0b3JlL3VzZVN1YmplY3RTdG9yZSc7XHJcbmltcG9ydCBTdWJqZWN0SW50ZXJmYWNlIGZyb20gJ0AvdHlwZXMvZW50aXR5L3N1YmplY3QtaW50ZXJmYWNlJztcclxuLy8gdHlwZSBKYWR3YWxNb2RhbFByb3BzID0ge1xyXG4vLyAgIG9wZW46IGJvb2xlYW47XHJcbi8vICAgc2V0T3BlbjogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSmFkd2FsTW9kYWwoKSB7XHJcbiAgY29uc3Qgc3ViamVjdFN0b3JlID0gdXNlU3ViamVjdFN0b3JlKCk7XHJcbiAgY29uc3QgW2phZHdhbCwgc2V0SmFkd2FsXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gIGNvbnN0IFtzY2hlZHVsZSwgc2V0U2NoZWR1bGVdID1cclxuICAgIHVzZUxvY2FsU3RvcmFnZTxTdWJqZWN0SW50ZXJmYWNlW10+KCdzY2hlZHVsZScpO1xyXG5cclxuICBjb25zdCBvbkphZHdhbENoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0SmFkd2FsKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2NoZWR1bGUnLCBqYWR3YWwpO1xyXG4gICAgc3ViamVjdFN0b3JlLmFkZFNjaGVkdWxlKFBhcnNpbmcoamFkd2FsLCBEb3NlbikpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWwgb3Blbj17b3Blbn0gc2V0T3Blbj17c2V0T3Blbn0+XHJcbiAgICAgIDxNb2RhbC5UaXRsZT50aXRsZTwvTW9kYWwuVGl0bGU+XHJcbiAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBwLTYgZmxleC1hdXRvJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSBoLWZ1bGwgdy1mdWxsJz5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaGFkb3ctbWQgc2hhZG93LW5ldXRyYWwtNDAwIHJlc2l6ZS1ub25lIHctZnVsbCBoLTYwIHJvdW5kZWQtMnhsIGRyb3Atc2hhZG93LW1kIHAtMydcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25KYWR3YWxDaGFuZ2V9XHJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHB5LTIgcHgtNiBnYXAtMiBib3JkZXItdCBib3JkZXItc29saWQgYm9yZGVyLXNsYXRlLTIwMCByb3VuZGVkLWInPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2JnLWJsYWNrIHRleHQtd2hpdGUgaG92ZXI6YmctbmV1dHJhbC04MDAgdXBwZXJjYXNlIHRleHQteHMgcHgtNiBweS0zIHJvdW5kZWQtMnhsIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwJ1xyXG4gICAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlTG9jYWxTdG9yYWdlIiwiTW9kYWwiLCJEb3NlbiIsIlBhcnNpbmciLCJ1c2VTdWJqZWN0U3RvcmUiLCJKYWR3YWxNb2RhbCIsInN1YmplY3RTdG9yZSIsImphZHdhbCIsInNldEphZHdhbCIsIm9wZW4iLCJzZXRPcGVuIiwic2NoZWR1bGUiLCJzZXRTY2hlZHVsZSIsIm9uSmFkd2FsQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2F2ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJhZGRTY2hlZHVsZSIsIlRpdGxlIiwiQm9keSIsImRpdiIsImNsYXNzTmFtZSIsInRleHRhcmVhIiwib25DaGFuZ2UiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/main/components/JadwalModal.tsx\n"));

/***/ }),

/***/ "./node_modules/use-local-storage/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/use-local-storage/dist/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval(__webpack_require__.ts("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction useLocalStorage(key, defaultValue, options) {\n    var opts = react_1.useMemo(function () {\n        return __assign({ serializer: JSON.stringify, parser: JSON.parse, logger: console.log, syncData: true }, options);\n    }, [options]);\n    var serializer = opts.serializer, parser = opts.parser, logger = opts.logger, syncData = opts.syncData;\n    var _a = react_1.useState(function () {\n        if (typeof window === \"undefined\")\n            return defaultValue;\n        try {\n            var item = window.localStorage.getItem(key);\n            var res = item ? parser(item) : defaultValue;\n            return res;\n        }\n        catch (e) {\n            logger(e);\n            return defaultValue;\n        }\n    }), storedValue = _a[0], setValue = _a[1];\n    react_1.useEffect(function () {\n        if (typeof window === \"undefined\")\n            return;\n        var updateLocalStorage = function () {\n            if (storedValue !== undefined) {\n                window.localStorage.setItem(key, serializer(storedValue));\n            }\n            else {\n                window.localStorage.removeItem(key);\n            }\n        };\n        try {\n            updateLocalStorage();\n        }\n        catch (e) {\n            logger(e);\n        }\n    }, [storedValue]);\n    react_1.useEffect(function () {\n        if (!syncData)\n            return;\n        var handleStorageChange = function (e) {\n            if (e.key !== key || e.storageArea !== window.localStorage)\n                return;\n            try {\n                setValue(e.newValue ? parser(e.newValue) : undefined);\n            }\n            catch (e) {\n                logger(e);\n            }\n        };\n        if (typeof window === \"undefined\")\n            return;\n        window.addEventListener(\"storage\", handleStorageChange);\n        return function () { return window.removeEventListener(\"storage\", handleStorageChange); };\n    }, [key, syncData]);\n    return [storedValue, setValue];\n}\nexports[\"default\"] = useLocalStorage;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdXNlLWxvY2FsLXN0b3JhZ2UvZGlzdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGNBQWMsbUJBQU8sQ0FBQyw0Q0FBTztBQUM3QjtBQUNBO0FBQ0EsMEJBQTBCLHFGQUFxRjtBQUMvRyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGtCQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91c2UtbG9jYWwtc3RvcmFnZS9kaXN0L2luZGV4LmpzP2RkY2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XG5mdW5jdGlvbiB1c2VMb2NhbFN0b3JhZ2Uoa2V5LCBkZWZhdWx0VmFsdWUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3B0cyA9IHJlYWN0XzEudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7IHNlcmlhbGl6ZXI6IEpTT04uc3RyaW5naWZ5LCBwYXJzZXI6IEpTT04ucGFyc2UsIGxvZ2dlcjogY29uc29sZS5sb2csIHN5bmNEYXRhOiB0cnVlIH0sIG9wdGlvbnMpO1xuICAgIH0sIFtvcHRpb25zXSk7XG4gICAgdmFyIHNlcmlhbGl6ZXIgPSBvcHRzLnNlcmlhbGl6ZXIsIHBhcnNlciA9IG9wdHMucGFyc2VyLCBsb2dnZXIgPSBvcHRzLmxvZ2dlciwgc3luY0RhdGEgPSBvcHRzLnN5bmNEYXRhO1xuICAgIHZhciBfYSA9IHJlYWN0XzEudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICAgICAgdmFyIHJlcyA9IGl0ZW0gPyBwYXJzZXIoaXRlbSkgOiBkZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsb2dnZXIoZSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgfSksIHN0b3JlZFZhbHVlID0gX2FbMF0sIHNldFZhbHVlID0gX2FbMV07XG4gICAgcmVhY3RfMS51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHVwZGF0ZUxvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzdG9yZWRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgc2VyaWFsaXplcihzdG9yZWRWYWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbG9nZ2VyKGUpO1xuICAgICAgICB9XG4gICAgfSwgW3N0b3JlZFZhbHVlXSk7XG4gICAgcmVhY3RfMS51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXN5bmNEYXRhKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgaGFuZGxlU3RvcmFnZUNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgIT09IGtleSB8fCBlLnN0b3JhZ2VBcmVhICE9PSB3aW5kb3cubG9jYWxTdG9yYWdlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoZS5uZXdWYWx1ZSA/IHBhcnNlcihlLm5ld1ZhbHVlKSA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBoYW5kbGVTdG9yYWdlQ2hhbmdlKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBoYW5kbGVTdG9yYWdlQ2hhbmdlKTsgfTtcbiAgICB9LCBba2V5LCBzeW5jRGF0YV0pO1xuICAgIHJldHVybiBbc3RvcmVkVmFsdWUsIHNldFZhbHVlXTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHVzZUxvY2FsU3RvcmFnZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/use-local-storage/dist/index.js\n"));

/***/ })

});