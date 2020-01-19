/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

console.log('magicblock is up and running');

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks,
    PlainText = _wp$editor.PlainText;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    CheckboxControl = _wp$components.CheckboxControl,
    Button = _wp$components.Button;


var icon = function icon() {
    return wp.element.createElement(
        "svg",
        { width: "20", height: "20", viewBox: "0 0 20 20" },
        wp.element.createElement("path", { d: "M7.17,11.29m7.51-3.44,3.82,2.28-3.82,2.31v1.65L20,11V9.31L14.68,6.19ZM5.32,12.42,1.5,10.14,5.32,7.83V6.19L0,9.31V11l5.32,3.13Zm3.52-2.28L6.55,14.59H8.42l1.44-3,1.7,3h1.89L11,10.11l2.44-4.43H11.47L10.07,8.5,8.5,5.68H6.6Z" })
    );
};

registerBlockType('magicblock/magicblock', {
    title: 'Magic Block',
    icon: icon,
    category: 'layout',
    supports: {
        customClassName: false
    },
    attributes: {
        className: {
            type: 'string'
        },
        inlineStyle: {
            type: 'string',
            source: 'attribute',
            selector: '.wp-block-magicblock-magicblock',
            attribute: 'style'
        },
        href: {
            type: 'string',
            source: 'attribute',
            selector: '.wp-block-magicblock-magicblock',
            attribute: 'href'
        },
        customAttrs: {
            type: 'array'
        },
        newTab: {
            type: 'boolean'
        },
        elemId: {
            type: 'string',
            source: 'attribute',
            selector: '.wp-block-magicblock-magicblock',
            attribute: 'id'
        },
        elemClass: {
            type: 'string'
        },
        elemTag: {
            type: 'string'
        }
    },

    edit: function edit(props) {
        var _props$attributes = props.attributes,
            inlineSytle = _props$attributes.inlineSytle,
            elemTag = _props$attributes.elemTag,
            elemId = _props$attributes.elemId,
            elemClass = _props$attributes.elemClass,
            href = _props$attributes.href,
            newTab = _props$attributes.newTab,
            customAttrs = _props$attributes.customAttrs;


        function convertClassString(input) {
            return input.replace(/\s+$/g, '').replace(/[ ]+/g, ".");
        }

        function onChangeElem(newElem) {
            props.setAttributes({ elemTag: newElem });
        }

        function onChangeInlineStyle(newInlineStyle) {
            props.setAttributes({ inlineStyle: newInlineStyle });
        }

        function onChangeID(newID) {
            props.setAttributes({ elemId: newID });
        }

        function onChangeClass(newClass) {
            props.setAttributes({ elemClass: newClass });
        }

        function onChangeHref(newHref) {
            props.setAttributes({ href: newHref });
        }

        function onChangeNewTab(newNewTab) {
            props.setAttributes({ newTab: newNewTab });
        }

        function addNewCustomAttr() {
            var newCustomAttrArray = void 0;
            if (customAttrs) {
                newCustomAttrArray = [].concat(_toConsumableArray(customAttrs), [{
                    key: '',
                    value: ''
                }]);
            } else {
                newCustomAttrArray = [{
                    key: '',
                    value: ''
                }];
            }
            props.setAttributes({ customAttrs: newCustomAttrArray });
        }

        function deleteCustomAttr(index) {
            var newCustomAttrArray = [].concat(_toConsumableArray(customAttrs));
            newCustomAttrArray.splice(index, 1);
            props.setAttributes({ customAttrs: newCustomAttrArray });
        }

        function setKeyForCustomAttrs(index, newKey) {
            var newCustomAttrArray = [].concat(_toConsumableArray(customAttrs));
            newCustomAttrArray[index].key = newKey.replace(/"  *"|^-|^_|^[0-9]|[^\w-]/g, '');
            props.setAttributes({ customAttrs: newCustomAttrArray });
        }

        function setValueForCustomAttrs(index, newValue) {
            var newCustomAttrArray = [].concat(_toConsumableArray(customAttrs));
            newCustomAttrArray[index].value = newValue.replace(/"/, '');
            props.setAttributes({ customAttrs: newCustomAttrArray });
        }

        var linkPanels = wp.element.createElement(
            PanelBody,
            { title: "Href" },
            wp.element.createElement(PlainText, { onChange: onChangeHref, value: href, className: "magicblock-plaintext" }),
            wp.element.createElement(
                "div",
                { className: "magicblock-flex magicblock-newtab" },
                wp.element.createElement(CheckboxControl, {
                    label: "Open in new tab",
                    checked: newTab,
                    onChange: onChangeNewTab
                })
            )
        );

        return wp.element.createElement(
            Fragment,
            null,
            wp.element.createElement(
                InspectorControls,
                null,
                wp.element.createElement(
                    PanelBody,
                    { title: "Element Type" },
                    wp.element.createElement(SelectControl, { value: elemTag, onChange: onChangeElem, options: [{ label: "div", value: "div" }, { label: "section", value: 'section' }, { label: "main", value: 'main' }, { label: "aside", value: 'aside' }, { label: "article", value: 'article' }, { label: "header", value: 'header' }, { label: "footer", value: 'footer' }, { label: "nav", value: 'nav' }, { label: "dl", value: 'dl' }, { label: "dd", value: 'dd' }, { label: "dt", value: 'dt' }, { label: "a", value: "a" }]
                    }),
                    elemTag === "a" ? wp.element.createElement(
                        "div",
                        null,
                        wp.element.createElement(
                            "strong",
                            null,
                            "Please note:"
                        ),
                        " it is ",
                        wp.element.createElement(
                            "a",
                            { href: "https://www.w3.org/TR/html5/text-level-semantics.html#the-a-element", target: "_blank" },
                            "invalid HTML"
                        ),
                        " to nest an `a` tag inside another `a` tag. If you do this, browsers will render it in unexpected ways."
                    ) : null
                ),
                elemTag === "a" ? linkPanels : null,
                wp.element.createElement(
                    PanelBody,
                    { title: "ID" },
                    wp.element.createElement(PlainText, { onChange: onChangeID, value: elemId, className: "magicblock-plaintext" })
                ),
                wp.element.createElement(
                    PanelBody,
                    { title: "Class(es)" },
                    wp.element.createElement(PlainText, { onChange: onChangeClass, value: elemClass, className: "magicblock-plaintext" })
                ),
                wp.element.createElement(
                    PanelBody,
                    { title: "Inline CSS" },
                    wp.element.createElement(PlainText, { onChange: onChangeInlineStyle, value: inlineSytle, className: "magicblock-plaintext" })
                ),
                wp.element.createElement(
                    PanelBody,
                    { title: "Custom Attributes" },
                    customAttrs && customAttrs.map(function (attr, index) {
                        return wp.element.createElement(
                            "div",
                            { className: "magicblock-custom-attr-pair" },
                            wp.element.createElement(
                                "div",
                                null,
                                wp.element.createElement(
                                    "div",
                                    { className: "magicblock-custom-attr-label" },
                                    "Name"
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "magicblock-custom-attr-key-field" },
                                    wp.element.createElement(PlainText, { onChange: function onChange(newKey) {
                                            return setKeyForCustomAttrs(index, newKey);
                                        }, value: attr.key, className: "magicblock-plaintext" })
                                )
                            ),
                            wp.element.createElement(
                                "div",
                                null,
                                wp.element.createElement(
                                    "div",
                                    { className: "magicblock-custom-attr-label" },
                                    "Value"
                                ),
                                wp.element.createElement(PlainText, { onChange: function onChange(newValue) {
                                        return setValueForCustomAttrs(index, newValue);
                                    }, value: attr.value, className: "magicblock-plaintext" })
                            ),
                            wp.element.createElement(
                                Button,
                                { isSmall: true, onClick: function onClick() {
                                        return deleteCustomAttr(index);
                                    } },
                                "Delete"
                            )
                        );
                    }),
                    wp.element.createElement(
                        "div",
                        { "class": "magic-block-right-align" },
                        wp.element.createElement(
                            Button,
                            { isSmall: true, onClick: addNewCustomAttr },
                            "New Attribute"
                        )
                    )
                )
            ),
            wp.element.createElement(
                "div",
                { className: "magicblock-editor" },
                wp.element.createElement(
                    "div",
                    { className: "magicblock-label" },
                    wp.element.createElement(
                        "span",
                        { className: "magicblock-attr-span" },
                        elemTag || "div"
                    ),
                    elemId && wp.element.createElement(
                        "span",
                        { className: "magicblock-id-span" },
                        "#",
                        elemId
                    ),
                    elemClass && wp.element.createElement(
                        "span",
                        { className: "magicblock-class-span" },
                        ".",
                        convertClassString(elemClass)
                    )
                ),
                wp.element.createElement(InnerBlocks, null)
            )
        );
    },
    save: function save(props) {
        var _props$attributes2 = props.attributes,
            inlineStyle = _props$attributes2.inlineStyle,
            elemId = _props$attributes2.elemId,
            elemClass = _props$attributes2.elemClass,
            newTab = _props$attributes2.newTab,
            customAttrs = _props$attributes2.customAttrs;

        var ElemTag = props.attributes.elemTag || "div";
        var href = props.attributes.href || "";

        var aProps = {};
        if (ElemTag === "a" && href) {
            aProps.href = href;
            if (newTab) {
                aProps.target = "_blank";
                aProps.rel = "noopener noreferrer";
            }
        }

        var preparedCustomAttrs = {};
        if (customAttrs) {
            customAttrs.forEach(function (pair) {
                if (pair.key.length > 0) {
                    preparedCustomAttrs[pair.key.replace(/"  *"|^-|^_|^[0-9]|[^\w-]/g, '')] = pair.value.replace(/"/, '');
                }
            });
        }

        return wp.element.createElement(
            ElemTag,
            _extends({
                className: elemClass,
                style: inlineStyle,
                id: elemId
            }, aProps, preparedCustomAttrs),
            wp.element.createElement(InnerBlocks.Content, null)
        );
    }
});

/***/ })
/******/ ]);