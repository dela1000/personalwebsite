"use strict";
exports.id = 111;
exports.ids = [111];
exports.modules = {

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

/***/ 5111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Travel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./contexts/context.js
var context = __webpack_require__(1843);
// EXTERNAL MODULE: ./components/Hero/index.tsx + 1 modules
var Hero = __webpack_require__(9456);
// EXTERNAL MODULE: ./components/TextSection/index.tsx + 1 modules
var TextSection = __webpack_require__(9777);
// EXTERNAL MODULE: ./components/ContactButton/index.tsx + 1 modules
var ContactButton = __webpack_require__(5284);
;// CONCATENATED MODULE: ./components/TravelSection/TravelSection.tsx



function TravelSection({ travelText , travelImagesData , themeName  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "text-gray-600",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${themeName === "dark" ? "bg-gray-400" : "bg-gray-300"} center-container-padding`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TextSection/* default */.Z, {
                        text: travelText.header
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "description-text-size monserrat",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: " mb-10",
                                children: travelText.travelPoints.map((point)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "my-2",
                                        children: [
                                            "- ",
                                            point
                                        ]
                                    }, point))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "description-text-size monserrat",
                                children: travelText.description
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-wrap pt-10",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "lg:w-1/2 pr-8",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "description-text-size garamond mb-1",
                                                children: "Things Covered"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: " mb-10",
                                                children: travelText.thingsCovered.map((point)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "px-10",
                                                        children: [
                                                            "• ",
                                                            point
                                                        ]
                                                    }, point))
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "description-text-size garamond mb-1",
                                                children: "The Damage"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: " mb-10",
                                                children: travelText.cost.map((point)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "px-10",
                                                        children: [
                                                            "• ",
                                                            point
                                                        ]
                                                    }, point))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex items-center justify-center lg:w-1/2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "image-transition-wrap",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "sepia image-transition",
                                                src: travelImagesData.athens.src,
                                                alt: travelImagesData.athens.src
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${themeName === "dark" ? "bg-gray-500" : "bg-gray-400"} p-20`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex items-center justify-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ContactButton/* default */.Z, {
                        text: travelText.contactUs
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${themeName === "dark" ? "bg-gray-400" : "bg-gray-300"} center-container-padding`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TextSection/* default */.Z, {
                        text: "Who are we"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center justify-center w-full lg:w-1/2 mt-10",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image-transition-wrap",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "sepia w-96 image-transition",
                                        src: travelImagesData.danielIreland.src,
                                        alt: travelImagesData.danielIreland.src
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "lg:w-1/2 mt-10",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "h-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "description-text-size monserrat p-10 text-center lg:text-left",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "font-bold",
                                                children: travelText.ddr
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: travelText.dBio
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap flex-wrap-reverse mt-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "lg:w-1/2 mt-10",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "h-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "description-text-size monserrat p-10 text-center lg:text-right",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "font-bold",
                                                children: travelText.rw
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: travelText.rBio
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center justify-center w-full lg:w-1/2 mt-10",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex items-center justify-center image-transition-wrap",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "sepia w-96 image-transition",
                                        src: travelImagesData.RachelMorocco.src,
                                        alt: travelImagesData.RachelMorocco.src
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/TravelSection/index.tsx


// EXTERNAL MODULE: ./components/PersonalImagesGrid/index.tsx + 1 modules
var PersonalImagesGrid = __webpack_require__(8615);
// EXTERNAL MODULE: ./adapters/largeImagesData.js + 32 modules
var largeImagesData = __webpack_require__(3363);
// EXTERNAL MODULE: ./adapters/pageText.js
var pageText = __webpack_require__(525);
;// CONCATENATED MODULE: ./assets/travel_photos/RachelMorocco.jpg
/* harmony default export */ const RachelMorocco = ({"src":"/_next/static/media/RachelMorocco.032e4a2c.jpg","height":1922,"width":1081,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsH//xAAcEAABBQADAAAAAAAAAAAAAAACAQMREiEABFL/2gAIAQEAAT8A7DrzDxhcDSZtaU3yuZz/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":4,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/travel_photos/athens.jpg
/* harmony default export */ const athens = ({"src":"/_next/static/media/athens.1f2bae9e.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAJwv/8QAHRABAAEDBQAAAAAAAAAAAAAAAgQABRIDBhMhMv/aAAgBAQABPwCTuC63GLPE6UOBaLOHRGa8iv/EABcRAAMBAAAAAAAAAAAAAAAAAAABIQL/2gAIAQIBAT8A2qqz/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECITH/2gAIAQMBAT8Ag9pH/9k=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/travel_photos/bokaap.png
/* harmony default export */ const bokaap = ({"src":"/_next/static/media/bokaap.a898aa16.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AMN6c4BkYKRpWoJ2cIiNlGaKwGGMzmGMzgC9cGWmd2uualajb1a0mViPim9sg6Npkc0Aql1IvXBRtm5XtnVXzKxdtKJYfodecYObAMBjT5ZbR6VeS7VzUc2rVMCtVomZbXyRpwCPYGSdb2e5ZUOtZkeWYzW1nEmVikRidnAAnp+jkGBZwGlBvWdDnUAqx6lBxKxBdIdBAKmrr4hSR8RlPMVrQ65lSLCbWaaWaoB+dQCio6aCVky7fGOjemqGdW5ybXFqZ2xvaWkF6V+Z+aalZAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/travel_photos/danielIreland.jpg
/* harmony default export */ const danielIreland = ({"src":"/_next/static/media/danielIreland.ed8fe933.jpg","height":1620,"width":922,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAnA//xAAbEAABBAMAAAAAAAAAAAAAAAACAAMEEQEGIv/aAAgBAQABPwBnaCJyRUZswE+ayv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/travel_photos/dublin.png
/* harmony default export */ const dublin = ({"src":"/_next/static/media/dublin.05ffb7f4.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA0UlEQVR42mMIdDAwUJHWVZR0tdAy1VUNstapDrGM9XVgcLfSVZURM9VSsDJU87bQKwpxyAqwLUkKYDDXVVaUErU2VLPUVsn2scoLcZ7ZlFefG8tgqC6npypjqa8abKlXkRI+rblwbldpcKA/g56KtKWesoWmUmGU96yWosr8FC8vT05pNQYdFWkLHZXscI+2ooRQf18eRe0Ef5tgL3sGAw3FRD+H1BB3S1OT7Fi3+rygnbOLC5JCGPydrEI87CL97JuzQxZ3FXRUpC2d0licFQ8Ax5w4jVflGZ0AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/travel_photos/dubrovnik.png
/* harmony default export */ const dubrovnik = ({"src":"/_next/static/media/dubrovnik.49f73317.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA0ElEQVR42mOIC/AsSIgoSoqKdxIPthYviA8vSY7KiQ5miAv0To0IyA52zG5aGJDe7mfAAFSXGxPMkBwakOhr19Q3e8H1/xOPfgmNSgpxssiJCWXI9bdYvmHjnEPXJi3f3jtnVcu8zbFxKSGOxgzVKUH9E2fkdcyfMXVqeV66trlrQlR0jJ87Q0KwT0a4f1fXhCXrtnd1NEWFR8QEBQIFGaL9PKN9XFIjQ+v65hdX1ET7uGVEBqZGBDJEeLtFAeV83SLc7f3d3KP9PZND/VPC/AHhm03cdEzhsgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/travel_photos/rndflorence.png
/* harmony default export */ const rndflorence = ({"src":"/_next/static/media/rndflorence.2a29546f.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AKyhj2lYRKufjYmAcmdaRcLQ1M3h6b3P1gConYtWRyennomelodydnarvMJ4gIJ4fHoAlo9+jXJsspiGoKCWg5SZnKmvqK+yoaaoAJWKmrids7yCapt9cpNuXqm4v8PX4rnI0gCci5uVb3aKVU+MVUOvblKUlJi0zNitwMsAdG6DZjs2ZT89ekw9nWRQZU1GXGdwbnyGAEMzOkYyL0c7L00vJ140JFxcYI2Fi5aRmQAbFg4uLi42NTQ4HxcvKS8rOUiHeXyxnZ/gml1XnUOxvQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/travel_photos/rndsafari.png
/* harmony default export */ const rndsafari = ({"src":"/_next/static/media/rndsafari.2746c12c.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA0klEQVR42mPoyUtdN21SR0l2VFiwh41Jekpyb9/E/fsPM4QmpxQXZnfkp1YX5mQmRzZUlkybOn37jj0MJfnJC+f01TTV5ZaUViZFxdvqZoYFHj56giEjLbqmNKumIt/P16sw1D3W19vLwXnJ0hUMnEraxsZGZtZ2KvpWhXFB7jY2zjZOcbExDKUpAdpKUs7WZqoWXq7WTpVBHn56alq60gwdZYn+LuY+Dno2Fla2lvr2BsoZMa7ZMW4M8b4WuVFOiZFW2WGOJWmeWRmOVVm+bTkRAL4bRwais/VrAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/travel_photos/rndsarajevo.png
/* harmony default export */ const rndsarajevo = ({"src":"/_next/static/media/rndsarajevo.978f8755.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AJa46Z+547PA16izyaqzxqmyxJGdsXKDmwC4xt2nssKUorOElaeLmKaRnquRoK+apbEAdICJKUNAS1JFZWVUTVdHV2BMbnVgb3tvAERZJGdiTGFeT3VvYIZ4ZpiLfJKKdHt5YgA1Syuea02GaUZAWU1namRWUktrZ2KEfXMATkRFgVxhYVIqVWdNhoh9iIx8TlNDTUw7AFRDQHdaY5RwUzFTGUZaLl5tTHp3YGRpSwCPVzuSeXq6qZc8SgAoOCEjOQJRWSlWYTXyfVSzdSS39QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/travel_photos/rndtbilisi.png
/* harmony default export */ const rndtbilisi = ({"src":"/_next/static/media/rndtbilisi.465cca9f.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA0klEQVR42mPISE0riAqJjY1MCg8uig8vSEisS/CJ9PNkqG3qn19dnJWSVpaTvqspbu32rvW91TFxUQxLppdlx0T0Zya2Ndc25CWvnZu2c1p1UnQ4w/xC89LoyIVVeaXhgVMri6eUl6zuzGguT2HICrIqDA/tTosrDPSZW1s2v7VmfnPepNp4BikF7VgPx4L45EA379VdDf1leWkhTtEhrgzGVvYF/p6W8lrs4grx/t6OVlbutlYh3o4MXqHRphqmBgpqbHxCDAxCerrGqqo6NlZ2ANNJSDRbDCssAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/travel_photos/vienna.png
/* harmony default export */ const vienna = ({"src":"/_next/static/media/vienna.a3fce59b.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AHiFn3SAm2l8mW17mG15lWd2lGB2lWB3lwCOl66LlK17hp2LjKR+hp9xgp12gp19hZ8AqqSrqaOraGVum5SfjZChkYqanY2Zn5KdAJd5asyZfzMpJ7mRf9Ccic+XhMqWiL2ViwBTMCmZUzAaJS6UWjq3a0SqYkOcVkGOVEcAHyIoAAAcMyYjAB0oAAAlAAQlAAMeAAMXACgcGCsbFC0iHUAuJjIiISodHyYZGiodHQAUExcjGhcrIBwtIh4VDw8TDhASDAwPCw1//ERBfbFS7gAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./adapters/travelImagesData.js











const travelImagesData = {
    RachelMorocco: RachelMorocco,
    athens: athens,
    danielIreland: danielIreland,
    gridPhotos: [
        {
            img: rndflorence,
            name: "Florence, Italy"
        },
        {
            img: dubrovnik,
            name: "Dubrovnik, Croatia"
        },
        {
            img: rndtbilisi,
            name: "Tbilisi, Georgia"
        },
        {
            img: vienna,
            name: "Vienna, Austria"
        },
        {
            img: bokaap,
            name: "Cape Town, South Africa"
        },
        {
            img: rndsarajevo,
            name: "Sarajevo, Bosnia and Herzegovina"
        },
        {
            img: dublin,
            name: "Dublin, Ireland"
        },
        {
            img: rndsafari,
            name: "Manyeleti, South Africa"
        }, 
    ]
};
/* harmony default export */ const adapters_travelImagesData = (travelImagesData);

;// CONCATENATED MODULE: ./pages/travel/Travel.tsx








function Travel() {
    const { sharedState: { windowType , themeName ="dark"  } ,  } = (0,context/* useAppContext */.b)();
    const largeImagesDataWindowType = largeImagesData/* default */.Z[windowType];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${themeName === "dark" ? "dark-header" : "light-header"}  fade-in`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero/* default */.Z, {
                imageLink: largeImagesDataWindowType.benchbw.src,
                centerText: pageText/* default.travel.topHero.primaryText */.Z.travel.topHero.primaryText,
                bottomText: pageText/* default.travel.topHero.secondaryText */.Z.travel.topHero.secondaryText,
                windowType: windowType
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TravelSection, {
                travelText: pageText/* default.travel */.Z.travel,
                travelImagesData: adapters_travelImagesData,
                themeName: themeName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PersonalImagesGrid/* default */.Z, {
                imagesData: adapters_travelImagesData.gridPhotos
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Hero/* default */.Z, {
                imageLink: largeImagesDataWindowType.cliffsbw.src,
                centerText: pageText/* default.travel.bottomHero.primaryText */.Z.travel.bottomHero.primaryText,
                windowType: windowType,
                contactText: pageText/* default.travel.contactUs */.Z.travel.contactUs
            })
        ]
    });
}


/***/ })

};
;