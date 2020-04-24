import { Types } from "../actions"
const initialState = {
    token: null
};



export default (state = initialState, action) => {
    switch (action.type) {
        case Types.LOGOUT:
            return {
                ...state,
                token: null
            };
        case Types.LOGIN:
            return {
                ...state,
                token: action.payload.token
            }
        default:
            return state;
    }
};