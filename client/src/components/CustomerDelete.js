import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

const CustomerDelete = ({ stateRefresh, id }) => {
  const [open, setOpen] = useState(false);

  const deleteCustomer = (id) => {
    const url = "/api/customers/" + id;
    fetch(url, {
      method: "DELETE",
    }).then(stateRefresh());
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          handleClickOpen();
        }}
      >
        삭제
      </Button>
      <Dialog open={open}>
        <DialogTitle onClose={() => handleClose()}>삭제 경고</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>선택한 고객 정보가 삭제됩니다.</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => deleteCustomer(id)}
          >
            삭제
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleClose(id)}
          >
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomerDelete;
