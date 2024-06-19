"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/favorites/page",{

/***/ "(app-pages-browser)/./src/store/pokemons/pokemons.ts":
/*!****************************************!*\
  !*** ./src/store/pokemons/pokemons.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleFavorite: function() { return /* binding */ toggleFavorite; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst getInitialState = ()=>{\n    var _localStorage_getItem;\n    const favorites = JSON.parse((_localStorage_getItem = localStorage.getItem(\"favorite-pokemons\")) !== null && _localStorage_getItem !== void 0 ? _localStorage_getItem : \"{}\");\n    return favorites;\n};\nconst initialState = {\n    ...getInitialState()\n};\nconst pokemonsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"pokemons\",\n    initialState,\n    reducers: {\n        toggleFavorite (state, action) {\n            const pokemon = action.payload;\n            const { id } = pokemon;\n            if (!!state[id]) {\n                delete state[id];\n            } else {\n                state[id] = pokemon;\n            }\n            localStorage.setItem(\"favorite-pokemons\", JSON.stringify(state));\n            state[id] = pokemon;\n        }\n    }\n});\nconst { toggleFavorite } = pokemonsSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (pokemonsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9wb2tlbW9ucy9wb2tlbW9ucy50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4RDtBQWE5RCxNQUFNQyxrQkFBa0I7UUFFUUM7SUFBOUIsTUFBTUMsWUFBWUMsS0FBS0MsS0FBSyxDQUFFSCxDQUFBQSx3QkFBQUEsYUFBYUksT0FBTyxDQUFDLGtDQUFyQkosbUNBQUFBLHdCQUE2QztJQUUzRSxPQUFPQztBQUNUO0FBRUEsTUFBTUksZUFBOEI7SUFDbEMsR0FBR04saUJBQWlCO0FBSXRCO0FBRUEsTUFBTU8sZ0JBQWdCUiw2REFBV0EsQ0FBQztJQUNoQ1MsTUFBTTtJQUNORjtJQUNBRyxVQUFVO1FBQ1JDLGdCQUFlQyxLQUFLLEVBQUVDLE1BQW9DO1lBQ3hELE1BQU1DLFVBQVVELE9BQU9FLE9BQU87WUFDOUIsTUFBTSxFQUFFQyxFQUFFLEVBQUUsR0FBR0Y7WUFFZixJQUFJLENBQUMsQ0FBQ0YsS0FBSyxDQUFDSSxHQUFHLEVBQUU7Z0JBQ2YsT0FBT0osS0FBSyxDQUFDSSxHQUFHO1lBQ2xCLE9BQUs7Z0JBQ0hKLEtBQUssQ0FBQ0ksR0FBRyxHQUFHRjtZQUNkO1lBRUFaLGFBQWFlLE9BQU8sQ0FBQyxxQkFBcUJiLEtBQUtjLFNBQVMsQ0FBQ047WUFFekRBLEtBQUssQ0FBQ0ksR0FBRyxHQUFHRjtRQUNkO0lBQ0Y7QUFDRjtBQUVPLE1BQU0sRUFBQ0gsY0FBYyxFQUFDLEdBQUdILGNBQWNXLE9BQU8sQ0FBQztBQUV0RCwrREFBZVgsY0FBY1ksT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9wb2tlbW9ucy9wb2tlbW9ucy50cz8zODdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgU2ltcGxlUG9rZW1vbiB9IGZyb20gXCJAL3Bva2Vtb25zXCI7XHJcblxyXG4vKiBcclxuXHJcbicxJzoge2lkOjEsIG5hbWU6ICdidWxiYXNhdXInfSxcclxuXHJcbiovXHJcblxyXG5pbnRlcmZhY2UgUG9rZW1vbnNTdGF0ZSB7XHJcbiAgW2tleTogc3RyaW5nXTogU2ltcGxlUG9rZW1vbjtcclxufVxyXG5cclxuY29uc3QgZ2V0SW5pdGlhbFN0YXRlID0gKCk6IFBva2Vtb25zU3RhdGUgPT4ge1xyXG5cclxuICBjb25zdCBmYXZvcml0ZXMgPSBKU09OLnBhcnNlKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGUtcG9rZW1vbnMnKSA/PyAne30nKVxyXG5cclxuICByZXR1cm4gZmF2b3JpdGVzXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUG9rZW1vbnNTdGF0ZSA9IHtcclxuICAuLi5nZXRJbml0aWFsU3RhdGUoKVxyXG4gLyogMTogeyBpZDogXCIxXCIsIG5hbWU6IFwiYnVsYmFzYXVyXCIgfSxcclxuICAzOiB7IGlkOiBcIjNcIiwgbmFtZTogXCJ2ZW51c2F1clwiIH0sXHJcbiAgNTogeyBpZDogXCI1XCIsIG5hbWU6IFwiY2hhcm1lbGVvblwiIH0sKi9cclxufTtcclxuXHJcbmNvbnN0IHBva2Vtb25zU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJwb2tlbW9uc1wiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgdG9nZ2xlRmF2b3JpdGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxTaW1wbGVQb2tlbW9uPikge1xyXG4gICAgICBjb25zdCBwb2tlbW9uID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHBva2Vtb247XHJcblxyXG4gICAgICBpZiAoISFzdGF0ZVtpZF0pIHtcclxuICAgICAgICBkZWxldGUgc3RhdGVbaWRdO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBzdGF0ZVtpZF0gPSBwb2tlbW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2b3JpdGUtcG9rZW1vbnMnLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpXHJcblxyXG4gICAgICBzdGF0ZVtpZF0gPSBwb2tlbW9uO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7dG9nZ2xlRmF2b3JpdGV9ID0gcG9rZW1vbnNTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9rZW1vbnNTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJnZXRJbml0aWFsU3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJmYXZvcml0ZXMiLCJKU09OIiwicGFyc2UiLCJnZXRJdGVtIiwiaW5pdGlhbFN0YXRlIiwicG9rZW1vbnNTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInRvZ2dsZUZhdm9yaXRlIiwic3RhdGUiLCJhY3Rpb24iLCJwb2tlbW9uIiwicGF5bG9hZCIsImlkIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/pokemons/pokemons.ts\n"));

/***/ })

});