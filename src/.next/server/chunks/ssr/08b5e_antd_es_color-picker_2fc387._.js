module.exports = {

"[project]/node_modules/antd/es/color-picker/color.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AggregationColor": ()=>AggregationColor,
    "getHex": ()=>getHex,
    "toHexFormat": ()=>toHexFormat
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/createClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@rc-component/color-picker/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@rc-component/color-picker/es/color.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const toHexFormat = (value, alpha)=>(value === null || value === void 0 ? void 0 : value.replace(/[^\w/]/g, '').slice(0, alpha ? 8 : 6)) || '';
const getHex = (value, alpha)=>value ? toHexFormat(value, alpha) : '';
let AggregationColor = /*#__PURE__*/ function() {
    function AggregationColor(color) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, AggregationColor);
        var _a;
        this.cleared = false;
        // Clone from another AggregationColor
        if (color instanceof AggregationColor) {
            this.metaColor = color.metaColor.clone();
            this.colors = (_a = color.colors) === null || _a === void 0 ? void 0 : _a.map((info)=>({
                    color: new AggregationColor(info.color),
                    percent: info.percent
                }));
            this.cleared = color.cleared;
            return;
        }
        const isArray = Array.isArray(color);
        if (isArray && color.length) {
            this.colors = color.map((_ref)=>{
                let { color: c, percent } = _ref;
                return {
                    color: new AggregationColor(c),
                    percent
                };
            });
            this.metaColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](this.colors[0].color.metaColor);
        } else {
            this.metaColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](isArray ? '' : color);
        }
        if (!color || isArray && !this.colors) {
            this.metaColor = this.metaColor.setA(0);
            this.cleared = true;
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(AggregationColor, [
        {
            key: "toHsb",
            value: function toHsb() {
                return this.metaColor.toHsb();
            }
        },
        {
            key: "toHsbString",
            value: function toHsbString() {
                return this.metaColor.toHsbString();
            }
        },
        {
            key: "toHex",
            value: function toHex() {
                return getHex(this.toHexString(), this.metaColor.a < 1);
            }
        },
        {
            key: "toHexString",
            value: function toHexString() {
                return this.metaColor.toHexString();
            }
        },
        {
            key: "toRgb",
            value: function toRgb() {
                return this.metaColor.toRgb();
            }
        },
        {
            key: "toRgbString",
            value: function toRgbString() {
                return this.metaColor.toRgbString();
            }
        },
        {
            key: "isGradient",
            value: function isGradient() {
                return !!this.colors && !this.cleared;
            }
        },
        {
            key: "getColors",
            value: function getColors() {
                return this.colors || [
                    {
                        color: this,
                        percent: 0
                    }
                ];
            }
        },
        {
            key: "toCssString",
            value: function toCssString() {
                const { colors } = this;
                // CSS line-gradient
                if (colors) {
                    const colorsStr = colors.map((c)=>`${c.color.toRgbString()} ${c.percent}%`).join(', ');
                    return `linear-gradient(90deg, ${colorsStr})`;
                }
                return this.metaColor.toRgbString();
            }
        },
        {
            key: "equals",
            value: function equals(color) {
                if (!color || this.isGradient() !== color.isGradient()) {
                    return false;
                }
                if (!this.isGradient()) {
                    return this.toHexString() === color.toHexString();
                }
                return this.colors.length === color.colors.length && this.colors.every((c, i)=>{
                    const target = color.colors[i];
                    return c.percent === target.percent && c.color.equals(target.color);
                });
            }
        }
    ]);
}();

})()),
"[project]/node_modules/antd/es/color-picker/util.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "genAlphaColor": ()=>genAlphaColor,
    "generateColor": ()=>generateColor,
    "getColorAlpha": ()=>getColorAlpha,
    "getGradientPercentColor": ()=>getGradientPercentColor,
    "getRoundNumber": ()=>getRoundNumber
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@rc-component/color-picker/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@rc-component/color-picker/es/color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/color.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const generateColor = (color)=>{
    if (color instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AggregationColor"]) {
        return color;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AggregationColor"](color);
};
const getRoundNumber = (value)=>Math.round(Number(value || 0));
const getColorAlpha = (color)=>getRoundNumber(color.toHsb().a * 100);
const genAlphaColor = (color, alpha)=>{
    const rgba = color.toRgb();
    // Color from hsb input may get `rgb` is (0/0/0) when `hsb.b` is 0
    // So if rgb is empty, we should get from hsb
    if (!rgba.r && !rgba.g && !rgba.b) {
        const hsba = color.toHsb();
        hsba.a = alpha || 1;
        return generateColor(hsba);
    }
    rgba.a = alpha || 1;
    return generateColor(rgba);
};
const getGradientPercentColor = (colors, percent)=>{
    const filledColors = [
        {
            percent: 0,
            color: colors[0].color
        }
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(colors), [
        {
            percent: 100,
            color: colors[colors.length - 1].color
        }
    ]);
    for(let i = 0; i < filledColors.length - 1; i += 1){
        const startPtg = filledColors[i].percent;
        const endPtg = filledColors[i + 1].percent;
        const startColor = filledColors[i].color;
        const endColor = filledColors[i + 1].color;
        if (startPtg <= percent && percent <= endPtg) {
            const dist = endPtg - startPtg;
            if (dist === 0) {
                return startColor;
            }
            const ratio = (percent - startPtg) / dist * 100;
            const startRcColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](startColor);
            const endRcColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](endColor);
            return startRcColor.mix(endRcColor, ratio).toRgbString();
        }
    }
    // This will never reach
    /* istanbul ignore next */ return '';
};

})()),
"[project]/node_modules/antd/es/color-picker/components/ColorPresets.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "isBright": ()=>isBright
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@rc-component/color-picker/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$components$2f$ColorBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorBlock$3e$__ = __turbopack_import__("[project]/node_modules/@rc-component/color-picker/es/components/ColorBlock.js [app-ssr] (ecmascript) <export default as ColorBlock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@rc-component/color-picker/es/color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useMergedState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/collapse/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/locale/useLocale.js [app-ssr] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/theme/useToken.js [app-ssr] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/util.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
const genPresetColor = (list)=>list.map((value)=>{
        value.colors = value.colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateColor"]);
        return value;
    });
const isBright = (value, bgColorToken)=>{
    const { r, g, b, a } = value.toRgb();
    const hsv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](value.toRgbString()).onBackground(bgColorToken).toHsv();
    if (a <= 0.5) {
        // Adapted to dark mode
        return hsv.v > 0.5;
    }
    return r * 0.299 + g * 0.587 + b * 0.114 > 192;
};
const genCollapsePanelKey = (_ref)=>{
    let { label } = _ref;
    return `panel-${label}`;
};
const ColorPresets = (_ref2)=>{
    let { prefixCls, presets, value: color, onChange } = _ref2;
    const [locale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('ColorPicker');
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const [presetsValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(genPresetColor(presets), {
        value: genPresetColor(presets),
        postState: genPresetColor
    });
    const colorPresetsPrefixCls = `${prefixCls}-presets`;
    const activeKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>presetsValue.reduce((acc, preset)=>{
            const { defaultOpen = true } = preset;
            if (defaultOpen) acc.push(genCollapsePanelKey(preset));
            return acc;
        }, []), [
        presetsValue
    ]);
    const handleClick = (colorValue)=>{
        onChange === null || onChange === void 0 ? void 0 : onChange(colorValue);
    };
    const items = presetsValue.map((preset)=>{
        var _a;
        return {
            key: genCollapsePanelKey(preset),
            label: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: `${colorPresetsPrefixCls}-label`
            }, preset === null || preset === void 0 ? void 0 : preset.label),
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: `${colorPresetsPrefixCls}-items`
            }, Array.isArray(preset === null || preset === void 0 ? void 0 : preset.colors) && ((_a = preset.colors) === null || _a === void 0 ? void 0 : _a.length) > 0 ? preset.colors.map((presetColor, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$components$2f$ColorBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorBlock$3e$__["ColorBlock"], {
                    // eslint-disable-next-line react/no-array-index-key
                    key: `preset-${index}-${presetColor.toHexString()}`,
                    color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateColor"])(presetColor).toRgbString(),
                    prefixCls: prefixCls,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(`${colorPresetsPrefixCls}-color`, {
                        [`${colorPresetsPrefixCls}-color-checked`]: presetColor.toHexString() === (color === null || color === void 0 ? void 0 : color.toHexString()),
                        [`${colorPresetsPrefixCls}-color-bright`]: isBright(presetColor, token.colorBgElevated)
                    }),
                    onClick: ()=>handleClick(presetColor)
                })) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                className: `${colorPresetsPrefixCls}-empty`
            }, locale.presetEmpty))
        };
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: colorPresetsPrefixCls
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        defaultActiveKey: activeKeys,
        ghost: true,
        items: items
    }));
};
const __TURBOPACK__default__export__ = ColorPresets;

})()),
"[project]/node_modules/antd/es/color-picker/context.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PanelPickerContext": ()=>PanelPickerContext,
    "PanelPresetsContext": ()=>PanelPresetsContext
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const PanelPickerContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext({});
const PanelPresetsContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext({});

})()),
"[project]/node_modules/antd/es/color-picker/components/ColorClear.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/util.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
const ColorClear = (_ref)=>{
    let { prefixCls, value, onChange } = _ref;
    const handleClick = ()=>{
        if (onChange && value && !value.cleared) {
            const hsba = value.toHsb();
            hsba.a = 0;
            const genColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateColor"])(hsba);
            genColor.cleared = true;
            onChange(genColor);
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: `${prefixCls}-clear`,
        onClick: handleClick
    });
};
const __TURBOPACK__default__export__ = ColorClear;

})()),
"[project]/node_modules/antd/es/color-picker/interface.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ColorFormat": ()=>ColorFormat
});
var ColorFormat;
(function(ColorFormat) {
    ColorFormat["hex"] = "hex";
    ColorFormat["rgb"] = "rgb";
    ColorFormat["hsb"] = "hsb";
})(ColorFormat || (ColorFormat = {}));

})()),
"[project]/node_modules/antd/es/color-picker/components/ColorSteppers.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2d$number$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/input-number/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const ColorSteppers = (_ref)=>{
    let { prefixCls, min = 0, max = 100, value, onChange, className, formatter } = _ref;
    const colorSteppersPrefixCls = `${prefixCls}-steppers`;
    const [stepValue, setStepValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value);
    // Update step value
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!Number.isNaN(value)) {
            setStepValue(value);
        }
    }, [
        value
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2d$number$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(colorSteppersPrefixCls, className),
        min: min,
        max: max,
        value: stepValue,
        formatter: formatter,
        size: "small",
        onChange: (step)=>{
            if (!value) {
                setStepValue(step || 0);
            }
            onChange === null || onChange === void 0 ? void 0 : onChange(step);
        }
    });
};
const __TURBOPACK__default__export__ = ColorSteppers;

})()),
"[project]/node_modules/antd/es/color-picker/components/ColorAlphaInput.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorSteppers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/components/ColorSteppers.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const ColorAlphaInput = (_ref)=>{
    let { prefixCls, value, onChange } = _ref;
    const colorAlphaInputPrefixCls = `${prefixCls}-alpha-input`;
    const [alphaValue, setAlphaValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateColor"])(value || '#000'));
    // Update step value
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (value) {
            setAlphaValue(value);
        }
    }, [
        value
    ]);
    const handleAlphaChange = (step)=>{
        const hsba = alphaValue.toHsb();
        hsba.a = (step || 0) / 100;
        const genColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateColor"])(hsba);
        if (!value) {
            setAlphaValue(genColor);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(genColor);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorSteppers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorAlpha"])(alphaValue),
        prefixCls: prefixCls,
        formatter: (step)=>`${step}%`,
        className: colorAlphaInputPrefixCls,
        onChange: handleAlphaChange
    });
};
const __TURBOPACK__default__export__ = ColorAlphaInput;

})()),
"[project]/node_modules/antd/es/color-picker/components/ColorHexInput.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/input/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/util.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
const hexReg = /(^#[\da-f]{6}$)|(^#[\da-f]{8}$)/i;
const isHexString = (hex)=>hexReg.test(`#${hex}`);
const ColorHexInput = (_ref)=>{
    let { prefixCls, value, onChange } = _ref;
    const colorHexInputPrefixCls = `${prefixCls}-hex-input`;
    const [hexValue, setHexValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHexFormat"])(value.toHexString()) : undefined);
    // Update step value
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (value) {
            setHexValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHexFormat"])(value.toHexString()));
        }
    }, [
        value
    ]);
    const handleHexChange = (e)=>{
        const originValue = e.target.value;
        setHexValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHexFormat"])(originValue));
        if (isHexString((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHexFormat"])(originValue, true))) {
            onChange === null || onChange === void 0 ? void 0 : onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateColor"])(originValue));
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: colorHexInputPrefixCls,
        value: hexValue,
        prefix: "#",
        onChange: handleHexChange,
        size: "small"
    });
};
const __TURBOPACK__default__export__ = ColorHexInput;

})()),
"[project]/node_modules/antd/es/color-picker/components/ColorHsbInput.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorSteppers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/components/ColorSteppers.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const ColorHsbInput = (_ref)=>{
    let { prefixCls, value, onChange } = _ref;
    const colorHsbInputPrefixCls = `${prefixCls}-hsb-input`;
    const [hsbValue, setHsbValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateColor"])(value || '#000'));
    // Update step value
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (value) {
            setHsbValue(value);
        }
    }, [
        value
    ]);
    const handleHsbChange = (step, type)=>{
        const hsb = hsbValue.toHsb();
        hsb[type] = type === 'h' ? step : (step || 0) / 100;
        const genColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateColor"])(hsb);
        if (!value) {
            setHsbValue(genColor);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(genColor);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: colorHsbInputPrefixCls
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorSteppers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        max: 360,
        min: 0,
        value: Number(hsbValue.toHsb().h),
        prefixCls: prefixCls,
        className: colorHsbInputPrefixCls,
        formatter: (step)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoundNumber"])(step || 0).toString(),
        onChange: (step)=>handleHsbChange(Number(step), 'h')
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorSteppers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        max: 100,
        min: 0,
        value: Number(hsbValue.toHsb().s) * 100,
        prefixCls: prefixCls,
        className: colorHsbInputPrefixCls,
        formatter: (step)=>`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoundNumber"])(step || 0)}%`,
        onChange: (step)=>handleHsbChange(Number(step), 's')
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorSteppers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        max: 100,
        min: 0,
        value: Number(hsbValue.toHsb().b) * 100,
        prefixCls: prefixCls,
        className: colorHsbInputPrefixCls,
        formatter: (step)=>`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoundNumber"])(step || 0)}%`,
        onChange: (step)=>handleHsbChange(Number(step), 'b')
    }));
};
const __TURBOPACK__default__export__ = ColorHsbInput;

})()),
"[project]/node_modules/antd/es/color-picker/components/ColorRgbInput.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorSteppers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/components/ColorSteppers.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const ColorRgbInput = (_ref)=>{
    let { prefixCls, value, onChange } = _ref;
    const colorRgbInputPrefixCls = `${prefixCls}-rgb-input`;
    const [rgbValue, setRgbValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateColor"])(value || '#000'));
    // Update step value
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (value) {
            setRgbValue(value);
        }
    }, [
        value
    ]);
    const handleRgbChange = (step, type)=>{
        const rgb = rgbValue.toRgb();
        rgb[type] = step || 0;
        const genColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateColor"])(rgb);
        if (!value) {
            setRgbValue(genColor);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(genColor);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: colorRgbInputPrefixCls
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorSteppers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        max: 255,
        min: 0,
        value: Number(rgbValue.toRgb().r),
        prefixCls: prefixCls,
        className: colorRgbInputPrefixCls,
        onChange: (step)=>handleRgbChange(Number(step), 'r')
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorSteppers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        max: 255,
        min: 0,
        value: Number(rgbValue.toRgb().g),
        prefixCls: prefixCls,
        className: colorRgbInputPrefixCls,
        onChange: (step)=>handleRgbChange(Number(step), 'g')
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorSteppers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        max: 255,
        min: 0,
        value: Number(rgbValue.toRgb().b),
        prefixCls: prefixCls,
        className: colorRgbInputPrefixCls,
        onChange: (step)=>handleRgbChange(Number(step), 'b')
    }));
};
const __TURBOPACK__default__export__ = ColorRgbInput;

})()),
"[project]/node_modules/antd/es/color-picker/components/ColorInput.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useMergedState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/select/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/interface.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorAlphaInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/components/ColorAlphaInput.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorHexInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/components/ColorHexInput.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorHsbInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/components/ColorHsbInput.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorRgbInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/components/ColorRgbInput.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
const selectOptions = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorFormat"].hex,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorFormat"].hsb,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorFormat"].rgb
].map((format)=>({
        value: format,
        label: format.toLocaleUpperCase()
    }));
