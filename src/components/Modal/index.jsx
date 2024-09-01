import { ModalOverlay } from "./styles";
import PropTypes from "prop-types";

const Modal = ({ children, isOpen, closeModal }) => {
	return (
		isOpen && (
			<ModalOverlay $isOpen={isOpen} onClick={closeModal}>
				{children}
			</ModalOverlay>
		)
	);
};

Modal.propTypes = {
	children: PropTypes.element,
	closeModal: PropTypes.func,
	isOpen: PropTypes.bool,
};

export default Modal;
