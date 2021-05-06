import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import SyntaxHighlighter from "react-syntax-highlighter";
import {a11yLight} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {flexGenCols, flexGenCss, flexGenHtml, flexGenRows} from '../store/actions/flexGenActions'

const FlexSideBar = () => {
    const dispatch = useDispatch()
    const {rows, cols, html, css} = useSelector(state => state.flexGen)
    const qRow = (val) => {
        let arr = []
        for (let i = 0; i < val; i++) {
            arr[i] = i
        }
        val > 0 && dispatch(flexGenRows(arr))
        val > 0 && qCol(1, arr.length - 1)
    }
    const qCol = (val, ind) => {
        let obj = cols
        let arr = []
        for (let i = 0; i < val; i++) {
            arr[i] = i
        }
        obj[ind] = arr
        val > 0 && dispatch(flexGenCols(obj))
    }

    const getCode = (evt) => {
        evt.preventDefault()
        let html = ''
        for (let i = 0; i < rows.length; i++) {
            let col = ''
            for (let j = 0; j < cols[i].length; j++) {
                col +=
                    "    <div class='col'>\n" +
                    "        col-" + (+j + 1) + "\n" +
                    "    </div>\n"
            }
            html += "<div class='el-" + (+i + 1) + " row'>\n" +
                "   row-1\n" +
                col +
                "</div>"
            if (i!==rows.length-1) html += "\n"
        }
        dispatch(flexGenHtml(html))
        const style =
            ".container {\n" +
            "   display : flex;\n" +
            "}\n" +
            ".row {\n" +
            "   flex-direction: row;\n" +
            "}" +
            ".col {\n" +
            "   flex-direction: column;\n" +
            "}"
        dispatch(flexGenCss(style))
    }
    return (
        <aside className='p-2 bg-secondary text-white'>
            <form>
                <label className="form-label">quantity of rows</label>
                <input
                    type='number'
                    className="form-control mb-2 "
                    defaultValue={1}
                    onInput={(e) => qRow(e.target.value)}>
                </input>
                {rows.map((k, i) => (
                    <div key={k}>
                        <label className="form-label">quantity of columns in row-{i + 1}</label>
                        <input
                            type="number"
                            className="form-control"
                            defaultValue={1}
                            onInput={(e) => qCol(e.target.value, i)}
                        >
                        </input>
                    </div>))}
                <button type="button" className="btn btn-light mt-2" onClick={(e) => getCode(e)}>Get Code</button>
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

