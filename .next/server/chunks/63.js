"use strict";
exports.id = 63;
exports.ids = [63];
exports.modules = {

/***/ 2063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": () => (/* reexport */ Pagination)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/components/pagination/Pagination.tsx





const Pagination = ({ page , total  })=>{
    const router = (0,router_.useRouter)();
    const search = (0,external_react_.useMemo)(()=>{
        return Object.keys(router.query).map((key)=>`${key}=${router.query[key]}`).join("&");
    }, [
        router.query
    ]);
    const getURL = (0,external_react_.useCallback)((page)=>{
        const searchParams = new URLSearchParams(search);
        page !== 1 ? searchParams.set("page", page.toString()) : searchParams.delete("page");
        const newSearch = decodeURI(searchParams.toString());
        return (newSearch.length ? "?" : "") + newSearch;
    }, [
        search
    ]);
    const isPrevDisabled = page <= 1;
    const isNextDisabled = page >= total;
    const handleClick = (value)=>(e)=>{
            e.preventDefault();
            router.push(getURL(value));
        };
    if (total < 2) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Pagination, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Pagination.First, {
                disabled: isPrevDisabled,
                onClick: handleClick(1),
                as: (link_default()),
                href: getURL(1),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fa fa-chevron-left",
                        "aria-hidden": "true"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fa fa-chevron-left",
                        "aria-hidden": "true"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Pagination.Prev, {
                disabled: isPrevDisabled,
                onClick: handleClick(page - 1),
                as: (link_default()),
                href: getURL(page - 1),
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fa fa-chevron-left",
                    "aria-hidden": "true"
                })
            }),
            Object.keys(Array.from(Array(total))).map((_, n)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Pagination.Item, {
                    onClick: handleClick(n + 1),
                    active: n + 1 === page,
                    as: (link_default()),
                    href: getURL(n + 1),
                    children: n + 1
                }, n);
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Pagination.Next, {
                disabled: isNextDisabled,
                onClick: handleClick(page + 1),
                as: (link_default()),
                href: getURL(page + 1),
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fa fa-chevron-right",
                    "aria-hidden": "true"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Pagination.Last, {
                disabled: isNextDisabled,
                onClick: handleClick(total),
                as: (link_default()),
                href: getURL(total),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fa fa-chevron-right",
                        "aria-hidden": "true"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fa fa-chevron-right",
                        "aria-hidden": "true"
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/pagination/index.ts



/***/ })

};
;