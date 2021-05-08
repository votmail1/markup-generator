import React from 'react'
import {useSelector} from 'react-redux'

const FlexGenMain = () => {
    const {
        containersDirection,
        containersQuantity,
        containersWrap,
        containersJC,
        containersAI,
        containersAC,
        containersAS,
        items
    } = useSelector(state => state.flexGen)
    const container = (Object.values(containersQuantity).map((cont, i) => (
        <div
            className={`container${
                containersDirection[i] +
                containersWrap[i] +
                containersJC[i] +
                containersAI[i] +
                containersAC[i] +
                containersAS[i]
            } bg-dark text-white border border-secondary rounded-1 p-2`}
            key={cont}>
            Container-{i + 1}
            {Object.values(items[i]).map((col, i) => (
                <div className={`item m-1 bg-secondary border border-secondary rounded-1`} key={col}>
                    Item-{i + 1}
                </div>))}
        </div>
    )))
    return (
        <div className='pt-3 w-100'>
            {container}
        </div>
    )
}
export default FlexGenMain
