exports.id = 577;
exports.ids = [577];
exports.modules = {

/***/ 1657:
/***/ ((module) => {

// Exports
module.exports = {
	"about": "SectionAbout_about__L5bfw"
};


/***/ }),

/***/ 2039:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "SectionBlog_section__L_PDI",
	"item": "SectionBlog_item__SoVu_",
	"preview": "SectionBlog_preview__SnyJZ",
	"title": "SectionBlog_title__npgpQ"
};


/***/ }),

/***/ 7407:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "SectionCatalogMail_section__lczd0",
	"item": "SectionCatalogMail_item__k4D4d",
	"right_item": "SectionCatalogMail_right_item__3gOzQ",
	"bonus": "SectionCatalogMail_bonus__eLJ_r"
};


/***/ }),

/***/ 8570:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "SectionCategories_section__UyFRT",
	"bg": "SectionCategories_bg__XAmNu",
	"items": "SectionCategories_items__4e9Ww",
	"item": "SectionCategories_item__CsURz"
};


/***/ }),

/***/ 7324:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "SectionConnect_section__1_B19",
	"inner": "SectionConnect_inner__5gkou",
	"photo": "SectionConnect_photo__vycQo",
	"socials": "SectionConnect_socials__3EO8E"
};


/***/ }),

/***/ 6917:
/***/ ((module) => {

// Exports
module.exports = {
	"delivery": "SectionDelivery_delivery__j_7D2",
	"inner": "SectionDelivery_inner__E1KlM"
};


/***/ }),

/***/ 616:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "SectionOverview_section__G_nz2",
	"item": "SectionOverview_item__my4dV",
	"inner": "SectionOverview_inner__eA_Xm"
};


/***/ }),

/***/ 609:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "SectionProducts_section__hDxHH"
};


/***/ }),

/***/ 7067:
/***/ ((module) => {

// Exports
module.exports = {
	"inner": "SectionReviews_inner__MZK5F",
	"item": "SectionReviews_item__EtonT",
	"active": "SectionReviews_active__rb_VQ",
	"review": "SectionReviews_review__XIt9d"
};


/***/ }),

/***/ 2319:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "SectionSubscription_section__J1J4k",
	"container": "SectionSubscription_container__cKuNj",
	"inner": "SectionSubscription_inner__neqLA"
};


/***/ }),

/***/ 5577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "NH": () => (/* reexport */ SectionAbout),
  "N9": () => (/* reexport */ SectionBlog),
  "MQ": () => (/* reexport */ SectionCatalogMail),
  "Co": () => (/* reexport */ SectionCategories),
  "ZP": () => (/* reexport */ SectionConnect),
  "_5": () => (/* reexport */ SectionDelivery),
  "qb": () => (/* reexport */ SectionOverview),
  "WO": () => (/* reexport */ SectionProducts),
  "_Y": () => (/* reexport */ SectionReviews),
  "EX": () => (/* reexport */ SectionSubscription)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/carousel/index.ts + 1 modules
var carousel = __webpack_require__(5172);
// EXTERNAL MODULE: ./src/components/layout/container/index.ts + 1 modules
var container = __webpack_require__(2310);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/sections/overview/SectionOverview.module.scss
var SectionOverview_module = __webpack_require__(616);
var SectionOverview_module_default = /*#__PURE__*/__webpack_require__.n(SectionOverview_module);
// EXTERNAL MODULE: ./src/components/button/index.ts + 1 modules
var components_button = __webpack_require__(5168);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/sections/overview/SectionOverview.tsx







const SectionOverview = ({ items  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (SectionOverview_module_default()).section,
        children: /*#__PURE__*/ jsx_runtime_.jsx(container/* Container */.W, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(carousel/* Carousel */.l, {
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                slidesToShow: items.length > 1 ? 2 : 1,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ],
                children: items.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: item.href,
                            className: (SectionOverview_module_default()).item,
                            style: {
                                backgroundImage: item.photo ? `url(${item.photo.url})` : "none"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (SectionOverview_module_default()).inner,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: item.content
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
                                        variant: "orange",
                                        children: "Подробонее"
                                    })
                                ]
                            })
                        })
                    }, i))
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/sections/overview/index.ts


