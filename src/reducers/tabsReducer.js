
const initialState = {
    loading: true,
    tabs: [],
    error: null
};

export default function tabsReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_TABS_STARTED':
            return {
                ...state,
                loading: true
            };
        case 'GET_TABS_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                tabs: action.payload
            };
        case 'GET_TABS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}