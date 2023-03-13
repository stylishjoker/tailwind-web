import { Link } from 'react-router-dom';
import classes from './cardFood.module.css';

const CardFood = (props) => {
	console.log(props.data);
	const { name, price, id, link, description } = props.data;
	return (
		<div className={classes.wrapper + ' shadow-btn center_col'}>
			<Link to={'/' + id}>
				<figure>
					<img src={link} alt="" />
				</figure>
				<div className={classes.infoItem}>
					<div className={classes.detail_title + ' center_row'}>
						<span>{name}</span>
						<span>
							{price}
							{'₫'}
						</span>
					</div>
					<span>{description}</span>
				</div>
				<button className="bg-[#ccc] p-3 shadow-btn">Thêm</button>
			</Link>
		</div>
	);
};
export default CardFood;
