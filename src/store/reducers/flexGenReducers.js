import {FLEXGEN_COLUMNS, FLEXGEN_CSS, FLEXGEN_HTML, FLEXGEN_ROWS} from "../constants/constants"

export const flexGenReducers = (state = {rows:["1"], cols:{0:["1"]}, html:"", css:""}, action) => {
    switch (action.type) {
        case FLEXGEN_ROWS:
            return {...state, rows: action.payload}
        case FLEXGEN_COLUMNS:
            return {...state, cols: action.payload}
        case FLEXGEN_HTML:
            return {...state, html: action.payload}
        case FLEXGEN_CSS:
            return {...state, css: action.payload}
        default:
            return state
    }
}
