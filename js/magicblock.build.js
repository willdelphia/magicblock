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

console.log('magicblock is up and running');

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks,
    PlainText = _wp$editor.PlainText;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl;


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
        var inlineSytle = props.attributes.inlineStyle,
            elemTag = props.attributes.elemTag,
            elemId = props.attributes.elemId,
            elemClass = props.attributes.elemClass;

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

        return wp.element.createElement(
            Fragment,
            null,
            wp.element.createElement(
                InspectorControls,
                null,
                wp.element.createElement(
                    PanelBody,
                    { title: "Element Type" },
                    wp.element.createElement(SelectControl, { label: "Tag", value: elemTag, onChange: onChangeElem, options: [{ label: "Div", value: "div" }, { label: "Section", value: 'section' }, { label: "Main", value: 'main' }, { label: "Aside", value: 'aside' }, { label: "Article", value: 'article' }, { label: "Header", value: 'header' }, { label: "Footer", value: 'footer' }, { label: "Nav", value: 'nav' }]
                    })
                ),
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
        var inlineSytle = props.attributes.inlineStyle,
            elemId = props.attributes.elemId,
            elemClass = props.attributes.elemClass,
            ElemTag = props.attributes.elemTag || "div";

        return wp.element.createElement(
            ElemTag,
            {
                className: elemClass,
                style: inlineSytle,
                id: elemId },
            wp.element.createElement(InnerBlocks.Content, null)
        );
    }
});

/***/ })
/******/ ]);