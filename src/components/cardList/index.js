import { Link } from 'react-router-dom';

import classes from './cardList.module.css';

const CardList = (props) => {
	const { link, name, id } = props.data;
	return (
		<div
			className={
				classes.wrapper +
				' shadow-btn  xsm:text-xs xsm:max-w-[250px] sm:max-w-[none] md:max-w-[none] lg:max-w-[none] xl:max-w-[none]'
			}>
			<Link to={`info` + id}>
				<figure>
					<img
						src={link}
						alt="kfc"
						// className="2xl:min-h-272 xl:min-h-232 md:min-h-187 sm:min-h-250"
					/>
				</figure>
				<span>
					{name}
					{'            >'}
				</span>
			</Link>
		</div>
	);
};
export default CardList;
