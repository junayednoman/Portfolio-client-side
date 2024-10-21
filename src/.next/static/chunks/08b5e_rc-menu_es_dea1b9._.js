(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/08b5e_rc-menu_es_dea1b9._.js", {

"[project]/node_modules/rc-menu/es/context/IdContext.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "IdContext": ()=>IdContext,
    "getMenuId": ()=>getMenuId,
    "useMenuId": ()=>useMenuId
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var IdContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
function getMenuId(uuid, eventKey) {
    if (uuid === undefined) {
        return null;
    }
    return "".concat(uuid, "-").concat(eventKey);
}
function useMenuId(eventKey) {
    var id = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(IdContext);
    return getMenuId(id, eventKey);
}

})()),
"[project]/node_modules/rc-menu/es/context/MenuContext.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MenuContext": ()=>MenuContext,
    "default": ()=>InheritableContextProvider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useMemo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/isEqual.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
var _excluded = [
    "children",
    "locked"
];
;
;
;
var MenuContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
function mergeProps(origin, target) {
    var clone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, origin);
    Object.keys(target).forEach(function(key) {
        var value = target[key];
        if (value !== undefined) {
            clone[key] = value;
        }
    });
    return clone;
}
function InheritableContextProvider(_ref) {
    var children = _ref.children, locked = _ref.locked, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
    var context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(MenuContext);
    var inheritableContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
        return mergeProps(context, restProps);
    }, [
        context,
        restProps
    ], function(prev, next) {
        return !locked && (prev[0] !== next[0] || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prev[1], next[1], true));
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(MenuContext.Provider, {
        value: inheritableContext
    }, children);
}

})()),
"[project]/node_modules/rc-menu/es/context/PathContext.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PathRegisterContext": ()=>PathRegisterContext,
    "PathTrackerContext": ()=>PathTrackerContext,
    "PathUserContext": ()=>PathUserContext,
    "useFullPath": ()=>useFullPath,
    "useMeasure": ()=>useMeasure
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
var EmptyList = [];
var PathRegisterContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
function useMeasure() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(PathRegisterContext);
}
var PathTrackerContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(EmptyList);
function useFullPath(eventKey) {
    var parentKeyPath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(PathTrackerContext);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        return eventKey !== undefined ? [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(parentKeyPath), [
            eventKey
        ]) : parentKeyPath;
    }, [
        parentKeyPath,
        eventKey
    ]);
}
var PathUserContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);

})()),
"[project]/node_modules/rc-menu/es/context/PrivateContext.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var PrivateContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext({});
const __TURBOPACK__default__export__ = PrivateContext;

})()),
"[project]/node_modules/rc-menu/es/hooks/useAccessibility.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getFocusableElements": ()=>getFocusableElements,
    "refreshElements": ()=>refreshElements,
    "useAccessibility": ()=>useAccessibility
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/Dom/focus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/KeyCode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/raf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$IdContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/IdContext.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
// destruct to reduce minify size
var LEFT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LEFT, RIGHT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RIGHT, UP = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].UP, DOWN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DOWN, ENTER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ENTER, ESC = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ESC, HOME = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].HOME, END = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].END;
var ArrowKeys = [
    UP,
    DOWN,
    LEFT,
    RIGHT
];
function getOffset(mode, isRootLevel, isRtl, which) {
    var _offsets;
    var prev = 'prev';
    var next = 'next';
    var children = 'children';
    var parent = 'parent';
    // Inline enter is special that we use unique operation
    if (mode === 'inline' && which === ENTER) {
        return {
            inlineTrigger: true
        };
    }
    var inline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, UP, prev), DOWN, next);
    var horizontal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, LEFT, isRtl ? next : prev), RIGHT, isRtl ? prev : next), DOWN, children), ENTER, children);
    var vertical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, UP, prev), DOWN, next), ENTER, children), ESC, parent), LEFT, isRtl ? children : parent), RIGHT, isRtl ? parent : children);
    var offsets = {
        inline: inline,
        horizontal: horizontal,
        vertical: vertical,
        inlineSub: inline,
        horizontalSub: vertical,
        verticalSub: vertical
    };
    var type = (_offsets = offsets["".concat(mode).concat(isRootLevel ? '' : 'Sub')]) === null || _offsets === void 0 ? void 0 : _offsets[which];
    switch(type){
        case prev:
            return {
                offset: -1,
                sibling: true
            };
        case next:
            return {
                offset: 1,
                sibling: true
            };
        case parent:
            return {
                offset: -1,
                sibling: false
            };
        case children:
            return {
                offset: 1,
                sibling: false
            };
        default:
            return null;
    }
}
function findContainerUL(element) {
    var current = element;
    while(current){
        if (current.getAttribute('data-menu-list')) {
            return current;
        }
        current = current.parentElement;
    }
    // Normally should not reach this line
    /* istanbul ignore next */ return null;
}
/**
 * Find focused element within element set provided
 */ function getFocusElement(activeElement, elements) {
    var current = activeElement || document.activeElement;
    while(current){
        if (elements.has(current)) {
            return current;
        }
        current = current.parentElement;
    }
    return null;
}
function getFocusableElements(container, elements) {
    var list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusNodeList"])(container, true);
    return list.filter(function(ele) {
        return elements.has(ele);
    });
}
function getNextFocusElement(parentQueryContainer, elements, focusMenuElement) {
    var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    // Key on the menu item will not get validate parent container
    if (!parentQueryContainer) {
        return null;
    }
    // List current level menu item elements
    var sameLevelFocusableMenuElementList = getFocusableElements(parentQueryContainer, elements);
    // Find next focus index
    var count = sameLevelFocusableMenuElementList.length;
    var focusIndex = sameLevelFocusableMenuElementList.findIndex(function(ele) {
        return focusMenuElement === ele;
    });
    if (offset < 0) {
        if (focusIndex === -1) {
            focusIndex = count - 1;
        } else {
            focusIndex -= 1;
        }
    } else if (offset > 0) {
        focusIndex += 1;
    }
    focusIndex = (focusIndex + count) % count;
    // Focus menu item
    return sameLevelFocusableMenuElementList[focusIndex];
}
var refreshElements = function refreshElements(keys, id) {
    var elements = new Set();
    var key2element = new Map();
    var element2key = new Map();
    keys.forEach(function(key) {
        var element = document.querySelector("[data-menu-id='".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$IdContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMenuId"])(id, key), "']"));
        if (element) {
            elements.add(element);
            element2key.set(element, key);
            key2element.set(key, element);
        }
    });
    return {
        elements: elements,
        key2element: key2element,
        element2key: element2key
    };
};
function useAccessibility(mode, activeKey, isRtl, id, containerRef, getKeys, getKeyPath, triggerActiveKey, triggerAccessibilityOpen, originOnKeyDown) {
    var rafRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef();
    var activeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef();
    activeRef.current = activeKey;
    var cleanRaf = function cleanRaf() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cancel(rafRef.current);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        return function() {
            cleanRaf();
        };
    }, []);
    return function(e) {
        var which = e.which;
        if ([].concat(ArrowKeys, [
            ENTER,
            ESC,
            HOME,
            END
        ]).includes(which)) {
            var keys = getKeys();
            var refreshedElements = refreshElements(keys, id);
            var _refreshedElements = refreshedElements, elements = _refreshedElements.elements, key2element = _refreshedElements.key2element, element2key = _refreshedElements.element2key;
            // First we should find current focused MenuItem/SubMenu element
            var activeElement = key2element.get(activeKey);
            var focusMenuElement = getFocusElement(activeElement, elements);
            var focusMenuKey = element2key.get(focusMenuElement);
            var offsetObj = getOffset(mode, getKeyPath(focusMenuKey, true).length === 1, isRtl, which);
            // Some mode do not have fully arrow operation like inline
            if (!offsetObj && which !== HOME && which !== END) {
                return;
            }
            // Arrow prevent default to avoid page scroll
            if (ArrowKeys.includes(which) || [
                HOME,
                END
            ].includes(which)) {
                e.preventDefault();
            }
            var tryFocus = function tryFocus(menuElement) {
                if (menuElement) {
                    var focusTargetElement = menuElement;
                    // Focus to link instead of menu item if possible
                    var link = menuElement.querySelector('a');
                    if (link !== null && link !== void 0 && link.getAttribute('href')) {
                        focusTargetElement = link;
                    }
                    var targetKey = element2key.get(menuElement);
                    triggerActiveKey(targetKey);
                    /**
           * Do not `useEffect` here since `tryFocus` may trigger async
           * which makes React sync update the `activeKey`
           * that force render before `useRef` set the next activeKey
           */ cleanRaf();
                    rafRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
                        if (activeRef.current === targetKey) {
                            focusTargetElement.focus();
                        }
                    });
                }
            };
            if ([
                HOME,
                END
            ].includes(which) || offsetObj.sibling || !focusMenuElement) {
                // ========================== Sibling ==========================
                // Find walkable focus menu element container
                var parentQueryContainer;
                if (!focusMenuElement || mode === 'inline') {
                    parentQueryContainer = containerRef.current;
                } else {
                    parentQueryContainer = findContainerUL(focusMenuElement);
                }
                // Get next focus element
                var targetElement;
                var focusableElements = getFocusableElements(parentQueryContainer, elements);
                if (which === HOME) {
                    targetElement = focusableElements[0];
                } else if (which === END) {
                    targetElement = focusableElements[focusableElements.length - 1];
                } else {
                    targetElement = getNextFocusElement(parentQueryContainer, elements, focusMenuElement, offsetObj.offset);
                }
                // Focus menu item
                tryFocus(targetElement);
            // ======================= InlineTrigger =======================
            } else if (offsetObj.inlineTrigger) {
                // Inline trigger no need switch to sub menu item
                triggerAccessibilityOpen(focusMenuKey);
            // =========================== Level ===========================
            } else if (offsetObj.offset > 0) {
                triggerAccessibilityOpen(focusMenuKey, true);
                cleanRaf();
                rafRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
                    // Async should resync elements
                    refreshedElements = refreshElements(keys, id);
                    var controlId = focusMenuElement.getAttribute('aria-controls');
                    var subQueryContainer = document.getElementById(controlId);
                    // Get sub focusable menu item
                    var targetElement = getNextFocusElement(subQueryContainer, refreshedElements.elements);
                    // Focus menu item
                    tryFocus(targetElement);
                }, 5);
            } else if (offsetObj.offset < 0) {
                var keyPath = getKeyPath(focusMenuKey, true);
                var parentKey = keyPath[keyPath.length - 2];
                var parentMenuElement = key2element.get(parentKey);
                // Focus menu item
                triggerAccessibilityOpen(parentKey, false);
                tryFocus(parentMenuElement);
            }
        }
        // Pass origin key down event
        originOnKeyDown === null || originOnKeyDown === void 0 || originOnKeyDown(e);
    };
}

})()),
"[project]/node_modules/rc-menu/es/utils/timeUtil.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "nextSlice": ()=>nextSlice
});
function nextSlice(callback) {
    /* istanbul ignore next */ Promise.resolve().then(callback);
}

})()),
"[project]/node_modules/rc-menu/es/hooks/useKeyRecords.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "OVERFLOW_KEY": ()=>OVERFLOW_KEY,
    "default": ()=>useKeyRecords
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$timeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/utils/timeUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
var PATH_SPLIT = '__RC_UTIL_PATH_SPLIT__';
var getPathStr = function getPathStr(keyPath) {
    return keyPath.join(PATH_SPLIT);
};
var getPathKeys = function getPathKeys(keyPathStr) {
    return keyPathStr.split(PATH_SPLIT);
};
var OVERFLOW_KEY = 'rc-menu-more';
function useKeyRecords() {
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({}), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), internalForceUpdate = _React$useState2[1];
    var key2pathRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    var path2keyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    var _React$useState3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState([]), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), overflowKeys = _React$useState4[0], setOverflowKeys = _React$useState4[1];
    var updateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    var destroyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var forceUpdate = function forceUpdate() {
        if (!destroyRef.current) {
            internalForceUpdate({});
        }
    };
    var registerPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(key, keyPath) {
        // Warning for invalidate or duplicated `key`
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!key2pathRef.current.has(key), "Duplicated key '".concat(key, "' used in Menu by path [").concat(keyPath.join(' > '), "]"));
        }
        // Fill map
        var connectedPath = getPathStr(keyPath);
        path2keyRef.current.set(connectedPath, key);
        key2pathRef.current.set(key, connectedPath);
        updateRef.current += 1;
        var id = updateRef.current;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$timeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextSlice"])(function() {
            if (id === updateRef.current) {
                forceUpdate();
            }
        });
    }, []);
    var unregisterPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(key, keyPath) {
        var connectedPath = getPathStr(keyPath);
        path2keyRef.current.delete(connectedPath);
        key2pathRef.current.delete(key);
    }, []);
    var refreshOverflowKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(keys) {
        setOverflowKeys(keys);
    }, []);
    var getKeyPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(eventKey, includeOverflow) {
        var fullPath = key2pathRef.current.get(eventKey) || '';
        var keys = getPathKeys(fullPath);
        if (includeOverflow && overflowKeys.includes(keys[0])) {
            keys.unshift(OVERFLOW_KEY);
        }
        return keys;
    }, [
        overflowKeys
    ]);
    var isSubPathKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(pathKeys, eventKey) {
        return pathKeys.filter(function(item) {
            return item !== undefined;
        }).some(function(pathKey) {
            var pathKeyList = getKeyPath(pathKey, true);
            return pathKeyList.includes(eventKey);
        });
    }, [
        getKeyPath
    ]);
    var getKeys = function getKeys() {
        var keys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(key2pathRef.current.keys());
        if (overflowKeys.length) {
            keys.push(OVERFLOW_KEY);
        }
        return keys;
    };
    /**
   * Find current key related child path keys
   */ var getSubPathKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(key) {
        var connectedPath = "".concat(key2pathRef.current.get(key)).concat(PATH_SPLIT);
        var pathKeys = new Set();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(path2keyRef.current.keys()).forEach(function(pathKey) {
            if (pathKey.startsWith(connectedPath)) {
                pathKeys.add(path2keyRef.current.get(pathKey));
            }
        });
        return pathKeys;
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        return function() {
            destroyRef.current = true;
        };
    }, []);
    return {
        // Register
        registerPath: registerPath,
        unregisterPath: unregisterPath,
        refreshOverflowKeys: refreshOverflowKeys,
        // Util
        isSubPathKey: isSubPathKey,
        getKeyPath: getKeyPath,
        getKeys: getKeys,
        getSubPathKeys: getSubPathKeys
    };
}

})()),
"[project]/node_modules/rc-menu/es/hooks/useMemoCallback.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useMemoCallback
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function useMemoCallback(func) {
    var funRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(func);
    funRef.current = func;
    var callback = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback(function() {
        var _funRef$current;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return (_funRef$current = funRef.current) === null || _funRef$current === void 0 ? void 0 : _funRef$current.call.apply(_funRef$current, [
            funRef
        ].concat(args));
    }, []);
    return func ? callback : undefined;
}

})()),
"[project]/node_modules/rc-menu/es/hooks/useUUID.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useUUID
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useMergedState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
var uniquePrefix = Math.random().toFixed(5).toString().slice(2);
var internalId = 0;
function useUUID(id) {
    var _useMergedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(id, {
        value: id
    }), _useMergedState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useMergedState, 2), uuid = _useMergedState2[0], setUUID = _useMergedState2[1];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        internalId += 1;
        var newId = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "".concat(uniquePrefix, "-").concat(internalId);
        setUUID("rc-menu-uuid-".concat(newId));
    }, []);
    return uuid;
}

})()),
"[project]/node_modules/rc-menu/es/hooks/useActive.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useActive
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/MenuContext.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function useActive(eventKey, disabled, onMouseEnter, onMouseLeave) {
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"]), activeKey = _React$useContext.activeKey, onActive = _React$useContext.onActive, onInactive = _React$useContext.onInactive;
    var ret = {
        active: activeKey === eventKey
    };
    // Skip when disabled
    if (!disabled) {
        ret.onMouseEnter = function(domEvent) {
            onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter({
                key: eventKey,
                domEvent: domEvent
            });
            onActive(eventKey);
        };
        ret.onMouseLeave = function(domEvent) {
            onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave({
                key: eventKey,
                domEvent: domEvent
            });
            onInactive(eventKey);
        };
    }
    return ret;
}

})()),
"[project]/node_modules/rc-menu/es/hooks/useDirectionStyle.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useDirectionStyle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/MenuContext.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function useDirectionStyle(level) {
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"]), mode = _React$useContext.mode, rtl = _React$useContext.rtl, inlineIndent = _React$useContext.inlineIndent;
    if (mode !== 'inline') {
        return null;
    }
    var len = level;
    return rtl ? {
        paddingRight: len * inlineIndent
    } : {
        paddingLeft: len * inlineIndent
    };
}

})()),
"[project]/node_modules/rc-menu/es/Icon.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Icon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function Icon(_ref) {
    var icon = _ref.icon, props = _ref.props, children = _ref.children;
    var iconNode;
    if (icon === null || icon === false) {
        return null;
    }
    if (typeof icon === 'function') {
        iconNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(icon, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props));
    } else if (typeof icon !== "boolean") {
        // Compatible for origin definition
        iconNode = icon;
    }
    return iconNode || children || null;
}

})()),
"[project]/node_modules/rc-menu/es/utils/warnUtil.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "warnItemProp": ()=>warnItemProp
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/warning.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _excluded = [
    "item"
];
;
function warnItemProp(_ref) {
    var item = _ref.item, restInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
    Object.defineProperty(restInfo, 'item', {
        get: function get() {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.');
            return item;
        }
    });
    return restInfo;
}

})()),
"[project]/node_modules/rc-menu/es/MenuItem.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/createClass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createSuper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/createSuper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-overflow/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/KeyCode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/omit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$IdContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/IdContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/MenuContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/PathContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PrivateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/PrivateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useActive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/hooks/useActive.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useDirectionStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/hooks/useDirectionStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$warnUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/utils/warnUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
var _excluded = [
    "title",
    "attribute",
    "elementRef"
], _excluded2 = [
    "style",
    "className",
    "eventKey",
    "warnKey",
    "disabled",
    "itemIcon",
    "children",
    "role",
    "onMouseEnter",
    "onMouseLeave",
    "onClick",
    "onKeyDown",
    "onFocus"
], _excluded3 = [
    "active"
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
;
;
;
;
;
;
// Since Menu event provide the `info.item` which point to the MenuItem node instance.
// We have to use class component here.
// This should be removed from doc & api in future.
var LegacyMenuItem = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(LegacyMenuItem, _React$Component);
    var _super = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createSuper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(LegacyMenuItem);
    function LegacyMenuItem() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, LegacyMenuItem);
        return _super.apply(this, arguments);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(LegacyMenuItem, [
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, title = _this$props.title, attribute = _this$props.attribute, elementRef = _this$props.elementRef, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this$props, _excluded);
                // Here the props are eventually passed to the DOM element.
                // React does not recognize non-standard attributes.
                // Therefore, remove the props that is not used here.
                // ref: https://github.com/ant-design/ant-design/issues/41395
                var passedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(restProps, [
                    'eventKey',
                    'popupClassName',
                    'popupOffset',
                    'onTitleClick'
                ]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!attribute, '`attribute` of Menu.Item is deprecated. Please pass attribute directly.');
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, attribute, {
                    title: typeof title === 'string' ? title : undefined
                }, passedProps, {
                    ref: elementRef
                }));
            }
        }
    ]);
    return LegacyMenuItem;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Component);
