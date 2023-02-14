(() => {
var exports = {};
exports.id = 502;
exports.ids = [502];
exports.modules = {

/***/ 2219:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Product_container__HAu8X",
	"inner": "Product_inner__nrQ8a",
	"carousel_image": "Product_carousel_image__NvUp4",
	"carousel_dots": "Product_carousel_dots__hJRZy",
	"carousel_dot_active": "Product_carousel_dot_active__K2Ysb",
	"info": "Product_info__o6hwW",
	"title": "Product_title__lIGwn",
	"on_stock": "Product_on_stock__jjWwG",
	"content": "Product_content__k1Sis",
	"short_props": "Product_short_props__GbY_5",
	"fade": "Product_fade__HX72Y",
	"delivery": "Product_delivery__uilaa",
	"form": "Product_form__WDThY",
	"description": "Product_description__MMCLW"
};


/***/ }),

/***/ 5531:
/***/ ((module) => {

// Exports
module.exports = {
	"calculator": "Calculator_calculator__Zhg7z",
	"section": "Calculator_section__LlrdS",
	"inputs": "Calculator_inputs__q7rp1",
	"input": "Calculator_input__ZyXr8"
};


/***/ }),

/***/ 2482:
/***/ ((module) => {

// Exports
module.exports = {
	"loading": "Loader_loading___H9TE",
	"show": "Loader_show__YFqMF",
	"rotate": "Loader_rotate__x_v_I",
	"overlay": "Loader_overlay__lKXgr"
};


/***/ }),

/***/ 9524:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "ProductReview_wrapper__J6Se2",
	"not_yet": "ProductReview_not_yet__IsgUP",
	"review": "ProductReview_review__ZfbHM",
	"loader": "ProductReview_loader__Cdf6d",
	"error": "ProductReview_error__npuBh",
	"review_form": "ProductReview_review_form__P_4e7"
};


/***/ }),

