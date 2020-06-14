export interface SystemState {
  isAuthenticated: boolean;
  token: string;
  error: boolean;
  loading: boolean;
}

// export const SET_LOADING = "SET_LOADING";
export enum EReduxActionTypes {
  SET_LOADING = "SET_LOADING",
  SET_AUTH = "SET_LOADING",
}

interface SetLoading {
  type: typeof EReduxActionTypes.SET_LOADING;
  loading: boolean;
}

interface SetAuth {
  type: typeof EReduxActionTypes.SET_AUTH;
  token: string;
  isAuthenticated: boolean;
}

export type SystemActionTypes = SetLoading | SetAuth;
