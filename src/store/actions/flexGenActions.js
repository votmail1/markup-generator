import { FLEXGEN_COLUMNS, FLEXGEN_ROWS } from "../constants/constants";


export const flexGenRows = (qRow) => ({
    type: FLEXGEN_ROWS,
    payload: qRow
})
export const flexGenCols = (qCol) => ({
    type: FLEXGEN_COLUMNS,
    payload: qCol
})