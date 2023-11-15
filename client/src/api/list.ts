import alovaInst from "@/utils/request";


export interface IData<T> {
  data: T,
  code: number;
  message: string;
}



export const getList = (pages: { current: number, size: number }) => {
  return alovaInst.Get<IData<{
    data: [{ url: string }],
    current: number,
    size: number,
    total: number
  }>>(`/file/list?current=${pages.current}&size=${pages.size}`);
};


