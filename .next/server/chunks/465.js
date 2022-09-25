"use strict";
exports.id = 465;
exports.ids = [465];
exports.modules = {

/***/ 2034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ CenterContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/CenterContainer/CenterContainer.tsx

function CenterContainer({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "center-container-padding",
        children: children
    });
}

;// CONCATENATED MODULE: ./components/CenterContainer/index.tsx



/***/ }),

/***/ 8615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ PersonalImagesGrid)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/PersonalImagesGrid/PersonalImagesGrid.tsx

function PersonalImagesGrid({ imagesData  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full mb-1",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex flex-wrap",
            children: imagesData.map((imageData)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-1/2 md:w-1/4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "block h-auto w-full sepia",
                        src: imageData.img.src,
                        alt: imageData.name,
                        title: imageData.name
                    })
                }, imageData.name))
        })
    });
}

;// CONCATENATED MODULE: ./components/PersonalImagesGrid/index.tsx



/***/ }),

/***/ 6465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./contexts/context.js
var context = __webpack_require__(1843);
// EXTERNAL MODULE: ./components/Hero/index.tsx + 1 modules
var Hero = __webpack_require__(9456);
// EXTERNAL MODULE: ./components/CenterContainer/index.tsx + 1 modules
var CenterContainer = __webpack_require__(2034);
// EXTERNAL MODULE: ./components/TextSection/index.tsx + 1 modules
var TextSection = __webpack_require__(9777);
// EXTERNAL MODULE: ./components/PersonalImagesGrid/index.tsx + 1 modules
var PersonalImagesGrid = __webpack_require__(8615);
// EXTERNAL MODULE: ./adapters/largeImagesData.js + 32 modules
var largeImagesData = __webpack_require__(3363);
// EXTERNAL MODULE: ./adapters/pageText.js
var pageText = __webpack_require__(525);
;// CONCATENATED MODULE: ./assets/photos/dog.jpg
/* harmony default export */ const dog = ({"src":"/_next/static/media/dog.f9cf9a8c.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAmAv/xAAbEAACAgMBAAAAAAAAAAAAAAACAwEFABMUIv/aAAgBAQABPwC6ulMrT5q41GuYPZPnP//EABcRAAMBAAAAAAAAAAAAAAAAAAABERL/2gAIAQIBAT8AS3af/8QAFREBAQAAAAAAAAAAAAAAAAAAADH/2gAIAQMBAT8Aj//Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/photos/guell.jpg
/* harmony default export */ const guell = ({"src":"/_next/static/media/guell.4baad870.jpg","height":1080,"width":1080,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAJIms//EAB4QAAEDBAMAAAAAAAAAAAAAAAECAwQABhESEyIj/9oACAEBAAE/AFiQu32+NwGZt2QB7Y3r/8QAGREAAQUAAAAAAAAAAAAAAAAAAAECA2KR/9oACAECAQE/AFkozD//xAAaEQACAgMAAAAAAAAAAAAAAAACEQABIjFR/9oACAEDAQE/AKFPIt9n/9k=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/photos/krka.jpg
/* harmony default export */ const krka = ({"src":"/_next/static/media/krka.fa368548.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJxE/wD/xAAcEAACAgIDAAAAAAAAAAAAAAACAwERABMhUdH/2gAIAQEAAT8Aex+sRQS9sDdMKo586z//xAAZEQADAAMAAAAAAAAAAAAAAAABAgMABJH/2gAIAQIBAT8AXYugAFX7n//EABgRAQADAQAAAAAAAAAAAAAAAAIAEjGR/9oACAEDAQE/AKBaDyf/2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/photos/lennon.jpg
/* harmony default export */ const lennon = ({"src":"/_next/static/media/lennon.27b8d587.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAIBf/8QAHhAAAQIHAQAAAAAAAAAAAAAAAQIDABESExUhMeH/2gAIAQEAAT8AzDUnA2lFtA2Ryr2P/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEh/9oACAECAQE/AFD/xAAXEQEAAwAAAAAAAAAAAAAAAAABABEx/9oACAEDAQE/AGnSf//Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/photos/osaka.jpg
/* harmony default export */ const osaka = ({"src":"/_next/static/media/osaka.f6c21f88.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAggE//8QAHRAAAwABBQEAAAAAAAAAAAAAAQIDBQAEERQjMf/aAAgBAQABPwDaYHCJPuXpS02kPEgqwdm4+rr/xAAXEQEAAwAAAAAAAAAAAAAAAAABAAKR/9oACAECAQE/AGyZP//EABcRAQADAAAAAAAAAAAAAAAAAAEAAhH/2gAIAQMBAT8AsGs//9k=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/photos/running.jpg
/* harmony default export */ const running = ({"src":"/_next/static/media/running.246638ff.jpg","height":841,"width":841,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAArAF//8QAHRAAAAUFAAAAAAAAAAAAAAAAAAECAxEEBRRRov/aAAgBAQABPwA7jWGmFOyxj9Tof//EABcRAAMBAAAAAAAAAAAAAAAAAAABIUH/2gAIAQIBAT8Ar0//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwCP/9k=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/photos/sa.jpg
/* harmony default export */ const sa = ({"src":"/_next/static/media/sa.23e8b926.jpg","height":700,"width":700,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAIQNf//EAB4QAAEDBAMAAAAAAAAAAAAAAAECAwQABRESJDFh/9oACAEBAAE/AFybS5IVz2ENAHUd59Nf/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEDUv/aAAgBAgEBPwBVpo//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQNS/9oACAEDAQE/AHKeT//Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/photos/thailand.jpg
/* harmony default export */ const thailand = ({"src":"/_next/static/media/thailand.2c6b3ccb.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKFR/8QAGxAAAgIDAQAAAAAAAAAAAAAAARECAwAEEwX/2gAIAQEAAT8At3fBizI9KlEdKnYDORSYz//EABgRAAIDAAAAAAAAAAAAAAAAAAABAxRC/9oACAECAQE/ALEq0f/EABcRAAMBAAAAAAAAAAAAAAAAAAACE1H/2gAIAQMBAT8AmmH/2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./adapters/personalImagesData.js








const personalImagesData = [
    {
        img: running,
        name: "Sofia, Bulgaria"
    },
    {
        img: guell,
        name: "Barcelona, Spain"
    },
    {
        img: lennon,
        name: "Prague, Czechia"
    },
    {
        img: osaka,
        name: "Osaka, Japan"
    },
    {
        img: krka,
        name: "Krka, Croatia"
    },
    {
        img: sa,
        name: "Cape Town, South Africa"
    },
    {
        img: thailand,
        name: "Doi Inthanon, Thailand"
    },
    {
        img: dog,
        name: "Weston, Florida"
    }
];
/* harmony default export */ const adapters_personalImagesData = (personalImagesData);

;// CONCATENATED MODULE: ./pages/about/About.tsx









function About() {
    const { sharedState: { windowType ="desktop" , themeName  } ,  } = (0,context/* useAppContext */.b)();
    const largeImagesDataWindowType = largeImagesData/* default */.Z[windowType];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${themeName === "dark" ? "dark-header" : "light-header"}  fade-in`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero/* default */.Z, {
                imageLink: largeImagesDataWindowType.eterabw.src,
                centerText: pageText/* default.about.topHero.primaryText */.Z.about.topHero.primaryText,
                bottomText: pageText/* default.about.topHero.secondaryText */.Z.about.topHero.secondaryText,
                windowType: windowType
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CenterContainer/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(TextSection/* default */.Z, {
                    text: pageText/* default.about.header */.Z.about.header,
                    description: pageText/* default.about.description */.Z.about.description
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PersonalImagesGrid/* default */.Z, {
                imagesData: adapters_personalImagesData
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Hero/* default */.Z, {
                imageLink: largeImagesDataWindowType.barcelonabw.src,
                centerText: pageText/* default.about.bottomHero.primaryText */.Z.about.bottomHero.primaryText,
                topText: pageText/* default.about.bottomHero.secondaryText */.Z.about.bottomHero.secondaryText,
                contactText: pageText/* default.contactButton.contactMe */.Z.contactButton.contactMe,
                windowType: windowType
            })
        ]
    });
}


/***/ })

};
;