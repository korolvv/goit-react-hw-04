import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ data, isOpen }) {
	return (
		<>
			<ul className={css.list}>
				{data.map((item) => {
					return (
						<li className={css.item} key={item.id}>
							<ImageCard
								urls={item.urls}
								alt={item.alt_description}
								getUrl={isOpen}
								likes={item.likes}
								user={item.user.name}
							/>
						</li>
					);
				})}
			</ul>
		</>
	);
}
