import { constants as C, Action } from '../actions/constants';

export const view = (state = {}, action: Action) => {
    switch (action.type) {
        case C.UPDATE_VIEW:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};