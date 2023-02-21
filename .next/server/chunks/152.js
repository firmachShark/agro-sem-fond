exports.id = 152;
exports.ids = [152];
exports.modules = {

/***/ 9788:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__oqWj1",
	"d_wrapper": "Card_d_wrapper__dTLcm",
	"description": "Card_description__W3Gvt",
	"stickers": "Card_stickers__eJxMu",
	"sticker": "Card_sticker__lSHUa",
	"sticker_orange": "Card_sticker_orange__AGGqm",
	"sticker_red": "Card_sticker_red__2_dEN",
	"header": "Card_header__wDcIt",
	"body": "Card_body__rSvQh",
	"title": "Card_title___WBLo"
};


/***/ }),

/***/ 152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Card)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/hooks/useLocalStorage.ts
var useLocalStorage = __webpack_require__(2411);
// EXTERNAL MODULE: ./utils/concatClass.ts
var concatClass = __webpack_require__(9794);
// EXTERNAL MODULE: ./utils/storage.ts
var storage = __webpack_require__(5838);
// EXTERNAL MODULE: ./utils/cart.ts
var utils_cart = __webpack_require__(458);
// EXTERNAL MODULE: ./src/components/button/index.ts + 1 modules
var components_button = __webpack_require__(5168);
// EXTERNAL MODULE: ./src/components/count-input/index.ts + 1 modules
var count_input = __webpack_require__(5131);
// EXTERNAL MODULE: ./src/components/card/Card.module.scss
var Card_module = __webpack_require__(9788);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
// EXTERNAL MODULE: ./src/components/img/index.ts + 1 modules
var img = __webpack_require__(6394);
// EXTERNAL MODULE: ./src/constants/routes.js
var routes = __webpack_require__(5844);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);
;// CONCATENATED MODULE: ./src/components/card/Card.tsx












const Card = ({ product , isNew , isHit , description  })=>{
    const cart = (0,useLocalStorage/* useLocalStorage */._)("cart");
    const inCart = cart && !!cart[product.id];
    const [count, setCount] = (0,external_react_.useState)(()=>{
        const cart = storage/* localStorageWrapper.get */.Y.get("cart");
        if (!cart) return 1;
        const cartCount = cart[product.id]?.count;
        return cartCount !== undefined ? cartCount : 1;
    });
    const props = (0,external_react_.useMemo)(()=>{
        const props = product.props;
        if (!props) return null;
        return Object.keys(props).slice(0, 7).reduce((result, key)=>({
                ...result,
                [key]: props[key]
            }), {});
    }, [
        product
    ]);
    const previewData = (0,external_react_.useMemo)(()=>{
        let image = product.preview;
        if (!image && product.images) {
            const firstImage = product.images[0];
            if (firstImage) {
                image = firstImage;
            }
        }
        if (!image) return null;
        return {
            imageURL: image.url,
            imageWidth: image.width,
            imageHeight: image.height
        };
    }, [
        product
    ]);
    const href = (0,external_react_.useMemo)(()=>{
        let href = "/";
        if (product.subcategories?.length && product.subcategories[0].category) {
            const pathname = product.href;
            const category = product.subcategories[0].category.href;
            href = `${(routes_default()).catalog}/${category}/${pathname}`;
        }
        return href;
    }, [
        product
    ]);
    const handleAddToCart = ()=>{
        utils_cart/* default.add */.Z.add(product.id, {
            count,
            price: product.price
        });
    };
    const handleRemoveFromCart = ()=>{
        utils_cart/* default.remove */.Z.remove(product.id);
        setCount(1);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: (0,concatClass/* concatClass */.o)([
            (Card_module_default()).card,
            description ? (Card_module_default()).d_wrapper : undefined
        ]),
        itemScope: true,
        itemType: "http://schema.org/Product",
        children: [
            description && props && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (0,concatClass/* concatClass */.o)([
                    (Card_module_default()).description
                ]),
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: Object.keys(props).filter((key)=>props[key].length <= 30).map((key)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: key
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: props[key]
                                })
                            ]
                        }, key))
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: href,
                className: (Card_module_default()).stickers,
                children: [
                    isNew && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Card_module_default()).sticker,
                        children: "Новинка"
                    }),
                    isHit && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (0,concatClass/* concatClass */.o)([
                            (Card_module_default()).sticker,
                            (Card_module_default()).sticker_orange
                        ]),
                        children: "ХИТ ПРОДАЖ"
                    }),
                    product.isGift && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (0,concatClass/* concatClass */.o)([
                            (Card_module_default()).sticker,
                            (Card_module_default()).sticker_red
                        ]),
                        children: "+ Подарок"
                    })
                ]
            }),
            previewData && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: href,
                className: (Card_module_default()).header,
                children: /*#__PURE__*/ jsx_runtime_.jsx(img/* Img */.E, {
                    itemProp: "image",
                    width: previewData.imageWidth,
                    height: previewData.imageHeight,
                    src: previewData.imageURL,
                    alt: product.name,
                    placeholder: "empty"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Card_module_default()).body,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "d-flex justify-content-between",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: href,
                            className: (Card_module_default()).title,
                            itemProp: "name",
                            children: product.name
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                        itemProp: "offers",
                        itemScope: true,
                        itemType: "http://schema.org/Offer",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                itemProp: "lowPrice",
                                children: product.price
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                itemProp: "priceCurrency",
                                children: "BYN"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "d-flex justify-content-between mt-3 align-items-center",
                        children: inCart ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: "/cart",
                                    children: [
                                        "В корзине",
                                        count > 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("b", {
                                            children: [
                                                " (",
                                                count,
                                                " шт.)"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
                                    sizeMode: "xs",
                                    variant: "primary",
                                    onClick: handleRemoveFromCart,
                                    children: "Убрать"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx(count_input/* CountInput */.P, {
                                    value: count,
                                    setValue: setCount
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
                                    sizeMode: "xs",
                                    variant: "primary",
                                    onClick: handleAddToCart,
                                    children: "В корзину"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/card/index.ts



/***/ }),

/***/ 6394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* reexport */ Img)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/img/Img.tsx


const Img = ({ alt , ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        alt: alt,
        placeholder: "empty",
        ...props
    });
};

;// CONCATENATED MODULE: ./src/components/img/index.ts



/***/ }),

/***/ 5844:
/***/ ((module) => {

"use strict";

const ROUTES = {
    blog: "/блог",
    about: "/о-нас",
    cart: "/корзина",
    delivery: "/доставка",
    faq: "/помощь",
    galery: "/галерея",
    garanty: "/гарантия",
    payment: "/оплата",
    search: "/поиск",
    stock: "/акции",
    viewed: "/просмотрено",
    catalog: "/каталог",
    "catalog/:categoryName": "/каталог/:categoryName",
    "catalog/:categoryName/:productName": "/каталог/:categoryName/:productName"
};
// const ROUTES_ENG = Object.keys(ROUTES).reduce((result, route) => {
//     result[route] = '/' + [route]
//     return result
// }, {})
module.exports = ROUTES;


/***/ })

};
;