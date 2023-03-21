import axios from 'axios';

const API_Location = `https://api.openweathermap.org/data/2.5/weather?`;
const API_Key = `d550366b3e6152d7eb818783a7958475`;
export const getLocation = async (location) => {
	const LINK = `${API_Location}lat=${location.lat}&lon=${location.lon}&appid=${API_Key}`;

	const response = await axios.get(LINK);

	return response.data;
};
