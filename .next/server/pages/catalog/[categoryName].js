(() => {
var exports = {};
exports.id = 264;
exports.ids = [264];
exports.modules = {

/***/ 7139:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "Category_section__QbyzG",
	"main": "Category_main__NVaeA",
	"content": "Category_content__V_fHT",
	"products": "Category_products__K1q2f"
};


/***/ }),

/***/ 8460:
/***/ ((module) => {

// Exports
module.exports = {
	"aside": "Filters_aside__sCMmU",
	"aside_open": "Filters_aside_open__R7qra"
};


/***/ }),

/***/ 7857:
/***/ ((module) => {

// Exports
module.exports = {
	"checkbox": "Checkbox_checkbox___dHmp"
};


/***/ }),

/***/ 5072:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FILTERS": () => (/* binding */ FILTERS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_components_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2063);
/* harmony import */ var src_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1679);
/* harmony import */ var src_components_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(152);
/* harmony import */ var src_components_layout_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2310);
/* harmony import */ var src_sections_products_ProductsCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9090);
/* harmony import */ var src_services_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3822);
/* harmony import */ var src_services_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2535);
/* harmony import */ var utils_parseURL__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2372);
/* harmony import */ var _Category_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7139);
/* harmony import */ var _Category_module_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Category_module_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var utils_convertFromQuery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1628);
/* harmony import */ var src_components_catalog_filters_Filters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7311);
/* harmony import */ var src_components_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2489);
/* harmony import */ var src_hooks_usePageLoading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1471);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_services_category_service__WEBPACK_IMPORTED_MODULE_8__, src_services_product_service__WEBPACK_IMPORTED_MODULE_9__, src_components_catalog_filters_Filters__WEBPACK_IMPORTED_MODULE_10__]);
([src_services_category_service__WEBPACK_IMPORTED_MODULE_8__, src_services_product_service__WEBPACK_IMPORTED_MODULE_9__, src_components_catalog_filters_Filters__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const FILTERS = {
    SUBCATEGORY: "filter[subcategory]"
};
const getServerSideProps = async (context)=>{
    const param = context.params?.categoryName;
    const name = Array.isArray(param) ? param[0] : param || "";
    const parsedName = (0,utils_parseURL__WEBPACK_IMPORTED_MODULE_13__/* .parseURL */ .L)(name);
    const page = Number(context.query.page);
    const [subcategoryFilter] = (0,utils_convertFromQuery__WEBPACK_IMPORTED_MODULE_14__/* .convertFromQuery */ .I)(context.query[FILTERS.SUBCATEGORY], null);
    const category = await src_services_category_service__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getByName */ .Z.getByName(parsedName);
    const { products , pagination  } = await src_services_product_service__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getByCategoryName */ .Z.getByCategoryName(parsedName, {
        page: Number.isNaN(page) ? 0 : page,
        subcategoryFilters: {
            ...subcategoryFilter ? {
                id: {
                    $in: subcategoryFilter.length ? subcategoryFilter : [
                        -1
                    ]
                }
            } : {}
        }
    });
    const newProducts = await src_services_product_service__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getByFlag */ .Z.getByFlag("isNew", parsedName);
    if (!category) return {
        notFound: true
    };
    return {
        props: {
            category,
            subcategories: category.subcategories,
            products,
            newProducts,
            pagination: {
                page: pagination.page,
                total: pagination.pageCount
            }
        }
    };
};
const Category = ({ category , subcategories , pagination , products , newProducts  })=>{
    const loading = (0,src_hooks_usePageLoading__WEBPACK_IMPORTED_MODULE_12__/* .usePageLoading */ .k)("catalog");
    const [slidesToShow, slidesToShow_xl, slidesToShow_sm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const count = [];
        for(let i = 3; i > 0; i--){
            count.push(newProducts.length > 3 ? i : newProducts.length);
        }
        return [
            count[0],
            count[1],
            count[2]
        ];
    }, [
        newProducts
    ]);
    const title = "Каталог - " + category.name.slice(0, 1).toUpperCase() + category.name.slice(1);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_Category_module_scss__WEBPACK_IMPORTED_MODULE_15___default().section),
                children: [
                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_loader__WEBPACK_IMPORTED_MODULE_11__/* .Loader */ .a, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__/* .Breadcrumbs */ .O, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_layout_container__WEBPACK_IMPORTED_MODULE_6__/* .Container */ .W, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Category_module_scss__WEBPACK_IMPORTED_MODULE_15___default().main),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_catalog_filters_Filters__WEBPACK_IMPORTED_MODULE_10__/* .Filters */ .x, {
                                    subcategories: subcategories
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_Category_module_scss__WEBPACK_IMPORTED_MODULE_15___default().content),
                                    children: [
                                        !!newProducts.length && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "order-lg-0 order-1 mt-lg-0 mt-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "text-lg-start text-center",
                                                    children: "Новинки"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_sections_products_ProductsCarousel__WEBPACK_IMPORTED_MODULE_7__/* .ProductsCarousel */ .b, {
                                                    isNew: true,
                                                    products: newProducts,
                                                    carouselProps: {
                                                        slidesToShow,
                                                        variableWidth: true,
                                                        responsive: [
                                                            {
                                                                breakpoint: 1200,
                                                                settings: {
                                                                    slidesToShow: slidesToShow_xl
                                                                }
                                                            },
                                                            {
                                                                breakpoint: 575,
                                                                settings: {
                                                                    slidesToShow: slidesToShow_sm
                                                                }
                                                            }
                                                        ]
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-lg-start text-cente mb-2",
                                            children: category.fullName
                                        }),
                                        products.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Category_module_scss__WEBPACK_IMPORTED_MODULE_15___default().products),
                                            children: products.map((product)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_card__WEBPACK_IMPORTED_MODULE_5__/* .Card */ .Z, {
                                                    description: !!product.props,
                                                    isNew: product.isNew,
                                                    product: product
                                                }, product.id);
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "mt-3 text-lg-start text-center",
                                            children: "Товары не найдены."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "d-flex justify-content-center mt-3 order-5",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_pagination__WEBPACK_IMPORTED_MODULE_3__/* .Pagination */ .t, {
                                                page: pagination.page,
                                                total: pagination.total
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7311:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Filters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5168);
/* harmony import */ var src_components_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(387);
/* harmony import */ var src_hooks_useSearchParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5586);
/* harmony import */ var src_hooks_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2333);
/* harmony import */ var src_store_slices_filters_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2788);
/* harmony import */ var utils_concatClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9794);
/* harmony import */ var utils_convertFromQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1628);
/* harmony import */ var _Filters_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8460);
/* harmony import */ var _Filters_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Filters_module_scss__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_filters__WEBPACK_IMPORTED_MODULE_3__]);
src_components_filters__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable react-hooks/exhaustive-deps */ 









