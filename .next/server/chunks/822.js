"use strict";
exports.id = 822;
exports.ids = [822];
exports.modules = {

/***/ 3822:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export CategoryService */
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9827);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_http__WEBPACK_IMPORTED_MODULE_1__]);
src_http__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class CategoryService {
    async getForHeader() {
        const query = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify({
            populate: {
                preview: {
                    fields: [
                        "url"
                    ]
                },
                subcategories: {
                    populate: {
                        preview: {
                            fields: [
                                "url"
                            ]
                        }
                    }
                }
            },
            pagination: {
                limit: 7
            }
        }, {
            encodeValuesOnly: true
        });
        const categories = await (0,src_http__WEBPACK_IMPORTED_MODULE_1__/* .getModels */ .hM)(`categories?${query}`);
        return categories.reduce((result, category)=>{
            const href = "/catalog/" + category.href;
            const submenu = category.subcategories?.length ? {
                title: category.fullName,
                href,
                links: category.subcategories.map((subcategory)=>({
                        name: subcategory.name,
                        href: href + `?filter[subcategory]=[${subcategory.id}]`,
                        imageUrl: subcategory.preview?.url
                    }))
            } : undefined;
            result.push({
                title: category.name,
                href,
                imageUrl: category.preview?.url,
                submenu
            });
            return result;
        }, []);
    }
    async getAll(_qs) {
        return (0,src_http__WEBPACK_IMPORTED_MODULE_1__/* .getModels */ .hM)(`categories?${qs__WEBPACK_IMPORTED_MODULE_0___default().stringify({
            populate: {
                preview: {
                    fields: [
                        "url"
                    ]
                }
            },
            ..._qs || {}
        })}`);
    }
    async getByName(name) {
        const categories = await (0,src_http__WEBPACK_IMPORTED_MODULE_1__/* .getModels */ .hM)(`categories?${qs__WEBPACK_IMPORTED_MODULE_0___default().stringify({
            populate: {
                preview: {
                    fields: [
                        "url"
                    ]
                },
                subcategories: {
                    populate: {
                        preview: {
                            fields: [
                                "url"
                            ]
                        }
                    }
                }
            },
            filters: {
                name: {
                    $eqi: name
                }
            }
        })}`);
        if (categories.length) return categories[0];
        return null;
    }
    async getSubcategoriesByCategoryName(name) {
        return (0,src_http__WEBPACK_IMPORTED_MODULE_1__/* .getModels */ .hM)(`subcategories?${qs__WEBPACK_IMPORTED_MODULE_0___default().stringify({
            populate: {
                preview: {
                    fields: [
                        "url"
                    ]
                },
                category: {
                    filters: {
                        name: {
                            $eqi: name
                        }
                    }
                }
            }
        })}`);
    }
    async getAllSubcategories(_qs) {
        return (0,src_http__WEBPACK_IMPORTED_MODULE_1__/* .getModels */ .hM)(`subcategories?${qs__WEBPACK_IMPORTED_MODULE_0___default().stringify({
            populate: {
                preview: {
                    fields: [
                        "url"
                    ]
                }
            },
            ..._qs || {}
        })}`);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new CategoryService());

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;