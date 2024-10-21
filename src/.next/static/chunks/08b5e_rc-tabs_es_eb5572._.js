(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/08b5e_rc-tabs_es_eb5572._.js", {

"[project]/node_modules/rc-tabs/es/TabContext.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);

})()),
"[project]/node_modules/rc-tabs/es/hooks/useIndicator.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/raf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
var useIndicator = function useIndicator(options) {
    var activeTabOffset = options.activeTabOffset, horizontal = options.horizontal, rtl = options.rtl, _options$indicator = options.indicator, indicator = _options$indicator === void 0 ? {} : _options$indicator;
    var size = indicator.size, _indicator$align = indicator.align, align = _indicator$align === void 0 ? 'center' : _indicator$align;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState, 2), inkStyle = _useState2[0], setInkStyle = _useState2[1];
    var inkBarRafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var getLength = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(function(origin) {
        if (typeof size === 'function') {
            return size(origin);
        }
        if (typeof size === 'number') {
            return size;
        }
        return origin;
    }, [
        size
    ]);
    // Delay set ink style to avoid remove tab blink
    function cleanInkBarRaf() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cancel(inkBarRafRef.current);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        var newInkStyle = {};
        if (activeTabOffset) {
            if (horizontal) {
                newInkStyle.width = getLength(activeTabOffset.width);
                var key = rtl ? 'right' : 'left';
                if (align === 'start') {
                    newInkStyle[key] = activeTabOffset[key];
                }
                if (align === 'center') {
                    newInkStyle[key] = activeTabOffset[key] + activeTabOffset.width / 2;
                    newInkStyle.transform = rtl ? 'translateX(50%)' : 'translateX(-50%)';
                }
                if (align === 'end') {
                    newInkStyle[key] = activeTabOffset[key] + activeTabOffset.width;
                    newInkStyle.transform = 'translateX(-100%)';
                }
            } else {
                newInkStyle.height = getLength(activeTabOffset.height);
                if (align === 'start') {
                    newInkStyle.top = activeTabOffset.top;
                }
                if (align === 'center') {
                    newInkStyle.top = activeTabOffset.top + activeTabOffset.height / 2;
                    newInkStyle.transform = 'translateY(-50%)';
                }
                if (align === 'end') {
                    newInkStyle.top = activeTabOffset.top + activeTabOffset.height;
                    newInkStyle.transform = 'translateY(-100%)';
                }
            }
        }
        cleanInkBarRaf();
        inkBarRafRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
            setInkStyle(newInkStyle);
        });
        return cleanInkBarRaf;
    }, [
        activeTabOffset,
        horizontal,
        rtl,
        align,
        getLength
    ]);
    return {
        style: inkStyle
    };
};
const __TURBOPACK__default__export__ = useIndicator;

})()),
"[project]/node_modules/rc-tabs/es/hooks/useOffsets.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useOffsets
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
var DEFAULT_SIZE = {
    width: 0,
    height: 0,
    left: 0,
    top: 0
};
function useOffsets(tabs, tabSizes, holderScrollWidth) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        var _tabs$;
        var map = new Map();
        var lastOffset = tabSizes.get((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key) || DEFAULT_SIZE;
        var rightOffset = lastOffset.left + lastOffset.width;
        for(var i = 0; i < tabs.length; i += 1){
            var key = tabs[i].key;
            var data = tabSizes.get(key);
            // Reuse last one when not exist yet
            if (!data) {
                var _tabs;
                data = tabSizes.get((_tabs = tabs[i - 1]) === null || _tabs === void 0 ? void 0 : _tabs.key) || DEFAULT_SIZE;
            }
            var entity = map.get(key) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, data);
            // Right
            entity.right = rightOffset - entity.left - entity.width;
            // Update entity
            map.set(key, entity);
        }
        return map;
    }, [
        tabs.map(function(tab) {
            return tab.key;
        }).join('_'),
        tabSizes,
        holderScrollWidth
    ]);
}

})()),
"[project]/node_modules/rc-tabs/es/hooks/useSyncState.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useSyncState
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function useSyncState(defaultState, onChange) {
    var stateRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(defaultState);
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({}), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), forceUpdate = _React$useState2[1];
    function setState(updater) {
        var newValue = typeof updater === 'function' ? updater(stateRef.current) : updater;
        if (newValue !== stateRef.current) {
            onChange(newValue, stateRef.current);
        }
        stateRef.current = newValue;
        forceUpdate({});
    }
    return [
        stateRef.current,
        setState
    ];
}

})()),
"[project]/node_modules/rc-tabs/es/hooks/useTouchMove.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useTouchMove
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
var MIN_SWIPE_DISTANCE = 0.1;
var STOP_SWIPE_DISTANCE = 0.01;
var REFRESH_INTERVAL = 20;
var SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);
function useTouchMove(ref, onOffset) {
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState, 2), touchPosition = _useState2[0], setTouchPosition = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState3, 2), lastTimestamp = _useState4[0], setLastTimestamp = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState5, 2), lastTimeDiff = _useState6[0], setLastTimeDiff = _useState6[1];
    var _useState7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), _useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState7, 2), lastOffset = _useState8[0], setLastOffset = _useState8[1];
    var motionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    // ========================= Events =========================
    // >>> Touch events
    function onTouchStart(e) {
        var _e$touches$ = e.touches[0], screenX = _e$touches$.screenX, screenY = _e$touches$.screenY;
        setTouchPosition({
            x: screenX,
            y: screenY
        });
        window.clearInterval(motionRef.current);
    }
    function onTouchMove(e) {
        if (!touchPosition) return;
        // e.preventDefault();
        var _e$touches$2 = e.touches[0], screenX = _e$touches$2.screenX, screenY = _e$touches$2.screenY;
        setTouchPosition({
            x: screenX,
            y: screenY
        });
        var offsetX = screenX - touchPosition.x;
        var offsetY = screenY - touchPosition.y;
        onOffset(offsetX, offsetY);
        var now = Date.now();
        setLastTimestamp(now);
        setLastTimeDiff(now - lastTimestamp);
        setLastOffset({
            x: offsetX,
            y: offsetY
        });
    }
    function onTouchEnd() {
        if (!touchPosition) return;
        setTouchPosition(null);
        setLastOffset(null);
        // Swipe if needed
        if (lastOffset) {
            var distanceX = lastOffset.x / lastTimeDiff;
            var distanceY = lastOffset.y / lastTimeDiff;
            var absX = Math.abs(distanceX);
            var absY = Math.abs(distanceY);
            // Skip swipe if low distance
            if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) return;
            var currentX = distanceX;
            var currentY = distanceY;
            motionRef.current = window.setInterval(function() {
                if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
                    window.clearInterval(motionRef.current);
                    return;
                }
                currentX *= SPEED_OFF_MULTIPLE;
                currentY *= SPEED_OFF_MULTIPLE;
                onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
            }, REFRESH_INTERVAL);
        }
    }
    // >>> Wheel event
    var lastWheelDirectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    function onWheel(e) {
        var deltaX = e.deltaX, deltaY = e.deltaY;
        // Convert both to x & y since wheel only happened on PC
        var mixed = 0;
        var absX = Math.abs(deltaX);
        var absY = Math.abs(deltaY);
        if (absX === absY) {
            mixed = lastWheelDirectionRef.current === 'x' ? deltaX : deltaY;
        } else if (absX > absY) {
            mixed = deltaX;
            lastWheelDirectionRef.current = 'x';
        } else {
            mixed = deltaY;
            lastWheelDirectionRef.current = 'y';
        }
        if (onOffset(-mixed, -mixed)) {
            e.preventDefault();
        }
    }
    // ========================= Effect =========================
    var touchEventsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    touchEventsRef.current = {
        onTouchStart: onTouchStart,
        onTouchMove: onTouchMove,
        onTouchEnd: onTouchEnd,
        onWheel: onWheel
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        function onProxyTouchStart(e) {
            touchEventsRef.current.onTouchStart(e);
        }
        function onProxyTouchMove(e) {
            touchEventsRef.current.onTouchMove(e);
        }
        function onProxyTouchEnd(e) {
            touchEventsRef.current.onTouchEnd(e);
        }
        function onProxyWheel(e) {
            touchEventsRef.current.onWheel(e);
        }
        document.addEventListener('touchmove', onProxyTouchMove, {
            passive: false
        });
        document.addEventListener('touchend', onProxyTouchEnd, {
            passive: true
        });
        // No need to clean up since element removed
        ref.current.addEventListener('touchstart', onProxyTouchStart, {
            passive: true
        });
        ref.current.addEventListener('wheel', onProxyWheel, {
            passive: false
        });
        return function() {
            document.removeEventListener('touchmove', onProxyTouchMove);
            document.removeEventListener('touchend', onProxyTouchEnd);
        };
    }, []);
}

})()),
"[project]/node_modules/rc-tabs/es/hooks/useUpdate.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useUpdate,
    "useUpdateState": ()=>useUpdateState
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function useUpdate(callback) {
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState, 2), count = _useState2[0], setCount = _useState2[1];
    var effectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    var callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    callbackRef.current = callback;
    // Trigger on `useLayoutEffect`
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutUpdateEffect"])(function() {
        var _callbackRef$current;
        (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 || _callbackRef$current.call(callbackRef);
    }, [
        count
    ]);
    // Trigger to update count
    return function() {
        if (effectRef.current !== count) {
            return;
        }
        effectRef.current += 1;
        setCount(effectRef.current);
    };
}
function useUpdateState(defaultState) {
    var batchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}), _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState3, 2), forceUpdate = _useState4[1];
    var state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(typeof defaultState === 'function' ? defaultState() : defaultState);
    var flushUpdate = useUpdate(function() {
        var current = state.current;
        batchRef.current.forEach(function(callback) {
            current = callback(current);
        });
        batchRef.current = [];
        state.current = current;
        forceUpdate({});
    });
    function updater(callback) {
        batchRef.current.push(callback);
        flushUpdate();
    }
    return [
        state.current,
        updater
    ];
}

})()),
"[project]/node_modules/rc-tabs/es/hooks/useVisibleRange.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useVisibleRange
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var DEFAULT_SIZE = {
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    right: 0
};
function useVisibleRange(tabOffsets, visibleTabContentValue, transform, tabContentSizeValue, addNodeSizeValue, operationNodeSizeValue, _ref) {
    var tabs = _ref.tabs, tabPosition = _ref.tabPosition, rtl = _ref.rtl;
    var charUnit;
    var position;
    var transformSize;
    if ([
        'top',
        'bottom'
    ].includes(tabPosition)) {
        charUnit = 'width';
        position = rtl ? 'right' : 'left';
        transformSize = Math.abs(transform);
    } else {
        charUnit = 'height';
        position = 'top';
        transformSize = -transform;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        if (!tabs.length) {
            return [
                0,
                0
            ];
        }
        var len = tabs.length;
        var endIndex = len;
        for(var i = 0; i < len; i += 1){
            var offset = tabOffsets.get(tabs[i].key) || DEFAULT_SIZE;
            if (Math.floor(offset[position] + offset[charUnit]) > Math.floor(transformSize + visibleTabContentValue)) {
                endIndex = i - 1;
                break;
            }
        }
        var startIndex = 0;
        for(var _i = len - 1; _i >= 0; _i -= 1){
            var _offset = tabOffsets.get(tabs[_i].key) || DEFAULT_SIZE;
            if (_offset[position] < transformSize) {
                startIndex = _i + 1;
                break;
            }
        }
        return startIndex >= endIndex ? [
            0,
            0
        ] : [
            startIndex,
            endIndex
        ];
    }, [
        tabOffsets,
        visibleTabContentValue,
        tabContentSizeValue,
        addNodeSizeValue,
        operationNodeSizeValue,
        transformSize,
        tabPosition,
        tabs.map(function(tab) {
            return tab.key;
        }).join('_'),
        rtl
    ]);
}

})()),
"[project]/node_modules/rc-tabs/es/util.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * We trade Map as deps which may change with same value but different ref object.
 * We should make it as hash for deps
 * */ __turbopack_esm__({
    "genDataNodeKey": ()=>genDataNodeKey,
    "getRemovable": ()=>getRemovable,
    "stringify": ()=>stringify
});
function stringify(obj) {
    var tgt;
    if (obj instanceof Map) {
        tgt = {};
        obj.forEach(function(v, k) {
            tgt[k] = v;
        });
    } else {
        tgt = obj;
    }
    return JSON.stringify(tgt);
}
var RC_TABS_DOUBLE_QUOTE = 'TABS_DQ';
function genDataNodeKey(key) {
    return String(key).replace(/"/g, RC_TABS_DOUBLE_QUOTE);
}
function getRemovable(closable, closeIcon, editable, disabled) {
    if (// Only editable tabs can be removed
    !editable || // Tabs cannot be removed when disabled
    disabled || // closable is false
    closable === false || // If closable is undefined, the remove button should be hidden when closeIcon is null or false
    closable === undefined && (closeIcon === false || closeIcon === null)) {
        return false;
    }
    return true;
}

})()),
"[project]/node_modules/rc-tabs/es/TabNavList/AddButton.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var AddButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var prefixCls = props.prefixCls, editable = props.editable, locale = props.locale, style = props.style;
    if (!editable || editable.showAdd === false) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("button", {
        ref: ref,
        type: "button",
        className: "".concat(prefixCls, "-nav-add"),
        style: style,
        "aria-label": (locale === null || locale === void 0 ? void 0 : locale.addAriaLabel) || 'Add tab',
        onClick: function onClick(event) {
            editable.onEdit('add', {
                event: event
            });
        }
    }, editable.addIcon || '+');
});
const __TURBOPACK__default__export__ = AddButton;

})()),
"[project]/node_modules/rc-tabs/es/TabNavList/ExtraContent.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
var ExtraContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var position = props.position, prefixCls = props.prefixCls, extra = props.extra;
    if (!extra) {
        return null;
    }
    var content;
    // Parse extra
    var assertExtra = {};
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(extra) === 'object' && !/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(extra)) {
        assertExtra = extra;
    } else {
        assertExtra.right = extra;
    }
    if (position === 'right') {
        content = assertExtra.right;
    }
    if (position === 'left') {
        content = assertExtra.left;
    }
    return content ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        className: "".concat(prefixCls, "-extra-content"),
        ref: ref
    }, content) : null;
});
if ("TURBOPACK compile-time truthy", 1) {
    ExtraContent.displayName = 'ExtraContent';
}
const __TURBOPACK__default__export__ = ExtraContent;

})()),
"[project]/node_modules/rc-tabs/es/TabNavList/OperationNode.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$dropdown$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-dropdown/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/KeyCode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabNavList$2f$AddButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/TabNavList/AddButton.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
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
var OperationNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var prefixCls = props.prefixCls, id = props.id, tabs = props.tabs, locale = props.locale, mobile = props.mobile, _props$more = props.more, moreProps = _props$more === void 0 ? {} : _props$more, style = props.style, className = props.className, editable = props.editable, tabBarGutter = props.tabBarGutter, rtl = props.rtl, removeAriaLabel = props.removeAriaLabel, onTabClick = props.onTabClick, getPopupContainer = props.getPopupContainer, popupClassName = props.popupClassName;
    // ======================== Dropdown ========================
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState, 2), open = _useState2[0], setOpen = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState3, 2), selectedKey = _useState4[0], setSelectedKey = _useState4[1];
    var _moreProps$icon = moreProps.icon, moreIcon = _moreProps$icon === void 0 ? 'More' : _moreProps$icon;
    var popupId = "".concat(id, "-more-popup");
    var dropdownPrefix = "".concat(prefixCls, "-dropdown");
    var selectedItemId = selectedKey !== null ? "".concat(popupId, "-").concat(selectedKey) : null;
    var dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
    function onRemoveTab(event, key) {
        event.preventDefault();
        event.stopPropagation();
        editable.onEdit('remove', {
            key: key,
            event: event
        });
    }
    var menu = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onClick: function onClick(_ref) {
            var key = _ref.key, domEvent = _ref.domEvent;
            onTabClick(key, domEvent);
            setOpen(false);
        },
        prefixCls: "".concat(dropdownPrefix, "-menu"),
        id: popupId,
        tabIndex: -1,
        role: "listbox",
        "aria-activedescendant": selectedItemId,
        selectedKeys: [
            selectedKey
        ],
        "aria-label": dropdownAriaLabel !== undefined ? dropdownAriaLabel : 'expanded dropdown'
    }, tabs.map(function(tab) {
        var closable = tab.closable, disabled = tab.disabled, closeIcon = tab.closeIcon, key = tab.key, label = tab.label;
        var removable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRemovable"])(closable, closeIcon, editable, disabled);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
            key: key,
            id: "".concat(popupId, "-").concat(key),
            role: "option",
            "aria-controls": id && "".concat(id, "-panel-").concat(key),
            disabled: disabled
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", null, label), removable && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("button", {
            type: "button",
            "aria-label": removeAriaLabel || 'remove',
            tabIndex: 0,
            className: "".concat(dropdownPrefix, "-menu-item-remove"),
            onClick: function onClick(e) {
                e.stopPropagation();
                onRemoveTab(e, key);
            }
        }, closeIcon || editable.removeIcon || '×'));
    }));
    function selectOffset(offset) {
        var enabledTabs = tabs.filter(function(tab) {
            return !tab.disabled;
        });
        var selectedIndex = enabledTabs.findIndex(function(tab) {
            return tab.key === selectedKey;
        }) || 0;
        var len = enabledTabs.length;
        for(var i = 0; i < len; i += 1){
            selectedIndex = (selectedIndex + offset + len) % len;
            var tab = enabledTabs[selectedIndex];
            if (!tab.disabled) {
                setSelectedKey(tab.key);
                return;
            }
        }
    }
    function onKeyDown(e) {
        var which = e.which;
        if (!open) {
            if ([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DOWN,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SPACE,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ENTER
            ].includes(which)) {
                setOpen(true);
                e.preventDefault();
            }
            return;
        }
        switch(which){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].UP:
                selectOffset(-1);
                e.preventDefault();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DOWN:
                selectOffset(1);
                e.preventDefault();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ESC:
                setOpen(false);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SPACE:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ENTER:
                if (selectedKey !== null) {
                    onTabClick(selectedKey, e);
                }
                break;
        }
    }
    // ========================= Effect =========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        // We use query element here to avoid React strict warning
        var ele = document.getElementById(selectedItemId);
        if (ele && ele.scrollIntoView) {
            ele.scrollIntoView(false);
        }
    }, [
        selectedKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (!open) {
            setSelectedKey(null);
        }
    }, [
        open
    ]);
    // ========================= Render =========================
    var moreStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, rtl ? 'marginRight' : 'marginLeft', tabBarGutter);
    if (!tabs.length) {
        moreStyle.visibility = 'hidden';
        moreStyle.order = 1;
    }
    var overlayClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(dropdownPrefix, "-rtl"), rtl));
    var moreNode = mobile ? null : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$dropdown$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        prefixCls: dropdownPrefix,
        overlay: menu,
        visible: tabs.length ? open : false,
        onVisibleChange: setOpen,
        overlayClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(overlayClassName, popupClassName),
        mouseEnterDelay: 0.1,
        mouseLeaveDelay: 0.1,
        getPopupContainer: getPopupContainer
    }, moreProps), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("button", {
        type: "button",
        className: "".concat(prefixCls, "-nav-more"),
        style: moreStyle,
        tabIndex: -1,
        "aria-hidden": "true",
        "aria-haspopup": "listbox",
        "aria-controls": popupId,
        id: "".concat(id, "-more"),
        "aria-expanded": open,
        onKeyDown: onKeyDown
    }, moreIcon));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-nav-operations"), className),
        style: style,
        ref: ref
    }, moreNode, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabNavList$2f$AddButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        locale: locale,
        editable: editable
    }));
});
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.memo(OperationNode, function(_, next) {
    return(// https://github.com/ant-design/ant-design/issues/32544
    // We'd better remove syntactic sugar in `rc-menu` since this has perf issue
    next.tabMoving);
});

})()),
"[project]/node_modules/rc-tabs/es/TabNavList/TabNode.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/KeyCode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/util.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
var TabNode = function TabNode(props) {
    var prefixCls = props.prefixCls, id = props.id, active = props.active, _props$tab = props.tab, key = _props$tab.key, label = _props$tab.label, disabled = _props$tab.disabled, closeIcon = _props$tab.closeIcon, icon = _props$tab.icon, closable = props.closable, renderWrapper = props.renderWrapper, removeAriaLabel = props.removeAriaLabel, editable = props.editable, onClick = props.onClick, onFocus = props.onFocus, style = props.style;
    var tabPrefix = "".concat(prefixCls, "-tab");
    var removable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRemovable"])(closable, closeIcon, editable, disabled);
    function onInternalClick(e) {
        if (disabled) {
            return;
        }
        onClick(e);
    }
    function onRemoveTab(event) {
        event.preventDefault();
        event.stopPropagation();
        editable.onEdit('remove', {
            key: key,
            event: event
        });
    }
    var labelNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        return icon && typeof label === 'string' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", null, label) : label;
    }, [
        label,
        icon
    ]);
    var node = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        key: key,
        "data-node-key": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genDataNodeKey"])(key),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tabPrefix, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(tabPrefix, "-with-remove"), removable), "".concat(tabPrefix, "-active"), active), "".concat(tabPrefix, "-disabled"), disabled)),
        style: style,
        onClick: onInternalClick
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        role: "tab",
        "aria-selected": active,
        id: id && "".concat(id, "-tab-").concat(key),
        className: "".concat(tabPrefix, "-btn"),
        "aria-controls": id && "".concat(id, "-panel-").concat(key),
        "aria-disabled": disabled,
        tabIndex: disabled ? null : 0,
        onClick: function onClick(e) {
            e.stopPropagation();
            onInternalClick(e);
        },
        onKeyDown: function onKeyDown(e) {
            if ([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SPACE,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ENTER
            ].includes(e.which)) {
                e.preventDefault();
                onInternalClick(e);
            }
        },
        onFocus: onFocus
    }, icon && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
        className: "".concat(tabPrefix, "-icon")
    }, icon), label && labelNode), removable && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("button", {
        type: "button",
        "aria-label": removeAriaLabel || 'remove',
        tabIndex: 0,
        className: "".concat(tabPrefix, "-remove"),
        onClick: function onClick(e) {
            e.stopPropagation();
            onRemoveTab(e);
        }
    }, closeIcon || editable.removeIcon || '×'));
    return renderWrapper ? renderWrapper(node) : node;
};
const __TURBOPACK__default__export__ = TabNode;

})()),
"[project]/node_modules/rc-tabs/es/TabNavList/index.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/rc-resize-observer/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/rc-resize-observer/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/TabContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$hooks$2f$useIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/hooks/useIndicator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$hooks$2f$useOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/hooks/useOffsets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$hooks$2f$useSyncState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/hooks/useSyncState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$hooks$2f$useTouchMove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/hooks/useTouchMove.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$hooks$2f$useUpdate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/hooks/useUpdate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$hooks$2f$useVisibleRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/hooks/useVisibleRange.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabNavList$2f$AddButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/TabNavList/AddButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabNavList$2f$ExtraContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/TabNavList/ExtraContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabNavList$2f$OperationNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/TabNavList/OperationNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabNavList$2f$TabNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/TabNavList/TabNode.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
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
;
var getTabSize = function getTabSize(tab, containerRect) {
    // tabListRef
    var offsetWidth = tab.offsetWidth, offsetHeight = tab.offsetHeight, offsetTop = tab.offsetTop, offsetLeft = tab.offsetLeft;
    var _tab$getBoundingClien = tab.getBoundingClientRect(), width = _tab$getBoundingClien.width, height = _tab$getBoundingClien.height, left = _tab$getBoundingClien.left, top = _tab$getBoundingClien.top;
    // Use getBoundingClientRect to avoid decimal inaccuracy
    if (Math.abs(width - offsetWidth) < 1) {
        return [
            width,
            height,
            left - containerRect.left,
            top - containerRect.top
        ];
    }
    return [
        offsetWidth,
        offsetHeight,
        offsetLeft,
        offsetTop
    ];
};
var getSize = function getSize(refObj) {
    var _ref = refObj.current || {}, _ref$offsetWidth = _ref.offsetWidth, offsetWidth = _ref$offsetWidth === void 0 ? 0 : _ref$offsetWidth, _ref$offsetHeight = _ref.offsetHeight, offsetHeight = _ref$offsetHeight === void 0 ? 0 : _ref$offsetHeight;
    // Use getBoundingClientRect to avoid decimal inaccuracy
    if (refObj.current) {
        var _refObj$current$getBo = refObj.current.getBoundingClientRect(), width = _refObj$current$getBo.width, height = _refObj$current$getBo.height;
        if (Math.abs(width - offsetWidth) < 1) {
            return [
                width,
                height
            ];
        }
    }
    return [
        offsetWidth,
        offsetHeight
    ];
};
/**
 * Convert `SizeInfo` to unit value. Such as [123, 456] with `top` position get `123`
 */ var getUnitValue = function getUnitValue(size, tabPositionTopOrBottom) {
    return size[tabPositionTopOrBottom ? 0 : 1];
};
var TabNavList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var className = props.className, style = props.style, id = props.id, animated = props.animated, activeKey = props.activeKey, rtl = props.rtl, extra = props.extra, editable = props.editable, locale = props.locale, tabPosition = props.tabPosition, tabBarGutter = props.tabBarGutter, children = props.children, onTabClick = props.onTabClick, onTabScroll = props.onTabScroll, indicator = props.indicator;
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), prefixCls = _React$useContext.prefixCls, tabs = _React$useContext.tabs;
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var extraLeftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var extraRightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var tabsWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var tabListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var operationsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var innerAddButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var tabPositionTopOrBottom = tabPosition === 'top' || tabPosition === 'bottom';
    var _useSyncState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$hooks$2f$useSyncState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(0, function(next, prev) {
        if (tabPositionTopOrBottom && onTabScroll) {
            onTabScroll({
                direction: next > prev ? 'left' : 'right'
            });
        }
    }), _useSyncState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useSyncState, 2), transformLeft = _useSyncState2[0], setTransformLeft = _useSyncState2[1];
    var _useSyncState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$hooks$2f$useSyncState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(0, function(next, prev) {
        if (!tabPositionTopOrBottom && onTabScroll) {
            onTabScroll({
                direction: next > prev ? 'top' : 'bottom'
            });
        }
    }), _useSyncState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useSyncState3, 2), transformTop = _useSyncState4[0], setTransformTop = _useSyncState4[1];
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        0
    ]), _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState, 2), containerExcludeExtraSize = _useState2[0], setContainerExcludeExtraSize = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        0
    ]), _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState3, 2), tabContentSize = _useState4[0], setTabContentSize = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        0
    ]), _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState5, 2), addSize = _useState6[0], setAddSize = _useState6[1];
    var _useState7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        0
    ]), _useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState7, 2), operationSize = _useState8[0], setOperationSize = _useState8[1];
    var _useUpdateState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$hooks$2f$useUpdate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateState"])(new Map()), _useUpdateState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useUpdateState, 2), tabSizes = _useUpdateState2[0], setTabSizes = _useUpdateState2[1];
    var tabOffsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$hooks$2f$useOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tabs, tabSizes, tabContentSize[0]);
    // ========================== Unit =========================
    var containerExcludeExtraSizeValue = getUnitValue(containerExcludeExtraSize, tabPositionTopOrBottom);
    var tabContentSizeValue = getUnitValue(tabContentSize, tabPositionTopOrBottom);
    var addSizeValue = getUnitValue(addSize, tabPositionTopOrBottom);
    var operationSizeValue = getUnitValue(operationSize, tabPositionTopOrBottom);
    var needScroll = Math.floor(containerExcludeExtraSizeValue) < Math.floor(tabContentSizeValue + addSizeValue);
    var visibleTabContentValue = needScroll ? containerExcludeExtraSizeValue - operationSizeValue : containerExcludeExtraSizeValue - addSizeValue;
    // ========================== Util =========================
    var operationsHiddenClassName = "".concat(prefixCls, "-nav-operations-hidden");
    var transformMin = 0;
    var transformMax = 0;
    if (!tabPositionTopOrBottom) {
        transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
        transformMax = 0;
    } else if (rtl) {
        transformMin = 0;
        transformMax = Math.max(0, tabContentSizeValue - visibleTabContentValue);
    } else {
        transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
        transformMax = 0;
    }
    function alignInRange(value) {
        if (value < transformMin) {
            return transformMin;
        }
        if (value > transformMax) {
            return transformMax;
        }
        return value;
    }
    // ========================= Mobile ========================
    var touchMovingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _useState9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), _useState10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState9, 2), lockAnimation = _useState10[0], setLockAnimation = _useState10[1];
    function doLockAnimation() {
        setLockAnimation(Date.now());
    }
    function clearTouchMoving() {
        if (touchMovingRef.current) {
            clearTimeout(touchMovingRef.current);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$hooks$2f$useTouchMove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tabsWrapperRef, function(offsetX, offsetY) {
        function doMove(setState, offset) {
            setState(function(value) {
                var newValue = alignInRange(value + offset);
                return newValue;
            });
        }
        // Skip scroll if place is enough
        if (!needScroll) {
            return false;
        }
        if (tabPositionTopOrBottom) {
            doMove(setTransformLeft, offsetX);
        } else {
            doMove(setTransformTop, offsetY);
        }
        clearTouchMoving();
        doLockAnimation();
        return true;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        clearTouchMoving();
        if (lockAnimation) {
            touchMovingRef.current = setTimeout(function() {
                setLockAnimation(0);
            }, 100);
        }
        return clearTouchMoving;
    }, [
        lockAnimation
    ]);
    // ===================== Visible Range =====================
    // Render tab node & collect tab offset
    var _useVisibleRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$hooks$2f$useVisibleRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tabOffsets, // Container
    visibleTabContentValue, // Transform
    tabPositionTopOrBottom ? transformLeft : transformTop, // Tabs
    tabContentSizeValue, // Add
    addSizeValue, // Operation
    operationSizeValue, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props), {}, {
        tabs: tabs
    })), _useVisibleRange2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useVisibleRange, 2), visibleStart = _useVisibleRange2[0], visibleEnd = _useVisibleRange2[1];
    // ========================= Scroll ========================
    var scrollToTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : activeKey;
        var tabOffset = tabOffsets.get(key) || {
            width: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0
        };
        if (tabPositionTopOrBottom) {
            // ============ Align with top & bottom ============
            var newTransform = transformLeft;
            // RTL
            if (rtl) {
                if (tabOffset.right < transformLeft) {
                    newTransform = tabOffset.right;
                } else if (tabOffset.right + tabOffset.width > transformLeft + visibleTabContentValue) {
                    newTransform = tabOffset.right + tabOffset.width - visibleTabContentValue;
                }
            } else if (tabOffset.left < -transformLeft) {
                newTransform = -tabOffset.left;
            } else if (tabOffset.left + tabOffset.width > -transformLeft + visibleTabContentValue) {
                newTransform = -(tabOffset.left + tabOffset.width - visibleTabContentValue);
            }
            setTransformTop(0);
            setTransformLeft(alignInRange(newTransform));
        } else {
            // ============ Align with left & right ============
            var _newTransform = transformTop;
            if (tabOffset.top < -transformTop) {
                _newTransform = -tabOffset.top;
            } else if (tabOffset.top + tabOffset.height > -transformTop + visibleTabContentValue) {
                _newTransform = -(tabOffset.top + tabOffset.height - visibleTabContentValue);
            }
            setTransformLeft(0);
            setTransformTop(alignInRange(_newTransform));
        }
    });
    // ========================== Tab ==========================
    var tabNodeStyle = {};
    if (tabPosition === 'top' || tabPosition === 'bottom') {
        tabNodeStyle[rtl ? 'marginRight' : 'marginLeft'] = tabBarGutter;
    } else {
        tabNodeStyle.marginTop = tabBarGutter;
    }
    var tabNodes = tabs.map(function(tab, i) {
        var key = tab.key;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabNavList$2f$TabNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: id,
            prefixCls: prefixCls,
            key: key,
            tab: tab,
            style: i === 0 ? undefined : tabNodeStyle,
            closable: tab.closable,
            editable: editable,
            active: key === activeKey,
            renderWrapper: children,
            removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
            onClick: function onClick(e) {
                onTabClick(key, e);
            },
            onFocus: function onFocus() {
                scrollToTab(key);
                doLockAnimation();
                if (!tabsWrapperRef.current) {
                    return;
                }
                // Focus element will make scrollLeft change which we should reset back
                if (!rtl) {
                    tabsWrapperRef.current.scrollLeft = 0;
                }
                tabsWrapperRef.current.scrollTop = 0;
            }
        });
    });
    // Update buttons records
    var updateTabSizes = function updateTabSizes() {
        return setTabSizes(function() {
            var _tabListRef$current;
            var newSizes = new Map();
            var listRect = (_tabListRef$current = tabListRef.current) === null || _tabListRef$current === void 0 ? void 0 : _tabListRef$current.getBoundingClientRect();
            tabs.forEach(function(_ref2) {
                var _tabListRef$current2;
                var key = _ref2.key;
                var btnNode = (_tabListRef$current2 = tabListRef.current) === null || _tabListRef$current2 === void 0 ? void 0 : _tabListRef$current2.querySelector("[data-node-key=\"".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genDataNodeKey"])(key), "\"]"));
                if (btnNode) {
                    var _getTabSize = getTabSize(btnNode, listRect), _getTabSize2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_getTabSize, 4), width = _getTabSize2[0], height = _getTabSize2[1], left = _getTabSize2[2], top = _getTabSize2[3];
                    newSizes.set(key, {
                        width: width,
                        height: height,
                        left: left,
                        top: top
                    });
                }
            });
            return newSizes;
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        updateTabSizes();
    }, [
        tabs.map(function(tab) {
            return tab.key;
        }).join('_')
    ]);
    var onListHolderResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$hooks$2f$useUpdate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
        // Update wrapper records
        var containerSize = getSize(containerRef);
        var extraLeftSize = getSize(extraLeftRef);
        var extraRightSize = getSize(extraRightRef);
        setContainerExcludeExtraSize([
            containerSize[0] - extraLeftSize[0] - extraRightSize[0],
            containerSize[1] - extraLeftSize[1] - extraRightSize[1]
        ]);
        var newAddSize = getSize(innerAddButtonRef);
        setAddSize(newAddSize);
        var newOperationSize = getSize(operationsRef);
        setOperationSize(newOperationSize);
        // Which includes add button size
        var tabContentFullSize = getSize(tabListRef);
        setTabContentSize([
            tabContentFullSize[0] - newAddSize[0],
            tabContentFullSize[1] - newAddSize[1]
        ]);
        // Update buttons records
        updateTabSizes();
    });
    // ======================== Dropdown =======================
    var startHiddenTabs = tabs.slice(0, visibleStart);
    var endHiddenTabs = tabs.slice(visibleEnd + 1);
    var hiddenTabs = [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(startHiddenTabs), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(endHiddenTabs));
    // =================== Link & Operations ===================
    var activeTabOffset = tabOffsets.get(activeKey);
    var _useIndicator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$hooks$2f$useIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        activeTabOffset: activeTabOffset,
        horizontal: tabPositionTopOrBottom,
        indicator: indicator,
        rtl: rtl
    }), indicatorStyle = _useIndicator.style;
    // ========================= Effect ========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        scrollToTab();
    }, [
        activeKey,
        transformMin,
        transformMax,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(activeTabOffset),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(tabOffsets),
        tabPositionTopOrBottom
    ]);
    // Should recalculate when rtl changed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        onListHolderResize();
    // eslint-disable-next-line
    }, [
        rtl
    ]);
    // ========================= Render ========================
    var hasDropdown = !!hiddenTabs.length;
    var wrapPrefix = "".concat(prefixCls, "-nav-wrap");
    var pingLeft;
    var pingRight;
    var pingTop;
    var pingBottom;
    if (tabPositionTopOrBottom) {
        if (rtl) {
            pingRight = transformLeft > 0;
            pingLeft = transformLeft !== transformMax;
        } else {
            pingLeft = transformLeft < 0;
            pingRight = transformLeft !== transformMin;
        }
    } else {
        pingTop = transformTop < 0;
        pingBottom = transformTop !== transformMin;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onResize: onListHolderResize
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeRef"])(ref, containerRef),
        role: "tablist",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-nav"), className),
        style: style,
        onKeyDown: function onKeyDown() {
            // No need animation when use keyboard
            doLockAnimation();
        }
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabNavList$2f$ExtraContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: extraLeftRef,
        position: "left",
        extra: extra,
        prefixCls: prefixCls
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onResize: onListHolderResize
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(wrapPrefix, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(wrapPrefix, "-ping-left"), pingLeft), "".concat(wrapPrefix, "-ping-right"), pingRight), "".concat(wrapPrefix, "-ping-top"), pingTop), "".concat(wrapPrefix, "-ping-bottom"), pingBottom)),
        ref: tabsWrapperRef
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onResize: onListHolderResize
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        ref: tabListRef,
        className: "".concat(prefixCls, "-nav-list"),
        style: {
            transform: "translate(".concat(transformLeft, "px, ").concat(transformTop, "px)"),
            transition: lockAnimation ? 'none' : undefined
        }
    }, tabNodes, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabNavList$2f$AddButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: innerAddButtonRef,
        prefixCls: prefixCls,
        locale: locale,
        editable: editable,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, tabNodes.length === 0 ? undefined : tabNodeStyle), {}, {
            visibility: hasDropdown ? 'hidden' : null
        })
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-ink-bar"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-ink-bar-animated"), animated.inkBar)),
        style: indicatorStyle
    }))))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabNavList$2f$OperationNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
        ref: operationsRef,
        prefixCls: prefixCls,
        tabs: hiddenTabs,
        className: !hasDropdown && operationsHiddenClassName,
        tabMoving: !!lockAnimation
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabNavList$2f$ExtraContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: extraRightRef,
        position: "right",
        extra: extra,
        prefixCls: prefixCls
    })));
