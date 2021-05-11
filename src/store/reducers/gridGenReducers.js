import {
    GRIDGEN_SECTIONS,
    GRIDGEN_SELECTED_SECTIONS,
    GRIDGEN_ROWS,
    GRIDGEN_COLS,
    GRIDGEN_CSS,
    GRIDGEN_HTML, GRIDGEN_SELECTED_SECTIONS_CLEAR,
} from "../constants/constants"

const initialState = {
    sections: {
        qArr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    selectedSection: {
        position: 'absolute',
        0: {
            display: 'hidden',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
        },
        counter: 0,
        qArr: [],
    },
    rows: {
        fr: '1fr 1fr 1fr',
        val: 3
    },
    cols: {
        fr: '1fr 1fr 1fr',
        val: 3
    },
    html: "",
    css: ""
}

export const gridGenReducers = (state = initialState, action) => {
    switch (action.type) {
        case GRIDGEN_SECTIONS:
            return {...state, sections: action.payload}
        case GRIDGEN_SELECTED_SECTIONS:
            return {...state, selectedSection: action.payload}
        case GRIDGEN_SELECTED_SECTIONS_CLEAR:
            return {...state, selectedSection: action.payload}
        case GRIDGEN_ROWS:
            return {...state, rows: action.payload}
        case GRIDGEN_COLS:
            return {...state, cols: action.payload}
        case GRIDGEN_HTML:
            return {...state, html: action.payload}
        case GRIDGEN_CSS:
            return {...state, css: action.payload}
        default:
            return state
    }
}