const ColorInput = (props)=>{
    const { prefixCls, format, value, disabledAlpha, onFormatChange, onChange } = props;
    const [colorFormat, setColorFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorFormat"].hex, {
        value: format,
        onChange: onFormatChange
    });
    const colorInputPrefixCls = `${prefixCls}-input`;
    const handleFormatChange = (newFormat)=>{
        setColorFormat(newFormat);
    };
    const steppersNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const inputProps = {
            value,
            prefixCls,
            onChange
        };
        switch(colorFormat){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorFormat"].hsb:
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorHsbInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({}, inputProps));
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorFormat"].rgb:
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorRgbInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({}, inputProps));
            // case ColorFormat.hex:
            default:
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorHexInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({}, inputProps));
        }
    }, [
        colorFormat,
        prefixCls,
        value,
        onChange
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: `${colorInputPrefixCls}-container`
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        value: colorFormat,
        variant: "borderless",
        getPopupContainer: (current)=>current,
        popupMatchSelectWidth: 68,
        placement: "bottomRight",
        onChange: handleFormatChange,
        className: `${prefixCls}-format-select`,
        size: "small",
        options: selectOptions
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: colorInputPrefixCls
    }, steppersNode), !disabledAlpha && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorAlphaInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        value: value,
        onChange: onChange
    }));
};
const __TURBOPACK__default__export__ = ColorInput;

})()),
"[project]/node_modules/antd/es/color-picker/components/ColorSlider.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GradientColorSlider": ()=>GradientColorSlider,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-slider/es/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/rc-util/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useEvent.js [app-ssr] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$slider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/slider/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$slider$2f$Context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/slider/Context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/util.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
var __rest = this && this.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
;
;
;
const GradientColorSlider = (props)=>{
    const { prefixCls, colors, type, color, range = false, className, activeIndex, onActive, onDragStart, onDragChange, onKeyDelete } = props, restProps = __rest(props, [
        "prefixCls",
        "colors",
        "type",
        "color",
        "range",
        "className",
        "activeIndex",
        "onActive",
        "onDragStart",
        "onDragChange",
        "onKeyDelete"
    ]);
    const sliderProps = Object.assign(Object.assign({}, restProps), {
        track: false
    });
    // ========================== Background ==========================
    const linearCss = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>{
        const colorsStr = colors.map((c)=>`${c.color} ${c.percent}%`).join(', ');
        return `linear-gradient(90deg, ${colorsStr})`;
    }, [
        colors
    ]);
    const pointColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>{
        if (!color || !type) {
            return null;
        }
        if (type === 'alpha') {
            return color.toRgbString();
        }
        return `hsl(${color.toHsb().h}, 100%, 50%)`;
    }, [
        color,
        type
    ]);
    // ======================= Context: Slider ========================
    const onInternalDragStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])(onDragStart);
    const onInternalDragChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])(onDragChange);
    const unstableContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>({
            onDragStart: onInternalDragStart,
            onDragChange: onInternalDragChange
        }), []);
    // ======================= Context: Render ========================
    const handleRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])((ori, info)=>{
        const { onFocus, style, className: handleCls, onKeyDown } = ori.props;
        // Point Color
        const mergedStyle = Object.assign({}, style);
        if (type === 'gradient') {
            mergedStyle.background = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGradientPercentColor"])(colors, info.value);
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.cloneElement(ori, {
            onFocus: (e)=>{
                onActive === null || onActive === void 0 ? void 0 : onActive(info.index);
                onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
            },
            style: mergedStyle,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(handleCls, {
                [`${prefixCls}-slider-handle-active`]: activeIndex === info.index
            }),
            onKeyDown: (e)=>{
                if ((e.key === 'Delete' || e.key === 'Backspace') && onKeyDelete) {
                    onKeyDelete(info.index);
                }
                onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
            }
        });
    });
    const sliderContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>({
            direction: 'ltr',
            handleRender
        }), []);
    // ============================ Render ============================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$slider$2f$Context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: sliderContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnstableContext"].Provider, {
        value: unstableContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$slider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({}, sliderProps, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, `${prefixCls}-slider`),
        tooltip: {
            open: false
        },
        range: {
            editable: range,
            minCount: 2
        },
        styles: {
            rail: {
                background: linearCss
            },
            handle: pointColor ? {
                background: pointColor
            } : {}
        },
        classNames: {
            rail: `${prefixCls}-slider-rail`,
            handle: `${prefixCls}-slider-handle`
        }
    }))));
};
const SingleColorSlider = (props)=>{
    const { value, onChange, onChangeComplete } = props;
    const singleOnChange = (v)=>onChange(v[0]);
    const singleOnChangeComplete = (v)=>onChangeComplete(v[0]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(GradientColorSlider, Object.assign({}, props, {
        value: [
            value
        ],
        onChange: singleOnChange,
        onChangeComplete: singleOnChangeComplete
    }));
};
const __TURBOPACK__default__export__ = SingleColorSlider;

})()),
"[project]/node_modules/antd/es/color-picker/components/PanelPicker/GradientColorBar.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorSlider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/components/ColorSlider.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
function sortColors(colors) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(colors).sort((a, b)=>a.percent - b.percent);
}
/**
 * GradientColorBar will auto show when the mode is `gradient`.
 */ const GradientColorBar = (props)=>{
    const { prefixCls, mode, onChange, onChangeComplete, onActive, activeIndex, onGradientDragging, colors } = props;
    const isGradient = mode === 'gradient';
    // ============================= Colors =============================
    const colorList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>colors.map((info)=>({
                percent: info.percent,
                color: info.color.toRgbString()
            })), [
        colors
    ]);
    const values = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>colorList.map((info)=>info.percent), [
        colorList
    ]);
    // ============================== Drag ==============================
    const colorsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(colorList);
    // Record current colors
    const onDragStart = (_ref)=>{
        let { rawValues, draggingIndex, draggingValue } = _ref;
        if (rawValues.length > colorList.length) {
            // Add new node
            const newPointColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGradientPercentColor"])(colorList, draggingValue);
            const nextColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(colorList);
            nextColors.splice(draggingIndex, 0, {
                percent: draggingValue,
                color: newPointColor
            });
            colorsRef.current = nextColors;
        } else {
            colorsRef.current = colorList;
        }
        onGradientDragging(true);
        onChange(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AggregationColor"](sortColors(colorsRef.current)), true);
    };
    // Adjust color when dragging
    const onDragChange = (_ref2)=>{
        let { deleteIndex, draggingIndex, draggingValue } = _ref2;
        let nextColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(colorsRef.current);
        if (deleteIndex !== -1) {
            nextColors.splice(deleteIndex, 1);
        } else {
            nextColors[draggingIndex] = Object.assign(Object.assign({}, nextColors[draggingIndex]), {
                percent: draggingValue
            });
            nextColors = sortColors(nextColors);
        }
        onChange(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AggregationColor"](nextColors), true);
    };
    // ============================== Key ===============================
    const onKeyDelete = (index)=>{
        const nextColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(colorList);
        nextColors.splice(index, 1);
        const nextColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AggregationColor"](nextColors);
        onChange(nextColor);
        onChangeComplete(nextColor);
    };
    // ============================= Change =============================
    const onInternalChangeComplete = (nextValues)=>{
        onChangeComplete(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AggregationColor"](colorList));
        // Reset `activeIndex` if out of range
        if (activeIndex >= nextValues.length) {
            onActive(nextValues.length - 1);
        }
        onGradientDragging(false);
    };
    // ============================= Render =============================
    if (!isGradient) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorSlider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GradientColorSlider"], {
        min: 0,
        max: 100,
        prefixCls: prefixCls,
        className: `${prefixCls}-gradient-slider`,
        colors: colorList,
        color: null,
        value: values,
        range: true,
        onChangeComplete: onInternalChangeComplete,
        disabled: false,
        type: "gradient",
        // Active
        activeIndex: activeIndex,
        onActive: onActive,
        // Drag
        onDragStart: onDragStart,
        onDragChange: onDragChange,
        onKeyDelete: onKeyDelete
    });
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.memo(GradientColorBar);

})()),
"[project]/node_modules/antd/es/color-picker/components/PanelPicker/index.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@rc-component/color-picker/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@rc-component/color-picker/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$segmented$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/segmented/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorClear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/components/ColorClear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/components/ColorInput.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorSlider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/components/ColorSlider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$PanelPicker$2f$GradientColorBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/components/PanelPicker/GradientColorBar.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
var __rest = this && this.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
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
const components = {
    slider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorSlider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
};
const PanelPicker = ()=>{
    const panelPickerContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PanelPickerContext"]);
    const { mode, onModeChange, modeOptions, prefixCls, allowClear, value, disabledAlpha, onChange, onClear, onChangeComplete, activeIndex, gradientDragging } = panelPickerContext, injectProps = __rest(panelPickerContext, [
        "mode",
        "onModeChange",
        "modeOptions",
        "prefixCls",
        "allowClear",
        "value",
        "disabledAlpha",
        "onChange",
        "onClear",
        "onChangeComplete",
        "activeIndex",
        "gradientDragging"
    ]);
    // ============================ Colors ============================
    const colors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (!value.cleared) {
            return value.getColors();
        }
        return [
            {
                percent: 0,
                color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AggregationColor"]('')
            },
            {
                percent: 100,
                color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AggregationColor"]('')
            }
        ];
    }, [
        value
    ]);
    // ========================= Single Color =========================
    const isSingle = !value.isGradient();
    // We cache the point color in case user drag the gradient point across another one
    const [lockedColor, setLockedColor] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(value);
    // Use layout effect here since `useEffect` will cause a blink when mouseDown
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        var _a;
        if (!isSingle) {
            setLockedColor((_a = colors[activeIndex]) === null || _a === void 0 ? void 0 : _a.color);
        }
    }, [
        gradientDragging,
        activeIndex
    ]);
    const activeColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        var _a;
        if (isSingle) {
            return value;
        }
        // Use cache when dragging. User can not operation panel when dragging.
        if (gradientDragging) {
            return lockedColor;
        }
        return (_a = colors[activeIndex]) === null || _a === void 0 ? void 0 : _a.color;
    }, [
        value,
        activeIndex,
        isSingle,
        lockedColor,
        gradientDragging
    ]);
    // ========================= Picker Color =========================
    const [pickerColor, setPickerColor] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(activeColor);
    const [forceSync, setForceSync] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(0);
    const mergedPickerColor = (pickerColor === null || pickerColor === void 0 ? void 0 : pickerColor.equals(activeColor)) ? activeColor : pickerColor;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        setPickerColor(activeColor);
    }, [
        forceSync,
        activeColor === null || activeColor === void 0 ? void 0 : activeColor.toHexString()
    ]);
    // ============================ Change ============================
    const fillColor = (nextColor, info)=>{
        let submitColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateColor"])(nextColor);
        // Fill alpha color to 100% if origin is cleared color
        if (value.cleared) {
            const rgb = submitColor.toRgb();
            // Auto fill color if origin is `0/0/0` to enhance user experience
            if (!rgb.r && !rgb.g && !rgb.b && info) {
                const { type: infoType, value: infoValue = 0 } = info;
                submitColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AggregationColor"]({
                    h: infoType === 'hue' ? infoValue : 0,
                    s: 1,
                    b: 1,
                    a: infoType === 'alpha' ? infoValue / 100 : 1
                });
            } else {
                submitColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genAlphaColor"])(submitColor);
            }
        }
        if (mode === 'single') {
            return submitColor;
        }
        const nextColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(colors);
        nextColors[activeIndex] = Object.assign(Object.assign({}, nextColors[activeIndex]), {
            color: submitColor
        });
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AggregationColor"](nextColors);
    };
    const onPickerChange = (colorValue, fromPicker, info)=>{
        const nextColor = fillColor(colorValue, info);
        setPickerColor(nextColor);
        onChange(nextColor, fromPicker);
    };
    const onInternalChangeComplete = (nextColor, info)=>{
        // Trigger complete event
        onChangeComplete(fillColor(nextColor, info));
        // Back of origin color in case in controlled
        // This will set after `onChangeComplete` to avoid `setState` trigger rerender
        // which will make `fillColor` get wrong `color.cleared` state
        setForceSync((ori)=>ori + 1);
    };
    const onInputChange = (colorValue)=>{
        onChange(fillColor(colorValue));
    };
    // ============================ Render ============================
    // Operation bar
    let operationNode = null;
    const showMode = modeOptions.length > 1;
    if (allowClear || showMode) {
        operationNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: `${prefixCls}-operation`
        }, showMode && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$segmented$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            size: "small",
            options: modeOptions,
            value: mode,
            onChange: onModeChange
        }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorClear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({
            prefixCls: prefixCls,
            value: value,
            onChange: (clearColor)=>{
                onChange(clearColor);
                onClear === null || onClear === void 0 ? void 0 : onClear();
            }
        }, injectProps)));
    }
    // Return
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, operationNode, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$PanelPicker$2f$GradientColorBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({}, panelPickerContext, {
        colors: colors
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        prefixCls: prefixCls,
        value: mergedPickerColor === null || mergedPickerColor === void 0 ? void 0 : mergedPickerColor.toHsb(),
        disabledAlpha: disabledAlpha,
        onChange: (colorValue, info)=>{
            onPickerChange(colorValue, true, info);
        },
        onChangeComplete: (colorValue, info)=>{
            onInternalChangeComplete(colorValue, info);
        },
        components: components
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({
        value: activeColor,
        onChange: onInputChange,
        prefixCls: prefixCls,
        disabledAlpha: disabledAlpha
    }, injectProps)));
};
const __TURBOPACK__default__export__ = PanelPicker;

})()),
"[project]/node_modules/antd/es/color-picker/components/PanelPresets.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorPresets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/components/ColorPresets.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const PanelPresets = ()=>{
    const { prefixCls, value, presets, onChange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PanelPresetsContext"]);
    return Array.isArray(presets) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorPresets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        value: value,
        presets: presets,
        prefixCls: prefixCls,
        onChange: onChange
    }) : null;
};
const __TURBOPACK__default__export__ = PanelPresets;

})()),
"[project]/node_modules/antd/es/color-picker/ColorPickerPanel.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/divider/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$PanelPicker$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/components/PanelPicker/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$PanelPresets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/components/PanelPresets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/context.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
const ColorPickerPanel = (props)=>{
    const { prefixCls, presets, panelRender, value, onChange, onClear, allowClear, disabledAlpha, mode, onModeChange, modeOptions, onChangeComplete, activeIndex, onActive, format, onFormatChange, gradientDragging, onGradientDragging } = props;
    const colorPickerPanelPrefixCls = `${prefixCls}-inner`;
    // ===================== Context ======================
    const panelContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>({
            prefixCls,
            value,
            onChange,
            onClear,
            allowClear,
            disabledAlpha,
            mode,
            onModeChange,
            modeOptions,
            onChangeComplete,
            activeIndex,
            onActive,
            format,
            onFormatChange,
            gradientDragging,
            onGradientDragging
        }), [
        prefixCls,
        value,
        onChange,
        onClear,
        allowClear,
        disabledAlpha,
        mode,
        onModeChange,
        modeOptions,
        onChangeComplete,
        activeIndex,
        onActive,
        format,
        onFormatChange,
        gradientDragging,
        onGradientDragging
    ]);
    const presetContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>({
            prefixCls,
            value,
            presets,
            onChange
        }), [
        prefixCls,
        value,
        presets,
        onChange
    ]);
    // ====================== Render ======================
    const innerPanel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: `${colorPickerPanelPrefixCls}-content`
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$PanelPicker$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], null), Array.isArray(presets) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], null), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$PanelPresets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], null));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PanelPickerContext"].Provider, {
        value: panelContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PanelPresetsContext"].Provider, {
        value: presetContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: colorPickerPanelPrefixCls
    }, typeof panelRender === 'function' ? panelRender(innerPanel, {
        components: {
            Picker: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$PanelPicker$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            Presets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$PanelPresets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        }
    }) : innerPanel)));
};
if ("TURBOPACK compile-time truthy", 1) {
    ColorPickerPanel.displayName = 'ColorPickerPanel';
}
const __TURBOPACK__default__export__ = ColorPickerPanel;

})()),
"[project]/node_modules/antd/es/color-picker/components/ColorTrigger.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@rc-component/color-picker/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$components$2f$ColorBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorBlock$3e$__ = __turbopack_import__("[project]/node_modules/@rc-component/color-picker/es/components/ColorBlock.js [app-ssr] (ecmascript) <export default as ColorBlock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/pickAttrs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/locale/useLocale.js [app-ssr] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorClear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/components/ColorClear.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
var __rest = this && this.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
;
;
;
const ColorTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { color, prefixCls, open, disabled, format, className, showText, activeIndex } = props, rest = __rest(props, [
        "color",
        "prefixCls",
        "open",
        "disabled",
        "format",
        "className",
        "showText",
        "activeIndex"
    ]);
    const colorTriggerPrefixCls = `${prefixCls}-trigger`;
    const colorTextPrefixCls = `${colorTriggerPrefixCls}-text`;
    const colorTextCellPrefixCls = `${colorTextPrefixCls}-cell`;
    const [locale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('ColorPicker');
    // ============================== Text ==============================
    const desc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (!showText) {
            return '';
        }
        if (typeof showText === 'function') {
            return showText(color);
        }
        if (color.cleared) {
            return locale.transparent;
        }
        if (color.isGradient()) {
            return color.getColors().map((c, index)=>{
                const inactive = activeIndex !== -1 && activeIndex !== index;
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                    key: index,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(colorTextCellPrefixCls, inactive && `${colorTextCellPrefixCls}-inactive`)
                }, c.color.toRgbString(), " ", c.percent, "%");
            });
        }
        const hexString = color.toHexString().toUpperCase();
        const alpha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorAlpha"])(color);
        switch(format){
            case 'rgb':
                return color.toRgbString();
            case 'hsb':
                return color.toHsbString();
            // case 'hex':
            default:
                return alpha < 100 ? `${hexString.slice(0, 7)},${alpha}%` : hexString;
        }
    }, [
        color,
        format,
        showText,
        activeIndex
    ]);
    // ============================= Render =============================
    const containerNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>color.cleared ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorClear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            prefixCls: prefixCls
        }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$components$2f$ColorBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorBlock$3e$__["ColorBlock"], {
            prefixCls: prefixCls,
            color: color.toCssString()
        }), [
        color,
        prefixCls
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", Object.assign({
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(colorTriggerPrefixCls, className, {
            [`${colorTriggerPrefixCls}-active`]: open,
            [`${colorTriggerPrefixCls}-disabled`]: disabled
        })
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(rest)), containerNode, showText && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: colorTextPrefixCls
    }, desc));
});
const __TURBOPACK__default__export__ = ColorTrigger;

})()),
"[project]/node_modules/antd/es/color-picker/hooks/useModeColor.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useModeColor
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/rc-util/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useEvent.js [app-ssr] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMergedState$3e$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useMergedState.js [app-ssr] (ecmascript) <export default as useMergedState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_import__("[project]/node_modules/antd/es/locale/useLocale.js [app-ssr] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/util.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
function useModeColor(defaultValue, value, mode) {
    const [locale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('ColorPicker');
    // ======================== Base ========================
    // Color
    const [mergedColor, setMergedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMergedState$3e$__["useMergedState"])(defaultValue, {
        value
    });
    // Mode
    const [modeState, setModeState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState('single');
    const [modeOptionList, modeSet] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>{
        const list = (Array.isArray(mode) ? mode : [
            mode
        ]).filter((m)=>m);
        if (!list.length) {
            list.push('single');
        }
        const modes = new Set(list);
        const optionList = [];
        const pushOption = (modeType, localeTxt)=>{
            if (modes.has(modeType)) {
                optionList.push({
                    label: localeTxt,
                    value: modeType
                });
            }
        };
        pushOption('single', locale.singleColor);
        pushOption('gradient', locale.gradientColor);
        return [
            optionList,
            modes
        ];
    }, [
        mode
    ]);
    // ======================== Post ========================
    // We need align `mode` with `color` state
    // >>>>> Color
    const [cacheColor, setCacheColor] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(null);
    const setColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])((nextColor)=>{
        setCacheColor(nextColor);
        setMergedColor(nextColor);
    });
    const postColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>{
        const colorObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateColor"])(mergedColor || '');
        // Use `cacheColor` in case the color is `cleared`
        return colorObj.equals(cacheColor) ? cacheColor : colorObj;
    }, [
        mergedColor,
        cacheColor
    ]);
    // >>>>> Mode
    const postMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>{
        var _a;
        if (modeSet.has(modeState)) {
            return modeState;
        }
        return (_a = modeOptionList[0]) === null || _a === void 0 ? void 0 : _a.value;
    }, [
        modeSet,
        modeState,
        modeOptionList
    ]);
    // ======================= Effect =======================
    // Dynamic update mode when color change
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
        setModeState(postColor.isGradient() ? 'gradient' : 'single');
    }, [
        postColor
    ]);
    // ======================= Return =======================
    return [
        postColor,
        setColor,
        postMode,
        setModeState,
        modeOptionList
    ];
}

})()),
"[project]/node_modules/antd/es/color-picker/style/color-block.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "getTransBg": ()=>getTransBg
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/cssinjs/es/util/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const getTransBg = (size, colorFill)=>({
        backgroundImage: `conic-gradient(${colorFill} 0 25%, transparent 0 50%, ${colorFill} 0 75%, transparent 0)`,
        backgroundSize: `${size} ${size}`
    });
