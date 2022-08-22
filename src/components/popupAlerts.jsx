import { useReactiveVar } from "@apollo/client";
import { Alert, Slide, Snackbar } from "@mui/material";
import { useState, useEffect } from "react";
import { popupVar } from "../utils/globalVar";

function Transition(props) {
  return <Slide {...props} direction="left" />;
}

const PopupAlert = ({ show, message, type }) => {
  const popups = useReactiveVar(popupVar);
  const severity = ["error", "warning", "info", "success"];
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    if (show) {
      setEnable(show);
      setTimeout(() => {
        setEnable(false);
        // popupVar({ show: false, message: "" });
      }, 3500);
    }
  }, [show]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={enable}
      message={message}
      TransitionComponent={Transition}
    >
      <Alert
        style={{ width: 250, height: "auto" }}
        severity={type ? type : severity[0]}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default PopupAlert;
