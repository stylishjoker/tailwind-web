import { Link } from 'react-router-dom';

import classes from './cardList.module.css';

const CardList = (props) => {
	const { link, name, path, id } = props.data;
	return (
		<div className={`shadow-btn rounded-md ` + classes.wrapper}>
			<Link to={`info` + id} className="p-6">
				<img src={link} alt="kfc" />
				<span>{name}</span>
			</Link>
		</div>
	);
};
export default CardList;
