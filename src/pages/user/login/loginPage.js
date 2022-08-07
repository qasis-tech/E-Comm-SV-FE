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
  Box,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./login.styles.scss";
import { alpha, styled } from "@mui/material/styles";

// const CssTextField = styled(TextField)({
//   "& .MuiInput-underline:after": {
//     borderBottomColor: "white",
//   },
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: "red",
//     },
//     "&:hover fieldset": {
//       borderColor: "yellow",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "green",
//     },
//   },
// });
function LoginPage() {
  const [isChecked, setCheckBox] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "" } });

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
    if (isChecked) {
      localStorage.setItem("loginDetails", JSON.stringify({ email, password }));
    } else {
      localStorage.removeItem("loginDetails");
    }

    console.log("Donee");
  };

  return (
    <Container className="container">
      <Box
        sx={{ flexGrow: 1 }}
        noValidate
        autoComplete="off"
        className="wrapper"
      >
        <Grid container direction="row" className="login-container">
          <Grid item xs={6} className="form-section">
            <form onSubmit={handleSubmit(handleLogin)}>
              <Grid item xs={12} marginBottom={3} className="profile-container">
                <h1>Login</h1>
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
                    message: "Invalid email Id (example@mail.com) ",
                  },
                })}
                fullWidth
                error={errors?.email}
                style={{ color: "#fff" }}
              />
              <p>{errors?.email?.message}</p>

              <TextField
                label="Password"
                size="small"
                fullWidth
                type={isVisible ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Minimum of 8 Charecter",
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
              <p>{errors?.password?.message}</p>

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
                className="sub-btn"
                justifyContent="space-between"
                marginBottom={2}
              >
                <Grid item>
                  <Button className="login-with-button" variant="outlined">
                    <GoogleIcon />
                    Login with Google
                  </Button>
                </Grid>
                <Grid item sx={{ display: "flex", alignItems: "center" }}>
                  <Button className="login-with-button" variant="contained">
                    <FacebookIcon />
                    Login with Facebook
                  </Button>
                </Grid>
              </Grid>

              <Grid
                container
                direction="row"
                className="sub-btn"
                justifyContent="space-between"
                marginTop={4}
              >
                <Grid item></Grid>
                <Grid item className="create-account">
                  <a href="">
                    Create your account
                    <ArrowForwardIcon />
                  </a>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
export default LoginPage;
