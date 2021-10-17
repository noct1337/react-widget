import {
    GET_TABS_CONTENT_STARTED,
    GET_TABS_CONTENT_SUCCESS,
    GET_TABS_CONTENT_FAILURE,
  } from "../reducers/actionTypes";

import axios from 'axios';

export const getTabsContent = (tabName) => {
    return dispatch => {
        dispatch(getTabsContentStarted());
        axios
            .get(`http://json.ffwagency.md/${tabName}`)
            .then(res => {
                dispatch(getTabsContentSuccess(res.data));
            })
            .catch(err => {
                dispatch(getTabsContentFailure(err.message));
            });

    };
};

const getTabsContentSuccess = content => ({
    type: GET_TABS_CONTENT_SUCCESS,
    payload: {...content}
});

const getTabsContentStarted = () => ({
    type: GET_TABS_CONTENT_STARTED
});

const getTabsContentFailure = contentErorr => ({
    type: GET_TABS_CONTENT_FAILURE,
    payload: {
        contentErorr
    }
});