/***/ 6936:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1679);
/* harmony import */ var src_components_layout_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2310);
/* harmony import */ var src_sections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5577);
/* harmony import */ var src_services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2535);
/* harmony import */ var utils_parseURL__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2372);
/* harmony import */ var _Product_module_scss__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2219);
/* harmony import */ var _Product_module_scss__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_Product_module_scss__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7182);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_ui__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fancyapps_ui_dist_fancybox_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6721);
/* harmony import */ var _fancyapps_ui_dist_fancybox_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_ui_dist_fancybox_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_components_count_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5131);
/* harmony import */ var src_components_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5168);
/* harmony import */ var src_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2411);
/* harmony import */ var utils_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5838);
/* harmony import */ var utils_cart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(458);
/* harmony import */ var utils_concatClass__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9794);
/* harmony import */ var src_components_calculator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4778);
/* harmony import */ var src_hooks_useStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2333);
/* harmony import */ var src_store_slices_modal_order_slice__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6772);
/* harmony import */ var src_components_productReview__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9387);
/* harmony import */ var src_components_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(48);
/* harmony import */ var utils_viewedApi__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5371);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_services_product_service__WEBPACK_IMPORTED_MODULE_8__, src_components_productReview__WEBPACK_IMPORTED_MODULE_20__]);
([src_services_product_service__WEBPACK_IMPORTED_MODULE_8__, src_components_productReview__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


























const getServerSideProps = async (context)=>{
    const parsedName = (0,utils_parseURL__WEBPACK_IMPORTED_MODULE_23__/* .parseURL */ .L)(context.query.productName);
    const categoryName = (0,utils_parseURL__WEBPACK_IMPORTED_MODULE_23__/* .parseURL */ .L)(context.query.categoryName);
    const product = await src_services_product_service__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getByName */ .Z.getByName(parsedName, categoryName);
    if (!product) {
        return {
            notFound: true
        };
    }
    const products = await src_services_product_service__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getByFlag */ .Z.getByFlag("isNew", categoryName, parsedName);
    return {
        props: {
            product,
            products
        }
    };
};
const ProductPage = ({ product , products  })=>{
    const { name , images , props , price: initialPrice , description , calculator  } = product;
    const { dispatchOpenModalOrder  } = (0,src_hooks_useStore__WEBPACK_IMPORTED_MODULE_18__/* .useDispatchCreator */ .BA)({
        openModalOrder: src_store_slices_modal_order_slice__WEBPACK_IMPORTED_MODULE_19__/* .openModalOrder */ .ar
    });
    const title = `Каталог - ${name}`;
    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialPrice);
    const [tabKey, setKey] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("description");
    const cart = (0,src_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_14__/* .useLocalStorage */ ._)("cart");
    const inCart = cart && !!cart[product.id];
    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>{
        const cart = utils_storage__WEBPACK_IMPORTED_MODULE_15__/* .localStorageWrapper.get */ .Y.get("cart");
        if (!cart) return 1;
        const cartCount = cart[product.id]?.count;
        return cartCount !== undefined ? cartCount : 1;
    });
    const shortProps = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        if (!props) return null;
        return Object.keys(props).filter((key)=>props[key].length <= 30).slice(0, 4).reduce((result, key)=>({
                ...result,
                [key]: props[key]
            }), {});
    }, [
        props
    ]);
    const handleSelect = (selectedIndex)=>{
        setIndex(selectedIndex);
    };
    const handleAddToCart = ()=>{
        utils_cart__WEBPACK_IMPORTED_MODULE_16__/* ["default"].add */ .Z.add(product.id, {
            count,
            price
        });
    };
    const handleRemoveFromCart = ()=>{
        utils_cart__WEBPACK_IMPORTED_MODULE_16__/* ["default"].remove */ .Z.remove(product.id);
        setCount(1);
    };
    const handleBuyClick = ()=>{
        dispatchOpenModalOrder({
            title: "Купить в один клик",
            text: "Оставьте заявку и наш менеджер с Вами свяжется!"
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        utils_viewedApi__WEBPACK_IMPORTED_MODULE_22__/* ["default"].add */ .Z.add({
            id: product.id
        });
    }, [
        product.id
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "pt-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_5__/* .Breadcrumbs */ .O, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_layout_container__WEBPACK_IMPORTED_MODULE_6__/* .Container */ .W, {
                        className: (0,utils_concatClass__WEBPACK_IMPORTED_MODULE_24__/* .concatClass */ .o)([
                            "container",
                            (_Product_module_scss__WEBPACK_IMPORTED_MODULE_25___default().container)
                        ]),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: (0,utils_concatClass__WEBPACK_IMPORTED_MODULE_24__/* .concatClass */ .o)([
                                    (_Product_module_scss__WEBPACK_IMPORTED_MODULE_25___default().title),
                                    "ps-0 d-md-none d-block"
                                ]),
                                children: name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_Product_module_scss__WEBPACK_IMPORTED_MODULE_25___default().inner),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: !!images?.length && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel, {
                                                    interval: null,
                                                    activeIndex: index,
                                                    onSelect: handleSelect,
                                                    indicators: false,
                                                    children: images.map((image, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Item, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                "data-fancybox": name,
                                                                width: image.width,
                                                                height: image.height,
                                                                className: (_Product_module_scss__WEBPACK_IMPORTED_MODULE_25___default().carousel_image),
                                                                src: image.url,
                                                                alt: name,
                                                                placeholder: "empty"
                                                            })
                                                        }, i))
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_Product_module_scss__WEBPACK_IMPORTED_MODULE_25___default().carousel_dots),
                                                    children: images.map((image, i)=>{
                                                        const width = images.length > 3 ? 100 / images.length - 2 : 31;
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: i === index ? (_Product_module_scss__WEBPACK_IMPORTED_MODULE_25___default().carousel_dot_active) : undefined,
                                                            style: {
                                                                width: `${width}%`
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                onClick: ()=>handleSelect(i),
                                                                width: image.width,
                                                                height: image.height,
                                                                src: image.url,
                                                                alt: name,
                                                                placeholder: "empty"
                                                            })
                                                        }, i);
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_Product_module_scss__WEBPACK_IMPORTED_MODULE_25___default().info),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: (0,utils_concatClass__WEBPACK_IMPORTED_MODULE_24__/* .concatClass */ .o)([
                                                    (_Product_module_scss__WEBPACK_IMPORTED_MODULE_25___default().title),
                                                    "d-md-block d-none"
                                                ]),
                                                children: name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_Product_module_scss__WEBPACK_IMPORTED_MODULE_25___default().on_stock),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "В наличии"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_Product_module_scss__WEBPACK_IMPORTED_MODULE_25___default().buy_btn),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_13__/* .Button */ .z, {
                                                            variant: "orange",
                                                            onClick: handleBuyClick,
                                                            children: "Купить в один клик"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: price
                                                                    }),
                                                                    " руб./шт"
                                                                ]
                                                            }),
                                                            inCart ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                        href: "/cart",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fa fa-check",
                                                                                "aria-hidden": "true"
                                                                            }),
                                                                            "В корзине",
                                                                            count > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                                                children: [
                                                                                    " (",
                                                                                    count,
                                                                                    " шт.)"
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_13__/* .Button */ .z, {
                                                                        variant: "primary",
                                                                        bg: "outline-primary",
                                                                        onClick: handleRemoveFromCart,
                                                                        children: "Убрать"
                                                                    })
                                                                ]
                                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_count_input__WEBPACK_IMPORTED_MODULE_12__/* .CountInput */ .P, {
                                                                        value: count,
                                                                        setValue: setCount
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_13__/* .Button */ .z, {
                                                                        variant: "primary",
                                                                        onClick: handleAddToCart,
                                                                        children: "В корзину"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            calculator && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_calculator__WEBPACK_IMPORTED_MODULE_17__/* .Calculator */ .y, {
                                                data: calculator,
                                                setPrice: setPrice
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_Product_module_scss__WEBPACK_IMPORTED_MODULE_25___default().content),
                                                children: [
                                                    shortProps && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: (_Product_module_scss__WEBPACK_IMPORTED_MODULE_25___default().short_props),
                                                        children: Object.keys(shortProps).map((key, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                style: {
                                                                    animationDelay: `${(i + 1) * 300}ms`
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: key
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                        children: shortProps[key]
                                                                    })
                                                                ]
                                                            }, key))
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_Product_module_scss__WEBPACK_IMPORTED_MODULE_25___default().delivery),
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                        href: "/payment",
                                                                        children: "Оплата"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: "банковской картой, электронными деньгами или наложенным платежом"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                        href: "/delivery",
                                                                        children: "Удобная доставка"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: "Различные способы доставки на любой вкус"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-7 col-12",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Tabs, {
                                            id: "product-tabs",
                                            className: "mt-3",
                                            activeKey: tabKey,
                                            onSelect: (k)=>setKey(k),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Tab, {
                                                    eventKey: "description",
                                                    title: "Описание",
                                                    className: (_Product_module_scss__WEBPACK_IMPORTED_MODULE_25___default().description),
                                                    dangerouslySetInnerHTML: {
                                                        __html: description
                                                    }
                                                }),
                                                props && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Tab, {
                                                    eventKey: "params",
                                                    title: "Характеристики",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: (0,utils_concatClass__WEBPACK_IMPORTED_MODULE_24__/* .concatClass */ .o)([
                                                            (_Product_module_scss__WEBPACK_IMPORTED_MODULE_25___default().short_props),
                                                            "mw-100"
                                                        ]),
                                                        children: Object.keys(props).map((key, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                style: {
                                                                    animationDelay: `${i * 200}ms`
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: key
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                        children: props[key]
                                                                    })
                                                                ]
                                                            }, key))
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Tab, {
                                                    eventKey: "reviews",
                                                    title: "Отзывы",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_productReview__WEBPACK_IMPORTED_MODULE_20__/* .ProductReview */ .l, {
                                                        isOpen: tabKey === "reviews",
                                                        productId: product.id
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-5 col-12 pt-5",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            className: (_Product_module_scss__WEBPACK_IMPORTED_MODULE_25___default().form),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    children: "Оставьте заявку чтобы купить!"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_21__/* .Input */ .I, {
                                                    name: "name",
                                                    placeholder: "Ваше Имя"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_input__WEBPACK_IMPORTED_MODULE_21__/* .Input */ .I, {
                                                    name: "phone",
                                                    placeholder: "Ваш Номер",
                                                    required: true
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_button__WEBPACK_IMPORTED_MODULE_13__/* .Button */ .z, {
                                                    type: "submit",
                                                    variant: "primary",
                                                    children: "Отправить"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_sections__WEBPACK_IMPORTED_MODULE_7__/* .SectionProducts */ .WO, {
                        products: products,
                        isNew: true,
                        title: "Новинки"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": () => (/* reexport */ Calculator)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/calculator/Calculator.module.scss
var Calculator_module = __webpack_require__(5531);
var Calculator_module_default = /*#__PURE__*/__webpack_require__.n(Calculator_module);
;// CONCATENATED MODULE: ./src/components/calculator/Calculator.tsx



const Calculator = ({ data , setPrice  })=>{
    const lengthInputs = (0,external_react_.useMemo)(()=>{
        return Object.keys(data).map((key)=>({
                title: key + " м.",
                value: key
            }));
    }, [
        data
    ]);
    const stepInputs = (0,external_react_.useMemo)(()=>{
        return Object.keys(data[Object.keys(data)[0]]).map((key)=>({
                title: key + " м.",
                value: key
            }));
    }, [
        data
    ]);
    const [length, setLength] = (0,external_react_.useState)(()=>lengthInputs[0].value);
    const [step, setStep] = (0,external_react_.useState)(()=>stepInputs[0].value);
    const onChange = (type, value)=>()=>{
            switch(type){
                case "length":
                    {
                        setLength(value);
                        break;
                    }
                case "step":
                    {
                        setStep(value);
                        break;
                    }
                default:
                    return;
            }
        };
    (0,external_react_.useEffect)(()=>{
        setPrice(data[length][step]);
    }, [
        step,
        length,
        setPrice,
        data
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        "data-calculator": true,
        className: (Calculator_module_default()).calculator,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Calculator_module_default()).section,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: "Длина:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Calculator_module_default()).inputs,
                        children: lengthInputs.map((input, i)=>{
                            const name = "calculator-input-length";
                            const id = `calculator-input-length-${i}`;
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Calculator_module_default()).input,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        checked: length === input.value,
                                        type: "radio",
                                        name: name,
                                        id: id,
                                        value: input.value,
                                        onChange: onChange("length", input.value)
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: id,
                                        children: input.title
                                    })
                                ]
                            }, id);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Calculator_module_default()).section,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: "Шаг:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Calculator_module_default()).inputs,
                        children: stepInputs.map((input, i)=>{
                            const name = "calculator-input-step";
                            const id = `calculator-input-step-${i}`;
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Calculator_module_default()).input,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        checked: step === input.value,
                                        type: "radio",
                                        name: name,
                                        id: id,
                                        value: input.value,
                                        onChange: onChange("step", input.value)
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: id,
                                        children: input.title
                                    })
                                ]
                            }, id);
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const calculator_Calculator = ((/* unused pure expression or super */ null && (Calculator)));

