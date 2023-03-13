import HomeScreen from "../pages/homeScreen";
import KhuyenMai from "../pages/khuyen-mai";
import MenuScreen from "../pages/menuScreen";
import HeThongNhaHang from "../pages/he-thong-nha-hang";

const ObjectNavigates = [
  {
    id: 1,
    path: "/",
    name: "home",
    component: HomeScreen,
  },
  {
    id: 2,
    path: "/menuScreen",
    name: "Thực đơn",
    component: MenuScreen,
  },
  {
    id: 3,
    path: "/khuyen-mai",
    name: "Khuyến mãi",
    component: KhuyenMai,
  },
  {
    id: 4,
    path: "/he-thong-nha-hang",
    name: "Hệ thống cửa hàng",
    component: HeThongNhaHang,
  },
];

  


export default ObjectNavigates;