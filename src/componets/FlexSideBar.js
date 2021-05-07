import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import SyntaxHighlighter from "react-syntax-highlighter";
import {a11yLight} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
    flexGenItems,
    flexGenCss,
    flexGenHtml,
    flexGenContainers,
    flexGenContainerDirection,
    flexGenContainerWrap,
    flexGenContainerJustifyContent,
    flexGenContainerAlignItems,
    flexGenContainerAlignContent,
    flexGenContainerAlignSelf
} from '../store/actions/flexGenActions'

const FlexSideBar = () => {
    const [collapse, setCollapse] = useState({0: true});
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
        html,
        css
    } = useSelector(state => state.flexGen)
    const qContainers = (val) => {
        let arr = []
        for (let i = 0; i < val; i++) {
            arr[i] = i
        }
        if (val > 0) {
            dispatch(flexGenContainers(arr))
            selectDirection(arr.length - 1, ' rows')
            selectWrap(arr.length - 1, ' nowrap')
            selectJustifyContent(arr.length - 1, ' flex-start')
            selectAlignItems(arr.length - 1, ' stretch')
            selectAlignContent(arr.length - 1, ' stretch')
            selectAlignSelf(arr.length - 1, ' stretch')
            setCollapse({...collapse, [arr.length - 1]: true})
            qItems(arr.length - 1, items[arr.length - 1] ? items[arr.length - 1].length : 1)
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
            for (let j = 0; j < items[i].length; j++) {
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
        const obj = {...containersDirection, [indx]: direction}
        dispatch(flexGenContainerDirection(obj))
    }
    const selectWrap = (indx, Wrap) => {
        const obj = {...containersWrap, [indx]: Wrap}
        dispatch(flexGenContainerWrap(obj))
    }
    const selectJustifyContent = (indx, JC) => {
        const obj = {...containersJC, [indx]: JC}
        dispatch(flexGenContainerJustifyContent(obj))
    }
    const selectAlignItems = (indx, AI) => {
        const obj = {...containersAI, [indx]: AI}
        dispatch(flexGenContainerAlignItems(obj))
    }
    const selectAlignContent = (indx, AC) => {
        const obj = {...containersAC, [indx]: AC}
        dispatch(flexGenContainerAlignContent(obj))
    }
    const selectAlignSelf = (indx, AS) => {
        const obj = {...containersAS, [indx]: AS}
        dispatch(flexGenContainerAlignSelf(obj))
    }

    const collapseHandler = (i) => {
        setCollapse({...collapse, [i]: !collapse[i]})
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
                    defaultValue={1}
                    onInput={(e) => qContainers(e.target.value)}>
                </input>
                {containersQuantity.map((k, i) => (
                    <div className="border border-dark p-2" key={k}>
                        Container-{i + 1}<br/>
                        <label className="form-label">Quantity Of Items</label>
                        <input
                            type="number"
                            className="form-control mb-2"
                            defaultValue={items[i].length}
                            onInput={(e) => qItems(i, e.target.value)}
                        >
                        </input>
                            <button className="btn btn-dark" type="button" onClick={() => collapseHandler(i)}>
                                Flex Properties
                            </button>
                        <div id={"properties" + (i + 1)} className={collapse[i] ? 'hidden' : 'shown'}>
                            <label className="form-label">Direction</label>
                            <select className="select w-100 p-2 rounded" aria-label="Default select example"
                                    onChange={e => selectDirection(i, e.target.value)} name="direction">
                                <option value=" rows">rows</option>
                                <option value=" row-reverse">row-reverse</option>
                                <option value=" column">column</option>
                                <option value=" column-reverse">column-reverse</option>
                            </select>
                            <label className=" form-label">Wrap</label>
                            <select className=" select w-100 p-2 rounded" aria-label="Default select example"
                                    onChange={e => selectWrap(i, e.target.value)} name='wrap'>
                                <option value=" nowrap">nowrap</option>
                                <option value=" wrap">wrap</option>
                                <option value=" wrap-reverse">wrap-reverse</option>
                            </select>
                            <label className=" form-label">Justify-Content</label>
                            <select className=" select w-100 p-2 rounded" aria-label="Default select example"
                                    onChange={e => selectJustifyContent(i, e.target.value)} name='justify-content'>
                                <option value=" jc-flex-start">flex-start</option>
                                <option value=" jc-flex-end">flex-end</option>
                                <option value=" jc-center ">center</option>
                                <option value=" jc-space-between">space-between</option>
                                <option value=" jc-space-around">space-around</option>
                                <option value=" jc-space-evenly">space-evenly</option>
                            </select>
                            <label className="form-label">Align-Items</label>
                            <select className="select w-100 p-2 rounded" aria-label="Default select example"
                                    onChange={e => selectAlignItems(i, e.target.value)} name='align-items'>
                                <option value=" ai-stretch">stretch</option>
                                <option value=" ai-flex-start">flex-start</option>
                                <option value=" ai-flex-end">flex-end</option>
                                <option value=" ai-center ">center</option>
                                <option value=" ai-baseline">baseline</option>
                            </select>
                            <label className="form-label">Align-Content</label>
                            <select className="select w-100 p-2 rounded" aria-label="Default select example"
                                    onChange={e => selectAlignContent(i, e.target.value)} name='align-items'>
                                <option value=" ac-stretch">stretch</option>
                                <option value=" ac-flex-end">flex-end</option>
                                <option value=" ac-center">center</option>
                                <option value=" ac-space-between">space-between</option>
                                <option value=" ac-space-around">space-around</option>
                                <option value=" ac-flex-start">flex-start</option>
                            </select>
                            <label className="form-label">Align-Self</label>
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

