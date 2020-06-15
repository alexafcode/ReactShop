import { EReduxActionTypes, SetLoading, SetAuth } from "./types";

export const isLoading = (loading: boolean): SetLoading => {
  return { type: EReduxActionTypes.SET_LOADING, loading };
};

export const setAuth = (token: string, refToken: string, isAuthenticated: boolean): SetAuth => {
  return {type: EReduxActionTypes.SET_AUTH, token, refToken, isAuthenticated }
}
