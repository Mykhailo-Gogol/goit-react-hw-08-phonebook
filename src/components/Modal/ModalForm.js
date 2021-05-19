import styles from "./ModalForm.module.scss";

// Material
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

// Comps
import Form from "../Form";

const ModalForm = ({ open, onClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => onClose(false)}
        closeAfterTransition
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={styles.modal_container}>
          <Form />
        </div>
      </Modal>
      <Fade in={open}>
        <div></div>
      </Fade>
    </div>
  );
};

export default ModalForm;
