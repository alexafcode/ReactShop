export interface SystemState {
  isAuthenticated: boolean;
  token: any;
  error: boolean;
  loading: boolean;
}

export const SET_LOADING = "SET_LOADING";
// export enum EReduxActionTypes {
//   GET_MOVIE = 'GET_MOVIE',
//   GET_MOVIES = 'GET_MOVIES',
//   RESET_MOVIE = 'RESET_MOVIE',
//   TOGGLE_MESSAGE = 'TOGGLE_MESSAGE'
// }

export interface SetLoading {
  type: typeof SET_LOADING;
  loading: boolean;
}

export type SystemActionTypes = SetLoading;
