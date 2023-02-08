exports.id = 700;
exports.ids = [700];
exports.modules = {

/***/ 6462:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "Input_input__Ap3eR"
};


/***/ }),

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* reexport */ Input),
  "u": () => (/* reexport */ (Input_module_default()))
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./utils/concatClass.ts
var concatClass = __webpack_require__(9794);
// EXTERNAL MODULE: ./src/components/input/Input.module.scss
var Input_module = __webpack_require__(6462);
var Input_module_default = /*#__PURE__*/__webpack_require__.n(Input_module);
;// CONCATENATED MODULE: ./src/components/input/Input.tsx




const Input = ({ className , ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        type: "text",
        ...props,
        className: (0,concatClass/* concatClass */.o)([
            (Input_module_default()).input,
            className
        ])
    });
};

;// CONCATENATED MODULE: ./src/components/input/index.ts




/***/ }),

/***/ 2411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useLocalStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5838);


const useLocalStorage = (key)=>{
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const unsubscribe = utils_storage__WEBPACK_IMPORTED_MODULE_1__/* .localStorageWrapper.subscribe */ .Y.subscribe(key, (value)=>{
            setValue(value);
        });
        utils_storage__WEBPACK_IMPORTED_MODULE_1__/* .localStorageWrapper.pushSubscribers */ .Y.pushSubscribers(key);
        return ()=>{
            unsubscribe();
        };
    }, [
        key
    ]);
    return value;
};


/***/ }),

/***/ 5838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ localStorageWrapper)
/* harmony export */ });
/* unused harmony export sessionStorageWrapper */
class StorageWrapper {
    subscribers = {};
    constructor(type){
        try {
            this.storage = type === "local" ? window.localStorage : window.sessionStorage;
        } catch (error) {
            return;
        }
    }
    get length() {
        if (!this.storage) return;
        return this.storage.length;
    }
    subscribe(key, cb) {
        const id = Math.round(Date.now() / Math.random());
        const subscription = {
            id,
            callback: cb
        };
        if (Array.isArray(this.subscribers[key])) this.subscribers[key].push(subscription);
        else this.subscribers[key] = [
            subscription
        ];
        return ()=>{
            this.subscribers[key] = this.subscribers[key].filter((_subscription)=>_subscription.id !== subscription.id);
        };
    }
    pushSubscribers(key) {
        if (this.subscribers[key]) {
            this.subscribers[key].forEach((subscribtion)=>subscribtion.callback(this.get(key)));
        }
    }
    get(key) {
        if (!this.storage) return null;
        try {
            const value = this.storage.getItem(key);
            if (value === null) {
                return null;
            }
            return JSON.parse(value);
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    set(key, value) {
        if (!this.storage) return;
        try {
            const stringValue = JSON.stringify(value);
            this.storage.setItem(key, stringValue);
            this.pushSubscribers(key);
        } catch (error) {
            console.error(error);
        }
    }
    remove(key) {
        if (!this.storage) return;
        this.storage.removeItem(key);
        this.pushSubscribers(key);
    }
    clear() {
        if (!this.storage) return;
        this.storage.clear();
    }
}
const localStorageWrapper = new StorageWrapper("local");
const sessionStorageWrapper = new StorageWrapper("session");


/***/ })

};
;