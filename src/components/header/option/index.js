import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LogoUser from '../../../assets/icon/logoUser';
import classes from './option.module.css';
import LogoMenu from '../../../assets/icon/logoMenu';

import { scrollBtnSelector, userSelector } from '../../../app/store';

const Option = (props) => {
	const scrollPosition = useSelector(scrollBtnSelector);
	const userToken = useSelector(userSelector);

	return (
		<div className="center_row cursor-pointer space-x-4 ">
			<Link
				to="/store-selection"
				className={
					(scrollPosition > 180
						? 'lg:block 2xl:block xl:block md:block xsm:hidden '
						: 'hidden') +
					' shadow-btn bg-[#e4002b] rounded-full px-6 py-3 text-btn animated-button'
				}>
				Bắt đầu đặt hàng
			</Link>
			<Link to={userToken.accessToken ? '/user' : '/login'}>
				<LogoUser />
			</Link>
			<Link to={'/cart'} className={`${classes.cart}` + ` logo_cart`}></Link>
			<div onClick={props.callback}>
				<LogoMenu />
			</div>
		</div>
	);
};
export default Option;
