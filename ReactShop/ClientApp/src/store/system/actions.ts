import {
  EReduxActionTypes,
  SetLoading,
  // SetAuth,
  SetFetch,
  ClearError,
} from "./types";

export const isLoading = (loading: boolean): SetLoading => {
  return { type: EReduxActionTypes.SET_LOADING, loading };
};

// export const setAuth = (
//   token: string,
//   refToken: string,
//   isAuthenticated: boolean
// ): SetAuth => {
//   return { type: EReduxActionTypes.SET_AUTH, token, refToken, isAuthenticated };
// };

export const setFetch = (
  error: boolean,
  loading: boolean,
  error_text?: string
): SetFetch => {
  return { type: EReduxActionTypes.SET_FETCH, error, loading, error_text };
};

export const clearError = (): ClearError => {
  return { type: EReduxActionTypes.CLEAR_ERROR };
};
