import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { flexGenCols, flexGenRows } from '../store/actions/flexGenActions'


const Main = () => {
    const { rows, cols } = useSelector(state => state.flexGen)


    const row = (Object.values(rows).map((row, i) => (
        <div className={`el${row} row bg-info border border-primary rounded-1`} key={row}>
            row-{i + 1}
            {Object.values(cols[i]).map((col, i) => (
                <div className={`col m-1 bg-warning border border-secondary rounded-1`} key={col}>
                    col-{col + 1}
                </div>))}
        </div>
    )))
    return (
        <main className='p-5'>
            main
            {row}
        </main>
    )
}
export default Main