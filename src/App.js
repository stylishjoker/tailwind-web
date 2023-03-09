import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { Provider } from 'react-redux';

import DefaultLayout from './layout/layoutWeb';
import ObjectNavigates from './router';

function App() {
	return (
		<Routes>
			{ObjectNavigates.map((route, index) => {
				let Layout = DefaultLayout;
				if (route.layout) {
					Layout = route.layout;
				} else if (route.layout === null) {
					Layout = Fragment;
				}
				const Page = route.component;
				return (
					<Route
						key={index}
						path={route.path}
						element={
							<Layout>
								<Page />
							</Layout>
						}
					/>
				);
			})}
		</Routes>
	);
}

export default App;
