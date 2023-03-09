import Sliders from '../components/slider';
import LayoutPanes from '../layout/layoutPane';

const HomeScreen = () => {
	return (
		<>
			<LayoutPanes>
				<Sliders />
				{/* <div className="container">
					<h2>
						<span>Danh mục món ăn</span>
					</h2>
				</div> */}
			</LayoutPanes>
		</>
	);
};

export default HomeScreen;
