import axiosClient from "./axiosClient";
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

const callApi = {
    getArrPhatTu: (param) => {
      const url = `api/PhatTu/laydanhsach?ten=${param.ten}&phapDanh=${param.phapDanh}&email=${param.email}&daHoanTuc=${param.daHoanTuc}&gioiTinh=${param.gioiTinh}&PageSize=${param.pageSize}&PageNumber=${param.pageNumber}`;
      return axiosClient.get(url);
    },
    updatePhatTu: (data) =>{
        const url = "api/PhatTu/suathongtin";
        return axiosClient.put(url,data)
    },
    loginUser:(data) =>{
        const url = "api/Auth/Login";
        return axiosClient.post(url,data)
    },
    registerUser:(data) =>{
        const url = "api/Auth/Register";
        return axiosClient.post(url,data)
    }
  };
export default callApi;

