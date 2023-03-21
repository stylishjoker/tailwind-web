import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import classes from './banner.module.css';
import { locationSelector } from '../../app/store';
import { setScrollBtn } from '../../feature/operate';

const Banner = () => {
	const dispatch = useDispatch();
	const location = useSelector(locationSelector);
	const handleScroll = () => {
		const position = window.scrollY;
		dispatch(setScrollBtn(position));
	};
	useEffect(() => {
		if (!location) {
			window.addEventListener('scroll', handleScroll);
		}

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	if (location) {
		return (
			<div className="center_row p-3 justify-center bg-[#202124] xsm:flex-col xsm:fixed xsm:w-[100%] xsm:z-10  md:z-2 xsm:bottom-0 md:flex-row md:relative">
				<div className={classes.local}>
					<span className="text-white">{location}</span>
				</div>
			</div>
		);
	}
	return (
		<div className="center_row p-3 justify-center bg-[#202124] xsm:flex-col xsm:fixed xsm:w-[100%] xsm:z-10  md:z-2 xsm:bottom-0 md:flex-row md:relative">
			<div>
				<span className={classes.span}>đặt ngay</span>
				<div className={'list_logo ' + classes.toHome}></div>
				<span className={classes.span}>giao hàng</span>
				<div className={'list_logo ' + classes.pickUp}></div>
				<span className={classes.span}>hoặc mang đi</span>
			</div>
			<div className="block xsm:w-[100%] text-center xsm:mt-2 md:w-max lg:mt-0">
				<Link
					to="/store-selection"
					className="shadow-btn bg-[#e4002b] rounded-full px-6 py-3 text-btn block">
					Bắt đầu đặt hàng
				</Link>
			</div>
		</div>
	);
};
export default Banner;
