import { Action, constants as C } from './constants';

export const setUserAction = (val: any): Action => (
    {
        type: C.SET_USER,
        payload: val,
    }
);

export const clearUserAction = (val: any): Action => (
    {
        type: C.CLEAR_USER,
    }
);