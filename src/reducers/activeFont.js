const initialState = {
    activeFont: null
}

export default function activeFontReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_ACTIVE_FONT':
            return {
                activeFont: action.payload
            };
        default:
            return state;
    }
}