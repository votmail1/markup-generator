import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './GridGenMain.css'
import {gridGenSelectedSections} from "../../store/actions/gridGenActions";

const GridGenMain = () => {
    const {
        sections,
        selectedSection,
        rows,
        cols
    } = useSelector(state => state.gridGen)
    const dispatch = useDispatch()
    const newDivStart = (value, pos, e) => {
        let obj = selectedSection
        obj[value] = {
            display: 'shown',
            top: (pos.top + window.scrollY),
            left: (pos.left + window.scrollX),
            width: (pos.width),
            height: (pos.height),
            idL: e.target.id,
            idT: e.target.id
        }
        dispatch(gridGenSelectedSections(obj))

    }
    const divEnd = (value, pos, e) => {
        let obj1 = selectedSection
        const newArr = selectedSection.qArr
        newArr[newArr.length] = newArr.length
        obj1.qArr = newArr
        let newWidth = selectedSection[value].width
        let newHeight = selectedSection[value].height
        let newTop = selectedSection[value].top
        let newLeft = selectedSection[value].left
        let idL = selectedSection[value].idL
        let idT = selectedSection[value].idT

        if (selectedSection[value].top !== pos.top + window.scrollY) {
            if (selectedSection[value].top < pos.top + window.scrollY) {
                newHeight = newHeight + ((pos.top + window.scrollY) - selectedSection[value].top)
            }
            if (selectedSection[value].top > pos.top + window.scrollY) {
                newHeight = newHeight + ((pos.top + window.scrollY) - selectedSection[value].top) * (-2) / 2
                newTop = pos.top + window.scrollY
                idT = e.target.id
            }
        }
        if (selectedSection[value].left !== pos.left + window.scrollX) {
            if (selectedSection[value].left < pos.left) {
                newWidth = newWidth + (pos.left - selectedSection[value].left)
            }
            if (selectedSection[value].left > pos.left + window.scrollX) {
                newWidth = newWidth + ((pos.left + window.scrollX) - selectedSection[value].left) * (-2) / 2
                newLeft = pos.left + window.scrollX
                idL = e.target.id
            }
        }
        const quantityH = (newWidth / pos.width)
        const quantityV = (newHeight / pos.height)
        obj1[value] = {
            display: 'shown',
            top: newTop,
            left: newLeft,
            width: newWidth,
            height: newHeight,
            idL: idL,
            idT: idT,
            rows: quantityV,
            cols: quantityH,
        }
        obj1.counter = (value + 1)
        dispatch(gridGenSelectedSections(obj1))
        window.addEventListener('resize', () => {
            optimize(obj1, value, quantityH, quantityV)
        })
    }
    const optimize = (obj, value, quantityH, quantityV) => {
        const firstL = document.querySelector('#' + selectedSection[value].idL).getBoundingClientRect()
        const firstT = document.querySelector('#' + selectedSection[value].idT).getBoundingClientRect()
        obj[value] = {
            display: 'shown',
            top: (firstT.top),
            left: (firstL.left),
            width: (firstL.width * quantityH),
            height: (firstT.height * quantityV),
            idL: selectedSection[value].idL,
            idT: selectedSection[value].idT,
            rows: quantityV,
            cols: quantityH
        }
        dispatch(gridGenSelectedSections(obj))
    }
    const deleteDiv = (e, i) => {
        let obj = {}
        obj.counter = selectedSection.counter - 1
        obj.position = selectedSection.position
        obj.qArr = []
        let arr = Object.values(selectedSection)
        arr = arr.filter((a, b) => b !== i)
        for (let j = 0; j < selectedSection.counter - 1; j++) {
            obj[j] = arr[j]
            obj.qArr[j] = j
        }
        dispatch(gridGenSelectedSections(obj))
    }
    const selected = (
        <>
            {Object.values(selectedSection.qArr).map((row, i) => (
                <section
                    className={`d-flex transparent bg-light border text-dark border-dark justify-content-center align-items-center`}
                    style={{
                        position: "absolute",
                        width: selectedSection[row].width + "px",
                        height: selectedSection[row].height + "px",
                        top: selectedSection[row].top + "px",
                        left: selectedSection[row].left + "px",
                    }}
                    key={row + i}
                >
                    div-{[row + 1]}
                    <button className={'btn btn-close active'} onClick={(e) => deleteDiv(e, i)}></button>
                </section>
            ))}
        </>)
    return (
        <article className='w-100 mb-3 me-3'>
            <div className={`out-container bg-dark text-white border border-secondary rounded-1 p-2 m-2`}>
                Grid
                <section className='grid-container ms-4 pb-4' style={{
                    zIndex: 1,
                    gridTemplateRows: rows.fr,
                    gridTemplateColumns: cols.fr
                }}>
                    {Object.values(sections.qArr).map((row, i) => (
                        <section
                            id={`sec${i + 1}`}
                            className={`d-flex unselectable bg-secondary border border-dark justify-content-center align-items-center h-100`}
                            key={row + i}
                            onMouseDown={(e) => newDivStart(selectedSection.counter, e.target.getBoundingClientRect(), e)}
                            onMouseUp={(e) => divEnd(selectedSection.counter, e.target.getBoundingClientRect(), e)}
                        >
                            section-{i + 1}
                        </section>))}
                </section>
                {selected}
            </div>
        </article>
    )
}
export default GridGenMain
