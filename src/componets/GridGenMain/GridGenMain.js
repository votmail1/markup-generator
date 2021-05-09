import React from 'react'
import {useSelector} from 'react-redux'
import './GridGenMain.css'

const GridGenMain = () => {
    const {
        containersQuantity,
        items,
        rows,
        cols
    } = useSelector(state => state.gridGen)
    const container = (
        Object.values(containersQuantity).map((cont, i) => (
            <div
                className={`container bg-dark text-white border border-secondary rounded-1 p-2 m-9`}
                key={cont}>
                Container-{i + 1}
                <div className='container' style={{
                    gridTemplateRows: rows[i].frame,
                    gridTemplateColumns: cols[i].frame
                }}>
                    {Object.values(items[i]).map((row, i) => (
                        <div className={`item m-1 bg-secondary border border-secondary rounded-1`} key={row + i}>
                            Item-{i + 1}
                        </div>))}
                </div>
            </div>
        )))
    return (
        <article className='pt-3 w-100'>
            {container}
        </article>
    )
}
export default GridGenMain
