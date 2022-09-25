"use strict";
exports.id = 337;
exports.ids = [337];
exports.modules = {

/***/ 525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const yearsinTech = moment__WEBPACK_IMPORTED_MODULE_0___default()().diff("2011-01-01", "years", false);
const yearsAsDev = moment__WEBPACK_IMPORTED_MODULE_0___default()().diff("2015-01-01", "years", false);
const travelYears = moment__WEBPACK_IMPORTED_MODULE_0___default()().diff("2016-04-01", "years", false);
const currentYear = moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY");
const pageText = {
    home: {
        topHero: {
            primaryText: "DESIGN. DEVELOP. DELIVER.",
            secondaryText: "Creating meaningful experiences through unique online ventures"
        },
        bottomHero: {
            primaryText: "HIRE A FULL STACK ENGINEER TODAY",
            secondaryText: "Do you have a project idea and need help from an expert?"
        },
        name: "DANIEL DE LA ROSA",
        header: "Senior Full Stack Engineer",
        description: `With over ${yearsAsDev} years of experience effectively coding profession applications and business or personal websites, my career has included building multiple scalable online projects from the ground up, maintaining and debugging client-facing products, and updating legacy code to match the rapidly changing standards required to run applications securely and efficiently.`
    },
    projects: {
        topHero: {
            primaryText: "PLAN. PRODUCE. PUBLISH.",
            secondaryText: "Creating meaningful experiences through unique online ventures"
        },
        bottomHero: {
            primaryText: "GET YOUR WEB PROJECT STARTED TODAY",
            secondaryText: "Do you have an idea and need help from an expert?"
        }
    },
    resume: {
        topHero: {
            primaryText: "EXHAUSTIVE. EXTENSIVE. EXPANDED.",
            secondaryText: "Review a bit more about my professional background"
        },
        bottomHero: {
            primaryText: "HIRE A FULL STACK ENGINEER TODAY",
            secondaryText: "Do you have a website idea and need help from an expert?"
        },
        header: "Experience goes a long way",
        description: `With over ${yearsinTech} years in the technology industry and more than ${yearsAsDev} as a Full Stack engineer, I have cultivated a strong background in program development, providing positive results on all the projects in which I have participated.`,
        resumeData: {
            experience: [
                {
                    company: "Cents",
                    tag: "Bringing laundry services to the 21st century, all-in-one platform to grow your laundry business.",
                    title: "Senior Full Stack Engineer",
                    time: "2021-2022",
                    bulletPoints: [
                        "Plan and implement the development of version 2.0 of the flagship mobile and supportive web-based applications",
                        "Guide junior developers in understanding and implement features into the codebase and solving development problems",
                        "Full stack development of full stack features for our multiple mobile and web applications", 
                    ]
                },
                {
                    company: "WeSpire",
                    tag: "Empower companies to design, run, and measure employee experience programs to improve social, environmental, and business outcomes.",
                    title: "Senior Full Stack Engineer",
                    time: "2021-2021",
                    bulletPoints: [
                        "Principal pod lead managing a number of developers and guiding them to understand the codebase",
                        "Plan the technical infrastructure of a new design system and begin its implementation into the existing codebase",
                        "Tackle new feature development while updating existing codebase to industry standards", 
                    ]
                },
                {
                    company: "Near.co (previously UberMedia)",
                    tag: "Leading independent developer of dynamic advertising and mobile data solutions, and feature-rich mobile applications",
                    title: "Full Stack Engineer II",
                    time: "2016-2021",
                    bulletPoints: [
                        "Expert development in Angular.js, Vue.js, Node.js, and Ruby on Rails",
                        "Support legacy products with any development updates, bugfixes, and 3rd party compliances",
                        "Provide primary frontend development for all of UberMedia offerings", 
                    ]
                },
                {
                    company: "Xupe",
                    tag: "Plan, design, and develop beautiful websites and applications tailored to your business",
                    title: "Full Stack Engineer",
                    time: "2020-2021",
                    bulletPoints: [
                        "Building full stack websites and mobile applications using only the latest technologies such as React.js and Node.js",
                        "Provide complete application development for all of our clients' needs",
                        "Support legacy products with any development updates, bugfixes, and 3rd party compliances", 
                    ]
                },
                {
                    company: "Near.co (previously UberMedia)",
                    tag: "Leading independent developer of dynamic advertising and mobile data solutions, and feature-rich mobile applications",
                    title: "Quality Assurance Engineer",
                    time: "2014-2016",
                    bulletPoints: [
                        "Identify, record, document, and track bugs using Sprint.ly and Jira Project Tracking software",
                        "Design, develop, and execute automation scripts for test plans and test cases using Selenium IDE",
                        "Perform thorough regression testing with Selenium IDE and manually when needed when bugs are resolved", 
                    ]
                },
                {
                    company: "Near.co (previously UberMedia)",
                    tag: "Leading independent developer of dynamic advertising and mobile data solutions, and feature-rich mobile applications",
                    title: "Associate Community Manager",
                    time: "2011-2014",
                    bulletPoints: [
                        "Provided customer support for multiple mobile applications using Zendesk, Tender Support, and TwitSpark",
                        "Planned and implemented engagement programs for applications using Twitter, Facebook, and YouTube",
                        "Drafted, developed and executed a communication program to 9 million Twitter followers", 
                    ]
                }, 
            ],
            education: [
                {
                    school: "HackReactor",
                    degree: "Advanced Software Engineering",
                    time: "2015-2016"
                },
                {
                    school: "University of California, Irvine",
                    degree: "BA Art History",
                    time: "2005-2008"
                },
                {
                    school: "University of California, Irvine",
                    degree: "BA Sociology",
                    time: "2005-2008"
                }, 
            ]
        }
    },
    tech: {
        topHero: {
            primaryText: "CONCEIVE. COMPOSE. CREATE.",
            secondaryText: "The tools of my trade"
        },
        bottomHero: {
            primaryText: "GET YOUR WEB PROJECT STARTED TODAY",
            secondaryText: "With expertise on these technologies your website will be exactly as you want it."
        },
        header: "Creating what you want with the right tools",
        description: "Wielding a variety of technologies and support libraries, website design and development becomes easier. Below is a condensed list of the technologies which will make your online presence be clear and concise."
    },
    about: {
        topHero: {
            primaryText: "PASSION. PERSONALITY. PERSPECTIVE.",
            secondaryText: "Learn a bit more about who I am away from my laptop."
        },
        bottomHero: {
            primaryText: "HIRE A FULL STACK ENGINEER TODAY",
            secondaryText: "Do you have a website idea and need help from an expert?"
        },
        header: "Fun Facts",
        description: `I am an avid partner-acrobatics certified educator, I have played drums for over ${yearsinTech + 13} years and guitar for ${yearsinTech}, ran the 2009 Los Angeles Marathon and a number of half-marathons, learned development with HackReactor, became a digital nomad in 2017 with Remote Year and have continued to travel the world for the last ${travelYears} years visiting over 35 countries carrying a ukulele.`
    },
    travel: {
        topHero: {
            primaryText: "DEVIATE. DESIGN. DEPART.",
            secondaryText: 'Travel the world while "working from home".'
        },
        bottomHero: {
            primaryText: "BEGIN YOUR WORK FROM HOME TRAVEL LIFE"
        },
        header: "Curious about the digital nomad life?",
        travelPoints: [
            "Ready to deviate from the office life?",
            "Have you read The 4-Hour Workweek and thought to yourself, YES.",
            "Desire to achieve location independence but don’t know where to start?",
            "We are seasoned digital nomads, and we can help.", 
        ],
        description: "You can spend hours, days, combing through digital nomad blogs, and get tons of info. We don’t know everything, and we haven’t invented the lifestyle, but how often can you have a one-on-one conversation in real time with someone who is actually doing this? We’ll share with you our personal journeys from being location-bound, stuff-bound, and not at all mobile, to eating cevapi in Bosnia, hiking Table Mountain in South Africa, taking care of chickens in Ireland, and many more experiences. What we do day to day, how we make decisions about where to go, how we manage money, how we cope with stuff, with lack of stuff, the incredible experiences, the level-3 fun, the moving, the loneliness, the languages, the newness...",
        thingsCovered: [
            "Prioritizing your priorities: Wifi, Safety, Fun. And more. Balancing the reckless fun with the adulting.",
            "Is digital nomading affordable? Extremely.",
            "Visas & the Beast: Schengen Zone.",
            "Build your tribe: how to keep a social life while on the road.",
            "MONEY & Tools.",
            "Perfect life? Not always. Here are some ways digital nomading can suck, so you’re prepared.", 
        ],
        cost: [
            "$90 for 90 minutes.",
            "It’s the cost of a nice date night in Cape Town."
        ],
        ddr: "Daniel De La Rosa",
        dBio: ` has been traveling for over ${travelYears} years. After building a solid career in software development in an office in Pasadena, California, he realized that he was in a position to do a redesign of the way he worked. He began working remotely, and shortly after he signed up to travel with the program Remote Year. After 12 months and 15 countries, there was no way he was going back to a desk. In the years that followed, Daniel developed a personal system that enabled him to continue the nomadic lifestyle while also achieving financial freedom, stability, and control.`,
        rw: "Rachel Whitener",
        rBio: " became successful as a professional chef in Los Angeles during her 10 years living in the city. After a trip to Morocco she saw the opportunity to travel the world and redefine herself as a digital nomad. A few months after joining Daniel, she started a new career as a Virtual Assistant and Account Manager while also teaching social media Master Classes. With a year of nomading under her belt, she has now visited over 20 countries and has a growing wishlist of new places to explore.",
        contactUs: "contact us"
    },
    contactButton: {
        contactMe: "CONTACT ME",
        contactEmail: "dela1000@gmail.com"
    },
    footer: {
        header: "Create beautiful, responsive, and interactive websites exactly as you want them.",
        top: `© ${currentYear} Daniel De La Rosa. All rights reserved.`,
        middle: "All photos by Daniel De La Rosa.",
        bottom: "Developed with React, Next.js and TailwindCSS, and deployed to Netlify."
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageText);


/***/ }),

