(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,946,157,99,779];
exports.modules = {

/***/ 1877:
/***/ ((module) => {

// Exports
module.exports = {
	"footer-text-size": "Footer_footer-text-size__MFaV5",
	"footer-text-size_mobile": "Footer_footer-text-size_mobile__Wa0vH"
};


/***/ }),

/***/ 8118:
/***/ ((module) => {

// Exports
module.exports = {
	"nav-circle": "Layout_nav-circle__gI0c7",
	"dark-nav-circle": "Layout_dark-nav-circle__sZEk_",
	"light-nav-circle": "Layout_light-nav-circle__QBlzs",
	"header": "Layout_header__KD6xC"
};


/***/ }),

/***/ 4453:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar__flex": "Navbar_navbar__flex__IAGym",
	"nav__list": "Navbar_nav__list___4AJV",
	"nav-list-item": "Navbar_nav-list-item__UAZNk",
	"nav__hamburger": "Navbar_nav__hamburger__nFtDU",
	"nav__list_mobile": "Navbar_nav__list_mobile__NmyeT",
	"dark_nav__list__background_color_mobile": "Navbar_dark_nav__list__background_color_mobile__VYXaK",
	"light_nav__list__background_color_mobile": "Navbar_light_nav__list__background_color_mobile__r7Iyg",
	"nav-list-item_mobile": "Navbar_nav-list-item_mobile__oC79L",
	"nav__hamburger_mobile": "Navbar_nav__hamburger_mobile__EQceY",
	"link": "Navbar_link__NrM4R",
	"currentLocationLink": "Navbar_currentLocationLink__WRmti"
};


/***/ }),

