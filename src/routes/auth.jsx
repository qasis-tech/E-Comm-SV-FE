// import { useNavHooks } from "../hooks/useNavHooks";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const authCheck = async () => {
  let loginDatas = localStorage.getItem("LoginDatas");
  if (loginDatas) {
    let jsonData = await JSON.parse(loginDatas);
    if (jsonData?.role === "user") {
      return { isUser: true, isAdmin: false };
    } else {
      return { isUser: false, isAdmin: true };
    }
  }
};

const AuthCheck = () => {
  const navigate = useNavigate();
  const [loggedType, setLoggedType] = useState();

  useEffect(() => {
    let loginDatas = localStorage.getItem("LoginDatas");
    if (loginDatas) {
      let jsonData = JSON.parse(loginDatas);
      if (jsonData?.role === "user") {
        setLoggedType({ isUser: true, isAdmin: false });
      } else {
        setLoggedType({ isUser: false, isAdmin: true });
      }
    }
  }, []);

  if (loggedType.isUser && !loggedType.isAdmin) {
    return navigate("/");
  } else if (loggedType.isAdmin && !loggedType.isUser) {
    return navigate("/admin");
  }
};

const authLogout = async (cb) => {
  localStorage.removeItem("LoginDatas");
  if (cb) cb();
};

export { authCheck, AuthCheck, authLogout };
