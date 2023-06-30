import React from "react";
import { Button, Modal, Form, Input, DatePicker, Select } from "antd";
import moment from "moment";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  createDaoTrangAction,
  getArrDaoTrangAction,
  updateDaoTrangAction,
} from "../redux/actions/daoTrangAction";

dayjs.extend(customParseFormat);
const dateFormat = "DD/MM/YYYY";

export default function ModalDaoTrang(props) {
  const { daoTrangEdit } = useSelector((state) => state.daoTrangReducer);
  const { title, isModalOpen, handleCancel, param, arrChuTri, data } = props;
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      noiToChuc: daoTrangEdit?.noiToChuc,
      nguoiChuTriId: daoTrangEdit?.nguoiChuTriId,
      thoiGianToChuc: daoTrangEdit?.thoiGianToChuc,
      daKetThuc: daoTrangEdit?.daKetThuc,
      noiDung: daoTrangEdit?.noiDung,
    },
    onSubmit: (values) => {
      let newDaoTrang = { ...values };
      if (title === "Chỉnh sửa đạo tràng") {
        newDaoTrang.id = daoTrangEdit.id;
        dispatch(updateDaoTrangAction(newDaoTrang))
      } else if (title === "Thêm đạo tràng") {
        dispatch(createDaoTrangAction(newDaoTrang))
      }
      dispatch(getArrDaoTrangAction(param,data))
      handleCancel();
    },
  });
  const handleChangeDate = (name) => {
    return (value) => {
      let date = moment(value.$d).format("YYYY-MM-DD");
      formik.setFieldValue(name, date);
    };
  };
  const handleChangeSelect = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const formatMoment = (item) => {
    return moment(item).format(dateFormat);
  };
  return (
    <Modal
      width={700}
      title={title}
      open={isModalOpen}
      footer={null}
      onCancel={handleCancel}
    >
      <Form
        layout="vertical"
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 24,
        }}
        style={{
          maxWidth: 700,
        }}
      >
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
            label="Nơi tổ chức"
          >
            <Input
              name="noiToChuc"
              onChange={formik.handleChange}
              value={formik.values.noiToChuc}
            />
          </Form.Item>
          <Form.Item
            style={{
              display: "inline-block",
              width: "calc(50% - 24px)",
              margin: "0 24px",
            }}
            label="Người chủ trì"
          >
            <Select
              value={formik.values.nguoiChuTriId}
              onChange={handleChangeSelect("nguoiChuTriId")}
              options={arrChuTri.map((item, index) => {
                return { value: item.id, label: item.ten };
              })}
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
              width: "calc(50% - 24px)",
            }}
            label="Thời gian tổ chức"
          >
            <DatePicker
              defaultValue={
                daoTrangEdit.thoiGianToChuc !== null && "" && undefined
                  ? dayjs(formatMoment(daoTrangEdit.thoiGianToChuc), dateFormat)
                  : ""
              }
              format={dateFormat}
              onChange={handleChangeDate("thoiGianToChuc")}
            />
          </Form.Item>
          <Form.Item
            style={{
              display: "inline-block",
              width: "calc(50% - 24px)",
              margin: "0 24px",
            }}
            label="Tình trạng đạo tràng"
          >
            <Select
              value={formik.values.daKetThuc}
              onChange={handleChangeSelect("daKetThuc")}
              options={[
                {
                  value: false,
                  label: "chưa kết thúc",
                },
                {
                  value: true,
                  label: "đã kết thúc",
                },
              ]}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item style={{ width: "calc(100% - 24px)" }} label="Nội dung">
          <Input.TextArea
            name="noiDung"
            onChange={formik.handleChange}
            value={formik.values.noiDung}
            rows={4}
          />
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
