import { reactive } from "vue";
import { defineStore } from "pinia";
import { useRequest } from "alova";
import { login, logOut, type LoginFormType } from "@/api/user";
import { removeItem } from "@/utils/localStorage";

export const useUserStore = defineStore("user", () => {
  const userInfo = reactive({
    token: localStorage.getItem('token')
  });
  function Login(user: LoginFormType) {
    const { onError, onSuccess } = useRequest(login(user));

    return new Promise((resolve, reject) => {
      onSuccess((res) => {
        const { data } = res;
        userInfo.token = data.data.token;
        localStorage.setItem('token', data.data.token)
        resolve(data);
      });
      onError((res) => {
        reject(res.error);
      });
    });
  }

  function LogOut() {
    const { onError, onSuccess } = useRequest(logOut({ token: userInfo.token! }));

    return new Promise((resolve, reject) => {
      onSuccess((res) => {
        resolve(res.data);
      });
      onError((res) => {
        reject(res.error);
      });
    });
  }

  function resetToken() {
    userInfo.token = '';
    removeItem('token')
  }

  return { userInfo, Login, LogOut, resetToken };
});
