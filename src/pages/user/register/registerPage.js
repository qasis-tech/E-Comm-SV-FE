import React from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "yup-phone";
import "./register.styles.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackgoundImg from "../../../assets/bg-pic.png";
import BackgroundImage from "../../../assets/bg.jpg";

import { URLS } from "../../../config/urls.config";

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
  const replaceHyphen = (e) => {
    const new_str = e.replace(/-/g, "");
    return new_str;
  };

  const handleRegister = ({
    firstName,
    lastName,
    email,
    mobilenumber,
    gender,
    dob,
    password,
    pincode,
  }) => {
    const result = replaceHyphen(mobilenumber);
    mobilenumber = result;
    let payload = {
      firstName: firstName,
      lastName: lastName,
      mobileNumber: mobilenumber,
      email: email,
      gender: gender,
      dob: dob,
      pinCode: pincode,
      password: password,
    };
    axios
      .post(URLS.user, payload, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("ress=>=>", res);
        if (res.data) {
          if (res.data.success === false) {
            alert(res.data.message);
          }
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log("errors", err);
      });
  };

  return (
    // <div className="register">
    //   <Box className="wrapper">
    //     <Grid container direction="row" className="register-container">
    //       <Grid item xs={6} className="form-section ">
    //         <form onSubmit={handleSubmit(handleRegister)} autoComplete="off">
    //           <Grid item xs={12} marginBottom={3} className="profile-container">
    //             <h1>Create Account</h1>
    //             <Divider />
    //           </Grid>
    //           <Grid container spacing={2}>
    //             <Grid item xs={6}>
    //               <TextField
    //                 id="filled-basic"
    //                 label="FirstName"
    //                 {...register("firstName", {})}
    //                 variant="outlined"
    //                 error={errors?.firstName}
    //               />
    //               <div className="error">{errors?.firstName?.message}</div>
    //             </Grid>
    //             <Grid item xs={6}>
    //               <TextField
    //                 id="filled-basic"
    //                 label="LastName"
    //                 {...register("lastName")}
    //                 variant="outlined"
    //                 error={errors?.lastName}
    //               />
    //               <div className="error">{errors?.lastName?.message}</div>
    //             </Grid>
    //           </Grid>
    //           <Grid container spacing={2}>
    //             <Grid item xs={6}>
    //               <TextField
    //                 id="filled-basic"
    //                 label="Email"
    //                {...register("email")}
    //                 variant="outlined"
    //                 error={errors?.email}
    //               />
    //               <div className="error">{errors?.email?.message}</div>
    //             </Grid>
    //             <Grid item xs={6}>
    //               <TextField
    //                 id="filled-basic"
    //                 label="Phone Number"
    //                 {...register("mobilenumber")}
    //                 variant="outlined"
    //                 type="numeric"
    //                 error={errors?.mobilenumber}
    //               />
    //               <div className="error">{errors?.mobilenumber?.message}</div>
    //             </Grid>
    //           </Grid>
    //           <Grid container spacing={2}>
    //             <Grid item xs={6}>
    //               <FormControl>
    //                 <FormLabel id="demo-row-radio-buttons-group-label">
    //                   Gender
    //                 </FormLabel>
    //                 <RadioGroup
    //                   row
    //                   aria-labelledby="demo-row-radio-buttons-group-label"
    //                   name="row-radio-buttons-group"
    //                 >
    //                   <FormControlLabel
    //                     value="female"
    //                     {...register("gender", { required: true })}
    //                     control={<Radio />}
    //                     label="Female"
    //                   />
    //                   <FormControlLabel
    //                     value="male"
    //                     control={<Radio />}
    //                     {...register("gender", { required: true })}
    //                     label="Male"
    //                   />
    //                 </RadioGroup>
    //               </FormControl>
    //             </Grid>
    //             <Grid item xs={6} className="dob">
    // <TextField
    //   id="date"
    //   label="DOB"
    //   type="date"
    //   fullWidth
    //   variant="outlined"
    //   {...register("dob")}
    //   InputLabelProps={{
    //     shrink: true,
    //   }}
    // />
    //             </Grid>
    //           </Grid>
    //           <Grid container spacing={2}>
    //             <Grid item xs={6}>
    //               <TextField
    //                 id="filled-basic"
    //                 type="password"
    //                 label="Password"
    //                 {...register("password")}
    //                 variant="outlined"
    //                 error={errors?.password}
    //               />
    //               <div className="error">{errors?.password?.message}</div>
    //             </Grid>
    //             <Grid item xs={6}>
    //               <TextField
    //                 id="filled-basic"
    //                 label="Pincode"
    //                 {...register("pincode")}
    //                 variant="outlined"
    //                 type="numeric"
    //                 error={errors?.pincode}
    //               />
    //               <div className="error">{errors?.pincode?.message}</div>
    //             </Grid>
    //           </Grid>
    //           <Grid container spacing={2}>
    //             <Grid item xs={6}>
    //               <TextField
    //                 id="filled-basic"
    //                 label="OTP for email"
    //                 variant="outlined"
    //               />
    //             </Grid>
    //             <Grid item xs={6}>
    //               <TextField
    //                 id="filled-basic"
    //                 label="OTP for Phone Number"
    //                 variant="outlined"
    //               />
    //             </Grid>
    //           </Grid>
    //           <Grid
    //             container
    //             direction="row"
    //             justifyContent="space-between"
    //             marginTop={3}
    //           >
    //             <Grid item className="submit-btn-container" xs={12}>
    //               <Button
    //                 className="submit-btn"
    //                 type="submit"
    //                 variant="contained"
    //               >
    //                 Submit
    //               </Button>
    //             </Grid>
    //           </Grid>
    //           <Grid item xs={12} marginTop={2} className="login-link">
    //             <p>
    //               Already have an account?<a href="#">Login</a>
    //             </p>
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
                    {...register("firstName", {})}
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
                    >
                      <FormControlLabel
                        {...register("userGender", { required: true })}
                        value="female"
                        control={<Radio />}
                        label="Female"
                        type="radio"
                        checked={true}
                      />
                      <FormControlLabel
                        {...register("userGender", { required: true })}
                        value="male"
                        control={<Radio />}
                        label="Male"
                        type="radio"
                        checked={false}
                        // checked={getValues("userGender") == "male"}
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
              <button className="btn" type="submit">
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
            <button
              className="btn2"
              onClick={() => navigate("/login", { replace: true })}
            >
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
