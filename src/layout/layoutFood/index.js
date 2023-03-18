const LayoutFood = ({ children }) => {
	return (
		// <div className=" container flex flex-wrap justify-around">
		<div className=" grid grid-flow-row gap-8 xsm:gap-0  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
			{children}
		</div>
	);
};
export default LayoutFood;
