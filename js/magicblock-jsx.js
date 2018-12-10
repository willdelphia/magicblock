console.log('magicblock is up and running');

const { registerBlockType } = wp.blocks;
const { InspectorControls, InnerBlocks, PlainText} = wp.editor;
const { Fragment } = wp.element;
const { PanelBody, SelectControl } = wp.components;

const icon= el("svg", { width: 20, height: 20, viewBox: '0 0 20 20'  },
        el("path", { d: "M7.17,11.29m7.51-3.44,3.82,2.28-3.82,2.31v1.65L20,11V9.31L14.68,6.19ZM5.32,12.42,1.5,10.14,5.32,7.83V6.19L0,9.31V11l5.32,3.13Zm3.52-2.28L6.55,14.59H8.42l1.44-3,1.7,3h1.89L11,10.11l2.44-4.43H11.47L10.07,8.5,8.5,5.68H6.6Z"})
    );

registerBlockType( 'magicblock/magicblock', {
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
            selector: '.magicblock-magicblock',
            attribute: 'style',
        }, 
        elemId: {
            type: 'string',
            source: 'attribute',
            selector: '.magicblock-magicblock',
            attribute: 'id',
        }, 
        elemClass: {
            type: 'string'
        },
        elemTag: {
            type: 'string'
        }
    },

    edit: function( props ) {
         var inlineSytle = props.attributes.inlineStyle,
                elemTag = props.attributes.elemTag,
                elemId = props.attributes.elemId,
                elemClass = props.attributes.elemClass;

        function convertClassString(input) {
            return  "." + input.replace(/\s+$/g, '').replace(/[ ]+/g, ".");
        }
    
        function onChangeElem( newElem ) {
            props.setAttributes( { elemTag: newElem } );
        }

        function onChangeInlineStyle ( newInlineStyle ) {
            props.setAttributes( { inlineStyle: newInlineStyle } );
        }

        function onChangeID ( newID ) {
            props.setAttributes( { elemId: newID } );
        }

        function onChangeClass ( newClass ) {
            props.setAttributes( { elemClass: newClass } );
        }

        return  el(Fragment, null, 
                    el(InspectorControls, null,
                        el(Fragment, null, 
                            el(PanelBody, {title: "Element Type",}, 
                            el(SelectControl, {
                                label: "Tag",
                                value: elemTag,
                                options: [ 
                                    { label: "Div", value: "div"},
                                    { label: "Section", value: 'section'},
                                    { label: "Main", value: 'main'},
                                    { label: "Aside", value: 'aside'},
                                    { label: "Article", value: 'article'},
                                    { label: "Header", value: 'header'},
                                    { label: "Footer", value: 'footer'},
                                    { label: "Nav", value: 'nav'}

                                ], 
                                onChange: onChangeElem,
                            })
                        ),
                            el(PanelBody, {title: "ID"},
                                el(PlainText, {                        
                                    onChange: onChangeID,
                                    value: elemId,
                                    className: "magicblock-plaintext"
                                }
                            )
                        ),
                        el(PanelBody, {title: "Class(es)"},
                            el(PlainText, {                        
                                    onChange: onChangeClass,
                                    value: elemClass,
                                    className: "magicblock-plaintext"
                                }
                            )
                        ),
                        el(PanelBody, {title: "Inline CSS"},
                                el(PlainText,   {                        
                                    onChange: onChangeInlineStyle,
                                    value: inlineSytle,
                                    className: "magicblock-plaintext"
                                }
                            )
                        )
                    )
                    ),
                    el("div", {className: "magicblock-editor"}, 
                        el(Fragment, null, 
                            el("div", {className: "magicblock-label"}, 
                                el(Fragment, null, 
                                    el('span', {className: 'magicblock-attr-span'}, (elemTag || "div")), 
                                    (elemId ?  el('span', {className: 'magicblock-id-span'}, "#" + elemId) : null ) ,
                                    (elemClass ?  el('span', {className: 'magicblock-class-span'}, convertClassString(elemClass)) : null ) ,
                                ) 
                            ),
                            el(InnerBlocks, null)
                        )
                    )
                )
    },
    save: props => {
        let inlineSytle = props.attributes.inlineStyle,
        elemTag = props.attributes.elemTag || "div",
        elemId = props.attributes.elemId, 
        elemClass = props.attributes.elemClass;

        return (<elemTag 
                className={"magicblock-magicblock" + (elemClass ? " " + elemClass : "")} 
                style={inlineSytle} 
                id={elemId}>
                    <InnerBlocks.Content/>
                </elemTag>);
        
        
         }
    }
); 