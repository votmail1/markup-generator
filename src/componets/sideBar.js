import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { flexGenCols, flexGenRows } from '../store/actions/flexGenActions'

const SideBar = () => {
    const dispatch = useDispatch()
    const {rows, cols, html, css} = useSelector(state => state.flexGen)
    const qRow = (val) => {
        let arr = []
        for (let i = 0; i < val; i++) {
            arr[i] = i
        }
        val > 0 && dispatch(flexGenRows(arr))
        val > 0 && qCol(1,arr.length-1)
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
        console.log(html)
    }

    return (
        <aside className='p-2'>
            <form >
                <label className="form-label">quantity of rows</label>
                <input
                    type='number'
                    className="form-control mb-2"
                    defaultValue={1}
                    onInput={(e) => qRow(e.target.value)}>
                </input>
                {rows.map((k, i) => (
                    <div key={k}>
                        <label className="form-label">quantity of columns in {i + 1} row </label>
                        <input
                            type="number"
                            className="form-control"
                            defaultValue={cols[i]}
                            onInput={(e) => qCol(e.target.value, i)}
                        >
                        </input>
                    </div>))}
                    <button onClick={(e)=>getCode(e)}>Get Code</button>
            </form>
        </aside>
    )
}
export default SideBar