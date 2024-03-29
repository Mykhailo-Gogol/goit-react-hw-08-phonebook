import React from "react";

import { modal_container } from "./ModalFormStyle";

// Material
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

// Comps
import Form from "../Form";

type TModalProps = {
  open: boolean;
  onClose: (onClose: boolean) => void;
};

const ModalForm: React.FC<TModalProps> = ({ open, onClose }: TModalProps) => {
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
        <div style={modal_container}>
          <h4 style={{ textAlign: "center" }}>Add contact</h4>
          <Form onClose={onClose} />
        </div>
      </Modal>
      <Fade in={open}>
        <div></div>
      </Fade>
    </div>
  );
};

export default ModalForm;
