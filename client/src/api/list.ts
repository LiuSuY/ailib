import alovaInst from "@/utils/request";


interface IData<T> {
  data: T,
  code: number;
  message: string;
}



export const getList = () => {
  return alovaInst.Get<IData<[{url:string}]>>("/file/list");
};


