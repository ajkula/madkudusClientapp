import { combineReducers } from 'redux';

// calling the default reducer to create a link
// import defaultReducer from './Exemple/Reducers';
import kudusReducer from './Kudus/reducer';

const rootReducers = combineReducers({
    // add reducer files references here
    // default: defaultReducer,
    kudus: kudusReducer,
});

export default rootReducers;