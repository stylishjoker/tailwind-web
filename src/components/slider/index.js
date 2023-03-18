import { useState, useEffect } from 'react';
import Slider from 'react-slick';

import { getData } from '../../firebase';

const Sliders = () => {
	const [data, setData] = useState([]);
	const fetchData = async () => {
		const result = await getData('slider');
		setData(result);
	};
	const settings = {
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: 'linear',
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div style={{ width: '100%' }}>
			<Slider {...settings}>
				{data.map((item) => {
					return <img key={item.id} src={item.link} alt="" />;
				})}
			</Slider>
		</div>
	);
};
export default Sliders;
