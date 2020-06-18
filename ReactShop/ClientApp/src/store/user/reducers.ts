import { loadState } from "../../api/localStorage";
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

const persistedState = loadState();
const defaultState = { ...persistedState } || initialState;

// const data: UserProfileType = JSON.parse(localStorage.getItem("user")!);
// const defaultState = { ...data } || initialState;

// const persistedState = loadState();
// console.log(persistedState)
// const store = createStore(
//   rootReducer,
//   persistedState,
//   applyMiddleware(thunk, loggerMiddleware)
// );

export function userReducer(
  state = defaultState,
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
