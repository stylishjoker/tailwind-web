import { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './mainNavigates.module.css';
import LogoKFC from '../assets/icon/logoKFC';
import ObjectNavigates from '.';

const MainNavigates = () => {
	const [selected, setSelected] = useState(1);
	return (
		<>
			<ul className="items-center flex-row xsm:hidden md:flex">
				{ObjectNavigates.map((item) => {
					if (item.id === 1) {
						return (
							<li key={item.id} onClick={() => setSelected(item.id)}>
								<Link to={item.path}>
									<LogoKFC />
								</Link>
							</li>
						);
					} else {
						return (
							<li
								key={item.id}
								onClick={() => setSelected(item.id)}
								className={
									`lg:ml-6 uppercase font-bold lg:text-lg md:text-sm md:ml-2 ` +
									` ${item.id === selected ? classes.select : ''} `
								}>
								<Link className={classes.hover} to={item.path}>
									{item.name}
								</Link>
							</li>
						);
					}
				})}
			</ul>
		</>
	);
};
export default MainNavigates;
