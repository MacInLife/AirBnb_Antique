import { Types } from "../actions"
const initialState = {
    categories: [],
    experiences: [],
    homes: [],
    popular: [],
    sort: '',
    filter: ""
};


export default (state = initialState, action) => {
    switch (action.type) {
        case Types.FILTER_EXPERIENCES:
            return {
                ...state,
                filter: action.payload.criteria,
                sort: action.payload.sort,
            }
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

const sortExperiencesbyType = (left, right) => {
    return left.type.toUpperCase().localeCompare(right.type.toUpperCase())
}

const sortExperiencesbyTitle = (left, right) => {
    return left.title.toUpperCase().localeCompare(right.title.toUpperCase())
}

export function filterExperiences(state) {
    const { listings } = state
    const { filter, sort } = listings
    const filteredExperiences = listings.experiences.filter((experience) => {
        return experience.title.toUpperCase().indexOf(filter.toUpperCase()) > -1
    })
    switch (sort) {
        case 'type':
            return filteredExperiences.sort(sortExperiencesbyType)
        case 'title':
            return filteredExperiences.sort(sortExperiencesbyTitle)
        default:
            return filteredExperiences
    }

}
