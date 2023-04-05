import Banner from '../../components/banner';

const LayoutPanes = ({ children }) => {
	return (
		<div className="md:pt-[110px] xsm:pt-[74px]">
			<Banner />
			<>{children}</>
		</div>
	);
};

export default LayoutPanes;
