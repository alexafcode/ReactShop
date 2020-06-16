import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { signInApi, signUpApi } from "../../api/user-api";
import history from "../../history";
import { AnyAction } from "redux";
import { isLoading, setAuth } from "../system/actions";
import { UserReduxActionTypes, SetUser } from "./types";

export const signIn = (
  username: string,
  password: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
      dispatch(isLoading(true));
      console.log(username);
      // const userData = await signInApi(username, password);
      // console.log(userData);
      dispatch(isLoading(false));
    });
  };
};

export const signUp = (
  username: string,
  password: string,
  email: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(isLoading(true));
    const userData = await signUpApi(username, password, email);
    console.log(userData);
    if (userData) {
      const { token, email, isAdmin, user, refToken } = userData;
      dispatch(setAuth(token, refToken, true));
      dispatch(isLoading(false));
      dispatch(SetUserAction(email, isAdmin, user, null));
      // dispatch({
      //   type: UserReduxActionTypes.SET_USER,
      //   email: email,
      //   isAdmin: isAdmin,
      //   user: user,
      //   userAvatar: null,
      // });
      history.push("/");
    }
  };
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
