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

/***/ "./contexts/context.js":
/*!*****************************!*\
  !*** ./contexts/context.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppWrapper\": function() { return /* binding */ AppWrapper; },\n/* harmony export */   \"useAppContext\": function() { return /* binding */ useAppContext; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var contexts_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/useWindowDimensions */ \"./contexts/useWindowDimensions.js\");\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nvar AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AppWrapper(param) {\n    var children = param.children;\n    _s();\n    var width = (0,contexts_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().width;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        themeName: \"light\",\n        navbarState: false,\n        windowType: \"desktop\"\n    }), sharedState = ref[0], setShareState = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var isDark = localStorage.getItem(\"themeName\") === \"light\";\n        if (isDark) sharedState.themeName = \"light\";\n    }, []);\n    var setWidthToState = function(windowType) {\n        var sharedStateTemp = (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, sharedState);\n        sharedStateTemp.windowType = windowType;\n        setShareState(sharedStateTemp);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (width < 768) {\n            setWidthToState(\"mobile\");\n        } else {\n            setWidthToState(\"desktop\");\n        }\n    }, [\n        width\n    ]);\n    var toggleTheme = function() {\n        var name = sharedState.themeName === \"dark\" ? \"light\" : \"dark\";\n        localStorage.setItem(\"themeName\", name);\n        var sharedStateTemp = (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, sharedState);\n        sharedStateTemp.themeName = name;\n        setShareState(sharedStateTemp);\n    };\n    var toggleNavbar = function(close) {\n        var sharedStateTemp = (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, sharedState);\n        sharedStateTemp.navbarState = close || !sharedState.navbarState;\n        setShareState(sharedStateTemp);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            sharedState: sharedState,\n            toggleTheme: toggleTheme,\n            toggleNavbar: toggleNavbar\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/daniel/Desktop/myProjects/personalwebsite/contexts/context.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(AppWrapper, \"DX2CSMOHZS+L8bT9mSqA5FiJfS0=\", false, function() {\n    return [\n        contexts_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = AppWrapper;\nfunction useAppContext() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n}\n_s1(useAppContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AppWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9jb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7OztBQUF1RTtBQUNSO0FBRS9ELElBQU1LLFVBQVUsaUJBQUdMLG9EQUFhLEVBQUU7QUFFM0IsU0FBU00sVUFBVSxDQUFDLEtBQVksRUFBRTtRQUFkLFFBQVUsR0FBVixLQUFZLENBQVZDLFFBQVE7O0lBQ25DLElBQU0sS0FBTyxHQUFLSCx3RUFBbUIsRUFBRSxDQUEvQkksS0FBSztJQUNiLElBQXFDTCxHQUluQyxHQUptQ0EsK0NBQVEsQ0FBQztRQUM1Q00sU0FBUyxFQUFFLE9BQU87UUFDbEJDLFdBQVcsRUFBRSxLQUFLO1FBQ2xCQyxVQUFVLEVBQUUsU0FBUztLQUN0QixDQUFDLEVBSktDLFdBQVcsR0FBbUJULEdBSW5DLEdBSmdCLEVBQUVVLGFBQWEsR0FBSVYsR0FJbkMsR0FKK0I7SUFNakNELGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQU1ZLE1BQU0sR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssT0FBTztRQUM1RCxJQUFJRixNQUFNLEVBQUVGLFdBQVcsQ0FBQ0gsU0FBUyxHQUFHLE9BQU8sQ0FBQztJQUM5QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxJQUFNUSxlQUFlLEdBQUcsU0FBQ04sVUFBVSxFQUFLO1FBQ3RDLElBQU1PLGVBQWUsR0FBRyxtRkFBS04sV0FBVyxDQUFFO1FBQzFDTSxlQUFlLENBQUNQLFVBQVUsR0FBR0EsVUFBVSxDQUFDO1FBQ3hDRSxhQUFhLENBQUNLLGVBQWUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRGhCLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlNLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFDZlMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLE9BQU87WUFDTEEsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDLEVBQUU7UUFBQ1QsS0FBSztLQUFDLENBQUMsQ0FBQztJQUVaLElBQU1XLFdBQVcsR0FBRyxXQUFNO1FBQ3hCLElBQU1DLElBQUksR0FBR1IsV0FBVyxDQUFDSCxTQUFTLEtBQUssTUFBTSxHQUFHLE9BQU8sR0FBRyxNQUFNO1FBQ2hFTSxZQUFZLENBQUNNLE9BQU8sQ0FBQyxXQUFXLEVBQUVELElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQU1GLGVBQWUsR0FBRyxtRkFBS04sV0FBVyxDQUFFO1FBQzFDTSxlQUFlLENBQUNULFNBQVMsR0FBR1csSUFBSSxDQUFDO1FBQ2pDUCxhQUFhLENBQUNLLGVBQWUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFNSSxZQUFZLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO1FBQzlCLElBQU1MLGVBQWUsR0FBRyxtRkFBS04sV0FBVyxDQUFFO1FBQzFDTSxlQUFlLENBQUNSLFdBQVcsR0FBR2EsS0FBSyxJQUFJLENBQUNYLFdBQVcsQ0FBQ0YsV0FBVyxDQUFDO1FBQ2hFRyxhQUFhLENBQUNLLGVBQWUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxxQkFDRSw4REFBQ2IsVUFBVSxDQUFDbUIsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBRWIsV0FBVyxFQUFYQSxXQUFXO1lBQUVPLFdBQVcsRUFBWEEsV0FBVztZQUFFRyxZQUFZLEVBQVpBLFlBQVk7U0FBRTtrQkFDbkVmLFFBQVE7Ozs7O1lBQ1csQ0FDdEI7QUFDSixDQUFDO0dBOUNlRCxVQUFVOztRQUNORixvRUFBbUI7OztBQUR2QkUsS0FBQUEsVUFBVTtBQWdEbkIsU0FBU29CLGFBQWEsR0FBRzs7SUFDOUIsT0FBT3pCLGlEQUFVLENBQUNJLFVBQVUsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7SUFGZXFCLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvY29udGV4dC5qcz8wNjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICdjb250ZXh0cy91c2VXaW5kb3dEaW1lbnNpb25zJztcblxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEFwcFdyYXBwZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IHsgd2lkdGggfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgY29uc3QgW3NoYXJlZFN0YXRlLCBzZXRTaGFyZVN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICB0aGVtZU5hbWU6ICdsaWdodCcsXG4gICAgbmF2YmFyU3RhdGU6IGZhbHNlLFxuICAgIHdpbmRvd1R5cGU6ICdkZXNrdG9wJyxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpc0RhcmsgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWVOYW1lJykgPT09ICdsaWdodCc7XG4gICAgaWYgKGlzRGFyaykgc2hhcmVkU3RhdGUudGhlbWVOYW1lID0gJ2xpZ2h0JztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNldFdpZHRoVG9TdGF0ZSA9ICh3aW5kb3dUeXBlKSA9PiB7XG4gICAgY29uc3Qgc2hhcmVkU3RhdGVUZW1wID0geyAuLi5zaGFyZWRTdGF0ZSB9O1xuICAgIHNoYXJlZFN0YXRlVGVtcC53aW5kb3dUeXBlID0gd2luZG93VHlwZTtcbiAgICBzZXRTaGFyZVN0YXRlKHNoYXJlZFN0YXRlVGVtcCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2lkdGggPCA3NjgpIHtcbiAgICAgIHNldFdpZHRoVG9TdGF0ZSgnbW9iaWxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFdpZHRoVG9TdGF0ZSgnZGVza3RvcCcpO1xuICAgIH1cbiAgfSwgW3dpZHRoXSk7XG5cbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IHNoYXJlZFN0YXRlLnRoZW1lTmFtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJztcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWVOYW1lJywgbmFtZSk7XG4gICAgY29uc3Qgc2hhcmVkU3RhdGVUZW1wID0geyAuLi5zaGFyZWRTdGF0ZSB9O1xuICAgIHNoYXJlZFN0YXRlVGVtcC50aGVtZU5hbWUgPSBuYW1lO1xuICAgIHNldFNoYXJlU3RhdGUoc2hhcmVkU3RhdGVUZW1wKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVOYXZiYXIgPSAoY2xvc2UpID0+IHtcbiAgICBjb25zdCBzaGFyZWRTdGF0ZVRlbXAgPSB7IC4uLnNoYXJlZFN0YXRlIH07XG4gICAgc2hhcmVkU3RhdGVUZW1wLm5hdmJhclN0YXRlID0gY2xvc2UgfHwgIXNoYXJlZFN0YXRlLm5hdmJhclN0YXRlO1xuICAgIHNldFNoYXJlU3RhdGUoc2hhcmVkU3RhdGVUZW1wKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNoYXJlZFN0YXRlLCB0b2dnbGVUaGVtZSwgdG9nZ2xlTmF2YmFyIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwiQXBwQ29udGV4dCIsIkFwcFdyYXBwZXIiLCJjaGlsZHJlbiIsIndpZHRoIiwidGhlbWVOYW1lIiwibmF2YmFyU3RhdGUiLCJ3aW5kb3dUeXBlIiwic2hhcmVkU3RhdGUiLCJzZXRTaGFyZVN0YXRlIiwiaXNEYXJrIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldFdpZHRoVG9TdGF0ZSIsInNoYXJlZFN0YXRlVGVtcCIsInRvZ2dsZVRoZW1lIiwibmFtZSIsInNldEl0ZW0iLCJ0b2dnbGVOYXZiYXIiLCJjbG9zZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBcHBDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/context.js\n"));

/***/ })

});