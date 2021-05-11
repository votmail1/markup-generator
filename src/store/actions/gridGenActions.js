import {
    GRIDGEN_SECTIONS,
    GRIDGEN_SELECTED_SECTIONS,
    GRIDGEN_ROWS,
    GRIDGEN_COLS,
    GRIDGEN_CSS,
    GRIDGEN_HTML, GRIDGEN_SELECTED_SECTIONS_CLEAR,
} from "../constants/constants"

export const gridGenSections = (payload) => ({
    type: GRIDGEN_SECTIONS,
    payload: payload
})
export const gridGenSelectedSections = (payload) => ({
    type: GRIDGEN_SELECTED_SECTIONS,
    payload: payload
})
export const gridGenSelectedSectionsClear = (payload) => ({
    type: GRIDGEN_SELECTED_SECTIONS_CLEAR,
    payload: payload
})
export const gridGenRows = (payload) => ({
    type: GRIDGEN_ROWS,
    payload: payload
})
export const gridGenCols = (payload) => ({
    type: GRIDGEN_COLS,
    payload: payload
})
export const gridGenHtml = (payload) => ({
    type: GRIDGEN_HTML,
    payload: payload
})
export const gridGenCss = (payload) => ({
    type: GRIDGEN_CSS,
    payload: payload
})
