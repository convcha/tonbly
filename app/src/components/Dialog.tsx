import {
  Button,
  Dialog as MuiDialog,
  DialogActions,
  DialogTitle
} from "@material-ui/core";
import React, { useState } from "react";

export const useConfirmationDialog = (
  title: string,
  confirmActionLabel: string,
  onConfirm: () => void
) => {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const Dialog = () => {
    return (
      <MuiDialog open={open} onClose={closeDialog}>
        <DialogTitle>{title}</DialogTitle>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            キャンセル
          </Button>
          <Button onClick={onConfirm} color="primary" autoFocus>
            {confirmActionLabel}
          </Button>
        </DialogActions>
      </MuiDialog>
    );
  };

  return [Dialog, openDialog, closeDialog];
};
