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
// EXTERNAL MODULE: ./src/constants/info.ts
var info = __webpack_require__(4499);
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
                    children: 'Реквизиты ООО "ЗИКМЕС"'
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \xab",
                            info/* ORGANIZATION */.dl,
                            "\xbb 220131 ,Республика Беларусь, г. Минск, ул. Гамарника, д. 30, офис. 405 УНП 193543133 Почт. адрес : 220131, г. Минск, ул. Гамарника, д. 30, оф. 405 (п/я 36) р/сBY41ALFA30122A10750010270000B в ЗАО \xabАльфа-Банк\xbb, БИК ALFABY2X г. Минск, ул. Сурганова, 43-47 в лице управляющего Белоногой Т.И., действующей на основании Устава Режим работы с 8:00 до 22:00 (время работы можно указать свое) Наличный, безналичный расчет Зарегестрирован в торговом реесте (будет дата и номер регистрации) Лицо, уполномоченное продавцом рассматривать обращения покупателей о нарушении их прав, предусмотренных законодательством о защите прав потребителей - ZikMes.s@gmai.com, тел. +375 29 890-54-36 Работники администрации Советского р-на г.Минска, уполномоченные рассматривать обращения покупателей в соответствии с законодательством об обращениях граждан и юридических лиц +375 17 377-13-93"
                        ]
                    })
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



/***/ }),

/***/ 9794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ concatClass)
/* harmony export */ });
const concatClass = (styles)=>styles.filter((style)=>!!style).join(" ");


/***/ })

};
;