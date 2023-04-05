import React, { useEffect, useState, useRef } from 'react';
import { getProducts } from '../feature/product';
import { useSelector, useDispatch } from 'react-redux';
import { productsSelector, scrollBtnSelector } from '../app/store';
import LayoutPanes from '../layout/layoutPane';
import LayoutFood from '../layout/layoutFood';
import CardFood from '../components/cardFood';
import { Link as LinkScroll } from 'react-scroll';

const getType = (data) => {
	const newData = data.map((item) => {
		return item.type;
	});
	return Array.from(new Set(newData));
};

const MenuScreen = () => {
	const dispatch = useDispatch();
	const ref = useRef(null);
	const products = useSelector(productsSelector);
	const scroll = useSelector(scrollBtnSelector);
	const [loading, setLoading] = useState(true);
	const [menu, setMenu] = useState('món mới');
	useEffect(() => {
		dispatch(getProducts());
		setLoading(false);
	}, []);
	console.log(getType(products)[0]);
	return (
		<LayoutPanes>
			{loading && <h2>loading</h2>}
			<div
				ref={ref}
				className={`z-50 w-[100vw] bg-white pt-4 ${
					scroll >= 70 ? 'fixed top-[110px]' : ''
				}`}>
				<ul className="container m-auto center_row border-b-[1px] text-2xl text-[rgba(0,0,0,.5)] uppercase font-bold tracking-tight">
					{getType(products).map((item, index) => {
						return (
							<li
								key={index}
								className={`px-5 cursor-pointer text-hover ${
									item === menu ? 'text-active text-black' : ''
								} hover:text-black`}>
								<LinkScroll
									onClick={() => setMenu(item)}
									to={item}
									spy={true}
									smooth={true}
									offset={-200}
									duration={500}>
									{item}
								</LinkScroll>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="my-4">
				{getType(products).map((item, index) => {
					return (
						<div key={index} className="container m-auto" id={item}>
							<h2 className="text-[28px] font-bold uppercase p-4">{item}</h2>
							<LayoutFood>
								{products.map(
									(_item, _index) =>
										_item.type === item && (
											<CardFood key={_index} data={_item} />
										)
								)}
							</LayoutFood>
						</div>
					);
				})}
			</div>
		</LayoutPanes>
	);
};

export default MenuScreen;
