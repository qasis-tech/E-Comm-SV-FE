import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import { InputAdornment, IconButton, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

import BackgroundImage from "../../../assets/bg.jpg";

import "./login.styles.scss";
import { authCheck } from "../../../routes/auth";
import Loader from "../../../components/Loader";

function LoginPage() {
  const navigate = useNavigate();
  const [isChecked, setCheckBox] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [isLoading, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "" } });
  const URL = process.env.BASE_URL;

  useEffect(() => {
    const loginFromLocals = localStorage.getItem("loginDetails");
    if (loginFromLocals) {
      const parsedDetails = JSON.parse(loginFromLocals);
      setValue("email", parsedDetails.email);
      setValue("password", parsedDetails.password);
      setCheckBox(true);
    }
  }, []);

  const handleLogin = ({ email, password }) => {
    setLoader(true);
    let payload = { email: email, password: password };
    axios
      .post("http://localhost:4000/login", payload, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setLoader(false);
        console.log("REsss", res);

        if (res.data) {
          if (isChecked) {
            localStorage.setItem(
              "loginDetails",
              JSON.stringify({ email, password })
            );
            localStorage.setItem("LoginDatas", JSON.stringify(res.data));
          } else {
            localStorage.removeItem("loginDetails");
          }
          // const { isUser, isAdmin } = authCheck();
          // if (isUser) {
          //   navigate("/");
          // } else {
          //   navigate("/admin");
          // }
        }
      })

      .catch((error) => {
        setLoader(false);
        console.log("RESS Err", error);
      });

    // navigate("/admin");
  };
  const style = { BackgroundImage: "url('../../../assets/bg.jpg')" };

  // const { data, error, loaded } =
  return (
    <div
      className="login-section"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="container">
        <div className="formWraper">
          <div className="formDiv">
            <form onSubmit={handleSubmit(handleLogin)}>
              <h2>Login</h2>
              <p className="text"> Sign Up with Social Media</p>
              <div className="socialBtn">
                <div className="facebook icon">
                  <FacebookIcon className="icons-size" />
                </div>
                <div className="twitter icon">
                  <GoogleIcon className="icons-size" />
                </div>
              </div>
              <hr />
              <div className="orDiv">Or</div>
              <p className="text">Sign Up with Email Address</p>
              <TextField
                id="login-username"
                variant="outlined"
                size="small"
                label="Email"
                className="text-field"
                {...register("email", {
                  required: "Email ID is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Invalid email Id ( eg: example@mail.com ) ",
                  },
                })}
                fullWidth
                error={errors?.email}
                style={{ color: "#fff" }}
              />
              <div className="error">{errors?.email?.message}</div>
              <TextField
                label="Password"
                size="small"
                fullWidth
                className="password"
                variant="outlined"
                type={isVisible ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 charecter",
                  },
                })}
                InputProps={{
                  // style: { border: "2px groove green" },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setVisible(!isVisible)}
                        edge="end"
                      >
                        {!isVisible ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={errors?.password}
              />
              <div className="error">{errors?.password?.message}</div>
              <div className="checkBox">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <span className="text">Keep me signed in</span>
              </div>

              {isLoading ? (
                <Loader />
              ) : (
                <button className="btn btn-success" type="submit">
                  SIGN IN
                </button>
              )}
              <div className="forgotpassword-link">
                <p>
                  <a
                    href="#"
                    className="text"
                    onClick={() => navigate("/forgotpassword")}
                  >
                    Forgot Password
                  </a>{" "}
                </p>
              </div>
              <div className="signup-link">
                <p className="text">
                  Create new account?
                  <a
                    href="#"
                    className="text"
                    onClick={() => navigate("/register", { replace: true })}
                  >
                    Sign Up
                  </a>{" "}
                </p>
              </div>
            </form>
          </div>
          <div className="welcomeDiv">
            <h2>Welcome Back!</h2>
            <p className="text">
              Get in touch with us for our news letter and more updates.
            </p>
            <button
              className="btn btn2"
              onClick={() => navigate("/register", { replace: true })}
            >
              SIGN UP
            </button>
            <div className="forgot-link">
              <a
                href="#"
                className="text"
                onClick={() => navigate("/forgotpassword")}
              >
                Forgot Password
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