// EXTERNAL MODULE: ./src/sections/delivery/SectionDelivery.module.scss
var SectionDelivery_module = __webpack_require__(6917);
var SectionDelivery_module_default = /*#__PURE__*/__webpack_require__.n(SectionDelivery_module);
;// CONCATENATED MODULE: ./src/sections/delivery/SectionDelivery.tsx





const SectionDelivery = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (SectionDelivery_module_default()).delivery,
        children: /*#__PURE__*/ jsx_runtime_.jsx(container/* Container */.W, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (SectionDelivery_module_default()).inner,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "НАДЕЖНАЯ ДОСТАВКА"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Акции и льготы на доставку! Почтой России и в пункты выдачи"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
                                isLink: {
                                    href: "/delivery"
                                },
                                variant: "orange",
                                children: "Подробнее"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "УДОБНАЯ ОПЛАТА"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Онлайн или наложенным платежом! Выберите удобный для вас способ"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
                                isLink: {
                                    href: "/payment"
                                },
                                variant: "orange",
                                children: "Подробнее"
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/sections/delivery/index.ts


// EXTERNAL MODULE: ./utils/concatClass.ts
var concatClass = __webpack_require__(9794);
// EXTERNAL MODULE: ./src/sections/categories/SectionCategories.module.scss
var SectionCategories_module = __webpack_require__(8570);
var SectionCategories_module_default = /*#__PURE__*/__webpack_require__.n(SectionCategories_module);
;// CONCATENATED MODULE: ./src/sections/categories/SectionCategories.tsx






const SectionCategories = ({ categories , title , withBg  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (0,concatClass/* concatClass */.o)([
            (SectionCategories_module_default()).section,
            withBg ? (SectionCategories_module_default()).bg : undefined
        ]),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* Container */.W, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "section__title",
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SectionCategories_module_default()).items,
                    children: categories.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/catalog/" + category.href,
                            className: (SectionCategories_module_default()).item,
                            style: {
                                backgroundImage: category.preview ? `url(${category.preview.url})` : "none"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        children: category.fullName
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: category.name
                                        })
                                    })
                                ]
                            })
                        }, category.id))
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/sections/categories/index.ts


// EXTERNAL MODULE: ./src/sections/products/ProductsCarousel.tsx
var ProductsCarousel = __webpack_require__(9090);
// EXTERNAL MODULE: ./src/sections/products/SectionProducts.module.scss
var SectionProducts_module = __webpack_require__(609);
var SectionProducts_module_default = /*#__PURE__*/__webpack_require__.n(SectionProducts_module);
;// CONCATENATED MODULE: ./src/sections/products/SectionProducts.tsx





