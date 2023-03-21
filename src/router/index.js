import HomeScreen from '../pages/homeScreen';
import KhuyenMai from '../pages/khuyen-mai';
import MenuScreen from '../pages/menuScreen';
import HeThongNhaHang from '../pages/he-thong-nha-hang';
import StoreSelection from '../pages/store-selection';
import LoginScreen from '../pages/loginScreen';

import Youtube from '../assets/icon/youtube';
import Twitter from '../assets/icon/twitter';
import Instagram from '../assets/icon/instagram';
import Facebook from '../assets/icon/facebook';

const ObjectNavigates = [
	{
		id: 1,
		path: '/',
		name: 'home',
		component: HomeScreen,
	},
	{
		id: 2,
		path: '/menuScreen',
		name: 'Thực đơn',
		component: MenuScreen,
	},
	{
		id: 3,
		path: '/khuyen-mai',
		name: 'Khuyến mãi',
		component: KhuyenMai,
	},
	{
		id: 4,
		path: '/he-thong-nha-hang',
		name: 'Hệ thống cửa hàng',
		component: HeThongNhaHang,
	},
	{
		id: 5,
		path: '/store-selection',
		component: StoreSelection,
	},
	{
		id: 6,
		path: '/login',
		component: LoginScreen,
	},
];

export const ListFooter = [
	{
		name: 'Danh mục món ăn',
		options: [
			{
				nameOption: 'Ưu đãi',
			},
			{
				nameOption: 'Món mới',
			},
			{
				nameOption: 'Combo 1 người',
			},
			{
				nameOption: 'Combo nhóm',
			},
			{
				nameOption: 'Gà rán - Gà quay',
			},
			{
				nameOption: 'Thức ăn nhẹ',
			},
			{
				nameOption: 'Thức uống & tráng miệng',
			},
		],
	},
	{
		name: 'Về KFC',
		options: [
			{
				nameOption: 'Câu chuyện về chúng tôi',
			},
			{
				nameOption: 'Tin khuyến mãi',
			},
			{
				nameOption: 'Tin tức KFC',
			},
			{
				nameOption: 'Tuyển dụng',
			},
			{
				nameOption: 'Đăt tiệc sinh nhật',
			},
		],
	},
	{
		name: 'Liên hệ KFC',
		options: [
			{
				nameOption: 'Theo dõi đơn hàng',
			},
			{
				nameOption: 'Liên hệ KFC',
			},
		],
	},
	{
		name: 'Chính sách',
		options: [
			{
				nameOption: 'Chính sách hoạt động',
			},
			{
				nameOption: 'Chính sách và quy định',
			},
			{
				nameOption: 'Chính sách bảo mật thông tin',
			},
		],
	},
];
export const Logos = [
	{
		component: Facebook,
		link: 'https://www.facebook.com/KFCVietnam/',
	},
	{
		component: Instagram,
		link: 'https://www.instagram.com/kfc_vietnam/',
	},
	{
		component: Youtube,
		link: 'https://www.youtube.com/user/KFCVietnam2011',
	},
	{
		component: Twitter,
		link: 'https://twitter.com/kfc_vietnam',
	},
];
export default ObjectNavigates;
