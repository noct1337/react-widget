const initialState = {
    numberOfFont: null
}

export default function activeFontReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_ACTIVE_FONT':
            return {
                numberOfFont: action.payload
            };
        default:
            return state;
    }
}