;// CONCATENATED MODULE: ./src/components/calculator/index.ts



/***/ }),

/***/ 2489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* reexport */ Loader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./utils/concatClass.ts
var concatClass = __webpack_require__(9794);
// EXTERNAL MODULE: ./src/components/loader/Loader.module.scss
var Loader_module = __webpack_require__(2482);
var Loader_module_default = /*#__PURE__*/__webpack_require__.n(Loader_module);
;// CONCATENATED MODULE: ./src/components/loader/Loader.tsx




const Loader = ({ withoutOverlay  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,concatClass/* concatClass */.o)([
            (Loader_module_default()).loading,
            withoutOverlay ? undefined : (Loader_module_default()).overlay
        ]),
        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
            className: "fa fa-repeat",
            "aria-hidden": "true"
        })
    });
};

;// CONCATENATED MODULE: ./src/components/loader/index.ts



/***/ }),

/***/ 5623:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ ProductReview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_services_reviews_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7271);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2489);
/* harmony import */ var _ProductReview_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9524);
/* harmony import */ var _ProductReview_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ProductReview_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ReviewForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2564);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_services_reviews_service__WEBPACK_IMPORTED_MODULE_2__, _ReviewForm__WEBPACK_IMPORTED_MODULE_4__]);
([src_services_reviews_service__WEBPACK_IMPORTED_MODULE_2__, _ReviewForm__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ProductReview = ({ productId , isOpen  })=>{
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [reviews, setReviews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const fetchReviews = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (!isOpen) return;
        if (reviews !== null) return;
        setLoading(true);
        try {
            const data = await src_services_reviews_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getByProductId */ .Z.getByProductId(productId);
            setReviews(data);
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    }, [
        productId,
        isOpen,
        reviews
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchReviews();
    }, [
        fetchReviews
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_ProductReview_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_ProductReview_module_scss__WEBPACK_IMPORTED_MODULE_5___default().loader),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_loader__WEBPACK_IMPORTED_MODULE_3__/* .Loader */ .a, {
                withoutOverlay: true
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReviewForm__WEBPACK_IMPORTED_MODULE_4__/* .ReviewForm */ .Y, {
                    productId: productId,
                    setReviews: setReviews
                }),
                reviews && reviews.length ? reviews.map((review)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_ProductReview_module_scss__WEBPACK_IMPORTED_MODULE_5___default().review),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                children: [
                                    review.author,
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: new Date(review.createdAt).toLocaleString("ru")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: review.content
                            })
                        ]
                    }, review.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    className: (_ProductReview_module_scss__WEBPACK_IMPORTED_MODULE_5___default().not_yet),
                    children: "Отзывов пока нет"
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2564:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ ReviewForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_services_reviews_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7271);
/* harmony import */ var utils_convertToModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4337);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5168);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2489);
/* harmony import */ var _ProductReview_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9524);
/* harmony import */ var _ProductReview_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ProductReview_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_services_reviews_service__WEBPACK_IMPORTED_MODULE_2__, utils_convertToModel__WEBPACK_IMPORTED_MODULE_3__]);
([src_services_reviews_service__WEBPACK_IMPORTED_MODULE_2__, utils_convertToModel__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const CONTENT_LIMIT = 500;
const ReviewForm = ({ productId , setReviews  })=>{
    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [author, setAuthor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [authorError, setAuthorError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [contentError, setContentError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const contentId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    const authorId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    const handleOnChangeAuthor = (e)=>setAuthor(e.target.value);
    const handleOnChangeContent = (e)=>{
        let value = e.target.value;
        if (value.length > CONTENT_LIMIT) value = value.slice(0, CONTENT_LIMIT);
        setContent(value);
    };
    const handleSubmit = async ()=>{
        if (author.length < 2) return setAuthorError(true);
        setAuthorError(false);
        if (content.length < 10) return setContentError(true);
        setContentError(false);
        setLoading(true);
        try {
            const response = await src_services_reviews_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].addReview */ .Z.addReview(productId, {
                author,
                content
            });
            if (response.status === 200) {
                const newReview = (0,utils_convertToModel__WEBPACK_IMPORTED_MODULE_3__/* .convertToModel */ .r)(response.data.data);
                setReviews((prev)=>{
                    if (Array.isArray(prev)) return [
                        ...prev,
                        newReview
                    ];
                    return [
                        newReview
                    ];
                });
                handleCancel();
            }
        } catch (e) {
            console.error(e);
        }
        setLoading(false);
    };
    const handleCancel = ()=>{
        setAuthor("");
        setContent("");
        setAuthorError(false);
        setContentError(false);
        setOpen(false);
    };
    return isOpen ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_ProductReview_module_scss__WEBPACK_IMPORTED_MODULE_6___default().review_form),
        children: [
            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_loader__WEBPACK_IMPORTED_MODULE_5__/* .Loader */ .a, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: authorId,
                children: "Ваше Имя"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                value: author,
                onChange: handleOnChangeAuthor,
                autoFocus: true,
                id: authorId,
                placeholder: "Имя"
            }),
            authorError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_ProductReview_module_scss__WEBPACK_IMPORTED_MODULE_6___default().error),
                children: "Длина имени должна быть больше 2 символов"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                htmlFor: contentId,
                children: [
                    "Ваш отзыв: ",
                    content.length,
                    "/",
                    CONTENT_LIMIT
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                id: contentId,
                value: content,
                onChange: handleOnChangeContent,
                placeholder: "Отзыв"
            }),
            contentError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_ProductReview_module_scss__WEBPACK_IMPORTED_MODULE_6___default().error),
                children: "Длина отзыва должна быть больше 10 символов"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                sizeMode: "sm",
                variant: "primary",
                onClick: handleSubmit,
                children: "Отправить"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                sizeMode: "sm",
                variant: "primary",
                bg: "outline-primary",
                onClick: handleCancel,
                className: "ms-2",
                children: "Отмена"
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
        sizeMode: "sm",
        variant: "primary",
        onClick: ()=>setOpen(true),
        children: "Оставить отзыв"
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9387:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* reexport safe */ _ProductReview__WEBPACK_IMPORTED_MODULE_0__.l)
/* harmony export */ });
/* harmony import */ var _ProductReview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5623);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProductReview__WEBPACK_IMPORTED_MODULE_0__]);
_ProductReview__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7271:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9827);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_http__WEBPACK_IMPORTED_MODULE_1__]);
src_http__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class ReviewsService {
    async getByProductId(productId) {
        return (0,src_http__WEBPACK_IMPORTED_MODULE_1__/* .getModels */ .hM)(`product-reviews?${qs__WEBPACK_IMPORTED_MODULE_0___default().stringify({
            filters: {
                product: {
                    id: {
                        $eq: productId
                    }
                }
            }
        })}`);
    }
    async addReview(productId, data) {
        return src_http__WEBPACK_IMPORTED_MODULE_1__/* .$api.post */ .Wh.post("product-reviews", {
            data: {
                author: data.author,
                content: data.content,
                product: {
                    id: productId
                }
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ReviewsService());

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6721:
/***/ (() => {



/***/ }),

/***/ 7182:
/***/ ((module) => {

"use strict";
module.exports = require("@fancyapps/ui");

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

/***/ }),

/***/ 1774:
/***/ ((module) => {

"use strict";
module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

"use strict";
module.exports = import("remark-html");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,121,675,310,679,168,686,700,853,152,535,109,874,577,371], () => (__webpack_exec__(6936)));
module.exports = __webpack_exports__;

})();