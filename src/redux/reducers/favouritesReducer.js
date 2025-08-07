import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../actions/actionTypes';

const initialState = {
  companies: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITES':
      if (!state.companies.includes(action.payload)) {
        return {
          ...state,
          companies: [...state.companies, action.payload],
        };
      }
      return state;

    case 'REMOVE_FROM_FAVOURITES':
      return {
        ...state,
        companies: state.companies.filter((company) => company !== action.payload),
      };

    default:
      return state;
  }
};

export default favouritesReducer;

