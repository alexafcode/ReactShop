import { SystemState, SystemActionTypes, SET_LOADING } from "./types";

const initialState: SystemState = {
  isAuthenticated: false,
  token: "",
  error: false,
  loading: false,
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: action.loading,
      };
    }
    default:
      return state;
  }
}
