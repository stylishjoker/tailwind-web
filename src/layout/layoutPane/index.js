import Banner from '../../components/banner';

const LayoutPanes = ({ children }) => {
	return (
		<div>
			<Banner />
			<div>{children}</div>
		</div>
	);
};

export default LayoutPanes;
