"use strict";
exports.id = 874;
exports.ids = [874];
exports.modules = {

/***/ 5172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* reexport */ Carousel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/button/index.ts + 1 modules
var components_button = __webpack_require__(5168);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/components/carousel/Carousel.tsx




const Carousel = ({ children , ...props })=>{
    const settings = {
        infinite: true,
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
            children: "Next"
        }),
        prevArrow: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
            children: "Prev"
        }),
        ...props
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
        ...settings,
        children: children
    });
};

;// CONCATENATED MODULE: ./src/components/carousel/index.ts



/***/ }),

/***/ 2333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BA": () => (/* binding */ useDispatchCreator),
/* harmony export */   "CG": () => (/* binding */ useAppSelector)
/* harmony export */ });
/* unused harmony export useAppDispatch */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);


const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector;
function useDispatchCreator(actions) {
    const dispatch = useAppDispatch();
    const dispatchedActions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return Object.entries(actions).reduce((result, [key, action])=>{
            result["dispatch" + key.slice(0, 1).toUpperCase() + key.slice(1)] = (...args)=>dispatch(action(...args));
            return result;
        }, {});
    }, [
        actions,
        dispatch
    ]);
    return dispatchedActions;
}


/***/ }),

/***/ 9090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ ProductsCarousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(152);
/* harmony import */ var src_components_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5172);




const ProductsCarousel = ({ products , isNew , isHit , carouselProps  })=>{
    const [initial, lg, md, sm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const result = [];
        for(let i = 4; i > 0; i--){
            result.push(products.length > i ? i : products.length);
        }
        return result;
    }, [
        products
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_carousel__WEBPACK_IMPORTED_MODULE_3__/* .Carousel */ .l, {
        slidesToShow: initial,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: lg
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: md
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: sm
                }
            }
        ],
        ...carouselProps,
        children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_card__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
                    product: product,
                    isNew: !!isNew,
                    isHit: !!isHit
                })
            }, product.id))
    });
};


/***/ })

};
;