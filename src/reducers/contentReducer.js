import {
    GET_TABS_CONTENT_STARTED,
    GET_TABS_CONTENT_SUCCESS,
    GET_TABS_CONTENT_FAILURE,
  } from "./actionTypes";

const initialState = {
    contentLoading: true,
    contentData: {},
    contentErorr: null
};

export default function contentReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TABS_CONTENT_STARTED:
            return {
                ...state,
                contentLoading: true
            };
        case GET_TABS_CONTENT_SUCCESS:
            return {
                ...state,
                contentLoading: false,
                contentErorr: null,
                contentData: action.payload
            };
        case GET_TABS_CONTENT_FAILURE:
            return {
                ...state,
                contentLoading: false,
                contentErorr: action.payload.contentErorr
            };
        default:
            return state;
    }
}