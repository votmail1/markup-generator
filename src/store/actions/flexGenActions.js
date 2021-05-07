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
} from "../constants/constants";


export const flexGenContainers = (qContainers) => ({
    type: FLEXGEN_CONTAINER_QUANTITY,
    payload: qContainers
})
export const flexGenContainerDirection = (direction) => ({
    type: FLEXGEN_CONTAINER_DIRECTION,
    payload: direction
})
export const flexGenContainerWrap = (wrap) => ({
    type: FLEXGEN_CONTAINER_WRAP,
    payload: wrap
})
export const flexGenContainerJustifyContent = (JC) => ({
    type: FLEXGEN_CONTAINER_JC,
    payload: JC
})
export const flexGenContainerAlignItems = (AI) => ({
    type: FLEXGEN_CONTAINER_AI,
    payload: AI
})
export const flexGenContainerAlignContent = (AC) => ({
    type: FLEXGEN_CONTAINER_AC,
    payload: AC
})
export const flexGenContainerAlignSelf = (AS) => ({
    type: FLEXGEN_CONTAINER_AS,
    payload: AS
})
export const flexGenItems = (qItems) => ({
    type: FLEXGEN_ITEMS,
    payload: qItems
})
export const flexGenHtml = (code) => ({
    type: FLEXGEN_HTML,
    payload: code
})
export const flexGenCss = (code) => ({
    type: FLEXGEN_CSS,
    payload: code
})
