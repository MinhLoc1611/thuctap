import React, { useEffect, useState } from "react";
import { Select, Button, Input, Form, DatePicker } from "antd";
import {
  EditOutlined,
  SearchOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { deleteDaoTrangAction, getArrChuTriAction, getArrDaoTrangAction, setDaoTrangEditAction } from "../redux/actions/daoTrangAction";
import ModalDaoTrang from "../components/ModalDaoTrang";

const tableStyle = {
  backgroundColor: "#fff",
  padding: "16px",
  borderRadius: "8px",
};
const buttonStyle = {
  backgroundColor: "#52c41a",
  color: "white",
};

export default function DSDaoTrang() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title,setTitle] = useState();
  const { arrDaoTrang, paramDaoTrang, arrChuTri } = useSelector(
    (state) => state.daoTrangReducer
  );
  const dispatch = useDispatch();
  let { pageSize, totalCount, totalPage } = arrDaoTrang.pagination;

  const setPage = () => {
    let options = [];
    for (let i = 0; i < totalPage; i++) {
      options.push({
        value: i + 1,
        label: `Hiển thị ${i * pageSize + 1} - ${
          (i + 1) * pageSize > totalCount ? totalCount : (i + 1) * pageSize
        } of ${totalCount}`,
      });
    }
    return options;
  };

  const onFinish = (values) => {
    let date = "";
    if(values.thoiGian !== null && "" && undefined){
        date = moment(values.thoiGian).format("YYYY-MM");
    } 
    
    let newParam = {
      ...values,
      pageNumber: 1,
      pageSize: 25,
      thoiGian: date,
    };
    dispatch(getArrDaoTrangAction(newParam))
  };

  const handleChangePage = (value) => {
    const newParam = { ...paramDaoTrang, pageNumber: value };
    dispatch(getArrDaoTrangAction(newParam));
  };

  useEffect(() => {
    dispatch(getArrDaoTrangAction(paramDaoTrang))
    dispatch(getArrChuTriAction())
  }, [dispatch, paramDaoTrang]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = (e) => {
    setIsModalOpen(false);
  };

  const renderDaoTrang = () => {
    return arrDaoTrang.data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.noiToChuc}</td>
          <td>{item.nguoiChuTri}</td>
          <td>{item.thoiGianToChuc}</td>
          <td>{item.soThanhVienThamGia}</td>
          <td>
            <Button
              onClick={() => {
                setTitle("Chỉnh sửa đạo tràng")
                dispatch(setDaoTrangEditAction(item))
                showModal()
              }}
              style={buttonStyle}
              className="mr-2"
              shape="circle"
              icon={<EditOutlined />}
              size="large"
            />
            <Button
              className="ms-3"
              onClick={() => {
                dispatch(deleteDaoTrangAction(item.id))
                dispatch(getArrDaoTrangAction(paramDaoTrang))
              }}
              style={{ backgroundColor: "red", color: "white" }}
              shape="circle"
              icon={<DeleteOutlined />}
              size="large"
            />
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="container mt-3">
      <ModalDaoTrang
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        param={paramDaoTrang}
        title={title}
        arrChuTri={arrChuTri}
      />
      <div>
        <span>Home</span>
        <span className="mx-3">
          <i className="fa fa-angle-right"></i>
        </span>
        <span>Danh sách đạo tràng</span>
      </div>
      <h3 style={{ fontWeight: "300" }}>Danh sách đạo tràng</h3>
      <div style={tableStyle}>
        <Form
          onFinish={onFinish}
          layout="vertical"
          initialValues={{
            thoiGian: "",
            daKetThuc: "",
            ten: "",
          }}
        >
          <div className="d-flex justify-content-between">
            <h5 className="mb-3" style={{ fontWeight: "400" }}>
              Tìm kiếm đạo tràng
            </h5>
            <Button
              icon={<SearchOutlined />}
              shape="circle"
              size="large"
              htmlType="submit"
              style={{ backgroundColor: "#52c41a", color: "white" }}
            />
          </div>
          <div className="row">
            <div className="col-3 mb-2">
              <Form.Item name="ten" style={{ marginBottom: 0 }} label="Nơi tổ chức">
                <Input />
              </Form.Item>
            </div>
            <div className="col-3 mb-2">
              <Form.Item
                name="thoiGian"
                style={{ marginBottom: 0 }}
                label="Thời gian"
              >
                <DatePicker format={"MM/YYYY"} picker="month" />
              </Form.Item>
            </div>
            <div className="col-3 mb-2">
              <Form.Item
                name="daKetThuc"
                style={{ marginBottom: 0 }}
                label="Trạng thái đạo tràng"
              >
                <Select
                  style={{ width: "100%" }}
                  options={[
                    {
                      value: "",
                      label: "Tất cả",
                    },
                    {
                      value: false,
                      label: "Chưa kết thúc",
                    },
                    {
                      value: true,
                      label: "Đã kết thúc",
                    },
                  ]}
                />
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
      <div className="mt-3" style={tableStyle}>
        <div className="d-flex justify-content-between mb-3">
          <div>
            <Select
              defaultValue={1}
              onChange={handleChangePage}
              options={setPage()}
            />
          </div>
          <div className="d-flex">
            <Button onClick={()=>{
                setTitle("Thêm đạo tràng")
                dispatch(setDaoTrangEditAction({noiToChuc: "",
                nguoiChuTriId: "",
                thoiGianToChuc: "",
                daKetThuc: "",
                noiDung: ""}))
                showModal()
            }} size="large" style={buttonStyle}>
              Thêm đạo tràng
            </Button>
          </div>
        </div>
        <table
          style={{ fontSize: 16 }}
          className="table table-striped text-center align-middle table-bordered"
        >
          <tbody>
            <tr>
              <th>Nơi tổ chức</th>
              <th>Người trụ trì</th>
              <th>Thời gian tổ chức</th>
              <th>Số người tham gia</th>
              <th></th>
            </tr>
            {renderDaoTrang()}
          </tbody>
        </table>
      </div>
    </div>
  );
}
