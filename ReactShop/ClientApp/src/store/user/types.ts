export interface UserProfileType {
  user: string | null;
  email: string | null;
  isAdmin: boolean;
  userAvatar: string | null;
}

export enum UserReduxActionTypes {
  SET_USER = "SET_USER",
}

export interface SetUser {
  type: typeof UserReduxActionTypes.SET_USER;
  user: string;
  email: string;
  isAdmin: boolean;
  userAvatar: string | null;
}

export type UserActionTypes = SetUser;
