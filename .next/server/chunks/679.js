"use strict";
exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 1679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* reexport */ Breadcrumbs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./utils/parseURL.ts
var parseURL = __webpack_require__(2372);
// EXTERNAL MODULE: ./src/components/layout/container/index.ts + 1 modules
var container = __webpack_require__(2310);
;// CONCATENATED MODULE: ./src/components/breadcrumbs/Breadcrumbs.tsx





const Breadcrumbs = ({ replace  })=>{
    const [state, setState] = (0,external_react_.useState)([
        [],
        undefined
    ]);
    const [links, last] = state;
    (0,external_react_.useEffect)(()=>{
        let prev = "/";
        const links = decodeURI(window.location.pathname).split("/").slice(1).map((link)=>{
            const href = prev + link + "/";
            prev = href;
            const name = (0,parseURL/* parseURL */.L)(link);
            return {
                href,
                name
            };
        });
        const last = links.pop();
        setState([
            links,
            last
        ]);
    }, [
        replace
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(container/* Container */.W, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            "aria-label": "breadcrumb",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                className: "breadcrumb",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "breadcrumb-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Главная"
                        })
                    }),
                    links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "breadcrumb-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: link.href,
                                children: link.name
                            })
                        }, link.href)),
                    last && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "breadcrumb-item active",
                        "aria-current": "page",
                        children: last.name
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/breadcrumbs/index.ts



/***/ }),

/***/ 2372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ parseURL)
/* harmony export */ });
const parseURL = (url)=>{
    return decodeURI(url).replaceAll("_", " ");
};


/***/ })

};
;