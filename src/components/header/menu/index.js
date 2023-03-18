import { Link } from 'react-router-dom';

import classes from './menu.module.css';
import { ListFooter } from '../../../router';
import ListLogo from '../../ListLogo';

const Menu = (props) => {
	const show = props.data;
	return (
		<div
			className={
				(show ? 'right-[0px]' : 'right-[-350px]') +
				' transition-menu ' +
				classes.wrapper
			}>
			<div className="fixed w-[350px] bg-white z-10">
				<div className={classes.header}>
					<span className={classes.close} onClick={props.callback}>
						&times;
					</span>
				</div>
			</div>
			<div className="pt-[40px]">
				{ListFooter.map((item, index) => {
					return (
						<div key={index} className="p-5 ">
							<span className="text-black tracking-[1px] capitalize font-semibold mb-2 block">
								{item.name}
							</span>
							<ul className="border-b-[1px] border-[#999] pb-4">
								{item.options.map((item) => (
									<li className="text-hover text-sm text-[#333] p-[2px]">
										<Link to={item.path}>{item.nameOption} &raquo;</Link>
									</li>
								))}
							</ul>
						</div>
					);
				})}
			</div>
			<div className={classes.footer + ' center_col p-10'}>
				<ListLogo />
				<span>Copyright © 2023 KFC Vietnam</span>
			</div>
		</div>
	);
};
export default Menu;
