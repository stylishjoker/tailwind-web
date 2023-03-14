import { Link } from 'react-router-dom';

const CardFooter = (props) => {
	const { name, options } = props.data;
	return (
		<div>
			<span className="text-[#fff] tracking-[1px] capitalize font-semibold mb-2 block">
				{name}
			</span>
			<ul>
				{options.map((item, index) => (
					<li key={index} className="mb-1 hover:text-white text-xs">
						<Link to={item.path}>{item.nameOption}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CardFooter;
