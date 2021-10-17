
const initialState = {
    contentLoading: true,
    content: {},
    contentErorr: null
};

export default function contentReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_TABS_CONTENT_STARTED':
            return {
                ...state,
                contentLoading: true
            };
        case 'GET_TABS_CONTENT_SUCCESS':
            return {
                ...state,
                contentLoading: false,
                contentErorr: null,
                content: action.payload
            };
        case 'GET_TABS_CONTENT_FAILURE':
            return {
                ...state,
                contentLoading: false,
                contentErorr: action.payload.contentErorr
            };
        default:
            return state;
    }
}