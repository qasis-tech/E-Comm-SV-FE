import * as React from "react";
import TextField from "@mui/material/TextField";

function LoginPage() {
  return (
    <div>
      <h1>LoginPage</h1>
      <TextField
        id="login-username"
        label="username"
        variant="outlined"
        size="small"
        fullWidth
      />
    </div>
  );
}

export default LoginPage;
