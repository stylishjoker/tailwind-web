import Slider from 'react-slick';

import { useEffect, useState } from 'react';

import CardList from '../components/cardList';
import Sliders from '../components/slider';
import { getData } from '../firebase';
import LayoutPanes from '../layout/layoutPane';
import classes from './homeScreen.module.css';
import LayoutList from '../layout/layoutList';
import CardFood from '../components/cardFood';
import LayoutFood from '../layout/layoutFood';

const HomeScreen = () => {
	const [food, setFood] = useState([]);
	const [combo, setCombo] = useState([]);

	const fetchData = async () => {
		setFood(await getData('DanhMucMonAn'));
		setCombo(await getData('favoriteList'));
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			<LayoutPanes>
				<Sliders />
				<div className="container  p-9 m-auto">
					<h2 className={classes.title}>
						<span className=" lg:text-[28px] xsm:text-[20px]">
							Danh mục món ăn
						</span>
					</h2>
					<LayoutList>
						{food.map((item) => (
							<CardList data={item} />
						))}
					</LayoutList>
					<h2 className={classes.title + ' mt-10'}>
						<div className={'list_logo ' + classes.avatar}></div>
						<span className="lg:text-[28px] xsm:text-[20px]">
							CÓ THỂ BẠN SẼ THÍCH MÓN NÀY
						</span>
					</h2>
					<LayoutFood>
						{combo.map((item) => (
							<CardFood data={item} />
						))}
					</LayoutFood>
				</div>
				<img
					className="w-100"
					src="https://static.kfcvietnam.com.vn/images/content/home/mobileappbanner/lg/banner.jpg?v=L7wjKL"
					alt="kfc"
				/>
			</LayoutPanes>
		</>
	);
};

export default HomeScreen;
