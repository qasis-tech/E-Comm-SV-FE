import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { InputAdornment, IconButton, TextField } from "@mui/material";

import BackgroundImage from "../../../assets/bg.jpg";

import "./forgotpassword.styles.scss";

const forgotPasswordSchema = yup
  .object()
  .shape({
    forgotEmail: yup.string().email().required("Email ID is required"),
    otp: yup
      .string()
      .matches(/^[0-9]*$/, "Enter Digits Only")
      .required("OTP is required"),
    password: yup.string().required("Password is required"),

    cpassword: yup
      .string()
      .required("Confirm Password is required")

      .oneOf([yup.ref("password")], "Passwords do not match"),
  })
  .required();

function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const navigate = useNavigate();

  const handleForgotPassword = (data) => {
    console.log("Forgot Details", data);
  };

  // const handlePassword = (e) => {
  //   console.log("password", password);
  //   setPassword(e.target.value);
  // };
  const style = { BackgroundImage: "url('../../../assets/bg.jpg')" };

  return (
    <div
      className="forgotpassword-section"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="container">
        <div className="formWraper">
          <div className="formDiv">
            <form onSubmit={handleSubmit(handleForgotPassword)}>
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
                {...register("forgotEmail")}
              />
              <div className="error">{errors?.forgotEmail?.message}</div>
              <TextField
                id="login-username"
                variant="outlined"
                size="small"
                label="OTP"
                className="text-field"
                fullWidth
                {...register("otp")}
              />
              <div className="error">{errors?.otp?.message}</div>
              <TextField
                id="login-username"
                variant="outlined"
                size="small"
                label="New password"
                className="text-field"
                fullWidth
                {...register("password")}
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
                {...register("cpassword")}
              />
              <div className="error">{errors?.cpassword?.message}</div>
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
