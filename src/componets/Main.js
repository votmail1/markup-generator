import React from 'react'
import { useSelector} from 'react-redux'


const Main = () => {
    const { rows, cols } = useSelector(state => state.flexGen)


    const row = (Object.values(rows).map((row, i) => (
        <div className={`el${row} row bg-dark text-white border border-secondary rounded-1 p-2`} key={row}>
            row-{i + 1}
            {Object.values(cols[i]).map((col, i) => (
                <div className={`col m-1 bg-secondary border border-secondary rounded-1`} key={col}>
                    col-{i+1}
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