/* eslint-enable */ });
const __TURBOPACK__default__export__ = TabNavList;

})()),
"[project]/node_modules/rc-tabs/es/TabPanelList/TabPane.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
var TabPane = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var prefixCls = props.prefixCls, className = props.className, style = props.style, id = props.id, active = props.active, tabKey = props.tabKey, children = props.children;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        id: id && "".concat(id, "-panel-").concat(tabKey),
        role: "tabpanel",
        tabIndex: active ? 0 : -1,
        "aria-labelledby": id && "".concat(id, "-tab-").concat(tabKey),
        "aria-hidden": !active,
        style: style,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, active && "".concat(prefixCls, "-active"), className),
        ref: ref
    }, children);
});
if ("TURBOPACK compile-time truthy", 1) {
    TabPane.displayName = 'TabPane';
}
const __TURBOPACK__default__export__ = TabPane;

})()),
"[project]/node_modules/rc-tabs/es/TabNavList/Wrapper.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabNavList$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/TabNavList/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/TabContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabPanelList$2f$TabPane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/TabPanelList/TabPane.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
var _excluded = [
    "renderTabBar"
], _excluded2 = [
    "label",
    "key"
];
;
;
;
;
// We have to create a TabNavList components.
var TabNavListWrapper = function TabNavListWrapper(_ref) {
    var renderTabBar = _ref.renderTabBar, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), tabs = _React$useContext.tabs;
    if (renderTabBar) {
        var tabNavBarProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, restProps), {}, {
            // Legacy support. We do not use this actually
            panes: tabs.map(function(_ref2) {
                var label = _ref2.label, key = _ref2.key, restTabProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref2, _excluded2);
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabPanelList$2f$TabPane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    tab: label,
                    key: key,
                    tabKey: key
                }, restTabProps));
            })
        });
        return renderTabBar(tabNavBarProps, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabNavList$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabNavList$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], restProps);
};
if ("TURBOPACK compile-time truthy", 1) {
    TabNavListWrapper.displayName = 'TabNavListWrapper';
}
const __TURBOPACK__default__export__ = TabNavListWrapper;

})()),
"[project]/node_modules/rc-tabs/es/TabPanelList/index.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/rc-motion/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/rc-motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/TabContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabPanelList$2f$TabPane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/TabPanelList/TabPane.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
var _excluded = [
    "key",
    "forceRender",
    "style",
    "className",
    "destroyInactiveTabPane"
];
;
;
;
;
;
var TabPanelList = function TabPanelList(props) {
    var id = props.id, activeKey = props.activeKey, animated = props.animated, tabPosition = props.tabPosition, destroyInactiveTabPane = props.destroyInactiveTabPane;
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), prefixCls = _React$useContext.prefixCls, tabs = _React$useContext.tabs;
    var tabPaneAnimated = animated.tabPane;
    var tabPanePrefixCls = "".concat(prefixCls, "-tabpane");
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-content-holder"))
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-content"), "".concat(prefixCls, "-content-").concat(tabPosition), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-content-animated"), tabPaneAnimated))
    }, tabs.map(function(item) {
        var key = item.key, forceRender = item.forceRender, paneStyle = item.style, paneClassName = item.className, itemDestroyInactiveTabPane = item.destroyInactiveTabPane, restTabProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(item, _excluded);
        var active = key === activeKey;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            key: key,
            visible: active,
            forceRender: forceRender,
            removeOnLeave: !!(destroyInactiveTabPane || itemDestroyInactiveTabPane),
            leavedClassName: "".concat(tabPanePrefixCls, "-hidden")
        }, animated.tabPaneMotion), function(_ref, ref) {
            var motionStyle = _ref.style, motionClassName = _ref.className;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabPanelList$2f$TabPane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, restTabProps, {
                prefixCls: tabPanePrefixCls,
                id: id,
                tabKey: key,
                animated: tabPaneAnimated,
                active: active,
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, paneStyle), motionStyle),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(paneClassName, motionClassName),
                ref: ref
            }));
        });
    })));
};
const __TURBOPACK__default__export__ = TabPanelList;

})()),
"[project]/node_modules/rc-tabs/es/hooks/useAnimateConfig.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useAnimateConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function useAnimateConfig() {
    var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        inkBar: true,
        tabPane: false
    };
    var mergedAnimated;
    if (animated === false) {
        mergedAnimated = {
            inkBar: false,
            tabPane: false
        };
    } else if (animated === true) {
        mergedAnimated = {
            inkBar: true,
            tabPane: false
        };
    } else {
        mergedAnimated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            inkBar: true
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(animated) === 'object' ? animated : {});
    }
    // Enable tabPane animation if provide motion
    if (mergedAnimated.tabPaneMotion && mergedAnimated.tabPane === undefined) {
        mergedAnimated.tabPane = true;
    }
    if (!mergedAnimated.tabPaneMotion && mergedAnimated.tabPane) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, '`animated.tabPane` is true but `animated.tabPaneMotion` is not provided. Motion will not work.');
        }
        mergedAnimated.tabPane = false;
    }
    return mergedAnimated;
}

})()),
"[project]/node_modules/rc-tabs/es/Tabs.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useMergedState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/isMobile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/TabContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabNavList$2f$Wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/TabNavList/Wrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabPanelList$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/TabPanelList/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$hooks$2f$useAnimateConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/hooks/useAnimateConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
var _excluded = [
    "id",
    "prefixCls",
    "className",
    "items",
    "direction",
    "activeKey",
    "defaultActiveKey",
    "editable",
    "animated",
    "tabPosition",
    "tabBarGutter",
    "tabBarStyle",
    "tabBarExtraContent",
    "locale",
    "more",
    "destroyInactiveTabPane",
    "renderTabBar",
    "onChange",
    "onTabClick",
    "onTabScroll",
    "getPopupContainer",
    "popupClassName",
    "indicator"
];
;
;
;
;
;
;
;
;
;
/**
 * Should added antd:
 * - type
 *
 * Removed:
 * - onNextClick
 * - onPrevClick
 * - keyboard
 */ // Used for accessibility
