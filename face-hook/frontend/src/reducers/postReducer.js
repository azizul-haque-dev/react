import { actions } from "../actions/index";

export const initialState = {
  posts: [],
  loading: false,
  error: null
};
export function postReducer(state, action) {
  switch (action.type) {
    case actions.posts.DATA_FETCHING: {
      return {
        ...state,
        loading: true
      };
    }
    case actions.posts.DATA_FETCHED: {
      return {
        ...state,
        loading: false,
        posts: action.data
      };
    }
    case actions.posts.DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    default:
      return state;
  }
}
