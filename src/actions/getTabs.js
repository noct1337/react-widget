import axios from 'axios';

export const getTabs = () => {
    return dispatch => {
        dispatch(getTabsStarted());

        axios
            .get(`http://json.ffwagency.md/tabs`)
            .then(res => {
                dispatch(getTabsSuccess(res.data));
            })
            .catch(err => {
                dispatch(getTabsFailure(err.message));
            });

    };
};

const getTabsSuccess = tabs => ({
    type: 'GET_TABS_SUCCESS',
    payload: [...tabs]
});

const getTabsStarted = () => ({
    type: 'GET_TABS_STARTED'
});

const getTabsFailure = error => ({
    type: 'GET_TABS_FAILURE',
    payload: {
        error
    }
});