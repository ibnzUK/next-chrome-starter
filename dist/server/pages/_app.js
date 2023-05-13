(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1967:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__AxF0B",
	"logo": "Footer_logo__6lv4x"
};


/***/ }),

/***/ 3305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/footer/Footer.module.css
var Footer_module = __webpack_require__(1967);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/footer/index.js


function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (Footer_module_default()).footer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
                "Powered by",
                " ",
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (Footer_module_default()).logo,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "icons/favicon-32x32.png",
                        alt: "Vercel Logo",
                        width: 16,
                        height: 16
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(5170);
;// CONCATENATED MODULE: ./pages/_app.js



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "HEADER"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ }),

/***/ 5170:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3305));
module.exports = __webpack_exports__;

})();