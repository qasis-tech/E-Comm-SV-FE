import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  Typography,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";

function LoginPage() {
  const [isChecked, setCheckBox] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { username: "", password: "" } });

  console.log(errors);
  useEffect(() => {
    // console.log("component didmount");
    const object = localStorage.getItem("loginDetails");
    if (object) {
      const newObject = JSON.parse(object);
      // const onject = { email: email, password: password };
      setUsername(newObject.username);
      setPassword(newObject.password);
      setCheckBox(true);
    }
  }, []);

  const emailvalidation = (username) => {
    return /\S+@\S+\.\S+/.test(username);
  };

  const handleLogin = () => {
    console.log("User name and password =====> ", username, password);

    if (username === "" && password === "") {
      alert("enter Valid username and password");
    }
    // else if (password === "") {
    //   alert("enter password");
    // }
    //  else if (username === "") {
    //   alert("enter username");
    // }
    else if (!emailvalidation(username)) {
      alert("email is not correct");
    } else {
      alert("Login successfully");
    }
    if (isChecked) {
      const object = { username: username, password: password };
      localStorage.setItem("loginDetails", JSON.stringify(object));
    } else {
      localStorage.removeItem("loginDetails");
    }

    // email validation
    // if(email vaidation true)
    // alert("Login Successfully")
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <h1>LoginPage</h1>
      <TextField
        id="login-username"
        {...register("username", { required: "enter username" })}
        variant="outlined"
        size="small"
        fullWidth
        value={username}
        onChange={(z) => setUsername(z.target.value)}
      />
      <p>{errors.username?.message}</p>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          {...register("password", {
            required: "enter password",
            maxLength: {
              value: 5,
              message: "max length is 5",
            },
          })}
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setVisible(!isVisible)}
                edge="end"
              >
                {isVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <p>{errors.password?.message}</p>

      <Button type="submit " variant="contained" fullWidth>
        Login
      </Button>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={() => setCheckBox(!isChecked)}
            />
          }
          label="Keep me signed in"
        />
        <Typography variant="caption" component="span">
          Forgot password?
        </Typography>
      </FormGroup>
    </form>
  );
}

export default LoginPage;
