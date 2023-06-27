import React, { useEffect, useState } from "react";
import { Select, Button, Input, Form } from "antd";
import { EditOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";
import ModalProfile from "../components/ModalPhatTu";
import { useDispatch, useSelector } from "react-redux";
import {
  getArrPhatTuAction,
  setPhatTuEditAction,
} from "../redux/actions/userAction";

const tableStyle = {
  backgroundColor: "#fff",
  padding: "16px",
  borderRadius: "8px",
};
const imgStyle = {
  width: 45,
  height: "100%",
  border: "none",
  borderRadius: "50%",
};
const buttonStyle = {
  backgroundColor: "#52c41a",
  color: "white",
  text: "center",
};

export default function DSPhatTu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flag, setFlag] = useState();

  const { arrPhatTu, param, phatTuEdit } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();

  let { pageSize, totalCount, totalPage } = arrPhatTu.pagination;

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

  const handleChangePage = (value) => {
    const newParam = { ...param, pageNumber: value };
    dispatch(getArrPhatTuAction(newParam));
  };

  const onFinish = (values) => {
    let newParam = {
      ...values,
      pageNumber: 1,
      pageSize: 25,
    };
    dispatch(getArrPhatTuAction(newParam));
  };

  useEffect(() => {
    dispatch(getArrPhatTuAction(param));
  }, [dispatch, param]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = (e) => {
    setIsModalOpen(false);
  };
  function buttonUpdate(item, callback) {
    dispatch(setPhatTuEditAction(item));
    callback();
  }
  const renderPhatTu = () => {
    return arrPhatTu.data.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <Button
              onClick={() => {
                setFlag("Thông tin người dùng");
                buttonUpdate(item, showModal);
              }}
              style={buttonStyle}
              icon={<UserOutlined />}
              shape="circle"
            />
          </td>
          <td>
            <div className="d-flex align-items-center">
              <div>
                {item.anhChup !== null ? (
                  <img style={imgStyle} src={item.anhChup} alt="avt" />
                ) : (
                  <img style={imgStyle} src="./img/avtUser.jpg" alt="..." />
                )}
              </div>
              <div className="ms-1 text-start">
                <span>
                  {item.ho} {item.tenDem} {item.ten}
                </span>
                <br />
                <span>{item.email}</span>
              </div>
            </div>
          </td>
          <td>{item.ngayXuatGia}</td>
          <td>{item.soDienThoai}</td>
          <td>{item.soBuoiThamGia}</td>
          <td>
            <Button
              onClick={() => {
                setFlag("Cập nhật người dùng");
                buttonUpdate(item, showModal);
              }}
              style={buttonStyle}
              shape="circle"
              icon={<EditOutlined />}
              size="large"
            />
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="container mt-3">
      <ModalProfile
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        phatTuEdit={phatTuEdit}
        param={param}
        flag={flag}
      />
      <div>
        <span>Home</span>
        <span className="mx-3">
          <i className="fa fa-angle-right"></i>
        </span>
        <span>Giám sát học tập</span>
      </div>
      <h3 style={{ fontWeight: "300" }}>Giám sát học tập</h3>
      <div style={tableStyle}>
        <Form onFinish={onFinish} layout="vertical" initialValues={param}>
          <div className="d-flex justify-content-between">
            <h5 className="mb-3" style={{ fontWeight: "400" }}>
              Tìm kiếm phật tử
            </h5>
            <Button
              style={buttonStyle}
              icon={<SearchOutlined />}
              shape="circle"
              size="large"
              htmlType="submit"
            />
          </div>
          <div className="row">
            <div className="col-3 mb-2">
              <Form.Item name="ten" style={{ marginBottom: 0 }} label="Tên">
                <Input />
              </Form.Item>
            </div>
            <div className="col-3 mb-2">
              <Form.Item
                name="phapDanh"
                style={{ marginBottom: 0 }}
                label="Pháp danh"
              >
                <Input />
              </Form.Item>
            </div>
            <div className="col-3 mb-2">
              <Form.Item name="email" style={{ marginBottom: 0 }} label="Email">
                <Input />
              </Form.Item>
            </div>
            <div className="col-3 mb-2">
              <Form.Item
                name="gioiTinh"
                style={{ marginBottom: 0 }}
                label="Giới tính"
              >
                <Select
                  options={[
                    {
                      value: "",
                      label: "Tất cả",
                    },
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
            </div>
            <div className="col-3 mb-2">
              <Form.Item
                name="daHoanTuc"
                style={{ marginBottom: 0 }}
                label="Trạng thái phật tử"
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
                      label: "Chưa hoàn tục",
                    },
                    {
                      value: true,
                      label: "Đã hoàn tục",
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
            <div className="sap-xep">
              <Select
                defaultValue="sapXep"
                style={{
                  width: 100,
                }}
                bordered={false}
                options={[
                  {
                    value: "sapXep",
                    label: "Sắp xếp",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <table
          style={{ fontSize: 16 }}
          className="table table-striped text-center align-middle table-bordered"
        >
          <tbody>
            <tr>
              <th></th>
              <th>Phật tử</th>
              <th>Ngày xuất gia</th>
              <th>Số điện thoại</th>
              <th>Số buổi đạo tràng đã tham gia</th>
              <th></th>
            </tr>
            {renderPhatTu()}
          </tbody>
        </table>
      </div>
    </div>
  );
}
