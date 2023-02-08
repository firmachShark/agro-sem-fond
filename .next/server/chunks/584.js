exports.id = 584;
exports.ids = [584];
exports.modules = {

/***/ 3073:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "CountInput_wrapper__AZKJT"
};


/***/ }),

/***/ 5131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* reexport */ CountInput)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/button/index.ts + 1 modules
var components_button = __webpack_require__(5168);
// EXTERNAL MODULE: ./src/components/input/index.ts + 1 modules
var input = __webpack_require__(48);
// EXTERNAL MODULE: ./src/components/count-input/CountInput.module.scss
var CountInput_module = __webpack_require__(3073);
var CountInput_module_default = /*#__PURE__*/__webpack_require__.n(CountInput_module);
;// CONCATENATED MODULE: ./src/components/count-input/CountInput.tsx





const CountInput = ({ value , setValue  })=>{
    const [inputValue, setInputValue] = (0,external_react_.useState)(value.toString());
    const handleBlur = (e)=>{
        const _value = e.target.value;
        const _valueNumber = Number(_value);
        if (Number.isNaN(_valueNumber)) return setInputValue(value.toString());
        if (_valueNumber < 1) {
            setInputValue("1");
            return setValue(1);
        }
        if (_valueNumber > 20) {
            setInputValue("20");
            return setValue(20);
        }
        setValue(_valueNumber);
    };
    const handleChange = (e)=>{
        setInputValue(e.target.value);
    };
    const handleIncrement = ()=>{
        if (value < 20) setValue((prev)=>prev + 1);
    };
    const handleDecrement = ()=>{
        if (value > 1) setValue((prev)=>prev - 1);
    };
    (0,external_react_.useEffect)(()=>{
        setInputValue(value.toString());
    }, [
        value
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (CountInput_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
                sizeMode: "sm",
                variant: "orange",
                onClick: handleDecrement,
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fa fa-minus",
                    "aria-hidden": "true"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(input/* Input */.I, {
                onBlur: handleBlur,
                value: inputValue,
                onChange: handleChange,
                type: "text"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
                sizeMode: "sm",
                variant: "orange",
                onClick: handleIncrement,
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fa fa-plus",
                    "aria-hidden": "true"
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/count-input/index.ts



/***/ }),

/***/ 458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5838);

const STORAGE_KEY = "cart";
class CartApi {
    add(id, item) {
        const cart = _storage__WEBPACK_IMPORTED_MODULE_0__/* .localStorageWrapper.get */ .Y.get(STORAGE_KEY);
        _storage__WEBPACK_IMPORTED_MODULE_0__/* .localStorageWrapper.set */ .Y.set(STORAGE_KEY, {
            ...cart || {},
            [id]: item
        });
    }
    remove(id) {
        const cart = _storage__WEBPACK_IMPORTED_MODULE_0__/* .localStorageWrapper.get */ .Y.get(STORAGE_KEY);
        if (cart) {
            delete cart[id];
            _storage__WEBPACK_IMPORTED_MODULE_0__/* .localStorageWrapper.set */ .Y.set(STORAGE_KEY, cart);
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new CartApi());


/***/ })

};
;