const getParams = (filters)=>{
    const params = {};
    for (const key of Object.keys(filters)){
        let value = filters[key];
        const name = `filter[${key}]`;
        if (Array.isArray(value)) value = JSON.stringify(value);
        else value = value.toString();
        params[name] = value;
    }
    return params;
};
const Filters = ({ subcategories  })=>{
    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { dispatchSetFilters  } = (0,src_hooks_useStore__WEBPACK_IMPORTED_MODULE_5__/* .useDispatchCreator */ .BA)({
        setFilters: src_store_slices_filters_slice__WEBPACK_IMPORTED_MODULE_6__/* .setFilters */ .rr
    });
    const filters = (0,src_hooks_useStore__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .CG)((state)=>state.filters);
    const { setParams , params  } = (0,src_hooks_useSearchParams__WEBPACK_IMPORTED_MODULE_4__/* .useSearchParams */ .l)([
        "categoryName"
    ]);
    const defaultFilters = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            subcategory: subcategories.map((s)=>s.id)
        }), [
        subcategories
    ]);
    const hadnleConfirmFilters = ()=>{
        setOpen(false);
        setParams((prev)=>{
            const newParams = {
                ...prev,
                ...getParams(filters)
            };
            delete newParams.page;
            return newParams;
        });
    };
    const handleResetFilters = ()=>{
        window.location.href = `${window.location.origin}${window.location.pathname}`;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const queryFilters = Object.keys(filters).reduce((result, key)=>{
            const filter = params[`filter[${key}]`];
            const reduxKey = key;
            if (filter !== undefined) {
                const isArray = Array.isArray(filters[reduxKey]);
                const isNumber = typeof filters[reduxKey] === "number";
                let value = filter;
                if (isArray) value = (0,utils_convertFromQuery__WEBPACK_IMPORTED_MODULE_7__/* .convertFromQuery */ .I)(value, [])[0];
                if (isNumber) value = Number(value);
                result[reduxKey] = value;
            } else if (defaultFilters[key]) {
                result[reduxKey] = defaultFilters[key];
            }
            return result;
        }, {});
        dispatchSetFilters(queryFilters);
    }, [
        params,
        defaultFilters
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
        className: (0,utils_concatClass__WEBPACK_IMPORTED_MODULE_8__/* .concatClass */ .o)([
            (_Filters_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aside),
            isOpen ? (_Filters_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aside_open) : undefined
        ]),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Фильтры"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                        onClick: ()=>setOpen((prev)=>!prev),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: `fa fa-${isOpen ? "minus" : "plus"}`,
                            "aria-hidden": "true"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_filters__WEBPACK_IMPORTED_MODULE_3__/* .SubcategoryFilters */ .b, {
                subcategories: subcategories
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex align-items-cetner justify-content-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                        onClick: hadnleConfirmFilters,
                        sizeMode: "sm",
                        variant: "primary",
                        children: "Применить"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                        onClick: handleResetFilters,
                        sizeMode: "sm",
                        bg: "outline-primary",
                        variant: "primary",
                        children: "Сбросить"
                    })
                ]
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Filters)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* reexport */ Checkbox)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/checkbox/Checkbox.module.scss
var Checkbox_module = __webpack_require__(7857);
var Checkbox_module_default = /*#__PURE__*/__webpack_require__.n(Checkbox_module);
;// CONCATENATED MODULE: ./src/components/checkbox/Checkbox.tsx



