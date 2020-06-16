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
};

export function userReducer(
  state = initialState,
  action: UserActionTypes
): UserProfileType {
  switch (action.type) {
    case UserReduxActionTypes.SET_USER: {
      return {
        ...state,
        user: action.user,
        email: action.email,
        isAdmin: action.isAdmin,
        userAvatar: action.userAvatar,
      };
    }
    default:
      return state;
  }
}
