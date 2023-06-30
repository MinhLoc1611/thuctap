import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import { TOKEN, USER_LOGIN } from "../redux/types/userType";
import { history } from "../config/sever";

const logoStyle = {
  backgroundImage:
    "url(https://insight.lotusacademy.edu.vn/static/img/logo_new.png)",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};
const buttonStyle = {
  height: "42px",
  width: "42px",
  backgroundColor: "#fff",
  alignItems: "center",
  border: "none",
};

const iconStyle = {
  color: "#FF5026",
  fontSize: "22px",
};

const buttonRightStyle = {
  height: "40px",
  width: "40px",
  backgroundColor: "rgb(245, 245, 245)",
  border: "1px solid rgb(245, 245, 245)",
  borderRadius: "50%",
  marginLeft: "8px",
};

export default function HeaderHome(props) {
  const { handleMenu } = props;
  const { userLogin } = useSelector((state) => state.userReducer);
  return (
    <div
      className="d-flex align-item-center justify-content-between"
      style={{ height: 60, padding: "4px 16px" }}
    >
      <div className="d-flex">
        <button onClick={handleMenu} style={buttonStyle}>
          <span
            style={iconStyle}
            className="d-flex align-items-center justify-content-center"
          >
            <i className="fa fa-bars"></i>
          </span>
        </button>
        <div style={{ width: 120, height: "100%" }}>
          <div style={logoStyle}></div>
        </div>
      </div>
      <div className="d-flex align-items-center">
        {_.isEmpty(userLogin) ? (
          <div>
            <button className="btn">
              <NavLink className="text-black" to="/login">
                Login
              </NavLink>
            </button>
            <button className="btn">
              <NavLink className="text-black" to="/register">
                Register
              </NavLink>
            </button>
          </div>
        ) : (
          <div>
            <span
              style={{
                color: "#3f414d",
                fontSize: "16px",
                fontWeight: "600",
                marginRight: "12px",
              }}
            >
              {userLogin.userName}
            </span>
            <button
              className="btn"
              onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(TOKEN);
                history.push("/");
              }}
            >
              Logout
            </button>
          </div>
        )}

        <button style={buttonRightStyle}>
          <span
            style={iconStyle}
            className="d-flex align-items-center justify-content-center"
          >
            <i className="fas fa-desktop"></i>
          </span>
        </button>
        <button style={buttonRightStyle}>
          <span
            style={iconStyle}
            className="d-flex align-items-center justify-content-center"
          >
            <i className="fas fa-comment-alt"></i>
          </span>
        </button>
        <button style={buttonRightStyle}>
          <span
            style={iconStyle}
            className="d-flex align-items-center justify-content-center"
          >
            <i className="fa fa-angle-down"></i>
          </span>
        </button>
      </div>
    </div>
  );
}
