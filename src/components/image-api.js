import axios from "axios";

const API_KEY = "ipIr2JqA2EbV6LpsnpW15emC7iIwCwH2pHF9QhTdEQ0";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getPhotos = async (topic, page) => {
	const response = await axios.get("/search/photos", {
		params: {
			client_id: API_KEY,
			query: topic,
			page: page,
			per_page: 10,
		},
	});

	return response.data.results;
};
