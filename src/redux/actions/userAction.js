import callApi, { history } from "../../config/sever"
import { DANG_NHAP_ACTION, GET_ARR_PHATTU, SET_PHATTU_EDIT } from "../types/userType";
import {notifiFunction} from '../../config/notifiFunction'

export const getArrPhatTuAction = (param) =>{
    return async(dispatch) =>{
        const data = await callApi.getArrPhatTu(param);
        dispatch({
            type:GET_ARR_PHATTU,
            arrPhatTu:data
        })
    }
}

export const setPhatTuEditAction = (item) =>{
    return (dispatch)=>{
        dispatch({
            type:SET_PHATTU_EDIT,
            phatTuEdit:item
        })
    }
}

export const updatePhatTu = (item, param) =>{
    return async dispatch =>{
        try{
            const data = await callApi.updatePhatTu(item);
            if(data.isSuccess){
                notifiFunction('success','Cập nhật thành công')
                dispatch(getArrPhatTuAction(param))
            }else{
                notifiFunction("warning", data.message);
            }
        }catch{
            notifiFunction("warning", "Cập nhật thất bại!");
        }
    }
}

export const registerAction = (item) =>{
    return async dispatch =>{
        try{
            const data = await callApi.registerUser(item);
            if(data.isSuccess){
                notifiFunction('success','Đăng ký thành công')
                history.push('/login')
            }else{
                notifiFunction('warning',data.message)
            }
        }catch{
            notifiFunction("warning", "Đăng ký thất bại!");
        }
    }
}

export const loginAction = (item) =>{
    return async dispatch =>{
        try{
            const data = await callApi.loginUser(item);
            if(data.isSuccess){
                notifiFunction('success','Đăng nhập thành công')
                dispatch({
                    type:DANG_NHAP_ACTION,
                    userLogin:data
                })
                history.push('/')
            }else{
                notifiFunction('warning',data.message)
            }
        }catch{
            notifiFunction("warning", "Đăng nhập thất bại!");
        }
    }
}