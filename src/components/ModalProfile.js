import React, { useState } from "react";
import { Button, Modal, Form, Input, DatePicker, Select } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import moment from "moment";
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { updatePhatTu } from "../redux/actions/userAction";

dayjs.extend(customParseFormat);

const imgStyle = {
  width: "100px",
  height: "100px",
  border: "none",
  borderRadius: "50%",
};

export default function UpdateProfile(props) {
  const { isModalOpen, handleCancel, flag, phatTuEdit, param } = props;
  const {
    daHoanTuc,
    email,
    gioiTinh,
    ho,
    phapDanh,
    soDienThoai,
    ten,
    tenDem,
    ngaySinh,
    ngayXuatGia,
    ngayHoanTuc,
  } = phatTuEdit;
  const dispatch = useDispatch()

  const formik = useFormik({
    enableReinitialize: true,
    initialValues:{
        daHoanTuc,
        email,
        gioiTinh,
        ho,
        phapDanh,
        soDienThoai,
        ten,
        tenDem,
        ngaySinh,
    ngayXuatGia,
    ngayHoanTuc,
      },
      onSubmit:(values) =>{
        const newPhatTu = {...values,id:phatTuEdit.id}
        dispatch(updatePhatTu(newPhatTu, param))
        handleCancel()
      }
  })

  const [imgSrc, setImgSrc] = useState(phatTuEdit.anhChup);
  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png" ||
      file.type === "image/gif"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
    }
  };
 
  const handleChangeDate = (name) => {
    return (value) => {
      let date = formatMoment(value.$d);
      formik.setFieldValue(name, date);
    };
  };
  const handleChangeSelect = (name) =>{
    return (value) =>{
        formik.setFieldValue(name,value)
    }
  }

  const formatMoment = (item) => {
    return moment(item).format(dateFormat);
  };
  const dateFormat = "DD/MM/YYYY";
  const [form] = Form.useForm();
  return (
    <Modal
      width={700}
      title={flag}
      open={isModalOpen}
      footer={null}
      onCancel={handleCancel}
    >
      <Form
        layout="vertical"
        onSubmitCapture={formik.handleSubmit}
        onReset={()=>form.resetFields()}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 24,
        }}
        style={{
          maxWidth: 900,
        }}
      >
        <Form.Item>
          {imgSrc !== undefined || null || "" ? (
            <img style={imgStyle} src={imgSrc} alt="..." />
          ) : (
            <img style={imgStyle} src="./img/avtUser.jpg" alt="..." />
          )}
          <br />
          <p>Ảnh đại diện người dùng</p>
          <input
            className="inputfile"
            name="hinhAnh"
            type="file"
            id="file"
            accept="image/jpeg, image/jpg, image/gif, image/png"
            onChange={handleChangeFile}
          />
          <label for="file">Chọn ảnh</label>
        </Form.Item>
        <Form.Item
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            style={{
              display: "inline-block",
              width: "calc(33% - 16px)",
            }}
            label="Họ"
          >
            <Input name="ho" onChange={formik.handleChange} value={formik.values.ho}/>
          </Form.Item>
          <Form.Item
            style={{
              display: "inline-block",
              width: "calc(33% - 16px)",
              margin: "0 16px",
            }}
            label="Tên đệm"
          >
            <Input name="tenDem" onChange={formik.handleChange} value={formik.values.tenDem}/>
          </Form.Item>
          <Form.Item
            style={{
              display: "inline-block",
              width: "calc(33% - 16px)",
            }}
            label="Tên"
            
          >
            <Input name="ten" onChange={formik.handleChange} value={formik.values.ten}/>
          </Form.Item>
        </Form.Item>
        <Form.Item
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            style={{
              display: "inline-block",
              width: "calc(50% - 24px)",
            }}
            label="Email"
          >
            <Input name="email" onChange={formik.handleChange} value={formik.values.email}/>
          </Form.Item>
          <Form.Item
            style={{
              display: "inline-block",
              width: "calc(50% - 24px)",
              margin: "0 24px",
            }}
            label="Pháp danh"
          >
            <Input name="phapDanh" onChange={formik.handleChange} value={formik.values.phapDanh}/>
          </Form.Item>
        </Form.Item>
        <Form.Item
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            style={{
              display: "inline-block",
              width: "calc(33% - 16px)",
            }}
            label="Số điện thoại"
          >
            <Input name="soDienThoai" onChange={formik.handleChange} value={formik.values.soDienThoai}/>
          </Form.Item>
          <Form.Item
            style={{
              display: "inline-block",
              width: "calc(33% - 16px)",
              margin: "0 16px",
            }}
            label="Ngày sinh"
          >
            <DatePicker
              defaultValue={
                phatTuEdit.ngaySinh !== null
                  ? dayjs(
                      moment(phatTuEdit.ngaySinh).format(dateFormat),
                      dateFormat
                    )
                  : ""}
              format={dateFormat}
            />
          </Form.Item>
          <Form.Item
            style={{
              display: "inline-block",
              width: "calc(33% - 16px)",
            }}
            label="Ngày xuất gia"
          >
            <DatePicker
              defaultValue={
                phatTuEdit.ngayXuatGia !== null
                  ? dayjs(
                      moment(phatTuEdit.ngayXuatGia).format(dateFormat),
                      dateFormat
                    )
                  : ""
              }
              format={dateFormat}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            style={{
              display: "inline-block",
              width: "calc(33% - 16px)",
            }}
            label="Giới tính"
          >
            <Select
            value={formik.values.gioiTinh}
            onChange={handleChangeSelect("gioiTinh")}
              options={[
                {
                  value: 1,
                  label: "Nam",
                },
                {
                  value: 2,
                  label: "Nữ",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            style={{
              display: "inline-block",
              width: "calc(33% - 16px)",
              margin: "0 16px",
            }}
            label="Trạng thái phật tử"
          >
            <Select
           value={formik.values.daHoanTuc}
            onChange={handleChangeSelect("daHoanTuc")}
              options={[
                {
                  value: false,
                  label: "Chưa hoàn tục",
                },
                {
                  value: true,
                  label: "Đã hoàn tục",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            style={{
              display: "inline-block",
              width: "calc(33% - 16px)",
            }}
            label="Ngày hoàn tục"
          >
            <DatePicker
              defaultValue={
                phatTuEdit.ngayHoanTuc !== null
                  ? dayjs(
                      moment(phatTuEdit.ngayHoanTuc).format(dateFormat),
                      dateFormat
                    )
                  : ""
              }
              format={dateFormat}
              onChange={handleChangeDate("ngayHoanTuc")}
            />
          </Form.Item>
        </Form.Item>
        <div className="text-center">
          <Button className="button_update" htmlType="submit">
            Lưu thay đổi
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
