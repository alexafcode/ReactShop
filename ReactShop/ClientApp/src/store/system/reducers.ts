import { SystemState, SystemActionTypes, EReduxActionTypes } from "./types";

const initialState: SystemState = {
  error: false,
  loading: false,
  error_text: "",
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case EReduxActionTypes.SET_LOADING: {
      return {
        ...state,
        loading: action.loading,
      };
    }
    case EReduxActionTypes.SET_FETCH: {
      return {
        ...state,
        error: action.error,
        loading: action.loading,
        error_text: action.error_text || "",
      };
    }
    case EReduxActionTypes.CLEAR_ERROR: {
      return {
        ...state,
        error: false,
        error_text: "",
      };
    }
    default:
      return state;
  }
}
