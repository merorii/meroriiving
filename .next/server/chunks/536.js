"use strict";
exports.id = 536;
exports.ids = [536];
exports.modules = {

/***/ 6536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* reexport */ useInfiniteQueryList),
  "S": () => (/* reexport */ useIntersectionObserver)
});

// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
;// CONCATENATED MODULE: ./src/hooks/useInfiniteQueryList.ts

const useInfiniteQueryList = (callback, keyword)=>{
    const { data , fetchNextPage , hasNextPage =true  } = (0,external_react_query_.useInfiniteQuery)([
        "searchDatas"
    ], async ({ pageParam  })=>{
        const data = await callback(keyword, pageParam || 1);
        return {
            data: data.results,
            total: data.total_pages,
            page: data.page
        };
    }, {
        getNextPageParam: (lastPage)=>{
            if (lastPage.total > lastPage.page) {
                return lastPage.page + 1;
            }
            return undefined;
        },
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    });
    return {
        data,
        fetchNextPage,
        hasNextPage
    };
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/hooks/useIntersectionObserver.ts

function useIntersectionObserver({ target , onIntersect , root =null , rootMargin ="0px" , threshold =1.0  }) {
    (0,external_react_.useEffect)(()=>{
        let observer;
        if (target && target.current) {
            observer = new IntersectionObserver(onIntersect, {
                root,
                rootMargin,
                threshold
            });
            observer.observe(target.current);
        }
        return ()=>observer && observer.disconnect();
    }, [
        target,
        rootMargin,
        threshold,
        onIntersect,
        root
    ]);
}

;// CONCATENATED MODULE: ./src/hooks/index.ts




/***/ })

};
;