(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/08b5e_@ant-design_react-slick_es_4cfff4._.js", {

"[project]/node_modules/@ant-design/react-slick/es/initial-state.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var initialState = {
    animating: false,
    autoplaying: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    dragging: false,
    edgeDragged: false,
    initialized: false,
    lazyLoadedList: [],
    listHeight: null,
    listWidth: null,
    scrolling: false,
    slideCount: null,
    slideHeight: null,
    slideWidth: null,
    swipeLeft: null,
    swiped: false,
    // used by swipeEvent. differentites between touch and swipe.
    swiping: false,
    touchObject: {
        startX: 0,
        startY: 0,
        curX: 0,
        curY: 0
    },
    trackStyle: {},
    trackWidth: 0,
    targetSlide: 0
};
const __TURBOPACK__default__export__ = initialState;

})()),
"[project]/node_modules/@ant-design/react-slick/es/default-props.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var defaultProps = {
    accessibility: true,
    adaptiveHeight: false,
    afterChange: null,
    appendDots: function appendDots(dots) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("ul", {
            style: {
                display: "block"
            }
        }, dots);
    },
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    beforeChange: null,
    centerMode: false,
    centerPadding: "50px",
    className: "",
    cssEase: "ease",
    customPaging: function customPaging(i) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", null, i + 1);
    },
    dots: false,
    dotsClass: "slick-dots",
    draggable: true,
    easing: "linear",
    edgeFriction: 0.35,
    fade: false,
    focusOnSelect: false,
    infinite: true,
    initialSlide: 0,
    lazyLoad: null,
    nextArrow: null,
    onEdge: null,
    onInit: null,
    onLazyLoadError: null,
    onReInit: null,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    pauseOnHover: true,
    prevArrow: null,
    responsive: null,
    rows: 1,
    rtl: false,
    slide: "div",
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: true,
    swipeEvent: null,
    swipeToSlide: false,
    touchMove: true,
    touchThreshold: 5,
    useCSS: true,
    useTransform: true,
    variableWidth: false,
    vertical: false,
    waitForAnimate: true,
    asNavFor: null
};
const __TURBOPACK__default__export__ = defaultProps;

})()),
"[project]/node_modules/@ant-design/react-slick/es/utils/innerSliderUtils.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "canGoNext": ()=>canGoNext,
    "canUseDOM": ()=>canUseDOM,
    "changeSlide": ()=>changeSlide,
    "checkNavigable": ()=>checkNavigable,
    "checkSpecKeys": ()=>checkSpecKeys,
    "clamp": ()=>clamp,
    "extractObject": ()=>extractObject,
    "filterSettings": ()=>filterSettings,
    "getHeight": ()=>getHeight,
    "getNavigableIndexes": ()=>getNavigableIndexes,
    "getOnDemandLazySlides": ()=>getOnDemandLazySlides,
    "getPostClones": ()=>getPostClones,
    "getPreClones": ()=>getPreClones,
    "getRequiredLazySlides": ()=>getRequiredLazySlides,
    "getSlideCount": ()=>getSlideCount,
    "getSwipeDirection": ()=>getSwipeDirection,
    "getTotalSlides": ()=>getTotalSlides,
    "getTrackAnimateCSS": ()=>getTrackAnimateCSS,
    "getTrackCSS": ()=>getTrackCSS,
    "getTrackLeft": ()=>getTrackLeft,
    "getWidth": ()=>getWidth,
    "initializedState": ()=>initializedState,
    "keyHandler": ()=>keyHandler,
    "lazyEndIndex": ()=>lazyEndIndex,
    "lazySlidesOnLeft": ()=>lazySlidesOnLeft,
    "lazySlidesOnRight": ()=>lazySlidesOnRight,
    "lazyStartIndex": ()=>lazyStartIndex,
    "safePreventDefault": ()=>safePreventDefault,
    "siblingDirection": ()=>siblingDirection,
    "slideHandler": ()=>slideHandler,
    "slidesOnLeft": ()=>slidesOnLeft,
    "slidesOnRight": ()=>slidesOnRight,
    "swipeEnd": ()=>swipeEnd,
    "swipeMove": ()=>swipeMove,
    "swipeStart": ()=>swipeStart,
    "validSettings": ()=>validSettings
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$default$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/react-slick/es/default-props.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function clamp(number, lowerBound, upperBound) {
    return Math.max(lowerBound, Math.min(number, upperBound));
}
var safePreventDefault = function safePreventDefault(event) {
    var passiveEvents = [
        "onTouchStart",
        "onTouchMove",
        "onWheel"
    ];
    if (!passiveEvents.includes(event._reactName)) {
        event.preventDefault();
    }
};
var getOnDemandLazySlides = function getOnDemandLazySlides(spec) {
    var onDemandSlides = [];
    var startIndex = lazyStartIndex(spec);
    var endIndex = lazyEndIndex(spec);
    for(var slideIndex = startIndex; slideIndex < endIndex; slideIndex++){
        if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
            onDemandSlides.push(slideIndex);
        }
    }
    return onDemandSlides;
};
var getRequiredLazySlides = function getRequiredLazySlides(spec) {
    var requiredSlides = [];
    var startIndex = lazyStartIndex(spec);
    var endIndex = lazyEndIndex(spec);
    for(var slideIndex = startIndex; slideIndex < endIndex; slideIndex++){
        requiredSlides.push(slideIndex);
    }
    return requiredSlides;
};
var lazyStartIndex = function lazyStartIndex(spec) {
    return spec.currentSlide - lazySlidesOnLeft(spec);
};
var lazyEndIndex = function lazyEndIndex(spec) {
    return spec.currentSlide + lazySlidesOnRight(spec);
};
var lazySlidesOnLeft = function lazySlidesOnLeft(spec) {
    return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
};
var lazySlidesOnRight = function lazySlidesOnRight(spec) {
    return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
};
var getWidth = function getWidth(elem) {
    return elem && elem.offsetWidth || 0;
};
var getHeight = function getHeight(elem) {
    return elem && elem.offsetHeight || 0;
};
var getSwipeDirection = function getSwipeDirection(touchObject) {
    var verticalSwiping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var xDist, yDist, r, swipeAngle;
    xDist = touchObject.startX - touchObject.curX;
    yDist = touchObject.startY - touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);
    if (swipeAngle < 0) {
        swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
        return "left";
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
        return "right";
    }
    if (verticalSwiping === true) {
        if (swipeAngle >= 35 && swipeAngle <= 135) {
            return "up";
        } else {
            return "down";
        }
    }
    return "vertical";
};
var canGoNext = function canGoNext(spec) {
    var canGo = true;
    if (!spec.infinite) {
        if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
            canGo = false;
        } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
            canGo = false;
        }
    }
    return canGo;
};
var extractObject = function extractObject(spec, keys) {
    var newObject = {};
    keys.forEach(function(key) {
        return newObject[key] = spec[key];
    });
    return newObject;
};
var initializedState = function initializedState(spec) {
    // spec also contains listRef, trackRef
    var slideCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(spec.children);
    var listNode = spec.listRef;
    var listWidth = Math.ceil(getWidth(listNode));
    var trackNode = spec.trackRef && spec.trackRef.node;
    var trackWidth = Math.ceil(getWidth(trackNode));
    var slideWidth;
    if (!spec.vertical) {
        var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;
        if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
            centerPaddingAdj *= listWidth / 100;
        }
        slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
    } else {
        slideWidth = listWidth;
    }
    var slideHeight = listNode && getHeight(listNode.querySelector('[data-index="0"]'));
    var listHeight = slideHeight * spec.slidesToShow;
    var currentSlide = spec.currentSlide === undefined ? spec.initialSlide : spec.currentSlide;
    if (spec.rtl && spec.currentSlide === undefined) {
        currentSlide = slideCount - 1 - spec.initialSlide;
    }
    var lazyLoadedList = spec.lazyLoadedList || [];
    var slidesToLoad = getOnDemandLazySlides((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, spec), {}, {
        currentSlide: currentSlide,
        lazyLoadedList: lazyLoadedList
    }));
    lazyLoadedList = lazyLoadedList.concat(slidesToLoad);
    var state = {
        slideCount: slideCount,
        slideWidth: slideWidth,
        listWidth: listWidth,
        trackWidth: trackWidth,
        currentSlide: currentSlide,
        slideHeight: slideHeight,
        listHeight: listHeight,
        lazyLoadedList: lazyLoadedList
    };
    if (spec.autoplaying === null && spec.autoplay) {
        state["autoplaying"] = "playing";
    }
    return state;
};
var slideHandler = function slideHandler(spec) {
    var waitForAnimate = spec.waitForAnimate, animating = spec.animating, fade = spec.fade, infinite = spec.infinite, index = spec.index, slideCount = spec.slideCount, lazyLoad = spec.lazyLoad, currentSlide = spec.currentSlide, centerMode = spec.centerMode, slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, useCSS = spec.useCSS;
    var lazyLoadedList = spec.lazyLoadedList;
    if (waitForAnimate && animating) return {};
    var animationSlide = index, finalSlide, animationLeft, finalLeft;
    var state = {}, nextState = {};
    var targetSlide = infinite ? index : clamp(index, 0, slideCount - 1);
    if (fade) {
        if (!infinite && (index < 0 || index >= slideCount)) return {};
        if (index < 0) {
            animationSlide = index + slideCount;
        } else if (index >= slideCount) {
            animationSlide = index - slideCount;
        }
        if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
            lazyLoadedList = lazyLoadedList.concat(animationSlide);
        }
        state = {
            animating: true,
            currentSlide: animationSlide,
            lazyLoadedList: lazyLoadedList,
            targetSlide: animationSlide
        };
        nextState = {
            animating: false,
            targetSlide: animationSlide
        };
    } else {
        finalSlide = animationSlide;
        if (animationSlide < 0) {
            finalSlide = animationSlide + slideCount;
            if (!infinite) finalSlide = 0;
            else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
        } else if (!canGoNext(spec) && animationSlide > currentSlide) {
            animationSlide = finalSlide = currentSlide;
        } else if (centerMode && animationSlide >= slideCount) {
            animationSlide = infinite ? slideCount : slideCount - 1;
            finalSlide = infinite ? 0 : slideCount - 1;
        } else if (animationSlide >= slideCount) {
            finalSlide = animationSlide - slideCount;
            if (!infinite) finalSlide = slideCount - slidesToShow;
            else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
        }
        if (!infinite && animationSlide + slidesToShow >= slideCount) {
            finalSlide = slideCount - slidesToShow;
        }
        animationLeft = getTrackLeft((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, spec), {}, {
            slideIndex: animationSlide
        }));
        finalLeft = getTrackLeft((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, spec), {}, {
            slideIndex: finalSlide
        }));
        if (!infinite) {
            if (animationLeft === finalLeft) animationSlide = finalSlide;
            animationLeft = finalLeft;
        }
        if (lazyLoad) {
            lazyLoadedList = lazyLoadedList.concat(getOnDemandLazySlides((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, spec), {}, {
                currentSlide: animationSlide
            })));
        }
        if (!useCSS) {
            state = {
                currentSlide: finalSlide,
                trackStyle: getTrackCSS((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, spec), {}, {
                    left: finalLeft
                })),
                lazyLoadedList: lazyLoadedList,
                targetSlide: targetSlide
            };
        } else {
            state = {
                animating: true,
                currentSlide: finalSlide,
                trackStyle: getTrackAnimateCSS((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, spec), {}, {
                    left: animationLeft
                })),
                lazyLoadedList: lazyLoadedList,
                targetSlide: targetSlide
            };
            nextState = {
                animating: false,
                currentSlide: finalSlide,
                trackStyle: getTrackCSS((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, spec), {}, {
                    left: finalLeft
                })),
                swipeLeft: null,
                targetSlide: targetSlide
            };
        }
    }
    return {
        state: state,
        nextState: nextState
    };
};
var changeSlide = function changeSlide(spec, options) {
    var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
    var slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, slideCount = spec.slideCount, currentSlide = spec.currentSlide, previousTargetSlide = spec.targetSlide, lazyLoad = spec.lazyLoad, infinite = spec.infinite;
    unevenOffset = slideCount % slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;
    if (options.message === "previous") {
        slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
        targetSlide = currentSlide - slideOffset;
        if (lazyLoad && !infinite) {
            previousInt = currentSlide - slideOffset;
            targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
        }
        if (!infinite) {
            targetSlide = previousTargetSlide - slidesToScroll;
        }
    } else if (options.message === "next") {
        slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
        targetSlide = currentSlide + slideOffset;
        if (lazyLoad && !infinite) {
            targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
        }
        if (!infinite) {
            targetSlide = previousTargetSlide + slidesToScroll;
        }
    } else if (options.message === "dots") {
        // Click on dots
        targetSlide = options.index * options.slidesToScroll;
    } else if (options.message === "children") {
        // Click on the slides
        targetSlide = options.index;
        if (infinite) {
            var direction = siblingDirection((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, spec), {}, {
                targetSlide: targetSlide
            }));
            if (targetSlide > options.currentSlide && direction === "left") {
                targetSlide = targetSlide - slideCount;
            } else if (targetSlide < options.currentSlide && direction === "right") {
                targetSlide = targetSlide + slideCount;
            }
        }
    } else if (options.message === "index") {
        targetSlide = Number(options.index);
    }
    return targetSlide;
};
var keyHandler = function keyHandler(e, accessibility, rtl) {
    if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
    if (e.keyCode === 37) return rtl ? "next" : "previous";
    if (e.keyCode === 39) return rtl ? "previous" : "next";
    return "";
};
var swipeStart = function swipeStart(e, swipe, draggable) {
    e.target.tagName === "IMG" && safePreventDefault(e);
    if (!swipe || !draggable && e.type.indexOf("mouse") !== -1) return "";
    return {
        dragging: true,
        touchObject: {
            startX: e.touches ? e.touches[0].pageX : e.clientX,
            startY: e.touches ? e.touches[0].pageY : e.clientY,
            curX: e.touches ? e.touches[0].pageX : e.clientX,
            curY: e.touches ? e.touches[0].pageY : e.clientY
        }
    };
};
var swipeMove = function swipeMove(e, spec) {
    // spec also contains, trackRef and slideIndex
    var scrolling = spec.scrolling, animating = spec.animating, vertical = spec.vertical, swipeToSlide = spec.swipeToSlide, verticalSwiping = spec.verticalSwiping, rtl = spec.rtl, currentSlide = spec.currentSlide, edgeFriction = spec.edgeFriction, edgeDragged = spec.edgeDragged, onEdge = spec.onEdge, swiped = spec.swiped, swiping = spec.swiping, slideCount = spec.slideCount, slidesToScroll = spec.slidesToScroll, infinite = spec.infinite, touchObject = spec.touchObject, swipeEvent = spec.swipeEvent, listHeight = spec.listHeight, listWidth = spec.listWidth;
    if (scrolling) return;
    if (animating) return safePreventDefault(e);
    if (vertical && swipeToSlide && verticalSwiping) safePreventDefault(e);
    var swipeLeft, state = {};
    var curLeft = getTrackLeft(spec);
    touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
    touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
    var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
    if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
        return {
            scrolling: true
        };
    }
    if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
    var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
    if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
    var dotCount = Math.ceil(slideCount / slidesToScroll);
    var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
    var touchSwipeLength = touchObject.swipeLength;
    if (!infinite) {
        if (currentSlide === 0 && (swipeDirection === "right" || swipeDirection === "down") || currentSlide + 1 >= dotCount && (swipeDirection === "left" || swipeDirection === "up") || !canGoNext(spec) && (swipeDirection === "left" || swipeDirection === "up")) {
            touchSwipeLength = touchObject.swipeLength * edgeFriction;
            if (edgeDragged === false && onEdge) {
                onEdge(swipeDirection);
                state["edgeDragged"] = true;
            }
        }
    }
    if (!swiped && swipeEvent) {
        swipeEvent(swipeDirection);
        state["swiped"] = true;
    }
    if (!vertical) {
        if (!rtl) {
            swipeLeft = curLeft + touchSwipeLength * positionOffset;
        } else {
            swipeLeft = curLeft - touchSwipeLength * positionOffset;
        }
    } else {
        swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
    }
    if (verticalSwiping) {
        swipeLeft = curLeft + touchSwipeLength * positionOffset;
    }
    state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state), {}, {
        touchObject: touchObject,
        swipeLeft: swipeLeft,
        trackStyle: getTrackCSS((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, spec), {}, {
            left: swipeLeft
        }))
    });
    if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
        return state;
    }
    if (touchObject.swipeLength > 10) {
        state["swiping"] = true;
        safePreventDefault(e);
    }
    return state;
};
var swipeEnd = function swipeEnd(e, spec) {
    var dragging = spec.dragging, swipe = spec.swipe, touchObject = spec.touchObject, listWidth = spec.listWidth, touchThreshold = spec.touchThreshold, verticalSwiping = spec.verticalSwiping, listHeight = spec.listHeight, swipeToSlide = spec.swipeToSlide, scrolling = spec.scrolling, onSwipe = spec.onSwipe, targetSlide = spec.targetSlide, currentSlide = spec.currentSlide, infinite = spec.infinite;
    if (!dragging) {
        if (swipe) safePreventDefault(e);
        return {};
    }
    var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
    var swipeDirection = getSwipeDirection(touchObject, verticalSwiping);
    // reset the state of touch related state variables.
    var state = {
        dragging: false,
        edgeDragged: false,
        scrolling: false,
        swiping: false,
        swiped: false,
        swipeLeft: null,
        touchObject: {}
    };
    if (scrolling) {
        return state;
    }
    if (!touchObject.swipeLength) {
        return state;
    }
    if (touchObject.swipeLength > minSwipe) {
        safePreventDefault(e);
        if (onSwipe) {
            onSwipe(swipeDirection);
        }
        var slideCount, newSlide;
        var activeSlide = infinite ? currentSlide : targetSlide;
        switch(swipeDirection){
            case "left":
            case "up":
                newSlide = activeSlide + getSlideCount(spec);
                slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
                state["currentDirection"] = 0;
                break;
            case "right":
            case "down":
                newSlide = activeSlide - getSlideCount(spec);
                slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
                state["currentDirection"] = 1;
                break;
            default:
                slideCount = activeSlide;
        }
        state["triggerSlideHandler"] = slideCount;
    } else {
        // Adjust the track back to it's original position.
        var currentLeft = getTrackLeft(spec);
        state["trackStyle"] = getTrackAnimateCSS((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, spec), {}, {
            left: currentLeft
        }));
    }
    return state;
};
var getNavigableIndexes = function getNavigableIndexes(spec) {
    var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
    var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
    var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
    var indexes = [];
    while(breakpoint < max){
        indexes.push(breakpoint);
        breakpoint = counter + spec.slidesToScroll;
        counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
    }
    return indexes;
};
var checkNavigable = function checkNavigable(spec, index) {
    var navigables = getNavigableIndexes(spec);
    var prevNavigable = 0;
    if (index > navigables[navigables.length - 1]) {
        index = navigables[navigables.length - 1];
    } else {
        for(var n in navigables){
            if (index < navigables[n]) {
                index = prevNavigable;
                break;
            }
            prevNavigable = navigables[n];
        }
    }
    return index;
};
var getSlideCount = function getSlideCount(spec) {
    var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;
    if (spec.swipeToSlide) {
        var swipedSlide;
        var slickList = spec.listRef;
        var slides = slickList.querySelectorAll && slickList.querySelectorAll(".slick-slide") || [];
        Array.from(slides).every(function(slide) {
            if (!spec.vertical) {
                if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
                    swipedSlide = slide;
                    return false;
                }
            } else {
                if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
                    swipedSlide = slide;
                    return false;
                }
            }
            return true;
        });
        if (!swipedSlide) {
            return 0;
        }
        var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
        var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
        return slidesTraversed;
    } else {
        return spec.slidesToScroll;
    }
};
var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
    return(// eslint-disable-next-line no-prototype-builtins
    keysArray.reduce(function(value, key) {
        return value && spec.hasOwnProperty(key);
    }, true) ? null : console.error("Keys Missing:", spec));
};
var getTrackCSS = function getTrackCSS(spec) {
    checkSpecKeys(spec, [
        "left",
        "variableWidth",
        "slideCount",
        "slidesToShow",
        "slideWidth"
    ]);
    var trackWidth, trackHeight;
    if (!spec.vertical) {
        trackWidth = getTotalSlides(spec) * spec.slideWidth;
    } else {
        var trackChildren = spec.unslick ? spec.slideCount : spec.slideCount + 2 * spec.slidesToShow;
        trackHeight = trackChildren * spec.slideHeight;
    }
    var style = {
        opacity: 1,
        transition: "",
        WebkitTransition: ""
    };
    if (spec.useTransform) {
        var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
        var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
        var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
        style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, style), {}, {
            WebkitTransform: WebkitTransform,
            transform: transform,
            msTransform: msTransform
        });
    } else {
        if (spec.vertical) {
            style["top"] = spec.left;
        } else {
            style["left"] = spec.left;
        }
    }
    if (spec.fade) style = {
        opacity: 1
    };
    if (trackWidth) style.width = trackWidth;
    if (trackHeight) style.height = trackHeight;
    // Fallback for IE8
    if (window && !window.addEventListener && window.attachEvent) {
        if (!spec.vertical) {
            style.marginLeft = spec.left + "px";
        } else {
            style.marginTop = spec.left + "px";
        }
    }
    return style;
};
var getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
    checkSpecKeys(spec, [
        "left",
        "variableWidth",
        "slideCount",
        "slidesToShow",
        "slideWidth",
        "speed",
        "cssEase"
    ]);
    var style = getTrackCSS(spec);
    // useCSS is true by default so it can be undefined
    if (spec.useTransform) {
        style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
        style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
    } else {
        if (spec.vertical) {
            style.transition = "top " + spec.speed + "ms " + spec.cssEase;
        } else {
            style.transition = "left " + spec.speed + "ms " + spec.cssEase;
        }
    }
    return style;
};
var getTrackLeft = function getTrackLeft(spec) {
    if (spec.unslick) {
        return 0;
    }
    checkSpecKeys(spec, [
        "slideIndex",
        "trackRef",
        "infinite",
        "centerMode",
        "slideCount",
        "slidesToShow",
        "slidesToScroll",
        "slideWidth",
        "listWidth",
        "variableWidth",
        "slideHeight"
    ]);
    var slideIndex = spec.slideIndex, trackRef = spec.trackRef, infinite = spec.infinite, centerMode = spec.centerMode, slideCount = spec.slideCount, slidesToShow = spec.slidesToShow, slidesToScroll = spec.slidesToScroll, slideWidth = spec.slideWidth, listWidth = spec.listWidth, variableWidth = spec.variableWidth, slideHeight = spec.slideHeight, fade = spec.fade, vertical = spec.vertical;
    var slideOffset = 0;
    var targetLeft;
    var targetSlide;
    var verticalOffset = 0;
    if (fade || spec.slideCount === 1) {
        return 0;
    }
    var slidesToOffset = 0;
    if (infinite) {
        slidesToOffset = -getPreClones(spec); // bring active slide to the beginning of visual area
        // if next scroll doesn't have enough children, just reach till the end of original slides instead of shifting slidesToScroll children
        if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
            slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
        }
        // shift current slide to center of the frame
        if (centerMode) {
            slidesToOffset += parseInt(slidesToShow / 2);
        }
    } else {
        if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
            slidesToOffset = slidesToShow - slideCount % slidesToScroll;
        }
        if (centerMode) {
            slidesToOffset = parseInt(slidesToShow / 2);
        }
    }
    slideOffset = slidesToOffset * slideWidth;
    verticalOffset = slidesToOffset * slideHeight;
    if (!vertical) {
        targetLeft = slideIndex * slideWidth * -1 + slideOffset;
    } else {
        targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
    }
    if (variableWidth === true) {
        var targetSlideIndex;
        var trackElem = trackRef && trackRef.node;
        targetSlideIndex = slideIndex + getPreClones(spec);
        targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
        targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
        if (centerMode === true) {
            targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
            targetSlide = trackElem && trackElem.children[targetSlideIndex];
            targetLeft = 0;
            for(var slide = 0; slide < targetSlideIndex; slide++){
                targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
            }
            targetLeft -= parseInt(spec.centerPadding);
            targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
        }
    }
    return targetLeft;
};
var getPreClones = function getPreClones(spec) {
    if (spec.unslick || !spec.infinite) {
        return 0;
    }
    if (spec.variableWidth) {
        return spec.slideCount;
    }
    return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};