const SectionProducts = ({ products , title , isNew  })=>{
    if (!products.length) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (SectionProducts_module_default()).section,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* Container */.W, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "section__title",
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ProductsCarousel/* ProductsCarousel */.b, {
                    carouselProps: {
                        variableWidth: true,
                        centerMode: true
                    },
                    isNew: !!isNew,
                    products: products
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/sections/products/index.ts


// EXTERNAL MODULE: ./src/hooks/useStore.ts
var useStore = __webpack_require__(2333);
// EXTERNAL MODULE: ./src/store/slices/modal-order.slice.ts
var modal_order_slice = __webpack_require__(6772);
// EXTERNAL MODULE: ./src/sections/reviews/SectionReviews.module.scss
var SectionReviews_module = __webpack_require__(7067);
var SectionReviews_module_default = /*#__PURE__*/__webpack_require__.n(SectionReviews_module);
;// CONCATENATED MODULE: ./src/sections/reviews/SectionReviews.tsx









const SectionReviews = ({ reviews  })=>{
    const { dispatchOpenModalOrder  } = (0,useStore/* useDispatchCreator */.BA)({
        openModalOrder: modal_order_slice/* openModalOrder */.ar
    });
    const items = (0,external_react_.useMemo)(()=>reviews.filter((item)=>!!item.image), [
        reviews
    ]);
    const slidesToShow = (0,external_react_.useMemo)(()=>{
        if (items.length > 0 && items.length < 3) return items.length;
        return 3;
    }, [
        items.length
    ]);
    const [current, setCurrent] = (0,external_react_.useState)(items[0]);
    const handleClickModalBtn = ()=>dispatchOpenModalOrder({
            title: "Оставить заявку",
            text: "Оставьте ваши данные, и мы Вам перезвоним!"
        });
    const handleClick = (id)=>()=>{
            const candidate = items.find((item)=>item.id === id);
            if (candidate) setCurrent(candidate);
        };
    const handleChange = (idx)=>{
        const candidate = items[idx];
        if (candidate) setCurrent(candidate);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(container/* Container */.W, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (SectionReviews_module_default()).inner,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: current?.author
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: current?.comment
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
                                sizeMode: "sm",
                                onClick: handleClickModalBtn,
                                variant: "orange",
                                className: "mt-3 mb-5",
                                children: "Оставить заявку"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(carousel/* Carousel */.l, {
                                slidesToShow: slidesToShow,
                                afterChange: handleChange,
                                arrows: false,
                                children: items.map((item)=>{
                                    const isActive = current.id === item.id;
                                    const className = isActive ? (SectionReviews_module_default()).active : undefined;
                                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            onClick: handleClick(item.id),
                                            className: (0,concatClass/* concatClass */.o)([
                                                (SectionReviews_module_default()).item,
                                                className
                                            ]),
                                            style: {
                                                backgroundImage: `url(${item.image?.url})`
                                            }
                                        })
                                    }, item.id);
                                })
                            })
                        ]
                    }),
                    current && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (SectionReviews_module_default()).review,
                        style: {
                            backgroundImage: `url(${current.image?.url})`
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                children: current.product
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: current.author
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: current.city
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/sections/reviews/index.ts


// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/catalog-mail/photo.jpg
/* harmony default export */ const photo = ({"src":"/_next/static/media/photo.950abc78.jpg","height":352,"width":249,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAKBIX//EABsQAAMAAgMAAAAAAAAAAAAAAAECAwAREiGB/9oACAEBAAE/AK2d5q9JXsSx5P0h35rP/8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAESET/9oACAECAQE/AO72wzDP/8QAGBEAAwEBAAAAAAAAAAAAAAAAAQIDEQD/2gAIAQMBAT8AlNWmjHdI7//Z","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/image_export/catalog-mail.ts


// EXTERNAL MODULE: ./src/sections/catalogMail/SectionCatalogMail.module.scss
var SectionCatalogMail_module = __webpack_require__(7407);
var SectionCatalogMail_module_default = /*#__PURE__*/__webpack_require__.n(SectionCatalogMail_module);
;// CONCATENATED MODULE: ./src/sections/catalogMail/SectionCatalogMail.tsx











const SectionCatalogMail = ()=>{
    const { dispatchOpenModalOrder  } = (0,useStore/* useDispatchCreator */.BA)({
        openModalOrder: modal_order_slice/* openModalOrder */.ar
    });
    const handleClick = ()=>dispatchOpenModalOrder();
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (SectionCatalogMail_module_default()).section,
        children: /*#__PURE__*/ jsx_runtime_.jsx(container/* Container */.W, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (SectionCatalogMail_module_default()).item,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "section__title",
                                    children: "Каталог \xabСемена почтой\xbb"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row align-items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-6 d-sm-block d-none",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                placeholder: "empty",
                                                src: photo,
                                                width: 238,
                                                height: 336,
                                                className: "w-100 h-auto",
                                                alt: "Каталог \xabСемена почтой\xbb"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "col-sm-6 col-12",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Овощные культуры"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Цветы однолетние"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Цветы двулетние"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Цветы многолетние"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Серия \xabДомашняя аптека\xbb"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Товары производства \xabВаше хозяйство\xbb"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Доставка товара круглый год"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
                                                    isLink: {
                                                        href: "/catalog"
                                                    },
                                                    variant: "primary",
                                                    className: "my-3",
                                                    children: "Посмотреть"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
                                                    variant: "orange",
                                                    onClick: handleClick,
                                                    children: "Оставить заявку"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 col-12 mt-lg-0 mt-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/stock",
                            className: (0,concatClass/* concatClass */.o)([
                                (SectionCatalogMail_module_default()).item,
                                (SectionCatalogMail_module_default()).right_item
                            ]),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                    children: [
                                        "Делитесь своим мнением!",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        " и получайте"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (SectionCatalogMail_module_default()).bonus,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                    children: "3"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                    children: "0"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                    children: "0"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Бонусов на счет!"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
                                            variant: "orange",
                                            children: "Подробнее"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/sections/catalogMail/index.ts


// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./public/images/connect/photo.jpg
/* harmony default export */ const connect_photo = ({"src":"/_next/static/media/photo.f0721cbc.jpg","height":900,"width":900,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAADBf/aAAwDAQACEAMQAAAACOX/xAAeEAACAgAHAAAAAAAAAAAAAAACAwEEABESFCIkUf/aAAgBAQABPwA7ybPSTR26hHQeS45x7OP/xAAYEQEBAAMAAAAAAAAAAAAAAAACAQARQf/aAAgBAgEBPwBtGzV5n//EABYRAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAwEBPwDSrf/Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/image_export/connect.ts


// EXTERNAL MODULE: ./src/sections/connect/SectionConnect.module.scss
var SectionConnect_module = __webpack_require__(7324);
var SectionConnect_module_default = /*#__PURE__*/__webpack_require__.n(SectionConnect_module);
;// CONCATENATED MODULE: ./src/sections/connect/SectionConnect.tsx







const SectionConnect = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (SectionConnect_module_default()).section,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row justify-content-end",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xxl-5 col-xl-6 col-md-7 col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (SectionConnect_module_default()).inner,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "section__title",
                                    children: "ПРИСОЕДИНЯЙТЕСЬ К НАМ!"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Подписывайтесь на социальные сети и участвуйте в розыгрышах призов!"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (SectionConnect_module_default()).socials,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                            href: "/",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Вконтакте"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                            href: "/",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Telegram"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-4 col-5 d-lg-block d-none",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            placeholder: "empty",
                            width: 421,
                            height: 456,
                            className: (SectionConnect_module_default()).photo,
                            src: connect_photo,
                            alt: "Присоединяйтесь к нам"
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/sections/connect/index.ts


// EXTERNAL MODULE: ./src/sections/blog/SectionBlog.module.scss
var SectionBlog_module = __webpack_require__(2039);
var SectionBlog_module_default = /*#__PURE__*/__webpack_require__.n(SectionBlog_module);
;// CONCATENATED MODULE: ./src/sections/blog/BlogItem.tsx






const BlogItem = ({ post  })=>{
    const href = "/blog/" + post.href;
    const content = (0,external_react_.useMemo)(()=>{
        return post.content.replace(/<([\s\S]*?)>/g, "").split(".")[0].slice(0, 100).concat(" ...");
    }, [
        post
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: (SectionBlog_module_default()).item,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: href,
                className: (SectionBlog_module_default()).preview,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    width: 600,
                    height: 600,
                    src: post.preview?.url || "",
                    alt: post.title,
                    placeholder: "empty"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: href,
                className: (SectionBlog_module_default()).title,
                children: post.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: content
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row justify-content-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
                    variant: "orange",
                    className: "w-auto mt-3",
                    isLink: {
                        href
                    },
                    children: "Подробнее"
                })
            })
        ]
    }, post.id);
};

;// CONCATENATED MODULE: ./src/sections/blog/SectionBlog.tsx




const SectionBlog = ({ title , posts  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (SectionBlog_module_default()).section,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* Container */.W, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "section__title mb-3",
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: posts.map((post)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-sm-6 col-12 mt-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(BlogItem, {
                                post: post
                            })
                        }, post.id);
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/sections/blog/index.ts


// EXTERNAL MODULE: ./src/sections/about/SectionAbout.module.scss
var SectionAbout_module = __webpack_require__(1657);
var SectionAbout_module_default = /*#__PURE__*/__webpack_require__.n(SectionAbout_module);
// EXTERNAL MODULE: ./src/image_export/about.ts + 24 modules
var about = __webpack_require__(1109);
;// CONCATENATED MODULE: ./src/sections/about/SectionAbout.tsx






const props = [
    {
        image: about/* Prop_1 */.j$,
        text: "Гарантированные скидки - цены ниже, чем у конкурентов."
    },
    {
        image: about/* Prop_2 */.vO,
        text: "Бесплатный печатный каталог"
    },
    {
        image: about/* Prop_3 */.A4,
        text: "Доставка со скидкой или бесплатно."
    },
    {
        image: about/* Prop_4 */.n_,
        text: "Начисление и оплата бонусами"
    },
    {
        image: about/* Prop_5 */.$f,
        text: "БОЛЬШОЕ количество полезных подарков."
    },
    {
        image: about/* Prop_6 */.to,
        text: "Обработка заказов от 1 до 3 дней. Компьютерная сканировка товарного вложения"
    },
    {
        image: about/* Prop_7 */.GC,
        text: "Все товары от производителя! Не перекупаем."
    },
    {
        image: about/* Prop_8 */.Sn,
        text: "Гарантия качества на весь посадочный материал"
    },
    {
        image: about/* Prop_9 */.HQ,
        text: "Надежная упаковка гарантирует, что весь посадочный материал в безопасности"
    },
    {
        image: about/* Prop_10 */.Md,
        text: "Отправка наложенным платежом"
    }
];
const SectionAbout = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (SectionAbout_module_default()).about,
        children: /*#__PURE__*/ jsx_runtime_.jsx(container/* Container */.W, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-xl-7 col-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Агросемфонд — интернет-магазин семян"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "\xabАгросемфонд\xbb - это интернет магазин семян, основанный на базе известной российской компании \xabВаше Хозяйство\xbb. Мы предлагаем лучшие образцы и новинки российской и иностранной селекции. Ассортимент компании насчитывает более 4000 наименований. Вся продукция интернет магазина проходит контроль качества и имеет сертификаты соответствия."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Наши преимущества:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: props.map((prop, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                width: 60,
                                                height: 60,
                                                src: prop.image,
                                                alt: prop.text,
                                                placeholder: "empty"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: prop.text
                                            })
                                        ]
                                    }, i))
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-5 d-xl-block d-none",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: 400,
                            height: 1000,
                            placeholder: "empty",
                            src: about/* AboutPhoto */.f5,
                            alt: "Наши преимущества",
                            className: "w-100 h-auto"
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/sections/about/index.ts


