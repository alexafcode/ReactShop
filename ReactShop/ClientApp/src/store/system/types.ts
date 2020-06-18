export interface SystemState {
  error: boolean;
  loading: boolean;
  error_text: string;
}

export enum EReduxActionTypes {
  SET_LOADING = "SET_LOADING",
  SET_AUTH = "SET_AUTH",
  SET_ERROR = "SET_ERROR",
  FETCH_REQUEST = "FETCH_REQUEST",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_ERROR = "FETCH_ERROR",
  SET_FETCH = "SET_FETCH",
  CLEAR_ERROR = "CLEAR_ERROR",
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
  error_text?: string;
}
export interface ClearError {
  type: typeof EReduxActionTypes.CLEAR_ERROR;
}

export interface FetchRequest {
  type: typeof EReduxActionTypes.FETCH_REQUEST;
}

export type SystemActionTypes = SetLoading | SetAuth | SetFetch | ClearError;