const genColorBlockStyle = (token, size)=>{
    const { componentCls, borderRadiusSM, colorPickerInsetShadow, lineWidth, colorFillSecondary } = token;
    return {
        [`${componentCls}-color-block`]: Object.assign(Object.assign({
            position: 'relative',
            borderRadius: borderRadiusSM,
            width: size,
            height: size,
            boxShadow: colorPickerInsetShadow,
            flex: 'none'
        }, getTransBg('50%', token.colorFillSecondary)), {
            [`${componentCls}-color-block-inner`]: {
                width: '100%',
                height: '100%',
                boxShadow: `inset 0 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} ${colorFillSecondary}`,
                borderRadius: 'inherit'
            }
        })
    };
};
const __TURBOPACK__default__export__ = genColorBlockStyle;

})()),
"[project]/node_modules/antd/es/color-picker/style/input.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/cssinjs/es/util/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const genInputStyle = (token)=>{
    const { componentCls, antCls, fontSizeSM, lineHeightSM, colorPickerAlphaInputWidth, marginXXS, paddingXXS, controlHeightSM, marginXS, fontSizeIcon, paddingXS, colorTextPlaceholder, colorPickerInputNumberHandleWidth, lineWidth } = token;
    return {
        [`${componentCls}-input-container`]: {
            display: 'flex',
            [`${componentCls}-steppers${antCls}-input-number`]: {
                fontSize: fontSizeSM,
                lineHeight: lineHeightSM,
                [`${antCls}-input-number-input`]: {
                    paddingInlineStart: paddingXXS,
                    paddingInlineEnd: 0
                },
                [`${antCls}-input-number-handler-wrap`]: {
                    width: colorPickerInputNumberHandleWidth
                }
            },
            [`${componentCls}-steppers${componentCls}-alpha-input`]: {
                flex: `0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(colorPickerAlphaInputWidth)}`,
                marginInlineStart: marginXXS
            },
            [`${componentCls}-format-select${antCls}-select`]: {
                marginInlineEnd: marginXS,
                width: 'auto',
                '&-single': {
                    [`${antCls}-select-selector`]: {
                        padding: 0,
                        border: 0
                    },
                    [`${antCls}-select-arrow`]: {
                        insetInlineEnd: 0
                    },
                    [`${antCls}-select-selection-item`]: {
                        paddingInlineEnd: token.calc(fontSizeIcon).add(marginXXS).equal(),
                        fontSize: fontSizeSM,
                        lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(controlHeightSM)
                    },
                    [`${antCls}-select-item-option-content`]: {
                        fontSize: fontSizeSM,
                        lineHeight: lineHeightSM
                    },
                    [`${antCls}-select-dropdown`]: {
                        [`${antCls}-select-item`]: {
                            minHeight: 'auto'
                        }
                    }
                }
            },
            [`${componentCls}-input`]: {
                gap: marginXXS,
                alignItems: 'center',
                flex: 1,
                width: 0,
                [`${componentCls}-hsb-input,${componentCls}-rgb-input`]: {
                    display: 'flex',
                    gap: marginXXS,
                    alignItems: 'center'
                },
                [`${componentCls}-steppers`]: {
                    flex: 1
                },
                [`${componentCls}-hex-input${antCls}-input-affix-wrapper`]: {
                    flex: 1,
                    padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(paddingXS)}`,
                    [`${antCls}-input`]: {
                        fontSize: fontSizeSM,
                        textTransform: 'uppercase',
                        lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(token.calc(controlHeightSM).sub(token.calc(lineWidth).mul(2)).equal())
                    },
                    [`${antCls}-input-prefix`]: {
                        color: colorTextPlaceholder
                    }
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = genInputStyle;

})()),
"[project]/node_modules/antd/es/color-picker/style/picker.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/cssinjs/es/util/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const genPickerStyle = (token)=>{
    const { componentCls, controlHeightLG, borderRadiusSM, colorPickerInsetShadow, marginSM, colorBgElevated, colorFillSecondary, lineWidthBold, colorPickerHandlerSize } = token;
    return {
        userSelect: 'none',
        [`${componentCls}-select`]: {
            [`${componentCls}-palette`]: {
                minHeight: token.calc(controlHeightLG).mul(4).equal(),
                overflow: 'hidden',
                borderRadius: borderRadiusSM
            },
            [`${componentCls}-saturation`]: {
                position: 'absolute',
                borderRadius: 'inherit',
                boxShadow: colorPickerInsetShadow,
                inset: 0
            },
            marginBottom: marginSM
        },
        // ======================== Panel =========================
        [`${componentCls}-handler`]: {
            width: colorPickerHandlerSize,
            height: colorPickerHandlerSize,
            border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(lineWidthBold)} solid ${colorBgElevated}`,
            position: 'relative',
            borderRadius: '50%',
            cursor: 'pointer',
            boxShadow: `${colorPickerInsetShadow}, 0 0 0 1px ${colorFillSecondary}`
        }
    };
};
const __TURBOPACK__default__export__ = genPickerStyle;

})()),
"[project]/node_modules/antd/es/color-picker/style/presets.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/cssinjs/es/util/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const genPresetsStyle = (token)=>{
    const { componentCls, antCls, colorTextQuaternary, paddingXXS, colorPickerPresetColorSize, fontSizeSM, colorText, lineHeightSM, lineWidth, borderRadius, colorFill, colorWhite, marginXXS, paddingXS, fontHeightSM } = token;
    return {
        [`${componentCls}-presets`]: {
            [`${antCls}-collapse-item > ${antCls}-collapse-header`]: {
                padding: 0,
                [`${antCls}-collapse-expand-icon`]: {
                    height: fontHeightSM,
                    color: colorTextQuaternary,
                    paddingInlineEnd: paddingXXS
                }
            },
            [`${antCls}-collapse`]: {
                display: 'flex',
                flexDirection: 'column',
                gap: marginXXS
            },
            [`${antCls}-collapse-item > ${antCls}-collapse-content > ${antCls}-collapse-content-box`]: {
                padding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(paddingXS)} 0`
            },
            '&-label': {
                fontSize: fontSizeSM,
                color: colorText,
                lineHeight: lineHeightSM
            },
            '&-items': {
                display: 'flex',
                flexWrap: 'wrap',
                gap: token.calc(marginXXS).mul(1.5).equal(),
                [`${componentCls}-presets-color`]: {
                    position: 'relative',
                    cursor: 'pointer',
                    width: colorPickerPresetColorSize,
                    height: colorPickerPresetColorSize,
                    '&::before': {
                        content: '""',
                        pointerEvents: 'none',
                        width: token.calc(colorPickerPresetColorSize).add(token.calc(lineWidth).mul(4)).equal(),
                        height: token.calc(colorPickerPresetColorSize).add(token.calc(lineWidth).mul(4)).equal(),
                        position: 'absolute',
                        top: token.calc(lineWidth).mul(-2).equal(),
                        insetInlineStart: token.calc(lineWidth).mul(-2).equal(),
                        borderRadius,
                        border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} solid transparent`,
                        transition: `border-color ${token.motionDurationMid} ${token.motionEaseInBack}`
                    },
                    '&:hover::before': {
                        borderColor: colorFill
                    },
                    '&::after': {
                        boxSizing: 'border-box',
                        position: 'absolute',
                        top: '50%',
                        insetInlineStart: '21.5%',
                        display: 'table',
                        width: token.calc(colorPickerPresetColorSize).div(13).mul(5).equal(),
                        height: token.calc(colorPickerPresetColorSize).div(13).mul(8).equal(),
                        border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidthBold)} solid ${token.colorWhite}`,
                        borderTop: 0,
                        borderInlineStart: 0,
                        transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
                        opacity: 0,
                        content: '""',
                        transition: `all ${token.motionDurationFast} ${token.motionEaseInBack}, opacity ${token.motionDurationFast}`
                    },
                    [`&${componentCls}-presets-color-checked`]: {
                        '&::after': {
                            opacity: 1,
                            borderColor: colorWhite,
                            transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
                            transition: `transform ${token.motionDurationMid} ${token.motionEaseOutBack} ${token.motionDurationFast}`
                        },
                        [`&${componentCls}-presets-color-bright`]: {
                            '&::after': {
                                borderColor: 'rgba(0, 0, 0, 0.45)'
                            }
                        }
                    }
                }
            },
            '&-empty': {
                fontSize: fontSizeSM,
                color: colorTextQuaternary
            }
        }
    };
};
const __TURBOPACK__default__export__ = genPresetsStyle;

})()),
"[project]/node_modules/antd/es/color-picker/style/slider.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/cssinjs/es/util/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$style$2f$color$2d$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/style/color-block.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const genSliderStyle = (token)=>{
    const { componentCls, colorPickerInsetShadow, colorBgElevated, colorFillSecondary, lineWidthBold, colorPickerHandlerSizeSM, colorPickerSliderHeight, marginSM, marginXS } = token;
    const handleInnerSize = token.calc(colorPickerHandlerSizeSM).sub(token.calc(lineWidthBold).mul(2).equal()).equal();
    const handleHoverSize = token.calc(colorPickerHandlerSizeSM).add(token.calc(lineWidthBold).mul(2).equal()).equal();
    const activeHandleStyle = {
        '&:after': {
            transform: 'scale(1)',
            boxShadow: `${colorPickerInsetShadow}, 0 0 0 1px ${token.colorPrimaryActive}`
        }
    };
    return {
        // ======================== Slider ========================
        [`${componentCls}-slider`]: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$style$2f$color$2d$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransBg"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(colorPickerSliderHeight), token.colorFillSecondary),
            {
                margin: 0,
                padding: 0,
                height: colorPickerSliderHeight,
                borderRadius: token.calc(colorPickerSliderHeight).div(2).equal(),
                '&-rail': {
                    height: colorPickerSliderHeight,
                    borderRadius: token.calc(colorPickerSliderHeight).div(2).equal(),
                    boxShadow: colorPickerInsetShadow
                },
                [`& ${componentCls}-slider-handle`]: {
                    width: handleInnerSize,
                    height: handleInnerSize,
                    top: 0,
                    borderRadius: '100%',
                    '&:before': {
                        display: 'block',
                        position: 'absolute',
                        background: 'transparent',
                        left: {
                            _skip_check_: true,
                            value: '50%'
                        },
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: handleHoverSize,
                        height: handleHoverSize,
                        borderRadius: '100%'
                    },
                    '&:after': {
                        width: colorPickerHandlerSizeSM,
                        height: colorPickerHandlerSizeSM,
                        border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(lineWidthBold)} solid ${colorBgElevated}`,
                        boxShadow: `${colorPickerInsetShadow}, 0 0 0 1px ${colorFillSecondary}`,
                        outline: 'none',
                        insetInlineStart: token.calc(lineWidthBold).mul(-1).equal(),
                        top: token.calc(lineWidthBold).mul(-1).equal(),
                        background: 'transparent',
                        transition: 'none'
                    },
                    '&:focus': activeHandleStyle
                }
            }
        ],
        // ======================== Layout ========================
        [`${componentCls}-slider-container`]: {
            display: 'flex',
            gap: marginSM,
            marginBottom: marginSM,
            // Group
            [`${componentCls}-slider-group`]: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                display: 'flex',
                '&-disabled-alpha': {
                    justifyContent: 'center'
                }
            }
        },
        [`${componentCls}-gradient-slider`]: {
            marginBottom: marginXS,
            [`& ${componentCls}-slider-handle`]: {
                '&:after': {
                    transform: 'scale(0.8)'
                },
                '&-active, &:focus': activeHandleStyle
            }
        }
    };
};
const __TURBOPACK__default__export__ = genSliderStyle;

})()),
"[project]/node_modules/antd/es/color-picker/style/index.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "genActiveStyle": ()=>genActiveStyle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@ant-design/cssinjs/es/util/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/style/compact-item.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/theme/util/genStyleUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_import__("[project]/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-ssr] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$style$2f$color$2d$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/style/color-block.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$style$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/style/input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$style$2f$picker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/style/picker.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$style$2f$presets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/style/presets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$style$2f$slider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/style/slider.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
const genActiveStyle = (token, borderColor, outlineColor)=>({
        borderInlineEndWidth: token.lineWidth,
        borderColor,
        boxShadow: `0 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(token.controlOutlineWidth)} ${outlineColor}`,
        outline: 0
    });
