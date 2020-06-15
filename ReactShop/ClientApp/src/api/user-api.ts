import api from "./api";
import { UserProfileType } from "../store/user/types";

interface ResponseType {
  data: UserProfileType;
  status: number;
  statusText: string;
}

export const signInApi = async (username: string, password: string) => {
  const res = await api.post<ResponseType>("/user/signin", {
    username,
    password,
  });
  console.log(res.data);
  return res.data;
};

export const signUpApi = async (
  username: string,
  password: string,
  email: string
) => {
  try {
    const res = await api.post<ResponseType>("/user/create", {
      username,
      password,
      email,
    });
    console.log(res)
    return res
  }
  catch (error) {
    console.log(error.message);
  }
};