const Checkbox = ({ children , ...props })=>{
    const id = (0,external_react_.useId)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Checkbox_module_default()).checkbox,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                id: id,
                type: "checkbox",
                ...props
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: id,
                children: children
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/checkbox/index.ts



/***/ }),

/***/ 4460:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ SubcategoryFilters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pages_catalog_categoryName___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5072);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_hooks_useStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2333);
/* harmony import */ var src_store_slices_filters_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2788);
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5242);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pages_catalog_categoryName___WEBPACK_IMPORTED_MODULE_1__]);
pages_catalog_categoryName___WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const SubcategoryFilters = ({ subcategories  })=>{
    const ids = (0,src_hooks_useStore__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .CG)((state)=>state.filters.subcategory);
    const { dispatchSetFilter  } = (0,src_hooks_useStore__WEBPACK_IMPORTED_MODULE_3__/* .useDispatchCreator */ .BA)({
        setFilter: src_store_slices_filters_slice__WEBPACK_IMPORTED_MODULE_4__/* .setFilter */ .Tv
    });
    const checked = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const getChecked = (arr)=>arr.reduce((result, id)=>{
                result[id] = true;
                return result;
            }, {});
        return getChecked(ids);
    }, [
        ids
    ]);
    const handleChange = (id)=>(e)=>{
            const _ids = e.target.checked ? [
                ...ids,
                id
            ] : ids.filter((_id)=>_id !== id);
            dispatchSetFilter({
                name: "subcategory",
                value: _ids
            });
        };
    if (!subcategories.length) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                children: "Подкатегории"
            }),
            subcategories.map(({ id , name  })=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_checkbox__WEBPACK_IMPORTED_MODULE_5__/* .Checkbox */ .X, {
                    name: pages_catalog_categoryName___WEBPACK_IMPORTED_MODULE_1__.FILTERS.SUBCATEGORY,
                    value: id,
                    checked: !!checked[id],
                    onChange: handleChange(id),
                    children: name
                }, id);
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 387:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* reexport safe */ _SubcategoryFilters__WEBPACK_IMPORTED_MODULE_0__.b)
/* harmony export */ });
/* harmony import */ var _SubcategoryFilters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4460);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SubcategoryFilters__WEBPACK_IMPORTED_MODULE_0__]);
_SubcategoryFilters__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ useSearchParams)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable react-hooks/exhaustive-deps */ 

const useSearchParams = (exclude)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const params = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return router.query;
    }, [
        router
    ]);
    const excludeOBJ = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return exclude?.reduce((result, key)=>{
            result[key] = key;
            return result;
        }, {});
    }, [
        exclude
    ]);
    const setParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newParams)=>{
        let _params = newParams;
        if (typeof newParams === "function") _params = newParams(params);
        const search = Object.keys(_params).filter((key)=>!(excludeOBJ && excludeOBJ[key])).reduce((result, key, i, arr)=>{
            if (!arr.length) return "";
            result += `${key}=${_params[key]}${i !== arr.length - 1 ? "&" : ""}`;
            return result;
        }, "");
        console.log(search);
        const url = `${window.location.pathname}${search ? `?${search}` : ""}`;
        router.push(url);
    }, [
        params,
        excludeOBJ
    ]);
    const setParam = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((name, value)=>{
        const param = params[name];
        if (!value && param === undefined) return;
        if (value === (typeof param === "string" ? param : JSON.stringify(param))) return;
        setParams((prev)=>{
            if (!value) {
                const newParams = {
                    ...prev
                };
                delete newParams[name];
                return newParams;
            }
            return {
                ...prev,
                [name]: value
            };
        });
    }, [
        setParams,
        params
    ]);
    return {
        setParam,
        params,
        setParams
    };
};


/***/ }),

/***/ 2788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ae": () => (/* binding */ filtersReducer),
/* harmony export */   "Tv": () => (/* binding */ setFilter),
/* harmony export */   "rr": () => (/* binding */ setFilters)
/* harmony export */ });
/* unused harmony export initialFilters */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialFilters = {
    subcategory: []
};
const filtersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "filters",
    initialState: initialFilters,
    reducers: {
        setFilter (state, action) {
            state[action.payload.name] = action.payload.value;
        },
        setFilters (state, action) {
            for (const key of Object.keys(action.payload)){
                state[key] = action.payload[key];
            }
        }
    }
});
const filtersReducer = filtersSlice.reducer;
const { setFilter , setFilters  } = filtersSlice.actions;


/***/ }),

/***/ 1628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ convertFromQuery)
/* harmony export */ });
const convertFromQuery = (query, defaultValue)=>{
    if (query === undefined) return [
        defaultValue,
        true
    ];
    try {
        const parsed = JSON.parse(query);
        return [
            parsed,
            false
        ];
    } catch (e) {
        return [
            defaultValue,
            true
        ];
    }
};


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

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

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 8096:
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,121,675,310,679,168,686,700,584,152,535,874,822,63,317], () => (__webpack_exec__(5072)));
module.exports = __webpack_exports__;

})();