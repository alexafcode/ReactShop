import { SET_LOADING, SetLoading } from "./types";

export const isLoading = (loading: boolean): SetLoading => {
  return { type: SET_LOADING, loading };
};
