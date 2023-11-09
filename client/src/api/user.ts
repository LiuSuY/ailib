import alovaInst from "@/utils/request";


interface IData<T> {
  data: T,
  code: number;
  message: string;
}

export type LoginFormType = {
  phone: string;
  code: string;
  toKen?: string;
};

export const getCode = () => {
  return "api/users/code";
};

export const login = (data: LoginFormType) => {
  return alovaInst.Post<IData<{ token: string }>>("/users/login", data);
};



export const logOut = (token: { token: string }) => {
  return alovaInst.Post<IData<{}>>("/users/logOut", token);
};
