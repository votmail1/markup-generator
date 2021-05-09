import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import SyntaxHighlighter from "react-syntax-highlighter"
import {a11yLight} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import {
    gridGenItems,
    gridGenRows,
    gridGenCols,
    gridGenCss,
    gridGenCollapse,
    gridGenHtml,
    gridGenContainers,
} from '../../store/actions/gridGenActions'

const GridSideBar = () => {
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
        rows,
        cols,
        collapse,
        html,
        css
    } = useSelector(state => state.gridGen)
    const qContainers = (val) => {
        let quantity = [1]
        let qItems = {}, col = {}, qRows = {}, qCols = {}
        if (val > 0) {
            for (let i = 0; i < val; i++) {
                quantity[i] = i
                collapse[i] ? col[i] = collapse[i] : col[i] = ' stretch'
                items[i] ? qItems[i] = items[i] : qItems[i] = {[i]: [1]}
                rows[i] ? qRows[i] = rows[i] : qRows[i] = {frame : '1fr', val: 1}
                rows[i] ? qCols[i] = cols[i] : qCols[i] = {frame : '1fr', val: 1}
            }
            dispatch(gridGenCollapse(col))
            dispatch(gridGenRows(qRows))
            dispatch(gridGenCols(qCols))
            dispatch(gridGenItems(qItems))
            dispatch(gridGenContainers(quantity))
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
        val > 0 && dispatch(gridGenItems(obj))
    }
    const qColsRows = (indx, val = 1, obj, action) => {
        let str = []
        for (let i = 0; i < val; i++) {
            str += ' 1fr'
        }
        obj[indx].frame = str
        obj[indx].val = val
        console.log(rows)
        val > 0 && dispatch(action(obj))
    }

    const getCode = () => {
        let html = ''
        for (let i = 0; i < containersQuantity.length; i++) {
            let col = ''
            for (let j = 0; j < (items[i] ? items[i].length : 1); j++) {
                col +=
                    `    <div class='item-${+j + 1}'>\n` +
                    `        item-${+j + 1}\n` +
                    `    </div>\n`
            }
            html += `<div class='container-${i + 1}'>\n` +
                `   container-${+i + 1}\n` +
                col +
                `</div>`
            if (i !== containersQuantity.length - 1) html += "\n"
        }
        dispatch(gridGenHtml(html))
        let style = ''
        for (let i = 0; i < containersQuantity.length; i++) {
            style +=
                `.container-${i + 1} {\n` +
                `   display : grid;\n` +
                `}\n`
        }
        dispatch(gridGenCss(style))
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
        rows,
        cols,
        collapse,
        html,
        css,
        dispatch,
        items,
        rows.change
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
                            <label className="form-label">Quantity Of Rows</label>
                            <input
                                type="number"
                                className="form-control mb-2"
                                defaultValue={rows[i] ? rows[i].val : 1}
                                onInput={(e) => qColsRows(i, e.target.value, rows, gridGenRows)}
                            >
                            </input>
                            <label className="form-label">Quantity Of Colums</label>
                            <input
                                type="number"
                                className="form-control mb-2"
                                defaultValue={cols[i] ? cols[i].val : 1}
                                onInput={(e) => qColsRows(i, e.target.value, cols, gridGenCols)}
                            >
                            </input>
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
export default GridSideBar

