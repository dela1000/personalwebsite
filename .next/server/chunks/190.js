"use strict";
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 1190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Projects)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./contexts/context.js
var context = __webpack_require__(1843);
// EXTERNAL MODULE: ./components/Hero/index.tsx + 1 modules
var Hero = __webpack_require__(9456);
// EXTERNAL MODULE: ./components/TextSection/index.tsx + 1 modules
var TextSection = __webpack_require__(9777);
;// CONCATENATED MODULE: ./components/ProjectImagesSection/ProjectImagesSection.tsx

function ProjectImagesSection({ imagesObj  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center justify-center image-transition-wrap",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "p-4 max-w-xs image-transition",
                    src: imagesObj.firstImage.src,
                    alt: "First"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-wrap flex-wrap-reverse",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full lg:w-1/2 mt-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-center justify-center image-transition-wrap",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "p-4 max-w-xs image-transition",
                                src: imagesObj.secondImage.src,
                                alt: "second"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full lg:w-1/2 mt-10",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "h-full flex items-center justify-center image-transition-wrap",
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "p-4 max-w-xs image-transition",
                                    src: imagesObj.thirdImage.src,
                                    alt: "third"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ProjectImagesSection/index.tsx


// EXTERNAL MODULE: ./adapters/largeImagesData.js + 32 modules
var largeImagesData = __webpack_require__(3363);
;// CONCATENATED MODULE: ./assets/projects/rendezbrew/event.png
/* harmony default export */ const rendezbrew_event = ({"src":"/_next/static/media/event.ead520da.png","height":444,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAgElEQVR42gVAMQrCMBR9+Qltmqg4irvgoJP38HKew8WruCgdRRAUEaxtND//iznud+XXV/WopB7WmdfjoqSZuAhHNJTkU5EN5C38l7N7ty030bpKeJCczWGLk6yZs3Tn1VRdmM+W6WookFt46hzJbVIT8IRCBKQGGKK/b5DGavAHCik6GhcJLPoAAAAASUVORK5CYII=","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/projects/rendezbrew/home.png
/* harmony default export */ const home = ({"src":"/_next/static/media/home.cee5391f.png","height":444,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAiklEQVR42mPYlmezLkFlQVXhxjTjncWuDEfSGA4XWayaOe1gjjSQzbAhwXJGet7C4pLpqdkbEq0YtiVqrsiIWVuctjIzFshmmBomVRukXuunUOoh3usvwHBhWdb1PfV399U9Otp8eVUWw9EUhmNJDKdSGM6kMh9PZWTIM2GNVuWIM5ANVmDLMWYGAKOqMyOxuA3LAAAAAElFTkSuQmCC","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/projects/rendezbrew/myevent.png
/* harmony default export */ const myevent = ({"src":"/_next/static/media/myevent.470455a9.png","height":444,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAi0lEQVR42gGAAH//AL2LdL+PeL6NdbiEY8CLcQDs4uTu6ujp5+bj5+Dc4NoA5dnY6NzY6eDg6eDe6N7WAKpoQ55uWZdmUZFXOqRdMACSUy91Sz9xNBRsNCOQRwkAv3U/u2QAvXI0wIBIv3ApAMBqK7xnMrZqTa5wbbRrUwB9RTReTWKFRjuaPB6PQACzAECj80RCuAAAAABJRU5ErkJggg==","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/projects/acrogenerator/firstview.png
/* harmony default export */ const firstview = ({"src":"/_next/static/media/firstview.774f688e.png","height":444,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAiUlEQVR42mPw1PNyUXNzUXX1M/NPCkxicFdwdxF0cmKwt2ewcVNwZwgwCSwvaW5qnpiXVh5gHMDgZRJWU9YztXVBbVmPn1UEQ19t7fyenplldXW+gaUBQQwTMjNmFmXPKi+cWZDVGhDAEJ4RGpMZll2SmlKUGJUdyeBS5ONXFpxYl+hTEuBc6A0ASCgseJtrkEYAAAAASUVORK5CYII=","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/projects/acrogenerator/secondview.png
/* harmony default export */ const secondview = ({"src":"/_next/static/media/secondview.c0339611.png","height":444,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAi0lEQVR42gGAAH//AGFUYVlMWS4AL2thbHhueAByZ3JvZm9aTluHgIeFfIYAz8zP/f394uHi5uTmzcrOANfU19DMzJyamc/Qz9/d3wDIwcDSzMjc29r09PPDvsEAvqqlwa+nPAAox7Ouv6ypAFtvX1FkUmRvYFNlUVZrWgBEcUpUeFZmgmVVeVhFckufiETKUi4V3wAAAABJRU5ErkJggg==","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/projects/acrogenerator/splash.png
/* harmony default export */ const splash = ({"src":"/_next/static/media/splash.ecd63e06.png","height":444,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAiUlEQVR42mPw1PV0VnFxUnT2NfULsQ9l8Nby9dP2D9AP9NPx91T2YgjVCs50TC9xz08zTwozCGMoialYOG3t+gU7ZrcvzA8sZGgq710wbfXqWZvmT1xRnlLLEG4cnm6dXOySm2aaGKodzOCj6Qs0LEA3MMAgyFfHj8FExtRU1szdwsNEysRY0gQAaeQo5xARq+8AAAAASUVORK5CYII=","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./adapters/projects.js






const projectImages = {
    rendezbrew: {
        firstImage: home,
        secondImage: rendezbrew_event,
        thirdImage: myevent,
        header: "Rendezbrew",
        description: "Rendezbrew helps you find a central location to meet with your friends. Create and event and it will determine the most central meeting point to get a drink depending on where everyone who is coming is located.",
        developed: "React Native, NodeJS, and SQL. Deployed to AWS."
    },
    acrogenerator: {
        firstImage: splash,
        secondImage: firstview,
        thirdImage: secondview,
        header: "AcroGenerator",
        description: "The AcroGenerator helps partners find different connections between a number of positions. After selecting the difficulty and the number of positions you will see a randomized set of moves that you can try and connect.",
        developed: "React Native, and NodeJS. Deployed to AWS."
    }
};
/* harmony default export */ const projects = (projectImages);

// EXTERNAL MODULE: ./adapters/pageText.js
var pageText = __webpack_require__(525);
;// CONCATENATED MODULE: ./pages/projects/Projects.tsx








function Projects() {
    const { sharedState: { windowType , themeName  } ,  } = (0,context/* useAppContext */.b)();
    const largeImagesDataWindowType = largeImagesData/* default */.Z[windowType];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${themeName === "dark" ? "dark-header" : "light-header"}  fade-in`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero/* default */.Z, {
                imageLink: largeImagesDataWindowType.acropolisbw.src,
                centerText: pageText/* default.projects.topHero.primaryText */.Z.projects.topHero.primaryText,
                bottomText: pageText/* default.projects.topHero.secondaryText */.Z.projects.topHero.secondaryText,
                windowType: windowType
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-wrap lg:my-20",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full lg:w-1/2 mt-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "h-full flex items-center justify-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "description-text-size monserrat px-16",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(TextSection/* default */.Z, {
                                    text: projects.rendezbrew.header,
                                    description: projects.rendezbrew.description,
                                    developed: projects.rendezbrew.developed
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full lg:w-1/2 mt-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-center justify-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ProjectImagesSection, {
                                imagesObj: projects.rendezbrew
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-wrap flex-wrap-reverse lg:my-24 mb-24",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full lg:w-1/2 mt-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-center justify-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ProjectImagesSection, {
                                imagesObj: projects.acrogenerator
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full lg:w-1/2 mt-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "h-full flex items-center justify-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "description-text-size monserrat px-16 text-right",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(TextSection/* default */.Z, {
                                    text: projects.acrogenerator.header,
                                    description: projects.acrogenerator.description,
                                    developed: projects.acrogenerator.developed
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Hero/* default */.Z, {
                imageLink: largeImagesDataWindowType.albaiuliabw.src,
                topText: pageText/* default.projects.bottomHero.secondaryText */.Z.projects.bottomHero.secondaryText,
                centerText: pageText/* default.projects.bottomHero.primaryText */.Z.projects.bottomHero.primaryText,
                contactText: pageText/* default.contactButton.contactMe */.Z.contactButton.contactMe,
                windowType: windowType
            })
        ]
    });
}


/***/ })

};
;