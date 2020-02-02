import React, { useContext } from "react";
import { Grid, Modal as MuiModal, Backdrop, Fade } from "@material-ui/core";
import { useObserver } from "mobx-react";

import { Form } from "modules/cart/form";
import { SCManagerContext } from "modules/context/sc-manager-context";
import { useStyles } from "./style";

export const Modal = () => {
  const classes = useStyles();
  const managerStore = useContext(SCManagerContext);

  const handleClose = () => managerStore.toggleIsOpen();

  return useObserver(() =>
    <MuiModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={managerStore.open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={managerStore.open}>
        <Form />
      </Fade>
    </MuiModal>
  );
};
