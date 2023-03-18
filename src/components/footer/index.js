import { ListFooter } from '../../router';
import CardFooter from '../cardFooter';
import ListLogo from '../ListLogo';

const Footer = () => {
	return (
		<div className="bg-[#202124] text-[#ababab]">
			<div className="container m-auto">
				<div className="flex items-baseline py-14 border-b-[1px] flex-row justify-between xsm:px-10">
					{ListFooter.map((item, index) => (
						<CardFooter key={index} data={item} />
					))}
				</div>
				<div className="mt-[20px] center_row justify-between">
					<span className="text-white">Copyright © 2023 KFC Vietnam</span>
					<ListLogo />
				</div>
			</div>
		</div>
	);
};

export default Footer;
