(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/08b5e_rc-select_es_a627b9._.js", {

"[project]/node_modules/rc-select/es/TransBtn.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
var TransBtn = function TransBtn(props) {
    var className = props.className, customizeIcon = props.customizeIcon, customizeIconProps = props.customizeIconProps, children = props.children, _onMouseDown = props.onMouseDown, onClick = props.onClick;
    var icon = typeof customizeIcon === 'function' ? customizeIcon(customizeIconProps) : customizeIcon;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
        className: className,
        onMouseDown: function onMouseDown(event) {
            event.preventDefault();
            _onMouseDown === null || _onMouseDown === void 0 || _onMouseDown(event);
        },
        style: {
            userSelect: 'none',
            WebkitUserSelect: 'none'
        },
        unselectable: "on",
        onClick: onClick,
        "aria-hidden": true
    }, icon !== undefined ? icon : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className.split(/\s+/).map(function(cls) {
            return "".concat(cls, "-icon");
        }))
    }, children));
};
const __TURBOPACK__default__export__ = TransBtn;

})()),
"[project]/node_modules/rc-select/es/hooks/useAllowClear.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useAllowClear": ()=>useAllowClear
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$TransBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/TransBtn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
var useAllowClear = function useAllowClear(prefixCls, onClearMouseDown, displayValues, allowClear, clearIcon) {
    var disabled = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var mergedSearchValue = arguments.length > 6 ? arguments[6] : undefined;
    var mode = arguments.length > 7 ? arguments[7] : undefined;
    var mergedClearIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo(function() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(allowClear) === 'object') {
            return allowClear.clearIcon;
        }
        if (clearIcon) {
            return clearIcon;
        }
    }, [
        allowClear,
        clearIcon
    ]);
    var mergedAllowClear = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo(function() {
        if (!disabled && !!allowClear && (displayValues.length || mergedSearchValue) && !(mode === 'combobox' && mergedSearchValue === '')) {
            return true;
        }
        return false;
    }, [
        allowClear,
        disabled,
        displayValues.length,
        mergedSearchValue,
        mode
    ]);
    return {
        allowClear: mergedAllowClear,
        clearIcon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$TransBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "".concat(prefixCls, "-clear"),
            onMouseDown: onClearMouseDown,
            customizeIcon: mergedClearIcon
        }, "\xD7")
    };
};

})()),
"[project]/node_modules/rc-select/es/hooks/useBaseProps.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * BaseSelect provide some parsed data into context.
 * You can use this hooks to get them.
 */ __turbopack_esm__({
    "BaseSelectContext": ()=>BaseSelectContext,
    "default": ()=>useBaseProps
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var BaseSelectContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
function useBaseProps() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(BaseSelectContext);
}

})()),
"[project]/node_modules/rc-select/es/hooks/useDelayReset.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useDelayReset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function useDelayReset() {
    var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(false), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), bool = _React$useState2[0], setBool = _React$useState2[1];
    var delayRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    var cancelLatest = function cancelLatest() {
        window.clearTimeout(delayRef.current);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        return cancelLatest;
    }, []);
    var delaySetBool = function delaySetBool(value, callback) {
        cancelLatest();
        delayRef.current = window.setTimeout(function() {
            setBool(value);
            if (callback) {
                callback();
            }
        }, timeout);
    };
    return [
        bool,
        delaySetBool,
        cancelLatest
    ];
}

})()),
"[project]/node_modules/rc-select/es/hooks/useLock.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useLock
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function useLock() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
    var lockRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    var timeoutRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    // Clean up
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        return function() {
            window.clearTimeout(timeoutRef.current);
        };
    }, []);
    function doLock(locked) {
        if (locked || lockRef.current === null) {
            lockRef.current = locked;
        }
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(function() {
            lockRef.current = null;
        }, duration);
    }
    return [
        function() {
            return lockRef.current;
        },
        doLock
    ];
}

})()),
"[project]/node_modules/rc-select/es/hooks/useSelectTriggerControl.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useSelectTriggerControl
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function useSelectTriggerControl(elements, open, triggerOpen, customizedTrigger) {
    var propsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    propsRef.current = {
        open: open,
        triggerOpen: triggerOpen,
        customizedTrigger: customizedTrigger
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        function onGlobalMouseDown(event) {
            var _propsRef$current;
            // If trigger is customized, Trigger will take control of popupVisible
            if ((_propsRef$current = propsRef.current) !== null && _propsRef$current !== void 0 && _propsRef$current.customizedTrigger) {
                return;
            }
            var target = event.target;
            if (target.shadowRoot && event.composed) {
                target = event.composedPath()[0] || target;
            }
            if (propsRef.current.open && elements().filter(function(element) {
                return element;
            }).every(function(element) {
                return !element.contains(target) && element !== target;
            })) {
                // Should trigger close
                propsRef.current.triggerOpen(false);
            }
        }
        window.addEventListener('mousedown', onGlobalMouseDown);
        return function() {
            return window.removeEventListener('mousedown', onGlobalMouseDown);
        };
    }, []);
}

})()),
"[project]/node_modules/rc-select/es/utils/keyUtil.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "isValidateOpenKey": ()=>isValidateOpenKey
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/KeyCode.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function isValidateOpenKey(currentKeyCode) {
    return ![
        // System function button
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ESC,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SHIFT,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].BACKSPACE,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].TAB,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].WIN_KEY,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ALT,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].META,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].WIN_KEY_RIGHT,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CTRL,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SEMICOLON,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].EQUALS,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CAPS_LOCK,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CONTEXT_MENU,
        // F1-F12
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F1,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F2,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F3,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F4,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F5,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F6,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F7,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F8,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F9,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F10,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F11,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F12
    ].includes(currentKeyCode);
}

})()),
"[project]/node_modules/rc-select/es/Selector/Input.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
var Input = function Input(props, ref) {
    var _inputNode2;
    var prefixCls = props.prefixCls, id = props.id, inputElement = props.inputElement, disabled = props.disabled, tabIndex = props.tabIndex, autoFocus = props.autoFocus, autoComplete = props.autoComplete, editable = props.editable, activeDescendantId = props.activeDescendantId, value = props.value, maxLength = props.maxLength, _onKeyDown = props.onKeyDown, _onMouseDown = props.onMouseDown, _onChange = props.onChange, onPaste = props.onPaste, _onCompositionStart = props.onCompositionStart, _onCompositionEnd = props.onCompositionEnd, open = props.open, attrs = props.attrs;
    var inputNode = inputElement || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("input", null);
    var _inputNode = inputNode, originRef = _inputNode.ref, originProps = _inputNode.props;
    var onOriginKeyDown = originProps.onKeyDown, onOriginChange = originProps.onChange, onOriginMouseDown = originProps.onMouseDown, onOriginCompositionStart = originProps.onCompositionStart, onOriginCompositionEnd = originProps.onCompositionEnd, style = originProps.style;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warning"])(!('maxLength' in inputNode.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled.");
    inputNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(inputNode, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        type: 'search'
    }, originProps), {}, {
        // Override over origin props
        id: id,
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(ref, originRef),
        disabled: disabled,
        tabIndex: tabIndex,
        autoComplete: autoComplete || 'off',
        autoFocus: autoFocus,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-selection-search-input"), (_inputNode2 = inputNode) === null || _inputNode2 === void 0 || (_inputNode2 = _inputNode2.props) === null || _inputNode2 === void 0 ? void 0 : _inputNode2.className),
        role: 'combobox',
        'aria-expanded': open || false,
        'aria-haspopup': 'listbox',
        'aria-owns': "".concat(id, "_list"),
        'aria-autocomplete': 'list',
        'aria-controls': "".concat(id, "_list"),
        'aria-activedescendant': open ? activeDescendantId : undefined
    }, attrs), {}, {
        value: editable ? value : '',
        maxLength: maxLength,
        readOnly: !editable,
        unselectable: !editable ? 'on' : null,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, style), {}, {
            opacity: editable ? null : 0
        }),
        onKeyDown: function onKeyDown(event) {
            _onKeyDown(event);
            if (onOriginKeyDown) {
                onOriginKeyDown(event);
            }
        },
        onMouseDown: function onMouseDown(event) {
            _onMouseDown(event);
            if (onOriginMouseDown) {
                onOriginMouseDown(event);
            }
        },
        onChange: function onChange(event) {
            _onChange(event);
            if (onOriginChange) {
                onOriginChange(event);
            }
        },
        onCompositionStart: function onCompositionStart(event) {
            _onCompositionStart(event);
            if (onOriginCompositionStart) {
                onOriginCompositionStart(event);
            }
        },
        onCompositionEnd: function onCompositionEnd(event) {
            _onCompositionEnd(event);
            if (onOriginCompositionEnd) {
                onOriginCompositionEnd(event);
            }
        },
        onPaste: onPaste
    }));
    return inputNode;
};
var RefInput = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(Input);
if ("TURBOPACK compile-time truthy", 1) {
    RefInput.displayName = 'Input';
}
const __TURBOPACK__default__export__ = RefInput;

})()),
"[project]/node_modules/rc-select/es/utils/commonUtil.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getTitle": ()=>getTitle,
    "hasValue": ()=>hasValue,
    "isBrowserClient": ()=>isBrowserClient,
    "isClient": ()=>isClient,
    "isComboNoValue": ()=>isComboNoValue,
    "toArray": ()=>toArray
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function toArray(value) {
    if (Array.isArray(value)) {
        return value;
    }
    return value !== undefined ? [
        value
    ] : [];
}
var isClient = typeof window !== 'undefined' && window.document && window.document.documentElement;
var isBrowserClient = ("TURBOPACK compile-time value", "development") !== 'test' && isClient;
function hasValue(value) {
    return value !== undefined && value !== null;
}
function isComboNoValue(value) {
    return !value && value !== 0;
}
function isTitleType(title) {
    return [
        'string',
        'number'
    ].includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(title));
}
function getTitle(item) {
    var title = undefined;
    if (item) {
        if (isTitleType(item.title)) {
            title = item.title.toString();
        } else if (isTitleType(item.label)) {
            title = item.label.toString();
        }
    }
    return title;
}

})()),
"[project]/node_modules/rc-select/es/hooks/useLayoutEffect.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/* eslint-disable react-hooks/rules-of-hooks */ __turbopack_esm__({
    "default": ()=>useLayoutEffect
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/utils/commonUtil.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function useLayoutEffect(effect, deps) {
    // Never happen in test env
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserClient"]) {
        /* istanbul ignore next */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useLayoutEffect(effect, deps);
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(effect, deps);
    }
} /* eslint-enable */ 

})()),
"[project]/node_modules/rc-select/es/Selector/MultipleSelector.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/pickAttrs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-overflow/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$TransBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/TransBtn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$Selector$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/Selector/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/hooks/useLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/utils/commonUtil.js [app-client] (ecmascript)");
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
function itemKey(value) {
    var _value$key;
    return (_value$key = value.key) !== null && _value$key !== void 0 ? _value$key : value.value;
}
var onPreventMouseDown = function onPreventMouseDown(event) {
    event.preventDefault();
    event.stopPropagation();
};
var SelectSelector = function SelectSelector(props) {
    var id = props.id, prefixCls = props.prefixCls, values = props.values, open = props.open, searchValue = props.searchValue, autoClearSearchValue = props.autoClearSearchValue, inputRef = props.inputRef, placeholder = props.placeholder, disabled = props.disabled, mode = props.mode, showSearch = props.showSearch, autoFocus = props.autoFocus, autoComplete = props.autoComplete, activeDescendantId = props.activeDescendantId, tabIndex = props.tabIndex, removeIcon = props.removeIcon, maxTagCount = props.maxTagCount, maxTagTextLength = props.maxTagTextLength, _props$maxTagPlacehol = props.maxTagPlaceholder, maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function(omittedValues) {
        return "+ ".concat(omittedValues.length, " ...");
    } : _props$maxTagPlacehol, tagRender = props.tagRender, onToggleOpen = props.onToggleOpen, onRemove = props.onRemove, onInputChange = props.onInputChange, onInputPaste = props.onInputPaste, onInputKeyDown = props.onInputKeyDown, onInputMouseDown = props.onInputMouseDown, onInputCompositionStart = props.onInputCompositionStart, onInputCompositionEnd = props.onInputCompositionEnd;
    var measureRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState, 2), inputWidth = _useState2[0], setInputWidth = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useState3, 2), focused = _useState4[0], setFocused = _useState4[1];
    var selectionPrefixCls = "".concat(prefixCls, "-selection");
    // ===================== Search ======================
    var inputValue = open || mode === 'multiple' && autoClearSearchValue === false || mode === 'tags' ? searchValue : '';
    var inputEditable = mode === 'tags' || mode === 'multiple' && autoClearSearchValue === false || showSearch && (open || focused);
    // We measure width and set to the input immediately
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
        setInputWidth(measureRef.current.scrollWidth);
    }, [
        inputValue
    ]);
    // ===================== Render ======================
    // >>> Render Selector Node. Includes Item & Rest
    var defaultRenderSelector = function defaultRenderSelector(item, content, itemDisabled, closable, onClose) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTitle"])(item),
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("".concat(selectionPrefixCls, "-item"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(selectionPrefixCls, "-item-disabled"), itemDisabled))
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
            className: "".concat(selectionPrefixCls, "-item-content")
        }, content), closable && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$TransBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "".concat(selectionPrefixCls, "-item-remove"),
            onMouseDown: onPreventMouseDown,
            onClick: onClose,
            customizeIcon: removeIcon
        }, "\xD7"));
    };
    var customizeRenderSelector = function customizeRenderSelector(value, content, itemDisabled, closable, onClose, isMaxTag) {
        var onMouseDown = function onMouseDown(e) {
            onPreventMouseDown(e);
            onToggleOpen(!open);
        };
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
            onMouseDown: onMouseDown
        }, tagRender({
            label: content,
            value: value,
            disabled: itemDisabled,
            closable: closable,
            onClose: onClose,
            isMaxTag: !!isMaxTag
        }));
    };
    var renderItem = function renderItem(valueItem) {
        var itemDisabled = valueItem.disabled, label = valueItem.label, value = valueItem.value;
        var closable = !disabled && !itemDisabled;
        var displayLabel = label;
        if (typeof maxTagTextLength === 'number') {
            if (typeof label === 'string' || typeof label === 'number') {
                var strLabel = String(displayLabel);
                if (strLabel.length > maxTagTextLength) {
                    displayLabel = "".concat(strLabel.slice(0, maxTagTextLength), "...");
                }
            }
        }
        var onClose = function onClose(event) {
            if (event) {
                event.stopPropagation();
            }
            onRemove(valueItem);
        };
        return typeof tagRender === 'function' ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose) : defaultRenderSelector(valueItem, displayLabel, itemDisabled, closable, onClose);
    };
    var renderRest = function renderRest(omittedValues) {
        var content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
        return typeof tagRender === 'function' ? customizeRenderSelector(undefined, content, false, false, undefined, true) : defaultRenderSelector({
            title: content
        }, content, false);
    };
    // >>> Input Node
    var inputNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        className: "".concat(selectionPrefixCls, "-search"),
        style: {
            width: inputWidth
        },
        onFocus: function onFocus() {
            setFocused(true);
        },
        onBlur: function onBlur() {
            setFocused(false);
        }
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$Selector$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: inputRef,
        open: open,
        prefixCls: prefixCls,
        id: id,
        inputElement: null,
        disabled: disabled,
        autoFocus: autoFocus,
        autoComplete: autoComplete,
        editable: inputEditable,
        activeDescendantId: activeDescendantId,
        value: inputValue,
        onKeyDown: onInputKeyDown,
        onMouseDown: onInputMouseDown,
        onChange: onInputChange,
        onPaste: onInputPaste,
        onCompositionStart: onInputCompositionStart,
        onCompositionEnd: onInputCompositionEnd,
        tabIndex: tabIndex,
        attrs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, true)
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
        ref: measureRef,
        className: "".concat(selectionPrefixCls, "-search-mirror"),
        "aria-hidden": true
    }, inputValue, "\xA0"));
    // >>> Selections
    var selectionNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: "".concat(selectionPrefixCls, "-overflow"),
        data: values,
        renderItem: renderItem,
        renderRest: renderRest,
        suffix: inputNode,
        itemKey: itemKey,
        maxCount: maxTagCount
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, null, selectionNode, !values.length && !inputValue && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
        className: "".concat(selectionPrefixCls, "-placeholder")
    }, placeholder));
};
const __TURBOPACK__default__export__ = SelectSelector;

})()),
"[project]/node_modules/rc-select/es/Selector/SingleSelector.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/pickAttrs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$Selector$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/Selector/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/utils/commonUtil.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
var SingleSelector = function SingleSelector(props) {
    var inputElement = props.inputElement, prefixCls = props.prefixCls, id = props.id, inputRef = props.inputRef, disabled = props.disabled, autoFocus = props.autoFocus, autoComplete = props.autoComplete, activeDescendantId = props.activeDescendantId, mode = props.mode, open = props.open, values = props.values, placeholder = props.placeholder, tabIndex = props.tabIndex, showSearch = props.showSearch, searchValue = props.searchValue, activeValue = props.activeValue, maxLength = props.maxLength, onInputKeyDown = props.onInputKeyDown, onInputMouseDown = props.onInputMouseDown, onInputChange = props.onInputChange, onInputPaste = props.onInputPaste, onInputCompositionStart = props.onInputCompositionStart, onInputCompositionEnd = props.onInputCompositionEnd, title = props.title;
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(false), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), inputChanged = _React$useState2[0], setInputChanged = _React$useState2[1];
    var combobox = mode === 'combobox';
    var inputEditable = combobox || showSearch;
    var item = values[0];
    var inputValue = searchValue || '';
    if (combobox && activeValue && !inputChanged) {
        inputValue = activeValue;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        if (combobox) {
            setInputChanged(false);
        }
    }, [
        combobox,
        activeValue
    ]);
    // Not show text when closed expect combobox mode
    var hasTextInput = mode !== 'combobox' && !open && !showSearch ? false : !!inputValue;
    // Get title of selection item
    var selectionTitle = title === undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTitle"])(item) : title;
    var placeholderNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        if (item) {
            return null;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
            className: "".concat(prefixCls, "-selection-placeholder"),
            style: hasTextInput ? {
                visibility: 'hidden'
            } : undefined
        }, placeholder);
    }, [
        item,
        hasTextInput,
        placeholder,
        prefixCls
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
        className: "".concat(prefixCls, "-selection-search")
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$Selector$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: inputRef,
        prefixCls: prefixCls,
        id: id,
        open: open,
        inputElement: inputElement,
        disabled: disabled,
        autoFocus: autoFocus,
        autoComplete: autoComplete,
        editable: inputEditable,
        activeDescendantId: activeDescendantId,
        value: inputValue,
        onKeyDown: onInputKeyDown,
        onMouseDown: onInputMouseDown,
        onChange: function onChange(e) {
            setInputChanged(true);
            onInputChange(e);
        },
        onPaste: onInputPaste,
        onCompositionStart: onInputCompositionStart,
        onCompositionEnd: onInputCompositionEnd,
        tabIndex: tabIndex,
        attrs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, true),
        maxLength: combobox ? maxLength : undefined
    })), !combobox && item ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
        className: "".concat(prefixCls, "-selection-item"),
        title: selectionTitle,
        style: hasTextInput ? {
            visibility: 'hidden'
        } : undefined
    }, item.label) : null, placeholderNode);
};
const __TURBOPACK__default__export__ = SingleSelector;

})()),
"[project]/node_modules/rc-select/es/Selector/index.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/KeyCode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useLock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/hooks/useLock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/utils/keyUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$Selector$2f$MultipleSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/Selector/MultipleSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$Selector$2f$SingleSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/Selector/SingleSelector.js [app-client] (ecmascript)");
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
var Selector = function Selector(props, ref) {
    var inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var compositionStatusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var prefixCls = props.prefixCls, open = props.open, mode = props.mode, showSearch = props.showSearch, tokenWithEnter = props.tokenWithEnter, disabled = props.disabled, autoClearSearchValue = props.autoClearSearchValue, onSearch = props.onSearch, onSearchSubmit = props.onSearchSubmit, onToggleOpen = props.onToggleOpen, onInputKeyDown = props.onInputKeyDown, domRef = props.domRef;
    // ======================= Ref =======================
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useImperativeHandle(ref, function() {
        return {
            focus: function focus(options) {
                inputRef.current.focus(options);
            },
            blur: function blur() {
                inputRef.current.blur();
            }
        };
    });
    // ====================== Input ======================
    var _useLock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useLock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(0), _useLock2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useLock, 2), getInputMouseDown = _useLock2[0], setInputMouseDown = _useLock2[1];
    var onInternalInputKeyDown = function onInternalInputKeyDown(event) {
        var which = event.which;
        if (which === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].UP || which === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DOWN) {
            event.preventDefault();
        }
        if (onInputKeyDown) {
            onInputKeyDown(event);
        }
        if (which === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ENTER && mode === 'tags' && !compositionStatusRef.current && !open) {
            // When menu isn't open, OptionList won't trigger a value change
            // So when enter is pressed, the tag's input value should be emitted here to let selector know
            onSearchSubmit === null || onSearchSubmit === void 0 || onSearchSubmit(event.target.value);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidateOpenKey"])(which)) {
            onToggleOpen(true);
        }
    };
    /**
   * We can not use `findDOMNode` sine it will get warning,
   * have to use timer to check if is input element.
   */ var onInternalInputMouseDown = function onInternalInputMouseDown() {
        setInputMouseDown(true);
    };
    // When paste come, ignore next onChange
    var pastedTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var triggerOnSearch = function triggerOnSearch(value) {
        if (onSearch(value, true, compositionStatusRef.current) !== false) {
            onToggleOpen(true);
        }
    };
    var onInputCompositionStart = function onInputCompositionStart() {
        compositionStatusRef.current = true;
    };
    var onInputCompositionEnd = function onInputCompositionEnd(e) {
        compositionStatusRef.current = false;
        // Trigger search again to support `tokenSeparators` with typewriting
        if (mode !== 'combobox') {
            triggerOnSearch(e.target.value);
        }
    };
    var onInputChange = function onInputChange(event) {
        var value = event.target.value;
        // Pasted text should replace back to origin content
        if (tokenWithEnter && pastedTextRef.current && /[\r\n]/.test(pastedTextRef.current)) {
            // CRLF will be treated as a single space for input element
            var replacedText = pastedTextRef.current.replace(/[\r\n]+$/, '').replace(/\r\n/g, ' ').replace(/[\r\n]/g, ' ');
            value = value.replace(replacedText, pastedTextRef.current);
        }
        pastedTextRef.current = null;
        triggerOnSearch(value);
    };
    var onInputPaste = function onInputPaste(e) {
        var clipboardData = e.clipboardData;
        var value = clipboardData === null || clipboardData === void 0 ? void 0 : clipboardData.getData('text');
        pastedTextRef.current = value || '';
    };
    var onClick = function onClick(_ref) {
        var target = _ref.target;
        if (target !== inputRef.current) {
            // Should focus input if click the selector
            var isIE = document.body.style.msTouchAction !== undefined;
            if (isIE) {
                setTimeout(function() {
                    inputRef.current.focus();
                });
            } else {
                inputRef.current.focus();
            }
        }
    };
    var onMouseDown = function onMouseDown(event) {
        var inputMouseDown = getInputMouseDown();
        // when mode is combobox and it is disabled, don't prevent default behavior
        // https://github.com/ant-design/ant-design/issues/37320
        // https://github.com/ant-design/ant-design/issues/48281
        if (event.target !== inputRef.current && !inputMouseDown && !(mode === 'combobox' && disabled)) {
            event.preventDefault();
        }
        if (mode !== 'combobox' && (!showSearch || !inputMouseDown) || !open) {
            if (open && autoClearSearchValue !== false) {
                onSearch('', true, false);
            }
            onToggleOpen();
        }
    };
    // ================= Inner Selector ==================
    var sharedProps = {
        inputRef: inputRef,
        onInputKeyDown: onInternalInputKeyDown,
        onInputMouseDown: onInternalInputMouseDown,
        onInputChange: onInputChange,
        onInputPaste: onInputPaste,
        onInputCompositionStart: onInputCompositionStart,
        onInputCompositionEnd: onInputCompositionEnd
    };
    var selectNode = mode === 'multiple' || mode === 'tags' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$Selector$2f$MultipleSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, sharedProps)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$Selector$2f$SingleSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, sharedProps));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
        ref: domRef,
        className: "".concat(prefixCls, "-selector"),
        onClick: onClick,
        onMouseDown: onMouseDown
    }, selectNode);
};
var ForwardSelector = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(Selector);
if ("TURBOPACK compile-time truthy", 1) {
    ForwardSelector.displayName = 'Selector';
}
const __TURBOPACK__default__export__ = ForwardSelector;

})()),
"[project]/node_modules/rc-select/es/SelectTrigger.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@rc-component/trigger/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
var _excluded = [
    "prefixCls",
    "disabled",
    "visible",
    "children",
    "popupElement",
    "animation",
    "transitionName",
    "dropdownStyle",
    "dropdownClassName",
    "direction",
    "placement",
    "builtinPlacements",
    "dropdownMatchSelectWidth",
    "dropdownRender",
    "dropdownAlign",
    "getPopupContainer",
    "empty",
    "getTriggerDOMNode",
    "onPopupVisibleChange",
    "onPopupMouseEnter"
];
;
;
;
var getBuiltInPlacements = function getBuiltInPlacements(dropdownMatchSelectWidth) {
    // Enable horizontal overflow auto-adjustment when a custom dropdown width is provided
    var adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
    return {
        bottomLeft: {
            points: [
                'tl',
                'bl'
            ],
            offset: [
                0,
                4
            ],
            overflow: {
                adjustX: adjustX,
                adjustY: 1
            },
            htmlRegion: 'scroll'
        },
        bottomRight: {
            points: [
                'tr',
                'br'
            ],
            offset: [
                0,
                4
            ],
            overflow: {
                adjustX: adjustX,
                adjustY: 1
            },
            htmlRegion: 'scroll'
        },
        topLeft: {
            points: [
                'bl',
                'tl'
            ],
            offset: [
                0,
                -4
            ],
            overflow: {
                adjustX: adjustX,
                adjustY: 1
            },
            htmlRegion: 'scroll'
        },
        topRight: {
            points: [
                'br',
                'tr'
            ],
            offset: [
                0,
                -4
            ],
            overflow: {
                adjustX: adjustX,
                adjustY: 1
            },
            htmlRegion: 'scroll'
        }
    };
};
var SelectTrigger = function SelectTrigger(props, ref) {
    var prefixCls = props.prefixCls, disabled = props.disabled, visible = props.visible, children = props.children, popupElement = props.popupElement, animation = props.animation, transitionName = props.transitionName, dropdownStyle = props.dropdownStyle, dropdownClassName = props.dropdownClassName, _props$direction = props.direction, direction = _props$direction === void 0 ? 'ltr' : _props$direction, placement = props.placement, builtinPlacements = props.builtinPlacements, dropdownMatchSelectWidth = props.dropdownMatchSelectWidth, dropdownRender = props.dropdownRender, dropdownAlign = props.dropdownAlign, getPopupContainer = props.getPopupContainer, empty = props.empty, getTriggerDOMNode = props.getTriggerDOMNode, onPopupVisibleChange = props.onPopupVisibleChange, onPopupMouseEnter = props.onPopupMouseEnter, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
    var popupNode = popupElement;
    if (dropdownRender) {
        popupNode = dropdownRender(popupElement);
    }
    var mergedBuiltinPlacements = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        return builtinPlacements || getBuiltInPlacements(dropdownMatchSelectWidth);
    }, [
        builtinPlacements,
        dropdownMatchSelectWidth
    ]);
    // ===================== Motion ======================
    var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName;
    // =================== Popup Width ===================
    var isNumberPopupWidth = typeof dropdownMatchSelectWidth === 'number';
    var stretch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        if (isNumberPopupWidth) {
            return null;
        }
        return dropdownMatchSelectWidth === false ? 'minWidth' : 'width';
    }, [
        dropdownMatchSelectWidth,
        isNumberPopupWidth
    ]);
    var popupStyle = dropdownStyle;
    if (isNumberPopupWidth) {
        popupStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, popupStyle), {}, {
            width: dropdownMatchSelectWidth
        });
    }
    // ======================= Ref =======================
    var triggerPopupRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useImperativeHandle(ref, function() {
        return {
            getPopupElement: function getPopupElement() {
                var _triggerPopupRef$curr;
                return (_triggerPopupRef$curr = triggerPopupRef.current) === null || _triggerPopupRef$curr === void 0 ? void 0 : _triggerPopupRef$curr.popupElement;
            }
        };
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, restProps, {
        showAction: onPopupVisibleChange ? [
            'click'
        ] : [],
        hideAction: onPopupVisibleChange ? [
            'click'
        ] : [],
        popupPlacement: placement || (direction === 'rtl' ? 'bottomRight' : 'bottomLeft'),
        builtinPlacements: mergedBuiltinPlacements,
        prefixCls: dropdownPrefixCls,
        popupTransitionName: mergedTransitionName,
        popup: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
            onMouseEnter: onPopupMouseEnter
        }, popupNode),
        ref: triggerPopupRef,
        stretch: stretch,
        popupAlign: dropdownAlign,
        popupVisible: visible,
        getPopupContainer: getPopupContainer,
        popupClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(dropdownClassName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
        popupStyle: popupStyle,
        getTriggerDOMNode: getTriggerDOMNode,
        onPopupVisibleChange: onPopupVisibleChange
    }), children);
};
var RefSelectTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(SelectTrigger);
if ("TURBOPACK compile-time truthy", 1) {
    RefSelectTrigger.displayName = 'SelectTrigger';
}
const __TURBOPACK__default__export__ = RefSelectTrigger;

})()),
"[project]/node_modules/rc-select/es/utils/valueUtil.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "fillFieldNames": ()=>fillFieldNames,
    "flattenOptions": ()=>flattenOptions,
    "getSeparatedContent": ()=>getSeparatedContent,
    "injectPropsWithOption": ()=>injectPropsWithOption,
    "isValidCount": ()=>isValidCount
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/warning.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
function getKey(data, index) {
    var key = data.key;
    var value;
    if ('value' in data) {
        value = data.value;
    }
    if (key !== null && key !== undefined) {
        return key;
    }
    if (value !== undefined) {
        return value;
    }
    return "rc-index-key-".concat(index);
}
function isValidCount(value) {
    return typeof value !== 'undefined' && !Number.isNaN(value);
}
function fillFieldNames(fieldNames, childrenAsData) {
    var _ref = fieldNames || {}, label = _ref.label, value = _ref.value, options = _ref.options, groupLabel = _ref.groupLabel;
    var mergedLabel = label || (childrenAsData ? 'children' : 'label');
    return {
        label: mergedLabel,
        value: value || 'value',
        options: options || 'options',
        groupLabel: groupLabel || mergedLabel
    };
}
function flattenOptions(options) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, fieldNames = _ref2.fieldNames, childrenAsData = _ref2.childrenAsData;
    var flattenList = [];
    var _fillFieldNames = fillFieldNames(fieldNames, false), fieldLabel = _fillFieldNames.label, fieldValue = _fillFieldNames.value, fieldOptions = _fillFieldNames.options, groupLabel = _fillFieldNames.groupLabel;
    function dig(list, isGroupOption) {
        if (!Array.isArray(list)) {
            return;
        }
        list.forEach(function(data) {
            if (isGroupOption || !(fieldOptions in data)) {
                var value = data[fieldValue];
                // Option
                flattenList.push({
                    key: getKey(data, flattenList.length),
                    groupOption: isGroupOption,
                    data: data,
                    label: data[fieldLabel],
                    value: value
                });
            } else {
                var grpLabel = data[groupLabel];
                if (grpLabel === undefined && childrenAsData) {
                    grpLabel = data.label;
                }
                // Option Group
                flattenList.push({
                    key: getKey(data, flattenList.length),
                    group: true,
                    data: data,
                    label: grpLabel
                });
                dig(data[fieldOptions], true);
            }
        });
    }
    dig(options, false);
    return flattenList;
}
function injectPropsWithOption(option) {
    var newOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, option);
    if (!('props' in newOption)) {
        Object.defineProperty(newOption, 'props', {
            get: function get() {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'Return type is option instead of Option instance. Please read value directly instead of reading from `props`.');
                return newOption;
            }
        });
    }
    return newOption;
}
var getSeparatedContent = function getSeparatedContent(text, tokens, end) {
    if (!tokens || !tokens.length) {
        return null;
    }
    var match = false;
    var separate = function separate(str, _ref3) {
        var _ref4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref3), token = _ref4[0], restTokens = _ref4.slice(1);
        if (!token) {
            return [
                str
            ];
        }
        var list = str.split(token);
        match = match || list.length > 1;
        return list.reduce(function(prevList, unitStr) {
            return [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prevList), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(separate(unitStr, restTokens)));
        }, []).filter(Boolean);
    };
    var list = separate(text, tokens);
    if (match) {
        return typeof end !== 'undefined' ? list.slice(0, end) : list;
    } else {
        return null;
    }
};

})()),
"[project]/node_modules/rc-select/es/SelectContext.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
// Use any here since we do not get the type during compilation
var SelectContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
const __TURBOPACK__default__export__ = SelectContext;

})()),
"[project]/node_modules/rc-select/es/BaseSelect/Polite.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Polite
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function Polite(props) {
    var visible = props.visible, values = props.values;
    if (!visible) {
        return null;
    }
    // Only cut part of values since it's a screen reader
    var MAX_COUNT = 50;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
        "aria-live": "polite",
        style: {
            width: 0,
            height: 0,
            position: 'absolute',
            overflow: 'hidden',
            opacity: 0
        }
    }, "".concat(values.slice(0, MAX_COUNT).map(function(_ref) {
        var label = _ref.label, value = _ref.value;
        return [
            'number',
            'string'
        ].includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(label)) ? label : value;
    }).join(', ')), values.length > MAX_COUNT ? ', ...' : null);
}

})()),
"[project]/node_modules/rc-select/es/BaseSelect/index.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "isMultiple": ()=>isMultiple
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useMergedState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/isMobile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useAllowClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/hooks/useAllowClear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/hooks/useBaseProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useDelayReset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/hooks/useDelayReset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useLock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/hooks/useLock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useSelectTriggerControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/hooks/useSelectTriggerControl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$Selector$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/Selector/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$SelectTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/SelectTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$TransBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/TransBtn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/utils/valueUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$SelectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/SelectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$BaseSelect$2f$Polite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/BaseSelect/Polite.js [app-client] (ecmascript)");
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
    "showSearch",
    "tagRender",
    "direction",
    "omitDomProps",
    "displayValues",
    "onDisplayValuesChange",
    "emptyOptions",
    "notFoundContent",
    "onClear",
    "mode",
    "disabled",
    "loading",
    "getInputElement",
    "getRawInputElement",
    "open",
    "defaultOpen",
    "onDropdownVisibleChange",
    "activeValue",
    "onActiveValueChange",
    "activeDescendantId",
    "searchValue",
    "autoClearSearchValue",
    "onSearch",
    "onSearchSplit",
    "tokenSeparators",
    "allowClear",
    "suffixIcon",
    "clearIcon",
    "OptionList",
    "animation",
    "transitionName",
    "dropdownStyle",
    "dropdownClassName",
    "dropdownMatchSelectWidth",
    "dropdownRender",
    "dropdownAlign",
    "placement",
    "builtinPlacements",
    "getPopupContainer",
    "showAction",
    "onFocus",
    "onBlur",
    "onKeyUp",
    "onKeyDown",
    "onMouseDown"
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
var DEFAULT_OMIT_PROPS = [
    'value',
    'onChange',
    'removeIcon',
    'placeholder',
    'autoFocus',
    'maxTagCount',
    'maxTagTextLength',
    'maxTagPlaceholder',
    'choiceTransitionName',
    'onInputKeyDown',
    'onPopupScroll',
    'tabIndex'
];
var isMultiple = function isMultiple(mode) {
    return mode === 'tags' || mode === 'multiple';
};
var BaseSelect = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var _customizeRawInputEle;
    var id = props.id, prefixCls = props.prefixCls, className = props.className, showSearch = props.showSearch, tagRender = props.tagRender, direction = props.direction, omitDomProps = props.omitDomProps, displayValues = props.displayValues, onDisplayValuesChange = props.onDisplayValuesChange, emptyOptions = props.emptyOptions, _props$notFoundConten = props.notFoundContent, notFoundContent = _props$notFoundConten === void 0 ? 'Not Found' : _props$notFoundConten, onClear = props.onClear, mode = props.mode, disabled = props.disabled, loading = props.loading, getInputElement = props.getInputElement, getRawInputElement = props.getRawInputElement, open = props.open, defaultOpen = props.defaultOpen, onDropdownVisibleChange = props.onDropdownVisibleChange, activeValue = props.activeValue, onActiveValueChange = props.onActiveValueChange, activeDescendantId = props.activeDescendantId, searchValue = props.searchValue, autoClearSearchValue = props.autoClearSearchValue, onSearch = props.onSearch, onSearchSplit = props.onSearchSplit, tokenSeparators = props.tokenSeparators, allowClear = props.allowClear, suffixIcon = props.suffixIcon, clearIcon = props.clearIcon, OptionList = props.OptionList, animation = props.animation, transitionName = props.transitionName, dropdownStyle = props.dropdownStyle, dropdownClassName = props.dropdownClassName, dropdownMatchSelectWidth = props.dropdownMatchSelectWidth, dropdownRender = props.dropdownRender, dropdownAlign = props.dropdownAlign, placement = props.placement, builtinPlacements = props.builtinPlacements, getPopupContainer = props.getPopupContainer, _props$showAction = props.showAction, showAction = _props$showAction === void 0 ? [] : _props$showAction, onFocus = props.onFocus, onBlur = props.onBlur, onKeyUp = props.onKeyUp, onKeyDown = props.onKeyDown, onMouseDown = props.onMouseDown, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    // ============================== MISC ==============================
    var multiple = isMultiple(mode);
    var mergedShowSearch = (showSearch !== undefined ? showSearch : multiple) || mode === 'combobox';
    var domProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, restProps);
    DEFAULT_OMIT_PROPS.forEach(function(propName) {
        delete domProps[propName];
    });
    omitDomProps === null || omitDomProps === void 0 || omitDomProps.forEach(function(propName) {
        delete domProps[propName];
    });
    // ============================= Mobile =============================
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(false), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), mobile = _React$useState2[0], setMobile = _React$useState2[1];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        // Only update on the client side
        setMobile((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])());
    }, []);
    // ============================== Refs ==============================
    var containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    var selectorDomRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    var triggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    var selectorRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    var listRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    var blurRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    /** Used for component focused management */ var _useDelayReset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useDelayReset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(), _useDelayReset2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useDelayReset, 3), mockFocused = _useDelayReset2[0], setMockFocused = _useDelayReset2[1], cancelSetMockFocused = _useDelayReset2[2];
    // =========================== Imperative ===========================
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useImperativeHandle(ref, function() {
        var _selectorRef$current, _selectorRef$current2;
        return {
            focus: (_selectorRef$current = selectorRef.current) === null || _selectorRef$current === void 0 ? void 0 : _selectorRef$current.focus,
            blur: (_selectorRef$current2 = selectorRef.current) === null || _selectorRef$current2 === void 0 ? void 0 : _selectorRef$current2.blur,
            scrollTo: function scrollTo(arg) {
                var _listRef$current;
                return (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(arg);
            },
            nativeElement: containerRef.current || selectorDomRef.current
        };
    });
    // ========================== Search Value ==========================
    var mergedSearchValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        var _displayValues$;
        if (mode !== 'combobox') {
            return searchValue;
        }
        var val = (_displayValues$ = displayValues[0]) === null || _displayValues$ === void 0 ? void 0 : _displayValues$.value;
        return typeof val === 'string' || typeof val === 'number' ? String(val) : '';
    }, [
        searchValue,
        mode,
        displayValues
    ]);
    // ========================== Custom Input ==========================
    // Only works in `combobox`
    var customizeInputElement = mode === 'combobox' && typeof getInputElement === 'function' && getInputElement() || null;
    // Used for customize replacement for `rc-cascader`
    var customizeRawInputElement = typeof getRawInputElement === 'function' && getRawInputElement();
    var customizeRawInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeRef"])(selectorDomRef, customizeRawInputElement === null || customizeRawInputElement === void 0 || (_customizeRawInputEle = customizeRawInputElement.props) === null || _customizeRawInputEle === void 0 ? void 0 : _customizeRawInputEle.ref);
    // ============================== Open ==============================
    // SSR not support Portal which means we need delay `open` for the first time render
    var _React$useState3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(false), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), rendered = _React$useState4[0], setRendered = _React$useState4[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
        setRendered(true);
    }, []);
    var _useMergedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, {
        defaultValue: defaultOpen,
        value: open
    }), _useMergedState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useMergedState, 2), innerOpen = _useMergedState2[0], setInnerOpen = _useMergedState2[1];
    var mergedOpen = rendered ? innerOpen : false;
    // Not trigger `open` in `combobox` when `notFoundContent` is empty
    var emptyListContent = !notFoundContent && emptyOptions;
    if (disabled || emptyListContent && mergedOpen && mode === 'combobox') {
        mergedOpen = false;
    }
    var triggerOpen = emptyListContent ? false : mergedOpen;
    var onToggleOpen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback(function(newOpen) {
        var nextOpen = newOpen !== undefined ? newOpen : !mergedOpen;
        if (!disabled) {
            setInnerOpen(nextOpen);
            if (mergedOpen !== nextOpen) {
                onDropdownVisibleChange === null || onDropdownVisibleChange === void 0 || onDropdownVisibleChange(nextOpen);
            }
        }
    }, [
        disabled,
        mergedOpen,
        setInnerOpen,
        onDropdownVisibleChange
    ]);
    // ============================= Search =============================
    var tokenWithEnter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        return (tokenSeparators || []).some(function(tokenSeparator) {
            return [
                '\n',
                '\r\n'
            ].includes(tokenSeparator);
        });
    }, [
        tokenSeparators
    ]);
    var _ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$SelectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) || {}, maxCount = _ref.maxCount, rawValues = _ref.rawValues;
    var onInternalSearch = function onInternalSearch(searchText, fromTyping, isCompositing) {
        if (multiple && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidCount"])(maxCount) && (rawValues === null || rawValues === void 0 ? void 0 : rawValues.size) >= maxCount) {
            return;
        }
        var ret = true;
        var newSearchText = searchText;
        onActiveValueChange === null || onActiveValueChange === void 0 || onActiveValueChange(null);
        var separatedList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeparatedContent"])(searchText, tokenSeparators, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidCount"])(maxCount) ? maxCount - rawValues.size : undefined);
        // Check if match the `tokenSeparators`
        var patchLabels = isCompositing ? null : separatedList;
        // Ignore combobox since it's not split-able
        if (mode !== 'combobox' && patchLabels) {
            newSearchText = '';
            onSearchSplit === null || onSearchSplit === void 0 || onSearchSplit(patchLabels);
            // Should close when paste finish
            onToggleOpen(false);
            // Tell Selector that break next actions
            ret = false;
        }
        if (onSearch && mergedSearchValue !== newSearchText) {
            onSearch(newSearchText, {
                source: fromTyping ? 'typing' : 'effect'
            });
        }
        return ret;
    };
    // Only triggered when menu is closed & mode is tags
    // If menu is open, OptionList will take charge
    // If mode isn't tags, press enter is not meaningful when you can't see any option
    var onInternalSearchSubmit = function onInternalSearchSubmit(searchText) {
        // prevent empty tags from appearing when you click the Enter button
        if (!searchText || !searchText.trim()) {
            return;
        }
        onSearch(searchText, {
            source: 'submit'
        });
    };
    // Close will clean up single mode search text
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        if (!mergedOpen && !multiple && mode !== 'combobox') {
            onInternalSearch('', false, false);
        }
    }, [
        mergedOpen
    ]);
    // ============================ Disabled ============================
    // Close dropdown & remove focus state when disabled change
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        if (innerOpen && disabled) {
            setInnerOpen(false);
        }
        // After onBlur is triggered, the focused does not need to be reset
        if (disabled && !blurRef.current) {
            setMockFocused(false);
        }
    }, [
        disabled
    ]);
    // ============================ Keyboard ============================
    /**
   * We record input value here to check if can press to clean up by backspace
   * - null: Key is not down, this is reset by key up
   * - true: Search text is empty when first time backspace down
   * - false: Search text is not empty when first time backspace down
   */ var _useLock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useLock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(), _useLock2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useLock, 2), getClearLock = _useLock2[0], setClearLock = _useLock2[1];
    var keyLockRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    // KeyDown
    var onInternalKeyDown = function onInternalKeyDown(event) {
        var clearLock = getClearLock();
        var key = event.key;
        var isEnterKey = key === 'Enter';
        if (isEnterKey) {
            // Do not submit form when type in the input
            if (mode !== 'combobox') {
                event.preventDefault();
            }
            // We only manage open state here, close logic should handle by list component
            if (!mergedOpen) {
                onToggleOpen(true);
            }
        }
        setClearLock(!!mergedSearchValue);
        // Remove value by `backspace`
        if (key === 'Backspace' && !clearLock && multiple && !mergedSearchValue && displayValues.length) {
            var cloneDisplayValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(displayValues);
            var removedDisplayValue = null;
            for(var i = cloneDisplayValues.length - 1; i >= 0; i -= 1){
                var current = cloneDisplayValues[i];
                if (!current.disabled) {
                    cloneDisplayValues.splice(i, 1);
                    removedDisplayValue = current;
                    break;
                }
            }
            if (removedDisplayValue) {
                onDisplayValuesChange(cloneDisplayValues, {
                    type: 'remove',
                    values: [
                        removedDisplayValue
                    ]
                });
            }
        }
        for(var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            rest[_key - 1] = arguments[_key];
        }
        if (mergedOpen && (!isEnterKey || !keyLockRef.current)) {
            var _listRef$current2;
            (_listRef$current2 = listRef.current) === null || _listRef$current2 === void 0 || _listRef$current2.onKeyDown.apply(_listRef$current2, [
                event
            ].concat(rest));
        }
        if (isEnterKey) {
            keyLockRef.current = true;
        }
        onKeyDown === null || onKeyDown === void 0 || onKeyDown.apply(void 0, [
            event
        ].concat(rest));
    };
    // KeyUp
    var onInternalKeyUp = function onInternalKeyUp(event) {
        for(var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
            rest[_key2 - 1] = arguments[_key2];
        }
        if (mergedOpen) {
            var _listRef$current3;
            (_listRef$current3 = listRef.current) === null || _listRef$current3 === void 0 || _listRef$current3.onKeyUp.apply(_listRef$current3, [
                event
            ].concat(rest));
        }
        if (event.key === 'Enter') {
            keyLockRef.current = false;
        }
        onKeyUp === null || onKeyUp === void 0 || onKeyUp.apply(void 0, [
            event
        ].concat(rest));
    };
    // ============================ Selector ============================
    var onSelectorRemove = function onSelectorRemove(val) {
        var newValues = displayValues.filter(function(i) {
            return i !== val;
        });
        onDisplayValuesChange(newValues, {
            type: 'remove',
            values: [
                val
            ]
        });
    };
    // ========================== Focus / Blur ==========================
    /** Record real focus status */ var focusRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    var onContainerFocus = function onContainerFocus() {
        setMockFocused(true);
        if (!disabled) {
            if (onFocus && !focusRef.current) {
                onFocus.apply(void 0, arguments);
            }
            // `showAction` should handle `focus` if set
            if (showAction.includes('focus')) {
                onToggleOpen(true);
            }
        }
        focusRef.current = true;
    };
    var onContainerBlur = function onContainerBlur() {
        blurRef.current = true;
        setMockFocused(false, function() {
            focusRef.current = false;
            blurRef.current = false;
            onToggleOpen(false);
        });
        if (disabled) {
            return;
        }
        if (mergedSearchValue) {
            // `tags` mode should move `searchValue` into values
            if (mode === 'tags') {
                onSearch(mergedSearchValue, {
                    source: 'submit'
                });
            } else if (mode === 'multiple') {
                // `multiple` mode only clean the search value but not trigger event
                onSearch('', {
                    source: 'blur'
                });
            }
        }
        if (onBlur) {
            onBlur.apply(void 0, arguments);
        }
    };
    // Give focus back of Select
    var activeTimeoutIds = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        return function() {
            activeTimeoutIds.forEach(function(timeoutId) {
                return clearTimeout(timeoutId);
            });
            activeTimeoutIds.splice(0, activeTimeoutIds.length);
        };
    }, []);
    var onInternalMouseDown = function onInternalMouseDown(event) {
        var _triggerRef$current;
        var target = event.target;
        var popupElement = (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.getPopupElement();
        // We should give focus back to selector if clicked item is not focusable
        if (popupElement && popupElement.contains(target)) {
            var timeoutId = setTimeout(function() {
                var index = activeTimeoutIds.indexOf(timeoutId);
                if (index !== -1) {
                    activeTimeoutIds.splice(index, 1);
                }
                cancelSetMockFocused();
                if (!mobile && !popupElement.contains(document.activeElement)) {
                    var _selectorRef$current3;
                    (_selectorRef$current3 = selectorRef.current) === null || _selectorRef$current3 === void 0 || _selectorRef$current3.focus();
                }
            });
            activeTimeoutIds.push(timeoutId);
        }
        for(var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++){
            restArgs[_key3 - 1] = arguments[_key3];
        }
        onMouseDown === null || onMouseDown === void 0 || onMouseDown.apply(void 0, [
            event
        ].concat(restArgs));
    };
    // ============================ Dropdown ============================
    var _React$useState5 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({}), _React$useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState5, 2), forceUpdate = _React$useState6[1];
    // We need force update here since popup dom is render async
    function onPopupMouseEnter() {
        forceUpdate({});
    }
    // Used for raw custom input trigger
    var onTriggerVisibleChange;
    if (customizeRawInputElement) {
        onTriggerVisibleChange = function onTriggerVisibleChange(newOpen) {
            onToggleOpen(newOpen);
        };
    }
    // Close when click on non-select element
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useSelectTriggerControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
        var _triggerRef$current2;
        return [
            containerRef.current,
            (_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0 ? void 0 : _triggerRef$current2.getPopupElement()
        ];
    }, triggerOpen, onToggleOpen, !!customizeRawInputElement);
    // ============================ Context =============================
    var baseSelectContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props), {}, {
            notFoundContent: notFoundContent,
            open: mergedOpen,
            triggerOpen: triggerOpen,
            id: id,
            showSearch: mergedShowSearch,
            multiple: multiple,
            toggleOpen: onToggleOpen
        });
    }, [
        props,
        notFoundContent,
        triggerOpen,
        mergedOpen,
        id,
        mergedShowSearch,
        multiple,
        onToggleOpen
    ]);
    // ==================================================================
    // ==                            Render                            ==
    // ==================================================================
    // ============================= Arrow ==============================
    var showSuffixIcon = !!suffixIcon || loading;
    var arrowNode;
    if (showSuffixIcon) {
        arrowNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$TransBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-arrow"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-arrow-loading"), loading)),
            customizeIcon: suffixIcon,
            customizeIconProps: {
                loading: loading,
                searchValue: mergedSearchValue,
                open: mergedOpen,
                focused: mockFocused,
                showSearch: mergedShowSearch
            }
        });
    }
    // ============================= Clear ==============================
    var onClearMouseDown = function onClearMouseDown() {
        var _selectorRef$current4;
        onClear === null || onClear === void 0 || onClear();
        (_selectorRef$current4 = selectorRef.current) === null || _selectorRef$current4 === void 0 || _selectorRef$current4.focus();
        onDisplayValuesChange([], {
            type: 'clear',
            values: displayValues
        });
        onInternalSearch('', false, false);
    };
    var _useAllowClear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useAllowClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllowClear"])(prefixCls, onClearMouseDown, displayValues, allowClear, clearIcon, disabled, mergedSearchValue, mode), mergedAllowClear = _useAllowClear.allowClear, clearNode = _useAllowClear.clearIcon;
    // =========================== OptionList ===========================
    var optionList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(OptionList, {
        ref: listRef
    });
    // ============================= Select =============================
    var mergedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, className, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-focused"), mockFocused), "".concat(prefixCls, "-multiple"), multiple), "".concat(prefixCls, "-single"), !multiple), "".concat(prefixCls, "-allow-clear"), allowClear), "".concat(prefixCls, "-show-arrow"), showSuffixIcon), "".concat(prefixCls, "-disabled"), disabled), "".concat(prefixCls, "-loading"), loading), "".concat(prefixCls, "-open"), mergedOpen), "".concat(prefixCls, "-customize-input"), customizeInputElement), "".concat(prefixCls, "-show-search"), mergedShowSearch));
    // >>> Selector
    var selectorNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$SelectTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: triggerRef,
        disabled: disabled,
        prefixCls: prefixCls,
        visible: triggerOpen,
        popupElement: optionList,
        animation: animation,
        transitionName: transitionName,
        dropdownStyle: dropdownStyle,
        dropdownClassName: dropdownClassName,
        direction: direction,
        dropdownMatchSelectWidth: dropdownMatchSelectWidth,
        dropdownRender: dropdownRender,
        dropdownAlign: dropdownAlign,
        placement: placement,
        builtinPlacements: builtinPlacements,
        getPopupContainer: getPopupContainer,
        empty: emptyOptions,
        getTriggerDOMNode: function getTriggerDOMNode(node) {
            return(// TODO: This is workaround and should be removed in `rc-select`
            // And use new standard `nativeElement` for ref.
            // But we should update `rc-resize-observer` first.
            selectorDomRef.current || node);
        },
        onPopupVisibleChange: onTriggerVisibleChange,
        onPopupMouseEnter: onPopupMouseEnter
    }, customizeRawInputElement ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(customizeRawInputElement, {
        ref: customizeRawInputRef
    }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$Selector$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        domRef: selectorDomRef,
        prefixCls: prefixCls,
        inputElement: customizeInputElement,
        ref: selectorRef,
        id: id,
        showSearch: mergedShowSearch,
        autoClearSearchValue: autoClearSearchValue,
        mode: mode,
        activeDescendantId: activeDescendantId,
        tagRender: tagRender,
        values: displayValues,
        open: mergedOpen,
        onToggleOpen: onToggleOpen,
        activeValue: activeValue,
        searchValue: mergedSearchValue,
        onSearch: onInternalSearch,
        onSearchSubmit: onInternalSearchSubmit,
        onRemove: onSelectorRemove,
        tokenWithEnter: tokenWithEnter
    })));
    // >>> Render
    var renderNode;
    // Render raw
    if (customizeRawInputElement) {
        renderNode = selectorNode;
    } else {
        renderNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            className: mergedClassName
        }, domProps, {
            ref: containerRef,
            onMouseDown: onInternalMouseDown,
            onKeyDown: onInternalKeyDown,
            onKeyUp: onInternalKeyUp,
            onFocus: onContainerFocus,
            onBlur: onContainerBlur
        }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$BaseSelect$2f$Polite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            visible: mockFocused && !mergedOpen,
            values: displayValues
        }), selectorNode, arrowNode, mergedAllowClear && clearNode);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseSelectContext"].Provider, {
        value: baseSelectContext
    }, renderNode);
});
// Set display name for dev
if ("TURBOPACK compile-time truthy", 1) {
    BaseSelect.displayName = 'BaseSelect';
}
const __TURBOPACK__default__export__ = BaseSelect;

})()),
"[project]/node_modules/rc-select/es/OptGroup.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/* istanbul ignore file */ /** This is a placeholder, not real render in dom */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var OptGroup = function OptGroup() {
    return null;
};
OptGroup.isSelectOptGroup = true;
const __TURBOPACK__default__export__ = OptGroup;

})()),
"[project]/node_modules/rc-select/es/Option.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/* istanbul ignore file */ /** This is a placeholder, not real render in dom */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var Option = function Option() {
    return null;
};
Option.isSelectOption = true;
const __TURBOPACK__default__export__ = Option;

})()),
"[project]/node_modules/rc-select/es/utils/platformUtil.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/* istanbul ignore file */ __turbopack_esm__({
    "isPlatformMac": ()=>isPlatformMac
});
function isPlatformMac() {
    return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}

})()),
"[project]/node_modules/rc-select/es/OptionList.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/KeyCode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useMemo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/omit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/pickAttrs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$SelectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/SelectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$TransBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/TransBtn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/hooks/useBaseProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$platformUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/utils/platformUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/utils/valueUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
var _excluded = [
    "disabled",
    "title",
    "children",
    "style",
    "className"
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
// export interface OptionListProps<OptionsType extends object[]> {
function isTitleType(content) {
    return typeof content === 'string' || typeof content === 'number';
}
/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */ var OptionList = function OptionList(_, ref) {
    var _useBaseProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(), prefixCls = _useBaseProps.prefixCls, id = _useBaseProps.id, open = _useBaseProps.open, multiple = _useBaseProps.multiple, mode = _useBaseProps.mode, searchValue = _useBaseProps.searchValue, toggleOpen = _useBaseProps.toggleOpen, notFoundContent = _useBaseProps.notFoundContent, onPopupScroll = _useBaseProps.onPopupScroll;
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$SelectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), maxCount = _React$useContext.maxCount, flattenOptions = _React$useContext.flattenOptions, onActiveValue = _React$useContext.onActiveValue, defaultActiveFirstOption = _React$useContext.defaultActiveFirstOption, onSelect = _React$useContext.onSelect, menuItemSelectedIcon = _React$useContext.menuItemSelectedIcon, rawValues = _React$useContext.rawValues, fieldNames = _React$useContext.fieldNames, virtual = _React$useContext.virtual, direction = _React$useContext.direction, listHeight = _React$useContext.listHeight, listItemHeight = _React$useContext.listItemHeight, optionRender = _React$useContext.optionRender;
    var itemPrefixCls = "".concat(prefixCls, "-item");
    var memoFlattenOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
        return flattenOptions;
    }, [
        open,
        flattenOptions
    ], function(prev, next) {
        return next[0] && prev[1] !== next[1];
    });
    // =========================== List ===========================
    var listRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    var overMaxCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        return multiple && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidCount"])(maxCount) && (rawValues === null || rawValues === void 0 ? void 0 : rawValues.size) >= maxCount;
    }, [
        multiple,
        maxCount,
        rawValues === null || rawValues === void 0 ? void 0 : rawValues.size
    ]);
    var onListMouseDown = function onListMouseDown(event) {
        event.preventDefault();
    };
    var scrollIntoView = function scrollIntoView(args) {
        var _listRef$current;
        (_listRef$current = listRef.current) === null || _listRef$current === void 0 || _listRef$current.scrollTo(typeof args === 'number' ? {
            index: args
        } : args);
    };
    // ========================== Active ==========================
    var getEnabledActiveIndex = function getEnabledActiveIndex(index) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var len = memoFlattenOptions.length;
        for(var i = 0; i < len; i += 1){
            var current = (index + i * offset + len) % len;
            var _ref = memoFlattenOptions[current] || {}, group = _ref.group, data = _ref.data;
            if (!group && !(data !== null && data !== void 0 && data.disabled) && !overMaxCount) {
                return current;
            }
        }
        return -1;
    };
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(function() {
        return getEnabledActiveIndex(0);
    }), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), activeIndex = _React$useState2[0], setActiveIndex = _React$useState2[1];
    var setActive = function setActive(index) {
        var fromKeyboard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        setActiveIndex(index);
        var info = {
            source: fromKeyboard ? 'keyboard' : 'mouse'
        };
        // Trigger active event
        var flattenItem = memoFlattenOptions[index];
        if (!flattenItem) {
            onActiveValue(null, -1, info);
            return;
        }
        onActiveValue(flattenItem.value, index, info);
    };
    // Auto active first item when list length or searchValue changed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
    }, [
        memoFlattenOptions.length,
        searchValue
    ]);
    // https://github.com/ant-design/ant-design/issues/34975
    var isSelected = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback(function(value) {
        return rawValues.has(value) && mode !== 'combobox';
    }, [
        mode,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(rawValues).toString(),
        rawValues.size
    ]);
    // Auto scroll to item position in single mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        /**
     * React will skip `onChange` when component update.
     * `setActive` function will call root accessibility state update which makes re-render.
     * So we need to delay to let Input component trigger onChange first.
     */ var timeoutId = setTimeout(function() {
            if (!multiple && open && rawValues.size === 1) {
                var value = Array.from(rawValues)[0];
                var index = memoFlattenOptions.findIndex(function(_ref2) {
                    var data = _ref2.data;
                    return data.value === value;
                });
                if (index !== -1) {
                    setActive(index);
                    scrollIntoView(index);
                }
            }
        });
        // Force trigger scrollbar visible when open
        if (open) {
            var _listRef$current2;
            (_listRef$current2 = listRef.current) === null || _listRef$current2 === void 0 || _listRef$current2.scrollTo(undefined);
        }
        return function() {
            return clearTimeout(timeoutId);
        };
    }, [
        open,
        searchValue
    ]);
    // ========================== Values ==========================
    var onSelectValue = function onSelectValue(value) {
        if (value !== undefined) {
            onSelect(value, {
                selected: !rawValues.has(value)
            });
        }
        // Single mode should always close by select
        if (!multiple) {
            toggleOpen(false);
        }
    };
    // ========================= Keyboard =========================
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useImperativeHandle(ref, function() {
        return {
            onKeyDown: function onKeyDown(event) {
                var which = event.which, ctrlKey = event.ctrlKey;
                switch(which){
                    // >>> Arrow keys & ctrl + n/p on Mac
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].N:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].P:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].UP:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DOWN:
                        {
                            var offset = 0;
                            if (which === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].UP) {
                                offset = -1;
                            } else if (which === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DOWN) {
                                offset = 1;
                            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$platformUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlatformMac"])() && ctrlKey) {
                                if (which === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].N) {
                                    offset = 1;
                                } else if (which === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].P) {
                                    offset = -1;
                                }
                            }
                            if (offset !== 0) {
                                var nextActiveIndex = getEnabledActiveIndex(activeIndex + offset, offset);
                                scrollIntoView(nextActiveIndex);
                                setActive(nextActiveIndex, true);
                            }
                            break;
                        }
                    // >>> Select
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ENTER:
                        {
                            var _item$data;
                            // value
                            var item = memoFlattenOptions[activeIndex];
                            if (item && !(item !== null && item !== void 0 && (_item$data = item.data) !== null && _item$data !== void 0 && _item$data.disabled) && !overMaxCount) {
                                onSelectValue(item.value);
                            } else {
                                onSelectValue(undefined);
                            }
                            if (open) {
                                event.preventDefault();
                            }
                            break;
                        }
                    // >>> Close
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ESC:
                        {
                            toggleOpen(false);
                            if (open) {
                                event.stopPropagation();
                            }
                        }
                }
            },
            onKeyUp: function onKeyUp() {},
            scrollTo: function scrollTo(index) {
                scrollIntoView(index);
            }
        };
    });
    // ========================== Render ==========================
    if (memoFlattenOptions.length === 0) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
            role: "listbox",
            id: "".concat(id, "_list"),
            className: "".concat(itemPrefixCls, "-empty"),
            onMouseDown: onListMouseDown
        }, notFoundContent);
    }
    var omitFieldNameList = Object.keys(fieldNames).map(function(key) {
        return fieldNames[key];
    });
    var getLabel = function getLabel(item) {
        return item.label;
    };
    function getItemAriaProps(item, index) {
        var group = item.group;
        return {
            role: group ? 'presentation' : 'option',
            id: "".concat(id, "_list_").concat(index)
        };
    }
    var renderItem = function renderItem(index) {
        var item = memoFlattenOptions[index];
        if (!item) {
            return null;
        }
        var itemData = item.data || {};
        var value = itemData.value;
        var group = item.group;
        var attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(itemData, true);
        var mergedLabel = getLabel(item);
        return item ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            "aria-label": typeof mergedLabel === 'string' && !group ? mergedLabel : null
        }, attrs, {
            key: index
        }, getItemAriaProps(item, index), {
            "aria-selected": isSelected(value)
        }), value) : null;
    };
    var a11yProps = {
        role: 'listbox',
        id: "".concat(id, "_list")
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, null, virtual && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, a11yProps, {
        style: {
            height: 0,
            width: 0,
            overflow: 'hidden'
        }
    }), renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        itemKey: "key",
        ref: listRef,
        data: memoFlattenOptions,
        height: listHeight,
        itemHeight: listItemHeight,
        fullHeight: false,
        onMouseDown: onListMouseDown,
        onScroll: onPopupScroll,
        virtual: virtual,
        direction: direction,
        innerProps: virtual ? null : a11yProps
    }, function(item, itemIndex) {
        var group = item.group, groupOption = item.groupOption, data = item.data, label = item.label, value = item.value;
        var key = data.key;
        // Group
        if (group) {
            var _data$title;
            var groupTitle = (_data$title = data.title) !== null && _data$title !== void 0 ? _data$title : isTitleType(label) ? label.toString() : undefined;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(itemPrefixCls, "".concat(itemPrefixCls, "-group"), data.className),
                title: groupTitle
            }, label !== undefined ? label : key);
        }
        var disabled = data.disabled, title = data.title, children = data.children, style = data.style, className = data.className, otherProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data, _excluded);
        var passedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(otherProps, omitFieldNameList);
        // Option
        var selected = isSelected(value);
        var mergedDisabled = disabled || !selected && overMaxCount;
        var optionPrefixCls = "".concat(itemPrefixCls, "-option");
        var optionClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(itemPrefixCls, optionPrefixCls, className, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, "".concat(optionPrefixCls, "-grouped"), groupOption), "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !mergedDisabled), "".concat(optionPrefixCls, "-disabled"), mergedDisabled), "".concat(optionPrefixCls, "-selected"), selected));
        var mergedLabel = getLabel(item);
        var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected;
        // https://github.com/ant-design/ant-design/issues/34145
        var content = typeof mergedLabel === 'number' ? mergedLabel : mergedLabel || value;
        // https://github.com/ant-design/ant-design/issues/26717
        var optionTitle = isTitleType(content) ? content.toString() : undefined;
        if (title !== undefined) {
            optionTitle = title;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(passedProps), !virtual ? getItemAriaProps(item, itemIndex) : {}, {
            "aria-selected": selected,
            className: optionClassName,
            title: optionTitle,
            onMouseMove: function onMouseMove() {
                if (activeIndex === itemIndex || mergedDisabled) {
                    return;
                }
                setActive(itemIndex);
            },
            onClick: function onClick() {
                if (!mergedDisabled) {
                    onSelectValue(value);
                }
            },
            style: style
        }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", {
            className: "".concat(optionPrefixCls, "-content")
        }, typeof optionRender === 'function' ? optionRender(item, {
            index: itemIndex
        }) : content), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(menuItemSelectedIcon) || selected, iconVisible && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$TransBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "".concat(itemPrefixCls, "-option-state"),
            customizeIcon: menuItemSelectedIcon,
            customizeIconProps: {
                value: value,
                disabled: mergedDisabled,
                isSelected: selected
            }
        }, selected ? '✓' : null));
    }));
};
var RefOptionList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(OptionList);
if ("TURBOPACK compile-time truthy", 1) {
    RefOptionList.displayName = 'OptionList';
}
const __TURBOPACK__default__export__ = RefOptionList;

})()),
"[project]/node_modules/rc-select/es/hooks/useCache.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const __TURBOPACK__default__export__ = function(labeledValues, valueOptions) {
    var cacheRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef({
        values: new Map(),
        options: new Map()
    });
    var filledLabeledValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        var _cacheRef$current = cacheRef.current, prevValueCache = _cacheRef$current.values, prevOptionCache = _cacheRef$current.options;
        // Fill label by cache
        var patchedValues = labeledValues.map(function(item) {
            if (item.label === undefined) {
                var _prevValueCache$get;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, item), {}, {
                    label: (_prevValueCache$get = prevValueCache.get(item.value)) === null || _prevValueCache$get === void 0 ? void 0 : _prevValueCache$get.label
                });
            }
            return item;
        });
        // Refresh cache
        var valueCache = new Map();
        var optionCache = new Map();
        patchedValues.forEach(function(item) {
            valueCache.set(item.value, item);
            optionCache.set(item.value, valueOptions.get(item.value) || prevOptionCache.get(item.value));
        });
        cacheRef.current.values = valueCache;
        cacheRef.current.options = optionCache;
        return patchedValues;
    }, [
        labeledValues,
        valueOptions
    ]);
    var getOption = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback(function(val) {
        return valueOptions.get(val) || cacheRef.current.options.get(val);
    }, [
        valueOptions
    ]);
    return [
        filledLabeledValues,
        getOption
    ];
};

})()),
"[project]/node_modules/rc-select/es/hooks/useFilterOptions.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/utils/commonUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/utils/valueUtil.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
function includes(test, search) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(test).join('').toUpperCase().includes(search);
}
const __TURBOPACK__default__export__ = function(options, fieldNames, searchValue, filterOption, optionFilterProp) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        if (!searchValue || filterOption === false) {
            return options;
        }
        var fieldOptions = fieldNames.options, fieldLabel = fieldNames.label, fieldValue = fieldNames.value;
        var filteredOptions = [];
        var customizeFilter = typeof filterOption === 'function';
        var upperSearch = searchValue.toUpperCase();
        var filterFunc = customizeFilter ? filterOption : function(_, option) {
            // Use provided `optionFilterProp`
            if (optionFilterProp) {
                return includes(option[optionFilterProp], upperSearch);
            }
            // Auto select `label` or `value` by option type
            if (option[fieldOptions]) {
                // hack `fieldLabel` since `OptionGroup` children is not `label`
                return includes(option[fieldLabel !== 'children' ? fieldLabel : 'label'], upperSearch);
            }
            return includes(option[fieldValue], upperSearch);
        };
        var wrapOption = customizeFilter ? function(opt) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectPropsWithOption"])(opt);
        } : function(opt) {
            return opt;
        };
        options.forEach(function(item) {
            // Group should check child options
            if (item[fieldOptions]) {
                // Check group first
                var matchGroup = filterFunc(searchValue, wrapOption(item));
                if (matchGroup) {
                    filteredOptions.push(item);
                } else {
                    // Check option
                    var subOptions = item[fieldOptions].filter(function(subItem) {
                        return filterFunc(searchValue, wrapOption(subItem));
                    });
                    if (subOptions.length) {
                        filteredOptions.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, item), {}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, fieldOptions, subOptions)));
                    }
                }
                return;
            }
            if (filterFunc(searchValue, wrapOption(item))) {
                filteredOptions.push(item);
            }
        });
        return filteredOptions;
    }, [
        options,
        filterOption,
        optionFilterProp,
        searchValue,
        fieldNames
    ]);
};

})()),
"[project]/node_modules/rc-select/es/hooks/useId.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useId,
    "getUUID": ()=>getUUID,
    "isBrowserClient": ()=>isBrowserClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/Dom/canUseDom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