/***/ 3872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./contexts/context.js
var context = __webpack_require__(1843);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/icons-material/BrightnessHigh"
const BrightnessHigh_namespaceObject = require("@mui/icons-material/BrightnessHigh");
var BrightnessHigh_default = /*#__PURE__*/__webpack_require__.n(BrightnessHigh_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/BrightnessLow"
const BrightnessLow_namespaceObject = require("@mui/icons-material/BrightnessLow");
var BrightnessLow_default = /*#__PURE__*/__webpack_require__.n(BrightnessLow_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Close"
const Close_namespaceObject = require("@mui/icons-material/Close");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_namespaceObject);
// EXTERNAL MODULE: ./contexts/useWindowDimensions.js
var useWindowDimensions = __webpack_require__(8899);
// EXTERNAL MODULE: ./components/Navbar/Navbar.module.css
var Navbar_module = __webpack_require__(4453);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./components/Navbar/Navbar.tsx










const navList = [
    "home",
    "projects",
    "resume",
    "tech",
    "about",
    "travel"
];
function Navbar() {
    const router = (0,router_namespaceObject.useRouter)();
    const { width  } = (0,useWindowDimensions/* default */.Z)();
    const { sharedState: { navbarState , themeName , windowType  } , toggleNavbar , toggleTheme ,  } = (0,context/* useAppContext */.b)();
    const { 0: currentWidth , 1: setCurrentWidth  } = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        if (currentWidth !== width) {
            toggleNavbar?.("close");
            setCurrentWidth(width);
        }
    }, [
        width
    ]);
    const toggleNavList = ()=>toggleNavbar?.(!navbarState);
    const closeNavList = ()=>toggleNavbar?.(false);
    const navigate = (navigateTo)=>{
        if (navigateTo === "home") {
            router.push("/");
            return;
        }
        if (router.pathname === "/" && navigateTo === "home") {
            return;
        }
        if (router.pathname !== navigateTo.substring(1)) {
            router.push(`/${navigateTo}`);
        }
    };
    const goHome = ()=>{
        if (router.pathname === "/_error") {
            router.push("/");
        }
    };
    (0,external_react_.useEffect)(()=>{
        goHome();
    }, [
        router.pathname
    ]);
    const setLocation = (navOption)=>{
        return router.pathname === `/${navOption}` || router.pathname === "/" && navOption === "home" ? (Navbar_module_default()).currentLocationLink : (Navbar_module_default()).link;
    };
    const setNavList = ()=>{
        return windowType === "desktop" ? (Navbar_module_default()).nav__list : (Navbar_module_default()).nav__list_mobile;
    };
    const setWindowTypeClass = ()=>{
        return navbarState ? windowType === "desktop" ? (Navbar_module_default())[`${themeName}_nav__list__background_color h-screen`] : (Navbar_module_default()).nav__list_mobile : windowType === "desktop" ? (Navbar_module_default())[`${themeName}_nav__list__background_color`] : (Navbar_module_default()).nav__list_mobile;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: !navbarState ? "flex" : undefined
                },
                className: (setWindowTypeClass(), setNavList()),
                children: [
                    navList.map((navOption)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `monserrat link-nav mx-0.5 ${setLocation(navOption)} ${windowType === "desktop" ? (Navbar_module_default())["nav-list-item"] : (Navbar_module_default())["nav-list-item_mobile"]}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "uppercase",
                                type: "button",
                                onClick: ()=>{
                                    closeNavList();
                                    navigate(navOption);
                                },
                                children: navOption
                            })
                        }, navOption)),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(Navbar_module_default()).link} nav-list-item monserrat link-nav lg:ml-5`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#contact",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "uppercase",
                                type: "button",
                                onClick: ()=>{
                                    closeNavList();
                                },
                                children: "contact"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                onClick: toggleTheme,
                className: "center btn btn-icon mx-2",
                "aria-label": "toggle theme",
                children: themeName === "dark" ? /*#__PURE__*/ jsx_runtime_.jsx((BrightnessLow_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((BrightnessHigh_default()), {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                onClick: toggleNavList,
                className: `btn btn-icon ${windowType === "desktop" ? (Navbar_module_default()).nav__hamburger : (Navbar_module_default()).nav__hamburger_mobile}`,
                "aria-label": "toggle navigation",
                children: navbarState ? /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Navbar/index.tsx


// EXTERNAL MODULE: ./adapters/pageText.js
var pageText = __webpack_require__(525);
// EXTERNAL MODULE: ./components/Footer/Footer.module.css
var Footer_module = __webpack_require__(1877);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer/Footer.tsx




function Footer() {
    const { sharedState: { themeName , windowType  }  } = (0,context/* useAppContext */.b)();
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        id: "top",
        className: `${themeName === "dark" ? "dark-header" : "light-header"} w-screen items-center p-10 px-20 flex justify-around`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${themeName} flex flex-col text-center`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "py-10 text-2xl garamond",
                    children: pageText/* default.footer.header */.Z.footer.header
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `${themeName} ${windowType === "desktop" ? (Footer_module_default())[`footer-text-size`] : (Footer_module_default())[`footer-text-size_mobile`]}  monserrat px-10`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: pageText/* default.footer.top */.Z.footer.top
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: pageText/* default.footer.middle */.Z.footer.middle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: pageText/* default.footer.bottom */.Z.footer.bottom
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Footer/index.tsx


// EXTERNAL MODULE: ./components/Layout/Layout.module.css
var Layout_module = __webpack_require__(8118);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/Layout/Layout.tsx






function Layout({ children  }) {
    const { sharedState: { themeName  } ,  } = (0,context/* useAppContext */.b)();
    const router = (0,router_namespaceObject.useRouter)();
    const navigateHome = ()=>{
        router.push("/");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            id: "top",
            className: themeName,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    id: "header",
                    className: `${themeName === "dark" ? "dark-header dark" : "light-header light"}  py-7 px-5 flex justify-around sticky top-0 z-50`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: `${themeName === "dark" ? (Layout_module_default())["dark-nav-circle"] : (Layout_module_default())["light-nav-circle"]} ${(Layout_module_default())["nav-circle"]}`,
                            onClick: navigateHome,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "garamond text-3xl italic",
                                children: "D"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {})
                    ]
                }),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Layout/index.tsx


;// CONCATENATED MODULE: ./pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(context/* AppWrapper */.O, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "app",
            children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [337], () => (__webpack_exec__(3872)));
module.exports = __webpack_exports__;

})();