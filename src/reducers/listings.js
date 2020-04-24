import { Types } from "../actions"
const initialState = {
    categories: [],
    experiences: [],
    homes: [],
    popular: [],
};


export default (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_LISTINGS:
            return {
                ...state,
                //categories: action.payload.categories,
                experiences: action.payload,
                //homes: action.payload.homes.listings,
                //popular: action.payload.popular.listings,
            };
        default:
            return state;
    }
};
