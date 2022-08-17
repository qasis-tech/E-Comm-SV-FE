import { Snackbar } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const PopupAlert = ({ open, message }) => {
  const [show, setShow] = useState(open ? open : false);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3500);
  }, []);
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={show}
      onClose={handleClose}
      message={message}
      key={vertical + horizontal}
    />
  );
};

export default PopupAlert;
