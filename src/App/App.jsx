import { useEffect, useState } from "react";
import "./App.css";
import { getPhotos } from "../image-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

function App() {
	const [photos, setPhotos] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [page, setPage] = useState(1);

	useEffect(() => {
		if (searchQuery.trim() === "") {
			return;
		}

		async function fetchPhotos() {
			try {
				setIsError(false);
				setIsLoading(true);
				const data = await getPhotos(searchQuery, page);
				setPhotos((prevState) => [...prevState, ...data]);
			} catch {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		}

		fetchPhotos();
	}, [searchQuery, page]);

	const handleSearch = (topic) => {
		setSearchQuery(topic);
		setPage(1);
		setPhotos([]);
	};

	const handleIsEmpty = () => {
		toast.error("Please, input your response!");
	};

	const increasePage = () => {
		setPage(page + 1);
	};

	return (
		<>
			<SearchBar onSearch={handleSearch} onEmpty={handleIsEmpty} />
			<Toaster position="top-right" />
			{isError && <ErrorMessage />}
			{photos.length > 0 && <ImageGallery data={photos} />}
			{isLoading && <Loader />}
			{photos.length > 0 && !isError && <LoadMoreBtn onClick={increasePage} />}
		</>
	);
}

export default App;
