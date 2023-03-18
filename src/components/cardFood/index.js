import { Link } from 'react-router-dom';
import classes from './cardFood.module.css';

const CardFood = (props) => {
	const { name, price, id, link, description } = props.data;
	return (
		<div className={classes.wrapper + ' shadow-btn'}>
			<Link to={'/' + id} className="flex flex-col">
				<div className="flex sm:flex-row md:flex-col">
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
				</div>
				<button className="bg-[#ccc] lg:p-3 md:p-0 shadow-btn text-white lg:text-sm font-semibold md:text-xs">
					Thêm
				</button>
			</Link>
		</div>
	);
};
export default CardFood;
