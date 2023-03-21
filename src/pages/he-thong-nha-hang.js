import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const HeThongNhaHang = () => {
	const defaultProps = {
		center: {
			lat: 21,
			lng: 105,
		},
		zoom: 11,
	};

	return (
		// Important! Always set the container height explicitly
		<div style={{ height: '100vh', width: '100%' }} className="pt-[110px]">
			<GoogleMapReact
				bootstrapURLKeys={{ key: '' }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}>
				<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
			</GoogleMapReact>
		</div>
	);
};

export default HeThongNhaHang;
