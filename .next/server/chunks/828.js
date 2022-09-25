"use strict";
exports.id = 828;
exports.ids = [828];
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

/***/ 8828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Resume)
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/ResumeHolder/ResumeHolder.tsx


function ResumeHolder({ resumeData , themeName  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: themeName === "dark" ? "bg-gray-400" : "bg-gray-300",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "resume-container-padding text-gray-600",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "garamond font-size-largest font-weight-medium text-4xl",
                        children: "Relevant Experience"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-4",
                        children: resumeData.experience.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "my-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid grid-cols-2 gap-4 text-xl",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: item.company
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-right",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: item.time
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "margin-top-small text-sm font-light italic mt-2",
                                        children: item.tag
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "margin-top-small mt-2",
                                        children: item.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "pl-6",
                                        children: item.bulletPoints.map((bullet)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "font-light",
                                                children: [
                                                    "• ",
                                                    bullet
                                                ]
                                            }, bullet))
                                    })
                                ]
                            }, `${item.title}_${item.time}`))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "garamond font-size-largest font-weight-medium text-4xl mt-10",
                        children: "Education"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-4",
                        children: resumeData.education.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-10 mb-4 gap-1 text-xl",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-span-6",
                                        children: item.school
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-span-4 text-right",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: item.time
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-span-10 margin-top-small text-sm font-light italic",
                                        children: item.degree
                                    })
                                ]
                            }, item.degree))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${themeName === "dark" ? "bg-gray-500" : "bg-gray-400"} p-20`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex items-center justify-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        id: "contact",
                        type: "button",
                        className: "btn btn-outline",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "DanielDeLaRosa_Resume_2022_full.pdf",
                            locale: false,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pointer",
                                    children: "DOWNLOAD RESUME"
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ResumeHolder/index.tsx


// EXTERNAL MODULE: ./adapters/largeImagesData.js + 32 modules
var largeImagesData = __webpack_require__(3363);
// EXTERNAL MODULE: ./adapters/pageText.js
var pageText = __webpack_require__(525);
;// CONCATENATED MODULE: ./pages/resume/Resume.tsx








function Resume() {
    const { sharedState: { windowType , themeName ="dark"  } ,  } = (0,context/* useAppContext */.b)();
    const largeImagesDataWindowType = largeImagesData/* default */.Z[windowType];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${themeName === "dark" ? "dark-header" : "light-header"}  fade-in`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero/* default */.Z, {
                imageLink: largeImagesDataWindowType.keyboardbw.src,
                centerText: pageText/* default.resume.topHero.primaryText */.Z.resume.topHero.primaryText,
                bottomText: pageText/* default.resume.topHero.secondaryText */.Z.resume.topHero.secondaryText,
                windowType: windowType
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CenterContainer/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(TextSection/* default */.Z, {
                    text: pageText/* default.resume.header */.Z.resume.header,
                    description: pageText/* default.resume.description */.Z.resume.description
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ResumeHolder, {
                resumeData: pageText/* default.resume.resumeData */.Z.resume.resumeData,
                themeName: themeName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Hero/* default */.Z, {
                imageLink: largeImagesDataWindowType.lisbonbw.src,
                topText: pageText/* default.resume.bottomHero.secondaryText */.Z.resume.bottomHero.secondaryText,
                centerText: pageText/* default.resume.bottomHero.primaryText */.Z.resume.bottomHero.primaryText,
                contactText: pageText/* default.contactButton.contactMe */.Z.contactButton.contactMe,
                windowType: windowType
            })
        ]
    });
}


/***/ })

};
;