const genRtlStyle = (token)=>{
    const { componentCls } = token;
    return {
        '&-rtl': {
            [`${componentCls}-presets-color`]: {
                '&::after': {
                    direction: 'ltr'
                }
            },
            [`${componentCls}-clear`]: {
                '&::after': {
                    direction: 'ltr'
                }
            }
        }
    };
};
const genClearStyle = (token, size, extraStyle)=>{
    const { componentCls, borderRadiusSM, lineWidth, colorSplit, colorBorder, red6 } = token;
    return {
        [`${componentCls}-clear`]: Object.assign(Object.assign({
            width: size,
            height: size,
            borderRadius: borderRadiusSM,
            border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} solid ${colorSplit}`,
            position: 'relative',
            overflow: 'hidden',
            cursor: 'inherit',
            transition: `all ${token.motionDurationFast}`
        }, extraStyle), {
            '&::after': {
                content: '""',
                position: 'absolute',
                insetInlineEnd: token.calc(lineWidth).mul(-1).equal(),
                top: token.calc(lineWidth).mul(-1).equal(),
                display: 'block',
                width: 40,
                // maximum
                height: 2,
                // fixed
                transformOrigin: `calc(100% - 1px) 1px`,
                transform: 'rotate(-45deg)',
                backgroundColor: red6
            },
            '&:hover': {
                borderColor: colorBorder
            }
        })
    };
};
const genStatusStyle = (token)=>{
    const { componentCls, colorError, colorWarning, colorErrorHover, colorWarningHover, colorErrorOutline, colorWarningOutline } = token;
    return {
        [`&${componentCls}-status-error`]: {
            borderColor: colorError,
            '&:hover': {
                borderColor: colorErrorHover
            },
            [`&${componentCls}-trigger-active`]: Object.assign({}, genActiveStyle(token, colorError, colorErrorOutline))
        },
        [`&${componentCls}-status-warning`]: {
            borderColor: colorWarning,
            '&:hover': {
                borderColor: colorWarningHover
            },
            [`&${componentCls}-trigger-active`]: Object.assign({}, genActiveStyle(token, colorWarning, colorWarningOutline))
        }
    };
};
const genSizeStyle = (token)=>{
    const { componentCls, controlHeightLG, controlHeightSM, controlHeight, controlHeightXS, borderRadius, borderRadiusSM, borderRadiusXS, borderRadiusLG, fontSizeLG } = token;
    return {
        [`&${componentCls}-lg`]: {
            minWidth: controlHeightLG,
            minHeight: controlHeightLG,
            borderRadius: borderRadiusLG,
            [`${componentCls}-color-block, ${componentCls}-clear`]: {
                width: controlHeight,
                height: controlHeight,
                borderRadius
            },
            [`${componentCls}-trigger-text`]: {
                fontSize: fontSizeLG
            }
        },
        [`&${componentCls}-sm`]: {
            minWidth: controlHeightSM,
            minHeight: controlHeightSM,
            borderRadius: borderRadiusSM,
            [`${componentCls}-color-block, ${componentCls}-clear`]: {
                width: controlHeightXS,
                height: controlHeightXS,
                borderRadius: borderRadiusXS
            },
            [`${componentCls}-trigger-text`]: {
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(controlHeightXS)
            }
        }
    };
};
const genColorPickerStyle = (token)=>{
    const { antCls, componentCls, colorPickerWidth, colorPrimary, motionDurationMid, colorBgElevated, colorTextDisabled, colorText, colorBgContainerDisabled, borderRadius, marginXS, marginSM, controlHeight, controlHeightSM, colorBgTextActive, colorPickerPresetColorSize, colorPickerPreviewSize, lineWidth, colorBorder, paddingXXS, fontSize, colorPrimaryHover, controlOutline } = token;
    return [
        {
            [componentCls]: Object.assign({
                [`${componentCls}-inner`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
                    '&-content': {
                        display: 'flex',
                        flexDirection: 'column',
                        width: colorPickerWidth,
                        [`& > ${antCls}-divider`]: {
                            margin: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(marginSM)} 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(marginXS)}`
                        }
                    },
                    [`${componentCls}-panel`]: Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$style$2f$picker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(token))
                }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$style$2f$slider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(token)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$style$2f$color$2d$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(token, colorPickerPreviewSize)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$style$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(token)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$style$2f$presets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(token)), genClearStyle(token, colorPickerPresetColorSize, {
                    marginInlineStart: 'auto'
                })), {
                    // Operation bar
                    [`${componentCls}-operation`]: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: marginXS
                    }
                }),
                '&-trigger': Object.assign(Object.assign(Object.assign(Object.assign({
                    minWidth: controlHeight,
                    minHeight: controlHeight,
                    borderRadius,
                    border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} solid ${colorBorder}`,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    transition: `all ${motionDurationMid}`,
                    background: colorBgElevated,
                    padding: token.calc(paddingXXS).sub(lineWidth).equal(),
                    [`${componentCls}-trigger-text`]: {
                        marginInlineStart: marginXS,
                        marginInlineEnd: token.calc(marginXS).sub(token.calc(paddingXXS).sub(lineWidth)).equal(),
                        fontSize,
                        color: colorText,
                        alignSelf: 'center',
                        '&-cell': {
                            '&:not(:last-child):after': {
                                content: '", "'
                            },
                            '&-inactive': {
                                color: colorTextDisabled
                            }
                        }
                    },
                    '&:hover': {
                        borderColor: colorPrimaryHover
                    },
                    [`&${componentCls}-trigger-active`]: Object.assign({}, genActiveStyle(token, colorPrimary, controlOutline)),
                    '&-disabled': {
                        color: colorTextDisabled,
                        background: colorBgContainerDisabled,
                        cursor: 'not-allowed',
                        '&:hover': {
                            borderColor: colorBgTextActive
                        },
                        [`${componentCls}-trigger-text`]: {
                            color: colorTextDisabled
                        }
                    }
                }, genClearStyle(token, controlHeightSM)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$style$2f$color$2d$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(token, controlHeightSM)), genStatusStyle(token)), genSizeStyle(token))
            }, genRtlStyle(token))
        },
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genCompactItemStyle"])(token, {
            focusElCls: `${componentCls}-trigger-active`
        })
    ];
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('ColorPicker', (token)=>{
    const { colorTextQuaternary, marginSM } = token;
    const colorPickerSliderHeight = 8;
    const colorPickerToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        colorPickerWidth: 234,
        colorPickerHandlerSize: 16,
        colorPickerHandlerSizeSM: 12,
        colorPickerAlphaInputWidth: 44,
        colorPickerInputNumberHandleWidth: 16,
        colorPickerPresetColorSize: 24,
        colorPickerInsetShadow: `inset 0 0 1px 0 ${colorTextQuaternary}`,
        colorPickerSliderHeight,
        colorPickerPreviewSize: token.calc(colorPickerSliderHeight).mul(2).add(marginSM).equal()
    });
    return [
        genColorPickerStyle(colorPickerToken)
    ];
});

})()),
"[project]/node_modules/antd/es/color-picker/ColorPicker.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useMergedState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/_util/ContextIsolator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$_util$2f$PurePanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/_util/PurePanel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/_util/statusUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/_util/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/config-provider/DisabledContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/config-provider/hooks/useSize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/form/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/popover/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/space/Compact.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$ColorPickerPanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/ColorPickerPanel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/components/ColorTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$hooks$2f$useModeColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/hooks/useModeColor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/style/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/util.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
var __rest = this && this.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
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
const ColorPicker = (props)=>{
    const { mode, value, defaultValue, format, defaultFormat, allowClear = false, presets, children, trigger = 'click', open, disabled, placement = 'bottomLeft', arrow = true, panelRender, showText, style, className, size: customizeSize, rootClassName, prefixCls: customizePrefixCls, styles, disabledAlpha = false, onFormatChange, onChange, onClear, onOpenChange, onChangeComplete, getPopupContainer, autoAdjustOverflow = true, destroyTooltipOnHide } = props, rest = __rest(props, [
        "mode",
        "value",
        "defaultValue",
        "format",
        "defaultFormat",
        "allowClear",
        "presets",
        "children",
        "trigger",
        "open",
        "disabled",
        "placement",
        "arrow",
        "panelRender",
        "showText",
        "style",
        "className",
        "size",
        "rootClassName",
        "prefixCls",
        "styles",
        "disabledAlpha",
        "onFormatChange",
        "onChange",
        "onClear",
        "onOpenChange",
        "onChangeComplete",
        "getPopupContainer",
        "autoAdjustOverflow",
        "destroyTooltipOnHide"
    ]);
    const { getPrefixCls, direction, colorPicker } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const contextDisabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = disabled !== null && disabled !== void 0 ? disabled : contextDisabled;
    const [popupOpen, setPopupOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, {
        value: open,
        postState: (openData)=>!mergedDisabled && openData,
        onChange: onOpenChange
    });
    const [formatValue, setFormatValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useMergedState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(format, {
        value: format,
        defaultValue: defaultFormat,
        onChange: onFormatChange
    });
    const prefixCls = getPrefixCls('color-picker', customizePrefixCls);
    // ================== Value & Mode =================
    const [mergedColor, setColor, modeState, setModeState, modeOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$hooks$2f$useModeColor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(defaultValue, value, mode);
    const isAlphaColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorAlpha"])(mergedColor) < 100, [
        mergedColor
    ]);
    // ==================== Change =====================
    // To enhance user experience, we cache the gradient color when switch from gradient to single
    // If user not modify single color, we will use the cached gradient color.
    const [cachedGradientColor, setCachedGradientColor] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const onInternalChangeComplete = (color)=>{
        if (onChangeComplete) {
            let changeColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateColor"])(color);
            // ignore alpha color
            if (disabledAlpha && isAlphaColor) {
                changeColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genAlphaColor"])(color);
            }
            onChangeComplete(changeColor);
        }
    };
    const onInternalChange = (data, changeFromPickerDrag)=>{
        let color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateColor"])(data);
        // ignore alpha color
        if (disabledAlpha && isAlphaColor) {
            color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genAlphaColor"])(color);
        }
        setColor(color);
        setCachedGradientColor(null);
        // Trigger change event
        if (onChange) {
            onChange(color, color.toCssString());
        }
        // Only for drag-and-drop color picking
        if (!changeFromPickerDrag) {
            onInternalChangeComplete(color);
        }
    };
    // =================== Gradient ====================
    const [activeIndex, setActiveIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(0);
    const [gradientDragging, setGradientDragging] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    // Mode change should also trigger color change
    const onInternalModeChange = (newMode)=>{
        setModeState(newMode);
        if (newMode === 'single' && mergedColor.isGradient()) {
            setActiveIndex(0);
            onInternalChange(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AggregationColor"](mergedColor.getColors()[0].color));
            // Should after `onInternalChange` since it will clear the cached color
            setCachedGradientColor(mergedColor);
        } else if (newMode === 'gradient' && !mergedColor.isGradient()) {
            const baseColor = isAlphaColor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genAlphaColor"])(mergedColor) : mergedColor;
            onInternalChange(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AggregationColor"](cachedGradientColor || [
                {
                    percent: 0,
                    color: baseColor
                },
                {
                    percent: 100,
                    color: baseColor
                }
            ]));
        }
    };
    // ================== Form Status ==================
    const { status: contextStatus } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    // ==================== Compact ====================
    const { compactSize, compactItemClassnames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCompactItemContext"])(prefixCls, direction);
    // ===================== Style =====================
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((ctx)=>{
        var _a;
        return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
    });
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const rtlCls = {
        [`${prefixCls}-rtl`]: direction
    };
    const mergedRootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(rootClassName, cssVarCls, rootCls, rtlCls);
    const mergedCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStatusClassNames"])(prefixCls, contextStatus), {
        [`${prefixCls}-sm`]: mergedSize === 'small',
        [`${prefixCls}-lg`]: mergedSize === 'large'
    }, compactItemClassnames, colorPicker === null || colorPicker === void 0 ? void 0 : colorPicker.className, mergedRootCls, className, hashId);
    const mergedPopupCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, mergedRootCls);
    // ===================== Warning ======================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('ColorPicker');
        ("TURBOPACK compile-time truthy", 1) ? warning(!(disabledAlpha && isAlphaColor), 'usage', '`disabledAlpha` will make the alpha to be 100% when use alpha color.') : ("TURBOPACK unreachable", undefined);
    }
    const popoverProps = {
        open: popupOpen,
        trigger,
        placement,
        arrow,
        rootClassName,
        getPopupContainer,
        autoAdjustOverflow,
        destroyTooltipOnHide
    };
    const mergedStyle = Object.assign(Object.assign({}, colorPicker === null || colorPicker === void 0 ? void 0 : colorPicker.style), style);
    // ============================ zIndex ============================
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({
        style: styles === null || styles === void 0 ? void 0 : styles.popup,
        overlayInnerStyle: styles === null || styles === void 0 ? void 0 : styles.popupOverlayInner,
        onOpenChange: (visible)=>{
            if (!visible || !mergedDisabled) {
                setPopupOpen(visible);
            }
        },
        content: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            form: true
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$ColorPickerPanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            mode: modeState,
            onModeChange: onInternalModeChange,
            modeOptions: modeOptions,
            prefixCls: prefixCls,
            value: mergedColor,
            allowClear: allowClear,
            disabled: mergedDisabled,
            disabledAlpha: disabledAlpha,
            presets: presets,
            panelRender: panelRender,
            format: formatValue,
            onFormatChange: setFormatValue,
            onChange: onInternalChange,
            onChangeComplete: onInternalChangeComplete,
            onClear: onClear,
            activeIndex: activeIndex,
            onActive: setActiveIndex,
            gradientDragging: gradientDragging,
            onGradientDragging: setGradientDragging
        })),
        overlayClassName: mergedPopupCls
    }, popoverProps), children || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], Object.assign({
        activeIndex: popupOpen ? activeIndex : -1,
        open: popupOpen,
        className: mergedCls,
        style: mergedStyle,
        prefixCls: prefixCls,
        disabled: mergedDisabled,
        showText: showText,
        format: formatValue
    }, rest, {
        color: mergedColor
    }))));
};
if ("TURBOPACK compile-time truthy", 1) {
    ColorPicker.displayName = 'ColorPicker';
}
const PurePanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$_util$2f$PurePanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ColorPicker, 'color-picker', /* istanbul ignore next */ (prefixCls)=>prefixCls, (props)=>Object.assign(Object.assign({}, props), {
        placement: 'bottom',
        autoAdjustOverflow: false
    }));
ColorPicker._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
const __TURBOPACK__default__export__ = ColorPicker;

})()),
"[project]/node_modules/antd/es/color-picker/index.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$ColorPicker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/antd/es/color-picker/ColorPicker.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$ColorPicker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];

})()),

};

//# sourceMappingURL=08b5e_antd_es_color-picker_2fc387._.js.map