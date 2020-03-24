import { Action, constants as C } from '../actions/constants';

// User reducer
export const user = (state = {}, action: Action) => {
    switch (action.type) {
        case C.SET_USER:
            return action.payload;
        case C.CLEAR_USER:
            return {};
        default:
            return state;
    }
};