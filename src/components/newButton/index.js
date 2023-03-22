import { Link } from 'react-router-dom';
import classes from './newButton.module.css';

const NewButton = (props) => {
	const { color, bg, text, link, callback, border } = props;
	if (link) {
		<div className={classes.wrapper + ` ${bg} ${color} ${border}`}>
			<Link to={link}>
				<span>{text}</span>
			</Link>
		</div>;
	}
	return (
		<div
			className={classes.wrapper + ` ${bg} ${color} ${border}`}
			onClick={callback}>
			<span>{text}</span>
		</div>
	);
};
export default NewButton;