var uuid = 0;
var Tabs = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var id = props.id, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? 'rc-tabs' : _props$prefixCls, className = props.className, items = props.items, direction = props.direction, activeKey = props.activeKey, defaultActiveKey = props.defaultActiveKey, editable = props.editable, animated = props.animated, _props$tabPosition = props.tabPosition, tabPosition = _props$tabPosition === void 0 ? 'top' : _props$tabPosition, tabBarGutter = props.tabBarGutter, tabBarStyle = props.tabBarStyle, tabBarExtraContent = props.tabBarExtraContent, locale = props.locale, more = props.more, destroyInactiveTabPane = props.destroyInactiveTabPane, renderTabBar = props.renderTabBar, onChange = props.onChange, onTabClick = props.onTabClick, onTabScroll = props.onTabScroll, getPopupContainer = props.getPopupContainer, popupClassName = props.popupClassName, indicator = props.indicator, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    var tabs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        return (items || []).filter(function(item) {
            return item && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(item) === 'object' && 'key' in item;
        });
    }, [
        items
    ]);
    var rtl = direction === 'rtl';
    var mergedAnimated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$hooks$2f$useAnimateConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(animated);
    // ======================== Mobile ========================
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState, 2), mobile = _useState2[0], setMobile = _useState2[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        // Only update on the client side
        setMobile((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])());
    }, []);
    // ====================== Active Key ======================
    var _useMergedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
        var _tabs$;
        return (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key;
    }, {
        value: activeKey,
        defaultValue: defaultActiveKey
    }), _useMergedState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useMergedState, 2), mergedActiveKey = _useMergedState2[0], setMergedActiveKey = _useMergedState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(function() {
        return tabs.findIndex(function(tab) {
            return tab.key === mergedActiveKey;
        });
    }), _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState3, 2), activeIndex = _useState4[0], setActiveIndex = _useState4[1];
    // Reset active key if not exist anymore
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        var newActiveIndex = tabs.findIndex(function(tab) {
            return tab.key === mergedActiveKey;
        });
        if (newActiveIndex === -1) {
            var _tabs$newActiveIndex;
            newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
            setMergedActiveKey((_tabs$newActiveIndex = tabs[newActiveIndex]) === null || _tabs$newActiveIndex === void 0 ? void 0 : _tabs$newActiveIndex.key);
        }
        setActiveIndex(newActiveIndex);
    }, [
        tabs.map(function(tab) {
            return tab.key;
        }).join('_'),
        mergedActiveKey,
        activeIndex
    ]);
    // ===================== Accessibility ====================
    var _useMergedState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(null, {
        value: id
    }), _useMergedState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useMergedState3, 2), mergedId = _useMergedState4[0], setMergedId = _useMergedState4[1];
    // Async generate id to avoid ssr mapping failed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (!id) {
            setMergedId("rc-tabs-".concat(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : uuid));
            uuid += 1;
        }
    }, []);
    // ======================== Events ========================
    function onInternalTabClick(key, e) {
        onTabClick === null || onTabClick === void 0 || onTabClick(key, e);
        var isActiveChanged = key !== mergedActiveKey;
        setMergedActiveKey(key);
        if (isActiveChanged) {
            onChange === null || onChange === void 0 || onChange(key);
        }
    }
    // ======================== Render ========================
    var sharedProps = {
        id: mergedId,
        activeKey: mergedActiveKey,
        animated: mergedAnimated,
        tabPosition: tabPosition,
        rtl: rtl,
        mobile: mobile
    };
    var tabNavBarProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, sharedProps), {}, {
        editable: editable,
        locale: locale,
        more: more,
        tabBarGutter: tabBarGutter,
        onTabClick: onInternalTabClick,
        onTabScroll: onTabScroll,
        extra: tabBarExtraContent,
        style: tabBarStyle,
        panes: null,
        getPopupContainer: getPopupContainer,
        popupClassName: popupClassName,
        indicator: indicator
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: {
            tabs: tabs,
            prefixCls: prefixCls
        }
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        id: id,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, "".concat(prefixCls, "-").concat(tabPosition), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-mobile"), mobile), "".concat(prefixCls, "-editable"), editable), "".concat(prefixCls, "-rtl"), rtl), className)
    }, restProps), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabNavList$2f$Wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, tabNavBarProps, {
        renderTabBar: renderTabBar
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$TabPanelList$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        destroyInactiveTabPane: destroyInactiveTabPane
    }, sharedProps, {
        animated: mergedAnimated
    }))));
});
if ("TURBOPACK compile-time truthy", 1) {
    Tabs.displayName = 'Tabs';
}
const __TURBOPACK__default__export__ = Tabs;

})()),
"[project]/node_modules/rc-tabs/es/index.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tabs/es/Tabs.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tabs$2f$es$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];

})()),
}]);

//# sourceMappingURL=08b5e_rc-tabs_es_eb5572._.js.map