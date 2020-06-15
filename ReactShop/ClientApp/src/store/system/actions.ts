import { EReduxActionTypes, SetLoading } from "./types";

export const isLoading = (loading: boolean): SetLoading => {
  return { type: EReduxActionTypes.SET_LOADING, loading };
};
