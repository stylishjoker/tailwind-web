import Banner from '../../components/banner';

const LayoutPanes = ({ children }) => {
	return (
		<div className="pt-[110px]">
			<Banner />
			<div>{children}</div>
		</div>
	);
};

export default LayoutPanes;
