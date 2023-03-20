import React, { useState } from 'react';

import classes from './store-selection.module.css';
import { getLocation } from '../api';

const StoreSelection = () => {
	const [show, setShow] = useState(true);

	const handlePosition = async () => {
		navigator.geolocation.getCurrentPosition(async (position) => {
			const newPosition = {
				lat: position.coords.latitude,
				lon: position.coords.longitude,
			};
			const result = await getLocation(newPosition);
			console.log(result);
		});
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
					<a onClick={handlePosition} className="bg-red">
						Sử dụng vị trí hiện tại của tôi &gt;
					</a>
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
