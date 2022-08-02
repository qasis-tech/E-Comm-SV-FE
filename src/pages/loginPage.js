import React, { useState } from "react";
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

function LoginPage() {
  const [isChecked, setCheckBox] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("User name and password =====> ", username, password);

    if (username === "" && password === "") {
      alert("NOt Valid");
    } else {
      // email validation
      // if(email vaidation true)
      // alert("Login Successfully")
    }
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <TextField
        id="login-username"
        label="username"
        variant="outlined"
        size="small"
        fullWidth
        value={username}
        onChange={(z) => setUsername(z.target.value)}
      />

      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
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
          label="Password"
        />
      </FormControl>

      <Button variant="contained" fullWidth onClick={handleLogin}>
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
    </div>
  );
}

export default LoginPage;
