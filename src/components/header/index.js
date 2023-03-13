import { useState } from 'react';

import classes from './header.module.css';
import Option from './option';
import MainNavigates from '../../router/mainNavigate';

const Header = () => {
	const [show, setShow] = useState(false);
	return (
		<header className="border-b-[1px] border-[#ccc] w-screen z-10 fixed bg-white">
			<div className="container align-items-center m-0 m-auto py-4 center_row justify-between ">
				<MainNavigates />
				<Option />
			</div>
		</header>
	);
};
export default Header;
