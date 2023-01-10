"use strict";
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 4970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B7": () => (/* binding */ menuName),
/* harmony export */   "V2": () => (/* binding */ country),
/* harmony export */   "sQ": () => (/* binding */ imageUrl)
/* harmony export */ });
const imageUrl = (id)=>{
    return `https://image.tmdb.org/t/p/original${id}`;
};
const country = (country)=>{
    switch(country){
        case "KO":
            return "한국";
        case "US":
            return "미국";
        case "GB":
            return "영국";
        case "AU":
            return "호주";
        case "FR":
            return "프랑스";
        default:
            return country;
    }
};
const menuName = (name)=>{
    switch(name){
        case "popular":
            return "현재 인기있는";
        case "top_rated":
            return "상위 랭킹";
        case "now_playing":
            return "상영중인";
        case "upcoming":
            return "개봉 예정";
        default:
            return "";
    }
};


/***/ }),

/***/ 4814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Card)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/common/util.ts
var util = __webpack_require__(4970);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Card/style.tsx

const CardWrap = external_styled_components_default().div.withConfig({
    componentId: "sc-4b5e1ab8-0"
})`
  display: inline-block;
  position: relative;
  width: 17vw;
  color: hsla(0, 0%, 100%, 0.7);
  font-size: 1.2vw;
  margin-bottom: 2vw;
  transition: transform 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: translate3d(0, -0.75rem, 0);
  }

  .poster {
    width: 100%;
    height: 23vw;
    border-radius: 10px;
    position: relative;
  }

  .movie-poster {
    overflow: hidden;
  }

  .blank {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #333;
  }

  .movie-title {
    padding: 0.6em 1em 0 0.05em;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-word;
  }
`;

;// CONCATENATED MODULE: ./src/components/Card/index.tsx
//base



//api

//style

const Card = (props)=>{
    const { id , poster_path , title  } = props.card;
    return /*#__PURE__*/ jsx_runtime_.jsx(CardWrap, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: "/contents/[id]",
            as: `/contents/${id}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "poster movie-poster",
                    children: poster_path ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        fill: true,
                        sizes: "10vw",
                        src: (0,util/* imageUrl */.sQ)(poster_path),
                        alt: ""
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "poster blank",
                        children: "이미지 준비중입니다."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "movie-title",
                    children: title
                })
            ]
        })
    });
};


/***/ }),

/***/ 1995:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ Carousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var src_common_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4970);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4719);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3542);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8748);
/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
//base




//libraries


//api

//style





const Carousel = (props)=>{
    const { data , fade  } = props;
    const [fadeData, setFadeData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [current, setCurrentData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (fade && !fadeData.length) {
            const _idData = data.map((item)=>item.id);
            setFadeData(_idData);
        }
    }, [
        data,
        fade,
        fadeData
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_6__/* .PosterLayout */ .k, {
        fade: fade,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                spaceBetween: 10,
                slidesPerView: fade ? 1 : 6,
                slidesPerGroup: fade ? 1 : 6,
                loop: fade || false,
                mousewheel: !fade,
                navigation: true,
                pagination: {
                    clickable: true
                },
                effect: fade ? "fade" : "slide",
                autoplay: fade ? {
                    delay: 5000,
                    disableOnInteraction: false
                } : false,
                breakpoints: fade ? {} : {
                    640: {
                        slidesPerView: 5,
                        slidesPerGroup: 5
                    },
                    768: {
                        slidesPerView: 5,
                        slidesPerGroup: 5
                    },
                    1024: {
                        slidesPerView: 6,
                        slidesPerGroup: 6
                    },
                    1400: {
                        slidesPerView: 7,
                        slidesPerGroup: 7
                    }
                },
                modules: [
                    swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation,
                    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination,
                    swiper__WEBPACK_IMPORTED_MODULE_5__.EffectFade,
                    swiper__WEBPACK_IMPORTED_MODULE_5__.Mousewheel,
                    swiper__WEBPACK_IMPORTED_MODULE_5__.Autoplay
                ],
                onSlideChange: (c)=>{
                    fade && setCurrentData(c.realIndex);
                },
                children: data.map((result)=>{
                    const { id , title , poster_path , backdrop_path  } = result;
                    return fade ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_6__/* .Card */ .Z, {
                            fade: fade,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "movie-poster",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    fill: true,
                                    priority: true,
                                    src: (0,src_common_util__WEBPACK_IMPORTED_MODULE_11__/* .imageUrl */ .sQ)(backdrop_path),
                                    alt: ""
                                })
                            })
                        })
                    }, id) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/contents/[id]",
                            as: `/contents/${id}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_6__/* .Card */ .Z, {
                                fade: fade,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "movie-poster",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            fill: true,
                                            sizes: "10vw",
                                            src: (0,src_common_util__WEBPACK_IMPORTED_MODULE_11__/* .imageUrl */ .sQ)(poster_path),
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "movie-title",
                                        children: title
                                    })
                                ]
                            })
                        })
                    }, id);
                })
            }),
            fade && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "btn-more",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: `/contents/${fadeData[current]}`,
                    children: "자세히 보기 "
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card),
/* harmony export */   "k": () => (/* binding */ PosterLayout)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PosterLayout = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-211f7278-0"
})`
  ${({ fade  })=>fade ? styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
          .swiper-pagination {
            top: auto;
            right: auto;
            bottom: 15vw;
            text-align: left;
            margin-left: 3vw;
            z-index: 6;
            display: block !important;
          }
          .swiper-button-prev,
          .swiper-button-next {
            display: flex !important;
            top: 40%;
          }
        ` : styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
          &:hover {
            .swiper-button-prev,
            .swiper-button-next {
              display: flex !important;
            }
            .swiper-pagination {
              display: block !important;
            }
          }
          .swiper-pagination {
            top: 0;
            bottom: auto;
            padding-right: 8vw;
            text-align: right;
          }
        `};

  .swiper {
    ${({ fade  })=>!fade && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
        padding: 2rem;
      `}
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
    color: white;
  }

  .swiper-pagination {
    display: none;
  }

  .swiper-pagination-bullet {
    background: white;
  }

  .btn-more {
    color: white;
    position: absolute;
    right: 3vw;
    top: 32vw;
    border: 1px solid white;
    border-radius: 4px;
    padding: 1vw 2vw;
    font-size: 1vw;
    z-index: 6;
  }
