import api from "./api";

interface ResponseTypeData {
  user: string;
  email: string;
  isAdmin: boolean;
  token: string;
  refToken: string;
  userAvatar: string;
}
// interface ResponseType {
//   data: ResponseTypeData;
//   status: number;
//   statusText: string;
// }

export const signInApi = async (login: string, password: string) => {
  try {
    const res = await api.post<ResponseTypeData>("/user/signin", {
      login,
      password,
    });
    return res.data;
  } catch (error) {
    console.log(error.response.data.message);
    throw error.response.data.message;
  }
};

export const signUpApi = async (
  username: string,
  password: string,
  email: string
) => {
  try {
    const res = await api.post<ResponseTypeData>("/user/create", {
      username,
      password,
      email,
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error.response.data.message);
    throw error.response.data.message;
  }
};
