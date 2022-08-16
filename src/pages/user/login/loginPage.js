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
import FacebookIcon from "@mui/icons-material/Facebook";
import "./login.styles.scss";
import { useNavigate } from "react-router-dom";
import BackgoundImg from "../../../assets/bg-pic.png";

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

        if (res.data.data) {
          if (isChecked) {
            localStorage.setItem(
              "loginDetails",
              JSON.stringify({ email, password })
            );
            localStorage.setItem("LoginDatas", JSON.stringify(res.data.data));
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

  // const { data, error, loaded } =
  return (
    <div className="main-container">
      <Box noValidate autoComplete="off" className="wrapper">
        <Grid container direction="row" className="login-container">
          <Grid item xs={5} className="form-section ">
            <form onSubmit={handleSubmit(handleLogin)} className="">
              <Grid item xs={12} marginBottom={3} className="profile-container">
                <h1>Login</h1>
                <Divider />
              </Grid>
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

              <Grid
                container
                direction="row"
                justifyContent="space-between"
                marginBottom={2}
              >
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked}
                        onChange={() => setCheckBox(!isChecked)}
                      />
                    }
                    label="Keep me signed in"
                  />
                </Grid>
                <Grid item sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>Forgot password?</Typography>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                marginBottom={2}
              >
                <Grid item className="login-btn-container" xs={12}>
                  <Button
                    className="login-btn"
                    type="submit"
                    variant="contained"
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                className="sub-btn"
              >
                <Grid item xs={3}>
                  <Button
                    className="login-with-button  google-btn"
                    variant="outlined"
                  >
                    Login with <GoogleIcon style={{ paddingLeft: 5 }} />
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Button className="login-with-button" variant="contained">
                    Login with <FacebookIcon style={{ paddingLeft: 5 }} />
                  </Button>
                </Grid>
                <Grid item xs={4} className="create-account-container">
                  <Grid item className="create-account">
                    <Button
                      className="login-with-button reg-btn"
                      variant="outlined"
                    >
                      Create your account
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
        <div className="bottom-image">
          <img src={BackgoundImg} alt="background image" />
        </div>
      </Box>
    </div>
  );
}
export default LoginPage;