var uuid = 0;
var isBrowserClient = ("TURBOPACK compile-time value", "development") !== 'test' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
function getUUID() {
    var retId;
    // Test never reach
    /* istanbul ignore if */ if (isBrowserClient) {
        retId = uuid;
        uuid += 1;
    } else {
        retId = 'TEST_OR_SSR';
    }
    return retId;
}
function useId(id) {
    // Inner id for accessibility usage. Only work in client side
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), innerId = _React$useState2[0], setInnerId = _React$useState2[1];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        setInnerId("rc_select_".concat(getUUID()));
    }, []);
    return id || innerId;
}

})()),
"[project]/node_modules/rc-select/es/utils/legacyUtil.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "convertChildrenToData": ()=>convertChildrenToData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/Children/toArray.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
var _excluded = [
    "children",
    "value"
], _excluded2 = [
    "children"
];
;
;
function convertNodeToOption(node) {
    var _ref = node, key = _ref.key, _ref$props = _ref.props, children = _ref$props.children, value = _ref$props.value, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref$props, _excluded);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        key: key,
        value: value !== undefined ? value : key,
        children: children
    }, restProps);
}
function convertChildrenToData(nodes) {
    var optionOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(nodes).map(function(node, index) {
        if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(node) || !node.type) {
            return null;
        }
        var _ref2 = node, isSelectOptGroup = _ref2.type.isSelectOptGroup, key = _ref2.key, _ref2$props = _ref2.props, children = _ref2$props.children, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref2$props, _excluded2);
        if (optionOnly || !isSelectOptGroup) {
            return convertNodeToOption(node);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            key: "__RC_SELECT_GRP__".concat(key === null ? index : key, "__"),
            label: key
        }, restProps), {}, {
            options: convertChildrenToData(children)
        });
    }).filter(function(data) {
        return data;
    });
}

})()),
"[project]/node_modules/rc-select/es/hooks/useOptions.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/utils/legacyUtil.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
/**
 * Parse `children` to `options` if `options` is not provided.
 * Then flatten the `options`.
 */ var useOptions = function useOptions(options, children, fieldNames, optionFilterProp, optionLabelProp) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        var mergedOptions = options;
        var childrenAsData = !options;
        if (childrenAsData) {
            mergedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertChildrenToData"])(children);
        }
        var valueOptions = new Map();
        var labelOptions = new Map();
        var setLabelOptions = function setLabelOptions(labelOptionsMap, option, key) {
            if (key && typeof key === 'string') {
                labelOptionsMap.set(option[key], option);
            }
        };
        var dig = function dig(optionList) {
            var isChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            // for loop to speed up collection speed
            for(var i = 0; i < optionList.length; i += 1){
                var option = optionList[i];
                if (!option[fieldNames.options] || isChildren) {
                    valueOptions.set(option[fieldNames.value], option);
                    setLabelOptions(labelOptions, option, fieldNames.label);
                    // https://github.com/ant-design/ant-design/issues/35304
                    setLabelOptions(labelOptions, option, optionFilterProp);
                    setLabelOptions(labelOptions, option, optionLabelProp);
                } else {
                    dig(option[fieldNames.options], true);
                }
            }
        };
        dig(mergedOptions);
        return {
            options: mergedOptions,
            valueOptions: valueOptions,
            labelOptions: labelOptions
        };
    }, [
        options,
        children,
        fieldNames,
        optionFilterProp,
        optionLabelProp
    ]);
};
const __TURBOPACK__default__export__ = useOptions;

})()),
"[project]/node_modules/rc-select/es/hooks/useRefFunc.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useRefFunc
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function useRefFunc(callback) {
    var funcRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef();
    funcRef.current = callback;
    var cacheFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback(function() {
        return funcRef.current.apply(funcRef, arguments);
    }, []);
    return cacheFn;
}

})()),
"[project]/node_modules/rc-select/es/utils/warningPropsUtil.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "warningNullOptions": ()=>warningNullOptions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/Children/toArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$BaseSelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/BaseSelect/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/utils/commonUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/utils/legacyUtil.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
function warningProps(props) {
    var mode = props.mode, options = props.options, children = props.children, backfill = props.backfill, allowClear = props.allowClear, placeholder = props.placeholder, getInputElement = props.getInputElement, showSearch = props.showSearch, onSearch = props.onSearch, defaultOpen = props.defaultOpen, autoFocus = props.autoFocus, labelInValue = props.labelInValue, value = props.value, inputValue = props.inputValue, optionLabelProp = props.optionLabelProp;
    var multiple = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$BaseSelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMultiple"])(mode);
    var mergedShowSearch = showSearch !== undefined ? showSearch : multiple || mode === 'combobox';
    var mergedOptions = options || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertChildrenToData"])(children);
    // `tags` should not set option as disabled
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mode !== 'tags' || mergedOptions.every(function(opt) {
        return !opt.disabled;
    }), 'Please avoid setting option to disabled in tags mode since user can always type text as tag.');
    // `combobox` & `tags` should option be `string` type
    if (mode === 'tags' || mode === 'combobox') {
        var hasNumberValue = mergedOptions.some(function(item) {
            if (item.options) {
                return item.options.some(function(opt) {
                    return typeof ('value' in opt ? opt.value : opt.key) === 'number';
                });
            }
            return typeof ('value' in item ? item.value : item.key) === 'number';
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!hasNumberValue, '`value` of Option should not use number type when `mode` is `tags` or `combobox`.');
    }
    // `combobox` should not use `optionLabelProp`
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mode !== 'combobox' || !optionLabelProp, '`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly.');
    // Only `combobox` support `backfill`
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mode === 'combobox' || !backfill, '`backfill` only works with `combobox` mode.');
    // Only `combobox` support `getInputElement`
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mode === 'combobox' || !getInputElement, '`getInputElement` only work with `combobox` mode.');
    // Customize `getInputElement` should not use `allowClear` & `placeholder`
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noteOnce"])(mode !== 'combobox' || !getInputElement || !allowClear || !placeholder, 'Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`.');
    // `onSearch` should use in `combobox` or `showSearch`
    if (onSearch && !mergedShowSearch && mode !== 'combobox' && mode !== 'tags') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, '`onSearch` should work with `showSearch` instead of use alone.');
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noteOnce"])(!defaultOpen || autoFocus, '`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed.');
    if (value !== undefined && value !== null) {
        var values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(value);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!labelInValue || values.every(function(val) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(val) === 'object' && ('key' in val || 'value' in val);
        }), '`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!multiple || Array.isArray(value), '`value` should be array when `mode` is `multiple` or `tags`');
    }
    // Syntactic sugar should use correct children type
    if (children) {
        var invalidateChildType = null;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(children).some(function(node) {
            if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(node) || !node.type) {
                return false;
            }
            var _ref = node, type = _ref.type;
            if (type.isSelectOption) {
                return false;
            }
            if (type.isSelectOptGroup) {
                var allChildrenValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node.props.children).every(function(subNode) {
                    if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(subNode) || !node.type || subNode.type.isSelectOption) {
                        return true;
                    }
                    invalidateChildType = subNode.type;
                    return false;
                });
                if (allChildrenValid) {
                    return false;
                }
                return true;
            }
            invalidateChildType = type;
            return true;
        });
        if (invalidateChildType) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(invalidateChildType.displayName || invalidateChildType.name || invalidateChildType, "`."));
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(inputValue === undefined, '`inputValue` is deprecated, please use `searchValue` instead.');
    }
}
function warningNullOptions(options, fieldNames) {
    if (options) {
        var recursiveOptions = function recursiveOptions(optionsList) {
            var inGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            for(var i = 0; i < optionsList.length; i++){
                var option = optionsList[i];
                if (option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.value] === null) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, '`value` in Select options should not be `null`.');
                    return true;
                }
                if (!inGroup && Array.isArray(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.options]) && recursiveOptions(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.options], true)) {
                    break;
                }
            }
        };
        recursiveOptions(options);
    }
}
const __TURBOPACK__default__export__ = warningProps;

})()),
"[project]/node_modules/rc-select/es/Select.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useMergedState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$BaseSelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/BaseSelect/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$OptGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/OptGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/Option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$OptionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/OptionList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$SelectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/SelectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/hooks/useCache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useFilterOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/hooks/useFilterOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/hooks/useId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/hooks/useOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useRefFunc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/hooks/useRefFunc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/utils/commonUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/utils/valueUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$warningPropsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/utils/warningPropsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
var _excluded = [
    "id",
    "mode",
    "prefixCls",
    "backfill",
    "fieldNames",
    "inputValue",
    "searchValue",
    "onSearch",
    "autoClearSearchValue",
    "onSelect",
    "onDeselect",
    "dropdownMatchSelectWidth",
    "filterOption",
    "filterSort",
    "optionFilterProp",
    "optionLabelProp",
    "options",
    "optionRender",
    "children",
    "defaultActiveFirstOption",
    "menuItemSelectedIcon",
    "virtual",
    "direction",
    "listHeight",
    "listItemHeight",
    "labelRender",
    "value",
    "defaultValue",
    "labelInValue",
    "onChange",
    "maxCount"
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
var OMIT_DOM_PROPS = [
    'inputValue'
];
function isRawValue(value) {
    return !value || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) !== 'object';
}
var Select = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var id = props.id, mode = props.mode, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? 'rc-select' : _props$prefixCls, backfill = props.backfill, fieldNames = props.fieldNames, inputValue = props.inputValue, searchValue = props.searchValue, onSearch = props.onSearch, _props$autoClearSearc = props.autoClearSearchValue, autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc, onSelect = props.onSelect, onDeselect = props.onDeselect, _props$dropdownMatchS = props.dropdownMatchSelectWidth, dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS, filterOption = props.filterOption, filterSort = props.filterSort, optionFilterProp = props.optionFilterProp, optionLabelProp = props.optionLabelProp, options = props.options, optionRender = props.optionRender, children = props.children, defaultActiveFirstOption = props.defaultActiveFirstOption, menuItemSelectedIcon = props.menuItemSelectedIcon, virtual = props.virtual, direction = props.direction, _props$listHeight = props.listHeight, listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight, _props$listItemHeight = props.listItemHeight, listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight, labelRender = props.labelRender, value = props.value, defaultValue = props.defaultValue, labelInValue = props.labelInValue, onChange = props.onChange, maxCount = props.maxCount, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    var mergedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(id);
    var multiple = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$BaseSelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMultiple"])(mode);
    var childrenAsData = !!(!options && children);
    var mergedFilterOption = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        if (filterOption === undefined && mode === 'combobox') {
            return false;
        }
        return filterOption;
    }, [
        filterOption,
        mode
    ]);
    // ========================= FieldNames =========================
    var mergedFieldNames = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillFieldNames"])(fieldNames, childrenAsData);
    }, /* eslint-disable react-hooks/exhaustive-deps */ [
        // We stringify fieldNames to avoid unnecessary re-renders.
        JSON.stringify(fieldNames),
        childrenAsData
    ]);
    // =========================== Search ===========================
    var _useMergedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('', {
        value: searchValue !== undefined ? searchValue : inputValue,
        postState: function postState(search) {
            return search || '';
        }
    }), _useMergedState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useMergedState, 2), mergedSearchValue = _useMergedState2[0], setSearchValue = _useMergedState2[1];
    // =========================== Option ===========================
    var parsedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(options, children, mergedFieldNames, optionFilterProp, optionLabelProp);
    var valueOptions = parsedOptions.valueOptions, labelOptions = parsedOptions.labelOptions, mergedOptions = parsedOptions.options;
    // ========================= Wrap Value =========================
    var convert2LabelValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback(function(draftValues) {
        // Convert to array
        var valueList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(draftValues);
        // Convert to labelInValue type
        return valueList.map(function(val) {
            var rawValue;
            var rawLabel;
            var rawKey;
            var rawDisabled;
            var rawTitle;
            // Fill label & value
            if (isRawValue(val)) {
                rawValue = val;
            } else {
                var _val$value;
                rawKey = val.key;
                rawLabel = val.label;
                rawValue = (_val$value = val.value) !== null && _val$value !== void 0 ? _val$value : rawKey;
            }
            var option = valueOptions.get(rawValue);
            if (option) {
                var _option$key;
                // Fill missing props
                if (rawLabel === undefined) rawLabel = option === null || option === void 0 ? void 0 : option[optionLabelProp || mergedFieldNames.label];
                if (rawKey === undefined) rawKey = (_option$key = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key !== void 0 ? _option$key : rawValue;
                rawDisabled = option === null || option === void 0 ? void 0 : option.disabled;
                rawTitle = option === null || option === void 0 ? void 0 : option.title;
                // Warning if label not same as provided
                if (("TURBOPACK compile-time value", "development") !== 'production' && !optionLabelProp) {
                    var optionLabel = option === null || option === void 0 ? void 0 : option[mergedFieldNames.label];
                    if (optionLabel !== undefined && !/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(optionLabel) && !/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(rawLabel) && optionLabel !== rawLabel) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, '`label` of `value` is not same as `label` in Select options.');
                    }
                }
            }
            return {
                label: rawLabel,
                value: rawValue,
                key: rawKey,
                disabled: rawDisabled,
                title: rawTitle
            };
        });
    }, [
        mergedFieldNames,
        optionLabelProp,
        valueOptions
    ]);
    // =========================== Values ===========================
    var _useMergedState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(defaultValue, {
        value: value
    }), _useMergedState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useMergedState3, 2), internalValue = _useMergedState4[0], setInternalValue = _useMergedState4[1];
    // Merged value with LabelValueType
    var rawLabeledValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        var _values$;
        var newInternalValue = multiple && internalValue === null ? [] : internalValue;
        var values = convert2LabelValues(newInternalValue);
        // combobox no need save value when it's no value (exclude value equal 0)
        if (mode === 'combobox' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isComboNoValue"])((_values$ = values[0]) === null || _values$ === void 0 ? void 0 : _values$.value)) {
            return [];
        }
        return values;
    }, [
        internalValue,
        convert2LabelValues,
        mode,
        multiple
    ]);
    // Fill label with cache to avoid option remove
    var _useCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(rawLabeledValues, valueOptions), _useCache2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_useCache, 2), mergedValues = _useCache2[0], getMixedOption = _useCache2[1];
    var displayValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        // `null` need show as placeholder instead
        // https://github.com/ant-design/ant-design/issues/25057
        if (!mode && mergedValues.length === 1) {
            var firstValue = mergedValues[0];
            if (firstValue.value === null && (firstValue.label === null || firstValue.label === undefined)) {
                return [];
            }
        }
        return mergedValues.map(function(item) {
            var _ref;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, item), {}, {
                label: (_ref = typeof labelRender === 'function' ? labelRender(item) : item.label) !== null && _ref !== void 0 ? _ref : item.value
            });
        });
    }, [
        mode,
        mergedValues,
        labelRender
    ]);
    /** Convert `displayValues` to raw value type set */ var rawValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        return new Set(mergedValues.map(function(val) {
            return val.value;
        }));
    }, [
        mergedValues
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(function() {
        if (mode === 'combobox') {
            var _mergedValues$;
            var strValue = (_mergedValues$ = mergedValues[0]) === null || _mergedValues$ === void 0 ? void 0 : _mergedValues$.value;
            setSearchValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasValue"])(strValue) ? String(strValue) : '');
        }
    }, [
        mergedValues
    ]);
    // ======================= Display Option =======================
    // Create a placeholder item if not exist in `options`
    var createTagOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useRefFunc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function(val, label) {
        var mergedLabel = label !== null && label !== void 0 ? label : val;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, mergedFieldNames.value, val), mergedFieldNames.label, mergedLabel);
    });
    // Fill tag as option if mode is `tags`
    var filledTagOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        if (mode !== 'tags') {
            return mergedOptions;
        }
        // >>> Tag mode
        var cloneOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedOptions);
        // Check if value exist in options (include new patch item)
        var existOptions = function existOptions(val) {
            return valueOptions.has(val);
        };
        // Fill current value as option
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedValues).sort(function(a, b) {
            return a.value < b.value ? -1 : 1;
        }).forEach(function(item) {
            var val = item.value;
            if (!existOptions(val)) {
                cloneOptions.push(createTagOption(val, item.label));
            }
        });
        return cloneOptions;
    }, [
        createTagOption,
        mergedOptions,
        valueOptions,
        mergedValues,
        mode
    ]);
    var filteredOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useFilterOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, optionFilterProp);
    // Fill options with search value if needed
    var filledSearchOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        if (mode !== 'tags' || !mergedSearchValue || filteredOptions.some(function(item) {
            return item[optionFilterProp || 'value'] === mergedSearchValue;
        })) {
            return filteredOptions;
        }
        // ignore when search value equal select input value
        if (filteredOptions.some(function(item) {
            return item[mergedFieldNames.value] === mergedSearchValue;
        })) {
            return filteredOptions;
        }
        // Fill search value as option
        return [
            createTagOption(mergedSearchValue)
        ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(filteredOptions));
    }, [
        createTagOption,
        optionFilterProp,
        mode,
        filteredOptions,
        mergedSearchValue,
        mergedFieldNames
    ]);
    var sorter = function sorter(inputOptions) {
        var sortedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(inputOptions).sort(function(a, b) {
            return filterSort(a, b, {
                searchValue: mergedSearchValue
            });
        });
        return sortedOptions.map(function(item) {
            if (Array.isArray(item.options)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, item), {}, {
                    options: item.options.length > 0 ? sorter(item.options) : item.options
                });
            }
            return item;
        });
    };
    var orderedFilteredOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        if (!filterSort) {
            return filledSearchOptions;
        }
        return sorter(filledSearchOptions);
    }, [
        filledSearchOptions,
        filterSort,
        mergedSearchValue
    ]);
    var displayOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flattenOptions"])(orderedFilteredOptions, {
            fieldNames: mergedFieldNames,
            childrenAsData: childrenAsData
        });
    }, [
        orderedFilteredOptions,
        mergedFieldNames,
        childrenAsData
    ]);
    // =========================== Change ===========================
    var triggerChange = function triggerChange(values) {
        var labeledValues = convert2LabelValues(values);
        setInternalValue(labeledValues);
        if (onChange && (// Trigger event only when value changed
        labeledValues.length !== mergedValues.length || labeledValues.some(function(newVal, index) {
            var _mergedValues$index;
            return ((_mergedValues$index = mergedValues[index]) === null || _mergedValues$index === void 0 ? void 0 : _mergedValues$index.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
        }))) {
            var returnValues = labelInValue ? labeledValues : labeledValues.map(function(v) {
                return v.value;
            });
            var returnOptions = labeledValues.map(function(v) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectPropsWithOption"])(getMixedOption(v.value));
            });
            onChange(// Value
            multiple ? returnValues : returnValues[0], // Option
            multiple ? returnOptions : returnOptions[0]);
        }
    };
    // ======================= Accessibility ========================
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), activeValue = _React$useState2[0], setActiveValue = _React$useState2[1];
    var _React$useState3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(0), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), accessibilityIndex = _React$useState4[0], setAccessibilityIndex = _React$useState4[1];
    var mergedDefaultActiveFirstOption = defaultActiveFirstOption !== undefined ? defaultActiveFirstOption : mode !== 'combobox';
    var onActiveValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback(function(active, index) {
        var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, _ref3$source = _ref3.source, source = _ref3$source === void 0 ? 'keyboard' : _ref3$source;
        setAccessibilityIndex(index);
        if (backfill && mode === 'combobox' && active !== null && source === 'keyboard') {
            setActiveValue(String(active));
        }
    }, [
        backfill,
        mode
    ]);
    // ========================= OptionList =========================
    var triggerSelect = function triggerSelect(val, selected, type) {
        var getSelectEnt = function getSelectEnt() {
            var _option$key2;
            var option = getMixedOption(val);
            return [
                labelInValue ? {
                    label: option === null || option === void 0 ? void 0 : option[mergedFieldNames.label],
                    value: val,
                    key: (_option$key2 = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key2 !== void 0 ? _option$key2 : val
                } : val,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectPropsWithOption"])(option)
            ];
        };
        if (selected && onSelect) {
            var _getSelectEnt = getSelectEnt(), _getSelectEnt2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_getSelectEnt, 2), wrappedValue = _getSelectEnt2[0], _option = _getSelectEnt2[1];
            onSelect(wrappedValue, _option);
        } else if (!selected && onDeselect && type !== 'clear') {
            var _getSelectEnt3 = getSelectEnt(), _getSelectEnt4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_getSelectEnt3, 2), _wrappedValue = _getSelectEnt4[0], _option2 = _getSelectEnt4[1];
            onDeselect(_wrappedValue, _option2);
        }
    };
    // Used for OptionList selection
    var onInternalSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useRefFunc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function(val, info) {
        var cloneValues;
        // Single mode always trigger select only with option list
        var mergedSelect = multiple ? info.selected : true;
        if (mergedSelect) {
            cloneValues = multiple ? [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedValues), [
                val
            ]) : [
                val
            ];
        } else {
            cloneValues = mergedValues.filter(function(v) {
                return v.value !== val;
            });
        }
        triggerChange(cloneValues);
        triggerSelect(val, mergedSelect);
        // Clean search value if single or configured
        if (mode === 'combobox') {
            // setSearchValue(String(val));
            setActiveValue('');
        } else if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$BaseSelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMultiple"] || autoClearSearchValue) {
            setSearchValue('');
            setActiveValue('');
        }
    });
    // ======================= Display Change =======================
    // BaseSelect display values change
    var onDisplayValuesChange = function onDisplayValuesChange(nextValues, info) {
        triggerChange(nextValues);
        var type = info.type, values = info.values;
        if (type === 'remove' || type === 'clear') {
            values.forEach(function(item) {
                triggerSelect(item.value, false, type);
            });
        }
    };
    // =========================== Search ===========================
    var onInternalSearch = function onInternalSearch(searchText, info) {
        setSearchValue(searchText);
        setActiveValue(null);
        // [Submit] Tag mode should flush input
        if (info.source === 'submit') {
            var formatted = (searchText || '').trim();
            // prevent empty tags from appearing when you click the Enter button
            if (formatted) {
                var newRawValues = Array.from(new Set([].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(rawValues), [
                    formatted
                ])));
                triggerChange(newRawValues);
                triggerSelect(formatted, true);
                setSearchValue('');
            }
            return;
        }
        if (info.source !== 'blur') {
            if (mode === 'combobox') {
                triggerChange(searchText);
            }
            onSearch === null || onSearch === void 0 || onSearch(searchText);
        }
    };
    var onInternalSearchSplit = function onInternalSearchSplit(words) {
        var patchValues = words;
        if (mode !== 'tags') {
            patchValues = words.map(function(word) {
                var opt = labelOptions.get(word);
                return opt === null || opt === void 0 ? void 0 : opt.value;
            }).filter(function(val) {
                return val !== undefined;
            });
        }
        var newRawValues = Array.from(new Set([].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(rawValues), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(patchValues))));
        triggerChange(newRawValues);
        newRawValues.forEach(function(newRawValue) {
            triggerSelect(newRawValue, true);
        });
    };
    // ========================== Context ===========================
    var selectContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(function() {
        var realVirtual = virtual !== false && dropdownMatchSelectWidth !== false;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, parsedOptions), {}, {
            flattenOptions: displayOptions,
            onActiveValue: onActiveValue,
            defaultActiveFirstOption: mergedDefaultActiveFirstOption,
            onSelect: onInternalSelect,
            menuItemSelectedIcon: menuItemSelectedIcon,
            rawValues: rawValues,
            fieldNames: mergedFieldNames,
            virtual: realVirtual,
            direction: direction,
            listHeight: listHeight,
            listItemHeight: listItemHeight,
            childrenAsData: childrenAsData,
            maxCount: maxCount,
            optionRender: optionRender
        });
    }, [
        maxCount,
        parsedOptions,
        displayOptions,
        onActiveValue,
        mergedDefaultActiveFirstOption,
        onInternalSelect,
        menuItemSelectedIcon,
        rawValues,
        mergedFieldNames,
        virtual,
        dropdownMatchSelectWidth,
        direction,
        listHeight,
        listItemHeight,
        childrenAsData,
        optionRender
    ]);
    // ========================== Warning ===========================
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$warningPropsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$utils$2f$warningPropsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warningNullOptions"])(mergedOptions, mergedFieldNames);
    }
    // ==============================================================
    // ==                          Render                          ==
    // ==============================================================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$SelectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: selectContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$BaseSelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, restProps, {
        // >>> MISC
        id: mergedId,
        prefixCls: prefixCls,
        ref: ref,
        omitDomProps: OMIT_DOM_PROPS,
        mode: mode,
        displayValues: displayValues,
        onDisplayValuesChange: onDisplayValuesChange,
        direction: direction,
        searchValue: mergedSearchValue,
        onSearch: onInternalSearch,
        autoClearSearchValue: autoClearSearchValue,
        onSearchSplit: onInternalSearchSplit,
        dropdownMatchSelectWidth: dropdownMatchSelectWidth,
        OptionList: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$OptionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        emptyOptions: !displayOptions.length,
        activeValue: activeValue,
        activeDescendantId: "".concat(mergedId, "_list_").concat(accessibilityIndex)
    })));
});
if ("TURBOPACK compile-time truthy", 1) {
    Select.displayName = 'Select';
}
var TypedSelect = Select;
TypedSelect.Option = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
TypedSelect.OptGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$OptGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = TypedSelect;

})()),
"[project]/node_modules/rc-select/es/index.js [app-client] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/Select.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];

})()),
"[project]/node_modules/rc-select/es/index.js [app-client] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/Select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/Option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$OptGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/OptGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$BaseSelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/BaseSelect/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/hooks/useBaseProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/rc-select/es/index.js [app-client] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/rc-select/es/OptGroup.js [app-client] (ecmascript) <export default as OptGroup>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "OptGroup": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$OptGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$OptGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/OptGroup.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/rc-select/es/Option.js [app-client] (ecmascript) <export default as Option>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "Option": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/Option.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/rc-select/es/BaseSelect/index.js [app-client] (ecmascript) <export default as BaseSelect>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "BaseSelect": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$BaseSelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$BaseSelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/BaseSelect/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/rc-select/es/hooks/useBaseProps.js [app-client] (ecmascript) <export default as useBaseProps>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "useBaseProps": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-select/es/hooks/useBaseProps.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
}]);

//# sourceMappingURL=08b5e_rc-select_es_a627b9._.js.map