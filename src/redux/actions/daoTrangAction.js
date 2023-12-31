import callApi from "../../config/sever"
import {notifiFunction} from '../../config/notifiFunction'
import { GET_ARR_DAO_TRANG, SET_ARR_CHU_TRI, SET_DAO_TRANG_EDIT } from "../types/daoTrangType";

export const getArrDaoTrangAction = (param, data) =>{
    return async dispatch =>{
        const result = await callApi.getArrDaoTrang(param, data);
        dispatch({
            type:GET_ARR_DAO_TRANG,
            arrDaoTrang:result
        })
    }
}

export const setDaoTrangEditAction = (item) =>{
    return dispatch =>{
        dispatch({
            type:SET_DAO_TRANG_EDIT,
            daoTrangEdit:item
        })
    }
}

export const deleteDaoTrangAction = (id) =>{
    return async dispatch =>{
        const result = await callApi.deleteDaoTrang(id);
        if(result.isSuccess){
            notifiFunction('success',result.message)
        } else{
            notifiFunction("warning", result.message);
        }
    }
}

export const createDaoTrangAction = (item) =>{
    return async dispatch =>{
        const result = await callApi.createDaoTrang(item)
        if(result.isSuccess){
            notifiFunction('success',result.message)
        } else{
            notifiFunction("warning", result.message);
        }
    }
}

export const updateDaoTrangAction = (item) =>{
    return async dispatch =>{
        const result = await callApi.updateDaoTrang(item)
        if(result.isSuccess){
            notifiFunction('success',result.message)
        } else{
            notifiFunction("warning", result.message);
        }
    }
}

export const getArrChuTriAction = () =>{
    return async dispatch =>{
        const data = await callApi.getArrChuTri();
        dispatch({
            type:SET_ARR_CHU_TRI,
            arrChuTri:data
        })
    }
}