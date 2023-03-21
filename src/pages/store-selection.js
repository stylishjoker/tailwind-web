import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import classes from './store-selection.module.css';
import { getLocation } from '../api';
import { setLocation } from '../feature/operate';
import { Link } from 'react-router-dom';

const StoreSelection = () => {
	const dispacth = useDispatch();
	const [show, setShow] = useState(true);
	const [error, setError] = useState('');

	const handlePosition = async () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					const newPosition = {
						lat: position.coords.latitude,
						lon: position.coords.longitude,
					};
					const result = await getLocation(newPosition);
					const data = `${result.locality} ${result.city} ${result.countryName}`;
					dispacth(setLocation(data));
				},
				(error) => {
					console.log(error);
				}
			);
		} else {
			setError('Định vị không được sử dụng trong trang web này');
		}
	};
	return (
		<div
			className={'md:pt-[110px] xsm:pt-[74px] center_col ' + classes.wrapper}>
			<h1 className="mt-[50px] mb-[30px] text-white ">Bắt đầu đặt hàng</h1>
			<div
				className={
					'rounded-sm shadow-btn w-[500px] center_col ' + classes.content
				}>
				<ul className="flex flex-row w-[100%] justify-around cursor-pointer">
					<li
						onClick={() => setShow(true)}
						className={show ? classes.select : classes.notSelect}>
						<span>Giao hàng tận nơi</span>
					</li>
					<li
						onClick={() => setShow(false)}
						className={show ? classes.notSelect : classes.select}>
						<span>Đặt hàng đến lấy</span>
					</li>
				</ul>
				<div className={'center_col p-6 ' + classes.location}>
					<Link to={'/menuScreen'} onClick={handlePosition} className="bg-red">
						Sử dụng vị trí hiện tại của tôi &gt;
					</Link>
					<span>{error}</span>
					<div className={classes.inputLocal}>
						<input
							className={'p-4 w-[100%] ' + (show ? 'block' : 'hidden')}
							type={'text'}
							placeholder="Nhập địa chỉ của bạn hoặc nơi gần bạn"
						/>
						<input
							className={'p-4 w-[100%] ' + (!show ? 'block' : 'hidden')}
							type={'text'}
							placeholder="Nhập địa chỉ tỉnh thành phố của bạn"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default StoreSelection;
