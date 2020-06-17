import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { signInApi, signUpApi } from "../../api/user-api";
import history from "../../history";
import { AnyAction } from "redux";
import { isLoading, setAuth, setFetch } from "../system/actions";
import { UserReduxActionTypes, SetUser } from "./types";

export const signIn = (
  username: string,
  password: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  dispatch(setFetch(false, true));
  try {
    const userData = await signInApi(username, password);
    console.log(userData);
    const { token, email, isAdmin, user, refToken, userAvatar } = userData;
    dispatch(setAuth(token, refToken, true));
    dispatch(SetUserAction(email, isAdmin, user, userAvatar));
    dispatch(isLoading(false));
    history.push("/");
  } catch (e) {
    console.log(e); // ToDo message reducer
    dispatch(setFetch(true, false, e));
  }
};

export const signUp = (
  username: string,
  password: string,
  mail: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  dispatch(setFetch(false, true));
  try {
    const userData = await signUpApi(username, password, mail);
    console.log(userData);
    const { token, email, isAdmin, user, refToken } = userData;
    dispatch(setAuth(token, refToken, true));
    dispatch(SetUserAction(email, isAdmin, user, null));
    dispatch(isLoading(false));
    history.push("/");
  } catch (e) {
    console.log(e); // ToDo
    dispatch(setFetch(true, false, e));
  }
};

export const SetUserAction = (
  email: string,
  isAdmin: boolean,
  user: string,
  userAvatar: string | null
): SetUser => {
  return {
    type: UserReduxActionTypes.SET_USER,
    email,
    isAdmin,
    user,
    userAvatar,
  };
};
