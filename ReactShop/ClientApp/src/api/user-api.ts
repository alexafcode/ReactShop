import api from "./api";

interface ResponseTypeData {
  user: string;
  email: string;
  isAdmin: boolean;
  token: string
  refToken: string
}
interface ResponseType {
  data: ResponseTypeData;
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
    const res = await api.post<ResponseTypeData>("/user/create", {
      username,
      password,
      email,
    });
    console.log(res)
    return res.data
  }
  catch (error) {
    console.log(error.message);
  }
};
