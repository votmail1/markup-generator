import {
    GRIDGEN_ITEMS,
    GRIDGEN_ROWS,
    GRIDGEN_COLS,
    GRIDGEN_CSS,
    GRIDGEN_HTML,
    GRIDGEN_CONTAINER_QUANTITY,
    GRIDGEN_COLLAPSE
} from "../constants/constants"

const initialState = {
    containersQuantity: [1],
    items: {
        0: [1],
        change: 0
    },
    rows: {
        0: {
            frame : '1fr',
            val: 1
        }
    },
    cols: {
        0: {
            frame : '1fr',
            val: 1
        }
    },
    collapse:{0:true},
    html: "",
    css: ""
}

export const gridGenReducers = (state = initialState, action) => {
    switch (action.type) {
        case GRIDGEN_CONTAINER_QUANTITY:
            return {...state, containersQuantity: action.payload}
        case GRIDGEN_ITEMS:
            return {...state, items: action.payload}
        case GRIDGEN_ROWS:
            return {...state, rows: action.payload}
        case GRIDGEN_COLS:
            return {...state, cols: action.payload}
        case GRIDGEN_COLLAPSE:
            return {...state, collapse: action.payload}
        case GRIDGEN_HTML:
            return {...state, html: action.payload}
        case GRIDGEN_CSS:
            return {...state, css: action.payload}
        default:
            return state
    }
}