// EXTERNAL MODULE: ./src/components/input/index.ts + 1 modules
var input = __webpack_require__(48);
// EXTERNAL MODULE: ./src/sections/subscription/SectionSubscription.module.scss
var SectionSubscription_module = __webpack_require__(2319);
var SectionSubscription_module_default = /*#__PURE__*/__webpack_require__.n(SectionSubscription_module);
;// CONCATENATED MODULE: ./src/sections/subscription/SectionSubscription.tsx







const SectionSubscription = ()=>{
    const id = (0,external_react_.useId)();
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (SectionSubscription_module_default()).section,
        children: /*#__PURE__*/ jsx_runtime_.jsx(container/* Container */.W, {
            className: (0,concatClass/* concatClass */.o)([
                "container",
                (SectionSubscription_module_default()).container
            ]),
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row justify-content-lg-between justify-content-center align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-5 col-lg-6 col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (SectionSubscription_module_default()).inner,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Будьте в курсе событий"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Подарок за подписку!"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Подпишитесь на рассылку с самыми горячими акциями и скидками!"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 mt-lg-0 mt-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            action: "/",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: id,
                                    children: "Ваш Номер:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(input/* Input */.I, {
                                    type: "number",
                                    placeholder: "Ваш номер",
                                    name: "phone",
                                    id: id,
                                    required: true
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
                                    variant: "orange",
                                    type: "submit",
                                    children: "Получить подарок"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/sections/subscription/index.ts


;// CONCATENATED MODULE: ./src/sections/index.ts












/***/ }),

/***/ 6772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kv": () => (/* binding */ closeModalOrder),
/* harmony export */   "N6": () => (/* binding */ modalOrderReducer),
/* harmony export */   "ar": () => (/* binding */ openModalOrder)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isOpen: false,
    title: "Заказ",
    text: "Какой-то текст"
};
const modalOrderSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "modalOrder",
    initialState,
    reducers: {
        openModalOrder (state, action) {
            state.isOpen = true;
            state.title = action.payload?.title || "Оставить заявку";
            state.text = action.payload?.text || "Оставьте ваши данные и мы Вам перезвоним!";
        },
        closeModalOrder (state) {
            state.isOpen = false;
        }
    }
});
const { openModalOrder , closeModalOrder  } = modalOrderSlice.actions;
const modalOrderReducer = modalOrderSlice.reducer;


/***/ })

};
;