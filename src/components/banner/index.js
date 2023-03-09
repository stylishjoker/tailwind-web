import classes from './banner.module.css';
import { Link } from 'react-router-dom';

const Banner = () => {
	return (
		<div className="center_row p-3 justify-center bg-[#202124]">
			<span className={classes.span}>đặt ngay</span>
			<div className={'list_logo ' + classes.toHome}></div>
			<span className={classes.span}>giao hàng</span>
			<div className={'list_logo ' + classes.pickUp}></div>
			<span className={classes.span}>hoặc mang đi</span>
			<Link className="shadow-btn bg-[#e4002b] rounded-full px-6 py-3 text-btn">
				Bắt đầu đặt hàng
			</Link>
		</div>
	);
};
export default Banner;
