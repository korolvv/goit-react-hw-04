import Modal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ baseUrl, isModalOpen, isModalClose }) {
	Modal.setAppElement("#root");

	return (
		<Modal
			closeTimeoutMS={2000}
			isOpen={isModalOpen}
			onRequestClose={isModalClose}
			contentLabel="Modal window with larger image"
			shouldCloseOnEsc={true}
			shouldCloseOnOverlayClick={true}>
			<img className={css.img} src={baseUrl.url} alt={baseUrl.alt} />
		</Modal>
	);
}
