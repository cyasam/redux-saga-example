const INITIAL_STATE = {
  loading: false,
  data: null,
  error: null
};

export const todoListReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    case "FETCH_TODOLIST_START":
      return {
        ...state,
        loading: true
      };
    case "FETCH_TODOLIST_SUCCESS":
      return {
        ...state,
        loading: false,
        ...action.payload
      };
    case "FETCH_TODOLIST_FAILURE":
      return {
        ...state,
        loading: false,
        ...action.payload
      };
    default:
      return state;
  }
};
