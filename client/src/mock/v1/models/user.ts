import { defineMock } from "@alova/mock";

export const useMocks = defineMock({
  "[POST]/api/login": (params) => {
    return { data: [], code: 400, message: "密码邮箱错误" };
  },
  "[GET]/api/logInfo": () => {
    return [{ name: "张三", age: 12 }];
  },
  "[GET]/api/users/code": () => {
    return { data: '', code: 200, message: "密码邮箱错误" };
  },
  "[POST]/api/users/logOut": () => {
    return {
      data: [], code: 200, message: "密码邮箱错误"
    };
  }
});
