export interface SystemState {
  isAuthenticated: boolean;
  token: string;
  refToken: string;
  error: boolean;
  loading: boolean;
}

// export const SET_LOADING = "SET_LOADING";
export enum EReduxActionTypes {
  SET_LOADING = "SET_LOADING",
  SET_AUTH = "SET_AUTH",
  SET_ERROR = "SET_ERROR",
  FETCH_REQUEST = "FETCH_REQUEST",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_ERROR = "FETCH_ERROR",
  SET_FETCH = "SET_FETCH",
}

export interface SetAuth {
  type: typeof EReduxActionTypes.SET_AUTH;
  token: string;
  refToken: string;
  isAuthenticated: boolean;
}

export interface SetLoading {
  type: typeof EReduxActionTypes.SET_LOADING;
  loading: boolean;
}

export interface SetFetch {
  type: typeof EReduxActionTypes.SET_FETCH;
  error: boolean;
  loading: boolean;
}

export interface FetchRequest {
  type: typeof EReduxActionTypes.FETCH_REQUEST;
}

export type SystemActionTypes = SetLoading | SetAuth | SetFetch;
