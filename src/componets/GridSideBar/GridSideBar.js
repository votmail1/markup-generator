import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import SyntaxHighlighter from "react-syntax-highlighter"
import {a11yLight} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import {
    gridGenSections,
    gridGenRows,
    gridGenCols,
    gridGenCss,
    gridGenHtml,
    gridGenSelectedSectionsClear,
} from '../../store/actions/gridGenActions'
import './GridSideBar.css'

const GridSideBar = () => {
    const dispatch = useDispatch()
    const {
        selectedSection,
        sections,
        rows,
        cols,
        html,
        css
    } = useSelector(state => state.gridGen)

    const qColsRows = (val = 1, obj, action) => {
        let str = ''
        let item = {qArr: []}
        for (let i = 0; i < val; i++) {
            str += ' 1fr'
        }
        obj.fr = str
        obj.val = val
        val > 0 && dispatch(action(obj))
        for (let i = 0; i < (rows.val * cols.val); i++) {
            item.qArr[i] = [i]
        }
        val > 0 && dispatch(gridGenSections(item))
        val > 0 && dispatch(gridGenSelectedSectionsClear({
            qArr: [],
            position: 'absolute',
            0: {
                display: 'hidden',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
            },
            counter: 0
        }))
    }

    const getCode = () => {
        let html = ''
        let item = ''
        for (let i = 0; i < (selectedSection.counter); i++) {
            item +=
                `    <div class='item${+i + 1}'>\n` +
                `        div-${+i + 1}\n` +
                `    </div>\n`
        }
        html += `<div class='container'>\n` +
            item +
            `</div>`
        dispatch(gridGenHtml(html))
        let style = ''
        item = ''
        for (let i = 0; i < (selectedSection.counter); i++) {
            const cell = selectedSection[i].idL.slice(3, selectedSection[i].idL.length)
            const row = Math.ceil(1 / cols.val * (selectedSection[i].idT.slice(3, selectedSection[i].idT.length)))
            item +=
                `.item${+i + 1}{\n` +
                `   grid-area: ` +
                `${row} / ` + // first line
                `${ cell - (row-1)  * cols.val } / ` + // left line
                `${ row + selectedSection[i].rows } / ` + //bottom line
                `${ cell - (row-1)  * cols.val + selectedSection[i].cols } ;\n` + //right line
                `   background-color: aquamarine;\n` +
                `}\n`
        }
        style +=
            `.container{\n` +
            `   display : grid;\n` +
            `   grid-template-rows : repeat(${rows.val}, 1fr);\n` +
            `   grid-template-columns : repeat(${cols.val}, 1fr);\n` +
            `   grid-column-gap: 0px;\n` +
            `   grid-row-gap: 0px;\n` +
            `   width: 100%;\n` +
            `   height: 100%;\n` +
            `}\n` +
            item
        dispatch(gridGenCss(style))
    }

    useEffect(getCode, [
        selectedSection.counter,
        selectedSection,
        rows,
        cols,
        html,
        css,
        dispatch,
        sections,
    ])
    return (
        <aside className='g-aside p-2 bg-secondary text-white'>
            <form>
                <div className='flex-form'>
                    <div className="border border-light p-2 me-2">
                        <label className="form-label">Quantity Of Rows</label>
                        <input
                            type="number"
                            className="form-control mb-2"
                            defaultValue={rows ? rows.val : 2}
                            onInput={(e) => qColsRows(e.target.value, rows, gridGenRows)}
                        >
                        </input>
                        <label className="form-label">Quantity Of Colums</label>
                        <input
                            type="number"
                            className="form-control mb-2"
                            defaultValue={cols ? cols.val : 2}
                            onInput={(e) => qColsRows(e.target.value, cols, gridGenCols)}
                        >
                        </input>
                    </div>
                </div>
            </form>

            {html && (<> HTML
                <div className='bg-light text-dark'>
                    <SyntaxHighlighter language="htmlbars" style={a11yLight}>
                        {html}
                    </SyntaxHighlighter>
                </div>
                CSS - it`s not working yet
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

