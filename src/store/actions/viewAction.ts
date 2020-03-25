import { Action, constants as C } from './constants';

export const updateViewAction = (val: any): Action => (
    {
        type: C.UPDATE_VIEW,
        payload: val,
    }
);