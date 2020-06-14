import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { signInApi } from "../../api/session-api";
import { AnyAction } from "redux";
import { isLoading } from "../system/actions";

export const signIn = (
  username: string,
  password: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
      dispatch(isLoading(true));
      console.log(username);
      // const userData = signInApi(username, password);
      // console.log(userData);
      dispatch(isLoading(false));
    });
  };
};
