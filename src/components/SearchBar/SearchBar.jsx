import { Field, Form, Formik } from "formik";
import { IoIosSearch } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
	const handleIsEmpty = () => {
		toast.error("Please, input your response!");
	};

	return (
		<>
			<header className={css.header}>
				{<Toaster position="top-right" />}
				<Formik
					initialValues={{ value: "" }}
					onSubmit={(values, actions) => {
						if (values.value === "") {
							handleIsEmpty();
							return;
						}
						onSearch(values.value);
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
