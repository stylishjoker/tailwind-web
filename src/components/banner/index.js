import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import classes from './banner.module.css';

import { setScrollBtn } from '../../feature/scrollBtn';

const Banner = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const handleScroll = () => {
			const position = window.scrollY;
			dispatch(setScrollBtn(position));
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
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
