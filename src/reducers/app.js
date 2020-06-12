import { Types } from "../actions"
const initialState = {
    isLoading: false
};

export const actions = {
    loading: (isLoading) => ({
        type: Types.LOADING,
        payload: {
            isLoading
        }
    })
}


export default (state = initialState, action) => {
    switch (action.type) {
        case Types.LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            };
        default:
            return state;
    }
};