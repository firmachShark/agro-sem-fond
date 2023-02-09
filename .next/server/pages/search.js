(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 2522:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "Search_section__Nfi2z",
	"item_wrapper": "Search_item_wrapper__Y_OX9"
};


/***/ }),

/***/ 6606:
/***/ ((module) => {

// Exports
module.exports = {
	"search": "SearchInput_search__zFCoF",
	"button": "SearchInput_button__3btBu"
};


/***/ }),

/***/ 6087:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(152);
/* harmony import */ var src_components_layout_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2310);
/* harmony import */ var src_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2535);
/* harmony import */ var src_components_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48);
/* harmony import */ var src_components_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5168);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Search_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2522);
/* harmony import */ var _Search_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Search_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_components_layout_search_input_SearchInput_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6606);
/* harmony import */ var src_components_layout_search_input_SearchInput_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(src_components_layout_search_input_SearchInput_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var src_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1679);
/* harmony import */ var src_components_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2489);
/* harmony import */ var src_hooks_usePageLoading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1471);
/* harmony import */ var src_components_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2063);
/* harmony import */ var utils_concatClass__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9794);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_services_product_service__WEBPACK_IMPORTED_MODULE_5__]);
src_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















const getServerSideProps = async (context)=>{
    const searchQuery = context.query.search;
    if (!searchQuery) return {
        props: {
            products: [],
            searchQuery: "",
            pagination: {
                page: 0,
                total: 0
            }
        }
    };
    const page = Number(context.query.page) || 1;
    const { pagination , products  } = await src_services_product_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getAll */ .Z.getAll({
        ...src_services_product_service__WEBPACK_IMPORTED_MODULE_5__/* .baseQuery */ .r,
        filters: {
            name: {
                $contains: searchQuery
            }
        },
        pagination: {
            pageSize: 20,
            page: page
        }
    }, true);
    return {
        props: {
            products,
            searchQuery,
            pagination: {
                page: pagination.page,
                total: pagination.pageCount
            }
        }
    };
};
const SearchPage = ({ products , searchQuery , pagination  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const loading = (0,src_hooks_usePageLoading__WEBPACK_IMPORTED_MODULE_11__/* .usePageLoading */ .k)("search");
    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(searchQuery);
    const handleChange = (e)=>{
        setSearch(e.target.value);
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter") handleClick(e);
    };
    const handleClick = (e)=>{
        e.stopPropagation();
        e.preventDefault();
        if (!search) return;
        router.push(`/search?search=${search}`);
        setSearch("");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Поиск товаров"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_Search_module_scss__WEBPACK_IMPORTED_MODULE_13___default().section),
                children: [
                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_loader__WEBPACK_IMPORTED_MODULE_10__/* .Loader */ .a, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_layout_container__WEBPACK_IMPORTED_MODULE_4__/* .Container */ .W, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_9__/* .Breadcrumbs */ .O, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "section__title",
                                children: "Поиск товаров"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (src_components_layout_search_input_SearchInput_module_scss__WEBPACK_IMPORTED_MODULE_14___default().search),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_6__/* .Input */ .I, {
                                        autoFocus: true,
                                        placeholder: "Название или артикул",
                                        value: search,
                                        onChange: handleChange,
                                        onKeyDown: handleKeyDown
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_7__/* .Button */ .z, {
                                        onClick: handleClick,
                                        className: (src_components_layout_search_input_SearchInput_module_scss__WEBPACK_IMPORTED_MODULE_14___default().button),
                                        sizeMode: "lg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-search",
                                            "aria-hidden": "true"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "my-3",
                                children: "Результаты поиска:"
                            }),
                            products.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row justify-content-md-start justify-content-center",
                                children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (0,utils_concatClass__WEBPACK_IMPORTED_MODULE_15__/* .concatClass */ .o)([
                                            "col-xl-3 col-lg-4 col-md-6 col-sm-8 col-auto mt-3",
                                            (_Search_module_scss__WEBPACK_IMPORTED_MODULE_13___default().item_wrapper)
                                        ]),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_card__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Z, {
                                            product: product,
                                            isNew: product.isNew,
                                            isHit: product.isHit
                                        })
                                    }, product.id))
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "К сожалению, на ваш поисковый запрос ничего не найдено."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "d-flex justify-content-center mt-3 order-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_pagination__WEBPACK_IMPORTED_MODULE_12__/* .Pagination */ .t, {
                                    page: pagination.page,
                                    total: pagination.total
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 7104:
/***/ ((module) => {

"use strict";
module.exports = require("qs");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,121,675,310,679,168,686,700,584,152,535,63,317], () => (__webpack_exec__(6087)));
module.exports = __webpack_exports__;

})();