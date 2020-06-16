import { EReduxActionTypes, SetLoading, SetAuth, SetFetch } from "./types";

export const isLoading = (loading: boolean): SetLoading => {
  return { type: EReduxActionTypes.SET_LOADING, loading };
};

export const setAuth = (
  token: string,
  refToken: string,
  isAuthenticated: boolean
): SetAuth => {
  return { type: EReduxActionTypes.SET_AUTH, token, refToken, isAuthenticated };
};

export const setFetch = (error: boolean, loading: boolean): SetFetch => {
  return { type: EReduxActionTypes.SET_FETCH, error, loading };
};
