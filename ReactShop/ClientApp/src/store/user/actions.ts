import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { signInApi, signUpApi } from "../../api/user-api";
import history from "../../history";
import { AnyAction } from "redux";
import { isLoading, setFetch } from "../system/actions";
import { UserReduxActionTypes, SetUser, SetUserProps, SetAuth } from "./types";

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
    const data: SetUserProps = {
      ...userData,
      isAuthenticated: true,
    };
    dispatch(setUserAction(data));
    dispatch(isLoading(false));
    history.push("/");
  } catch (message) {
    console.log(message);
    dispatch(setFetch(true, false, message));
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
    const data: SetUserProps = {
      ...userData,
      isAuthenticated: true,
    };

    dispatch(setUserAction(data));
    dispatch(isLoading(false));
    history.push("/");
  } catch (message) {
    console.log(message);
    dispatch(setFetch(true, false, message));
  }
};

export const setUserAction = (data: SetUserProps): SetUser => {
  return {
    type: UserReduxActionTypes.SET_USER,
    data,
  };
};
export const setAuth = (): SetAuth => {
  return { type: UserReduxActionTypes.SET_AUTH };
};
