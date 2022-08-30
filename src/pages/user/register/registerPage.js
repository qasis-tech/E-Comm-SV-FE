import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import BackgroundImage from "../../../assets/bg.jpg";

import "./register.styles.scss";
import { URLS } from "../../../config/urls.config";
import Loader from "../../../components/Loader";

const signupSchema = yup
  .object()
  .shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email().required("Email ID is required"),
    mobilenumber: yup
      .string()
      .phone("IN", true, "Mobile Number is invalid")
      .required(),
    password: yup.string().min(8).required("Password is required"),
    pincode: yup
      .string()
      .matches(/^[1-9][0-9]{5}$/, "Invalid zipcode (682315)")
      .required(),
    userGender: yup.string().required(),
  })
  .required();

function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const [isLoading, setLoader] = useState(false);
  const replaceHyphen = (e) => {
    const new_str = e.replace(/-/g, "");
    return new_str;
  };

  const handleRegister = ({
    firstName,
    lastName,
    email,
    mobilenumber,
    userGender,
    dob,
    password,
    pincode,
  }) => {
    setLoader(true);
    const result = replaceHyphen(mobilenumber);
    mobilenumber = result;
    let payload = {
      firstName: firstName,
      lastName: lastName,
      mobileNumber: mobilenumber,
      email: email,
      gender: userGender,
      dob: dob,
      pinCode: pincode,
      password: password,
    };
    axios
      .post(URLS.user, payload, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setLoader(false);
        console.log("ress=>=>", res);
        if (res.data) {
          if (res.data.success === false) {
            alert(res.data.message);
          }
          navigate("/login");
        }
      })
      .catch((err) => {
        setLoader(false);
        console.log("errors", err);
      });
  };

  return (
    <div
      className="register-section"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="container">
        <div className="formWraper">
          <div className="formDiv">
            <form onSubmit={handleSubmit(handleRegister)}>
              <h2>Create Account</h2>
              <div className="row">
                <div className="col-md-6">
                  <TextField
                    id="filled-basic"
                    label="First name"
                    size="small"
                    fullWidth
                    {...register("firstName")}
                    variant="outlined"
                    error={errors?.firstName}
                  />
                  <div className="error">{errors?.firstName?.message}</div>
                </div>
                <div className="col-md-6">
                  <TextField
                    id="filled-basic"
                    label="Last name"
                    {...register("lastName")}
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={errors?.lastName}
                  />
                  <div className="error">{errors?.lastName?.message}</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <TextField
                    id="filled-basic"
                    label="Phone Number"
                    {...register("mobilenumber")}
                    variant="outlined"
                    type="numeric"
                    size="small"
                    fullWidth
                    error={errors?.mobilenumber}
                  />
                  <div className="error">{errors?.mobilenumber?.message}</div>
                </div>
                <div className="col-md-6">
                  <TextField
                    id="filled-basic"
                    label="Email"
                    fullWidth
                    size="small"
                    {...register("email")}
                    variant="outlined"
                    error={errors?.email}
                  />
                  <div className="error">{errors?.email?.message}</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <TextField
                    id="filled-basic"
                    type="password"
                    label="Password"
                    fullWidth
                    {...register("password")}
                    variant="outlined"
                    size="small"
                    error={errors?.password}
                  />
                  <div className="error">{errors?.password?.message}</div>
                </div>
                <div className="col-md-6">
                  <TextField
                    id="filled-basic"
                    label="Pincode"
                    {...register("pincode")}
                    variant="outlined"
                    type="numeric"
                    size="small"
                    fullWidth
                    error={errors?.pincode}
                  />
                  <div className="error">{errors?.pincode?.message}</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 gender-section">
                  <div className="gender-label">
                    <FormLabel
                      className="gender-label"
                      id="demo-row-radio-buttons-group-label"
                    >
                      Gender
                    </FormLabel>
                  </div>
                  <div className="">
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      defaultValue="Female"
                    >
                      <FormControlLabel
                        {...register("userGender")}
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        {...register("userGender")}
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </RadioGroup>
                  </div>
                </div>
                <div className="col-md-6">
                  <TextField
                    id="date"
                    label="DOB"
                    type="date"
                    fullWidth
                    size="small"
                    variant="outlined"
                    {...register("dob")}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <div className="error">{errors?.dob?.message}</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <TextField
                    id="filled-basic"
                    label="OTP for email"
                    size="small"
                    fullWidth
                    variant="outlined"
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    id="filled-basic"
                    label="OTP for phone number"
                    size="small"
                    fullWidth
                    variant="outlined"
                  />
                </div>
              </div>
              <button className="btn btn-success" type="submit">
                SIGN UP
              </button>
              <div className="signup-link">
                <p className="">
                  Already have an account?{" "}
                  <a
                    href="#"
                    onClick={() => navigate("/login", { replace: true })}
                  >
                    Signin
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div className="welcomeDiv">
            <h2>Welcome Back!</h2>
            <p className="text">Already have an account?</p>

            {isLoading ? (
              <Loader />
            ) : (
              <button
                className="btn btn2"
                onClick={() => navigate("/login", { replace: true })}
              >
                SIGN IN
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
