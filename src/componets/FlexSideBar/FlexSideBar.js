import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import SyntaxHighlighter from "react-syntax-highlighter"
import {a11yLight} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import {
    flexGenItems,
    flexGenCollapse,
    flexGenCss,
    flexGenHtml,
    flexGenContainers,
    flexGenContainerDirection,
    flexGenContainerWrap,
    flexGenContainerJustifyContent,
    flexGenContainerAlignItems,
    flexGenContainerAlignContent,
    flexGenContainerAlignSelf
} from '../../store/actions/flexGenActions'
import './FlexSideBar.css'
import fd from '../../img/fd.jpeg'
import wrap from '../../img/wrap.jpeg'
import js from '../../img/Justify-Content.png'
import ai from '../../img/Align-Items.jpeg'
import ac from '../../img/Align-Content.jpeg'
import as from '../../img/align-self.png'

const FlexSideBar = () => {
    const dispatch = useDispatch()
    const {
        containersQuantity,
        containersDirection,
        containersWrap,
        containersJC,
        containersAI,
        containersAC,
        containersAS,
        items,
        collapse,
        html,
        css
    } = useSelector(state => state.flexGen)
    const qContainers = (val) => {
        let quantity = [1]
        let direction = {}, wrap = {}, jC = {}, aI = {}, aC = {}, aS = {}, col = {}, qIt = {}
        if (val > 0) {
            for (let i = 0; i < val; i++) {
                quantity[i] = i
                containersDirection[i] ? direction[i] = containersDirection[i] : direction[i] = ' rows'
                containersWrap[i] ? wrap[i] = containersWrap[i] : wrap[i] = ' nowrap'
                containersJC[i] ? jC[i] = containersJC[i] : jC[i] = ' flex-start'
                containersAI[i] ? aI[i] = containersAI[i] : aI[i] = ' stretch'
                containersAC[i] ? aC[i] = containersAC[i] : aC[i] = ' stretch'
                containersAS[i] ? aS[i] = containersAS[i] : aS[i] = ' stretch'
                collapse[i] ? col[i] = collapse[i] : col[i] = true
                items[i] ? qIt[i] = items[i] : qIt[i] = [1]
            }
            dispatch(flexGenCollapse(col))
            dispatch(flexGenItems(qIt))
            dispatch(flexGenContainerDirection(direction))
            dispatch(flexGenContainerWrap(wrap))
            dispatch(flexGenContainerJustifyContent(jC))
            dispatch(flexGenContainerAlignItems(aI))
            dispatch(flexGenContainerAlignContent(aC))
            dispatch(flexGenContainerAlignSelf(aS))
            dispatch(flexGenContainers(quantity))
        }
    }

    const qItems = (indx, val = 1) => {
        let obj = items
        let arr = []
        for (let i = 0; i < val; i++) {
            arr[i] = i + 1
        }
        obj[indx] = arr
        obj.change = items.change + 1
        val > 0 && dispatch(flexGenItems(obj))
    }

    const getCode = () => {
        let html = ''
        for (let i = 0; i < containersQuantity.length; i++) {
            let col = ''
            for (let j = 0; j < (items[i] ? items[i].length : 1); j++) {
                col +=
                    `    <div class='item'>\n` +
                    `        item-${+j + 1}\n` +
                    `    </div>\n`
            }
            html += `<div class='container-${i + 1} ${containersDirection[i]}'>\n` +
                `   container-${+i + 1}\n` +
                col +
                `</div>`
            if (i !== containersQuantity.length - 1) html += "\n"
        }
        dispatch(flexGenHtml(html))
        let style = ''
        for (let i = 0; i < containersQuantity.length; i++) {
            style +=
                `.container-${i + 1} {\n` +
                `   display : flex;\n` +
                `   flex-direction: ${containersDirection[i]};\n` +
                `   flex-wrap: ${containersWrap[i]};\n` +
                `   justify-content: ${containersJC[i]};\n` +
                `   align-items: ${containersAI[i]};\n` +
                `   align-content: ${containersAC[i]};\n` +
                `}\n`
        }
        dispatch(flexGenCss(style))
    }

    const selectDirection = (indx, direction) => {
        dispatch(flexGenContainerDirection({...containersDirection, [indx]: direction}))
    }
    const selectWrap = (indx, Wrap) => {
        dispatch(flexGenContainerWrap({...containersWrap, [indx]: Wrap}))
    }
    const selectJustifyContent = (indx, JC) => {
        dispatch(flexGenContainerJustifyContent({...containersJC, [indx]: JC}))
    }
    const selectAlignItems = (indx, AI) => {
        dispatch(flexGenContainerAlignItems({...containersAI, [indx]: AI}))
    }
    const selectAlignContent = (indx, AC) => {
        dispatch(flexGenContainerAlignContent({...containersAC, [indx]: AC}))
    }
    const selectAlignSelf = (indx, AS) => {
        dispatch(flexGenContainerAlignSelf({...containersAS, [indx]: AS}))
    }
    const collapseHandler = (i) => {
        dispatch(flexGenCollapse({...collapse, [i]: !collapse[i]}))
    }
    useEffect(getCode, [
        containersQuantity.length,
        containersQuantity,
        containersDirection,
        containersWrap,
        containersJC,
        containersAI,
        containersAC,
        containersAS,
        items,
        collapse,
        html,
        css,
        dispatch,
        items.change
    ])

    return (
        <aside className='p-2 bg-secondary text-white'>
            <form>
                <label className="form-label">Quantity Of Containers</label>
                <input
                    type='number'
                    className="form-control mb-2 "
                    defaultValue={containersQuantity.length}
                    onInput={(e) => qContainers(e.target.value)}>
                </input>
                <div className='flex-form'>
                    {containersQuantity.map((k, i) => (
                        <div className="border border-light p-2 me-2" key={k}>
                            Container-{i + 1}<br/>
                            <label className="form-label">Quantity Of Items</label>
                            <input
                                type="number"
                                className="form-control mb-2"
                                defaultValue={items[i] ? items[i].length : 1}
                                onInput={(e) => qItems(i, e.target.value)}
                            >
                            </input>
                            <div className="d-flex justify-content-end" onClick={() => collapseHandler(i)}>
                                <button className="btn btn-secondary btn-sm " type="button">
                                    <strong>Properties {collapse[i] ? '+' : '-'}</strong>
                                </button>
                            </div>
                            <div id={"properties" + (i + 1)} className={collapse[i] ? 'hidden' : 'shown'}>
                                <label className="form-label">
                                    Direction <img src={fd} alt=''
                                                   onMouseDown={(e) => e.target.style =
                                                       'width:800px; height: auto; position:absolute; top: 20%;'}
                                                   onMouseUp={(e) => e.target.style = ''}
                                />
                                </label>
                                <select className="select w-100 p-2 rounded" aria-label="Default select example"
                                        onChange={e => selectDirection(i, e.target.value)} name="direction">
                                    <option value=" rows">rows</option>
                                    <option value=" row-reverse">row-reverse</option>
                                    <option value=" column">column</option>
                                    <option value=" column-reverse">column-reverse</option>
                                </select>
                                <label className=" form-label">
                                    Wrap <img src={wrap} alt=''
                                              onMouseDown={(e) => e.target.style =
                                                  'width:800px; height: auto; position:absolute; top: 20%;'}
                                              onMouseUp={(e) => e.target.style = ''}
                                />
                                </label>
                                <select className=" select w-100 p-2 rounded" aria-label="Default select example"
                                        onChange={e => selectWrap(i, e.target.value)} name='wrap'>
                                    <option value=" nowrap">nowrap</option>
                                    <option value=" wrap">wrap</option>
                                    <option value=" wrap-reverse">wrap-reverse</option>
                                </select>
                                <label className=" form-label">
                                    Justify-Content <img src={js} alt=''
                                                         onMouseDown={(e) => e.target.style =
                                                             'width:800px; height: auto; position:absolute; top: 20%;'}
                                                         onMouseUp={(e) => e.target.style = ''}
                                />
                                </label>
                                <select className=" select w-100 p-2 rounded" aria-label="Default select example"
                                        onChange={e => selectJustifyContent(i, e.target.value)} name='justify-content'>
                                    <option value=" jc-flex-start">flex-start</option>
                                    <option value=" jc-flex-end">flex-end</option>
                                    <option value=" jc-center ">center</option>
                                    <option value=" jc-space-between">space-between</option>
                                    <option value=" jc-space-around">space-around</option>
                                    <option value=" jc-space-evenly">space-evenly</option>
                                </select>
                                <label className="form-label">
                                    Align-Items <img src={ai} alt=''
                                                     onMouseDown={(e) => e.target.style =
                                                         'width:800px; height: auto; position:absolute; top: 20%;'}
                                                     onMouseUp={(e) => e.target.style = ''}
                                />
                                </label>
                                <select className="select w-100 p-2 rounded" aria-label="Default select example"
                                        onChange={e => selectAlignItems(i, e.target.value)} name='align-items'>
                                    <option value=" ai-stretch">stretch</option>
                                    <option value=" ai-flex-start">flex-start</option>
                                    <option value=" ai-flex-end">flex-end</option>
                                    <option value=" ai-center ">center</option>
                                    <option value=" ai-baseline">baseline</option>
                                </select>
                                <label className="form-label">
                                    Align-Content <img src={ac} alt=''
                                                       onMouseDown={(e) => e.target.style =
                                                           'width:800px; height: auto; position:absolute; top: 20%;'}
                                                       onMouseUp={(e) => e.target.style = ''}
                                />
                                </label>
                                <select className="select w-100 p-2 rounded" aria-label="Default select example"
                                        onChange={e => selectAlignContent(i, e.target.value)} name='align-items'>
                                    <option value=" ac-stretch">stretch</option>
                                    <option value=" ac-flex-end">flex-end</option>
                                    <option value=" ac-center">center</option>
                                    <option value=" ac-space-between">space-between</option>
                                    <option value=" ac-space-around">space-around</option>
                                    <option value=" ac-flex-start">flex-start</option>
                                </select>
                                <label className="form-label">
                                    Align-Self <img src={as} alt=''
                                                    onMouseDown={(e) => e.target.style =
                                                        'width:800px; height: auto; position:absolute; top: 20%;'}
                                                    onMouseUp={(e) => e.target.style = ''}
                                />
                                </label>
                                <select className="select w-100 p-2 rounded" aria-label="Default select example"
                                        onChange={e => selectAlignSelf(i, e.target.value)} name='align-items'>
                                    <option value=" as-stretch">stretch</option>
                                    <option value=" as-auto ">auto</option>
                                    <option value=" as-flex-start">flex-start</option>
                                    <option value=" as-flex-end">flex-end</option>
                                    <option value=" as-center">center</option>
                                    <option value=" as-baseline">baseline</option>
                                </select>
                            </div>
                        </div>))
                    }
                </div>
            </form>

            {html && (<> HTML
                <div className='bg-light text-dark'>
                    <SyntaxHighlighter language="htmlbars" style={a11yLight}>
                        {html}
                    </SyntaxHighlighter>
                </div>
                CSS
                <div className='bg-light text-dark'>
                    <SyntaxHighlighter language="css" style={a11yLight}>
                        {css}
                    </SyntaxHighlighter>
                </div></>)
            }
        </aside>
    )
}
export default FlexSideBar

