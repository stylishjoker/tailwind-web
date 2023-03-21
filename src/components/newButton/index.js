import { Link } from 'react-router-dom';

const NewButton = (props) => {
	const { color, bg, text, link, callback } = props;
	return (
		<div onClick={callback}>
			<Link to={link}>
				<span>{text}</span>
			</Link>
		</div>
	);
};
export default NewButton;
