import { createAlova, Method } from "alova";
import MockAdapter from "@/mock";

import { axiosRequestAdapter } from "@alova/adapter-axios";

import vueHook from "alova/vue";
import type { AxiosError, AxiosResponse } from "axios";
import { useUserStore } from "@/stores/modules/user";
import { message } from "ant-design-vue";

const VITE_MOCK_SWITCH = import.meta.env.VITE_MOCK;
console.log(import.meta.env.VITE_APP_BASE_API);
const alovaInst = createAlova({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  statesHook: vueHook,
  async beforeRequest(method) {
    method.config.headers.token = "token";
  },
  requestAdapter:
    process.env.NODE_ENV === "development" &&
      ["1"].includes(`${VITE_MOCK_SWITCH}`)
      ? MockAdapter
      : axiosRequestAdapter(),
  responded: {
    onSuccess: async (response: AxiosResponse, method: Method) => {
      const userStore = useUserStore();
      const res = response.data;
      if (response.status == 200) {
        return Promise.resolve(res);
      } else {
        //过期或其他登录失效返回状态码
        if (res.code === 9001) {
          message.info("登录过期");
        } else if (res.code === 9002) {
          message.info("登录失效");
        }
        userStore.resetToken();
        return Promise.reject(res);
      }
    },
    onError: async (err: AxiosError, method: Method) => {
      if (err.status != 404) {
        message.error(err.message);
        return Promise.reject(err.response?.data);
      } else {
        message.error("系统或网络异常");
        return Promise.reject(false);
      }
    },
  },
  timeout: 5000,
});

export default alovaInst;
