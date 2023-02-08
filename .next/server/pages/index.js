"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_sections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5577);
/* harmony import */ var src_services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9029);
/* harmony import */ var src_services_home_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7206);
/* harmony import */ var src_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2535);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_services_blog_service__WEBPACK_IMPORTED_MODULE_3__, src_services_home_page_service__WEBPACK_IMPORTED_MODULE_4__, src_services_product_service__WEBPACK_IMPORTED_MODULE_5__]);
([src_services_blog_service__WEBPACK_IMPORTED_MODULE_3__, src_services_home_page_service__WEBPACK_IMPORTED_MODULE_4__, src_services_product_service__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const getStaticProps = async ()=>{
    const overviews = await src_services_home_page_service__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getOverviewData */ .Z.getOverviewData();
    const categories = await src_services_home_page_service__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getCategoriesData */ .Z.getCategoriesData();
    const reviews = await src_services_home_page_service__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getReviewsData */ .Z.getReviewsData();
    const newProducts = await src_services_product_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getByFlag */ .Z.getByFlag("isNew");
    const hitProducts = await src_services_product_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getByFlag */ .Z.getByFlag("isHit");
    const posts = await src_services_blog_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getAll */ .Z.getAll({
        pagination: {
            limit: 3
        }
    });
    return {
        props: {
            overviews,
            categories,
            newProducts,
            hitProducts,
            reviews,
            posts
        },
        revalidate: 120
    };
};
const Home = ({ overviews , categories , newProducts , hitProducts , reviews , posts  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Главная"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_sections__WEBPACK_IMPORTED_MODULE_2__/* .SectionOverview */ .qb, {
                items: overviews
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_sections__WEBPACK_IMPORTED_MODULE_2__/* .SectionCategories */ .Co, {
                withBg: true,
                categories: categories,
                title: "Популярные категории"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_sections__WEBPACK_IMPORTED_MODULE_2__/* .SectionProducts */ .WO, {
                isNew: true,
                products: newProducts,
                title: "Новинки"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_sections__WEBPACK_IMPORTED_MODULE_2__/* .SectionReviews */ ._Y, {
                reviews: reviews
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_sections__WEBPACK_IMPORTED_MODULE_2__/* .SectionDelivery */ ._5, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_sections__WEBPACK_IMPORTED_MODULE_2__/* .SectionProducts */ .WO, {
                products: hitProducts,
                title: "Хит продаж"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_sections__WEBPACK_IMPORTED_MODULE_2__/* .SectionCatalogMail */ .MQ, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_sections__WEBPACK_IMPORTED_MODULE_2__/* .SectionConnect */ .ZP, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_sections__WEBPACK_IMPORTED_MODULE_2__/* .SectionBlog */ .N9, {
                posts: posts,
                title: "Полезно знать"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_sections__WEBPACK_IMPORTED_MODULE_2__/* .SectionAbout */ .NH, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_sections__WEBPACK_IMPORTED_MODULE_2__/* .SectionSubscription */ .EX, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7206:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export HomePageService */
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9827);
/* harmony import */ var utils_convertToHTML__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4662);
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3822);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_http__WEBPACK_IMPORTED_MODULE_1__, utils_convertToHTML__WEBPACK_IMPORTED_MODULE_2__, _category_service__WEBPACK_IMPORTED_MODULE_3__]);
([src_http__WEBPACK_IMPORTED_MODULE_1__, utils_convertToHTML__WEBPACK_IMPORTED_MODULE_2__, _category_service__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




class HomePageService {
    async getOverviewData() {
        const overviews = await (0,src_http__WEBPACK_IMPORTED_MODULE_1__/* .getModels */ .hM)(`section-overviews?${qs__WEBPACK_IMPORTED_MODULE_0___default().stringify({
            populate: {
                photo: {
                    fields: [
                        "url"
                    ]
                }
            }
        })}`);
        for (const overview of overviews){
            overview.content = await (0,utils_convertToHTML__WEBPACK_IMPORTED_MODULE_2__/* .convertToHTML */ .c)(overview.content);
        }
        return overviews;
    }
    async getCategoriesData() {
        return _category_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getAll */ .Z.getAll({
            pagination: {
                limit: 9
            }
        });
    }
    async getReviewsData() {
        return (0,src_http__WEBPACK_IMPORTED_MODULE_1__/* .getModels */ .hM)(`reviews?${qs__WEBPACK_IMPORTED_MODULE_0___default().stringify({
            populate: {
                image: {
                    fields: [
                        "url"
                    ]
                }
            }
        })}`);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new HomePageService());

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 7104:
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,121,675,310,168,686,700,584,152,109,535,874,577,822,29], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();