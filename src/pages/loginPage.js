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
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import "../styles/login.styles.scss";

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
    <div className="container">
      <div className="wrapper">
        <form onSubmit={handleSubmit(handleLogin)}>
          <TextField
            id="login-username"
            variant="outlined"
            size="small"
            label="Email ID"
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
                  <IconButton onClick={() => setVisible(!isVisible)} edge="end">
                    {!isVisible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={errors?.password}
          />
          <p>{errors?.password?.message}</p>

          <Button type="submit " variant="contained" fullWidth>
            Login
          </Button>
          <Grid container direction="row" justifyContent="space-between">
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
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