/***/ 1843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ AppWrapper),
/* harmony export */   "b": () => (/* binding */ useAppContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contexts_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8899);



const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function AppWrapper({ children  }) {
    const { width  } = (0,contexts_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { 0: sharedState , 1: setShareState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        themeName: "light",
        navbarState: false,
        windowType: "desktop"
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const isDark = localStorage.getItem("themeName") === "light";
        if (isDark) sharedState.themeName = "light";
    }, []);
    const setWidthToState = (windowType)=>{
        const sharedStateTemp = {
            ...sharedState
        };
        sharedStateTemp.windowType = windowType;
        setShareState(sharedStateTemp);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (width < 768) {
            setWidthToState("mobile");
        } else {
            setWidthToState("desktop");
        }
    }, [
        width
    ]);
    const toggleTheme = ()=>{
        const name = sharedState.themeName === "dark" ? "light" : "dark";
        localStorage.setItem("themeName", name);
        const sharedStateTemp = {
            ...sharedState
        };
        sharedStateTemp.themeName = name;
        setShareState(sharedStateTemp);
    };
    const toggleNavbar = (close)=>{
        const sharedStateTemp = {
            ...sharedState
        };
        sharedStateTemp.navbarState = close || !sharedState.navbarState;
        setShareState(sharedStateTemp);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: {
            sharedState,
            toggleTheme,
            toggleNavbar
        },
        children: children
    });
}
function useAppContext() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);
}


/***/ }),

/***/ 8899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useWindowDimensions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function getWindowDimensions() {
    if (false) {}
    return {
        width: 1000,
        height: 1000
    };
}
function useWindowDimensions() {
    const { 0: windowDimensions , 1: setWindowDimensions  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getWindowDimensions());
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    return windowDimensions;
}


/***/ })

};
;