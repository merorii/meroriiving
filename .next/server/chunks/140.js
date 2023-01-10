"use strict";
exports.id = 140;
exports.ids = [140];
exports.modules = {

/***/ 3140:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$K": () => (/* binding */ getRecommendations),
/* harmony export */   "It": () => (/* binding */ getMovieList),
/* harmony export */   "Jh": () => (/* binding */ getCredits),
/* harmony export */   "gb": () => (/* binding */ getSimilar),
/* harmony export */   "qF": () => (/* binding */ searchMovie),
/* harmony export */   "t2": () => (/* binding */ getMovieInfo)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getMovieList = async (list, page = 1)=>{
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`https://api.themoviedb.org/3/movie/${list}?api_key=${"30d18357fffa4ad0a9ba91c89e3b5679"}&language=KO&page=${page}`);
    return data;
};
const getMovieInfo = async (id)=>{
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`https://api.themoviedb.org/3/movie/${id}?api_key=${"30d18357fffa4ad0a9ba91c89e3b5679"}&language=KO`);
    return data;
};
const getSimilar = async (id)=>{
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${"30d18357fffa4ad0a9ba91c89e3b5679"}&language=KO`);
    return data;
};
const getRecommendations = async (id)=>{
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${"30d18357fffa4ad0a9ba91c89e3b5679"}&language=KO`);
    return data;
};
const getCredits = async (id)=>{
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${"30d18357fffa4ad0a9ba91c89e3b5679"}&language=KO`);
    return data;
};
const searchMovie = async (keyword, page = 1)=>{
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`https://api.themoviedb.org/3/search/movie?api_key=${"30d18357fffa4ad0a9ba91c89e3b5679"}&language=KO&query=${keyword}&page=${page || 1}`);
    return data;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;