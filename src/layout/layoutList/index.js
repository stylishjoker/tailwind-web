const LayoutList = ({ children }) => {
	return (
		// <div className=" container flex flex-wrap justify-around">
		<div className=" grid grid-flow-row gap-8 xsm:gap-0 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{children}
		</div>
	);
};
export default LayoutList;
