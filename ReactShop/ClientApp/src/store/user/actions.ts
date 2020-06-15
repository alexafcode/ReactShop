import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { signInApi, signUpApi } from "../../api/user-api";
import { AnyAction } from "redux";
import { isLoading, setAuth } from "../system/actions";


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
    console.log(username);
    const userData = await signUpApi(username, password, email);
    console.log(userData);
    if(userData) {
      const {token, email, isAdmin, user, refToken} = userData;
      dispatch(setAuth(token, refToken, true))
      dispatch(isLoading(false));
    }
  };
};

