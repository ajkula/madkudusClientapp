import { fetchAll } from './services';
import * as actionTypes from './constants';

export const fetchAllKudus = () => {
  return dispatch => {
    // trigger KUDUS_FETCH_ALL_PENDING action for loading state
    dispatch({
      type: actionTypes.KUDUS_FETCH_ALL_PENDING,
    });

  // API call to login through services
  return fetchAll()
    .then(response => {
      console.log(response)
      // trigger KUDUS_STATISTICS_FETCH_ALL_SUCCESS action
      return dispatch({
        type: actionTypes.KUDUS_FETCH_ALL_SUCCESS,
        payload: response,
      });
    })
    // trigger KUDUS_STATISTICS_FETCH_ALL_FAILURE action
    .catch((e) => {
      return dispatch({
        type: actionTypes.KUDUS_FETCH_ALL_FAILURE,
        payload: e,
      });
    })
  };
};

export const displayGroupChange = (controls) => {
  return dispatch => {
    dispatch({
      type: actionTypes.KUDUS_DASHBOARD_CONTROLS_CHANGE,
      payload: controls,
    })
  }
}