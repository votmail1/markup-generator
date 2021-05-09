import {
    GRIDGEN_ITEMS,
    GRIDGEN_ROWS,
    GRIDGEN_COLS,
    GRIDGEN_CSS,
    GRIDGEN_HTML,
    GRIDGEN_CONTAINER_QUANTITY,
    GRIDGEN_COLLAPSE,
} from "../constants/constants"

export const gridGenContainers = (qContainers) => ({
    type: GRIDGEN_CONTAINER_QUANTITY,
    payload: qContainers
})
export const gridGenItems = (qItemss) => ({
    type: GRIDGEN_ITEMS,
    payload: qItemss
})
export const gridGenRows = (qRows) => ({
    type: GRIDGEN_ROWS,
    payload: qRows
})
export const gridGenCols = (qCols) => ({
    type: GRIDGEN_COLS,
    payload: qCols
})
export const gridGenCollapse = (collapsed) => ({
    type: GRIDGEN_COLLAPSE,
    payload: collapsed
})
export const gridGenHtml = (code) => ({
    type: GRIDGEN_HTML,
    payload: code
})
export const gridGenCss = (code) => ({
    type: GRIDGEN_CSS,
    payload: code
})