/**
 * Real Menu Item component
 */ var InternalMenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var style = props.style, className = props.className, eventKey = props.eventKey, warnKey = props.warnKey, disabled = props.disabled, itemIcon = props.itemIcon, children = props.children, role = props.role, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onClick = props.onClick, onKeyDown = props.onKeyDown, onFocus = props.onFocus, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded2);
    var domDataId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$IdContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuId"])(eventKey);
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"]), prefixCls = _React$useContext.prefixCls, onItemClick = _React$useContext.onItemClick, contextDisabled = _React$useContext.disabled, overflowDisabled = _React$useContext.overflowDisabled, contextItemIcon = _React$useContext.itemIcon, selectedKeys = _React$useContext.selectedKeys, onActive = _React$useContext.onActive;
    var _React$useContext2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PrivateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), _internalRenderMenuItem = _React$useContext2._internalRenderMenuItem;
    var itemCls = "".concat(prefixCls, "-item");
    var legacyMenuItemRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef();
    var elementRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef();
    var mergedDisabled = contextDisabled || disabled;
    var mergedEleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeRef"])(ref, elementRef);
    var connectedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFullPath"])(eventKey);
    // ================================ Warn ================================
    if (("TURBOPACK compile-time value", "development") !== 'production' && warnKey) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'MenuItem should not leave undefined `key`.');
    }
    // ============================= Info =============================
    var getEventInfo = function getEventInfo(e) {
        return {
            key: eventKey,
            // Note: For legacy code is reversed which not like other antd component
            keyPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(connectedKeys).reverse(),
            item: legacyMenuItemRef.current,
            domEvent: e
        };
    };
    // ============================= Icon =============================
    var mergedItemIcon = itemIcon || contextItemIcon;
    // ============================ Active ============================
    var _useActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useActive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(eventKey, mergedDisabled, onMouseEnter, onMouseLeave), active = _useActive.active, activeProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useActive, _excluded3);
    // ============================ Select ============================
    var selected = selectedKeys.includes(eventKey);
    // ======================== DirectionStyle ========================
    var directionStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useDirectionStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(connectedKeys.length);
    // ============================ Events ============================
    var onInternalClick = function onInternalClick(e) {
        if (mergedDisabled) {
            return;
        }
        var info = getEventInfo(e);
        onClick === null || onClick === void 0 || onClick((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$warnUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnItemProp"])(info));
        onItemClick(info);
    };
    var onInternalKeyDown = function onInternalKeyDown(e) {
        onKeyDown === null || onKeyDown === void 0 || onKeyDown(e);
        if (e.which === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ENTER) {
            var info = getEventInfo(e);
            // Legacy. Key will also trigger click event
            onClick === null || onClick === void 0 || onClick((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$warnUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnItemProp"])(info));
            onItemClick(info);
        }
    };
    /**
   * Used for accessibility. Helper will focus element without key board.
   * We should manually trigger an active
   */ var onInternalFocus = function onInternalFocus(e) {
        onActive(eventKey);
        onFocus === null || onFocus === void 0 || onFocus(e);
    };
    // ============================ Render ============================
    var optionRoleProps = {};
    if (props.role === 'option') {
        optionRoleProps['aria-selected'] = selected;
    }
    var renderNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(LegacyMenuItem, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: legacyMenuItemRef,
        elementRef: mergedEleRef,
        role: role === null ? 'none' : role || 'menuitem',
        tabIndex: disabled ? null : -1,
        "data-menu-id": overflowDisabled && domDataId ? null : domDataId
    }, restProps, activeProps, optionRoleProps, {
        component: "li",
        "aria-disabled": disabled,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, directionStyle), style),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(itemCls, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(itemCls, "-active"), active), "".concat(itemCls, "-selected"), selected), "".concat(itemCls, "-disabled"), mergedDisabled), className),
        onClick: onInternalClick,
        onKeyDown: onInternalKeyDown,
        onFocus: onInternalFocus
    }), children, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        props: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props), {}, {
            isSelected: selected
        }),
        icon: mergedItemIcon
    }));
    if (_internalRenderMenuItem) {
        renderNode = _internalRenderMenuItem(renderNode, props, {
            selected: selected
        });
    }
    return renderNode;
});
function MenuItem(props, ref) {
    var eventKey = props.eventKey;
    // ==================== Record KeyPath ====================
    var measure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMeasure"])();
    var connectedKeyPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFullPath"])(eventKey);
    // eslint-disable-next-line consistent-return
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        if (measure) {
            measure.registerPath(eventKey, connectedKeyPath);
            return function() {
                measure.unregisterPath(eventKey, connectedKeyPath);
            };
        }
    }, [
        connectedKeyPath
    ]);
    if (measure) {
        return null;
    }
    // ======================== Render ========================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(InternalMenuItem, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref
    }));
}
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(MenuItem);

})()),
"[project]/node_modules/rc-menu/es/SubMenu/SubMenuList.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/MenuContext.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
var _excluded = [
    "className",
    "children"
];
;
;
;
var InternalSubMenuList = function InternalSubMenuList(_ref, ref) {
    var className = _ref.className, children = _ref.children, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"]), prefixCls = _React$useContext.prefixCls, mode = _React$useContext.mode, rtl = _React$useContext.rtl;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("ul", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rtl && "".concat(prefixCls, "-rtl"), "".concat(prefixCls, "-sub"), "".concat(prefixCls, "-").concat(mode === 'inline' ? 'inline' : 'vertical'), className),
        role: "menu"
    }, restProps, {
        "data-menu-list": true,
        ref: ref
    }), children);
};
var SubMenuList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(InternalSubMenuList);
SubMenuList.displayName = 'SubMenuList';
const __TURBOPACK__default__export__ = SubMenuList;

})()),
"[project]/node_modules/rc-menu/es/utils/commonUtil.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseChildren": ()=>parseChildren
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/Children/toArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function parseChildren(children, keyPath) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(children).map(function(child, index) {
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(child)) {
            var _eventKey, _child$props;
            var key = child.key;
            var eventKey = (_eventKey = (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.eventKey) !== null && _eventKey !== void 0 ? _eventKey : key;
            var emptyKey = eventKey === null || eventKey === undefined;
            if (emptyKey) {
                eventKey = "tmp_key-".concat([].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(keyPath), [
                    index
                ]).join('-'));
            }
            var cloneProps = {
                key: eventKey,
                eventKey: eventKey
            };
            if (("TURBOPACK compile-time value", "development") !== 'production' && emptyKey) {
                cloneProps.warnKey = true;
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(child, cloneProps);
        }
        return child;
    });
}

})()),
"[project]/node_modules/rc-menu/es/placements.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "placements": ()=>placements,
    "placementsRtl": ()=>placementsRtl
});
var autoAdjustOverflow = {
    adjustX: 1,
    adjustY: 1
};
var placements = {
    topLeft: {
        points: [
            'bl',
            'tl'
        ],
        overflow: autoAdjustOverflow
    },
    topRight: {
        points: [
            'br',
            'tr'
        ],
        overflow: autoAdjustOverflow
    },
    bottomLeft: {
        points: [
            'tl',
            'bl'
        ],
        overflow: autoAdjustOverflow
    },
    bottomRight: {
        points: [
            'tr',
            'br'
        ],
        overflow: autoAdjustOverflow
    },
    leftTop: {
        points: [
            'tr',
            'tl'
        ],
        overflow: autoAdjustOverflow
    },
    leftBottom: {
        points: [
            'br',
            'bl'
        ],
        overflow: autoAdjustOverflow
    },
    rightTop: {
        points: [
            'tl',
            'tr'
        ],
        overflow: autoAdjustOverflow
    },
    rightBottom: {
        points: [
            'bl',
            'br'
        ],
        overflow: autoAdjustOverflow
    }
};
var placementsRtl = {
    topLeft: {
        points: [
            'bl',
            'tl'
        ],
        overflow: autoAdjustOverflow
    },
    topRight: {
        points: [
            'br',
            'tr'
        ],
        overflow: autoAdjustOverflow
    },
    bottomLeft: {
        points: [
            'tl',
            'bl'
        ],
        overflow: autoAdjustOverflow
    },
    bottomRight: {
        points: [
            'tr',
            'br'
        ],
        overflow: autoAdjustOverflow
    },
    rightTop: {
        points: [
            'tr',
            'tl'
        ],
        overflow: autoAdjustOverflow
    },
    rightBottom: {
        points: [
            'br',
            'bl'
        ],
        overflow: autoAdjustOverflow
    },
    leftTop: {
        points: [
            'tl',
            'tr'
        ],
        overflow: autoAdjustOverflow
    },
    leftBottom: {
        points: [
            'bl',
            'br'
        ],
        overflow: autoAdjustOverflow
    }
};
const __TURBOPACK__default__export__ = placements;

})()),
"[project]/node_modules/rc-menu/es/utils/motionUtil.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getMotion": ()=>getMotion
});
function getMotion(mode, motion, defaultMotions) {
    if (motion) {
        return motion;
    }
    if (defaultMotions) {
        return defaultMotions[mode] || defaultMotions.other;
    }
    return undefined;
}

})()),
"[project]/node_modules/rc-menu/es/SubMenu/PopupTrigger.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>PopupTrigger
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@rc-component/trigger/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/raf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/MenuContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$placements$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/placements.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$motionUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/utils/motionUtil.js [app-client] (ecmascript)");
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
var popupPlacementMap = {
    horizontal: 'bottomLeft',
    vertical: 'rightTop',
    'vertical-left': 'rightTop',
    'vertical-right': 'leftTop'
};
function PopupTrigger(_ref) {
    var prefixCls = _ref.prefixCls, visible = _ref.visible, children = _ref.children, popup = _ref.popup, popupStyle = _ref.popupStyle, popupClassName = _ref.popupClassName, popupOffset = _ref.popupOffset, disabled = _ref.disabled, mode = _ref.mode, onVisibleChange = _ref.onVisibleChange;
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"]), getPopupContainer = _React$useContext.getPopupContainer, rtl = _React$useContext.rtl, subMenuOpenDelay = _React$useContext.subMenuOpenDelay, subMenuCloseDelay = _React$useContext.subMenuCloseDelay, builtinPlacements = _React$useContext.builtinPlacements, triggerSubMenuAction = _React$useContext.triggerSubMenuAction, forceSubMenuRender = _React$useContext.forceSubMenuRender, rootClassName = _React$useContext.rootClassName, motion = _React$useContext.motion, defaultMotions = _React$useContext.defaultMotions;
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(false), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), innerVisible = _React$useState2[0], setInnerVisible = _React$useState2[1];
    var placement = rtl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$placements$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placementsRtl"]), builtinPlacements) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$placements$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placements"]), builtinPlacements);
    var popupPlacement = popupPlacementMap[mode];
    var targetMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$motionUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMotion"])(mode, motion, defaultMotions);
    var targetMotionRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(targetMotion);
    if (mode !== 'inline') {
        /**
     * PopupTrigger is only used for vertical and horizontal types.
     * When collapsed is unfolded, the inline animation will destroy the vertical animation.
     */ targetMotionRef.current = targetMotion;
    }
    var mergedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, targetMotionRef.current), {}, {
        leavedClassName: "".concat(prefixCls, "-hidden"),
        removeOnLeave: false,
        motionAppear: true
    });
    // Delay to change visible
    var visibleRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        visibleRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
            setInnerVisible(visible);
        });
        return function() {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cancel(visibleRef.current);
        };
    }, [
        visible
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        popupClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-popup"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-rtl"), rtl), popupClassName, rootClassName),
        stretch: mode === 'horizontal' ? 'minWidth' : null,
        getPopupContainer: getPopupContainer,
        builtinPlacements: placement,
        popupPlacement: popupPlacement,
        popupVisible: innerVisible,
        popup: popup,
        popupStyle: popupStyle,
        popupAlign: popupOffset && {
            offset: popupOffset
        },
        action: disabled ? [] : [
            triggerSubMenuAction
        ],
        mouseEnterDelay: subMenuOpenDelay,
        mouseLeaveDelay: subMenuCloseDelay,
        onPopupVisibleChange: onVisibleChange,
        forceRender: forceSubMenuRender,
        popupMotion: mergedMotion,
        fresh: true
    }, children);
}

})()),
"[project]/node_modules/rc-menu/es/SubMenu/InlineSubMenuList.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>InlineSubMenuList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/rc-motion/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/rc-motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$motionUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/utils/motionUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/MenuContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$SubMenuList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/SubMenu/SubMenuList.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
function InlineSubMenuList(_ref) {
    var id = _ref.id, open = _ref.open, keyPath = _ref.keyPath, children = _ref.children;
    var fixedMode = 'inline';
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"]), prefixCls = _React$useContext.prefixCls, forceSubMenuRender = _React$useContext.forceSubMenuRender, motion = _React$useContext.motion, defaultMotions = _React$useContext.defaultMotions, mode = _React$useContext.mode;
    // Always use latest mode check
    var sameModeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    sameModeRef.current = mode === fixedMode;
    // We record `destroy` mark here since when mode change from `inline` to others.
    // The inline list should remove when motion end.
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(!sameModeRef.current), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), destroy = _React$useState2[0], setDestroy = _React$useState2[1];
    var mergedOpen = sameModeRef.current ? open : false;
    // ================================= Effect =================================
    // Reset destroy state when mode change back
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        if (sameModeRef.current) {
            setDestroy(false);
        }
    }, [
        mode
    ]);
    // ================================= Render =================================
    var mergedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$motionUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMotion"])(fixedMode, motion, defaultMotions));
    // No need appear since nest inlineCollapse changed
    if (keyPath.length > 1) {
        mergedMotion.motionAppear = false;
    }
    // Hide inline list when mode changed and motion end
    var originOnVisibleChanged = mergedMotion.onVisibleChanged;
    mergedMotion.onVisibleChanged = function(newVisible) {
        if (!sameModeRef.current && !newVisible) {
            setDestroy(true);
        }
        return originOnVisibleChanged === null || originOnVisibleChanged === void 0 ? void 0 : originOnVisibleChanged(newVisible);
    };
    if (destroy) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        mode: fixedMode,
        locked: !sameModeRef.current
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        visible: mergedOpen
    }, mergedMotion, {
        forceRender: forceSubMenuRender,
        removeOnLeave: false,
        leavedClassName: "".concat(prefixCls, "-hidden")
    }), function(_ref2) {
        var motionClassName = _ref2.className, motionStyle = _ref2.style;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$SubMenuList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: id,
            className: motionClassName,
            style: motionStyle
        }, children);
    }));
}

})()),
"[project]/node_modules/rc-menu/es/SubMenu/index.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-overflow/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$SubMenuList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/SubMenu/SubMenuList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/utils/commonUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/MenuContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useMemoCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/hooks/useMemoCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$PopupTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/SubMenu/PopupTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useActive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/hooks/useActive.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$warnUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/utils/warnUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useDirectionStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/hooks/useDirectionStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$InlineSubMenuList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/SubMenu/InlineSubMenuList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/PathContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$IdContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/IdContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PrivateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/PrivateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
var _excluded = [
    "style",
    "className",
    "title",
    "eventKey",
    "warnKey",
    "disabled",
    "internalPopupClose",
    "children",
    "itemIcon",
    "expandIcon",
    "popupClassName",
    "popupOffset",
    "popupStyle",
    "onClick",
    "onMouseEnter",
    "onMouseLeave",
    "onTitleClick",
    "onTitleMouseEnter",
    "onTitleMouseLeave"
], _excluded2 = [
    "active"
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
;
;
;
;
;
;
;
;
var InternalSubMenu = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var style = props.style, className = props.className, title = props.title, eventKey = props.eventKey, warnKey = props.warnKey, disabled = props.disabled, internalPopupClose = props.internalPopupClose, children = props.children, itemIcon = props.itemIcon, expandIcon = props.expandIcon, popupClassName = props.popupClassName, popupOffset = props.popupOffset, popupStyle = props.popupStyle, onClick = props.onClick, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onTitleClick = props.onTitleClick, onTitleMouseEnter = props.onTitleMouseEnter, onTitleMouseLeave = props.onTitleMouseLeave, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    var domDataId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$IdContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuId"])(eventKey);
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"]), prefixCls = _React$useContext.prefixCls, mode = _React$useContext.mode, openKeys = _React$useContext.openKeys, contextDisabled = _React$useContext.disabled, overflowDisabled = _React$useContext.overflowDisabled, activeKey = _React$useContext.activeKey, selectedKeys = _React$useContext.selectedKeys, contextItemIcon = _React$useContext.itemIcon, contextExpandIcon = _React$useContext.expandIcon, onItemClick = _React$useContext.onItemClick, onOpenChange = _React$useContext.onOpenChange, onActive = _React$useContext.onActive;
    var _React$useContext2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PrivateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), _internalRenderSubMenuItem = _React$useContext2._internalRenderSubMenuItem;
    var _React$useContext3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PathUserContext"]), isSubPathKey = _React$useContext3.isSubPathKey;
    var connectedPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFullPath"])();
    var subMenuPrefixCls = "".concat(prefixCls, "-submenu");
    var mergedDisabled = contextDisabled || disabled;
    var elementRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef();
    var popupRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef();
    // ================================ Warn ================================
    if (("TURBOPACK compile-time value", "development") !== 'production' && warnKey) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'SubMenu should not leave undefined `key`.');
    }
    // ================================ Icon ================================
    var mergedItemIcon = itemIcon !== null && itemIcon !== void 0 ? itemIcon : contextItemIcon;
    var mergedExpandIcon = expandIcon !== null && expandIcon !== void 0 ? expandIcon : contextExpandIcon;
    // ================================ Open ================================
    var originOpen = openKeys.includes(eventKey);
    var open = !overflowDisabled && originOpen;
    // =============================== Select ===============================
    var childrenSelected = isSubPathKey(selectedKeys, eventKey);
    // =============================== Active ===============================
    var _useActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useActive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(eventKey, mergedDisabled, onTitleMouseEnter, onTitleMouseLeave), active = _useActive.active, activeProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useActive, _excluded2);
    // Fallback of active check to avoid hover on menu title or disabled item
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(false), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), childrenActive = _React$useState2[0], setChildrenActive = _React$useState2[1];
    var triggerChildrenActive = function triggerChildrenActive(newActive) {
        if (!mergedDisabled) {
            setChildrenActive(newActive);
        }
    };
    var onInternalMouseEnter = function onInternalMouseEnter(domEvent) {
        triggerChildrenActive(true);
        onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter({
            key: eventKey,
            domEvent: domEvent
        });
    };
    var onInternalMouseLeave = function onInternalMouseLeave(domEvent) {
        triggerChildrenActive(false);
        onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave({
            key: eventKey,
            domEvent: domEvent
        });
    };
    var mergedActive = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        if (active) {
            return active;
        }
        if (mode !== 'inline') {
            return childrenActive || isSubPathKey([
                activeKey
            ], eventKey);
        }
        return false;
    }, [
        mode,
        active,
        activeKey,
        childrenActive,
        eventKey,
        isSubPathKey
    ]);
    // ========================== DirectionStyle ==========================
    var directionStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useDirectionStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(connectedPath.length);
    // =============================== Events ===============================
    // >>>> Title click
    var onInternalTitleClick = function onInternalTitleClick(e) {
        // Skip if disabled
        if (mergedDisabled) {
            return;
        }
        onTitleClick === null || onTitleClick === void 0 || onTitleClick({
            key: eventKey,
            domEvent: e
        });
        // Trigger open by click when mode is `inline`
        if (mode === 'inline') {
            onOpenChange(eventKey, !originOpen);
        }
    };
    // >>>> Context for children click
    var onMergedItemClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useMemoCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function(info) {
        onClick === null || onClick === void 0 || onClick((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$warnUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnItemProp"])(info));
        onItemClick(info);
    });
    // >>>>> Visible change
    var onPopupVisibleChange = function onPopupVisibleChange(newVisible) {
        if (mode !== 'inline') {
            onOpenChange(eventKey, newVisible);
        }
    };
    /**
   * Used for accessibility. Helper will focus element without key board.
   * We should manually trigger an active
   */ var onInternalFocus = function onInternalFocus() {
        onActive(eventKey);
    };
    // =============================== Render ===============================
    var popupId = domDataId && "".concat(domDataId, "-popup");
    // >>>>> Title
    var titleNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        role: "menuitem",
        style: directionStyle,
        className: "".concat(subMenuPrefixCls, "-title"),
        tabIndex: mergedDisabled ? null : -1,
        ref: elementRef,
        title: typeof title === 'string' ? title : null,
        "data-menu-id": overflowDisabled && domDataId ? null : domDataId,
        "aria-expanded": open,
        "aria-haspopup": true,
        "aria-controls": popupId,
        "aria-disabled": mergedDisabled,
        onClick: onInternalTitleClick,
        onFocus: onInternalFocus
    }, activeProps), title, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        icon: mode !== 'horizontal' ? mergedExpandIcon : undefined,
        props: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props), {}, {
            isOpen: open,
            // [Legacy] Not sure why need this mark
            isSubMenu: true
        })
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("i", {
        className: "".concat(subMenuPrefixCls, "-arrow")
    })));
    // Cache mode if it change to `inline` which do not have popup motion
    var triggerModeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(mode);
    if (mode !== 'inline' && connectedPath.length > 1) {
        triggerModeRef.current = 'vertical';
    } else {
        triggerModeRef.current = mode;
    }
    if (!overflowDisabled) {
        var triggerMode = triggerModeRef.current;
        // Still wrap with Trigger here since we need avoid react re-mount dom node
        // Which makes motion failed
        titleNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$PopupTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            mode: triggerMode,
            prefixCls: subMenuPrefixCls,
            visible: !internalPopupClose && open && mode !== 'inline',
            popupClassName: popupClassName,
            popupOffset: popupOffset,
            popupStyle: popupStyle,
            popup: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                mode: triggerMode === 'horizontal' ? 'vertical' : triggerMode
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$SubMenuList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: popupId,
                ref: popupRef
            }, children)),
            disabled: mergedDisabled,
            onVisibleChange: onPopupVisibleChange
        }, titleNode);
    }
    // >>>>> List node
    var listNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        role: "none"
    }, restProps, {
        component: "li",
        style: style,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(subMenuPrefixCls, "".concat(subMenuPrefixCls, "-").concat(mode), className, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(subMenuPrefixCls, "-open"), open), "".concat(subMenuPrefixCls, "-active"), mergedActive), "".concat(subMenuPrefixCls, "-selected"), childrenSelected), "".concat(subMenuPrefixCls, "-disabled"), mergedDisabled)),
        onMouseEnter: onInternalMouseEnter,
        onMouseLeave: onInternalMouseLeave
    }), titleNode, !overflowDisabled && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$InlineSubMenuList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: popupId,
        open: open,
        keyPath: connectedPath
    }, children));
    if (_internalRenderSubMenuItem) {
        listNode = _internalRenderSubMenuItem(listNode, props, {
            selected: childrenSelected,
            active: mergedActive,
            open: open,
            disabled: mergedDisabled
        });
    }
    // >>>>> Render
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        onItemClick: onMergedItemClick,
        mode: mode === 'horizontal' ? 'vertical' : mode,
        itemIcon: mergedItemIcon,
        expandIcon: mergedExpandIcon
    }, listNode);
});
var SubMenu = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var eventKey = props.eventKey, children = props.children;
    var connectedKeyPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFullPath"])(eventKey);
    var childList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseChildren"])(children, connectedKeyPath);
    // ==================== Record KeyPath ====================
    var measure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMeasure"])();
    // eslint-disable-next-line consistent-return
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        if (measure) {
            measure.registerPath(eventKey, connectedKeyPath);
            return function() {
                measure.unregisterPath(eventKey, connectedKeyPath);
            };
        }
    }, [
        connectedKeyPath
    ]);
    var renderNode;
    // ======================== Render ========================
    if (measure) {
        renderNode = childList;
    } else {
        renderNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(InternalSubMenu, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            ref: ref
        }, props), childList);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PathTrackerContext"].Provider, {
        value: connectedKeyPath
    }, renderNode);
});
if ("TURBOPACK compile-time truthy", 1) {
    SubMenu.displayName = 'SubMenu';
}
const __TURBOPACK__default__export__ = SubMenu;

})()),
"[project]/node_modules/rc-menu/es/Divider.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Divider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/MenuContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/PathContext.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
function Divider(_ref) {
    var className = _ref.className, style = _ref.style;
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"]), prefixCls = _React$useContext.prefixCls;
    var measure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMeasure"])();
    if (measure) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("li", {
        role: "separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-item-divider"), className),
        style: style
    });
}

})()),
"[project]/node_modules/rc-menu/es/MenuItemGroup.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/omit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/MenuContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/PathContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/utils/commonUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
var _excluded = [
    "className",
    "title",
    "eventKey",
    "children"
];
;
;
;
;
;
;
var InternalMenuItemGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var className = props.className, title = props.title, eventKey = props.eventKey, children = props.children, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"]), prefixCls = _React$useContext.prefixCls;
    var groupPrefixCls = "".concat(prefixCls, "-item-group");
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("li", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        role: "presentation"
    }, restProps, {
        onClick: function onClick(e) {
            return e.stopPropagation();
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(groupPrefixCls, className)
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        role: "presentation",
        className: "".concat(groupPrefixCls, "-title"),
        title: typeof title === 'string' ? title : undefined
    }, title), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("ul", {
        role: "group",
        className: "".concat(groupPrefixCls, "-list")
    }, children));
});
var MenuItemGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var eventKey = props.eventKey, children = props.children;
    var connectedKeyPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFullPath"])(eventKey);
    var childList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseChildren"])(children, connectedKeyPath);
    var measure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMeasure"])();
    if (measure) {
        return childList;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(InternalMenuItemGroup, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, [
        'warnKey'
    ])), childList);
});
if ("TURBOPACK compile-time truthy", 1) {
    MenuItemGroup.displayName = 'MenuItemGroup';
}
const __TURBOPACK__default__export__ = MenuItemGroup;

})()),
"[project]/node_modules/rc-menu/es/utils/nodeUtil.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseItems": ()=>parseItems
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/Divider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/MenuItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItemGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/MenuItemGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/SubMenu/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/utils/commonUtil.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
var _excluded = [
    "label",
    "children",
    "key",
    "type",
    "extra"
];
;
;
;
;
;
;
function convertItemsToNodes(list, components, prefixCls) {
    var MergedMenuItem = components.item, MergedMenuItemGroup = components.group, MergedSubMenu = components.submenu, MergedDivider = components.divider;
    return (list || []).map(function(opt, index) {
        if (opt && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(opt) === 'object') {
            var _ref = opt, label = _ref.label, children = _ref.children, key = _ref.key, type = _ref.type, extra = _ref.extra, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
            var mergedKey = key !== null && key !== void 0 ? key : "tmp-".concat(index);
            // MenuItemGroup & SubMenuItem
            if (children || type === 'group') {
                if (type === 'group') {
                    // Group
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(MergedMenuItemGroup, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                        key: mergedKey
                    }, restProps, {
                        title: label
                    }), convertItemsToNodes(children, components, prefixCls));
                }
                // Sub Menu
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(MergedSubMenu, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    key: mergedKey
                }, restProps, {
                    title: label
                }), convertItemsToNodes(children, components, prefixCls));
            }
            // MenuItem & Divider
            if (type === 'divider') {
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(MergedDivider, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    key: mergedKey
                }, restProps));
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(MergedMenuItem, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                key: mergedKey
            }, restProps), label, (!!extra || extra === 0) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
                className: "".concat(prefixCls, "-item-extra")
            }, extra));
        }
        return null;
    }).filter(function(opt) {
        return opt;
    });
}
function parseItems(children, items, keyPath, components, prefixCls) {
    var childNodes = children;
    var mergedComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        divider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        item: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        group: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItemGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        submenu: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }, components);
    if (items) {
        childNodes = convertItemsToNodes(items, mergedComponents, prefixCls);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseChildren"])(childNodes, keyPath);
}

})()),
"[project]/node_modules/rc-menu/es/Menu.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-overflow/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useMergedState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/isEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$IdContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/IdContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/MenuContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/PathContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PrivateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/PrivateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useAccessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/hooks/useAccessibility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useKeyRecords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/hooks/useKeyRecords.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useMemoCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/hooks/useMemoCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useUUID$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/hooks/useUUID.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/MenuItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/SubMenu/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$nodeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/utils/nodeUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$warnUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/utils/warnUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
var _excluded = [
    "prefixCls",
    "rootClassName",
    "style",
    "className",
    "tabIndex",
    "items",
    "children",
    "direction",
    "id",
    "mode",
    "inlineCollapsed",
    "disabled",
    "disabledOverflow",
    "subMenuOpenDelay",
    "subMenuCloseDelay",
    "forceSubMenuRender",
    "defaultOpenKeys",
    "openKeys",
    "activeKey",
    "defaultActiveFirst",
    "selectable",
    "multiple",
    "defaultSelectedKeys",
    "selectedKeys",
    "onSelect",
    "onDeselect",
    "inlineIndent",
    "motion",
    "defaultMotions",
    "triggerSubMenuAction",
    "builtinPlacements",
    "itemIcon",
    "expandIcon",
    "overflowedIndicator",
    "overflowedIndicatorPopupClassName",
    "getPopupContainer",
    "onClick",
    "onOpenChange",
    "onKeyDown",
    "openAnimation",
    "openTransitionName",
    "_internalRenderMenuItem",
    "_internalRenderSubMenuItem",
    "_internalComponents"
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
/**
 * Menu modify after refactor:
 * ## Add
 * - disabled
 *
 * ## Remove
 * - openTransitionName
 * - openAnimation
 * - onDestroy
 * - siderCollapsed: Seems antd do not use this prop (Need test in antd)
 * - collapsedWidth: Seems this logic should be handle by antd Layout.Sider
 */ // optimize for render
var EMPTY_LIST = [];
var Menu = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var _childList$;
    var _ref = props, _ref$prefixCls = _ref.prefixCls, prefixCls = _ref$prefixCls === void 0 ? 'rc-menu' : _ref$prefixCls, rootClassName = _ref.rootClassName, style = _ref.style, className = _ref.className, _ref$tabIndex = _ref.tabIndex, tabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex, items = _ref.items, children = _ref.children, direction = _ref.direction, id = _ref.id, _ref$mode = _ref.mode, mode = _ref$mode === void 0 ? 'vertical' : _ref$mode, inlineCollapsed = _ref.inlineCollapsed, disabled = _ref.disabled, disabledOverflow = _ref.disabledOverflow, _ref$subMenuOpenDelay = _ref.subMenuOpenDelay, subMenuOpenDelay = _ref$subMenuOpenDelay === void 0 ? 0.1 : _ref$subMenuOpenDelay, _ref$subMenuCloseDela = _ref.subMenuCloseDelay, subMenuCloseDelay = _ref$subMenuCloseDela === void 0 ? 0.1 : _ref$subMenuCloseDela, forceSubMenuRender = _ref.forceSubMenuRender, defaultOpenKeys = _ref.defaultOpenKeys, openKeys = _ref.openKeys, activeKey = _ref.activeKey, defaultActiveFirst = _ref.defaultActiveFirst, _ref$selectable = _ref.selectable, selectable = _ref$selectable === void 0 ? true : _ref$selectable, _ref$multiple = _ref.multiple, multiple = _ref$multiple === void 0 ? false : _ref$multiple, defaultSelectedKeys = _ref.defaultSelectedKeys, selectedKeys = _ref.selectedKeys, onSelect = _ref.onSelect, onDeselect = _ref.onDeselect, _ref$inlineIndent = _ref.inlineIndent, inlineIndent = _ref$inlineIndent === void 0 ? 24 : _ref$inlineIndent, motion = _ref.motion, defaultMotions = _ref.defaultMotions, _ref$triggerSubMenuAc = _ref.triggerSubMenuAction, triggerSubMenuAction = _ref$triggerSubMenuAc === void 0 ? 'hover' : _ref$triggerSubMenuAc, builtinPlacements = _ref.builtinPlacements, itemIcon = _ref.itemIcon, expandIcon = _ref.expandIcon, _ref$overflowedIndica = _ref.overflowedIndicator, overflowedIndicator = _ref$overflowedIndica === void 0 ? '...' : _ref$overflowedIndica, overflowedIndicatorPopupClassName = _ref.overflowedIndicatorPopupClassName, getPopupContainer = _ref.getPopupContainer, onClick = _ref.onClick, onOpenChange = _ref.onOpenChange, onKeyDown = _ref.onKeyDown, openAnimation = _ref.openAnimation, openTransitionName = _ref.openTransitionName, _internalRenderMenuItem = _ref._internalRenderMenuItem, _internalRenderSubMenuItem = _ref._internalRenderSubMenuItem, _internalComponents = _ref._internalComponents, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
    var _React$useMemo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$nodeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseItems"])(children, items, EMPTY_LIST, _internalComponents, prefixCls),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$nodeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseItems"])(children, items, EMPTY_LIST, {}, prefixCls)
        ];
    }, [
        children,
        items,
        _internalComponents
    ]), _React$useMemo2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useMemo, 2), childList = _React$useMemo2[0], measureChildList = _React$useMemo2[1];
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(false), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), mounted = _React$useState2[0], setMounted = _React$useState2[1];
    var containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef();
    var uuid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useUUID$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(id);
    var isRtl = direction === 'rtl';
    // ========================= Warn =========================
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!openAnimation && !openTransitionName, '`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.');
    }
    // ========================= Open =========================
    var _useMergedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(defaultOpenKeys, {
        value: openKeys,
        postState: function postState(keys) {
            return keys || EMPTY_LIST;
        }
    }), _useMergedState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useMergedState, 2), mergedOpenKeys = _useMergedState2[0], setMergedOpenKeys = _useMergedState2[1];
    // React 18 will merge mouse event which means we open key will not sync
    // ref: https://github.com/ant-design/ant-design/issues/38818
    var triggerOpenKeys = function triggerOpenKeys(keys) {
        var forceFlush = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        function doUpdate() {
            setMergedOpenKeys(keys);
            onOpenChange === null || onOpenChange === void 0 || onOpenChange(keys);
        }
        if (forceFlush) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(doUpdate);
        } else {
            doUpdate();
        }
    };
    // >>>>> Cache & Reset open keys when inlineCollapsed changed
    var _React$useState3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(mergedOpenKeys), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), inlineCacheOpenKeys = _React$useState4[0], setInlineCacheOpenKeys = _React$useState4[1];
    var mountRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    // ========================= Mode =========================
    var _React$useMemo3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        if ((mode === 'inline' || mode === 'vertical') && inlineCollapsed) {
            return [
                'vertical',
                inlineCollapsed
            ];
        }
        return [
            mode,
            false
        ];
    }, [
        mode,
        inlineCollapsed
    ]), _React$useMemo4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useMemo3, 2), mergedMode = _React$useMemo4[0], mergedInlineCollapsed = _React$useMemo4[1];
    var isInlineMode = mergedMode === 'inline';
    var _React$useState5 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(mergedMode), _React$useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState5, 2), internalMode = _React$useState6[0], setInternalMode = _React$useState6[1];
    var _React$useState7 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(mergedInlineCollapsed), _React$useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState7, 2), internalInlineCollapsed = _React$useState8[0], setInternalInlineCollapsed = _React$useState8[1];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        setInternalMode(mergedMode);
        setInternalInlineCollapsed(mergedInlineCollapsed);
        if (!mountRef.current) {
            return;
        }
        // Synchronously update MergedOpenKeys
        if (isInlineMode) {
            setMergedOpenKeys(inlineCacheOpenKeys);
        } else {
            // Trigger open event in case its in control
            triggerOpenKeys(EMPTY_LIST);
        }
    }, [
        mergedMode,
        mergedInlineCollapsed
    ]);
    // ====================== Responsive ======================
    var _React$useState9 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(0), _React$useState10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState9, 2), lastVisibleIndex = _React$useState10[0], setLastVisibleIndex = _React$useState10[1];
    var allVisible = lastVisibleIndex >= childList.length - 1 || internalMode !== 'horizontal' || disabledOverflow;
    // Cache
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        if (isInlineMode) {
            setInlineCacheOpenKeys(mergedOpenKeys);
        }
    }, [
        mergedOpenKeys
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        mountRef.current = true;
        return function() {
            mountRef.current = false;
        };
    }, []);
    // ========================= Path =========================
    var _useKeyRecords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useKeyRecords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(), registerPath = _useKeyRecords.registerPath, unregisterPath = _useKeyRecords.unregisterPath, refreshOverflowKeys = _useKeyRecords.refreshOverflowKeys, isSubPathKey = _useKeyRecords.isSubPathKey, getKeyPath = _useKeyRecords.getKeyPath, getKeys = _useKeyRecords.getKeys, getSubPathKeys = _useKeyRecords.getSubPathKeys;
    var registerPathContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        return {
            registerPath: registerPath,
            unregisterPath: unregisterPath
        };
    }, [
        registerPath,
        unregisterPath
    ]);
    var pathUserContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        return {
            isSubPathKey: isSubPathKey
        };
    }, [
        isSubPathKey
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        refreshOverflowKeys(allVisible ? EMPTY_LIST : childList.slice(lastVisibleIndex + 1).map(function(child) {
            return child.key;
        }));
    }, [
        lastVisibleIndex,
        allVisible
    ]);
    // ======================== Active ========================
    var _useMergedState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(activeKey || defaultActiveFirst && ((_childList$ = childList[0]) === null || _childList$ === void 0 ? void 0 : _childList$.key), {
        value: activeKey
    }), _useMergedState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useMergedState3, 2), mergedActiveKey = _useMergedState4[0], setMergedActiveKey = _useMergedState4[1];
    var onActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useMemoCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function(key) {
        setMergedActiveKey(key);
    });
    var onInactive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useMemoCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
        setMergedActiveKey(undefined);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, function() {
        return {
            list: containerRef.current,
            focus: function focus(options) {
                var _childList$find;
                var keys = getKeys();
                var _refreshElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useAccessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["refreshElements"])(keys, uuid), elements = _refreshElements.elements, key2element = _refreshElements.key2element, element2key = _refreshElements.element2key;
                var focusableElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useAccessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusableElements"])(containerRef.current, elements);
                var shouldFocusKey = mergedActiveKey !== null && mergedActiveKey !== void 0 ? mergedActiveKey : focusableElements[0] ? element2key.get(focusableElements[0]) : (_childList$find = childList.find(function(node) {
                    return !node.props.disabled;
                })) === null || _childList$find === void 0 ? void 0 : _childList$find.key;
                var elementToFocus = key2element.get(shouldFocusKey);
                if (shouldFocusKey && elementToFocus) {
                    var _elementToFocus$focus;
                    elementToFocus === null || elementToFocus === void 0 || (_elementToFocus$focus = elementToFocus.focus) === null || _elementToFocus$focus === void 0 || _elementToFocus$focus.call(elementToFocus, options);
                }
            }
        };
    });
    // ======================== Select ========================
    // >>>>> Select keys
    var _useMergedState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(defaultSelectedKeys || [], {
        value: selectedKeys,
        // Legacy convert key to array
        postState: function postState(keys) {
            if (Array.isArray(keys)) {
                return keys;
            }
            if (keys === null || keys === undefined) {
                return EMPTY_LIST;
            }
            return [
                keys
            ];
        }
    }), _useMergedState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useMergedState5, 2), mergedSelectKeys = _useMergedState6[0], setMergedSelectKeys = _useMergedState6[1];
    // >>>>> Trigger select
    var triggerSelection = function triggerSelection(info) {
        if (selectable) {
            // Insert or Remove
            var targetKey = info.key;
            var exist = mergedSelectKeys.includes(targetKey);
            var newSelectKeys;
            if (multiple) {
                if (exist) {
                    newSelectKeys = mergedSelectKeys.filter(function(key) {
                        return key !== targetKey;
                    });
                } else {
                    newSelectKeys = [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedSelectKeys), [
                        targetKey
                    ]);
                }
            } else {
                newSelectKeys = [
                    targetKey
                ];
            }
            setMergedSelectKeys(newSelectKeys);
            // Trigger event
            var selectInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, info), {}, {
                selectedKeys: newSelectKeys
            });
            if (exist) {
                onDeselect === null || onDeselect === void 0 || onDeselect(selectInfo);
            } else {
                onSelect === null || onSelect === void 0 || onSelect(selectInfo);
            }
        }
        // Whatever selectable, always close it
        if (!multiple && mergedOpenKeys.length && internalMode !== 'inline') {
            triggerOpenKeys(EMPTY_LIST);
        }
    };
    // ========================= Open =========================
    /**
   * Click for item. SubMenu do not have selection status
   */ var onInternalClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useMemoCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function(info) {
        onClick === null || onClick === void 0 || onClick((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$utils$2f$warnUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnItemProp"])(info));
        triggerSelection(info);
    });
    var onInternalOpenChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useMemoCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function(key, open) {
        var newOpenKeys = mergedOpenKeys.filter(function(k) {
            return k !== key;
        });
        if (open) {
            newOpenKeys.push(key);
        } else if (internalMode !== 'inline') {
            // We need find all related popup to close
            var subPathKeys = getSubPathKeys(key);
            newOpenKeys = newOpenKeys.filter(function(k) {
                return !subPathKeys.has(k);
            });
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedOpenKeys, newOpenKeys, true)) {
            triggerOpenKeys(newOpenKeys, true);
        }
    });
    // ==================== Accessibility =====================
    var triggerAccessibilityOpen = function triggerAccessibilityOpen(key, open) {
        var nextOpen = open !== null && open !== void 0 ? open : !mergedOpenKeys.includes(key);
        onInternalOpenChange(key, nextOpen);
    };
    var onInternalKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useAccessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccessibility"])(internalMode, mergedActiveKey, isRtl, uuid, containerRef, getKeys, getKeyPath, setMergedActiveKey, triggerAccessibilityOpen, onKeyDown);
    // ======================== Effect ========================
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        setMounted(true);
    }, []);
    // ======================= Context ========================
    var privateContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        return {
            _internalRenderMenuItem: _internalRenderMenuItem,
            _internalRenderSubMenuItem: _internalRenderSubMenuItem
        };
    }, [
        _internalRenderMenuItem,
        _internalRenderSubMenuItem
    ]);
    // ======================== Render ========================
    // >>>>> Children
    var wrappedChildList = internalMode !== 'horizontal' || disabledOverflow ? childList : // Need wrap for overflow dropdown that do not response for open
    childList.map(function(child, index) {
        return(/*#__PURE__*/ // Always wrap provider to avoid sub node re-mount
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            key: child.key,
            overflowDisabled: index > lastVisibleIndex
        }, child));
    });
    // >>>>> Container
    var container = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        id: id,
        ref: containerRef,
        prefixCls: "".concat(prefixCls, "-overflow"),
        component: "ul",
        itemComponent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, "".concat(prefixCls, "-root"), "".concat(prefixCls, "-").concat(internalMode), className, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-inline-collapsed"), internalInlineCollapsed), "".concat(prefixCls, "-rtl"), isRtl), rootClassName),
        dir: direction,
        style: style,
        role: "menu",
        tabIndex: tabIndex,
        data: wrappedChildList,
        renderRawItem: function renderRawItem(node) {
            return node;
        },
        renderRawRest: function renderRawRest(omitItems) {
            // We use origin list since wrapped list use context to prevent open
            var len = omitItems.length;
            var originOmitItems = len ? childList.slice(-len) : null;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                eventKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$hooks$2f$useKeyRecords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OVERFLOW_KEY"],
                title: overflowedIndicator,
                disabled: allVisible,
                internalPopupClose: len === 0,
                popupClassName: overflowedIndicatorPopupClassName
            }, originOmitItems);
        },
        maxCount: internalMode !== 'horizontal' || disabledOverflow ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].INVALIDATE : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RESPONSIVE,
        ssr: "full",
        "data-menu-list": true,
        onVisibleChange: function onVisibleChange(newLastIndex) {
            setLastVisibleIndex(newLastIndex);
        },
        onKeyDown: onInternalKeyDown
    }, restProps));
    // >>>>> Render
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PrivateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: privateContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$IdContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdContext"].Provider, {
        value: uuid
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        rootClassName: rootClassName,
        mode: internalMode,
        openKeys: mergedOpenKeys,
        rtl: isRtl,
        disabled: disabled,
        motion: mounted ? motion : null,
        defaultMotions: mounted ? defaultMotions : null,
        activeKey: mergedActiveKey,
        onActive: onActive,
        onInactive: onInactive,
        selectedKeys: mergedSelectKeys,
        inlineIndent: inlineIndent,
        subMenuOpenDelay: subMenuOpenDelay,
        subMenuCloseDelay: subMenuCloseDelay,
        forceSubMenuRender: forceSubMenuRender,
        builtinPlacements: builtinPlacements,
        triggerSubMenuAction: triggerSubMenuAction,
        getPopupContainer: getPopupContainer,
        itemIcon: itemIcon,
        expandIcon: expandIcon,
        onItemClick: onInternalClick,
        onOpenChange: onInternalOpenChange
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PathUserContext"].Provider, {
        value: pathUserContext
    }, container), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        style: {
            display: 'none'
        },
        "aria-hidden": true
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PathRegisterContext"].Provider, {
        value: registerPathContext
    }, measureChildList)))));
});
const __TURBOPACK__default__export__ = Menu;

})()),
"[project]/node_modules/rc-menu/es/index.js [app-client] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/Menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/MenuItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/SubMenu/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItemGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/MenuItemGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/Divider.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
var ExportMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ExportMenu.Item = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ExportMenu.SubMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ExportMenu.ItemGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItemGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ExportMenu.Divider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = ExportMenu;

})()),
"[project]/node_modules/rc-menu/es/index.js [app-client] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/Menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/MenuItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/SubMenu/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItemGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/MenuItemGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/context/PathContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/Divider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/index.js [app-client] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/rc-menu/es/MenuItemGroup.js [app-client] (ecmascript) <export default as ItemGroup>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "ItemGroup": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItemGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItemGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/MenuItemGroup.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/rc-menu/es/Divider.js [app-client] (ecmascript) <export default as Divider>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "Divider": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/Divider.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/rc-menu/es/MenuItem.js [app-client] (ecmascript) <export default as Item>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "Item": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/MenuItem.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/rc-menu/es/SubMenu/index.js [app-client] (ecmascript) <export default as SubMenu>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "SubMenu": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/SubMenu/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/rc-menu/es/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "MenuItem": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-menu/es/MenuItem.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
}]);

//# sourceMappingURL=08b5e_rc-menu_es_dea1b9._.js.map