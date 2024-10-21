module.exports = {

"[project]/node_modules/rc-tree/es/utils/keyUtil.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>getEntity
});
function getEntity(keyEntities, key) {
    return keyEntities[key];
}

})()),
"[project]/node_modules/rc-tree/es/utils/treeUtil.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "convertDataToEntities": ()=>convertDataToEntities,
    "convertNodePropsToEventData": ()=>convertNodePropsToEventData,
    "convertTreeToData": ()=>convertTreeToData,
    "fillFieldNames": ()=>fillFieldNames,
    "flattenTreeData": ()=>flattenTreeData,
    "getKey": ()=>getKey,
    "getPosition": ()=>getPosition,
    "getTreeNodeProps": ()=>getTreeNodeProps,
    "isTreeNode": ()=>isTreeNode,
    "traverseDataNodes": ()=>traverseDataNodes,
    "warningWithoutKey": ()=>warningWithoutKey
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/Children/toArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/omit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/utils/keyUtil.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
var _excluded = [
    "children"
];
;
;
;
;
function getPosition(level, index) {
    return "".concat(level, "-").concat(index);
}
function isTreeNode(node) {
    return node && node.type && node.type.isTreeNode;
}
function getKey(key, pos) {
    if (key !== null && key !== undefined) {
        return key;
    }
    return pos;
}
function fillFieldNames(fieldNames) {
    var _ref = fieldNames || {}, title = _ref.title, _title = _ref._title, key = _ref.key, children = _ref.children;
    var mergedTitle = title || 'title';
    return {
        title: mergedTitle,
        _title: _title || [
            mergedTitle
        ],
        key: key || 'key',
        children: children || 'children'
    };
}
function warningWithoutKey(treeData, fieldNames) {
    var keys = new Map();
    function dig(list) {
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        (list || []).forEach(function(treeNode) {
            var key = treeNode[fieldNames.key];
            var children = treeNode[fieldNames.children];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(key !== null && key !== undefined, "Tree node must have a certain key: [".concat(path).concat(key, "]"));
            var recordKey = String(key);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!keys.has(recordKey) || key === null || key === undefined, "Same 'key' exist in the Tree: ".concat(recordKey));
            keys.set(recordKey, true);
            dig(children, "".concat(path).concat(recordKey, " > "));
        });
    }
    dig(treeData);
}
function convertTreeToData(rootNodes) {
    function dig(node) {
        var treeNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node);
        return treeNodes.map(function(treeNode) {
            // Filter invalidate node
            if (!isTreeNode(treeNode)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!treeNode, 'Tree/TreeNode can only accept TreeNode as children.');
                return null;
            }
            var key = treeNode.key;
            var _treeNode$props = treeNode.props, children = _treeNode$props.children, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_treeNode$props, _excluded);
            var dataNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                key: key
            }, rest);
            var parsedChildren = dig(children);
            if (parsedChildren.length) {
                dataNode.children = parsedChildren;
            }
            return dataNode;
        }).filter(function(dataNode) {
            return dataNode;
        });
    }
    return dig(rootNodes);
}
function flattenTreeData(treeNodeList, expandedKeys, fieldNames) {
    var _fillFieldNames = fillFieldNames(fieldNames), fieldTitles = _fillFieldNames._title, fieldKey = _fillFieldNames.key, fieldChildren = _fillFieldNames.children;
    var expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
    var flattenList = [];
    function dig(list) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return list.map(function(treeNode, index) {
            var pos = getPosition(parent ? parent.pos : '0', index);
            var mergedKey = getKey(treeNode[fieldKey], pos);
            // Pick matched title in field title list
            var mergedTitle;
            for(var i = 0; i < fieldTitles.length; i += 1){
                var fieldTitle = fieldTitles[i];
                if (treeNode[fieldTitle] !== undefined) {
                    mergedTitle = treeNode[fieldTitle];
                    break;
                }
            }
            // Add FlattenDataNode into list
            // We use `Object.assign` here to save perf since babel's `objectSpread` has perf issue
            var flattenNode = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(treeNode, [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(fieldTitles), [
                fieldKey,
                fieldChildren
            ])), {
                title: mergedTitle,
                key: mergedKey,
                parent: parent,
                pos: pos,
                children: null,
                data: treeNode,
                isStart: [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(parent ? parent.isStart : []), [
                    index === 0
                ]),
                isEnd: [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(parent ? parent.isEnd : []), [
                    index === list.length - 1
                ])
            });
            flattenList.push(flattenNode);
            // Loop treeNode children
            if (expandedKeys === true || expandedKeySet.has(mergedKey)) {
                flattenNode.children = dig(treeNode[fieldChildren] || [], flattenNode);
            } else {
                flattenNode.children = [];
            }
            return flattenNode;
        });
    }
    dig(treeNodeList);
    return flattenList;
}
function traverseDataNodes(dataNodes, callback, // To avoid too many params, let use config instead of origin param
config) {
    var mergedConfig = {};
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(config) === 'object') {
        mergedConfig = config;
    } else {
        mergedConfig = {
            externalGetKey: config
        };
    }
    mergedConfig = mergedConfig || {};
    // Init config
    var _mergedConfig = mergedConfig, childrenPropName = _mergedConfig.childrenPropName, externalGetKey = _mergedConfig.externalGetKey, fieldNames = _mergedConfig.fieldNames;
    var _fillFieldNames2 = fillFieldNames(fieldNames), fieldKey = _fillFieldNames2.key, fieldChildren = _fillFieldNames2.children;
    var mergeChildrenPropName = childrenPropName || fieldChildren;
    // Get keys
    var syntheticGetKey;
    if (externalGetKey) {
        if (typeof externalGetKey === 'string') {
            syntheticGetKey = function syntheticGetKey(node) {
                return node[externalGetKey];
            };
        } else if (typeof externalGetKey === 'function') {
            syntheticGetKey = function syntheticGetKey(node) {
                return externalGetKey(node);
            };
        }
    } else {
        syntheticGetKey = function syntheticGetKey(node, pos) {
            return getKey(node[fieldKey], pos);
        };
    }
    // Process
    function processNode(node, index, parent, pathNodes) {
        var children = node ? node[mergeChildrenPropName] : dataNodes;
        var pos = node ? getPosition(parent.pos, index) : '0';
        var connectNodes = node ? [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(pathNodes), [
            node
        ]) : [];
        // Process node if is not root
        if (node) {
            var key = syntheticGetKey(node, pos);
            var _data = {
                node: node,
                index: index,
                pos: pos,
                key: key,
                parentPos: parent.node ? parent.pos : null,
                level: parent.level + 1,
                nodes: connectNodes
            };
            callback(_data);
        }
        // Process children node
        if (children) {
            children.forEach(function(subNode, subIndex) {
                processNode(subNode, subIndex, {
                    node: node,
                    pos: pos,
                    level: parent ? parent.level + 1 : -1
                }, connectNodes);
            });
        }
    }
    processNode(null);
}
function convertDataToEntities(dataNodes) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, initWrapper = _ref2.initWrapper, processEntity = _ref2.processEntity, onProcessFinished = _ref2.onProcessFinished, externalGetKey = _ref2.externalGetKey, childrenPropName = _ref2.childrenPropName, fieldNames = _ref2.fieldNames;
    var /** @deprecated Use `config.externalGetKey` instead */ legacyExternalGetKey = arguments.length > 2 ? arguments[2] : undefined;
    // Init config
    var mergedExternalGetKey = externalGetKey || legacyExternalGetKey;
    var posEntities = {};
    var keyEntities = {};
    var wrapper = {
        posEntities: posEntities,
        keyEntities: keyEntities
    };
    if (initWrapper) {
        wrapper = initWrapper(wrapper) || wrapper;
    }
    traverseDataNodes(dataNodes, function(item) {
        var node = item.node, index = item.index, pos = item.pos, key = item.key, parentPos = item.parentPos, level = item.level, nodes = item.nodes;
        var entity = {
            node: node,
            nodes: nodes,
            index: index,
            key: key,
            pos: pos,
            level: level
        };
        var mergedKey = getKey(key, pos);
        posEntities[pos] = entity;
        keyEntities[mergedKey] = entity;
        // Fill children
        entity.parent = posEntities[parentPos];
        if (entity.parent) {
            entity.parent.children = entity.parent.children || [];
            entity.parent.children.push(entity);
        }
        if (processEntity) {
            processEntity(entity, wrapper);
        }
    }, {
        externalGetKey: mergedExternalGetKey,
        childrenPropName: childrenPropName,
        fieldNames: fieldNames
    });
    if (onProcessFinished) {
        onProcessFinished(wrapper);
    }
    return wrapper;
}
function getTreeNodeProps(key, _ref3) {
    var expandedKeys = _ref3.expandedKeys, selectedKeys = _ref3.selectedKeys, loadedKeys = _ref3.loadedKeys, loadingKeys = _ref3.loadingKeys, checkedKeys = _ref3.checkedKeys, halfCheckedKeys = _ref3.halfCheckedKeys, dragOverNodeKey = _ref3.dragOverNodeKey, dropPosition = _ref3.dropPosition, keyEntities = _ref3.keyEntities;
    var entity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, key);
    var treeNodeProps = {
        eventKey: key,
        expanded: expandedKeys.indexOf(key) !== -1,
        selected: selectedKeys.indexOf(key) !== -1,
        loaded: loadedKeys.indexOf(key) !== -1,
        loading: loadingKeys.indexOf(key) !== -1,
        checked: checkedKeys.indexOf(key) !== -1,
        halfChecked: halfCheckedKeys.indexOf(key) !== -1,
        pos: String(entity ? entity.pos : ''),
        // [Legacy] Drag props
        // Since the interaction of drag is changed, the semantic of the props are
        // not accuracy, I think it should be finally removed
        dragOver: dragOverNodeKey === key && dropPosition === 0,
        dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
        dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
    };
    return treeNodeProps;
}
function convertNodePropsToEventData(props) {
    var data = props.data, expanded = props.expanded, selected = props.selected, checked = props.checked, loaded = props.loaded, loading = props.loading, halfChecked = props.halfChecked, dragOver = props.dragOver, dragOverGapTop = props.dragOverGapTop, dragOverGapBottom = props.dragOverGapBottom, pos = props.pos, active = props.active, eventKey = props.eventKey;
    var eventData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, data), {}, {
        expanded: expanded,
        selected: selected,
        checked: checked,
        loaded: loaded,
        loading: loading,
        halfChecked: halfChecked,
        dragOver: dragOver,
        dragOverGapTop: dragOverGapTop,
        dragOverGapBottom: dragOverGapBottom,
        pos: pos,
        active: active,
        key: eventKey
    });
    if (!('props' in eventData)) {
        Object.defineProperty(eventData, 'props', {
            get: function get() {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, 'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.');
                return props;
            }
        });
    }
    return eventData;
}

})()),
"[project]/node_modules/rc-tree/es/utils/conductUtil.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "conductCheck": ()=>conductCheck,
    "isCheckDisabled": ()=>isCheckDisabled
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/utils/keyUtil.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function removeFromCheckedKeys(halfCheckedKeys, checkedKeys) {
    var filteredKeys = new Set();
    halfCheckedKeys.forEach(function(key) {
        if (!checkedKeys.has(key)) {
            filteredKeys.add(key);
        }
    });
    return filteredKeys;
}
function isCheckDisabled(node) {
    var _ref = node || {}, disabled = _ref.disabled, disableCheckbox = _ref.disableCheckbox, checkable = _ref.checkable;
    return !!(disabled || disableCheckbox) || checkable === false;
}
// Fill miss keys
function fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
    var checkedKeys = new Set(keys);
    var halfCheckedKeys = new Set();
    // Add checked keys top to bottom
    for(var level = 0; level <= maxLevel; level += 1){
        var entities = levelEntities.get(level) || new Set();
        entities.forEach(function(entity) {
            var key = entity.key, node = entity.node, _entity$children = entity.children, children = _entity$children === void 0 ? [] : _entity$children;
            if (checkedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
                children.filter(function(childEntity) {
                    return !syntheticGetCheckDisabled(childEntity.node);
                }).forEach(function(childEntity) {
                    checkedKeys.add(childEntity.key);
                });
            }
        });
    }
    // Add checked keys from bottom to top
    var visitedKeys = new Set();
    for(var _level = maxLevel; _level >= 0; _level -= 1){
        var _entities = levelEntities.get(_level) || new Set();
        _entities.forEach(function(entity) {
            var parent = entity.parent, node = entity.node;
            // Skip if no need to check
            if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
                return;
            }
            // Skip if parent is disabled
            if (syntheticGetCheckDisabled(entity.parent.node)) {
                visitedKeys.add(parent.key);
                return;
            }
            var allChecked = true;
            var partialChecked = false;
            (parent.children || []).filter(function(childEntity) {
                return !syntheticGetCheckDisabled(childEntity.node);
            }).forEach(function(_ref2) {
                var key = _ref2.key;
                var checked = checkedKeys.has(key);
                if (allChecked && !checked) {
                    allChecked = false;
                }
                if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
                    partialChecked = true;
                }
            });
            if (allChecked) {
                checkedKeys.add(parent.key);
            }
            if (partialChecked) {
                halfCheckedKeys.add(parent.key);
            }
            visitedKeys.add(parent.key);
        });
    }
    return {
        checkedKeys: Array.from(checkedKeys),
        halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
    };
}
// Remove useless key
function cleanConductCheck(keys, halfKeys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
    var checkedKeys = new Set(keys);
    var halfCheckedKeys = new Set(halfKeys);
    // Remove checked keys from top to bottom
    for(var level = 0; level <= maxLevel; level += 1){
        var entities = levelEntities.get(level) || new Set();
        entities.forEach(function(entity) {
            var key = entity.key, node = entity.node, _entity$children2 = entity.children, children = _entity$children2 === void 0 ? [] : _entity$children2;
            if (!checkedKeys.has(key) && !halfCheckedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
                children.filter(function(childEntity) {
                    return !syntheticGetCheckDisabled(childEntity.node);
                }).forEach(function(childEntity) {
                    checkedKeys.delete(childEntity.key);
                });
            }
        });
    }
    // Remove checked keys form bottom to top
    halfCheckedKeys = new Set();
    var visitedKeys = new Set();
    for(var _level2 = maxLevel; _level2 >= 0; _level2 -= 1){
        var _entities2 = levelEntities.get(_level2) || new Set();
        _entities2.forEach(function(entity) {
            var parent = entity.parent, node = entity.node;
            // Skip if no need to check
            if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
                return;
            }
            // Skip if parent is disabled
            if (syntheticGetCheckDisabled(entity.parent.node)) {
                visitedKeys.add(parent.key);
                return;
            }
            var allChecked = true;
            var partialChecked = false;
            (parent.children || []).filter(function(childEntity) {
                return !syntheticGetCheckDisabled(childEntity.node);
            }).forEach(function(_ref3) {
                var key = _ref3.key;
                var checked = checkedKeys.has(key);
                if (allChecked && !checked) {
                    allChecked = false;
                }
                if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
                    partialChecked = true;
                }
            });
            if (!allChecked) {
                checkedKeys.delete(parent.key);
            }
            if (partialChecked) {
                halfCheckedKeys.add(parent.key);
            }
            visitedKeys.add(parent.key);
        });
    }
    return {
        checkedKeys: Array.from(checkedKeys),
        halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
    };
}
function conductCheck(keyList, checked, keyEntities, getCheckDisabled) {
    var warningMissKeys = [];
    var syntheticGetCheckDisabled;
    if (getCheckDisabled) {
        syntheticGetCheckDisabled = getCheckDisabled;
    } else {
        syntheticGetCheckDisabled = isCheckDisabled;
    }
    // We only handle exist keys
    var keys = new Set(keyList.filter(function(key) {
        var hasEntity = !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, key);
        if (!hasEntity) {
            warningMissKeys.push(key);
        }
        return hasEntity;
    }));
    var levelEntities = new Map();
    var maxLevel = 0;
    // Convert entities by level for calculation
    Object.keys(keyEntities).forEach(function(key) {
        var entity = keyEntities[key];
        var level = entity.level;
        var levelSet = levelEntities.get(level);
        if (!levelSet) {
            levelSet = new Set();
            levelEntities.set(level, levelSet);
        }
        levelSet.add(entity);
        maxLevel = Math.max(maxLevel, level);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!warningMissKeys.length, "Tree missing follow keys: ".concat(warningMissKeys.slice(0, 100).map(function(key) {
        return "'".concat(key, "'");
    }).join(', ')));
    var result;
    if (checked === true) {
        result = fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled);
    } else {
        result = cleanConductCheck(keys, checked.halfCheckedKeys, levelEntities, maxLevel, syntheticGetCheckDisabled);
    }
    return result;
}

})()),
"[project]/node_modules/rc-tree/es/contextTypes.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/**
 * Webpack has bug for import loop, which is not the same behavior as ES module.
 * When util.js imports the TreeNode for tree generate will cause treeContextTypes be empty.
 */ __turbopack_esm__({
    "TreeContext": ()=>TreeContext
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var TreeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext(null);

})()),
"[project]/node_modules/rc-tree/es/Indent.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
var Indent = function Indent(_ref) {
    var prefixCls = _ref.prefixCls, level = _ref.level, isStart = _ref.isStart, isEnd = _ref.isEnd;
    var baseClassName = "".concat(prefixCls, "-indent-unit");
    var list = [];
    for(var i = 0; i < level; i += 1){
        list.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("span", {
            key: i,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(baseClassName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(baseClassName, "-start"), isStart[i]), "".concat(baseClassName, "-end"), isEnd[i]))
        }));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("span", {
        "aria-hidden": "true",
        className: "".concat(prefixCls, "-indent")
    }, list);
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.memo(Indent);

})()),
"[project]/node_modules/rc-tree/es/TreeNode.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/createClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/inherits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createSuper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/createSuper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/pickAttrs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$contextTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/contextTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$Indent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/Indent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/utils/keyUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/utils/treeUtil.js [app-ssr] (ecmascript)");
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
    "eventKey",
    "className",
    "style",
    "dragOver",
    "dragOverGapTop",
    "dragOverGapBottom",
    "isLeaf",
    "isStart",
    "isEnd",
    "expanded",
    "selected",
    "checked",
    "halfChecked",
    "loading",
    "domRef",
    "active",
    "data",
    "onMouseMove",
    "selectable"
];
;
;
;
;
;
;
;
var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';
var defaultTitle = '---';
var InternalTreeNode = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(InternalTreeNode, _React$Component);
    var _super = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createSuper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(InternalTreeNode);
    function InternalTreeNode() {
        var _this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, InternalTreeNode);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "state", {
            dragNodeHighlight: false
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "selectHandle", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "cacheIndent", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onSelectorClick", function(e) {
            // Click trigger before select/check operation
            var onNodeClick = _this.props.context.onNodeClick;
            onNodeClick(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(_this.props));
            if (_this.isSelectable()) {
                _this.onSelect(e);
            } else {
                _this.onCheck(e);
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onSelectorDoubleClick", function(e) {
            var onNodeDoubleClick = _this.props.context.onNodeDoubleClick;
            onNodeDoubleClick(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(_this.props));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onSelect", function(e) {
            if (_this.isDisabled()) return;
            var onNodeSelect = _this.props.context.onNodeSelect;
            onNodeSelect(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(_this.props));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onCheck", function(e) {
            if (_this.isDisabled()) return;
            var _this$props = _this.props, disableCheckbox = _this$props.disableCheckbox, checked = _this$props.checked;
            var onNodeCheck = _this.props.context.onNodeCheck;
            if (!_this.isCheckable() || disableCheckbox) return;
            var targetChecked = !checked;
            onNodeCheck(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(_this.props), targetChecked);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onMouseEnter", function(e) {
            var onNodeMouseEnter = _this.props.context.onNodeMouseEnter;
            onNodeMouseEnter(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(_this.props));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onMouseLeave", function(e) {
            var onNodeMouseLeave = _this.props.context.onNodeMouseLeave;
            onNodeMouseLeave(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(_this.props));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onContextMenu", function(e) {
            var onNodeContextMenu = _this.props.context.onNodeContextMenu;
            onNodeContextMenu(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(_this.props));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onDragStart", function(e) {
            var onNodeDragStart = _this.props.context.onNodeDragStart;
            e.stopPropagation();
            _this.setState({
                dragNodeHighlight: true
            });
            onNodeDragStart(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this));
            try {
                // ie throw error
                // firefox-need-it
                e.dataTransfer.setData('text/plain', '');
            } catch (error) {
            // empty
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onDragEnter", function(e) {
            var onNodeDragEnter = _this.props.context.onNodeDragEnter;
            e.preventDefault();
            e.stopPropagation();
            onNodeDragEnter(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onDragOver", function(e) {
            var onNodeDragOver = _this.props.context.onNodeDragOver;
            e.preventDefault();
            e.stopPropagation();
            onNodeDragOver(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onDragLeave", function(e) {
            var onNodeDragLeave = _this.props.context.onNodeDragLeave;
            e.stopPropagation();
            onNodeDragLeave(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onDragEnd", function(e) {
            var onNodeDragEnd = _this.props.context.onNodeDragEnd;
            e.stopPropagation();
            _this.setState({
                dragNodeHighlight: false
            });
            onNodeDragEnd(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onDrop", function(e) {
            var onNodeDrop = _this.props.context.onNodeDrop;
            e.preventDefault();
            e.stopPropagation();
            _this.setState({
                dragNodeHighlight: false
            });
            onNodeDrop(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this));
        });
        // Disabled item still can be switch
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onExpand", function(e) {
            var _this$props2 = _this.props, loading = _this$props2.loading, onNodeExpand = _this$props2.context.onNodeExpand;
            if (loading) return;
            onNodeExpand(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(_this.props));
        });
        // Drag usage
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "setSelectHandle", function(node) {
            _this.selectHandle = node;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "getNodeState", function() {
            var expanded = _this.props.expanded;
            if (_this.isLeaf()) {
                return null;
            }
            return expanded ? ICON_OPEN : ICON_CLOSE;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "hasChildren", function() {
            var eventKey = _this.props.eventKey;
            var keyEntities = _this.props.context.keyEntities;
            var _ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, eventKey) || {}, children = _ref.children;
            return !!(children || []).length;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "isLeaf", function() {
            var _this$props3 = _this.props, isLeaf = _this$props3.isLeaf, loaded = _this$props3.loaded;
            var loadData = _this.props.context.loadData;
            var hasChildren = _this.hasChildren();
            if (isLeaf === false) {
                return false;
            }
            return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "isDisabled", function() {
            var disabled = _this.props.disabled;
            var treeDisabled = _this.props.context.disabled;
            return !!(treeDisabled || disabled);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "isCheckable", function() {
            var checkable = _this.props.checkable;
            var treeCheckable = _this.props.context.checkable;
            // Return false if tree or treeNode is not checkable
            if (!treeCheckable || checkable === false) return false;
            return treeCheckable;
        });
        // Load data to avoid default expanded tree without data
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "syncLoadData", function(props) {
            var expanded = props.expanded, loading = props.loading, loaded = props.loaded;
            var _this$props$context = _this.props.context, loadData = _this$props$context.loadData, onNodeLoad = _this$props$context.onNodeLoad;
            if (loading) {
                return;
            }
            // read from state to avoid loadData at same time
            if (loadData && expanded && !_this.isLeaf() && !loaded) {
                // We needn't reload data when has children in sync logic
                // It's only needed in node expanded
                onNodeLoad((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(_this.props));
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "isDraggable", function() {
            var _this$props4 = _this.props, data = _this$props4.data, draggable = _this$props4.context.draggable;
            return !!(draggable && (!draggable.nodeDraggable || draggable.nodeDraggable(data)));
        });
        // ==================== Render: Drag Handler ====================
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "renderDragHandler", function() {
            var _this$props$context2 = _this.props.context, draggable = _this$props$context2.draggable, prefixCls = _this$props$context2.prefixCls;
            return draggable !== null && draggable !== void 0 && draggable.icon ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("span", {
                className: "".concat(prefixCls, "-draggable-icon")
            }, draggable.icon) : null;
        });
        // ====================== Render: Switcher ======================
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "renderSwitcherIconDom", function(isLeaf) {
            var switcherIconFromProps = _this.props.switcherIcon;
            var switcherIconFromCtx = _this.props.context.switcherIcon;
            var switcherIcon = switcherIconFromProps || switcherIconFromCtx;
            // if switcherIconDom is null, no render switcher span
            if (typeof switcherIcon === 'function') {
                return switcherIcon((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, _this.props), {}, {
                    isLeaf: isLeaf
                }));
            }
            return switcherIcon;
        });
        // Switcher
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "renderSwitcher", function() {
            var expanded = _this.props.expanded;
            var prefixCls = _this.props.context.prefixCls;
            if (_this.isLeaf()) {
                // if switcherIconDom is null, no render switcher span
                var _switcherIconDom = _this.renderSwitcherIconDom(true);
                return _switcherIconDom !== false ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher-noop"))
                }, _switcherIconDom) : null;
            }
            var switcherCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher_").concat(expanded ? ICON_OPEN : ICON_CLOSE));
            var switcherIconDom = _this.renderSwitcherIconDom(false);
            return switcherIconDom !== false ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("span", {
                onClick: _this.onExpand,
                className: switcherCls
            }, switcherIconDom) : null;
        });
        // ====================== Render: Checkbox ======================
        // Checkbox
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "renderCheckbox", function() {
            var _this$props5 = _this.props, checked = _this$props5.checked, halfChecked = _this$props5.halfChecked, disableCheckbox = _this$props5.disableCheckbox;
            var prefixCls = _this.props.context.prefixCls;
            var disabled = _this.isDisabled();
            var checkable = _this.isCheckable();
            if (!checkable) return null;
            // [Legacy] Custom element should be separate with `checkable` in future
            var $custom = typeof checkable !== 'boolean' ? checkable : null;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-checkbox"), checked && "".concat(prefixCls, "-checkbox-checked"), !checked && halfChecked && "".concat(prefixCls, "-checkbox-indeterminate"), (disabled || disableCheckbox) && "".concat(prefixCls, "-checkbox-disabled")),
                onClick: _this.onCheck
            }, $custom);
        });
        // ==================== Render: Title + Icon ====================
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "renderIcon", function() {
            var loading = _this.props.loading;
            var prefixCls = _this.props.context.prefixCls;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__").concat(_this.getNodeState() || 'docu'), loading && "".concat(prefixCls, "-icon_loading"))
            });
        });
        // Icon + Title
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "renderSelector", function() {
            var dragNodeHighlight = _this.state.dragNodeHighlight;
            var _this$props6 = _this.props, _this$props6$title = _this$props6.title, title = _this$props6$title === void 0 ? defaultTitle : _this$props6$title, selected = _this$props6.selected, icon = _this$props6.icon, loading = _this$props6.loading, data = _this$props6.data;
            var _this$props$context3 = _this.props.context, prefixCls = _this$props$context3.prefixCls, showIcon = _this$props$context3.showIcon, treeIcon = _this$props$context3.icon, loadData = _this$props$context3.loadData, titleRender = _this$props$context3.titleRender;
            var disabled = _this.isDisabled();
            var wrapClass = "".concat(prefixCls, "-node-content-wrapper");
            // Icon - Still show loading icon when loading without showIcon
            var $icon;
            if (showIcon) {
                var currentIcon = icon || treeIcon;
                $icon = currentIcon ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__customize"))
                }, typeof currentIcon === 'function' ? currentIcon(_this.props) : currentIcon) : _this.renderIcon();
            } else if (loadData && loading) {
                $icon = _this.renderIcon();
            }
            // Title
            var titleNode;
            if (typeof title === 'function') {
                titleNode = title(data);
            } else if (titleRender) {
                titleNode = titleRender(data);
            } else {
                titleNode = title;
            }
            var $title = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("span", {
                className: "".concat(prefixCls, "-title")
            }, titleNode);
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("span", {
                ref: _this.setSelectHandle,
                title: typeof title === 'string' ? title : '',
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(wrapClass), "".concat(wrapClass, "-").concat(_this.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && "".concat(prefixCls, "-node-selected")),
                onMouseEnter: _this.onMouseEnter,
                onMouseLeave: _this.onMouseLeave,
                onContextMenu: _this.onContextMenu,
                onClick: _this.onSelectorClick,
                onDoubleClick: _this.onSelectorDoubleClick
            }, $icon, $title, _this.renderDropIndicator());
        });
        // =================== Render: Drop Indicator ===================
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "renderDropIndicator", function() {
            var _this$props7 = _this.props, disabled = _this$props7.disabled, eventKey = _this$props7.eventKey;
            var _this$props$context4 = _this.props.context, draggable = _this$props$context4.draggable, dropLevelOffset = _this$props$context4.dropLevelOffset, dropPosition = _this$props$context4.dropPosition, prefixCls = _this$props$context4.prefixCls, indent = _this$props$context4.indent, dropIndicatorRender = _this$props$context4.dropIndicatorRender, dragOverNodeKey = _this$props$context4.dragOverNodeKey, direction = _this$props$context4.direction;
            var rootDraggable = !!draggable;
            // allowDrop is calculated in Tree.tsx, there is no need for calc it here
            var showIndicator = !disabled && rootDraggable && dragOverNodeKey === eventKey;
            // This is a hot fix which is already fixed in
            // https://github.com/react-component/tree/pull/743/files
            // But some case need break point so we hack on this
            // ref https://github.com/ant-design/ant-design/issues/43493
            var mergedIndent = indent !== null && indent !== void 0 ? indent : _this.cacheIndent;
            _this.cacheIndent = indent;
            return showIndicator ? dropIndicatorRender({
                dropPosition: dropPosition,
                dropLevelOffset: dropLevelOffset,
                indent: mergedIndent,
                prefixCls: prefixCls,
                direction: direction
            }) : null;
        });
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(InternalTreeNode, [
        {
            key: "componentDidMount",
            value: // Isomorphic needn't load data in server side
            function componentDidMount() {
                this.syncLoadData(this.props);
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.syncLoadData(this.props);
            }
        },
        {
            key: "isSelectable",
            value: function isSelectable() {
                var selectable = this.props.selectable;
                var treeSelectable = this.props.context.selectable;
                // Ignore when selectable is undefined or null
                if (typeof selectable === 'boolean') {
                    return selectable;
                }
                return treeSelectable;
            }
        },
        {
            key: "render",
            value: // =========================== Render ===========================
            function render() {
                var _classNames;
                var _this$props8 = this.props, eventKey = _this$props8.eventKey, className = _this$props8.className, style = _this$props8.style, dragOver = _this$props8.dragOver, dragOverGapTop = _this$props8.dragOverGapTop, dragOverGapBottom = _this$props8.dragOverGapBottom, isLeaf = _this$props8.isLeaf, isStart = _this$props8.isStart, isEnd = _this$props8.isEnd, expanded = _this$props8.expanded, selected = _this$props8.selected, checked = _this$props8.checked, halfChecked = _this$props8.halfChecked, loading = _this$props8.loading, domRef = _this$props8.domRef, active = _this$props8.active, data = _this$props8.data, onMouseMove = _this$props8.onMouseMove, selectable = _this$props8.selectable, otherProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this$props8, _excluded);
                var _this$props$context5 = this.props.context, prefixCls = _this$props$context5.prefixCls, filterTreeNode = _this$props$context5.filterTreeNode, keyEntities = _this$props$context5.keyEntities, dropContainerKey = _this$props$context5.dropContainerKey, dropTargetKey = _this$props$context5.dropTargetKey, draggingNodeKey = _this$props$context5.draggingNodeKey;
                var disabled = this.isDisabled();
                var dataOrAriaAttributeProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(otherProps, {
                    aria: true,
                    data: true
                });
                var _ref2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, eventKey) || {}, level = _ref2.level;
                var isEndNode = isEnd[isEnd.length - 1];
                var mergedDraggable = this.isDraggable();
                var draggableWithoutDisabled = !disabled && mergedDraggable;
                var dragging = draggingNodeKey === eventKey;
                var ariaSelected = selectable !== undefined ? {
                    'aria-selected': !!selectable
                } : undefined;
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                    ref: domRef,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, "".concat(prefixCls, "-treenode"), (_classNames = {}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_classNames, "".concat(prefixCls, "-treenode-disabled"), disabled), "".concat(prefixCls, "-treenode-switcher-").concat(expanded ? 'open' : 'close'), !isLeaf), "".concat(prefixCls, "-treenode-checkbox-checked"), checked), "".concat(prefixCls, "-treenode-checkbox-indeterminate"), halfChecked), "".concat(prefixCls, "-treenode-selected"), selected), "".concat(prefixCls, "-treenode-loading"), loading), "".concat(prefixCls, "-treenode-active"), active), "".concat(prefixCls, "-treenode-leaf-last"), isEndNode), "".concat(prefixCls, "-treenode-draggable"), mergedDraggable), "dragging", dragging), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_classNames, 'drop-target', dropTargetKey === eventKey), 'drop-container', dropContainerKey === eventKey), 'drag-over', !disabled && dragOver), 'drag-over-gap-top', !disabled && dragOverGapTop), 'drag-over-gap-bottom', !disabled && dragOverGapBottom), 'filter-node', filterTreeNode && filterTreeNode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(this.props))))),
                    style: style,
                    draggable: draggableWithoutDisabled,
                    "aria-grabbed": dragging,
                    onDragStart: draggableWithoutDisabled ? this.onDragStart : undefined,
                    onDragEnter: mergedDraggable ? this.onDragEnter : undefined,
                    onDragOver: mergedDraggable ? this.onDragOver : undefined,
                    onDragLeave: mergedDraggable ? this.onDragLeave : undefined,
                    onDrop: mergedDraggable ? this.onDrop : undefined,
                    onDragEnd: mergedDraggable ? this.onDragEnd : undefined,
                    onMouseMove: onMouseMove
                }, ariaSelected, dataOrAriaAttributeProps), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$Indent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    prefixCls: prefixCls,
                    level: level,
                    isStart: isStart,
                    isEnd: isEnd
                }), this.renderDragHandler(), this.renderSwitcher(), this.renderCheckbox(), this.renderSelector());
            }
        }
    ]);
    return InternalTreeNode;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Component);
