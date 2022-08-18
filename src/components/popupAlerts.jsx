import { Alert, Snackbar } from "@mui/material";
import { useState, useEffect } from "react";
import { popupVar } from "../utils/globalVar";

const PopupAlert = ({ show, message }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={show}
      message={message}
      autoHideDuration={3000}
      TransitionComponent={"TransitionRight"}
    >
      <Alert severity="success">{message}</Alert>
    </Snackbar>
  );
};

export default PopupAlert;