var getPostClones = function getPostClones(spec) {
    if (spec.unslick || !spec.infinite) {
        return 0;
    }
    return spec.slideCount;
};
var getTotalSlides = function getTotalSlides(spec) {
    return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
};
var siblingDirection = function siblingDirection(spec) {
    if (spec.targetSlide > spec.currentSlide) {
        if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
            return "left";
        }
        return "right";
    } else {
        if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
            return "right";
        }
        return "left";
    }
};
var slidesOnRight = function slidesOnRight(_ref) {
    var slidesToShow = _ref.slidesToShow, centerMode = _ref.centerMode, rtl = _ref.rtl, centerPadding = _ref.centerPadding;
    // returns no of slides on the right of active slide
    if (centerMode) {
        var right = (slidesToShow - 1) / 2 + 1;
        if (parseInt(centerPadding) > 0) right += 1;
        if (rtl && slidesToShow % 2 === 0) right += 1;
        return right;
    }
    if (rtl) {
        return 0;
    }
    return slidesToShow - 1;
};
var slidesOnLeft = function slidesOnLeft(_ref2) {
    var slidesToShow = _ref2.slidesToShow, centerMode = _ref2.centerMode, rtl = _ref2.rtl, centerPadding = _ref2.centerPadding;
    // returns no of slides on the left of active slide
    if (centerMode) {
        var left = (slidesToShow - 1) / 2 + 1;
        if (parseInt(centerPadding) > 0) left += 1;
        if (!rtl && slidesToShow % 2 === 0) left += 1;
        return left;
    }
    if (rtl) {
        return slidesToShow - 1;
    }
    return 0;
};
var canUseDOM = function canUseDOM() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
};
var validSettings = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$default$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function filterSettings(settings) {
    return validSettings.reduce(function(acc, settingName) {
        if (settings.hasOwnProperty(settingName)) {
            acc[settingName] = settings[settingName];
        }
        return acc;
    }, {});
}

})()),
"[project]/node_modules/@ant-design/react-slick/es/track.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Track": ()=>Track
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/createClass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeReflectConstruct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/react-slick/es/utils/innerSliderUtils.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
;
;
;
;
;
;
;
;
;
function _callSuper(t, o, e) {
    return o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(o), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeReflectConstruct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])() ? Reflect.construct(o, e || [], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t).constructor) : o.apply(t, e));
}
;
;
;
// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
var getSlideClasses = function getSlideClasses(spec) {
    var slickActive, slickCenter, slickCloned;
    var centerOffset, index;
    if (spec.rtl) {
        index = spec.slideCount - 1 - spec.index;
    } else {
        index = spec.index;
    }
    slickCloned = index < 0 || index >= spec.slideCount;
    if (spec.centerMode) {
        centerOffset = Math.floor(spec.slidesToShow / 2);
        slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
        if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
            slickActive = true;
        }
    } else {
        slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
    }
    var focusedSlide;
    if (spec.targetSlide < 0) {
        focusedSlide = spec.targetSlide + spec.slideCount;
    } else if (spec.targetSlide >= spec.slideCount) {
        focusedSlide = spec.targetSlide - spec.slideCount;
    } else {
        focusedSlide = spec.targetSlide;
    }
    var slickCurrent = index === focusedSlide;
    return {
        "slick-slide": true,
        "slick-active": slickActive,
        "slick-center": slickCenter,
        "slick-cloned": slickCloned,
        "slick-current": slickCurrent // dubious in case of RTL
    };
};
var getSlideStyle = function getSlideStyle(spec) {
    var style = {};
    if (spec.variableWidth === undefined || spec.variableWidth === false) {
        style.width = spec.slideWidth;
    }
    if (spec.fade) {
        style.position = "relative";
        if (spec.vertical && spec.slideHeight) {
            style.top = -spec.index * parseInt(spec.slideHeight);
        } else {
            style.left = -spec.index * parseInt(spec.slideWidth);
        }
        style.opacity = spec.currentSlide === spec.index ? 1 : 0;
        style.zIndex = spec.currentSlide === spec.index ? 999 : 998;
        if (spec.useCSS) {
            style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
        }
    }
    return style;
};
var getKey = function getKey(child, fallbackKey) {
    return child.key + "-" + fallbackKey;
};
var renderSlides = function renderSlides(spec) {
    var key;
    var slides = [];
    var preCloneSlides = [];
    var postCloneSlides = [];
    var childrenCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(spec.children);
    var startIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazyStartIndex"])(spec);
    var endIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazyEndIndex"])(spec);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.forEach(spec.children, function(elem, index) {
        var child;
        var childOnClickOptions = {
            message: "children",
            index: index,
            slidesToScroll: spec.slidesToScroll,
            currentSlide: spec.currentSlide
        };
        // in case of lazyLoad, whether or not we want to fetch the slide
        if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
            child = elem;
        } else {
            child = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null);
        }
        var childStyle = getSlideStyle((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, spec), {}, {
            index: index
        }));
        var slideClass = child.props.className || "";
        var slideClasses = getSlideClasses((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, spec), {}, {
            index: index
        }));
        // push a cloned element of the desired slide
        slides.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, {
            key: "original" + getKey(child, index),
            "data-index": index,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slideClasses, slideClass),
            tabIndex: "-1",
            "aria-hidden": !slideClasses["slick-active"],
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                outline: "none"
            }, child.props.style || {}), childStyle),
            onClick: function onClick(e) {
                child.props && child.props.onClick && child.props.onClick(e);
                if (spec.focusOnSelect) {
                    spec.focusOnSelect(childOnClickOptions);
                }
            }
        }));
        // if slide needs to be precloned or postcloned
        if (spec.infinite && childrenCount > 1 && spec.fade === false && !spec.unslick) {
            var preCloneNo = childrenCount - index;
            if (preCloneNo <= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreClones"])(spec)) {
                key = -preCloneNo;
                if (key >= startIndex) {
                    child = elem;
                }
                slideClasses = getSlideClasses((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, spec), {}, {
                    index: key
                }));
                preCloneSlides.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, {
                    key: "precloned" + getKey(child, key),
                    "data-index": key,
                    tabIndex: "-1",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slideClasses, slideClass),
                    "aria-hidden": !slideClasses["slick-active"],
                    style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, child.props.style || {}), childStyle),
                    onClick: function onClick(e) {
                        child.props && child.props.onClick && child.props.onClick(e);
                        if (spec.focusOnSelect) {
                            spec.focusOnSelect(childOnClickOptions);
                        }
                    }
                }));
            }
            key = childrenCount + index;
            if (key < endIndex) {
                child = elem;
            }
            slideClasses = getSlideClasses((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, spec), {}, {
                index: key
            }));
            postCloneSlides.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, {
                key: "postcloned" + getKey(child, key),
                "data-index": key,
                tabIndex: "-1",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slideClasses, slideClass),
                "aria-hidden": !slideClasses["slick-active"],
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, child.props.style || {}), childStyle),
                onClick: function onClick(e) {
                    child.props && child.props.onClick && child.props.onClick(e);
                    if (spec.focusOnSelect) {
                        spec.focusOnSelect(childOnClickOptions);
                    }
                }
            }));
        }
    });
    if (spec.rtl) {
        return preCloneSlides.concat(slides, postCloneSlides).reverse();
    } else {
        return preCloneSlides.concat(slides, postCloneSlides);
    }
};
var Track = /*#__PURE__*/ function(_React$PureComponent) {
    function Track() {
        var _this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, Track);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _callSuper(this, Track, [].concat(args));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "node", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "handleRef", function(ref) {
            _this.node = ref;
        });
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Track, _React$PureComponent);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Track, [
        {
            key: "render",
            value: function render() {
                var slides = renderSlides(this.props);
                var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, onMouseOver = _this$props.onMouseOver, onMouseLeave = _this$props.onMouseLeave;
                var mouseEvents = {
                    onMouseEnter: onMouseEnter,
                    onMouseOver: onMouseOver,
                    onMouseLeave: onMouseLeave
                };
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    ref: this.handleRef,
                    className: "slick-track",
                    style: this.props.trackStyle
                }, mouseEvents), slides);
            }
        }
    ]);
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PureComponent);

})()),
"[project]/node_modules/@ant-design/react-slick/es/dots.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Dots": ()=>Dots
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/createClass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeReflectConstruct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/react-slick/es/utils/innerSliderUtils.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
;
;
;
;
;
;
;
function _callSuper(t, o, e) {
    return o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(o), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeReflectConstruct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])() ? Reflect.construct(o, e || [], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t).constructor) : o.apply(t, e));
}
;
;
;
var getDotCount = function getDotCount(spec) {
    var dots;
    if (spec.infinite) {
        dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
    } else {
        dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
    }
    return dots;
};
var Dots = /*#__PURE__*/ function(_React$PureComponent) {
    function Dots() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, Dots);
        return _callSuper(this, Dots, arguments);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Dots, _React$PureComponent);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Dots, [
        {
            key: "clickHandler",
            value: function clickHandler(options, e) {
                // In Autoplay the focus stays on clicked button even after transition
                // to next slide. That only goes away by click somewhere outside
                e.preventDefault();
                this.props.clickHandler(options);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, onMouseOver = _this$props.onMouseOver, onMouseLeave = _this$props.onMouseLeave, infinite = _this$props.infinite, slidesToScroll = _this$props.slidesToScroll, slidesToShow = _this$props.slidesToShow, slideCount = _this$props.slideCount, currentSlide = _this$props.currentSlide;
                var dotCount = getDotCount({
                    slideCount: slideCount,
                    slidesToScroll: slidesToScroll,
                    slidesToShow: slidesToShow,
                    infinite: infinite
                });
                var mouseEvents = {
                    onMouseEnter: onMouseEnter,
                    onMouseOver: onMouseOver,
                    onMouseLeave: onMouseLeave
                };
                var dots = [];
                for(var i = 0; i < dotCount; i++){
                    var _rightBound = (i + 1) * slidesToScroll - 1;
                    var rightBound = infinite ? _rightBound : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(_rightBound, 0, slideCount - 1);
                    var _leftBound = rightBound - (slidesToScroll - 1);
                    var leftBound = infinite ? _leftBound : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(_leftBound, 0, slideCount - 1);
                    var className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        "slick-active": infinite ? currentSlide >= leftBound && currentSlide <= rightBound : currentSlide === leftBound
                    });
                    var dotOptions = {
                        message: "dots",
                        index: i,
                        slidesToScroll: slidesToScroll,
                        currentSlide: currentSlide
                    };
                    var onClick = this.clickHandler.bind(this, dotOptions);
                    dots = dots.concat(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("li", {
                        key: i,
                        className: className
                    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(this.props.customPaging(i), {
                        onClick: onClick
                    })));
                }
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(this.props.appendDots(dots), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    className: this.props.dotsClass
                }, mouseEvents));
            }
        }
    ]);
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PureComponent);

})()),
"[project]/node_modules/@ant-design/react-slick/es/arrows.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "NextArrow": ()=>NextArrow,
    "PrevArrow": ()=>PrevArrow
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/createClass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeReflectConstruct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/react-slick/es/utils/innerSliderUtils.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
;
;
;
;
;
;
;
;
function _callSuper(t, o, e) {
    return o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(o), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeReflectConstruct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])() ? Reflect.construct(o, e || [], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t).constructor) : o.apply(t, e));
}
;
;
;
var PrevArrow = /*#__PURE__*/ function(_React$PureComponent) {
    function PrevArrow() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, PrevArrow);
        return _callSuper(this, PrevArrow, arguments);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(PrevArrow, _React$PureComponent);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(PrevArrow, [
        {
            key: "clickHandler",
            value: function clickHandler(options, e) {
                if (e) {
                    e.preventDefault();
                }
                this.props.clickHandler(options, e);
            }
        },
        {
            key: "render",
            value: function render() {
                var prevClasses = {
                    "slick-arrow": true,
                    "slick-prev": true
                };
                var prevHandler = this.clickHandler.bind(this, {
                    message: "previous"
                });
                if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
                    prevClasses["slick-disabled"] = true;
                    prevHandler = null;
                }
                var prevArrowProps = {
                    key: "0",
                    "data-role": "none",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prevClasses),
                    style: {
                        display: "block"
                    },
                    onClick: prevHandler
                };
                var customProps = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount
                };
                var prevArrow;
                if (this.props.prevArrow) {
                    prevArrow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(this.props.prevArrow, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, prevArrowProps), customProps));
                } else {
                    prevArrow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        key: "0",
                        type: "button"
                    }, prevArrowProps), " ", "Previous");
                }
                return prevArrow;
            }
        }
    ]);
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PureComponent);
var NextArrow = /*#__PURE__*/ function(_React$PureComponent2) {
    function NextArrow() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, NextArrow);
        return _callSuper(this, NextArrow, arguments);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(NextArrow, _React$PureComponent2);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(NextArrow, [
        {
            key: "clickHandler",
            value: function clickHandler(options, e) {
                if (e) {
                    e.preventDefault();
                }
                this.props.clickHandler(options, e);
            }
        },
        {
            key: "render",
            value: function render() {
                var nextClasses = {
                    "slick-arrow": true,
                    "slick-next": true
                };
                var nextHandler = this.clickHandler.bind(this, {
                    message: "next"
                });
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canGoNext"])(this.props)) {
                    nextClasses["slick-disabled"] = true;
                    nextHandler = null;
                }
                var nextArrowProps = {
                    key: "1",
                    "data-role": "none",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(nextClasses),
                    style: {
                        display: "block"
                    },
                    onClick: nextHandler
                };
                var customProps = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount
                };
                var nextArrow;
                if (this.props.nextArrow) {
                    nextArrow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(this.props.nextArrow, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, nextArrowProps), customProps));
                } else {
                    nextArrow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        key: "1",
                        type: "button"
                    }, nextArrowProps), " ", "Next");
                }
                return nextArrow;
            }
        }
    ]);
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PureComponent);

})()),
"[project]/node_modules/@ant-design/react-slick/es/inner-slider.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "InnerSlider": ()=>InnerSlider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/createClass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeReflectConstruct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$initial$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/react-slick/es/initial-state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$throttle$2d$debounce$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/throttle-debounce/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/react-slick/es/utils/innerSliderUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/react-slick/es/track.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$dots$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/react-slick/es/dots.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$arrows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/react-slick/es/arrows.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resize$2d$observer$2d$polyfill$2f$dist$2f$ResizeObserver$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
;
;
;
;
;
;
;
;
;
;
;
var _excluded = [
    "animating"
];
function _callSuper(t, o, e) {
    return o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(o), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeReflectConstruct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])() ? Reflect.construct(o, e || [], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t).constructor) : o.apply(t, e));
}
;
;
;
;
;
;
;
;
;
var InnerSlider = /*#__PURE__*/ function(_React$Component) {
    function InnerSlider(props) {
        var _this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, InnerSlider);
        _this = _callSuper(this, InnerSlider, [
            props
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "listRefHandler", function(ref) {
            return _this.list = ref;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "trackRefHandler", function(ref) {
            return _this.track = ref;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "adaptHeight", function() {
            if (_this.props.adaptiveHeight && _this.list) {
                var elem = _this.list.querySelector("[data-index=\"".concat(_this.state.currentSlide, "\"]"));
                _this.list.style.height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHeight"])(elem) + "px";
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "componentDidMount", function() {
            _this.props.onInit && _this.props.onInit();
            if (_this.props.lazyLoad) {
                var slidesToLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOnDemandLazySlides"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, _this.props), _this.state));
                if (slidesToLoad.length > 0) {
                    _this.setState(function(prevState) {
                        return {
                            lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
                        };
                    });
                    if (_this.props.onLazyLoad) {
                        _this.props.onLazyLoad(slidesToLoad);
                    }
                }
            }
            var spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                listRef: _this.list,
                trackRef: _this.track
            }, _this.props);
            _this.updateState(spec, true, function() {
                _this.adaptHeight();
                _this.props.autoplay && _this.autoPlay("playing");
            });
            if (_this.props.lazyLoad === "progressive") {
                _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1000);
            }
            _this.ro = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resize$2d$observer$2d$polyfill$2f$dist$2f$ResizeObserver$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](function() {
                if (_this.state.animating) {
                    _this.onWindowResized(false); // don't set trackStyle hence don't break animation
                    _this.callbackTimers.push(setTimeout(function() {
                        return _this.onWindowResized();
                    }, _this.props.speed));
                } else {
                    _this.onWindowResized();
                }
            });
            _this.ro.observe(_this.list);
            document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(slide) {
                slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
                slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
            });
            if (window.addEventListener) {
                window.addEventListener("resize", _this.onWindowResized);
            } else {
                window.attachEvent("onresize", _this.onWindowResized);
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "componentWillUnmount", function() {
            if (_this.animationEndCallback) {
                clearTimeout(_this.animationEndCallback);
            }
            if (_this.lazyLoadTimer) {
                clearInterval(_this.lazyLoadTimer);
            }
            if (_this.callbackTimers.length) {
                _this.callbackTimers.forEach(function(timer) {
                    return clearTimeout(timer);
                });
                _this.callbackTimers = [];
            }
            if (window.addEventListener) {
                window.removeEventListener("resize", _this.onWindowResized);
            } else {
                window.detachEvent("onresize", _this.onWindowResized);
            }
            if (_this.autoplayTimer) {
                clearInterval(_this.autoplayTimer);
            }
            _this.ro.disconnect();
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "componentDidUpdate", function(prevProps) {
            _this.checkImagesLoad();
            _this.props.onReInit && _this.props.onReInit();
            if (_this.props.lazyLoad) {
                var slidesToLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOnDemandLazySlides"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, _this.props), _this.state));
                if (slidesToLoad.length > 0) {
                    _this.setState(function(prevState) {
                        return {
                            lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
                        };
                    });
                    if (_this.props.onLazyLoad) {
                        _this.props.onLazyLoad(slidesToLoad);
                    }
                }
            }
            // if (this.props.onLazyLoad) {
            //   this.props.onLazyLoad([leftMostSlide])
            // }
            _this.adaptHeight();
            var spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                listRef: _this.list,
                trackRef: _this.track
            }, _this.props), _this.state);
            var setTrackStyle = _this.didPropsChange(prevProps);
            setTrackStyle && _this.updateState(spec, setTrackStyle, function() {
                if (_this.state.currentSlide >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(_this.props.children)) {
                    _this.changeSlide({
                        message: "index",
                        index: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(_this.props.children) - _this.props.slidesToShow,
                        currentSlide: _this.state.currentSlide
                    });
                }
                if (prevProps.autoplay !== _this.props.autoplay || prevProps.autoplaySpeed !== _this.props.autoplaySpeed) {
                    if (!prevProps.autoplay && _this.props.autoplay) {
                        _this.autoPlay("playing");
                    } else if (_this.props.autoplay) {
                        _this.autoPlay("update");
                    } else {
                        _this.pause("paused");
                    }
                }
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "onWindowResized", function(setTrackStyle) {
            if (_this.debouncedResize) _this.debouncedResize.cancel();
            _this.debouncedResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$throttle$2d$debounce$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debounce"])(50, function() {
                return _this.resizeWindow(setTrackStyle);
            });
            _this.debouncedResize();
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "resizeWindow", function() {
            var setTrackStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var isTrackMounted = Boolean(_this.track && _this.track.node);
            // prevent warning: setting state on unmounted component (server side rendering)
            if (!isTrackMounted) return;
            var spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                listRef: _this.list,
                trackRef: _this.track
            }, _this.props), _this.state);
            _this.updateState(spec, setTrackStyle, function() {
                if (_this.props.autoplay) _this.autoPlay("update");
                else _this.pause("paused");
            });
            // animating state should be cleared while resizing, otherwise autoplay stops working
            _this.setState({
                animating: false
            });
            clearTimeout(_this.animationEndCallback);
            delete _this.animationEndCallback;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "updateState", function(spec, setTrackStyle, callback) {
            var updatedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializedState"])(spec);
            spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, spec), updatedState), {}, {
                slideIndex: updatedState.currentSlide
            });
            var targetLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTrackLeft"])(spec);
            spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, spec), {}, {
                left: targetLeft
            });
            var trackStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTrackCSS"])(spec);
            if (setTrackStyle || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(_this.props.children) !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(spec.children)) {
                updatedState["trackStyle"] = trackStyle;
            }
            _this.setState(updatedState, callback);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "ssrInit", function() {
            if (_this.props.variableWidth) {
                var _trackWidth = 0, _trackLeft = 0;
                var childrenWidths = [];
                var preClones = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreClones"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, _this.props), _this.state), {}, {
                    slideCount: _this.props.children.length
                }));
                var postClones = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPostClones"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, _this.props), _this.state), {}, {
                    slideCount: _this.props.children.length
                }));
                _this.props.children.forEach(function(child) {
                    childrenWidths.push(child.props.style.width);
                    _trackWidth += child.props.style.width;
                });
                for(var i = 0; i < preClones; i++){
                    _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
                    _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
                }
                for(var _i = 0; _i < postClones; _i++){
                    _trackWidth += childrenWidths[_i];
                }
                for(var _i2 = 0; _i2 < _this.state.currentSlide; _i2++){
                    _trackLeft += childrenWidths[_i2];
                }
                var _trackStyle = {
                    width: _trackWidth + "px",
                    left: -_trackLeft + "px"
                };
                if (_this.props.centerMode) {
                    var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
                    _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
                }
                return {
                    trackStyle: _trackStyle
                };
            }
            var childrenCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(_this.props.children);
            var spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, _this.props), _this.state), {}, {
                slideCount: childrenCount
            });
            var slideCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreClones"])(spec) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPostClones"])(spec) + childrenCount;
            var trackWidth = 100 / _this.props.slidesToShow * slideCount;
            var slideWidth = 100 / slideCount;
            var trackLeft = -slideWidth * ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreClones"])(spec) + _this.state.currentSlide) * trackWidth / 100;
            if (_this.props.centerMode) {
                trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
            }
            var trackStyle = {
                width: trackWidth + "%",
                left: trackLeft + "%"
            };
            return {
                slideWidth: slideWidth + "%",
                trackStyle: trackStyle
            };
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "checkImagesLoad", function() {
            var images = _this.list && _this.list.querySelectorAll && _this.list.querySelectorAll(".slick-slide img") || [];
            var imagesCount = images.length, loadedCount = 0;
            Array.prototype.forEach.call(images, function(image) {
                var handler = function handler() {
                    return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
                };
                if (!image.onclick) {
                    image.onclick = function() {
                        return image.parentNode.focus();
                    };
                } else {
                    var prevClickHandler = image.onclick;
                    image.onclick = function(e) {
                        prevClickHandler(e);
                        image.parentNode.focus();
                    };
                }
                if (!image.onload) {
                    if (_this.props.lazyLoad) {
                        image.onload = function() {
                            _this.adaptHeight();
                            _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
                        };
                    } else {
                        image.onload = handler;
                        image.onerror = function() {
                            handler();
                            _this.props.onLazyLoadError && _this.props.onLazyLoadError();
                        };
                    }
                }
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "progressiveLazyLoad", function() {
            var slidesToLoad = [];
            var spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, _this.props), _this.state);
            for(var index = _this.state.currentSlide; index < _this.state.slideCount + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPostClones"])(spec); index++){
                if (_this.state.lazyLoadedList.indexOf(index) < 0) {
                    slidesToLoad.push(index);
                    break;
                }
            }
            for(var _index = _this.state.currentSlide - 1; _index >= -(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreClones"])(spec); _index--){
                if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
                    slidesToLoad.push(_index);
                    break;
                }
            }
            if (slidesToLoad.length > 0) {
                _this.setState(function(state) {
                    return {
                        lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
                    };
                });
                if (_this.props.onLazyLoad) {
                    _this.props.onLazyLoad(slidesToLoad);
                }
            } else {
                if (_this.lazyLoadTimer) {
                    clearInterval(_this.lazyLoadTimer);
                    delete _this.lazyLoadTimer;
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "slideHandler", function(index) {
            var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var _this$props = _this.props, asNavFor = _this$props.asNavFor, beforeChange = _this$props.beforeChange, onLazyLoad = _this$props.onLazyLoad, speed = _this$props.speed, afterChange = _this$props.afterChange;
            // capture currentslide before state is updated
            var currentSlide = _this.state.currentSlide;
            var _slideHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideHandler"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                index: index
            }, _this.props), _this.state), {}, {
                trackRef: _this.track,
                useCSS: _this.props.useCSS && !dontAnimate
            })), state = _slideHandler.state, nextState = _slideHandler.nextState;
            if (!state) return;
            beforeChange && beforeChange(currentSlide, state.currentSlide);
            var slidesToLoad = state.lazyLoadedList.filter(function(value) {
                return _this.state.lazyLoadedList.indexOf(value) < 0;
            });
            onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);
            if (!_this.props.waitForAnimate && _this.animationEndCallback) {
                clearTimeout(_this.animationEndCallback);
                afterChange && afterChange(currentSlide);
                delete _this.animationEndCallback;
            }
            _this.setState(state, function() {
                // asNavForIndex check is to avoid recursive calls of slideHandler in waitForAnimate=false mode
                if (asNavFor && _this.asNavForIndex !== index) {
                    _this.asNavForIndex = index;
                    asNavFor.innerSlider.slideHandler(index);
                }
                if (!nextState) return;
                _this.animationEndCallback = setTimeout(function() {
                    var animating = nextState.animating, firstBatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(nextState, _excluded);
                    _this.setState(firstBatch, function() {
                        _this.callbackTimers.push(setTimeout(function() {
                            return _this.setState({
                                animating: animating
                            });
                        }, 10));
                        afterChange && afterChange(state.currentSlide);
                        delete _this.animationEndCallback;
                    });
                }, speed);
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "changeSlide", function(options) {
            var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, _this.props), _this.state);
            var targetSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["changeSlide"])(spec, options);
            if (targetSlide !== 0 && !targetSlide) return;
            if (dontAnimate === true) {
                _this.slideHandler(targetSlide, dontAnimate);
            } else {
                _this.slideHandler(targetSlide);
            }
            _this.props.autoplay && _this.autoPlay("update");
            if (_this.props.focusOnSelect) {
                var nodes = _this.list.querySelectorAll(".slick-current");
                nodes[0] && nodes[0].focus();
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "clickHandler", function(e) {
            if (_this.clickable === false) {
                e.stopPropagation();
                e.preventDefault();
            }
            _this.clickable = true;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "keyHandler", function(e) {
            var dir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyHandler"])(e, _this.props.accessibility, _this.props.rtl);
            dir !== "" && _this.changeSlide({
                message: dir
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "selectHandler", function(options) {
            _this.changeSlide(options);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "disableBodyScroll", function() {
            var preventDefault = function preventDefault(e) {
                e = e || window.event;
                if (e.preventDefault) e.preventDefault();
                e.returnValue = false;
            };
            window.ontouchmove = preventDefault;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "enableBodyScroll", function() {
            window.ontouchmove = null;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "swipeStart", function(e) {
            if (_this.props.verticalSwiping) {
                _this.disableBodyScroll();
            }
            var state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swipeStart"])(e, _this.props.swipe, _this.props.draggable);
            state !== "" && _this.setState(state);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "swipeMove", function(e) {
            var state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swipeMove"])(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, _this.props), _this.state), {}, {
                trackRef: _this.track,
                listRef: _this.list,
                slideIndex: _this.state.currentSlide
            }));
            if (!state) return;
            if (state["swiping"]) {
                _this.clickable = false;
            }
            _this.setState(state);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "swipeEnd", function(e) {
            var state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swipeEnd"])(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, _this.props), _this.state), {}, {
                trackRef: _this.track,
                listRef: _this.list,
                slideIndex: _this.state.currentSlide
            }));
            if (!state) return;
            var triggerSlideHandler = state["triggerSlideHandler"];
            delete state["triggerSlideHandler"];
            _this.setState(state);
            if (triggerSlideHandler === undefined) return;
            _this.slideHandler(triggerSlideHandler);
            if (_this.props.verticalSwiping) {
                _this.enableBodyScroll();
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "touchEnd", function(e) {
            _this.swipeEnd(e);
            _this.clickable = true;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "slickPrev", function() {
            // this and fellow methods are wrapped in setTimeout
            // to make sure initialize setState has happened before
            // any of such methods are called
            _this.callbackTimers.push(setTimeout(function() {
                return _this.changeSlide({
                    message: "previous"
                });
            }, 0));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "slickNext", function() {
            _this.callbackTimers.push(setTimeout(function() {
                return _this.changeSlide({
                    message: "next"
                });
            }, 0));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "slickGoTo", function(slide) {
            var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            slide = Number(slide);
            if (isNaN(slide)) return "";
            _this.callbackTimers.push(setTimeout(function() {
                return _this.changeSlide({
                    message: "index",
                    index: slide,
                    currentSlide: _this.state.currentSlide
                }, dontAnimate);
            }, 0));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "play", function() {
            var nextIndex;
            if (_this.props.rtl) {
                nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
            } else {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canGoNext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, _this.props), _this.state))) {
                    nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
                } else {
                    return false;
                }
            }
            _this.slideHandler(nextIndex);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "autoPlay", function(playType) {
            if (_this.autoplayTimer) {
                clearInterval(_this.autoplayTimer);
            }
            var autoplaying = _this.state.autoplaying;
            if (playType === "update") {
                if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
                    return;
                }
            } else if (playType === "leave") {
                if (autoplaying === "paused" || autoplaying === "focused") {
                    return;
                }
            } else if (playType === "blur") {
                if (autoplaying === "paused" || autoplaying === "hovered") {
                    return;
                }
            }
            _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);
            _this.setState({
                autoplaying: "playing"
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "pause", function(pauseType) {
            if (_this.autoplayTimer) {
                clearInterval(_this.autoplayTimer);
                _this.autoplayTimer = null;
            }
            var autoplaying = _this.state.autoplaying;
            if (pauseType === "paused") {
                _this.setState({
                    autoplaying: "paused"
                });
            } else if (pauseType === "focused") {
                if (autoplaying === "hovered" || autoplaying === "playing") {
                    _this.setState({
                        autoplaying: "focused"
                    });
                }
            } else {
                // pauseType  is 'hovered'
                if (autoplaying === "playing") {
                    _this.setState({
                        autoplaying: "hovered"
                    });
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "onDotsOver", function() {
            return _this.props.autoplay && _this.pause("hovered");
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "onDotsLeave", function() {
            return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "onTrackOver", function() {
            return _this.props.autoplay && _this.pause("hovered");
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "onTrackLeave", function() {
            return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "onSlideFocus", function() {
            return _this.props.autoplay && _this.pause("focused");
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "onSlideBlur", function() {
            return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "render", function() {
            var className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("slick-slider", _this.props.className, {
                "slick-vertical": _this.props.vertical,
                "slick-initialized": true
            });
            var spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, _this.props), _this.state);
            var trackProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractObject"])(spec, [
                "fade",
                "cssEase",
                "speed",
                "infinite",
                "centerMode",
                "focusOnSelect",
                "currentSlide",
                "lazyLoad",
                "lazyLoadedList",
                "rtl",
                "slideWidth",
                "slideHeight",
                "listHeight",
                "vertical",
                "slidesToShow",
                "slidesToScroll",
                "slideCount",
                "trackStyle",
                "variableWidth",
                "unslick",
                "centerPadding",
                "targetSlide",
                "useCSS"
            ]);
            var pauseOnHover = _this.props.pauseOnHover;
            trackProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, trackProps), {}, {
                onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
                onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
                onMouseOver: pauseOnHover ? _this.onTrackOver : null,
                focusOnSelect: _this.props.focusOnSelect && _this.clickable ? _this.selectHandler : null
            });
            var dots;
            if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
                var dotProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractObject"])(spec, [
                    "dotsClass",
                    "slideCount",
                    "slidesToShow",
                    "currentSlide",
                    "slidesToScroll",
                    "clickHandler",
                    "children",
                    "customPaging",
                    "infinite",
                    "appendDots"
                ]);
                var pauseOnDotsHover = _this.props.pauseOnDotsHover;
                dotProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, dotProps), {}, {
                    clickHandler: _this.changeSlide,
                    onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
                    onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
                    onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
                });
                dots = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$dots$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dots"], dotProps);
            }
            var prevArrow, nextArrow;
            var arrowProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractObject"])(spec, [
                "infinite",
                "centerMode",
                "currentSlide",
                "slideCount",
                "slidesToShow",
                "prevArrow",
                "nextArrow"
            ]);
            arrowProps.clickHandler = _this.changeSlide;
            if (_this.props.arrows) {
                prevArrow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$arrows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrevArrow"], arrowProps);
                nextArrow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$arrows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextArrow"], arrowProps);
            }
            var verticalHeightStyle = null;
            if (_this.props.vertical) {
                verticalHeightStyle = {
                    height: _this.state.listHeight
                };
            }
            var centerPaddingStyle = null;
            if (_this.props.vertical === false) {
                if (_this.props.centerMode === true) {
                    centerPaddingStyle = {
                        padding: "0px " + _this.props.centerPadding
                    };
                }
            } else {
                if (_this.props.centerMode === true) {
                    centerPaddingStyle = {
                        padding: _this.props.centerPadding + " 0px"
                    };
                }
            }
            var listStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, verticalHeightStyle), centerPaddingStyle);
            var touchMove = _this.props.touchMove;
            var listProps = {
                className: "slick-list",
                style: listStyle,
                onClick: _this.clickHandler,
                onMouseDown: touchMove ? _this.swipeStart : null,
                onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
                onMouseUp: touchMove ? _this.swipeEnd : null,
                onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
                onTouchStart: touchMove ? _this.swipeStart : null,
                onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
                onTouchEnd: touchMove ? _this.touchEnd : null,
                onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
                onKeyDown: _this.props.accessibility ? _this.keyHandler : null
            };
            var innerSliderProps = {
                className: className,
                dir: "ltr",
                style: _this.props.style
            };
            if (_this.props.unslick) {
                listProps = {
                    className: "slick-list"
                };
                innerSliderProps = {
                    className: className,
                    style: _this.props.style
                };
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                ref: _this.listRefHandler
            }, listProps), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                ref: _this.trackRefHandler
            }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots : "");
        });
        _this.list = null;
        _this.track = null;
        _this.state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$initial$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), {}, {
            currentSlide: _this.props.initialSlide,
            targetSlide: _this.props.initialSlide ? _this.props.initialSlide : 0,
            slideCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(_this.props.children)
        });
        _this.callbackTimers = [];
        _this.clickable = true;
        _this.debouncedResize = null;
        var ssrState = _this.ssrInit();
        _this.state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, _this.state), ssrState);
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(InnerSlider, _React$Component);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(InnerSlider, [
        {
            key: "didPropsChange",
            value: function didPropsChange(prevProps) {
                var setTrackStyle = false;
                for(var _i3 = 0, _Object$keys = Object.keys(this.props); _i3 < _Object$keys.length; _i3++){
                    var key = _Object$keys[_i3];
                    // eslint-disable-next-line no-prototype-builtins
                    if (!prevProps.hasOwnProperty(key)) {
                        setTrackStyle = true;
                        break;
                    }
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prevProps[key]) === "object" || typeof prevProps[key] === "function" || isNaN(prevProps[key])) {
                        continue;
                    }
                    if (prevProps[key] !== this.props[key]) {
                        setTrackStyle = true;
                        break;
                    }
                }
                return setTrackStyle || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(this.props.children) !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(prevProps.children);
            }
        }
    ]);
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component);

})()),
"[project]/node_modules/@ant-design/react-slick/es/slider.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Slider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/createClass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeReflectConstruct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$inner$2d$slider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/react-slick/es/inner-slider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json2mq$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/json2mq/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$default$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/react-slick/es/default-props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/react-slick/es/utils/innerSliderUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
;
;
;
;
;
;
;
;
;
function _callSuper(t, o, e) {
    return o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(o), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeReflectConstruct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])() ? Reflect.construct(o, e || [], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t).constructor) : o.apply(t, e));
}
;
;
;
;
;
var Slider = /*#__PURE__*/ function(_React$Component) {
    function Slider(props) {
        var _this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, Slider);
        _this = _callSuper(this, Slider, [
            props
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "innerSliderRefHandler", function(ref) {
            return _this.innerSlider = ref;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "slickPrev", function() {
            return _this.innerSlider.slickPrev();
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "slickNext", function() {
            return _this.innerSlider.slickNext();
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "slickGoTo", function(slide) {
            var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return _this.innerSlider.slickGoTo(slide, dontAnimate);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "slickPause", function() {
            return _this.innerSlider.pause("paused");
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this, "slickPlay", function() {
            return _this.innerSlider.autoPlay("play");
        });
        _this.state = {
            breakpoint: null
        };
        _this._responsiveMediaHandlers = [];
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Slider, _React$Component);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Slider, [
        {
            key: "media",
            value: function media(query, handler) {
                // javascript handler for  css media query
                var mql = window.matchMedia(query);
                var listener = function listener(_ref) {
                    var matches = _ref.matches;
                    if (matches) {
                        handler();
                    }
                };
                mql.addListener(listener);
                listener(mql);
                this._responsiveMediaHandlers.push({
                    mql: mql,
                    query: query,
                    listener: listener
                });
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;
                // performance monitoring
                //if (process.env.NODE_ENV !== 'production') {
                //const { whyDidYouUpdate } = require('why-did-you-update')
                //whyDidYouUpdate(React)
                //}
                if (this.props.responsive) {
                    var breakpoints = this.props.responsive.map(function(breakpt) {
                        return breakpt.breakpoint;
                    });
                    // sort them in increasing order of their numerical value
                    breakpoints.sort(function(x, y) {
                        return x - y;
                    });
                    breakpoints.forEach(function(breakpoint, index) {
                        // media query for each breakpoint
                        var bQuery;
                        if (index === 0) {
                            bQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json2mq$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                                minWidth: 0,
                                maxWidth: breakpoint
                            });
                        } else {
                            bQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json2mq$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                                minWidth: breakpoints[index - 1] + 1,
                                maxWidth: breakpoint
                            });
                        }
                        // when not using server side rendering
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseDOM"])() && _this2.media(bQuery, function() {
                            _this2.setState({
                                breakpoint: breakpoint
                            });
                        });
                    });
                    // Register media query for full screen. Need to support resize from small to large
                    // convert javascript object to media query string
                    var query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json2mq$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        minWidth: breakpoints.slice(-1)[0]
                    });
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseDOM"])() && this.media(query, function() {
                        _this2.setState({
                            breakpoint: null
                        });
                    });
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this._responsiveMediaHandlers.forEach(function(obj) {
                    obj.mql.removeListener(obj.listener);
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this3 = this;
                var settings;
                var newProps;
                if (this.state.breakpoint) {
                    newProps = this.props.responsive.filter(function(resp) {
                        return resp.breakpoint === _this3.state.breakpoint;
                    });
                    settings = newProps[0].settings === "unslick" ? "unslick" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$default$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), this.props), newProps[0].settings);
                } else {
                    settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$default$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), this.props);
                }
                // force scrolling by one if centerMode is on
                if (settings.centerMode) {
                    if (settings.slidesToScroll > 1 && ("TURBOPACK compile-time value", "development") !== "production") {
                        console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
                    }
                    settings.slidesToScroll = 1;
                }
                // force showing one slide and scrolling by one if the fade mode is on
                if (settings.fade) {
                    if (settings.slidesToShow > 1 && ("TURBOPACK compile-time value", "development") !== "production") {
                        console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
                    }
                    if (settings.slidesToScroll > 1 && ("TURBOPACK compile-time value", "development") !== "production") {
                        console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
                    }
                    settings.slidesToShow = 1;
                    settings.slidesToScroll = 1;
                }
                // makes sure that children is an array, even when there is only 1 child
                var children = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.toArray(this.props.children);
                // Children may contain false or null, so we should filter them
                // children may also contain string filled with spaces (in certain cases where we use jsx strings)
                children = children.filter(function(child) {
                    if (typeof child === "string") {
                        return !!child.trim();
                    }
                    return !!child;
                });
                // rows and slidesPerRow logic is handled here
                if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
                    console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
                    settings.variableWidth = false;
                }
                var newChildren = [];
                var currentWidth = null;
                for(var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow){
                    var newSlide = [];
                    for(var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow){
                        var row = [];
                        for(var k = j; k < j + settings.slidesPerRow; k += 1){
                            if (settings.variableWidth && children[k].props.style) {
                                currentWidth = children[k].props.style.width;
                            }
                            if (k >= children.length) break;
                            row.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(children[k], {
                                key: 100 * i + 10 * j + k,
                                tabIndex: -1,
                                style: {
                                    width: "".concat(100 / settings.slidesPerRow, "%"),
                                    display: "inline-block"
                                }
                            }));
                        }
                        newSlide.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                            key: 10 * i + j
                        }, row));
                    }
                    if (settings.variableWidth) {
                        newChildren.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                            key: i,
                            style: {
                                width: currentWidth
                            }
                        }, newSlide));
                    } else {
                        newChildren.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                            key: i
                        }, newSlide));
                    }
                }
                if (settings === "unslick") {
                    var className = "regular slider " + (this.props.className || "");
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                        className: className
                    }, children);
                } else if (newChildren.length <= settings.slidesToShow && !settings.infinite) {
                    settings.unslick = true;
                }
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$inner$2d$slider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InnerSlider"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    style: this.props.style,
                    ref: this.innerSliderRefHandler
                }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$utils$2f$innerSliderUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterSettings"])(settings)), newChildren);
            }
        }
    ]);
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component);
;

})()),
"[project]/node_modules/@ant-design/react-slick/es/index.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$slider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/react-slick/es/slider.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$react$2d$slick$2f$es$2f$slider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];

})()),
}]);

//# sourceMappingURL=08b5e_%40ant-design_react-slick_es_4cfff4._.js.map