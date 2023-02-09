exports.id = 317;
exports.ids = [317];
exports.modules = {

/***/ 2482:
/***/ ((module) => {

// Exports
module.exports = {
	"loading": "Loader_loading___H9TE",
	"show": "Loader_show__YFqMF",
	"rotate": "Loader_rotate__x_v_I",
	"overlay": "Loader_overlay__lKXgr"
};


/***/ }),

/***/ 2489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* reexport */ Loader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./utils/concatClass.ts
var concatClass = __webpack_require__(9794);
// EXTERNAL MODULE: ./src/components/loader/Loader.module.scss
var Loader_module = __webpack_require__(2482);
var Loader_module_default = /*#__PURE__*/__webpack_require__.n(Loader_module);
;// CONCATENATED MODULE: ./src/components/loader/Loader.tsx




const Loader = ({ withoutOverlay  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,concatClass/* concatClass */.o)([
            (Loader_module_default()).loading,
            withoutOverlay ? undefined : (Loader_module_default()).overlay
        ]),
        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
            className: "fa fa-repeat",
            "aria-hidden": "true"
        })
    });
};

;// CONCATENATED MODULE: ./src/components/loader/index.ts



/***/ }),

/***/ 1471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ usePageLoading)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const usePageLoading = (pagePath)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleStart = (path)=>{
            if (path.includes(pagePath)) setLoading(true);
        };
        const handleEnd = ()=>setLoading(false);
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleEnd);
        return ()=>{
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleEnd);
        };
    }, [
        router,
        pagePath
    ]);
    return isLoading;
};


/***/ })

};
;