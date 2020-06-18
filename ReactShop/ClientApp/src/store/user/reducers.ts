import {
  UserProfileType,
  UserActionTypes,
  UserReduxActionTypes,
} from "./types";

const initialState: UserProfileType = {
  user: null,
  email: null,
  isAdmin: false,
  userAvatar: null,
  isAuthenticated: false,
  token: "",
  refToken: "",
};

// const defaultState =
//   JSON.parse(localStorage.getItem("")!) || initialState;

export function userReducer(
  state = initialState,
  action: UserActionTypes
): UserProfileType {
  switch (action.type) {
    case UserReduxActionTypes.SET_USER: {
      return {
        ...state,
        ...action.data,
      };
    }
    case UserReduxActionTypes.SET_AUTH: {
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    default:
      return state;
  }
}