`;
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-211f7278-1"
})`
  ${({ fade  })=>!fade && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      transition: transform 0.3s ease-in-out;
      &:hover {
        opacity: 0.8;
        transform: translate3d(0, -0.75rem, 0);
      }
    `}

  .movie-poster {
    position: relative;
    width: 100%;
    height: ${({ fade  })=>fade ? "50vw" : "20vw"};
    overflow: hidden;
    border-radius: 10px;
  }

  .movie-title {
    padding: 0.6em 1em 0 0.05em;
    box-sizing: border-box;
    color: hsla(0, 0%, 100%, 0.7);
    font-size: 1.2vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-word;
  }
`;


/***/ }),

/***/ 3935:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9176);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8922);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components__WEBPACK_IMPORTED_MODULE_2__]);
src_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// base


// components

// style

const MainLayout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components__WEBPACK_IMPORTED_MODULE_2__/* .MainNav */ .$t, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_3__/* .MainContentStyled */ .E, {
                children: children
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ MainContentStyled)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const MainContentStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
    componentId: "sc-20c77cce-0"
})`
  background: black;
  color: white;
  min-height: 100vh;

  .main-section {
    position: relative;
    top: -20vw;
    margin-bottom: -15vw;
    padding-top: 10vw;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 15%
    );
    z-index: 5;
  }

  .list-section {
    position: relative;
    padding: 1rem 0;

    &:hover {
      p.btn-all {
        display: block;
      }
    }

    h2 {
      position: absolute;
      top: 0;
      margin: 0 0 0 3vw;
    }

    p.btn-all {
      display: none;
      position: absolute;
      right: 2.5vw;
      font-size: 0.8rem;
      line-height: 1.6rem;
      color: rgba(255, 255, 255, 0.7);
      z-index: 2;
      cursor: pointer;
    }
  }

  .bottom_section {
    position: relative;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 5%
    );
  }

  .contents__background {
    position: absolute;
    opacity: 0.2;
    width: 100vw;
    height: 80vh;
  }

  .contents__section {
    position: relative;
    top: 0;
    margin: 0 3vw 5vw;
    padding: 10vw 2vw 5vw;
    color: rgba(255, 255, 255, 0.7);
    display: grid;
    column-gap: 2.5rem;
    grid-template-columns: minmax(auto, 45vw) auto 20vw;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.18);
    }
  }

  .contents__text {
    grid-column-start: 1;

    & > div {
      margin-bottom: 1rem;
    }

    .contents-title {
      font-size: 3vw;
      font-weight: bold;
      margin-bottom: 0;
      color: white;
    }

    .contents-tag {
      p {
        display: inline-block;
        border: 1px solid rgba(255, 255, 255, 0.7);
        padding: 0.1rem 0.3rem;
        border-radius: 3px;
        margin-right: 0.5vw;
        font-size: 0.9rem;
      }
    }

    .contents-credit {
      p {
        display: inline-block;
        margin-right: 0.5vw;
      }
      p:first-child {
        margin-right: 1vw;
      }
    }

    .contents-overview {
      p {
        display: -webkit-inline-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        overflow-wrap: break-word;
        white-space: pre-wrap;
        word-break: keep-all;
        text-overflow: ellipsis;
      }
      div {
        margin-top: 1rem;
      }
    }
  }

  .contents__poster {
    position: relative;
    grid-column-start: 3;
    width: 21vw;
    height: 28vw;
    img {
      border-radius: 1rem;
    }
  }

  .search-section {
    position: relative;
    margin: 0 3vw;
    padding: 10vw 2vw 5vw;
    color: rgba(255, 255, 255, 0.7);
    & > p {
      font-size: 1.5vw;
      margin-bottom: 1rem;
    }
  }

  .page-404 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;


/***/ }),

/***/ 3040:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CardList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9176);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8940);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components__WEBPACK_IMPORTED_MODULE_1__]);
src_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
//components


//style

const CardList = (props)=>{
    const { data  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_2__/* .ListWrap */ .I, {
        children: data.map((result)=>{
            const { id , poster_path , title  } = result;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Zb, {
                card: {
                    id,
                    poster_path,
                    title
                }
            }, id);
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ListWrap)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ListWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-278c734c-0"
})`
  display: grid;
  grid-template: auto/repeat(5, 1fr);
  align-items: flex-start;
  grid-gap: 0 0.65em;
  gap: 0 0.65em;
