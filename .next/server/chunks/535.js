"use strict";
exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 4878:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const CRM_URL = "https://firma-crm.by";
const PRICE_KEY = "price_rb" || 0;
const PRICE_DELIVERY_KEY = "price_delivery_br" || 0;
class PriceService {
    async loadPrices(ids) {
        const result = {};
        const requestIds = ids.map((id)=>id.id);
        if (requestIds.length) {
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${CRM_URL}/price/get-by-product-ids`, {
                    ids: requestIds
                });
                if (response.status === 201) {
                    response.data.forEach((priceObj)=>{
                        const requested = ids.find((item)=>item.id === priceObj.product_id);
                        let priceKey = PRICE_KEY;
                        if (requested?.priceWithDelivery) {
                            priceKey = PRICE_DELIVERY_KEY;
                        }
                        const price = priceObj[priceKey];
                        result[priceObj.product_id] = price;
                    });
                }
            } catch (e) {
                return null;
            }
        }
        return result;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new PriceService());

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2535:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "r": () => (/* binding */ baseQuery)
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9827);
/* harmony import */ var utils_getNumbersFromObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(303);
/* harmony import */ var _price_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4878);
/* harmony import */ var utils_convertToHTML__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_http__WEBPACK_IMPORTED_MODULE_1__, _price_service__WEBPACK_IMPORTED_MODULE_2__, utils_convertToHTML__WEBPACK_IMPORTED_MODULE_3__]);
([src_http__WEBPACK_IMPORTED_MODULE_1__, _price_service__WEBPACK_IMPORTED_MODULE_2__, utils_convertToHTML__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const baseQuery = {
    populate: {
        preview: {
            fields: [
                "url",
                "width",
                "height"
            ]
        },
        images: {
            fields: [
                "url",
                "width",
                "height"
            ]
        },
        subcategories: {
            fields: [
                "name"
            ],
            populate: {
                category: {
                    fields: [
                        "name"
                    ]
                }
            }
        }
    }
};
class ProductService {
    async getAll(options = {}) {
        const { _query , withDescription , withPagination  } = options;
        const query = _query ? `?${qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(_query, {
            encodeValuesOnly: true
        })}` : "";
        const { items , pagination  } = await (0,src_http__WEBPACK_IMPORTED_MODULE_1__/* .getPaginatedModels */ .qm)("products" + query);
        const ids = [];
        items.forEach((product)=>{
            const id = product.calculator ? (0,utils_getNumbersFromObject__WEBPACK_IMPORTED_MODULE_4__/* .getNumbersFromObject */ .f)(product.calculator) : [
                product.price_id
            ];
            id.forEach((id)=>ids.push({
                    id,
                    priceWithDelivery: product.priceWithDelivery
                }));
        });
        const prices = await _price_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].loadPrices */ .Z.loadPrices(ids);
        if (!prices) return withPagination ? {
            pagination,
            products: []
        } : [];
        const products = [];
        for (const product of items){
            let price = prices[product.price_id];
            if (product.calculator) {
                const ids1 = (0,utils_getNumbersFromObject__WEBPACK_IMPORTED_MODULE_4__/* .getNumbersFromObject */ .f)(product.calculator);
                ids1.forEach((id, i)=>{
                    if (i === 0) price = prices[id];
                    const place = (0,utils_getNumbersFromObject__WEBPACK_IMPORTED_MODULE_4__/* .getObjectByNumber */ .V)(product.calculator, id);
                    if (place) {
                        const [item, key] = place;
                        item[key] = prices[id];
                    }
                });
            }
            const resultProduct = {
                ...product
            };
            if (price) resultProduct.price = price;
            if (withDescription) resultProduct.description = await (0,utils_convertToHTML__WEBPACK_IMPORTED_MODULE_3__/* .convertToHTML */ .c)(product.description);
            products.push(resultProduct);
        }
        return withPagination ? {
            pagination,
            products
        } : products;
    }
    async getByCategoryName(name, filters) {
        const query = `?${qs__WEBPACK_IMPORTED_MODULE_0___default().stringify({
            ...baseQuery,
            filters: {
                subcategories: {
                    category: {
                        name: {
                            $eqi: name
                        }
                    },
                    ...filters?.subcategoryFilters || {}
                },
                ...filters?.productFilters || {}
            },
            ...filters?.page !== undefined ? {
                pagination: {
                    page: filters.page,
                    pageSize: 21
                }
            } : {}
        }, {
            encodeValuesOnly: true
        })}`;
        const result = await (0,src_http__WEBPACK_IMPORTED_MODULE_1__/* .getPaginatedModels */ .qm)("products" + query);
        const prices = await _price_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].loadPrices */ .Z.loadPrices(result.items.map((product)=>({
                id: product.price_id,
                priceWithDelivery: product.priceWithDelivery
            })));
        return {
            products: prices ? result.items.map((product)=>{
                const price = prices[product.price_id];
                if (price) return {
                    ...product,
                    price
                };
                return product;
            }) : [],
            pagination: result.pagination
        };
    }
    async getByFlag(flag, categoryName, exclude) {
        return this.getAll({
            _query: {
                ...baseQuery,
                filters: {
                    [flag]: {
                        $eq: true
                    },
                    ...exclude ? {
                        name: {
                            $ne: exclude
                        }
                    } : {},
                    ...categoryName ? {
                        subcategories: {
                            category: {
                                name: {
                                    $eqi: categoryName
                                }
                            }
                        }
                    } : {}
                },
                pagination: {
                    limit: 10
                }
            }
        });
    }
    async getByName(name, categoryName) {
        const products = await this.getAll({
            _query: {
                ...baseQuery,
                filters: {
                    name: {
                        $eqi: name
                    },
                    subcategories: {
                        category: {
                            name: {
                                $eqi: categoryName
                            }
                        }
                    }
                }
            },
            withDescription: true
        });
        if (!products.length) return null;
        return products[0];
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ProductService());

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getObjectByNumber),
/* harmony export */   "f": () => (/* binding */ getNumbersFromObject)
/* harmony export */ });
const getNumbersFromObject = (obj)=>{
    if (typeof obj === "number") return [
        obj
    ];
    const result = [];
    Object.values(obj).forEach((value)=>{
        result.push(...getNumbersFromObject(value));
    });
    return result;
};
function getObjectByNumber(obj, value) {
    if (typeof obj !== "object") return null;
    let result = null;
    for (const key of Object.keys(obj)){
        const _value = obj[key];
        if (typeof _value === "object") {
            result = getObjectByNumber(_value, value);
            if (result !== null) return result;
        }
        if (value === _value) {
            result = [
                obj,
                key
            ];
            break;
        }
    }
    return result;
}


/***/ })

};
;