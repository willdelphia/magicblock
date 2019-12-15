console.log('magicblock is up and running');

const { registerBlockType } = wp.blocks;
const { InspectorControls, InnerBlocks, PlainText} = wp.editor;
const { Fragment } = wp.element;
const { PanelBody, SelectControl, CheckboxControl, Button} = wp.components;

const icon = () => {
   return (<svg width="20" height="20" viewBox="0 0 20 20">
                <path d="M7.17,11.29m7.51-3.44,3.82,2.28-3.82,2.31v1.65L20,11V9.31L14.68,6.19ZM5.32,12.42,1.5,10.14,5.32,7.83V6.19L0,9.31V11l5.32,3.13Zm3.52-2.28L6.55,14.59H8.42l1.44-3,1.7,3h1.89L11,10.11l2.44-4.43H11.47L10.07,8.5,8.5,5.68H6.6Z"></path>
           </svg>);
};

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
            selector: '.wp-block-magicblock-magicblock',
            attribute: 'style',
        }, 
        href: {
            type: 'string',
            source: 'attribute',
            selector: '.wp-block-magicblock-magicblock',
            attribute: 'href',
        },
        dataAttrs: {
            type: 'array'
        },
        newTab: {
            type: 'boolean'
        },
        elemId: {
            type: 'string',
            source: 'attribute',
            selector: '.wp-block-magicblock-magicblock',
            attribute: 'id',
        }, 
        elemClass: {
            type: 'string'
        },
        elemTag: {
            type: 'string'
        }
    },

    edit:  props => {
        let inlineSytle = props.attributes.inlineStyle,
            elemTag = props.attributes.elemTag,
            elemId = props.attributes.elemId,
            elemClass = props.attributes.elemClass,
            href = props.attributes.href,
            newTab = props.attributes.newTab, 
            dataAttrs = props.attributes.dataAttrs;


        function convertClassString ( input ) {
            return  input.replace(/\s+$/g, '').replace(/[ ]+/g, ".");
        }

        function onChangeElem ( newElem ) {
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

        function onChangeHref ( newHref ) {
            props.setAttributes( { href: newHref } );
        }

        function onChangeNewTab ( newNewTab ) {
            props.setAttributes( { newTab: newNewTab } );
        }

        function addNewDataAttr () {
            let newDataAttrArray;
            if(dataAttrs){
                newDataAttrArray = [...dataAttrs];
                newDataAttrArray.push({
                    key: '',
                    value: ''
                });
            }
            else {
                newDataAttrArray = [{
                    key: '',
                    value: ''
                }];
            }
            props.setAttributes({dataAttrs: newDataAttrArray});
        }

        function deleteDataAttr (index) {
            const newDataAttrArray = [...dataAttrs];
            newDataAttrArray.splice(index, 1);
            props.setAttributes({dataAttrs: newDataAttrArray});
        }

        function setKeyForDataAttrs ( index, newKey ) {
            const newDataAttrArray = [...dataAttrs];
            newDataAttrArray[index].key = newKey.replace(/[^\w-]/, '');
            props.setAttributes({dataAttrs: newDataAttrArray});
        }

        function setValueForDataAttrs ( index, newValue,  ) {
            const newDataAttrArray = [...dataAttrs];
            newDataAttrArray[index].value = newValue.replace(/"/, '');
            props.setAttributes({dataAttrs: newDataAttrArray});
        }
  

        const linkPanels = (
            <PanelBody title="Href">
                <PlainText onChange={onChangeHref} value={href} className="magicblock-plaintext"/>
                <div className="magicblock-flex magicblock-newtab"> 
                    <CheckboxControl 
                        label="Open in new tab"
                        checked={newTab}
                        onChange={onChangeNewTab}
                        /> 
                </div>
            </PanelBody>
        );

        return  (
            <Fragment>
                <InspectorControls>
                     <PanelBody title="Element Type">
                        <SelectControl value={elemTag} onChange={onChangeElem} options={[ 
                                    { label: "div", value: "div"},
                                    { label: "section", value: 'section'},
                                    { label: "main", value: 'main'},
                                    { label: "aside", value: 'aside'},
                                    { label: "article", value: 'article'},
                                    { label: "header", value: 'header'},
                                    { label: "footer", value: 'footer'},
                                    { label: "nav", value: 'nav'},
                                    { label: "dl", value: 'dl'},
                                    { label: "dd", value: 'dd'},
                                    { label: "dt", value: 'dt'},
                                    { label: "a", value: "a"}
                                     ]} 
                                     /> 
                        {  elemTag === "a" ? (<div>
                                                <strong>Please note:</strong> it is <a href="https://www.w3.org/TR/html5/text-level-semantics.html#the-a-element" target="_blank">invalid HTML</a> to nest an `a` tag inside another `a` tag. If you do this, browsers will render it in unexpected ways. 
                                            </div>) : null }

                     </PanelBody>
                     {  elemTag === "a" ? linkPanels : null }
                     <PanelBody title="ID">
                        <PlainText onChange={onChangeID} value={elemId} className="magicblock-plaintext"/>
                     </PanelBody>
                     <PanelBody title="Class(es)">
                        <PlainText onChange={onChangeClass} value={elemClass} className="magicblock-plaintext"/>
                     </PanelBody>
                     <PanelBody title="Inline CSS">
                        <PlainText onChange={onChangeInlineStyle} value={inlineSytle} className="magicblock-plaintext"/>
                     </PanelBody>
                     <PanelBody title="Custom Data Attributes">
                         {dataAttrs && dataAttrs.map((attr, index) => (
                             <div className="magicblock-data-attr-pair">
                                <div>
                                     <div className="magicblock-data-attr-label">Key</div>
                                     <div className="magicblock-data-attr-key-field">
                                         <div className="magicblock-data-attr-key-field-prefix">data-</div>
                                         <PlainText onChange={newKey => setKeyForDataAttrs(index, newKey)} value={attr.key} className="magicblock-plaintext"/>
                                     </div>
                                </div>
                                <div>
                                    <div className="magicblock-data-attr-label">Value</div>
                                    <PlainText onChange={newValue => setValueForDataAttrs(index, newValue)} value={attr.value} className="magicblock-plaintext"/>
                                </div>
                                <Button isSmall={true} onClick={() => deleteDataAttr(index)}>Delete</Button>
                             </div>
                         ))}
                        <div class="magic-block-right-align"><Button isSmall={true} onClick={addNewDataAttr}>New Attribute</Button></div>
                     </PanelBody>
                </InspectorControls>
                <div className="magicblock-editor">
                   <div className="magicblock-label">
                        <span className="magicblock-attr-span">{elemTag || "div"}</span>
                        { elemId && <span className="magicblock-id-span">#{elemId}</span> }
                        { elemClass && <span className="magicblock-class-span">.{convertClassString(elemClass)}</span> }
                   </div>
                   <InnerBlocks />
                </div>
            </Fragment>
        );
    },
    save: props => {
        let inlineSytle = props.attributes.inlineStyle,
        elemId = props.attributes.elemId, 
        elemClass = props.attributes.elemClass,
        ElemTag = props.attributes.elemTag || "div", 
        href = props.attributes.href || "", 
        newTab = props.attributes.newTab,
        dataAttrs = props.attributes.dataAttrs;       

        const aProps = {};
        if(ElemTag === "a" && href){
            aProps.href = href;
            if(newTab) {
                aProps.target = "_blank";
                aProps.rel = "noopener noreferrer";
            }
        }

        const preparedDataAttrs = {};
        if(dataAttrs){
            dataAttrs.forEach(pair => {
                if(pair.key.length > 0){
                    preparedDataAttrs['data-' + pair.key] = pair.value;
                }
            })
        }
     
        
       

        return (<ElemTag
                className={elemClass} 
                style={inlineSytle} 
                id={elemId}
                {...aProps}
                {...preparedDataAttrs}
                >
                    <InnerBlocks.Content/>
                </ElemTag>);
         }
    }
); 
