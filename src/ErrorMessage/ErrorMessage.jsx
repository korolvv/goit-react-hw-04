import css from "./ErrorMessage.module.css";
export default function ErrorMessage() {
	return (
		<div className={css.wrapper}>
			<p>Something went wrong! Please try again.</p>
		</div>
	);
}
