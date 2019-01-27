import update from 'immutability-helper';
import * as actionTypes from './constants';

const defaultState = {
  kuduList: {
    isFetching: false,
    isFetchingMore: false,
    data: [],
    // filters: {
    //   account_id: null,
    //   transferred_at: {
    //     gte: null,
    //     lte: null,
    //   },
    // },
    // search: '',
    // sorting: '',
    // paging: null,
    controls: {
      group: ["continent", "horns"].map(o => { return {label: o, value: o}; }),
      selectedGroup: "continent",
    },
    error: null,
  },
  current: {
    isFetching: false,
    data: null,
    error: null,
  }
};

export default (state = defaultState, action) => {

  switch(action.type) {

    case actionTypes.KUDUS_DASHBOARD_CONTROLS_CHANGE:
      return update(state, {
        kuduList: {
          controls: {
            selectedGroup: { $set: action.payload.selectedGroup }
          }
        }
      })

    case actionTypes.KUDUS_FETCH_ALL_PENDING:
      return update(state, {
        kuduList: {
          isFetching: { $set: true },
        }
      });
    
    case actionTypes.KUDUS_FETCH_ALL_SUCCESS:
      return update(state, {
        kuduList: {
          isFetching: { $set: false },
          data: { $set: action.payload },
        }
      });

    case actionTypes.KUDUS_FETCH_ALL_FAILURE:
      return defaultState;
    default:
      return state;
  }
};