var ContextTreeNode = function ContextTreeNode(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$contextTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TreeContext"].Consumer, null, function(context) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(InternalTreeNode, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
            context: context
        }));
    });
};
ContextTreeNode.displayName = 'TreeNode';
ContextTreeNode.isTreeNode = 1;
const __TURBOPACK__default__export__ = ContextTreeNode;

})()),
"[project]/node_modules/rc-tree/es/util.js [app-ssr] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "arrAdd": ()=>arrAdd,
    "arrDel": ()=>arrDel,
    "calcDropPosition": ()=>calcDropPosition,
    "calcSelectedKeys": ()=>calcSelectedKeys,
    "conductExpandParent": ()=>conductExpandParent,
    "convertDataToTree": ()=>convertDataToTree,
    "getDragChildrenKeys": ()=>getDragChildrenKeys,
    "isFirstChild": ()=>isFirstChild,
    "isLastChild": ()=>isLastChild,
    "parseCheckedKeys": ()=>parseCheckedKeys,
    "posToArr": ()=>posToArr
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/utils/keyUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/TreeNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
var _excluded = [
    "children"
];
;
;
;
;
;
function arrDel(list, value) {
    if (!list) return [];
    var clone = list.slice();
    var index = clone.indexOf(value);
    if (index >= 0) {
        clone.splice(index, 1);
    }
    return clone;
}
function arrAdd(list, value) {
    var clone = (list || []).slice();
    if (clone.indexOf(value) === -1) {
        clone.push(value);
    }
    return clone;
}
function posToArr(pos) {
    return pos.split('-');
}
function getDragChildrenKeys(dragNodeKey, keyEntities) {
    // not contains self
    // self for left or right drag
    var dragChildrenKeys = [];
    var entity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, dragNodeKey);
    function dig() {
        var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        list.forEach(function(_ref) {
            var key = _ref.key, children = _ref.children;
            dragChildrenKeys.push(key);
            dig(children);
        });
    }
    dig(entity.children);
    return dragChildrenKeys;
}
function isLastChild(treeNodeEntity) {
    if (treeNodeEntity.parent) {
        var posArr = posToArr(treeNodeEntity.pos);
        return Number(posArr[posArr.length - 1]) === treeNodeEntity.parent.children.length - 1;
    }
    return false;
}
function isFirstChild(treeNodeEntity) {
    var posArr = posToArr(treeNodeEntity.pos);
    return Number(posArr[posArr.length - 1]) === 0;
}
function calcDropPosition(event, dragNode, targetNode, indent, startMousePosition, allowDrop, flattenedNodes, keyEntities, expandKeys, direction) {
    var _abstractDropNodeEnti;
    var clientX = event.clientX, clientY = event.clientY;
    var _getBoundingClientRec = event.target.getBoundingClientRect(), top = _getBoundingClientRec.top, height = _getBoundingClientRec.height;
    // optional chain for testing
    var horizontalMouseOffset = (direction === 'rtl' ? -1 : 1) * (((startMousePosition === null || startMousePosition === void 0 ? void 0 : startMousePosition.x) || 0) - clientX);
    var rawDropLevelOffset = (horizontalMouseOffset - 12) / indent;
    // Filter the expanded keys to exclude the node that not has children currently (like async nodes).
    var filteredExpandKeys = expandKeys.filter(function(key) {
        var _keyEntities$key;
        return (_keyEntities$key = keyEntities[key]) === null || _keyEntities$key === void 0 || (_keyEntities$key = _keyEntities$key.children) === null || _keyEntities$key === void 0 ? void 0 : _keyEntities$key.length;
    });
    // find abstract drop node by horizontal offset
    var abstractDropNodeEntity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, targetNode.props.eventKey);
    if (clientY < top + height / 2) {
        // first half, set abstract drop node to previous node
        var nodeIndex = flattenedNodes.findIndex(function(flattenedNode) {
            return flattenedNode.key === abstractDropNodeEntity.key;
        });
        var prevNodeIndex = nodeIndex <= 0 ? 0 : nodeIndex - 1;
        var prevNodeKey = flattenedNodes[prevNodeIndex].key;
        abstractDropNodeEntity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, prevNodeKey);
    }
    var initialAbstractDropNodeKey = abstractDropNodeEntity.key;
    var abstractDragOverEntity = abstractDropNodeEntity;
    var dragOverNodeKey = abstractDropNodeEntity.key;
    var dropPosition = 0;
    var dropLevelOffset = 0;
    // Only allow cross level drop when dragging on a non-expanded node
    if (!filteredExpandKeys.includes(initialAbstractDropNodeKey)) {
        for(var i = 0; i < rawDropLevelOffset; i += 1){
            if (isLastChild(abstractDropNodeEntity)) {
                abstractDropNodeEntity = abstractDropNodeEntity.parent;
                dropLevelOffset += 1;
            } else {
                break;
            }
        }
    }
    var abstractDragDataNode = dragNode.props.data;
    var abstractDropDataNode = abstractDropNodeEntity.node;
    var dropAllowed = true;
    if (isFirstChild(abstractDropNodeEntity) && abstractDropNodeEntity.level === 0 && clientY < top + height / 2 && allowDrop({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: -1
    }) && abstractDropNodeEntity.key === targetNode.props.eventKey) {
        // first half of first node in first level
        dropPosition = -1;
    } else if ((abstractDragOverEntity.children || []).length && filteredExpandKeys.includes(dragOverNodeKey)) {
        // drop on expanded node
        // only allow drop inside
        if (allowDrop({
            dragNode: abstractDragDataNode,
            dropNode: abstractDropDataNode,
            dropPosition: 0
        })) {
            dropPosition = 0;
        } else {
            dropAllowed = false;
        }
    } else if (dropLevelOffset === 0) {
        if (rawDropLevelOffset > -1.5) {
            // | Node     | <- abstractDropNode
            // | -^-===== | <- mousePosition
            // 1. try drop after
            // 2. do not allow drop
            if (allowDrop({
                dragNode: abstractDragDataNode,
                dropNode: abstractDropDataNode,
                dropPosition: 1
            })) {
                dropPosition = 1;
            } else {
                dropAllowed = false;
            }
        } else {
            // | Node     | <- abstractDropNode
            // | ---==^== | <- mousePosition
            // whether it has children or doesn't has children
            // always
            // 1. try drop inside
            // 2. try drop after
            // 3. do not allow drop
            if (allowDrop({
                dragNode: abstractDragDataNode,
                dropNode: abstractDropDataNode,
                dropPosition: 0
            })) {
                dropPosition = 0;
            } else if (allowDrop({
                dragNode: abstractDragDataNode,
                dropNode: abstractDropDataNode,
                dropPosition: 1
            })) {
                dropPosition = 1;
            } else {
                dropAllowed = false;
            }
        }
    } else {
        // | Node1 | <- abstractDropNode
        //      |  Node2  |
        // --^--|----=====| <- mousePosition
        // 1. try insert after Node1
        // 2. do not allow drop
        if (allowDrop({
            dragNode: abstractDragDataNode,
            dropNode: abstractDropDataNode,
            dropPosition: 1
        })) {
            dropPosition = 1;
        } else {
            dropAllowed = false;
        }
    }
    return {
        dropPosition: dropPosition,
        dropLevelOffset: dropLevelOffset,
        dropTargetKey: abstractDropNodeEntity.key,
        dropTargetPos: abstractDropNodeEntity.pos,
        dragOverNodeKey: dragOverNodeKey,
        dropContainerKey: dropPosition === 0 ? null : ((_abstractDropNodeEnti = abstractDropNodeEntity.parent) === null || _abstractDropNodeEnti === void 0 ? void 0 : _abstractDropNodeEnti.key) || null,
        dropAllowed: dropAllowed
    };
}
function calcSelectedKeys(selectedKeys, props) {
    if (!selectedKeys) return undefined;
    var multiple = props.multiple;
    if (multiple) {
        return selectedKeys.slice();
    }
    if (selectedKeys.length) {
        return [
            selectedKeys[0]
        ];
    }
    return selectedKeys;
}
var internalProcessProps = function internalProcessProps(props) {
    return props;
};
function convertDataToTree(treeData, processor) {
    if (!treeData) return [];
    var _ref2 = processor || {}, _ref2$processProps = _ref2.processProps, processProps = _ref2$processProps === void 0 ? internalProcessProps : _ref2$processProps;
    var list = Array.isArray(treeData) ? treeData : [
        treeData
    ];
    return list.map(function(_ref3) {
        var children = _ref3.children, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_ref3, _excluded);
        var childrenNodes = convertDataToTree(children, processor);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            key: props.key
        }, processProps(props)), childrenNodes);
    });
}
function parseCheckedKeys(keys) {
    if (!keys) {
        return null;
    }
    // Convert keys to object format
    var keyProps;
    if (Array.isArray(keys)) {
        // [Legacy] Follow the api doc
        keyProps = {
            checkedKeys: keys,
            halfCheckedKeys: undefined
        };
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keys) === 'object') {
        keyProps = {
            checkedKeys: keys.checked || undefined,
            halfCheckedKeys: keys.halfChecked || undefined
        };
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, '`checkedKeys` is not an array or an object');
        return null;
    }
    return keyProps;
}
function conductExpandParent(keyList, keyEntities) {
    var expandedKeys = new Set();
    function conductUp(key) {
        if (expandedKeys.has(key)) return;
        var entity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, key);
        if (!entity) return;
        expandedKeys.add(key);
        var parent = entity.parent, node = entity.node;
        if (node.disabled) return;
        if (parent) {
            conductUp(parent.key);
        }
    }
    (keyList || []).forEach(function(key) {
        conductUp(key);
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(expandedKeys);
}

})()),
"[project]/node_modules/rc-tree/es/util.js [app-ssr] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/TreeNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/utils/keyUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/utils/treeUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/util.js [app-ssr] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/rc-tree/es/DropIndicator.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>DropIndicator
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function DropIndicator(_ref) {
    var dropPosition = _ref.dropPosition, dropLevelOffset = _ref.dropLevelOffset, indent = _ref.indent;
    var style = {
        pointerEvents: 'none',
        position: 'absolute',
        right: 0,
        backgroundColor: 'red',
        height: 2
    };
    switch(dropPosition){
        case -1:
            style.top = 0;
            style.left = -dropLevelOffset * indent;
            break;
        case 1:
            style.bottom = 0;
            style.left = -dropLevelOffset * indent;
            break;
        case 0:
            style.bottom = 0;
            style.left = indent;
            break;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", {
        style: style
    });
}

})()),
"[project]/node_modules/rc-tree/es/useUnmount.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useUnmount
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useLayoutEffect.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function useUnmount(triggerStart, triggerEnd) {
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(false), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), firstMount = _React$useState2[0], setFirstMount = _React$useState2[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        if (firstMount) {
            triggerStart();
            return function() {
                triggerEnd();
            };
        }
    }, [
        firstMount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        setFirstMount(true);
        return function() {
            setFirstMount(false);
        };
    }, []);
}

})()),
"[project]/node_modules/rc-tree/es/MotionTreeNode.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectDestructuringEmpty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/rc-motion/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/rc-motion/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$contextTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/contextTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/TreeNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$useUnmount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/useUnmount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/utils/treeUtil.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
var _excluded = [
    "className",
    "style",
    "motion",
    "motionNodes",
    "motionType",
    "onMotionStart",
    "onMotionEnd",
    "active",
    "treeNodeRequiredProps"
];
;
;
;
;
;
;
;
;
var MotionTreeNode = function MotionTreeNode(_ref, ref) {
    var className = _ref.className, style = _ref.style, motion = _ref.motion, motionNodes = _ref.motionNodes, motionType = _ref.motionType, onOriginMotionStart = _ref.onMotionStart, onOriginMotionEnd = _ref.onMotionEnd, active = _ref.active, treeNodeRequiredProps = _ref.treeNodeRequiredProps, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(true), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), visible = _React$useState2[0], setVisible = _React$useState2[1];
    var _React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$contextTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TreeContext"]), prefixCls = _React$useContext.prefixCls;
    // Calculate target visible here.
    // And apply in effect to make `leave` motion work.
    var targetVisible = motionNodes && motionType !== 'hide';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        if (motionNodes) {
            if (targetVisible !== visible) {
                setVisible(targetVisible);
            }
        }
    }, [
        motionNodes
    ]);
    var triggerMotionStart = function triggerMotionStart() {
        if (motionNodes) {
            onOriginMotionStart();
        }
    };
    // Should only trigger once
    var triggerMotionEndRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(false);
    var triggerMotionEnd = function triggerMotionEnd() {
        if (motionNodes && !triggerMotionEndRef.current) {
            triggerMotionEndRef.current = true;
            onOriginMotionEnd();
        }
    };
    // Effect if unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$useUnmount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(triggerMotionStart, triggerMotionEnd);
    // Motion end event
    var onVisibleChanged = function onVisibleChanged(nextVisible) {
        if (targetVisible === nextVisible) {
            triggerMotionEnd();
        }
    };
    if (motionNodes) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            ref: ref,
            visible: visible
        }, motion, {
            motionAppear: motionType === 'show',
            onVisibleChanged: onVisibleChanged
        }), function(_ref2, motionRef) {
            var motionClassName = _ref2.className, motionStyle = _ref2.style;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", {
                ref: motionRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-treenode-motion"), motionClassName),
                style: motionStyle
            }, motionNodes.map(function(treeNode) {
                var restProps = Object.assign({}, ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectDestructuringEmpty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(treeNode.data), treeNode.data)), title = treeNode.title, key = treeNode.key, isStart = treeNode.isStart, isEnd = treeNode.isEnd;
                delete restProps.children;
                var treeNodeProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTreeNodeProps"])(key, treeNodeRequiredProps);
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, restProps, treeNodeProps, {
                    title: title,
                    active: active,
                    data: treeNode.data,
                    key: key,
                    isStart: isStart,
                    isEnd: isEnd
                }));
            }));
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        domRef: ref,
        className: className,
        style: style
    }, props, {
        active: active
    }));
};
MotionTreeNode.displayName = 'MotionTreeNode';
var RefMotionTreeNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(MotionTreeNode);
const __TURBOPACK__default__export__ = RefMotionTreeNode;

})()),
"[project]/node_modules/rc-tree/es/utils/diffUtil.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "findExpandedKeys": ()=>findExpandedKeys,
    "getExpandRange": ()=>getExpandRange
});
function findExpandedKeys() {
    var prev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var prevLen = prev.length;
    var nextLen = next.length;
    if (Math.abs(prevLen - nextLen) !== 1) {
        return {
            add: false,
            key: null
        };
    }
    function find(shorter, longer) {
        var cache = new Map();
        shorter.forEach(function(key) {
            cache.set(key, true);
        });
        var keys = longer.filter(function(key) {
            return !cache.has(key);
        });
        return keys.length === 1 ? keys[0] : null;
    }
    if (prevLen < nextLen) {
        return {
            add: true,
            key: find(prev, next)
        };
    }
    return {
        add: false,
        key: find(next, prev)
    };
}
function getExpandRange(shorter, longer, key) {
    var shorterStartIndex = shorter.findIndex(function(data) {
        return data.key === key;
    });
    var shorterEndNode = shorter[shorterStartIndex + 1];
    var longerStartIndex = longer.findIndex(function(data) {
        return data.key === key;
    });
    if (shorterEndNode) {
        var longerEndIndex = longer.findIndex(function(data) {
            return data.key === shorterEndNode.key;
        });
        return longer.slice(longerStartIndex + 1, longerEndIndex);
    }
    return longer.slice(longerStartIndex + 1);
}

})()),
"[project]/node_modules/rc-tree/es/NodeList.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MOTION_KEY": ()=>MOTION_KEY,
    "MotionEntity": ()=>MotionEntity,
    "default": ()=>__TURBOPACK__default__export__,
    "getMinimumRangeTransitionRange": ()=>getMinimumRangeTransitionRange
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectDestructuringEmpty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$MotionTreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/MotionTreeNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$diffUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/utils/diffUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/utils/treeUtil.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
var _excluded = [
    "prefixCls",
    "data",
    "selectable",
    "checkable",
    "expandedKeys",
    "selectedKeys",
    "checkedKeys",
    "loadedKeys",
    "loadingKeys",
    "halfCheckedKeys",
    "keyEntities",
    "disabled",
    "dragging",
    "dragOverNodeKey",
    "dropPosition",
    "motion",
    "height",
    "itemHeight",
    "virtual",
    "focusable",
    "activeItem",
    "focused",
    "tabIndex",
    "onKeyDown",
    "onFocus",
    "onBlur",
    "onActiveChange",
    "onListChangeStart",
    "onListChangeEnd"
];
;
;
;
;
;
;
var HIDDEN_STYLE = {
    width: 0,
    height: 0,
    display: 'flex',
    overflow: 'hidden',
    opacity: 0,
    border: 0,
    padding: 0,
    margin: 0
};
var noop = function noop() {};
var MOTION_KEY = "RC_TREE_MOTION_".concat(Math.random());
var MotionNode = {
    key: MOTION_KEY
};
var MotionEntity = {
    key: MOTION_KEY,
    level: 0,
    index: 0,
    pos: '0',
    node: MotionNode,
    nodes: [
        MotionNode
    ]
};
var MotionFlattenData = {
    parent: null,
    children: [],
    pos: MotionEntity.pos,
    data: MotionNode,
    title: null,
    key: MOTION_KEY,
    /** Hold empty list here since we do not use it */ isStart: [],
    isEnd: []
};
function getMinimumRangeTransitionRange(list, virtual, height, itemHeight) {
    if (virtual === false || !height) {
        return list;
    }
    return list.slice(0, Math.ceil(height / itemHeight) + 1);
}
function itemKey(item) {
    var key = item.key, pos = item.pos;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getKey"])(key, pos);
}
function getAccessibilityPath(item) {
    var path = String(item.data.key);
    var current = item;
    while(current.parent){
        current = current.parent;
        path = "".concat(current.data.key, " > ").concat(path);
    }
    return path;
}
var NodeList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var prefixCls = props.prefixCls, data = props.data, selectable = props.selectable, checkable = props.checkable, expandedKeys = props.expandedKeys, selectedKeys = props.selectedKeys, checkedKeys = props.checkedKeys, loadedKeys = props.loadedKeys, loadingKeys = props.loadingKeys, halfCheckedKeys = props.halfCheckedKeys, keyEntities = props.keyEntities, disabled = props.disabled, dragging = props.dragging, dragOverNodeKey = props.dragOverNodeKey, dropPosition = props.dropPosition, motion = props.motion, height = props.height, itemHeight = props.itemHeight, virtual = props.virtual, focusable = props.focusable, activeItem = props.activeItem, focused = props.focused, tabIndex = props.tabIndex, onKeyDown = props.onKeyDown, onFocus = props.onFocus, onBlur = props.onBlur, onActiveChange = props.onActiveChange, onListChangeStart = props.onListChangeStart, onListChangeEnd = props.onListChangeEnd, domProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    // =============================== Ref ================================
    var listRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(null);
    var indentMeasurerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useImperativeHandle(ref, function() {
        return {
            scrollTo: function scrollTo(scroll) {
                listRef.current.scrollTo(scroll);
            },
            getIndentWidth: function getIndentWidth() {
                return indentMeasurerRef.current.offsetWidth;
            }
        };
    });
    // ============================== Motion ==============================
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(expandedKeys), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), prevExpandedKeys = _React$useState2[0], setPrevExpandedKeys = _React$useState2[1];
    var _React$useState3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(data), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), prevData = _React$useState4[0], setPrevData = _React$useState4[1];
    var _React$useState5 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(data), _React$useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState5, 2), transitionData = _React$useState6[0], setTransitionData = _React$useState6[1];
    var _React$useState7 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState([]), _React$useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState7, 2), transitionRange = _React$useState8[0], setTransitionRange = _React$useState8[1];
    var _React$useState9 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(null), _React$useState10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState9, 2), motionType = _React$useState10[0], setMotionType = _React$useState10[1];
    // When motion end but data change, this will makes data back to previous one
    var dataRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(data);
    dataRef.current = data;
    function onMotionEnd() {
        var latestData = dataRef.current;
        setPrevData(latestData);
        setTransitionData(latestData);
        setTransitionRange([]);
        setMotionType(null);
        onListChangeEnd();
    }
    // Do animation if expanded keys changed
    // layoutEffect here to avoid blink of node removing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        setPrevExpandedKeys(expandedKeys);
        var diffExpanded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$diffUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findExpandedKeys"])(prevExpandedKeys, expandedKeys);
        if (diffExpanded.key !== null) {
            if (diffExpanded.add) {
                var keyIndex = prevData.findIndex(function(_ref) {
                    var key = _ref.key;
                    return key === diffExpanded.key;
                });
                var rangeNodes = getMinimumRangeTransitionRange((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$diffUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExpandRange"])(prevData, data, diffExpanded.key), virtual, height, itemHeight);
                var newTransitionData = prevData.slice();
                newTransitionData.splice(keyIndex + 1, 0, MotionFlattenData);
                setTransitionData(newTransitionData);
                setTransitionRange(rangeNodes);
                setMotionType('show');
            } else {
                var _keyIndex = data.findIndex(function(_ref2) {
                    var key = _ref2.key;
                    return key === diffExpanded.key;
                });
                var _rangeNodes = getMinimumRangeTransitionRange((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$diffUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExpandRange"])(data, prevData, diffExpanded.key), virtual, height, itemHeight);
                var _newTransitionData = data.slice();
                _newTransitionData.splice(_keyIndex + 1, 0, MotionFlattenData);
                setTransitionData(_newTransitionData);
                setTransitionRange(_rangeNodes);
                setMotionType('hide');
            }
        } else if (prevData !== data) {
            // If whole data changed, we just refresh the list
            setPrevData(data);
            setTransitionData(data);
        }
    }, [
        expandedKeys,
        data
    ]);
    // We should clean up motion if is changed by dragging
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(function() {
        if (!dragging) {
            onMotionEnd();
        }
    }, [
        dragging
    ]);
    var mergedData = motion ? transitionData : data;
    var treeNodeRequiredProps = {
        expandedKeys: expandedKeys,
        selectedKeys: selectedKeys,
        loadedKeys: loadedKeys,
        loadingKeys: loadingKeys,
        checkedKeys: checkedKeys,
        halfCheckedKeys: halfCheckedKeys,
        dragOverNodeKey: dragOverNodeKey,
        dropPosition: dropPosition,
        keyEntities: keyEntities
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Fragment, null, focused && activeItem && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("span", {
        style: HIDDEN_STYLE,
        "aria-live": "assertive"
    }, getAccessibilityPath(activeItem)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("input", {
        style: HIDDEN_STYLE,
        disabled: focusable === false || disabled,
        tabIndex: focusable !== false ? tabIndex : null,
        onKeyDown: onKeyDown,
        onFocus: onFocus,
        onBlur: onBlur,
        value: "",
        onChange: noop,
        "aria-label": "for screen reader"
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", {
        className: "".concat(prefixCls, "-treenode"),
        "aria-hidden": true,
        style: {
            position: 'absolute',
            pointerEvents: 'none',
            visibility: 'hidden',
            height: 0,
            overflow: 'hidden',
            border: 0,
            padding: 0
        }
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", {
        className: "".concat(prefixCls, "-indent")
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", {
        ref: indentMeasurerRef,
        className: "".concat(prefixCls, "-indent-unit")
    }))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, domProps, {
        data: mergedData,
        itemKey: itemKey,
        height: height,
        fullHeight: false,
        virtual: virtual,
        itemHeight: itemHeight,
        prefixCls: "".concat(prefixCls, "-list"),
        ref: listRef,
        onVisibleChange: function onVisibleChange(originList) {
            // The best match is using `fullList` - `originList` = `restList`
            // and check the `restList` to see if has the MOTION_KEY node
            // but this will cause performance issue for long list compare
            // we just check `originList` and repeat trigger `onMotionEnd`
            if (originList.every(function(item) {
                return itemKey(item) !== MOTION_KEY;
            })) {
                onMotionEnd();
            }
        }
    }), function(treeNode) {
        var pos = treeNode.pos, restProps = Object.assign({}, ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectDestructuringEmpty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(treeNode.data), treeNode.data)), title = treeNode.title, key = treeNode.key, isStart = treeNode.isStart, isEnd = treeNode.isEnd;
        var mergedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getKey"])(key, pos);
        delete restProps.key;
        delete restProps.children;
        var treeNodeProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTreeNodeProps"])(mergedKey, treeNodeRequiredProps);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$MotionTreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, restProps, treeNodeProps, {
            title: title,
            active: !!activeItem && key === activeItem.key,
            pos: pos,
            data: treeNode.data,
            isStart: isStart,
            isEnd: isEnd,
            motion: motion,
            motionNodes: key === MOTION_KEY ? transitionRange : null,
            motionType: motionType,
            onMotionStart: onListChangeStart,
            onMotionEnd: onMotionEnd,
            treeNodeRequiredProps: treeNodeRequiredProps,
            onMouseMove: function onMouseMove() {
                onActiveChange(null);
            }
        }));
    }));
});
NodeList.displayName = 'NodeList';
const __TURBOPACK__default__export__ = NodeList;

})()),
"[project]/node_modules/rc-tree/es/Tree.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/createClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/inherits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createSuper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/createSuper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/KeyCode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/pickAttrs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$contextTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/contextTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$DropIndicator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/DropIndicator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$NodeList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/NodeList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/TreeNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/util.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/util.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$conductUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/utils/conductUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/utils/keyUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/utils/treeUtil.js [app-ssr] (ecmascript)");
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
var MAX_RETRY_TIMES = 10;
var Tree = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Tree, _React$Component);
    var _super = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createSuper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Tree);
    function Tree() {
        var _this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, Tree);
        for(var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++){
            _args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [
            this
        ].concat(_args));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "destroyed", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "delayedDragEnterLogic", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "loadingRetryTimes", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "state", {
            keyEntities: {},
            indent: null,
            selectedKeys: [],
            checkedKeys: [],
            halfCheckedKeys: [],
            loadedKeys: [],
            loadingKeys: [],
            expandedKeys: [],
            draggingNodeKey: null,
            dragChildrenKeys: [],
            // dropTargetKey is the key of abstract-drop-node
            // the abstract-drop-node is the real drop node when drag and drop
            // not the DOM drag over node
            dropTargetKey: null,
            dropPosition: null,
            // the drop position of abstract-drop-node, inside 0, top -1, bottom 1
            dropContainerKey: null,
            // the container key of abstract-drop-node if dropPosition is -1 or 1
            dropLevelOffset: null,
            // the drop level offset of abstract-drag-over-node
            dropTargetPos: null,
            // the pos of abstract-drop-node
            dropAllowed: true,
            // if drop to abstract-drop-node is allowed
            // the abstract-drag-over-node
            // if mouse is on the bottom of top dom node or no the top of the bottom dom node
            // abstract-drag-over-node is the top node
            dragOverNodeKey: null,
            treeData: [],
            flattenNodes: [],
            focused: false,
            activeKey: null,
            listChanging: false,
            prevProps: null,
            fieldNames: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fillFieldNames"])()
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "dragStartMousePosition", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "dragNode", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "currentMouseOverDroppableNodeKey", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "listRef", /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createRef());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onNodeDragStart", function(event, node) {
            var _this$state = _this.state, expandedKeys = _this$state.expandedKeys, keyEntities = _this$state.keyEntities;
            var onDragStart = _this.props.onDragStart;
            var eventKey = node.props.eventKey;
            _this.dragNode = node;
            _this.dragStartMousePosition = {
                x: event.clientX,
                y: event.clientY
            };
            var newExpandedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrDel"])(expandedKeys, eventKey);
            _this.setState({
                draggingNodeKey: eventKey,
                dragChildrenKeys: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDragChildrenKeys"])(eventKey, keyEntities),
                indent: _this.listRef.current.getIndentWidth()
            });
            _this.setExpandedKeys(newExpandedKeys);
            window.addEventListener('dragend', _this.onWindowDragEnd);
            onDragStart === null || onDragStart === void 0 || onDragStart({
                event: event,
                node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(node.props)
            });
        });
        /**
     * [Legacy] Select handler is smaller than node,
     * so that this will trigger when drag enter node or select handler.
     * This is a little tricky if customize css without padding.
     * Better for use mouse move event to refresh drag state.
     * But let's just keep it to avoid event trigger logic change.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onNodeDragEnter", function(event, node) {
            var _this$state2 = _this.state, expandedKeys = _this$state2.expandedKeys, keyEntities = _this$state2.keyEntities, dragChildrenKeys = _this$state2.dragChildrenKeys, flattenNodes = _this$state2.flattenNodes, indent = _this$state2.indent;
            var _this$props = _this.props, onDragEnter = _this$props.onDragEnter, onExpand = _this$props.onExpand, allowDrop = _this$props.allowDrop, direction = _this$props.direction;
            var _node$props = node.props, pos = _node$props.pos, eventKey = _node$props.eventKey;
            var _assertThisInitialize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), dragNode = _assertThisInitialize.dragNode;
            // record the key of node which is latest entered, used in dragleave event.
            if (_this.currentMouseOverDroppableNodeKey !== eventKey) {
                _this.currentMouseOverDroppableNodeKey = eventKey;
            }
            if (!dragNode) {
                _this.resetDragState();
                return;
            }
            var _calcDropPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["calcDropPosition"])(event, dragNode, node, indent, _this.dragStartMousePosition, allowDrop, flattenNodes, keyEntities, expandedKeys, direction), dropPosition = _calcDropPosition.dropPosition, dropLevelOffset = _calcDropPosition.dropLevelOffset, dropTargetKey = _calcDropPosition.dropTargetKey, dropContainerKey = _calcDropPosition.dropContainerKey, dropTargetPos = _calcDropPosition.dropTargetPos, dropAllowed = _calcDropPosition.dropAllowed, dragOverNodeKey = _calcDropPosition.dragOverNodeKey;
            if (// don't allow drop inside its children
            dragChildrenKeys.indexOf(dropTargetKey) !== -1 || // don't allow drop when drop is not allowed caculated by calcDropPosition
            !dropAllowed) {
                _this.resetDragState();
                return;
            }
            // Side effect for delay drag
            if (!_this.delayedDragEnterLogic) {
                _this.delayedDragEnterLogic = {};
            }
            Object.keys(_this.delayedDragEnterLogic).forEach(function(key) {
                clearTimeout(_this.delayedDragEnterLogic[key]);
            });
            if (dragNode.props.eventKey !== node.props.eventKey) {
                // hoist expand logic here
                // since if logic is on the bottom
                // it will be blocked by abstract dragover node check
                //   => if you dragenter from top, you mouse will still be consider as in the top node
                event.persist();
                _this.delayedDragEnterLogic[pos] = window.setTimeout(function() {
                    if (_this.state.draggingNodeKey === null) return;
                    var newExpandedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(expandedKeys);
                    var entity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, node.props.eventKey);
                    if (entity && (entity.children || []).length) {
                        newExpandedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrAdd"])(expandedKeys, node.props.eventKey);
                    }
                    if (!('expandedKeys' in _this.props)) {
                        _this.setExpandedKeys(newExpandedKeys);
                    }
                    onExpand === null || onExpand === void 0 || onExpand(newExpandedKeys, {
                        node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(node.props),
                        expanded: true,
                        nativeEvent: event.nativeEvent
                    });
                }, 800);
            }
            // Skip if drag node is self
            if (dragNode.props.eventKey === dropTargetKey && dropLevelOffset === 0) {
                _this.resetDragState();
                return;
            }
            // Update drag over node and drag state
            _this.setState({
                dragOverNodeKey: dragOverNodeKey,
                dropPosition: dropPosition,
                dropLevelOffset: dropLevelOffset,
                dropTargetKey: dropTargetKey,
                dropContainerKey: dropContainerKey,
                dropTargetPos: dropTargetPos,
                dropAllowed: dropAllowed
            });
            onDragEnter === null || onDragEnter === void 0 || onDragEnter({
                event: event,
                node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(node.props),
                expandedKeys: expandedKeys
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onNodeDragOver", function(event, node) {
            var _this$state3 = _this.state, dragChildrenKeys = _this$state3.dragChildrenKeys, flattenNodes = _this$state3.flattenNodes, keyEntities = _this$state3.keyEntities, expandedKeys = _this$state3.expandedKeys, indent = _this$state3.indent;
            var _this$props2 = _this.props, onDragOver = _this$props2.onDragOver, allowDrop = _this$props2.allowDrop, direction = _this$props2.direction;
            var _assertThisInitialize2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), dragNode = _assertThisInitialize2.dragNode;
            if (!dragNode) {
                return;
            }
            var _calcDropPosition2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["calcDropPosition"])(event, dragNode, node, indent, _this.dragStartMousePosition, allowDrop, flattenNodes, keyEntities, expandedKeys, direction), dropPosition = _calcDropPosition2.dropPosition, dropLevelOffset = _calcDropPosition2.dropLevelOffset, dropTargetKey = _calcDropPosition2.dropTargetKey, dropContainerKey = _calcDropPosition2.dropContainerKey, dropAllowed = _calcDropPosition2.dropAllowed, dropTargetPos = _calcDropPosition2.dropTargetPos, dragOverNodeKey = _calcDropPosition2.dragOverNodeKey;
            if (dragChildrenKeys.indexOf(dropTargetKey) !== -1 || !dropAllowed) {
                // don't allow drop inside its children
                // don't allow drop when drop is not allowed calculated by calcDropPosition
                return;
            }
            // Update drag position
            if (dragNode.props.eventKey === dropTargetKey && dropLevelOffset === 0) {
                if (!(_this.state.dropPosition === null && _this.state.dropLevelOffset === null && _this.state.dropTargetKey === null && _this.state.dropContainerKey === null && _this.state.dropTargetPos === null && _this.state.dropAllowed === false && _this.state.dragOverNodeKey === null)) {
                    _this.resetDragState();
                }
            } else if (!(dropPosition === _this.state.dropPosition && dropLevelOffset === _this.state.dropLevelOffset && dropTargetKey === _this.state.dropTargetKey && dropContainerKey === _this.state.dropContainerKey && dropTargetPos === _this.state.dropTargetPos && dropAllowed === _this.state.dropAllowed && dragOverNodeKey === _this.state.dragOverNodeKey)) {
                _this.setState({
                    dropPosition: dropPosition,
                    dropLevelOffset: dropLevelOffset,
                    dropTargetKey: dropTargetKey,
                    dropContainerKey: dropContainerKey,
                    dropTargetPos: dropTargetPos,
                    dropAllowed: dropAllowed,
                    dragOverNodeKey: dragOverNodeKey
                });
            }
            onDragOver === null || onDragOver === void 0 || onDragOver({
                event: event,
                node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(node.props)
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onNodeDragLeave", function(event, node) {
            // if it is outside the droppable area
            // currentMouseOverDroppableNodeKey will be updated in dragenter event when into another droppable receiver.
            if (_this.currentMouseOverDroppableNodeKey === node.props.eventKey && !event.currentTarget.contains(event.relatedTarget)) {
                _this.resetDragState();
                _this.currentMouseOverDroppableNodeKey = null;
            }
            var onDragLeave = _this.props.onDragLeave;
            onDragLeave === null || onDragLeave === void 0 || onDragLeave({
                event: event,
                node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(node.props)
            });
        });
        // since stopPropagation() is called in treeNode
        // if onWindowDrag is called, whice means state is keeped, drag state should be cleared
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onWindowDragEnd", function(event) {
            _this.onNodeDragEnd(event, null, true);
            window.removeEventListener('dragend', _this.onWindowDragEnd);
        });
        // if onNodeDragEnd is called, onWindowDragEnd won't be called since stopPropagation() is called
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onNodeDragEnd", function(event, node) {
            var onDragEnd = _this.props.onDragEnd;
            _this.setState({
                dragOverNodeKey: null
            });
            _this.cleanDragState();
            onDragEnd === null || onDragEnd === void 0 || onDragEnd({
                event: event,
                node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(node.props)
            });
            _this.dragNode = null;
            window.removeEventListener('dragend', _this.onWindowDragEnd);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onNodeDrop", function(event, node) {
            var _this$getActiveItem;
            var outsideTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var _this$state4 = _this.state, dragChildrenKeys = _this$state4.dragChildrenKeys, dropPosition = _this$state4.dropPosition, dropTargetKey = _this$state4.dropTargetKey, dropTargetPos = _this$state4.dropTargetPos, dropAllowed = _this$state4.dropAllowed;
            if (!dropAllowed) return;
            var onDrop = _this.props.onDrop;
            _this.setState({
                dragOverNodeKey: null
            });
            _this.cleanDragState();
            if (dropTargetKey === null) return;
            var abstractDropNodeProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTreeNodeProps"])(dropTargetKey, _this.getTreeNodeRequiredProps())), {}, {
                active: ((_this$getActiveItem = _this.getActiveItem()) === null || _this$getActiveItem === void 0 ? void 0 : _this$getActiveItem.key) === dropTargetKey,
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this.state.keyEntities, dropTargetKey).node
            });
            var dropToChild = dragChildrenKeys.indexOf(dropTargetKey) !== -1;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!dropToChild, "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");
            var posArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["posToArr"])(dropTargetPos);
            var dropResult = {
                event: event,
                node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(abstractDropNodeProps),
                dragNode: _this.dragNode ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(_this.dragNode.props) : null,
                dragNodesKeys: [
                    _this.dragNode.props.eventKey
                ].concat(dragChildrenKeys),
                dropToGap: dropPosition !== 0,
                dropPosition: dropPosition + Number(posArr[posArr.length - 1])
            };
            if (!outsideTree) {
                onDrop === null || onDrop === void 0 || onDrop(dropResult);
            }
            _this.dragNode = null;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "cleanDragState", function() {
            var draggingNodeKey = _this.state.draggingNodeKey;
            if (draggingNodeKey !== null) {
                _this.setState({
                    draggingNodeKey: null,
                    dropPosition: null,
                    dropContainerKey: null,
                    dropTargetKey: null,
                    dropLevelOffset: null,
                    dropAllowed: true,
                    dragOverNodeKey: null
                });
            }
            _this.dragStartMousePosition = null;
            _this.currentMouseOverDroppableNodeKey = null;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "triggerExpandActionExpand", function(e, treeNode) {
            var _this$state5 = _this.state, expandedKeys = _this$state5.expandedKeys, flattenNodes = _this$state5.flattenNodes;
            var expanded = treeNode.expanded, key = treeNode.key, isLeaf = treeNode.isLeaf;
            if (isLeaf || e.shiftKey || e.metaKey || e.ctrlKey) {
                return;
            }
            var node = flattenNodes.filter(function(nodeItem) {
                return nodeItem.key === key;
            })[0];
            var eventNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTreeNodeProps"])(key, _this.getTreeNodeRequiredProps())), {}, {
                data: node.data
            }));
            _this.setExpandedKeys(expanded ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrDel"])(expandedKeys, key) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrAdd"])(expandedKeys, key));
            _this.onNodeExpand(e, eventNode);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onNodeClick", function(e, treeNode) {
            var _this$props3 = _this.props, onClick = _this$props3.onClick, expandAction = _this$props3.expandAction;
            if (expandAction === 'click') {
                _this.triggerExpandActionExpand(e, treeNode);
            }
            onClick === null || onClick === void 0 || onClick(e, treeNode);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onNodeDoubleClick", function(e, treeNode) {
            var _this$props4 = _this.props, onDoubleClick = _this$props4.onDoubleClick, expandAction = _this$props4.expandAction;
            if (expandAction === 'doubleClick') {
                _this.triggerExpandActionExpand(e, treeNode);
            }
            onDoubleClick === null || onDoubleClick === void 0 || onDoubleClick(e, treeNode);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onNodeSelect", function(e, treeNode) {
            var selectedKeys = _this.state.selectedKeys;
            var _this$state6 = _this.state, keyEntities = _this$state6.keyEntities, fieldNames = _this$state6.fieldNames;
            var _this$props5 = _this.props, onSelect = _this$props5.onSelect, multiple = _this$props5.multiple;
            var selected = treeNode.selected;
            var key = treeNode[fieldNames.key];
            var targetSelected = !selected;
            // Update selected keys
            if (!targetSelected) {
                selectedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrDel"])(selectedKeys, key);
            } else if (!multiple) {
                selectedKeys = [
                    key
                ];
            } else {
                selectedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrAdd"])(selectedKeys, key);
            }
            // [Legacy] Not found related usage in doc or upper libs
            var selectedNodes = selectedKeys.map(function(selectedKey) {
                var entity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, selectedKey);
                if (!entity) return null;
                return entity.node;
            }).filter(function(node) {
                return node;
            });
            _this.setUncontrolledState({
                selectedKeys: selectedKeys
            });
            onSelect === null || onSelect === void 0 || onSelect(selectedKeys, {
                event: 'select',
                selected: targetSelected,
                node: treeNode,
                selectedNodes: selectedNodes,
                nativeEvent: e.nativeEvent
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onNodeCheck", function(e, treeNode, checked) {
            var _this$state7 = _this.state, keyEntities = _this$state7.keyEntities, oriCheckedKeys = _this$state7.checkedKeys, oriHalfCheckedKeys = _this$state7.halfCheckedKeys;
            var _this$props6 = _this.props, checkStrictly = _this$props6.checkStrictly, onCheck = _this$props6.onCheck;
            var key = treeNode.key;
            // Prepare trigger arguments
            var checkedObj;
            var eventObj = {
                event: 'check',
                node: treeNode,
                checked: checked,
                nativeEvent: e.nativeEvent
            };
            if (checkStrictly) {
                var checkedKeys = checked ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrAdd"])(oriCheckedKeys, key) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrDel"])(oriCheckedKeys, key);
                var halfCheckedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrDel"])(oriHalfCheckedKeys, key);
                checkedObj = {
                    checked: checkedKeys,
                    halfChecked: halfCheckedKeys
                };
                eventObj.checkedNodes = checkedKeys.map(function(checkedKey) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, checkedKey);
                }).filter(function(entity) {
                    return entity;
                }).map(function(entity) {
                    return entity.node;
                });
                _this.setUncontrolledState({
                    checkedKeys: checkedKeys
                });
            } else {
                // Always fill first
                var _conductCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$conductUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["conductCheck"])([].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(oriCheckedKeys), [
                    key
                ]), true, keyEntities), _checkedKeys = _conductCheck.checkedKeys, _halfCheckedKeys = _conductCheck.halfCheckedKeys;
                // If remove, we do it again to correction
                if (!checked) {
                    var keySet = new Set(_checkedKeys);
                    keySet.delete(key);
                    var _conductCheck2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$conductUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["conductCheck"])(Array.from(keySet), {
                        checked: false,
                        halfCheckedKeys: _halfCheckedKeys
                    }, keyEntities);
                    _checkedKeys = _conductCheck2.checkedKeys;
                    _halfCheckedKeys = _conductCheck2.halfCheckedKeys;
                }
                checkedObj = _checkedKeys;
                // [Legacy] This is used for `rc-tree-select`
                eventObj.checkedNodes = [];
                eventObj.checkedNodesPositions = [];
                eventObj.halfCheckedKeys = _halfCheckedKeys;
                _checkedKeys.forEach(function(checkedKey) {
                    var entity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, checkedKey);
                    if (!entity) return;
                    var node = entity.node, pos = entity.pos;
                    eventObj.checkedNodes.push(node);
                    eventObj.checkedNodesPositions.push({
                        node: node,
                        pos: pos
                    });
                });
                _this.setUncontrolledState({
                    checkedKeys: _checkedKeys
                }, false, {
                    halfCheckedKeys: _halfCheckedKeys
                });
            }
            onCheck === null || onCheck === void 0 || onCheck(checkedObj, eventObj);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onNodeLoad", function(treeNode) {
            var _entity$children;
            var key = treeNode.key;
            var keyEntities = _this.state.keyEntities;
            // Skip if has children already
            var entity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, key);
            if (entity !== null && entity !== void 0 && (_entity$children = entity.children) !== null && _entity$children !== void 0 && _entity$children.length) {
                return;
            }
            var loadPromise = new Promise(function(resolve, reject) {
                // We need to get the latest state of loading/loaded keys
                _this.setState(function(_ref) {
                    var _ref$loadedKeys = _ref.loadedKeys, loadedKeys = _ref$loadedKeys === void 0 ? [] : _ref$loadedKeys, _ref$loadingKeys = _ref.loadingKeys, loadingKeys = _ref$loadingKeys === void 0 ? [] : _ref$loadingKeys;
                    var _this$props7 = _this.props, loadData = _this$props7.loadData, onLoad = _this$props7.onLoad;
                    if (!loadData || loadedKeys.indexOf(key) !== -1 || loadingKeys.indexOf(key) !== -1) {
                        return null;
                    }
                    // Process load data
                    var promise = loadData(treeNode);
                    promise.then(function() {
                        var currentLoadedKeys = _this.state.loadedKeys;
                        var newLoadedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrAdd"])(currentLoadedKeys, key);
                        // onLoad should trigger before internal setState to avoid `loadData` trigger twice.
                        // https://github.com/ant-design/ant-design/issues/12464
                        onLoad === null || onLoad === void 0 || onLoad(newLoadedKeys, {
                            event: 'load',
                            node: treeNode
                        });
                        _this.setUncontrolledState({
                            loadedKeys: newLoadedKeys
                        });
                        _this.setState(function(prevState) {
                            return {
                                loadingKeys: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrDel"])(prevState.loadingKeys, key)
                            };
                        });
                        resolve();
                    }).catch(function(e) {
                        _this.setState(function(prevState) {
                            return {
                                loadingKeys: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrDel"])(prevState.loadingKeys, key)
                            };
                        });
                        // If exceed max retry times, we give up retry
                        _this.loadingRetryTimes[key] = (_this.loadingRetryTimes[key] || 0) + 1;
                        if (_this.loadingRetryTimes[key] >= MAX_RETRY_TIMES) {
                            var currentLoadedKeys = _this.state.loadedKeys;
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, 'Retry for `loadData` many times but still failed. No more retry.');
                            _this.setUncontrolledState({
                                loadedKeys: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrAdd"])(currentLoadedKeys, key)
                            });
                            resolve();
                        }
                        reject(e);
                    });
                    return {
                        loadingKeys: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrAdd"])(loadingKeys, key)
                    };
                });
            });
            // Not care warning if we ignore this
            loadPromise.catch(function() {});
            return loadPromise;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onNodeMouseEnter", function(event, node) {
            var onMouseEnter = _this.props.onMouseEnter;
            onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter({
                event: event,
                node: node
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onNodeMouseLeave", function(event, node) {
            var onMouseLeave = _this.props.onMouseLeave;
            onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave({
                event: event,
                node: node
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onNodeContextMenu", function(event, node) {
            var onRightClick = _this.props.onRightClick;
            if (onRightClick) {
                event.preventDefault();
                onRightClick({
                    event: event,
                    node: node
                });
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onFocus", function() {
            var onFocus = _this.props.onFocus;
            _this.setState({
                focused: true
            });
            for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
                args[_key2] = arguments[_key2];
            }
            onFocus === null || onFocus === void 0 || onFocus.apply(void 0, args);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onBlur", function() {
            var onBlur = _this.props.onBlur;
            _this.setState({
                focused: false
            });
            _this.onActiveChange(null);
            for(var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++){
                args[_key3] = arguments[_key3];
            }
            onBlur === null || onBlur === void 0 || onBlur.apply(void 0, args);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "getTreeNodeRequiredProps", function() {
            var _this$state8 = _this.state, expandedKeys = _this$state8.expandedKeys, selectedKeys = _this$state8.selectedKeys, loadedKeys = _this$state8.loadedKeys, loadingKeys = _this$state8.loadingKeys, checkedKeys = _this$state8.checkedKeys, halfCheckedKeys = _this$state8.halfCheckedKeys, dragOverNodeKey = _this$state8.dragOverNodeKey, dropPosition = _this$state8.dropPosition, keyEntities = _this$state8.keyEntities;
            return {
                expandedKeys: expandedKeys || [],
                selectedKeys: selectedKeys || [],
                loadedKeys: loadedKeys || [],
                loadingKeys: loadingKeys || [],
                checkedKeys: checkedKeys || [],
                halfCheckedKeys: halfCheckedKeys || [],
                dragOverNodeKey: dragOverNodeKey,
                dropPosition: dropPosition,
                keyEntities: keyEntities
            };
        });
        // =========================== Expanded ===========================
        /** Set uncontrolled `expandedKeys`. This will also auto update `flattenNodes`. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "setExpandedKeys", function(expandedKeys) {
            var _this$state9 = _this.state, treeData = _this$state9.treeData, fieldNames = _this$state9.fieldNames;
            var flattenNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flattenTreeData"])(treeData, expandedKeys, fieldNames);
            _this.setUncontrolledState({
                expandedKeys: expandedKeys,
                flattenNodes: flattenNodes
            }, true);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onNodeExpand", function(e, treeNode) {
            var expandedKeys = _this.state.expandedKeys;
            var _this$state10 = _this.state, listChanging = _this$state10.listChanging, fieldNames = _this$state10.fieldNames;
            var _this$props8 = _this.props, onExpand = _this$props8.onExpand, loadData = _this$props8.loadData;
            var expanded = treeNode.expanded;
            var key = treeNode[fieldNames.key];
            // Do nothing when motion is in progress
            if (listChanging) {
                return;
            }
            // Update selected keys
            var index = expandedKeys.indexOf(key);
            var targetExpanded = !expanded;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(expanded && index !== -1 || !expanded && index === -1, 'Expand state not sync with index check');
            if (targetExpanded) {
                expandedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrAdd"])(expandedKeys, key);
            } else {
                expandedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrDel"])(expandedKeys, key);
            }
            _this.setExpandedKeys(expandedKeys);
            onExpand === null || onExpand === void 0 || onExpand(expandedKeys, {
                node: treeNode,
                expanded: targetExpanded,
                nativeEvent: e.nativeEvent
            });
            // Async Load data
            if (targetExpanded && loadData) {
                var loadPromise = _this.onNodeLoad(treeNode);
                if (loadPromise) {
                    loadPromise.then(function() {
                        // [Legacy] Refresh logic
                        var newFlattenTreeData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flattenTreeData"])(_this.state.treeData, expandedKeys, fieldNames);
                        _this.setUncontrolledState({
                            flattenNodes: newFlattenTreeData
                        });
                    }).catch(function() {
                        var currentExpandedKeys = _this.state.expandedKeys;
                        var expandedKeysToRestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrDel"])(currentExpandedKeys, key);
                        _this.setExpandedKeys(expandedKeysToRestore);
                    });
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onListChangeStart", function() {
            _this.setUncontrolledState({
                listChanging: true
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onListChangeEnd", function() {
            setTimeout(function() {
                _this.setUncontrolledState({
                    listChanging: false
                });
            });
        });
        // =========================== Keyboard ===========================
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onActiveChange", function(newActiveKey) {
            var activeKey = _this.state.activeKey;
            var _this$props9 = _this.props, onActiveChange = _this$props9.onActiveChange, _this$props9$itemScro = _this$props9.itemScrollOffset, itemScrollOffset = _this$props9$itemScro === void 0 ? 0 : _this$props9$itemScro;
            if (activeKey === newActiveKey) {
                return;
            }
            _this.setState({
                activeKey: newActiveKey
            });
            if (newActiveKey !== null) {
                _this.scrollTo({
                    key: newActiveKey,
                    offset: itemScrollOffset
                });
            }
            onActiveChange === null || onActiveChange === void 0 || onActiveChange(newActiveKey);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "getActiveItem", function() {
            var _this$state11 = _this.state, activeKey = _this$state11.activeKey, flattenNodes = _this$state11.flattenNodes;
            if (activeKey === null) {
                return null;
            }
            return flattenNodes.find(function(_ref2) {
                var key = _ref2.key;
                return key === activeKey;
            }) || null;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "offsetActiveKey", function(offset) {
            var _this$state12 = _this.state, flattenNodes = _this$state12.flattenNodes, activeKey = _this$state12.activeKey;
            var index = flattenNodes.findIndex(function(_ref3) {
                var key = _ref3.key;
                return key === activeKey;
            });
            // Align with index
            if (index === -1 && offset < 0) {
                index = flattenNodes.length;
            }
            index = (index + offset + flattenNodes.length) % flattenNodes.length;
            var item = flattenNodes[index];
            if (item) {
                var _key4 = item.key;
                _this.onActiveChange(_key4);
            } else {
                _this.onActiveChange(null);
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "onKeyDown", function(event) {
            var _this$state13 = _this.state, activeKey = _this$state13.activeKey, expandedKeys = _this$state13.expandedKeys, checkedKeys = _this$state13.checkedKeys, fieldNames = _this$state13.fieldNames;
            var _this$props10 = _this.props, onKeyDown = _this$props10.onKeyDown, checkable = _this$props10.checkable, selectable = _this$props10.selectable;
            // >>>>>>>>>> Direction
            switch(event.which){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].UP:
                    {
                        _this.offsetActiveKey(-1);
                        event.preventDefault();
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].DOWN:
                    {
                        _this.offsetActiveKey(1);
                        event.preventDefault();
                        break;
                    }
            }
            // >>>>>>>>>> Expand & Selection
            var activeItem = _this.getActiveItem();
            if (activeItem && activeItem.data) {
                var treeNodeRequiredProps = _this.getTreeNodeRequiredProps();
                var expandable = activeItem.data.isLeaf === false || !!(activeItem.data[fieldNames.children] || []).length;
                var eventNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTreeNodeProps"])(activeKey, treeNodeRequiredProps)), {}, {
                    data: activeItem.data,
                    active: true
                }));
                switch(event.which){
                    // >>> Expand
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].LEFT:
                        {
                            // Collapse if possible
                            if (expandable && expandedKeys.includes(activeKey)) {
                                _this.onNodeExpand({}, eventNode);
                            } else if (activeItem.parent) {
                                _this.onActiveChange(activeItem.parent.key);
                            }
                            event.preventDefault();
                            break;
                        }
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].RIGHT:
                        {
                            // Expand if possible
                            if (expandable && !expandedKeys.includes(activeKey)) {
                                _this.onNodeExpand({}, eventNode);
                            } else if (activeItem.children && activeItem.children.length) {
                                _this.onActiveChange(activeItem.children[0].key);
                            }
                            event.preventDefault();
                            break;
                        }
                    // Selection
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ENTER:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].SPACE:
                        {
                            if (checkable && !eventNode.disabled && eventNode.checkable !== false && !eventNode.disableCheckbox) {
                                _this.onNodeCheck({}, eventNode, !checkedKeys.includes(activeKey));
                            } else if (!checkable && selectable && !eventNode.disabled && eventNode.selectable !== false) {
                                _this.onNodeSelect({}, eventNode);
                            }
                            break;
                        }
                }
            }
            onKeyDown === null || onKeyDown === void 0 || onKeyDown(event);
        });
        /**
     * Only update the value which is not in props
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "setUncontrolledState", function(state) {
            var atomic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var forceState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            if (!_this.destroyed) {
                var needSync = false;
                var allPassed = true;
                var newState = {};
                Object.keys(state).forEach(function(name) {
                    if (name in _this.props) {
                        allPassed = false;
                        return;
                    }
                    needSync = true;
                    newState[name] = state[name];
                });
                if (needSync && (!atomic || allPassed)) {
                    _this.setState((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, newState), forceState));
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this), "scrollTo", function(scroll) {
            _this.listRef.current.scrollTo(scroll);
        });
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Tree, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.destroyed = false;
                this.onUpdated();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.onUpdated();
            }
        },
        {
            key: "onUpdated",
            value: function onUpdated() {
                var _this$props11 = this.props, activeKey = _this$props11.activeKey, _this$props11$itemScr = _this$props11.itemScrollOffset, itemScrollOffset = _this$props11$itemScr === void 0 ? 0 : _this$props11$itemScr;
                if (activeKey !== undefined && activeKey !== this.state.activeKey) {
                    this.setState({
                        activeKey: activeKey
                    });
                    if (activeKey !== null) {
                        this.scrollTo({
                            key: activeKey,
                            offset: itemScrollOffset
                        });
                    }
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                window.removeEventListener('dragend', this.onWindowDragEnd);
                this.destroyed = true;
            }
        },
        {
            key: "resetDragState",
            value: function resetDragState() {
                this.setState({
                    dragOverNodeKey: null,
                    dropPosition: null,
                    dropLevelOffset: null,
                    dropTargetKey: null,
                    dropContainerKey: null,
                    dropTargetPos: null,
                    dropAllowed: false
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$state14 = this.state, focused = _this$state14.focused, flattenNodes = _this$state14.flattenNodes, keyEntities = _this$state14.keyEntities, draggingNodeKey = _this$state14.draggingNodeKey, activeKey = _this$state14.activeKey, dropLevelOffset = _this$state14.dropLevelOffset, dropContainerKey = _this$state14.dropContainerKey, dropTargetKey = _this$state14.dropTargetKey, dropPosition = _this$state14.dropPosition, dragOverNodeKey = _this$state14.dragOverNodeKey, indent = _this$state14.indent;
                var _this$props12 = this.props, prefixCls = _this$props12.prefixCls, className = _this$props12.className, style = _this$props12.style, showLine = _this$props12.showLine, focusable = _this$props12.focusable, _this$props12$tabInde = _this$props12.tabIndex, tabIndex = _this$props12$tabInde === void 0 ? 0 : _this$props12$tabInde, selectable = _this$props12.selectable, showIcon = _this$props12.showIcon, icon = _this$props12.icon, switcherIcon = _this$props12.switcherIcon, draggable = _this$props12.draggable, checkable = _this$props12.checkable, checkStrictly = _this$props12.checkStrictly, disabled = _this$props12.disabled, motion = _this$props12.motion, loadData = _this$props12.loadData, filterTreeNode = _this$props12.filterTreeNode, height = _this$props12.height, itemHeight = _this$props12.itemHeight, virtual = _this$props12.virtual, titleRender = _this$props12.titleRender, dropIndicatorRender = _this$props12.dropIndicatorRender, onContextMenu = _this$props12.onContextMenu, onScroll = _this$props12.onScroll, direction = _this$props12.direction, rootClassName = _this$props12.rootClassName, rootStyle = _this$props12.rootStyle;
                var domProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this.props, {
                    aria: true,
                    data: true
                });
                // It's better move to hooks but we just simply keep here
                var draggableConfig;
                if (draggable) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(draggable) === 'object') {
                        draggableConfig = draggable;
                    } else if (typeof draggable === 'function') {
                        draggableConfig = {
                            nodeDraggable: draggable
                        };
                    } else {
                        draggableConfig = {};
                    }
                }
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$contextTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TreeContext"].Provider, {
                    value: {
                        prefixCls: prefixCls,
                        selectable: selectable,
                        showIcon: showIcon,
                        icon: icon,
                        switcherIcon: switcherIcon,
                        draggable: draggableConfig,
                        draggingNodeKey: draggingNodeKey,
                        checkable: checkable,
                        checkStrictly: checkStrictly,
                        disabled: disabled,
                        keyEntities: keyEntities,
                        dropLevelOffset: dropLevelOffset,
                        dropContainerKey: dropContainerKey,
                        dropTargetKey: dropTargetKey,
                        dropPosition: dropPosition,
                        dragOverNodeKey: dragOverNodeKey,
                        indent: indent,
                        direction: direction,
                        dropIndicatorRender: dropIndicatorRender,
                        loadData: loadData,
                        filterTreeNode: filterTreeNode,
                        titleRender: titleRender,
                        onNodeClick: this.onNodeClick,
                        onNodeDoubleClick: this.onNodeDoubleClick,
                        onNodeExpand: this.onNodeExpand,
                        onNodeSelect: this.onNodeSelect,
                        onNodeCheck: this.onNodeCheck,
                        onNodeLoad: this.onNodeLoad,
                        onNodeMouseEnter: this.onNodeMouseEnter,
                        onNodeMouseLeave: this.onNodeMouseLeave,
                        onNodeContextMenu: this.onNodeContextMenu,
                        onNodeDragStart: this.onNodeDragStart,
                        onNodeDragEnter: this.onNodeDragEnter,
                        onNodeDragOver: this.onNodeDragOver,
                        onNodeDragLeave: this.onNodeDragLeave,
                        onNodeDragEnd: this.onNodeDragEnd,
                        onNodeDrop: this.onNodeDrop
                    }
                }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", {
                    role: "tree",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, className, rootClassName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-show-line"), showLine), "".concat(prefixCls, "-focused"), focused), "".concat(prefixCls, "-active-focused"), activeKey !== null)),
                    style: rootStyle
                }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$NodeList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                    ref: this.listRef,
                    prefixCls: prefixCls,
                    style: style,
                    data: flattenNodes,
                    disabled: disabled,
                    selectable: selectable,
                    checkable: !!checkable,
                    motion: motion,
                    dragging: draggingNodeKey !== null,
                    height: height,
                    itemHeight: itemHeight,
                    virtual: virtual,
                    focusable: focusable,
                    focused: focused,
                    tabIndex: tabIndex,
                    activeItem: this.getActiveItem(),
                    onFocus: this.onFocus,
                    onBlur: this.onBlur,
                    onKeyDown: this.onKeyDown,
                    onActiveChange: this.onActiveChange,
                    onListChangeStart: this.onListChangeStart,
                    onListChangeEnd: this.onListChangeEnd,
                    onContextMenu: onContextMenu,
                    onScroll: onScroll
                }, this.getTreeNodeRequiredProps(), domProps))));
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(props, prevState) {
                var prevProps = prevState.prevProps;
                var newState = {
                    prevProps: props
                };
                function needSync(name) {
                    return !prevProps && name in props || prevProps && prevProps[name] !== props[name];
                }
                // ================== Tree Node ==================
                var treeData;
                // fieldNames
                var fieldNames = prevState.fieldNames;
                if (needSync('fieldNames')) {
                    fieldNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fillFieldNames"])(props.fieldNames);
                    newState.fieldNames = fieldNames;
                }
                // Check if `treeData` or `children` changed and save into the state.
                if (needSync('treeData')) {
                    treeData = props.treeData;
                } else if (needSync('children')) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, '`children` of Tree is deprecated. Please use `treeData` instead.');
                    treeData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertTreeToData"])(props.children);
                }
                // Save flatten nodes info and convert `treeData` into keyEntities
                if (treeData) {
                    newState.treeData = treeData;
                    var entitiesMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertDataToEntities"])(treeData, {
                        fieldNames: fieldNames
                    });
                    newState.keyEntities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$NodeList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOTION_KEY"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$NodeList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotionEntity"]), entitiesMap.keyEntities);
                    // Warning if treeNode not provide key
                    if ("TURBOPACK compile-time truthy", 1) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warningWithoutKey"])(treeData, fieldNames);
                    }
                }
                var keyEntities = newState.keyEntities || prevState.keyEntities;
                // ================ expandedKeys =================
                if (needSync('expandedKeys') || prevProps && needSync('autoExpandParent')) {
                    newState.expandedKeys = props.autoExpandParent || !prevProps && props.defaultExpandParent ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["conductExpandParent"])(props.expandedKeys, keyEntities) : props.expandedKeys;
                } else if (!prevProps && props.defaultExpandAll) {
                    var cloneKeyEntities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, keyEntities);
                    delete cloneKeyEntities[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$NodeList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOTION_KEY"]];
                    // Only take the key who has the children to enhance the performance
                    var nextExpandedKeys = [];
                    Object.keys(cloneKeyEntities).forEach(function(key) {
                        var entity = cloneKeyEntities[key];
                        if (entity.children && entity.children.length) {
                            nextExpandedKeys.push(entity.key);
                        }
                    });
                    newState.expandedKeys = nextExpandedKeys;
                } else if (!prevProps && props.defaultExpandedKeys) {
                    newState.expandedKeys = props.autoExpandParent || props.defaultExpandParent ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["conductExpandParent"])(props.defaultExpandedKeys, keyEntities) : props.defaultExpandedKeys;
                }
                if (!newState.expandedKeys) {
                    delete newState.expandedKeys;
                }
                // ================ flattenNodes =================
                if (treeData || newState.expandedKeys) {
                    var flattenNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flattenTreeData"])(treeData || prevState.treeData, newState.expandedKeys || prevState.expandedKeys, fieldNames);
                    newState.flattenNodes = flattenNodes;
                }
                // ================ selectedKeys =================
                if (props.selectable) {
                    if (needSync('selectedKeys')) {
                        newState.selectedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["calcSelectedKeys"])(props.selectedKeys, props);
                    } else if (!prevProps && props.defaultSelectedKeys) {
                        newState.selectedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["calcSelectedKeys"])(props.defaultSelectedKeys, props);
                    }
                }
                // ================= checkedKeys =================
                if (props.checkable) {
                    var checkedKeyEntity;
                    if (needSync('checkedKeys')) {
                        checkedKeyEntity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseCheckedKeys"])(props.checkedKeys) || {};
                    } else if (!prevProps && props.defaultCheckedKeys) {
                        checkedKeyEntity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseCheckedKeys"])(props.defaultCheckedKeys) || {};
                    } else if (treeData) {
                        // If `treeData` changed, we also need check it
                        checkedKeyEntity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseCheckedKeys"])(props.checkedKeys) || {
                            checkedKeys: prevState.checkedKeys,
                            halfCheckedKeys: prevState.halfCheckedKeys
                        };
                    }
                    if (checkedKeyEntity) {
                        var _checkedKeyEntity = checkedKeyEntity, _checkedKeyEntity$che = _checkedKeyEntity.checkedKeys, checkedKeys = _checkedKeyEntity$che === void 0 ? [] : _checkedKeyEntity$che, _checkedKeyEntity$hal = _checkedKeyEntity.halfCheckedKeys, halfCheckedKeys = _checkedKeyEntity$hal === void 0 ? [] : _checkedKeyEntity$hal;
                        if (!props.checkStrictly) {
                            var conductKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$utils$2f$conductUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["conductCheck"])(checkedKeys, true, keyEntities);
                            checkedKeys = conductKeys.checkedKeys;
                            halfCheckedKeys = conductKeys.halfCheckedKeys;
                        }
                        newState.checkedKeys = checkedKeys;
                        newState.halfCheckedKeys = halfCheckedKeys;
                    }
                }
                // ================= loadedKeys ==================
                if (needSync('loadedKeys')) {
                    newState.loadedKeys = props.loadedKeys;
                }
                return newState;
            }
        }
    ]);
    return Tree;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Component);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Tree, "defaultProps", {
    prefixCls: 'rc-tree',
    showLine: false,
    showIcon: true,
    selectable: true,
    multiple: false,
    checkable: false,
    disabled: false,
    checkStrictly: false,
    draggable: false,
    defaultExpandParent: true,
    autoExpandParent: false,
    defaultExpandAll: false,
    defaultExpandedKeys: [],
    defaultCheckedKeys: [],
    defaultSelectedKeys: [],
    dropIndicatorRender: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$DropIndicator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    allowDrop: function allowDrop() {
        return true;
    },
    expandAction: false
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Tree, "TreeNode", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = Tree;

})()),
"[project]/node_modules/rc-tree/es/index.js [app-ssr] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$Tree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/Tree.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$Tree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];

})()),
"[project]/node_modules/rc-tree/es/index.js [app-ssr] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$Tree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/Tree.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/TreeNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/index.js [app-ssr] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/rc-tree/es/TreeNode.js [app-ssr] (ecmascript) <export default as TreeNode>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "TreeNode": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-tree/es/TreeNode.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),

};

//# sourceMappingURL=08b5e_rc-tree_es_244dde._.js.map