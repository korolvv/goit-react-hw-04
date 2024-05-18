import { ColorRing } from "react-loader-spinner";
import css from "./Loader.module.css";
export default function Loader() {
	return (
		<div className={css.wrapper}>
			<ColorRing
				className={css.wrapper}
				visible={true}
				height="100"
				width="100"
				ariaLabel="color-ring-loading"
				wrapperStyle={{}}
				wrapperClass="color-ring-wrapper"
				colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
			/>
		</div>
	);
}
