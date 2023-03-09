import { Link } from 'react-router-dom';

import LogoUser from '../../../assets/icon/logoUser';
import classes from './option.module.css';
import LogoMenu from '../../../assets/icon/logoMenu';

const Option = () => {
	return (
		<div className="center_row cursor-pointer space-x-4">
			<Link className="shadow-btn bg-[#e4002b] rounded-full px-6 py-3 text-btn">
				Bắt đầu đặt hàng
			</Link>
			<LogoUser />
			<Link to={'/cart'} className={`${classes.cart}` + ` logo_cart`}></Link>
			<LogoMenu />
		</div>
	);
};
export default Option;
