import { ListFooter } from '../../router';
import CardFooter from '../cardFooter';

const Footer = () => {
	return (
		<div className="bg-[#202124] text-[#ababab]">
			<div className="container m-auto">
				<div className="flex items-baseline">
					{ListFooter.map((item, index) => (
						<CardFooter key={index} data={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Footer;
