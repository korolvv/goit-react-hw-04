import css from "./ImageCard.module.css";

export default function ImageCard({ urls, alt }) {
	return (
		<div className={css.wrapper}>
			<img className={css.img} src={urls.small} alt={alt} />
		</div>
	);
}
