import { combineReducers } from 'redux';
import { constants as C, Action } from '../actions/constants';
import { user ,view} from './index';

/** BASE OF ALL REDUCERS */
const appReducer = combineReducers({
    user, // { displayName, email, claims}
    view, // { name, displayText }
});

// Root reducer is used to clear the whole store. This is used for logout actions
const rootReducer = (state: any, action: Action) => {
    if (action.type === C.CLEAR_ROOT) return appReducer({ user: {}, view: {} }, action);
    return appReducer(state, action);
}
export default rootReducer;