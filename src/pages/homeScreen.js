import { useEffect, useState } from 'react';
import CardList from '../components/cardList';
import Sliders from '../components/slider';
import { getData } from '../firebase';
import LayoutPanes from '../layout/layoutPane';
import classes from './homeScreen.module.css';

const HomeScreen = () => {
	const [food, setFood] = useState([]);
	const [combo, setCombo] = useState([]);

	const fetchData = async () => {
		setFood(await getData('DanhMucMonAn'));
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			<LayoutPanes>
				<Sliders />
				<div className="container md-3 p-9 m-auto">
					<h2 className={classes.title}>
						<span>Danh mục món ăn</span>
					</h2>
					<div className="w-100 center_row flex-wrap justify-center">
						{food.map((item) => (
							<CardList data={item} />
						))}
					</div>
				</div>
			</LayoutPanes>
		</>
	);
};

export default HomeScreen;
