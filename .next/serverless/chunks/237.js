"use strict";
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 22034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ CenterContainer)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/CenterContainer/CenterContainer.tsx

function CenterContainer({ children  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "center-container-padding",
        children: children
    });
}

;// CONCATENATED MODULE: ./components/CenterContainer/index.tsx



/***/ }),

/***/ 52237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Tech)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./contexts/context.js
var context = __webpack_require__(61843);
// EXTERNAL MODULE: ./components/CenterContainer/index.tsx + 1 modules
var CenterContainer = __webpack_require__(22034);
// EXTERNAL MODULE: ./components/TextSection/index.tsx + 1 modules
var TextSection = __webpack_require__(99777);
;// CONCATENATED MODULE: ./components/TechImagesGrid/TechImagesGrid.tsx

function TechImagesGrid({ imagesData  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "flex flex-wrap my-8 -mx-8 justify-center",
        children: imagesData.map((imageData)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `mb-2 px-8 w-1/2 md:w-1/3 lg:w-1/6 image-transition-wrap group ${imageData.name === "Vue" && "pt-4"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                        className: "block h-auto w-full sepia mt-4 image-transition duration-500",
                        src: imageData.img.src,
                        alt: imageData.name
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `flex pt-2 justify-center items-center ${imageData.name === "Vue" && "mt-2"}`,
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "footer-text-size monserrat font-semibold opacity-0 group-hover:opacity-100 duration-300",
                            children: imageData.name
                        })
                    })
                ]
            }, imageData.name))
    });
}

;// CONCATENATED MODULE: ./components/TechImagesGrid/index.tsx


// EXTERNAL MODULE: ./components/Hero/index.tsx + 1 modules
var Hero = __webpack_require__(78046);
// EXTERNAL MODULE: ./adapters/largeImagesData.js + 32 modules
var largeImagesData = __webpack_require__(63363);
// EXTERNAL MODULE: ./adapters/pageText.js
var pageText = __webpack_require__(40525);
;// CONCATENATED MODULE: ./assets/logos/adobe.png
/* harmony default export */ const adobe = ({"src":"/_next/static/media/adobe.80a84b61.png","height":1200,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA70lEQVR42j2PPWoCURSFb23jBgS7EcGfwspOBC1dgiB2rkDcg4VLcBGKjSDJzJsZMEERJkWKJ0NCxEwKkQwk8M5xnoXFgVN8fPce8RxHq0qFqtEwXrGIZxEbo6pVqlJJiy1uLmeeRBC0WtiPx3gdjeBaqFym2LLt9/E+n+PLdfkTRTyFId9ms7tJMgrxYoGL1kwOB/6ez/xPU8arFYJuFxJ0OvjcbHg5Hvm92/HvemWaJIyXS/jNJsRqounU6u/Ayff5sV5jP5k8TtD+EfZ6eBkOsR0MELTbjyXiZVNUrUY3nzcZCBuvUDCqXqfnOPoGNvijnEAhGrYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/logos/angular.png
/* harmony default export */ const angular = ({"src":"/_next/static/media/angular.77c6334b.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+Ad04OgC2npshKc7QVwvi4WHtAQEC/BsboQUuLqr3MDDaAb6fn5IT19dpCbS3BAhuawDV7/AA9qOkAANGRP8BKiqeAcaPj7EZlJhOAvDz+gi8tQXO1dUA9l5l+wISDwYCcm65AcGgoIMYbHR8DoyE/QEuLgPLvb0A/Pb2/QCtrwMCcW+MAbynp2Qdl5mbFZSS/fr5+QPNy8sA+wYG/f+qqwMDWFdtAa6amkks8PC2FDAwAOxGRv7YAAAA/X5+AgH9/QACJSVRAZTMywsvz9CLEsjJaQfLzQDW//4A/Dg3AAQ0M5cCMzN2AZDOzgBFsbIA1EdGMxzDw5fwAAAC+j09Z/+0tM0GVVUAphd2W4M9S4MAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/logos/bootstrap.png
/* harmony default export */ const bootstrap = ({"src":"/_next/static/media/bootstrap.a9b0c875.png","height":600,"width":600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7UlEQVR42iXMMS8EQRyG8ec/t253XezGuRByNNcoVKL0AVRbnWgkfAqNWqG62nfQ2AKNQhS0ShGtXJxw9hC7szNjxK993zyyvXl4JiLZ8ObTvfIjCqG3nrpoJhBrXB78jaa29I83ZLHbwRjL9fm9PD98ECVBppwHsLO3RZK2WPKng6NdyqJGRJwCxENXmvH7hLLUTIoviqcK5fsK/vkQjaDBaPhGHIes9Rf4HmsU4BAIoxBnHVob0tmEMJ7CaOuUeLZ2XF3c0u6kdFfmORmc8ng3otVuSuDTedBU2WD/0r1QigFWlxM315sWU9n8F6TJYHq2VwAYAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/logos/html.png
/* harmony default export */ const html = ({"src":"/_next/static/media/html.38a80e58.png","height":537,"width":537,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5UlEQVR42mOAAjMGdqnpDJLqRQxiKrMZ2GWnMjAwsDHAwE0vjdgrnAxNtxkYCq8xMJSfZmDov+qjncAAA089pY4/q83//3x63/8vK+f8/zqj9f9LX5bDDDDwWINh0YvTJ/+/PHb4x/eTB398XTPv/3NXhvkIBdIM/c/WLv//8uDe3z8unfn9dcvK/09FGboRChgYKp6tXPz/+aJZv74f2f3r+/kT/x8xMJQiFMgypD1tKP7/8vCB/z8vnvr/oaPo/yMJhiQGGHgS767wWIVh3hNNhscvTBgePTVimPM4zkuOgYGBAQAQT2fFJBI71wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/logos/css.png
/* harmony default export */ const css = ({"src":"/_next/static/media/css.55dcfd00.png","height":537,"width":537,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6klEQVR42mMQkfVjYWBgYFDlYQhWEGaYD8QHtfkYvBkYGBgkVCLAcgw6Ac8CGRiu1jMwnGpjYDjRxcB8rV436IU/AwyIuj8+XdX67P/E2a/+z1rx9X9F36f/Qv7PjzPAgd3jxTMWPP2/ZeeLnxeu/fh59dav/wzaz+cxwIH+44k9U5/+37rrxe8rN3/+Pnzq+38Ghqc9DAjwuGrl+uf/Zy9+/mvnoe+/jpwGKXhUygAHso/TSxqe/j9w5OX/05d+/i/r/vCfQehREgMMuMU/UWJQebyIQffJMwaLF08ZjJ4u8Ix7rMDAwMAAAKzIaMV/PBshAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/logos/react.png
/* harmony default export */ const react = ({"src":"/_next/static/media/react.f714cb00.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAl0lEQVR42k2PQQrCMBBF03NYKUiuooLFO0yWXVp3KhTE1AvUwyVHyWx8o1k08DI/Mw/COEnFQSe5jOAlq+d9DVk7Z4em0dNoqS+ESN4g9VXQBu7wRpioYFkfSI3jGhjsYbFBSL/hUnuDswvpAB+Yec9UE46SFCEV4/Yf6BRyMWJYfWGcEFp4kiNYPq+32NIcwZN3cJG65hfU0pfbuHxR/AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/logos/node.png
/* harmony default export */ const node = ({"src":"/_next/static/media/node.b3199d01.png","height":800,"width":800,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3UlEQVR42mOAga4jDNbdRxluAOlrXYfZrRAShwXEuw4zzeo5KvS/56jUf6CC/0CF/7sOc87sOsIiztB9jGFS70mG/y2HGf40HGT4232M+W/HAZG/QDGQwgkMnfu0+yuWy/1fca7qz+470/9XLtf8XzXX43fjBpP/7Xtlexnat9n2F8xn+L/n6qI/N14f/V8w3eh/zSLX31XzXf53HhTsBVvRc4Lhf/sRhj9th0FWwDDYin6gI7kkug6zzuo+yvEfjI8wgxwKxIxARzKLM8BA91FWoDeZrgMlgZgR7k0AdSR49vXM374AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/logos/git.png
/* harmony default export */ const git = ({"src":"/_next/static/media/git.37625c0a.png","height":383,"width":383,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAe1BMVEXwUDPvUDPwTzPvTzPwTzPwTzPwUDPwUDPvUDPwTzPwTzPwTzPwTzPwTzPvTzPwUDPwTzPwTzPvTzPwUDPvTzPwTzPwTzPwUDPvTzPwUDPwUDPwTzPwTzPvTzPvTzPwTzPvTzPvTzPwTzPvTzPwTzPwTzPwTzLvTzPvTzITssNcAAAAJXRSTlMAAAAAAgMENFRhYmRtfH6JqKuusbGys7u+v8LGx8fIy8zc4ePtq/SMQAAAAERJREFUeNoFQAUSgCAQXPfE7i5shP+/0IEP6k2gIEFR2oYC1F8c2p5YjNNp9K6YnRun/DqBymSJ6QTk8NwtCCXcD/HUD5VSBDj1U2b9AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/logos/vue.png
/* harmony default export */ const vue = ({"src":"/_next/static/media/vue.0b9991bc.png","height":887,"width":1024,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAV1BMVEWL//9BvIRBu4RBuINBt4NAt4JAtYEAAABAt4JAt4JAt4I+pXtAsoAzSF1At4JAt4JBuYNBu4RAt4IzOFpBvYVBvYVBuINAtYI/rn47lHQ6h280UV8zSF21h8w7AAAAFnRSTlMAAAAAAAAAAAEEBRExUFhuj7/c3e/7RKfBqwAAADxJREFUeNoFQIcRgCAMfNAgvXfYf04PaV7n7kywbZeymwWL45wRGYSpa1UjoCn0HkhDfjxnDolXkfeknh91/wMp78HQ9gAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./assets/logos/tailwind.png
/* harmony default export */ const tailwind = ({"src":"/_next/static/media/tailwind.434775f1.png","height":640,"width":640,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEUHttUHttQGttUHtdQGtdUHttUHttQGttUHtdUHttQHtdQHttUGtdUHtdUHttUHttQHtdUHttUHttUHttUGtdUGtdUHttUGtdUHttUGtdUHtdUGtdQHtdUGttUHttUHttUHttUGtdUGtdUHttUHttUGtdUGtdQOCuUMAAAAJXRSTlMAAAAAAAEBAQECAwQKCw4PFRgdHyQpMDM5Sk5/hZGXvb/P0Pv+K+54wAAAAEZJREFUeNoNykcCQEAQBMCe0WvlzMqZ/z+ROhdIJSNrQFrXeARijOe7pBWYFJjvvYPbrknKDKjz9TmGf1Ck7X0qTBASqvoBd00DRtlPPIQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./adapters/techImagesData.js










const techImagesData = [
    {
        img: react,
        name: "React/Native"
    },
    {
        img: vue,
        name: "Vue"
    },
    {
        img: angular,
        name: "Angular"
    },
    {
        img: node,
        name: "Node"
    },
    {
        img: html,
        name: "HTML"
    },
    {
        img: css,
        name: "CSS"
    },
    {
        img: git,
        name: "git"
    },
    {
        img: tailwind,
        name: "TailwindCSS"
    },
    {
        img: bootstrap,
        name: "Bootstrap"
    },
    {
        img: adobe,
        name: "Adobe"
    }
];
/* harmony default export */ const adapters_techImagesData = (techImagesData);

;// CONCATENATED MODULE: ./pages/tech/Tech.tsx









function Tech() {
    const { sharedState: { windowType , themeName  } ,  } = (0,context/* useAppContext */.b)();
    const largeImagesDataWindowType = largeImagesData/* default */.Z[windowType];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `${themeName === "dark" ? "dark-header" : "light-header"}  fade-in`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Hero/* default */.Z, {
                imageLink: largeImagesDataWindowType.praguebw.src,
                centerText: pageText/* default.tech.topHero.primaryText */.Z.tech.topHero.primaryText,
                bottomText: pageText/* default.tech.topHero.secondaryText */.Z.tech.topHero.secondaryText,
                windowType: windowType
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CenterContainer/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(TextSection/* default */.Z, {
                        text: pageText/* default.tech.header */.Z.tech.header,
                        description: pageText/* default.tech.description */.Z.tech.description
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(TechImagesGrid, {
                        imagesData: adapters_techImagesData
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Hero/* default */.Z, {
                imageLink: largeImagesDataWindowType.barcelonabw.src,
                topText: pageText/* default.tech.bottomHero.secondaryText */.Z.tech.bottomHero.secondaryText,
                centerText: pageText/* default.tech.bottomHero.primaryText */.Z.tech.bottomHero.primaryText,
                contactText: pageText/* default.contactButton.contactMe */.Z.contactButton.contactMe,
                windowType: windowType
            })
        ]
    });
}


/***/ })

};
;