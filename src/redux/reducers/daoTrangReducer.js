import {
  GET_ARR_DAO_TRANG,
  SET_ARR_CHU_TRI,
  SET_DAO_TRANG_EDIT,
} from "../types/daoTrangType";

const stateDefault = {
  arrDaoTrang: {
    pagination: {
      pageSize: 5,
      pageNumber: 1,
      totalCount: 5,
      totalPage: 1,
    },
    data: [
      {
        noiToChuc: "ABC Organization",
        soThanhVienThamGia: 50,
        nguoiChuTriId: 1,
        nguoiChuTri: "Hoang Van J",
        thoiGianToChuc: "2023-06-20T09:00:00",
        noiDung: "Lorem ipsum dolor sit amet.",
        daKetThuc: false,
        id: 1,
      },
      {
        noiToChuc: "ABC Organization",
        soThanhVienThamGia: 50,
        nguoiChuTriId: 1,
        nguoiChuTri: "Hoang Van J",
        thoiGianToChuc: "2023-06-20T09:00:00",
        noiDung: "Lorem ipsum dolor sit amet.",
        daKetThuc: false,
        id: 91,
      },
      {
        noiToChuc: "XYZ Group",
        soThanhVienThamGia: 30,
        nguoiChuTriId: 2,
        nguoiChuTri: "Nguyen Thi K",
        thoiGianToChuc: "2023-06-21T14:30:00",
        noiDung: "Consectetur adipiscing elit.",
        daKetThuc: true,
        id: 92,
      },
      {
        noiToChuc: "XYZ Group",
        soThanhVienThamGia: 30,
        nguoiChuTriId: 2,
        nguoiChuTri: "Nguyen Thi K",
        thoiGianToChuc: "2023-06-21T14:30:00",
        noiDung: "Consectetur adipiscing elit.",
        daKetThuc: true,
        id: 2,
      },
      {
        noiToChuc: "PQR Association",
        soThanhVienThamGia: 20,
        nguoiChuTriId: 3,
        nguoiChuTri: "Tran Van C",
        thoiGianToChuc: "2023-06-22T11:15:00",
        noiDung: "Sed do eiusmod tempor incididunt.",
        daKetThuc: false,
        id: 3,
      },
    ],
  },
  daoTrangEdit: {
    noiToChuc: "",
    nguoiChuTriId: "",
    thoiGianToChuc: "",
    daKetThuc: "",
    noiDung: "",
  },
  paramDaoTrang: {
    pageNumber: 1,
    pageSize: 25,
  },
  dataDaoTrang: {
    ten: "",
    thoiGian: "",
    daKetThuc: "",
  },
  arrChuTri: [
    {
      id: 1,
      ten: "Hoang Van J",
    },
    {
      id: 2,
      ten: "Nguyen Thi K",
    },
    {
      id: 3,
      ten: "Tran Van C",
    },
  ],
};

export const daoTrangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_ARR_DAO_TRANG: {
      return { ...state, arrDaoTrang: action.arrDaoTrang };
    }
    case SET_DAO_TRANG_EDIT: {
      return { ...state, daoTrangEdit: action.daoTrangEdit };
    }
    case SET_ARR_CHU_TRI: {
      return { ...state, arrChuTri: action.arrChuTri };
    }
    // eslint-disable-next-line no-fallthrough
    default:
      return { ...state };
  }
};
