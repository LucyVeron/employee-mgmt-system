import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
} from "@mui/material";
import { DialogProps } from "./interfaces/DialogProps";
import * as React from "react";

export default function AddDialog(props: DialogProps) {
  const { open, onClose } = props;
  const [name, setName] = React.useState("");

  const handleClose = () => {
    onClose(name);
  };

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>New Employee</DialogTitle>
      <DialogContent>
        <Input value={name} onChange={onInput} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}
