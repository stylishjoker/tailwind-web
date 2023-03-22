import axios from 'axios';
import { Link } from 'react-router-dom';

const API_Location = `https://api.bigdatacloud.net/data/reverse-geocode-client?`;
// const API_Key = `d550366b3e6152d7eb818783a7958475`;
export const getLocation = async (location) => {
	console.log(location);
	const LINK = `${API_Location}latitude=${location.lat}&longitude=${location.lon}&localityLanguage=en`;
	console.log(Link);
	const response = await axios.get(LINK);
	return response.data;
};
