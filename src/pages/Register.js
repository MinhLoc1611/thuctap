import React from "react";
import { Input, Button } from 'antd';
import { useFormik } from 'formik';
import { UserOutlined, LockOutlined} from '@ant-design/icons';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { registerAction } from "../redux/actions/userAction";

export default function Register() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword:''
          },validationSchema: Yup.object().shape({
            email: Yup.string().required('Email is required!').email('email is invalid!'),
            password: Yup.string().min(6, 'password must have min 6 characters').max(32, 'password have max 32 characters'),
            confirmPassword: Yup.string().required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
            }),
          onSubmit: values => {
            dispatch(registerAction(values))
          },
    })
    let {handleSubmit,handleChange,errors} = formik;

  return (
    <form onSubmit={handleSubmit} className='container' style={{ height: window.innerHeight }}>
            <div className='d-flex justify-content-center flex-column align-items-center pb-5' style={{ height: window.innerHeight }}>
                <h3 className='text-center'>Register Lotus</h3>
                <div className='d-flex mt-3'>
                    <Input onChange={handleChange} style={{ minWidth: 300 }} name="email" size="large" placeholder="email" prefix={<UserOutlined />} />
                </div>
                <div className='text-danger'>{errors.email}</div>
                <div className='d-flex mt-3'>
                    <Input onChange={handleChange} style={{ minWidth: 300 }} type='password' name="password" size="large" placeholder="password" prefix={<LockOutlined />} />
                </div>
                <div className='text-danger'>{errors.password}</div>
                <div className='d-flex mt-3'>
                    <Input onChange={handleChange} style={{ minWidth: 300 }} type='password' name="confirmPassword" size="large" placeholder="confirm password" prefix={<LockOutlined />} />
                </div>
                <div className='text-danger'>{errors.confirmPassword}</div>
                <Button htmlType='submit' style={{ minWidth: 300 }} size='large' className='mt-4 btn btn-info'>Register</Button>
            </div>
        </form>
  );
}
