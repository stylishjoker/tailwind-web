import { useState } from 'react';
import Option from './option';
import MainNavigates from '../../router/mainNavigate';
import Menu from './menu';

const Header = () => {
	const [show, setShow] = useState(false);
	return (
		<header className="border-b-[1px] border-[#ccc] w-screen z-10 fixed bg-white">
			<div className="container align-items-center m-0 m-auto py-4 center_row justify-between ">
				<MainNavigates />
				<Option callback={() => setShow(!show)} />
			</div>
			<Menu data={show} callback={() => setShow(!show)} />
		</header>
	);
};
export default Header;
