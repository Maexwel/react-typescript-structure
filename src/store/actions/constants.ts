export const constants = {
    CLEAR_ROOT: "CLEAR_ROOT",
    SET_USER: "SET_USER_ACTION",
    CLEAR_USER: "CLEAR_USER_ACTION",
    UPDATE_VIEW: "UPDATE_VIEW_ACTION",
};

// Action type used to dispatch in redux store
export type Action = {
    payload?: any, // Data
    type: string, // Action type from constants
};