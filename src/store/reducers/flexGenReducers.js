import {
    FLEXGEN_ITEMS,
    FLEXGEN_CSS,
    FLEXGEN_HTML,
    FLEXGEN_CONTAINER_QUANTITY,
    FLEXGEN_CONTAINER_DIRECTION,
    FLEXGEN_CONTAINER_WRAP,
    FLEXGEN_CONTAINER_JC,
    FLEXGEN_CONTAINER_AI,
    FLEXGEN_CONTAINER_AC,
    FLEXGEN_CONTAINER_AS,
    FLEXGEN_COLLAPSE
} from "../constants/constants"

const initialState = {
    containersQuantity: [1],
    containersDirection: {0: ' row'},
    containersWrap: {0: ' nowrap'},
    containersJC: {0: ' jc-flex-start'},
    containersAI: {0: ' ai-stretch'},
    containersAC: {0: ' ac-stretch'},
    containersAS: {0: ' as-stretch'},
    items: {
        0: [1],
        change: 0
    },
    collapse:{0: true},
    html: "",
    css: ""
}

export const flexGenReducers = (state = initialState, action) => {
    switch (action.type) {
        case FLEXGEN_CONTAINER_QUANTITY:
            return {...state, containersQuantity: action.payload}
        case FLEXGEN_CONTAINER_DIRECTION:
            return {...state, containersDirection: action.payload}
        case FLEXGEN_CONTAINER_WRAP:
            return {...state, containersWrap: action.payload}
        case FLEXGEN_CONTAINER_JC:
            return {...state, containersJC: action.payload}
        case FLEXGEN_CONTAINER_AI:
            return {...state, containersAI: action.payload}
        case FLEXGEN_CONTAINER_AC:
            return {...state, containersAC: action.payload}
        case FLEXGEN_CONTAINER_AS:
            return {...state, containersAS: action.payload}
        case FLEXGEN_ITEMS:
            return {...state, items: action.payload}
        case FLEXGEN_COLLAPSE:
            return {...state, collapse: action.payload}
        case FLEXGEN_HTML:
            return {...state, html: action.payload}
        case FLEXGEN_CSS:
            return {...state, css: action.payload}
        default:
            return state
    }
}
