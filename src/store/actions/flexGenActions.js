import {FLEXGEN_COLUMNS, FLEXGEN_CSS, FLEXGEN_HTML, FLEXGEN_ROWS} from "../constants/constants";


export const flexGenRows = (qRow) => ({
    type: FLEXGEN_ROWS,
    payload: qRow
})
export const flexGenCols = (qCol) => ({
    type: FLEXGEN_COLUMNS,
    payload: qCol
})
export const flexGenHtml = (code) => ({
    type: FLEXGEN_HTML,
    payload: code
})
export const flexGenCss = (code) => ({
    type: FLEXGEN_CSS,
    payload: code
})
