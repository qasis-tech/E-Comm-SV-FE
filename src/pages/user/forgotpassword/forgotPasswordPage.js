import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { InputAdornment, IconButton, TextField } from "@mui/material";

import BackgroundImage from "../../../assets/bg.jpg";

import "./forgotpassword.styles.scss";

function ForgotPasswordPage() {
  const navigate = useNavigate();
  const style = { BackgroundImage: "url('../../../assets/bg.jpg')" };

  return (
    <div
      className="forgotpassword-section"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="container">
        <div className="formWraper">
          <div className="formDiv">
            <form>
              <h2>Reset password</h2>
              <p className="text">
                {" "}
                For best security practices,you should change your password
                periodically.
              </p>
              <TextField
                id="login-username"
                variant="outlined"
                size="small"
                label="Email"
                className="text-field"
                fullWidth
              />
              <TextField
                id="login-username"
                variant="outlined"
                size="small"
                label="OTP"
                className="text-field"
                fullWidth
              />
              <TextField
                id="login-username"
                variant="outlined"
                size="small"
                label="New password"
                className="text-field"
                fullWidth
              />
              <TextField
                label="Confirm password"
                size="small"
                fullWidth
                className="password"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end"></IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <button className="btn btn-success" type="submit">
                Reset Password
              </button>
            </form>
          </div>
          <div className="welcomeDiv">
            <h2>Forgot Password</h2>
            <p className="text">
              Get in touch with us for our news letter and more updates.
            </p>
            <button className="btn btn2" onClick={() => navigate("/login")}>
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgotPasswordPage;
