import { Link } from 'react-router-dom';

const CardFooter = (props) => {
	const { name, options } = props.data;
	return (
		<div className="container">
			<span className="text-[#fff] tracking-[1px] capitalize font-semibold">
				{name}
			</span>
			<ul>
				{options.map((item, index) => (
					<li key={index}>
						<Link to={item.path}>{item.nameOption}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CardFooter;
