export interface UserProfileType {
  user: string | null;
  email: string | null;
  isAdmin: boolean;
  userAvatar: string | null;
  isAuthenticated: boolean;
  token: string | null;
  refToken: string | null;
}

export enum UserReduxActionTypes {
  SET_USER = "SET_USER",
  SET_AUTH = "SET_AUTH",
}

export type SetUserProps = {
  email: string;
  isAdmin: boolean;
  user: string;
  userAvatar: string | null;
  token: string | null;
  refToken: string | null;
  isAuthenticated: boolean;
};

export interface SetUser {
  type: typeof UserReduxActionTypes.SET_USER;
  data: SetUserProps;
}

export interface SetAuth {
  type: typeof UserReduxActionTypes.SET_AUTH;
}

export type UserActionTypes = SetUser | SetAuth;
