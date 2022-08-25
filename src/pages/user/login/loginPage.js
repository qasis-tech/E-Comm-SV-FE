import React, { useState, useEffect } from "react";
import {
  Typography,
  InputAdornment,
  IconButton,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Container,
  Divider,
  Box,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import GoogleIcon from "@mui/icons-material/Google";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./login.styles.scss";
import { useNavigate } from "react-router-dom";
import BackgoundImg from "../../../assets/bg-pic.png";
import BackgroundImage from "../../../assets/bg.jpg";

import axios from "axios";
import { authCheck } from "../../../routes/auth";

function LoginPage() {
  const navigate = useNavigate();
  const [isChecked, setCheckBox] = useState(false);
  const [isVisible, setVisible] = useState(false);
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
    let payload = { email: email, password: password };
    axios
      .post("http://localhost:4000/login", payload, {
        "Content-Type": "application/json",
      })
      .then((res) => {
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

      .catch((error) => console.log("RESS Err", error));

    // navigate("/admin");
  };
  const style = { BackgroundImage: "url('../../../assets/bg.jpg')" };

  // const { data, error, loaded } =
  return (
    // <div className="main-container">
    //   <Box noValidate autoComplete="off" className="wrapper">
    //     <Grid container direction="row" className="login-container">
    //       <Grid item xs={6} className="form-section ">
    //         <form onSubmit={handleSubmit(handleLogin)} className="">
    //           <Grid item xs={12} marginBottom={3} className="profile-container">
    //             <h1>Login</h1>
    //             <Divider />
    //           </Grid>
    //           <TextField
    //             id="login-username"
    //             variant="outlined"
    //             size="small"
    //             label="Email"
    //             className="text-field"
    //             {...register("email", {
    //               required: "Email ID is required",
    //               pattern: {
    //                 value:
    //                   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //                 message: "Invalid email Id ( eg: example@mail.com ) ",
    //               },
    //             })}
    //             fullWidth
    //             error={errors?.email}
    //             style={{ color: "#fff" }}
    //           />
    //           <div className="error">{errors?.email?.message}</div>

    //           <TextField
    //             label="Password"
    //             size="small"
    //             fullWidth
    //             variant="outlined"
    //             type={isVisible ? "text" : "password"}
    //             {...register("password", {
    //               required: "Password is required",
    //               minLength: {
    //                 value: 8,
    //                 message: "Minimum 8 charecter",
    //               },
    //             })}
    //             InputProps={{
    //               endAdornment: (
    //                 <InputAdornment position="end">
    //                   <IconButton
    //                     onClick={() => setVisible(!isVisible)}
    //                     edge="end"
    //                   >
    //                     {!isVisible ? <VisibilityOff /> : <Visibility />}
    //                   </IconButton>
    //                 </InputAdornment>
    //               ),
    //             }}
    //             error={errors?.password}
    //           />
    //           <div className="error">{errors?.password?.message}</div>

    //           <Grid
    //             container
    //             direction="row"
    //             justifyContent="space-between"
    //             marginBottom={2}
    //           >
    //             <Grid item>
    //               <FormControlLabel
    //                 control={
    //                   <Checkbox
    //                     checked={isChecked}
    //                     onChange={() => setCheckBox(!isChecked)}
    //                   />
    //                 }
    //                 label="Keep me signed in"
    //               />
    //             </Grid>
    //             <Grid item sx={{ display: "flex", alignItems: "center" }}>
    //               <Typography>Forgot password?</Typography>
    //             </Grid>
    //           </Grid>
    //           <Grid
    //             container
    //             direction="row"
    //             justifyContent="space-between"
    //             marginBottom={2}
    //           >
    //             <Grid item className="login-btn-container" xs={12}>
    //               <Button
    //                 className="login-btn"
    //                 type="submit"
    //                 variant="contained"
    //               >
    //                 Login
    //               </Button>
    //             </Grid>
    //           </Grid>
    //           <Grid
    //             container
    //             direction="row"
    //             justifyContent="space-between"
    //             className="sub-btn"
    //           >
    //             <Grid item xs={3}>
    //               <Button
    //                 className="login-with-button  google-btn"
    //                 variant="outlined"
    //               >
    //                 Login with <GoogleIcon style={{ paddingLeft: 5 }} />
    //               </Button>
    //             </Grid>
    //             <Grid
    //               item
    //               xs={3}
    //               sx={{ display: "flex", alignItems: "center" }}
    //             >
    //               <Button className="login-with-button" variant="contained">
    //                 Login with <FacebookIcon style={{ paddingLeft: 5 }} />
    //               </Button>
    //             </Grid>
    //             <Grid item xs={4} className="create-account-container">
    //               <Grid item className="create-account">
    //                 <Button
    //                   className="login-with-button reg-btn"
    //                   variant="outlined"
    //                   onClick={() => navigate("/register", { replace: true })}
    //                 >
    //                   Create your account
    //                 </Button>
    //               </Grid>
    //             </Grid>
    //           </Grid>
    //         </form>
    //       </Grid>
    //     </Grid>
    //     <div className="bottom-image">
    //       <img src={BackgoundImg} alt="background image" />
    //     </div>
    //   </Box>
    // </div>
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
              <button className="btn btn-success" type="submit">
                SIGN IN
              </button>
              <div className="forgotpassword-link">
                <p>
                  <a
                    href="#"
                    className="text"
                    onClick={() => navigate("/register", { replace: true })}
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
                onClick={() => navigate("/register", { replace: true })}
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
