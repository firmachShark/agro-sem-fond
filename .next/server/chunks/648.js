exports.id = 648;
exports.ids = [648];
exports.modules = {

/***/ 9907:
/***/ ((module) => {

// Exports
module.exports = {
	"details": "BankDetails_details__nBspx",
	"inner": "BankDetails_inner__lQsf2"
};


/***/ }),

/***/ 8367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* reexport */ BankDetails)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./utils/concatClass.ts
var concatClass = __webpack_require__(9794);
// EXTERNAL MODULE: ./src/components/bank-details/BankDetails.module.scss
var BankDetails_module = __webpack_require__(9907);
var BankDetails_module_default = /*#__PURE__*/__webpack_require__.n(BankDetails_module);
;// CONCATENATED MODULE: ./src/components/bank-details/BankDetails.tsx




const BankDetails = ({ className , ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,concatClass/* concatClass */.o)([
            className,
            (BankDetails_module_default()).details
        ]),
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (BankDetails_module_default()).inner,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "Банковские реквизиты ООО \xabАгроСемФонд\xbb"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Юридический и почтовый адрес: 603108, г. Н.Новгород, ул."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "Знаменская , д.1 $",
                                `"Б"`,
                                " ИНН 5257148382 КПП 525701001 БИК"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "042202603 ОГРН 1145257005740 Р/сч 40702810942000007919 в"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Дополнительном офисе № 9042/048 Волго-Вятского Банка ОАО"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "\xabСбербанк России\xbb г. Нижний Новгород"
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/bank-details/index.ts



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



/***/ })

};
;