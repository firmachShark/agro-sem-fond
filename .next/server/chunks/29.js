"use strict";
exports.id = 29;
exports.ids = [29];
exports.modules = {

/***/ 9029:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9827);
/* harmony import */ var utils_convertToHTML__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_http__WEBPACK_IMPORTED_MODULE_1__, utils_convertToHTML__WEBPACK_IMPORTED_MODULE_2__]);
([src_http__WEBPACK_IMPORTED_MODULE_1__, utils_convertToHTML__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const baseQS = {
    populate: {
        preview: {
            fields: [
                "url",
                "width",
                "height"
            ]
        }
    }
};
class BlogService {
    async getByTitle(title) {
        const posts = await this.getAll({
            filters: {
                title: {
                    $eqi: title
                }
            }
        });
        if (!posts.length) return null;
        return posts[0];
    }
    async getAll(qs) {
        const posts = await (0,src_http__WEBPACK_IMPORTED_MODULE_1__/* .getModels */ .hM)(`blogs?${qs__WEBPACK_IMPORTED_MODULE_0___default().stringify({
            ...baseQS,
            ...qs || {}
        })}`);
        return Promise.all(posts.map(async (post)=>{
            const content = await (0,utils_convertToHTML__WEBPACK_IMPORTED_MODULE_2__/* .convertToHTML */ .c)(post.content);
            return {
                ...post,
                content
            };
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new BlogService());

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ convertToHTML)
/* harmony export */ });
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1774);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_0__, remark_html__WEBPACK_IMPORTED_MODULE_1__]);
([remark__WEBPACK_IMPORTED_MODULE_0__, remark_html__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const convertToHTML = async (markdown)=>{
    const processed = await (0,remark__WEBPACK_IMPORTED_MODULE_0__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_1__["default"]).process(markdown);
    return processed.toString();
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;