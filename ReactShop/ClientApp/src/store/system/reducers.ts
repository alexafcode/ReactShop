import { SystemState, SystemActionTypes, EReduxActionTypes } from "./types";

const initialState: SystemState = {
  isAuthenticated: false,
  token: "",
  refToken: "",
  error: false,
  loading: false,
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
    case EReduxActionTypes.SET_AUTH: {
      return {
        ...state,
        token: action.token,
        isAuthenticated: action.isAuthenticated,
        refToken: action.refToken
      };
    }
    default:
      return state;
  }
}
