"use strict";
exports.id = 411;
exports.ids = [411];
exports.modules = {

/***/ 2411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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