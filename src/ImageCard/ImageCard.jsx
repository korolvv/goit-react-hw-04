import css from "./ImageCard.module.css";

export default function ImageCard({ urls, alt, getUrl, likes, user }) {
	return (
		<a
			className={css.wrapper}
			onClick={() => getUrl({ url: urls.full, alt: alt })}>
			<img className={css.img} src={urls.small} alt={alt} />
			<div className={css.info}>
				<span>Photo by {user}</span>
				<span>Likes: {likes}</span>
			</div>
		</a>
	);
}
