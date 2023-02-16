"use strict";
exports.id = 686;
exports.ids = [686];
exports.modules = {

/***/ 9827:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PD": () => (/* binding */ getModel),
/* harmony export */   "T5": () => (/* binding */ API_URL),
/* harmony export */   "Wh": () => (/* binding */ $api),
/* harmony export */   "hM": () => (/* binding */ getModels),
/* harmony export */   "qm": () => (/* binding */ getPaginatedModels)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var utils_convertToModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4337);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, utils_convertToModel__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, utils_convertToModel__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const API_URL = "https://api.загородный.бел";
const $api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: API_URL + "/api/"
});
const getModels = async (url, config)=>{
    try {
        const response = await $api.get(url, config);
        return response.data.data.map((item)=>(0,utils_convertToModel__WEBPACK_IMPORTED_MODULE_1__/* .convertToModel */ .r)(item));
    } catch (e) {
        console.log(e);
        return [];
    }
};
const getPaginatedModels = async (url, config)=>{
    try {
        const response = await $api.get(url, config);
        return {
            items: response.data.data.map((item)=>(0,utils_convertToModel__WEBPACK_IMPORTED_MODULE_1__/* .convertToModel */ .r)(item)),
            pagination: response.data.meta.pagination
        };
    } catch (e) {
        console.log(e);
        return {
            items: [],
            pagination: {
                page: 1,
                pageSize: 25,
                pageCount: 1,
                total: 1
            }
        };
    }
};
const getModel = async (url, config)=>{
    const response = await $api.get(url, config);
    return (0,utils_convertToModel__WEBPACK_IMPORTED_MODULE_1__/* .convertToModel */ .r)(response.data.data);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4337:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ convertToModel)
/* harmony export */ });
/* harmony import */ var src_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9827);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_http__WEBPACK_IMPORTED_MODULE_0__]);
src_http__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const convertToModel = (item)=>{
    const newItem = getLevelObject(item);
    return newItem;
};
const getLevelObject = (item)=>{
    if (item === null) return null;
    const created = {
        id: item?.id
    };
    if (item?.attributes) Object.keys(item.attributes).forEach((key)=>{
        const value = item.attributes[key];
        if (key === "name" || key === "title") {
            let href = value?.toString()?.toLowerCase()?.replaceAll(" ", "_") || null;
            if (href) href = encodeURI(href);
            created.href = href;
        }
        if (typeof value === "object") {
            if (value?.data !== undefined) {
                if (Array.isArray(value.data)) return created[key] = value.data.map((item)=>getLevelObject(item));
                return created[key] = getLevelObject(value.data);
            }
        }
        if (key.includes("url")) return created[key] = src_http__WEBPACK_IMPORTED_MODULE_0__/* .API_URL */ .T5 + value;
        created[key] = value;
    });
    return created;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;