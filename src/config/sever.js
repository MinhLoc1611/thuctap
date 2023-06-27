import axiosClient from "./axiosClient";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const callApi = {
  getArrPhatTu: (param) => {
    const url = `api/PhatTu/laydanhsach?ten=${param.ten}&phapDanh=${param.phapDanh}&email=${param.email}&daHoanTuc=${param.daHoanTuc}&gioiTinh=${param.gioiTinh}&PageSize=${param.pageSize}&PageNumber=${param.pageNumber}`;
    return axiosClient.get(url);
  },
  updatePhatTu: (data) => {
    const url = "api/PhatTu/suathongtin";
    return axiosClient.put(url, data);
  },
  loginUser: (data) => {
    const url = "api/Auth/Login";
    return axiosClient.post(url, data);
  },
  registerUser: (data) => {
    const url = "api/Auth/Register";
    return axiosClient.post(url, data);
  },
  getArrDaoTrang: (param) => {
    const url = `api/DaoTrang/laydanhsach?ten=${param.ten}&thoiGian=${param.thoiGian}&daKetThuc=${param.daKetThuc}&PageSize=${param.pageSize}&PageNumber=${param.pageNumber}`;
    return axiosClient.get(url);
  },
  createDaoTrang:(item)=>{
    const url = "api/DaoTrang/themdaotrang";
    return axiosClient.post(url, item)
  },
  updateDaoTrang:(item)=>{
    const url = "api/DaoTrang/suathongtin";
    return axiosClient.put(url, item)
  },
  deleteDaoTrang:(id)=>{
    const url = `api/DaoTrang/xoadaotrang?daotrangId=${id}`;
    return axiosClient.delete(url)
  },
  getArrChuTri:()=>{
    const url = "api/DaoTrang/danhsachchutri";
    return axiosClient.get(url)
  }
};

export default callApi;
