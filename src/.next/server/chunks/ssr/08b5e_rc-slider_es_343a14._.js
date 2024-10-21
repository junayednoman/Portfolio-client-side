module.exports = {

"[project]/node_modules/rc-slider/es/util.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getDirectionStyle": ()=>getDirectionStyle,
    "getIndex": ()=>getIndex,
    "getOffset": ()=>getOffset
});
function getOffset(value, min, max) {
    return (value - min) / (max - min);
}
function getDirectionStyle(direction, value, min, max) {
    var offset = getOffset(value, min, max);
    var positionStyle = {};
    switch(direction){
        case 'rtl':
            positionStyle.right = "".concat(offset * 100, "%");
            positionStyle.transform = 'translateX(50%)';
            break;
        case 'btt':
            positionStyle.bottom = "".concat(offset * 100, "%");
            positionStyle.transform = 'translateY(50%)';
            break;
        case 'ttb':
            positionStyle.top = "".concat(offset * 100, "%");
            positionStyle.transform = 'translateY(-50%)';
            break;
        default:
            positionStyle.left = "".concat(offset * 100, "%");
            positionStyle.transform = 'translateX(-50%)';
            break;
    }
    return positionStyle;
}
function getIndex(value, index) {
    return Array.isArray(value) ? value[index] : value;
}

})()),
"[project]/node_modules/rc-slider/es/context.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "UnstableContext": ()=>UnstableContext,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var SliderContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext({
    min: 0,
    max: 0,
    direction: 'ltr',
    step: 1,
    includedStart: 0,
    includedEnd: 0,
    tabIndex: 0,
    keyboard: true,
    styles: {},
    classNames: {}
});
const __TURBOPACK__default__export__ = SliderContext;
var UnstableContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext({});

})()),
"[project]/node_modules/rc-slider/es/Handles/Handle.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/KeyCode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/util.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
var _excluded = [
    "prefixCls",
    "value",
    "valueIndex",
    "onStartMove",
    "onDelete",
    "style",
    "render",
    "dragging",
    "draggingDelete",
    "onOffsetChange",
    "onChangeComplete",
    "onFocus",
    "onMouseEnter"
];
;
;
;
;
;
var Handle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var prefixCls = props.prefixCls, value = props.value, valueIndex = props.valueIndex, onStartMove = props.onStartMove, onDelete = props.onDelete, style = props.style, render = props.render, dragging = props.dragging, draggingDelete = props.draggingDelete, onOffsetChange = props.onOffsetChange, onChangeComplete = props.onChangeComplete, onFocus = props.onFocus, onMouseEnter = props.onMouseEnter, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]), min = _React$useContext.min, max = _React$useContext.max, direction = _React$useContext.direction, disabled = _React$useContext.disabled, keyboard = _React$useContext.keyboard, range = _React$useContext.range, tabIndex = _React$useContext.tabIndex, ariaLabelForHandle = _React$useContext.ariaLabelForHandle, ariaLabelledByForHandle = _React$useContext.ariaLabelledByForHandle, ariaValueTextFormatterForHandle = _React$useContext.ariaValueTextFormatterForHandle, styles = _React$useContext.styles, classNames = _React$useContext.classNames;
    var handlePrefixCls = "".concat(prefixCls, "-handle");
    // ============================ Events ============================
    var onInternalStartMove = function onInternalStartMove(e) {
        if (!disabled) {
            onStartMove(e, valueIndex);
        }
    };
    var onInternalFocus = function onInternalFocus(e) {
        onFocus === null || onFocus === void 0 || onFocus(e, valueIndex);
    };
    var onInternalMouseEnter = function onInternalMouseEnter(e) {
        onMouseEnter(e, valueIndex);
    };
    // =========================== Keyboard ===========================
    var onKeyDown = function onKeyDown(e) {
        if (!disabled && keyboard) {
            var offset = null;
            // Change the value
            switch(e.which || e.keyCode){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].LEFT:
                    offset = direction === 'ltr' || direction === 'btt' ? -1 : 1;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].RIGHT:
                    offset = direction === 'ltr' || direction === 'btt' ? 1 : -1;
                    break;
                // Up is plus
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].UP:
                    offset = direction !== 'ttb' ? 1 : -1;
                    break;
                // Down is minus
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].DOWN:
                    offset = direction !== 'ttb' ? -1 : 1;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].HOME:
                    offset = 'min';
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].END:
                    offset = 'max';
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].PAGE_UP:
                    offset = 2;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].PAGE_DOWN:
                    offset = -2;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].BACKSPACE:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].DELETE:
                    onDelete(valueIndex);
                    break;
            }
            if (offset !== null) {
                e.preventDefault();
                onOffsetChange(offset, valueIndex);
            }
        }
    };
    var handleKeyUp = function handleKeyUp(e) {
        switch(e.which || e.keyCode){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].LEFT:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].RIGHT:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].UP:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].DOWN:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].HOME:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].END:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].PAGE_UP:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].PAGE_DOWN:
                onChangeComplete === null || onChangeComplete === void 0 || onChangeComplete();
                break;
        }
    };
    // ============================ Offset ============================
    var positionStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDirectionStyle"])(direction, value, min, max);
    // ============================ Render ============================
    var divProps = {};
    if (valueIndex !== null) {
        var _getIndex;
        divProps = {
            tabIndex: disabled ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIndex"])(tabIndex, valueIndex),
            role: 'slider',
            'aria-valuemin': min,
            'aria-valuemax': max,
            'aria-valuenow': value,
            'aria-disabled': disabled,
            'aria-label': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIndex"])(ariaLabelForHandle, valueIndex),
            'aria-labelledby': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIndex"])(ariaLabelledByForHandle, valueIndex),
            'aria-valuetext': (_getIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIndex"])(ariaValueTextFormatterForHandle, valueIndex)) === null || _getIndex === void 0 ? void 0 : _getIndex(value),
            'aria-orientation': direction === 'ltr' || direction === 'rtl' ? 'horizontal' : 'vertical',
            onMouseDown: onInternalStartMove,
            onTouchStart: onInternalStartMove,
            onFocus: onInternalFocus,
            onMouseEnter: onInternalMouseEnter,
            onKeyDown: onKeyDown,
            onKeyUp: handleKeyUp
        };
    }
    var handleNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(handlePrefixCls, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(handlePrefixCls, "-").concat(valueIndex + 1), valueIndex !== null && range), "".concat(handlePrefixCls, "-dragging"), dragging), "".concat(handlePrefixCls, "-dragging-delete"), draggingDelete), classNames.handle),
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, positionStyle), style), styles.handle)
    }, divProps, restProps));
    // Customize
    if (render) {
        handleNode = render(handleNode, {
            index: valueIndex,
            prefixCls: prefixCls,
            value: value,
            dragging: dragging,
            draggingDelete: draggingDelete
        });
    }
    return handleNode;
});
if ("TURBOPACK compile-time truthy", 1) {
    Handle.displayName = 'Handle';
}
const __TURBOPACK__default__export__ = Handle;

})()),
"[project]/node_modules/rc-slider/es/Handles/index.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Handles$2f$Handle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/Handles/Handle.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
var _excluded = [
    "prefixCls",
    "style",
    "onStartMove",
    "onOffsetChange",
    "values",
    "handleRender",
    "activeHandleRender",
    "draggingIndex",
    "draggingDelete",
    "onFocus"
];
;
;
;
;
var Handles = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var prefixCls = props.prefixCls, style = props.style, onStartMove = props.onStartMove, onOffsetChange = props.onOffsetChange, values = props.values, handleRender = props.handleRender, activeHandleRender = props.activeHandleRender, draggingIndex = props.draggingIndex, draggingDelete = props.draggingDelete, onFocus = props.onFocus, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    var handlesRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef({});
    // =========================== Active ===========================
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(false), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), activeVisible = _React$useState2[0], setActiveVisible = _React$useState2[1];
    var _React$useState3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(-1), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), activeIndex = _React$useState4[0], setActiveIndex = _React$useState4[1];
    var onActive = function onActive(index) {
        setActiveIndex(index);
        setActiveVisible(true);
    };
    var onHandleFocus = function onHandleFocus(e, index) {
        onActive(index);
        onFocus === null || onFocus === void 0 || onFocus(e);
    };
    var onHandleMouseEnter = function onHandleMouseEnter(e, index) {
        onActive(index);
    };
    // =========================== Render ===========================
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useImperativeHandle(ref, function() {
        return {
            focus: function focus(index) {
                var _handlesRef$current$i;
                (_handlesRef$current$i = handlesRef.current[index]) === null || _handlesRef$current$i === void 0 || _handlesRef$current$i.focus();
            },
            hideHelp: function hideHelp() {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"])(function() {
                    setActiveVisible(false);
                });
            }
        };
    });
    // =========================== Render ===========================
    // Handle Props
    var handleProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        prefixCls: prefixCls,
        onStartMove: onStartMove,
        onOffsetChange: onOffsetChange,
        render: handleRender,
        onFocus: onHandleFocus,
        onMouseEnter: onHandleMouseEnter
    }, restProps);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Fragment, null, values.map(function(value, index) {
        var dragging = draggingIndex === index;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Handles$2f$Handle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            ref: function ref(node) {
                if (!node) {
                    delete handlesRef.current[index];
                } else {
                    handlesRef.current[index] = node;
                }
            },
            dragging: dragging,
            draggingDelete: dragging && draggingDelete,
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIndex"])(style, index),
            key: index,
            value: value,
            valueIndex: index
        }, handleProps));
    }), activeHandleRender && activeVisible && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Handles$2f$Handle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        key: "a11y"
    }, handleProps, {
        value: values[activeIndex],
        valueIndex: null,
        dragging: draggingIndex !== -1,
        draggingDelete: draggingDelete,
        render: activeHandleRender,
        style: {
            pointerEvents: 'none'
        },
        tabIndex: null,
        "aria-hidden": true
    })));
});
if ("TURBOPACK compile-time truthy", 1) {
    Handles.displayName = 'Handles';
}
const __TURBOPACK__default__export__ = Handles;

})()),
"[project]/node_modules/rc-slider/es/Marks/Mark.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/util.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
var Mark = function Mark(props) {
    var prefixCls = props.prefixCls, style = props.style, children = props.children, value = props.value, _onClick = props.onClick;
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]), min = _React$useContext.min, max = _React$useContext.max, direction = _React$useContext.direction, includedStart = _React$useContext.includedStart, includedEnd = _React$useContext.includedEnd, included = _React$useContext.included;
    var textCls = "".concat(prefixCls, "-text");
    // ============================ Offset ============================
    var positionStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDirectionStyle"])(direction, value, min, max);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(textCls, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(textCls, "-active"), included && includedStart <= value && value <= includedEnd)),
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, positionStyle), style),
        onMouseDown: function onMouseDown(e) {
            e.stopPropagation();
        },
        onClick: function onClick() {
            _onClick(value);
        }
    }, children);
};
const __TURBOPACK__default__export__ = Mark;

})()),
"[project]/node_modules/rc-slider/es/Marks/index.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Marks$2f$Mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/Marks/Mark.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
var Marks = function Marks(props) {
    var prefixCls = props.prefixCls, marks = props.marks, onClick = props.onClick;
    var markPrefixCls = "".concat(prefixCls, "-mark");
    // Not render mark if empty
    if (!marks.length) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", {
        className: markPrefixCls
    }, marks.map(function(_ref) {
        var value = _ref.value, style = _ref.style, label = _ref.label;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Marks$2f$Mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            key: value,
            prefixCls: markPrefixCls,
            style: style,
            value: value,
            onClick: onClick
        }, label);
    }));
};
const __TURBOPACK__default__export__ = Marks;

})()),
"[project]/node_modules/rc-slider/es/Steps/Dot.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/util.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
var Dot = function Dot(props) {
    var prefixCls = props.prefixCls, value = props.value, style = props.style, activeStyle = props.activeStyle;
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]), min = _React$useContext.min, max = _React$useContext.max, direction = _React$useContext.direction, included = _React$useContext.included, includedStart = _React$useContext.includedStart, includedEnd = _React$useContext.includedEnd;
    var dotClassName = "".concat(prefixCls, "-dot");
    var active = included && includedStart <= value && value <= includedEnd;
    // ============================ Offset ============================
    var mergedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDirectionStyle"])(direction, value, min, max)), typeof style === 'function' ? style(value) : style);
    if (active) {
        mergedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, mergedStyle), typeof activeStyle === 'function' ? activeStyle(value) : activeStyle);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(dotClassName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(dotClassName, "-active"), active)),
        style: mergedStyle
    });
};
const __TURBOPACK__default__export__ = Dot;

})()),
"[project]/node_modules/rc-slider/es/Steps/index.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Steps$2f$Dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/Steps/Dot.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
var Steps = function Steps(props) {
    var prefixCls = props.prefixCls, marks = props.marks, dots = props.dots, style = props.style, activeStyle = props.activeStyle;
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]), min = _React$useContext.min, max = _React$useContext.max, step = _React$useContext.step;
    var stepDots = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        var dotSet = new Set();
        // Add marks
        marks.forEach(function(mark) {
            dotSet.add(mark.value);
        });
        // Fill dots
        if (dots && step !== null) {
            var current = min;
            while(current <= max){
                dotSet.add(current);
                current += step;
            }
        }
        return Array.from(dotSet);
    }, [
        min,
        max,
        step,
        dots,
        marks
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", {
        className: "".concat(prefixCls, "-step")
    }, stepDots.map(function(dotValue) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Steps$2f$Dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            prefixCls: prefixCls,
            key: dotValue,
            value: dotValue,
            style: style,
            activeStyle: activeStyle
        });
    }));
};
const __TURBOPACK__default__export__ = Steps;

})()),
"[project]/node_modules/rc-slider/es/Tracks/Track.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/util.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
var Track = function Track(props) {
    var prefixCls = props.prefixCls, style = props.style, start = props.start, end = props.end, index = props.index, onStartMove = props.onStartMove, replaceCls = props.replaceCls;
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]), direction = _React$useContext.direction, min = _React$useContext.min, max = _React$useContext.max, disabled = _React$useContext.disabled, range = _React$useContext.range, classNames = _React$useContext.classNames;
    var trackPrefixCls = "".concat(prefixCls, "-track");
    var offsetStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(start, min, max);
    var offsetEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(end, min, max);
    // ============================ Events ============================
    var onInternalStartMove = function onInternalStartMove(e) {
        if (!disabled && onStartMove) {
            onStartMove(e, -1);
        }
    };
    // ============================ Render ============================
    var positionStyle = {};
    switch(direction){
        case 'rtl':
            positionStyle.right = "".concat(offsetStart * 100, "%");
            positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
            break;
        case 'btt':
            positionStyle.bottom = "".concat(offsetStart * 100, "%");
            positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
            break;
        case 'ttb':
            positionStyle.top = "".concat(offsetStart * 100, "%");
            positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
            break;
        default:
            positionStyle.left = "".concat(offsetStart * 100, "%");
            positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
    }
    var className = replaceCls || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(trackPrefixCls, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(trackPrefixCls, "-").concat(index + 1), index !== null && range), "".concat(prefixCls, "-track-draggable"), onStartMove), classNames.track);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", {
        className: className,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, positionStyle), style),
        onMouseDown: onInternalStartMove,
        onTouchStart: onInternalStartMove
    });
};
const __TURBOPACK__default__export__ = Track;

})()),
"[project]/node_modules/rc-slider/es/Tracks/index.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Tracks$2f$Track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/Tracks/Track.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
var Tracks = function Tracks(props) {
    var prefixCls = props.prefixCls, style = props.style, values = props.values, startPoint = props.startPoint, onStartMove = props.onStartMove;
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]), included = _React$useContext.included, range = _React$useContext.range, min = _React$useContext.min, styles = _React$useContext.styles, classNames = _React$useContext.classNames;
    // =========================== List ===========================
    var trackList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        if (!range) {
            // null value do not have track
            if (values.length === 0) {
                return [];
            }
            var startValue = startPoint !== null && startPoint !== void 0 ? startPoint : min;
            var endValue = values[0];
            return [
                {
                    start: Math.min(startValue, endValue),
                    end: Math.max(startValue, endValue)
                }
            ];
        }
        // Multiple
        var list = [];
        for(var i = 0; i < values.length - 1; i += 1){
            list.push({
                start: values[i],
                end: values[i + 1]
            });
        }
        return list;
    }, [
        values,
        range,
        startPoint,
        min
    ]);
    if (!included) {
        return null;
    }
    // ========================== Render ==========================
    var tracksNode = classNames.tracks || styles.tracks ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Tracks$2f$Track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        index: null,
        prefixCls: prefixCls,
        start: trackList[0].start,
        end: trackList[trackList.length - 1].end,
        replaceCls: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classNames.tracks, "".concat(prefixCls, "-tracks")),
        style: styles.tracks
    }) : null;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Fragment, null, tracksNode, trackList.map(function(_ref, index) {
        var start = _ref.start, end = _ref.end;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Tracks$2f$Track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            index: index,
            prefixCls: prefixCls,
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIndex"])(style, index)), styles.track),
            start: start,
            end: end,
            key: index,
            onStartMove: onStartMove
        });
    }));
};
const __TURBOPACK__default__export__ = Tracks;

})()),
"[project]/node_modules/rc-slider/es/hooks/useDrag.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/rc-util/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useEvent.js [app-ssr] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/context.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
/** Drag to delete offset. It's a user experience number for dragging out */ var REMOVE_DIST = 130;
function getPosition(e) {
    var obj = 'targetTouches' in e ? e.targetTouches[0] : e;
    return {
        pageX: obj.pageX,
        pageY: obj.pageY
    };
}
function useDrag(containerRef, direction, rawValues, min, max, formatValue, triggerChange, finishChange, offsetValues, editable, minCount) {
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(null), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), draggingValue = _React$useState2[0], setDraggingValue = _React$useState2[1];
    var _React$useState3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(-1), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), draggingIndex = _React$useState4[0], setDraggingIndex = _React$useState4[1];
    var _React$useState5 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(false), _React$useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState5, 2), draggingDelete = _React$useState6[0], setDraggingDelete = _React$useState6[1];
    var _React$useState7 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(rawValues), _React$useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState7, 2), cacheValues = _React$useState8[0], setCacheValues = _React$useState8[1];
    var _React$useState9 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(rawValues), _React$useState10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState9, 2), originValues = _React$useState10[0], setOriginValues = _React$useState10[1];
    var mouseMoveEventRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(null);
    var mouseUpEventRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(null);
    var touchEventTargetRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(null);
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnstableContext"]), onDragStart = _React$useContext.onDragStart, onDragChange = _React$useContext.onDragChange;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useLayoutEffect(function() {
        if (draggingIndex === -1) {
            setCacheValues(rawValues);
        }
    }, [
        rawValues,
        draggingIndex
    ]);
    // Clean up event
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(function() {
        return function() {
            document.removeEventListener('mousemove', mouseMoveEventRef.current);
            document.removeEventListener('mouseup', mouseUpEventRef.current);
            if (touchEventTargetRef.current) {
                touchEventTargetRef.current.removeEventListener('touchmove', mouseMoveEventRef.current);
                touchEventTargetRef.current.removeEventListener('touchend', mouseUpEventRef.current);
            }
        };
    }, []);
    var flushValues = function flushValues(nextValues, nextValue, deleteMark) {
        // Perf: Only update state when value changed
        if (nextValue !== undefined) {
            setDraggingValue(nextValue);
        }
        setCacheValues(nextValues);
        var changeValues = nextValues;
        if (deleteMark) {
            changeValues = nextValues.filter(function(_, i) {
                return i !== draggingIndex;
            });
        }
        triggerChange(changeValues);
        if (onDragChange) {
            onDragChange({
                rawValues: nextValues,
                deleteIndex: deleteMark ? draggingIndex : -1,
                draggingIndex: draggingIndex,
                draggingValue: nextValue
            });
        }
    };
    var updateCacheValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])(function(valueIndex, offsetPercent, deleteMark) {
        if (valueIndex === -1) {
            // >>>> Dragging on the track
            var startValue = originValues[0];
            var endValue = originValues[originValues.length - 1];
            var maxStartOffset = min - startValue;
            var maxEndOffset = max - endValue;
            // Get valid offset
            var offset = offsetPercent * (max - min);
            offset = Math.max(offset, maxStartOffset);
            offset = Math.min(offset, maxEndOffset);
            // Use first value to revert back of valid offset (like steps marks)
            var formatStartValue = formatValue(startValue + offset);
            offset = formatStartValue - startValue;
            var cloneCacheValues = originValues.map(function(val) {
                return val + offset;
            });
            flushValues(cloneCacheValues);
        } else {
            // >>>> Dragging on the handle
            var offsetDist = (max - min) * offsetPercent;
            // Always start with the valueIndex origin value
            var cloneValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(cacheValues);
            cloneValues[valueIndex] = originValues[valueIndex];
            var next = offsetValues(cloneValues, offsetDist, valueIndex, 'dist');
            flushValues(next.values, next.value, deleteMark);
        }
    });
    var onStartMove = function onStartMove(e, valueIndex, startValues) {
        e.stopPropagation();
        // 如果是点击 track 触发的，需要传入变化后的初始值，而不能直接用 rawValues
        var initialValues = startValues || rawValues;
        var originValue = initialValues[valueIndex];
        setDraggingIndex(valueIndex);
        setDraggingValue(originValue);
        setOriginValues(initialValues);
        setCacheValues(initialValues);
        setDraggingDelete(false);
        var _getPosition = getPosition(e), startX = _getPosition.pageX, startY = _getPosition.pageY;
        // We declare it here since closure can't get outer latest value
        var deleteMark = false;
        // Internal trigger event
        if (onDragStart) {
            onDragStart({
                rawValues: initialValues,
                draggingIndex: valueIndex,
                draggingValue: originValue
            });
        }
        // Moving
        var onMouseMove = function onMouseMove(event) {
            event.preventDefault();
            var _getPosition2 = getPosition(event), moveX = _getPosition2.pageX, moveY = _getPosition2.pageY;
            var offsetX = moveX - startX;
            var offsetY = moveY - startY;
            var _containerRef$current = containerRef.current.getBoundingClientRect(), width = _containerRef$current.width, height = _containerRef$current.height;
            var offSetPercent;
            var removeDist;
            switch(direction){
                case 'btt':
                    offSetPercent = -offsetY / height;
                    removeDist = offsetX;
                    break;
                case 'ttb':
                    offSetPercent = offsetY / height;
                    removeDist = offsetX;
                    break;
                case 'rtl':
                    offSetPercent = -offsetX / width;
                    removeDist = offsetY;
                    break;
                default:
                    offSetPercent = offsetX / width;
                    removeDist = offsetY;
            }
            // Check if need mark remove
            deleteMark = editable ? Math.abs(removeDist) > REMOVE_DIST && minCount < cacheValues.length : false;
            setDraggingDelete(deleteMark);
            updateCacheValue(valueIndex, offSetPercent, deleteMark);
        };
        // End
        var onMouseUp = function onMouseUp(event) {
            event.preventDefault();
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
            if (touchEventTargetRef.current) {
                touchEventTargetRef.current.removeEventListener('touchmove', mouseMoveEventRef.current);
                touchEventTargetRef.current.removeEventListener('touchend', mouseUpEventRef.current);
            }
            mouseMoveEventRef.current = null;
            mouseUpEventRef.current = null;
            touchEventTargetRef.current = null;
            finishChange(deleteMark);
            setDraggingIndex(-1);
            setDraggingDelete(false);
        };
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onMouseMove);
        e.currentTarget.addEventListener('touchend', onMouseUp);
        e.currentTarget.addEventListener('touchmove', onMouseMove);
        mouseMoveEventRef.current = onMouseMove;
        mouseUpEventRef.current = onMouseUp;
        touchEventTargetRef.current = e.currentTarget;
    };
    // Only return cache value when it mapping with rawValues
    var returnValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        var sourceValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(rawValues).sort(function(a, b) {
            return a - b;
        });
        var targetValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(cacheValues).sort(function(a, b) {
            return a - b;
        });
        var counts = {};
        targetValues.forEach(function(val) {
            counts[val] = (counts[val] || 0) + 1;
        });
        sourceValues.forEach(function(val) {
            counts[val] = (counts[val] || 0) - 1;
        });
        var maxDiffCount = editable ? 1 : 0;
        var diffCount = Object.values(counts).reduce(function(prev, next) {
            return prev + Math.abs(next);
        }, 0);
        return diffCount <= maxDiffCount ? cacheValues : rawValues;
    }, [
        rawValues,
        cacheValues,
        editable
    ]);
    return [
        draggingIndex,
        draggingValue,
        draggingDelete,
        returnValues,
        onStartMove
    ];
}
const __TURBOPACK__default__export__ = useDrag;

})()),
"[project]/node_modules/rc-slider/es/hooks/useOffset.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useOffset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function useOffset(min, max, step, markList, allowCross, pushable) {
    var formatRangeValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useCallback(function(val) {
        return Math.max(min, Math.min(max, val));
    }, [
        min,
        max
    ]);
    var formatStepValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useCallback(function(val) {
        if (step !== null) {
            var stepValue = min + Math.round((formatRangeValue(val) - min) / step) * step;
            // Cut number in case to be like 0.30000000000000004
            var getDecimal = function getDecimal(num) {
                return (String(num).split('.')[1] || '').length;
            };
            var maxDecimal = Math.max(getDecimal(step), getDecimal(max), getDecimal(min));
            var fixedValue = Number(stepValue.toFixed(maxDecimal));
            return min <= fixedValue && fixedValue <= max ? fixedValue : null;
        }
        return null;
    }, [
        step,
        min,
        max,
        formatRangeValue
    ]);
    var formatValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useCallback(function(val) {
        var formatNextValue = formatRangeValue(val);
        // List align values
        var alignValues = markList.map(function(mark) {
            return mark.value;
        });
        if (step !== null) {
            alignValues.push(formatStepValue(val));
        }
        // min & max
        alignValues.push(min, max);
        // Align with marks
        var closeValue = alignValues[0];
        var closeDist = max - min;
        alignValues.forEach(function(alignValue) {
            var dist = Math.abs(formatNextValue - alignValue);
            if (dist <= closeDist) {
                closeValue = alignValue;
                closeDist = dist;
            }
        });
        return closeValue;
    }, [
        min,
        max,
        markList,
        step,
        formatRangeValue,
        formatStepValue
    ]);
    // ========================== Offset ==========================
    // Single Value
    var offsetValue = function offsetValue(values, offset, valueIndex) {
        var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'unit';
        if (typeof offset === 'number') {
            var nextValue;
            var originValue = values[valueIndex];
            // Only used for `dist` mode
            var targetDistValue = originValue + offset;
            // Compare next step value & mark value which is best match
            var potentialValues = [];
            markList.forEach(function(mark) {
                potentialValues.push(mark.value);
            });
            // Min & Max
            potentialValues.push(min, max);
            // In case origin value is align with mark but not with step
            potentialValues.push(formatStepValue(originValue));
            // Put offset step value also
            var sign = offset > 0 ? 1 : -1;
            if (mode === 'unit') {
                potentialValues.push(formatStepValue(originValue + sign * step));
            } else {
                potentialValues.push(formatStepValue(targetDistValue));
            }
            // Find close one
            potentialValues = potentialValues.filter(function(val) {
                return val !== null;
            })// Remove reverse value
            .filter(function(val) {
                return offset < 0 ? val <= originValue : val >= originValue;
            });
            if (mode === 'unit') {
                // `unit` mode can not contain itself
                potentialValues = potentialValues.filter(function(val) {
                    return val !== originValue;
                });
            }
            var compareValue = mode === 'unit' ? originValue : targetDistValue;
            nextValue = potentialValues[0];
            var valueDist = Math.abs(nextValue - compareValue);
            potentialValues.forEach(function(potentialValue) {
                var dist = Math.abs(potentialValue - compareValue);
                if (dist < valueDist) {
                    nextValue = potentialValue;
                    valueDist = dist;
                }
            });
            // Out of range will back to range
            if (nextValue === undefined) {
                return offset < 0 ? min : max;
            }
            // `dist` mode
            if (mode === 'dist') {
                return nextValue;
            }
            // `unit` mode may need another round
            if (Math.abs(offset) > 1) {
                var cloneValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(values);
                cloneValues[valueIndex] = nextValue;
                return offsetValue(cloneValues, offset - sign, valueIndex, mode);
            }
            return nextValue;
        } else if (offset === 'min') {
            return min;
        } else if (offset === 'max') {
            return max;
        }
    };
    /** Same as `offsetValue` but return `changed` mark to tell value changed */ var offsetChangedValue = function offsetChangedValue(values, offset, valueIndex) {
        var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'unit';
        var originValue = values[valueIndex];
        var nextValue = offsetValue(values, offset, valueIndex, mode);
        return {
            value: nextValue,
            changed: nextValue !== originValue
        };
    };
    var needPush = function needPush(dist) {
        return pushable === null && dist === 0 || typeof pushable === 'number' && dist < pushable;
    };
    // Values
    var offsetValues = function offsetValues(values, offset, valueIndex) {
        var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'unit';
        var nextValues = values.map(formatValue);
        var originValue = nextValues[valueIndex];
        var nextValue = offsetValue(nextValues, offset, valueIndex, mode);
        nextValues[valueIndex] = nextValue;
        if (allowCross === false) {
            // >>>>> Allow Cross
            var pushNum = pushable || 0;
            // ============ AllowCross ===============
            if (valueIndex > 0 && nextValues[valueIndex - 1] !== originValue) {
                nextValues[valueIndex] = Math.max(nextValues[valueIndex], nextValues[valueIndex - 1] + pushNum);
            }
            if (valueIndex < nextValues.length - 1 && nextValues[valueIndex + 1] !== originValue) {
                nextValues[valueIndex] = Math.min(nextValues[valueIndex], nextValues[valueIndex + 1] - pushNum);
            }
        } else if (typeof pushable === 'number' || pushable === null) {
            // >>>>> Pushable
            // =============== Push ==================
            // >>>>>> Basic push
            // End values
            for(var i = valueIndex + 1; i < nextValues.length; i += 1){
                var changed = true;
                while(needPush(nextValues[i] - nextValues[i - 1]) && changed){
                    var _offsetChangedValue = offsetChangedValue(nextValues, 1, i);
                    nextValues[i] = _offsetChangedValue.value;
                    changed = _offsetChangedValue.changed;
                }
            }
            // Start values
            for(var _i = valueIndex; _i > 0; _i -= 1){
                var _changed = true;
                while(needPush(nextValues[_i] - nextValues[_i - 1]) && _changed){
                    var _offsetChangedValue2 = offsetChangedValue(nextValues, -1, _i - 1);
                    nextValues[_i - 1] = _offsetChangedValue2.value;
                    _changed = _offsetChangedValue2.changed;
                }
            }
            // >>>>> Revert back to safe push range
            // End to Start
            for(var _i2 = nextValues.length - 1; _i2 > 0; _i2 -= 1){
                var _changed2 = true;
                while(needPush(nextValues[_i2] - nextValues[_i2 - 1]) && _changed2){
                    var _offsetChangedValue3 = offsetChangedValue(nextValues, -1, _i2 - 1);
                    nextValues[_i2 - 1] = _offsetChangedValue3.value;
                    _changed2 = _offsetChangedValue3.changed;
                }
            }
            // Start to End
            for(var _i3 = 0; _i3 < nextValues.length - 1; _i3 += 1){
                var _changed3 = true;
                while(needPush(nextValues[_i3 + 1] - nextValues[_i3]) && _changed3){
                    var _offsetChangedValue4 = offsetChangedValue(nextValues, 1, _i3 + 1);
                    nextValues[_i3 + 1] = _offsetChangedValue4.value;
                    _changed3 = _offsetChangedValue4.changed;
                }
            }
        }
        return {
            value: nextValues[valueIndex],
            values: nextValues
        };
    };
    return [
        formatValue,
        offsetValues
    ];
}

})()),
"[project]/node_modules/rc-slider/es/hooks/useRange.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useRange
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function useRange(range) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        if (range === true || !range) {
            return [
                !!range,
                false,
                false,
                0
            ];
        }
        var editable = range.editable, draggableTrack = range.draggableTrack, minCount = range.minCount, maxCount = range.maxCount;
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warning"])(!editable || !draggableTrack, '`editable` can not work with `draggableTrack`.');
        }
        return [
            true,
            editable,
            !editable && draggableTrack,
            minCount || 0,
            maxCount
        ];
    }, [
        range
    ]);
}

})()),
"[project]/node_modules/rc-slider/es/Slider.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/rc-util/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useEvent.js [app-ssr] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useMergedState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$isEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/isEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Handles$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/Handles/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Marks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/Marks/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Steps$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/Steps/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Tracks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/Tracks/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$hooks$2f$useDrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/hooks/useDrag.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$hooks$2f$useOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/hooks/useOffset.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$hooks$2f$useRange$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/hooks/useRange.js [app-ssr] (ecmascript)");
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
/**
 * New:
 * - click mark to update range value
 * - handleRender
 * - Fix handle with count not correct
 * - Fix pushable not work in some case
 * - No more FindDOMNode
 * - Move all position related style into inline style
 * - Key: up is plus, down is minus
 * - fix Key with step = null not align with marks
 * - Change range should not trigger onChange
 * - keyboard support pushable
 */ var Slider = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? 'rc-slider' : _props$prefixCls, className = props.className, style = props.style, classNames = props.classNames, styles = props.styles, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$keyboard = props.keyboard, keyboard = _props$keyboard === void 0 ? true : _props$keyboard, autoFocus = props.autoFocus, onFocus = props.onFocus, onBlur = props.onBlur, _props$min = props.min, min = _props$min === void 0 ? 0 : _props$min, _props$max = props.max, max = _props$max === void 0 ? 100 : _props$max, _props$step = props.step, step = _props$step === void 0 ? 1 : _props$step, value = props.value, defaultValue = props.defaultValue, range = props.range, count = props.count, onChange = props.onChange, onBeforeChange = props.onBeforeChange, onAfterChange = props.onAfterChange, onChangeComplete = props.onChangeComplete, _props$allowCross = props.allowCross, allowCross = _props$allowCross === void 0 ? true : _props$allowCross, _props$pushable = props.pushable, pushable = _props$pushable === void 0 ? false : _props$pushable, reverse = props.reverse, vertical = props.vertical, _props$included = props.included, included = _props$included === void 0 ? true : _props$included, startPoint = props.startPoint, trackStyle = props.trackStyle, handleStyle = props.handleStyle, railStyle = props.railStyle, dotStyle = props.dotStyle, activeDotStyle = props.activeDotStyle, marks = props.marks, dots = props.dots, handleRender = props.handleRender, activeHandleRender = props.activeHandleRender, track = props.track, _props$tabIndex = props.tabIndex, tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex, ariaLabelForHandle = props.ariaLabelForHandle, ariaLabelledByForHandle = props.ariaLabelledByForHandle, ariaValueTextFormatterForHandle = props.ariaValueTextFormatterForHandle;
    var handlesRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(null);
    var containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(null);
    var direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        if (vertical) {
            return reverse ? 'ttb' : 'btt';
        }
        return reverse ? 'rtl' : 'ltr';
    }, [
        reverse,
        vertical
    ]);
    // ============================ Range =============================
    var _useRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$hooks$2f$useRange$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(range), _useRange2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_useRange, 5), rangeEnabled = _useRange2[0], rangeEditable = _useRange2[1], rangeDraggableTrack = _useRange2[2], minCount = _useRange2[3], maxCount = _useRange2[4];
    var mergedMin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        return isFinite(min) ? min : 0;
    }, [
        min
    ]);
    var mergedMax = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        return isFinite(max) ? max : 100;
    }, [
        max
    ]);
    // ============================= Step =============================
    var mergedStep = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        return step !== null && step <= 0 ? 1 : step;
    }, [
        step
    ]);
    // ============================= Push =============================
    var mergedPush = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        if (typeof pushable === 'boolean') {
            return pushable ? mergedStep : false;
        }
        return pushable >= 0 ? pushable : false;
    }, [
        pushable,
        mergedStep
    ]);
    // ============================ Marks =============================
    var markList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        return Object.keys(marks || {}).map(function(key) {
            var mark = marks[key];
            var markObj = {
                value: Number(key)
            };
            if (mark && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mark) === 'object' && !/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isValidElement(mark) && ('label' in mark || 'style' in mark)) {
                markObj.style = mark.style;
                markObj.label = mark.label;
            } else {
                markObj.label = mark;
            }
            return markObj;
        }).filter(function(_ref) {
            var label = _ref.label;
            return label || typeof label === 'number';
        }).sort(function(a, b) {
            return a.value - b.value;
        });
    }, [
        marks
    ]);
    // ============================ Format ============================
    var _useOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$hooks$2f$useOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mergedMin, mergedMax, mergedStep, markList, allowCross, mergedPush), _useOffset2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_useOffset, 2), formatValue = _useOffset2[0], offsetValues = _useOffset2[1];
    // ============================ Values ============================
    var _useMergedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(defaultValue, {
        value: value
    }), _useMergedState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_useMergedState, 2), mergedValue = _useMergedState2[0], setValue = _useMergedState2[1];
    var rawValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        var valueList = mergedValue === null || mergedValue === undefined ? [] : Array.isArray(mergedValue) ? mergedValue : [
            mergedValue
        ];
        var _valueList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(valueList, 1), _valueList$ = _valueList[0], val0 = _valueList$ === void 0 ? mergedMin : _valueList$;
        var returnValues = mergedValue === null ? [] : [
            val0
        ];
        // Format as range
        if (rangeEnabled) {
            returnValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(valueList);
            // When count provided or value is `undefined`, we fill values
            if (count || mergedValue === undefined) {
                var pointCount = count >= 0 ? count + 1 : 2;
                returnValues = returnValues.slice(0, pointCount);
                // Fill with count
                while(returnValues.length < pointCount){
                    var _returnValues;
                    returnValues.push((_returnValues = returnValues[returnValues.length - 1]) !== null && _returnValues !== void 0 ? _returnValues : mergedMin);
                }
            }
            returnValues.sort(function(a, b) {
                return a - b;
            });
        }
        // Align in range
        returnValues.forEach(function(val, index) {
            returnValues[index] = formatValue(val);
        });
        return returnValues;
    }, [
        mergedValue,
        rangeEnabled,
        mergedMin,
        count,
        formatValue
    ]);
    // =========================== onChange ===========================
    var getTriggerValue = function getTriggerValue(triggerValues) {
        return rangeEnabled ? triggerValues : triggerValues[0];
    };
    var triggerChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])(function(nextValues) {
        // Order first
        var cloneNextValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(nextValues).sort(function(a, b) {
            return a - b;
        });
        // Trigger event if needed
        if (onChange && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$isEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(cloneNextValues, rawValues, true)) {
            onChange(getTriggerValue(cloneNextValues));
        }
        // We set this later since it will re-render component immediately
        setValue(cloneNextValues);
    });
    var finishChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])(function(draggingDelete) {
        // Trigger from `useDrag` will tell if it's a delete action
        if (draggingDelete) {
            handlesRef.current.hideHelp();
        }
        var finishValue = getTriggerValue(rawValues);
        onAfterChange === null || onAfterChange === void 0 || onAfterChange(finishValue);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!onAfterChange, '[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead.');
        onChangeComplete === null || onChangeComplete === void 0 || onChangeComplete(finishValue);
    });
    var onDelete = function onDelete(index) {
        if (disabled || !rangeEditable || rawValues.length <= minCount) {
            return;
        }
        var cloneNextValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(rawValues);
        cloneNextValues.splice(index, 1);
        onBeforeChange === null || onBeforeChange === void 0 || onBeforeChange(getTriggerValue(cloneNextValues));
        triggerChange(cloneNextValues);
        var nextFocusIndex = Math.max(0, index - 1);
        handlesRef.current.hideHelp();
        handlesRef.current.focus(nextFocusIndex);
    };
    var _useDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$hooks$2f$useDrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(containerRef, direction, rawValues, mergedMin, mergedMax, formatValue, triggerChange, finishChange, offsetValues, rangeEditable, minCount), _useDrag2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_useDrag, 5), draggingIndex = _useDrag2[0], draggingValue = _useDrag2[1], draggingDelete = _useDrag2[2], cacheValues = _useDrag2[3], onStartDrag = _useDrag2[4];
    /**
   * When `rangeEditable` will insert a new value in the values array.
   * Else it will replace the value in the values array.
   */ var changeToCloseValue = function changeToCloseValue(newValue, e) {
        if (!disabled) {
            // Create new values
            var cloneNextValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(rawValues);
            var valueIndex = 0;
            var valueBeforeIndex = 0; // Record the index which value < newValue
            var valueDist = mergedMax - mergedMin;
            rawValues.forEach(function(val, index) {
                var dist = Math.abs(newValue - val);
                if (dist <= valueDist) {
                    valueDist = dist;
                    valueIndex = index;
                }
                if (val < newValue) {
                    valueBeforeIndex = index;
                }
            });
            var focusIndex = valueIndex;
            if (rangeEditable && valueDist !== 0 && (!maxCount || rawValues.length < maxCount)) {
                cloneNextValues.splice(valueBeforeIndex + 1, 0, newValue);
                focusIndex = valueBeforeIndex + 1;
            } else {
                cloneNextValues[valueIndex] = newValue;
            }
            // Fill value to match default 2 (only when `rawValues` is empty)
            if (rangeEnabled && !rawValues.length && count === undefined) {
                cloneNextValues.push(newValue);
            }
            var nextValue = getTriggerValue(cloneNextValues);
            onBeforeChange === null || onBeforeChange === void 0 || onBeforeChange(nextValue);
            triggerChange(cloneNextValues);
            if (e) {
                var _document$activeEleme, _document$activeEleme2;
                (_document$activeEleme = document.activeElement) === null || _document$activeEleme === void 0 || (_document$activeEleme2 = _document$activeEleme.blur) === null || _document$activeEleme2 === void 0 || _document$activeEleme2.call(_document$activeEleme);
                handlesRef.current.focus(focusIndex);
                onStartDrag(e, focusIndex, cloneNextValues);
            } else {
                // https://github.com/ant-design/ant-design/issues/49997
                onAfterChange === null || onAfterChange === void 0 || onAfterChange(nextValue);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!onAfterChange, '[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead.');
                onChangeComplete === null || onChangeComplete === void 0 || onChangeComplete(nextValue);
            }
        }
    };
    // ============================ Click =============================
    var onSliderMouseDown = function onSliderMouseDown(e) {
        e.preventDefault();
        var _containerRef$current = containerRef.current.getBoundingClientRect(), width = _containerRef$current.width, height = _containerRef$current.height, left = _containerRef$current.left, top = _containerRef$current.top, bottom = _containerRef$current.bottom, right = _containerRef$current.right;
        var clientX = e.clientX, clientY = e.clientY;
        var percent;
        switch(direction){
            case 'btt':
                percent = (bottom - clientY) / height;
                break;
            case 'ttb':
                percent = (clientY - top) / height;
                break;
            case 'rtl':
                percent = (right - clientX) / width;
                break;
            default:
                percent = (clientX - left) / width;
        }
        var nextValue = mergedMin + percent * (mergedMax - mergedMin);
        changeToCloseValue(formatValue(nextValue), e);
    };
    // =========================== Keyboard ===========================
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(null), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), keyboardValue = _React$useState2[0], setKeyboardValue = _React$useState2[1];
    var onHandleOffsetChange = function onHandleOffsetChange(offset, valueIndex) {
        if (!disabled) {
            var next = offsetValues(rawValues, offset, valueIndex);
            onBeforeChange === null || onBeforeChange === void 0 || onBeforeChange(getTriggerValue(rawValues));
            triggerChange(next.values);
            setKeyboardValue(next.value);
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(function() {
        if (keyboardValue !== null) {
            var valueIndex = rawValues.indexOf(keyboardValue);
            if (valueIndex >= 0) {
                handlesRef.current.focus(valueIndex);
            }
        }
        setKeyboardValue(null);
    }, [
        keyboardValue
    ]);
    // ============================= Drag =============================
    var mergedDraggableTrack = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        if (rangeDraggableTrack && mergedStep === null) {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, '`draggableTrack` is not supported when `step` is `null`.');
            }
            return false;
        }
        return rangeDraggableTrack;
    }, [
        rangeDraggableTrack,
        mergedStep
    ]);
    var onStartMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])(function(e, valueIndex) {
        onStartDrag(e, valueIndex);
        onBeforeChange === null || onBeforeChange === void 0 || onBeforeChange(getTriggerValue(rawValues));
    });
    // Auto focus for updated handle
    var dragging = draggingIndex !== -1;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(function() {
        if (!dragging) {
            var valueIndex = rawValues.lastIndexOf(draggingValue);
            handlesRef.current.focus(valueIndex);
        }
    }, [
        dragging
    ]);
    // =========================== Included ===========================
    var sortedCacheValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(cacheValues).sort(function(a, b) {
            return a - b;
        });
    }, [
        cacheValues
    ]);
    // Provide a range values with included [min, max]
    // Used for Track, Mark & Dot
    var _React$useMemo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        if (!rangeEnabled) {
            return [
                mergedMin,
                sortedCacheValues[0]
            ];
        }
        return [
            sortedCacheValues[0],
            sortedCacheValues[sortedCacheValues.length - 1]
        ];
    }, [
        sortedCacheValues,
        rangeEnabled,
        mergedMin
    ]), _React$useMemo2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useMemo, 2), includedStart = _React$useMemo2[0], includedEnd = _React$useMemo2[1];
    // ============================= Refs =============================
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useImperativeHandle(ref, function() {
        return {
            focus: function focus() {
                handlesRef.current.focus(0);
            },
            blur: function blur() {
                var _containerRef$current2;
                var _document = document, activeElement = _document.activeElement;
                if ((_containerRef$current2 = containerRef.current) !== null && _containerRef$current2 !== void 0 && _containerRef$current2.contains(activeElement)) {
                    activeElement === null || activeElement === void 0 || activeElement.blur();
                }
            }
        };
    });
    // ========================== Auto Focus ==========================
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(function() {
        if (autoFocus) {
            handlesRef.current.focus(0);
        }
    }, []);
    // =========================== Context ============================
    var context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        return {
            min: mergedMin,
            max: mergedMax,
            direction: direction,
            disabled: disabled,
            keyboard: keyboard,
            step: mergedStep,
            included: included,
            includedStart: includedStart,
            includedEnd: includedEnd,
            range: rangeEnabled,
            tabIndex: tabIndex,
            ariaLabelForHandle: ariaLabelForHandle,
            ariaLabelledByForHandle: ariaLabelledByForHandle,
            ariaValueTextFormatterForHandle: ariaValueTextFormatterForHandle,
            styles: styles || {},
            classNames: classNames || {}
        };
    }, [
        mergedMin,
        mergedMax,
        direction,
        disabled,
        keyboard,
        mergedStep,
        included,
        includedStart,
        includedEnd,
        rangeEnabled,
        tabIndex,
        ariaLabelForHandle,
        ariaLabelledByForHandle,
        ariaValueTextFormatterForHandle,
        styles,
        classNames
    ]);
    // ============================ Render ============================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: context
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", {
        ref: containerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, className, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-disabled"), disabled), "".concat(prefixCls, "-vertical"), vertical), "".concat(prefixCls, "-horizontal"), !vertical), "".concat(prefixCls, "-with-marks"), markList.length)),
        style: style,
        onMouseDown: onSliderMouseDown
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-rail"), classNames === null || classNames === void 0 ? void 0 : classNames.rail),
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, railStyle), styles === null || styles === void 0 ? void 0 : styles.rail)
    }), track !== false && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Tracks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        style: trackStyle,
        values: rawValues,
        startPoint: startPoint,
        onStartMove: mergedDraggableTrack ? onStartMove : undefined
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Steps$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        marks: markList,
        dots: dots,
        style: dotStyle,
        activeStyle: activeDotStyle
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Handles$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: handlesRef,
        prefixCls: prefixCls,
        style: handleStyle,
        values: cacheValues,
        draggingIndex: draggingIndex,
        draggingDelete: draggingDelete,
        onStartMove: onStartMove,
        onOffsetChange: onHandleOffsetChange,
        onFocus: onFocus,
        onBlur: onBlur,
        handleRender: handleRender,
        activeHandleRender: activeHandleRender,
        onChangeComplete: finishChange,
        onDelete: rangeEditable ? onDelete : undefined
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Marks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        marks: markList,
        onClick: changeToCloseValue
    })));
});
if ("TURBOPACK compile-time truthy", 1) {
    Slider.displayName = 'Slider';
}
const __TURBOPACK__default__export__ = Slider;

})()),
"[project]/node_modules/rc-slider/es/index.js [app-ssr] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Slider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/Slider.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Slider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];

})()),
"[project]/node_modules/rc-slider/es/index.js [app-ssr] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$Slider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/Slider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/index.js [app-ssr] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),

};

//# sourceMappingURL=08b5e_rc-slider_es_343a14._.js.map