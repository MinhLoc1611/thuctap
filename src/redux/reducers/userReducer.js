import {
  DANG_NHAP_ACTION,
  GET_ARR_PHATTU,
  SET_PHATTU_EDIT,
  TOKEN,
  USER_LOGIN,
} from "../types/userType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  arrPhatTu: {
    pagination: {
      pageSize: 5,
      pageNumber: 1,
      totalCount: 6,
      totalPage: 2,
    },
    data: [
      {
        ho: "Nguyen",
        tenDem: "Van",
        ten: "A",
        phapDanh: null,
        anhChup: null,
        soDienThoai: "123456789",
        email: "nguyenvana@example.com",
        ngaySinh: "1990-01-01T00:00:00",
        ngayXuatGia: null,
        daHoanTuc: false,
        ngayHoanTuc: null,
        gioiTinh: 1,
        kieuThanhVienId: null,
        kieuThanhVien: null,
        ngayCapNhat: null,
        chuaId: null,
        chua: null,
        soBuoiThamGia: 11,
        id: 1,
      },
      {
        ho: "Nguyen",
        tenDem: "Van",
        ten: "AD",
        phapDanh: null,
        anhChup: null,
        soDienThoai: "678901234",
        email: "nguyenvanad@example.com",
        ngaySinh: "1986-04-12T00:00:00",
        ngayXuatGia: null,
        daHoanTuc: false,
        ngayHoanTuc: null,
        gioiTinh: 1,
        kieuThanhVienId: null,
        kieuThanhVien: null,
        ngayCapNhat: null,
        chuaId: null,
        chua: null,
        soBuoiThamGia: 0,
        id: 30,
      },
      {
        ho: "Nguyen",
        tenDem: "Van",
        ten: "AI",
        phapDanh: null,
        anhChup: null,
        soDienThoai: "567890123",
        email: "nguyenvanai@example.com",
        ngaySinh: "1990-05-19T00:00:00",
        ngayXuatGia: null,
        daHoanTuc: false,
        ngayHoanTuc: null,
        gioiTinh: 1,
        kieuThanhVienId: null,
        kieuThanhVien: null,
        ngayCapNhat: null,
        chuaId: null,
        chua: null,
        soBuoiThamGia: 1,
        id: 35,
      },
      {
        ho: "Nguyen",
        tenDem: "Van",
        ten: "AN",
        phapDanh: null,
        anhChup: null,
        soDienThoai: "456789012",
        email: "nguyenvanan@example.com",
        ngaySinh: "1997-05-01T00:00:00",
        ngayXuatGia: null,
        daHoanTuc: false,
        ngayHoanTuc: null,
        gioiTinh: 1,
        kieuThanhVienId: null,
        kieuThanhVien: null,
        ngayCapNhat: null,
        chuaId: null,
        chua: null,
        soBuoiThamGia: 1,
        id: 40,
      },
      {
        ho: "Nguyen",
        tenDem: "Van",
        ten: "AS",
        phapDanh: null,
        anhChup: null,
        soDienThoai: "345678901",
        email: "nguyenvanas@example.com",
        ngaySinh: "1991-05-07T00:00:00",
        ngayXuatGia: null,
        daHoanTuc: false,
        ngayHoanTuc: null,
        gioiTinh: 1,
        kieuThanhVienId: null,
        kieuThanhVien: null,
        ngayCapNhat: null,
        chuaId: null,
        chua: null,
        soBuoiThamGia: 0,
        id: 45,
      },
    ],
  },
  phatTuEdit: {},
  param: {
    pageNumber: 1,
    pageSize: 25,
    ten: "",
    phapDanh: "",
    email: "",
    daHoanTuc: "",
    gioiTinh: "",
  },
  userLogin: user,
};

export const userReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_ARR_PHATTU: {
      return { ...state, arrPhatTu: action.arrPhatTu };
      
    }
    case SET_PHATTU_EDIT: {
      return { ...state, phatTuEdit: action.phatTuEdit };
    }
    case DANG_NHAP_ACTION: {
      const { userLogin } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(userLogin.data));
      localStorage.setItem(TOKEN, userLogin.token);
      return {...state,userLogin:userLogin.data}
    }

    // eslint-disable-next-line no-fallthrough
    default:
      return { ...state };
  }
};