`;


/***/ }),

/***/ 7466:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_0__.C)
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3040);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Card__WEBPACK_IMPORTED_MODULE_0__]);
_Card__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ MainNav)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/MainNav/style.tsx

const MainNavStyled = external_styled_components_default().header.withConfig({
    componentId: "sc-4f20a11c-0"
})`
  display: flex;
  position: fixed;
  justify-content: space-between;
  top: 0;
  width: 100%;
  height: 5rem;
  padding: 0 3vw;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  color: white;
  z-index: 50;

  div {
    display: flex;
    align-items: center;
  }

  .searchbar {
    input {
      background: transparent;
      border: none;
      border-bottom: 1px solid #fff;
      color: white;
      padding: 0.5rem 1rem;
    }
    div {
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;
      background: url("https://www.tving.com/img/icon_search.svg");
      border: none;
      cursor: pointer;
      a {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
const Menus = external_styled_components_default().div.withConfig({
    componentId: "sc-4f20a11c-1"
})`
  display: flex;
  margin-left: 3vw;
  div + div {
    margin-left: 2vw;
  }
`;

;// CONCATENATED MODULE: ./src/components/MainNav/index.tsx




const MainNav = ()=>{
    const [keyword, setKeyword] = (0,external_react_.useState)("");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainNavStyled, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "MERORIIVING"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Menus, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: "실시간"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: "TV"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: "영화"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "searchbar",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        placeholder: "검색어를 입력하세요",
                        onChange: (e)=>{
                            setKeyword(e.target.value);
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/search?keyword=${keyword}`
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 9176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$t": () => (/* reexport safe */ _MainNav__WEBPACK_IMPORTED_MODULE_1__.$),
/* harmony export */   "CS": () => (/* reexport safe */ _List__WEBPACK_IMPORTED_MODULE_4__.C),
/* harmony export */   "Zb": () => (/* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "Zn": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "lr": () => (/* reexport safe */ _Carousel__WEBPACK_IMPORTED_MODULE_0__.l)
/* harmony export */ });
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1995);
/* harmony import */ var _MainNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2214);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3935);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4814);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Carousel__WEBPACK_IMPORTED_MODULE_0__, _Layout__WEBPACK_IMPORTED_MODULE_2__, _List__WEBPACK_IMPORTED_MODULE_4__]);
([_Carousel__WEBPACK_IMPORTED_MODULE_0__, _Layout__WEBPACK_IMPORTED_MODULE_2__, _List__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;