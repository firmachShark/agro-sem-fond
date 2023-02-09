"use strict";
exports.id = 371;
exports.ids = [371];
exports.modules = {

/***/ 5371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const COOKIE_KEY = "viewed";
const REGEXP = new RegExp("(^| )" + COOKIE_KEY + "=([^;]+)");
class ViewedApi {
    getFromCookie(cookies) {
        const cookie = cookies || document.cookie;
        const result = cookie.match(REGEXP);
        if (!result) return null;
        return this.parseJSON(result[2]);
    }
    parseJSON(json) {
        try {
            const parsed = JSON.parse(json);
            if (!Array.isArray(parsed)) return null;
            return parsed;
        } catch (e) {
            return null;
        }
    }
    setInCookie(items) {
        let value = "";
        try {
            value = JSON.stringify(items);
        } catch (e) {
            return false;
        }
        if (!value) return false;
        const date = new Date();
        date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
        const expires = "expires=" + date.toUTCString();
        document.cookie = COOKIE_KEY + "=" + value + "; " + expires + "; path=/";
        return true;
    }
    add(item) {
        const prev = this.getFromCookie();
        if (prev) {
            const exists = prev.find((product)=>product.id === item.id);
            if (exists) return;
            prev.unshift(item);
        }
        this.setInCookie(prev || [
            {
                id: item.id
            }
        ]);
    }
    getAll() {
        return this.getFromCookie() || [];
    }
    clear() {
        this.setInCookie([]);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ViewedApi());


/***/ })

};
;