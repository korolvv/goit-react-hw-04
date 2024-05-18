import { Field, Form, Formik } from "formik";
import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch, onEmpty }) {
	return (
		<>
			<header className={css.header}>
				<Formik
					initialValues={{ value: "" }}
					onSubmit={(values, actions) => {
						onSearch(values.value);
						if (values.value === "") {
							onEmpty();
						}
						actions.resetForm();
					}}>
					<Form className={css.form}>
						<Field
							className={css.input}
							name="value"
							type="text"
							autoComplete="off"
							autoFocus
							placeholder="Search images and photos"
						/>
						<button className={css.btn} type="submit">
							<IoIosSearch className={css.icon} />
						</button>
					</Form>
				</Formik>
			</header>
		</>
	);
}
