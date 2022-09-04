import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";

import { URLS } from "../../../../config/urls.config";
import Loader from "../../../../components/Loader";
import RouterList from "../../../../routes/routerList";

import { Box, Button, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import "./add-user.styles.scss";

const userdetailsSchema = yup
  .object()
  .shape({
    userFirstName: yup.string().required(),
    userLastName: yup.string().required(),
    userEmail: yup.string().email().required(),
    userMobilenumber: yup
      .string()
      .phone("IN", true, "Mobile Number is invalid")
      .required(),
    userPassword: yup.string().min(8).required("Password is required"),
    userLocation: yup.string().required(),
    userPrimaryaddress: yup.string().required(),
    userOtheraddress: yup.string().required(),
    userPincode: yup
      .string()
      .matches(/^[1-9][0-9]{5}$/, "Invalid zipcode (682315)"),
  })
  .required();

const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userdetailsSchema),
  });

  const navigate = useNavigate();
  const [isLoading, setLoader] = useState(false);
  const [userData, setUserData] = useState([]);

  const handleUserDetails = ({
    userFirstName,
    userLastName,
    userEmail,
    userMobilenumber,
    userLocation,
    userDob,
    userPassword,
    userPrimaryaddress,
    userOtheraddress,
    userPincode,
    userGender,
  }) => {
    setLoader(true);
    let payload = {
      firstName: userFirstName,
      lastName: userLastName,
      mobileNumber: userMobilenumber,
      email: userEmail,
      gender: userGender,
      dob: userDob,
      pinCode: userPincode,
      password: userPassword,
    };
    axios
      .post(`${URLS.user}`, payload, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setLoader(false);
        setUserData(res.data);
        if (res.success) {
          navigate(`${RouterList.admin.admin}/${RouterList.admin.userList}`);
        }
      })
      .catch((err) => {
        setLoader(false);
        setUserData([]);
        console.log("Errors IN POST USER", err);
      });
  };

  return (
    <div className="add-user">
      <Box noValidate autoComplete="off" className="user-wrapper">
        <Grid
          container
          direction="row"
          spacing={2}
          className="add-user-container"
        >
          <div className="user-form-section col-md-8">
            <form onSubmit={handleSubmit(handleUserDetails)}>
              <div className="main-heading">
                <h5 className="heading">User</h5>
              </div>
              <div className="main-form-container">
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      size="small"
                      {...register("userFirstName")}
                      label="First Name"
                      error={errors?.userFirstName}
                    />
                    <div className="error">
                      {errors?.userFirstName?.message}
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Last Name"
                      fullWidth
                      size="small"
                      {...register("userLastName")}
                      variant="outlined"
                      error={errors?.userLastName}
                    />
                    <div className="error">{errors?.userLastName?.message}</div>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      {...register("userEmail")}
                      label="Email"
                      fullWidth
                      size="small"
                      error={errors?.userEmail}
                    />
                    <div className="error">{errors?.userEmail?.message}</div>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      {...register("userMobilenumber")}
                      label="Phone Number"
                      fullWidth
                      size="small"
                      error={errors?.userMobilenumber}
                    />
                    <div className="error">
                      {errors?.userMobilenumber?.message}
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      {...register("userLocation")}
                      label="Location"
                      fullWidth
                      size="small"
                      error={errors?.userLocation}
                    />
                    <div className="error">{errors?.userLocation?.message}</div>
                  </Grid>
                  <Grid item xs={6} className="dob">
                    <TextField
                      id="date"
                      label="DOB"
                      type="date"
                      fullWidth
                      size="small"
                      variant="outlined"
                      {...register("userDob")}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      type="password"
                      label="Password"
                      fullWidth
                      size="small"
                      {...register("userPassword")}
                      variant="outlined"
                      error={errors?.userPassword}
                    />
                    <div className="error">{errors?.userPassword?.message}</div>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register("userPincode")}
                      label="Pin"
                      size="small"
                      fullWidth
                      error={errors?.userPincode}
                    />
                    <div className="error">{errors?.userPincode?.message}</div>
                  </Grid>
                  <Grid item xs={5} className="gender-section">
                    <Grid item xs={2}>
                      <FormLabel
                        className="gender-label"
                        id="demo-row-radio-buttons-group-label"
                      >
                        Gender
                      </FormLabel>
                    </Grid>
                    <Grid item xs={10} className="radio-btn">
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="Female"
                      >
                        <FormControlLabel
                          {...register("userGender", { required: true })}
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          {...register("userGender", { required: true })}
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register("userPrimaryaddress")}
                      fullWidth
                      size="small"
                      label="Primary Address"
                      multiline
                      rows={4}
                      error={errors?.userPrimaryaddress}
                    />
                    <div className="error">
                      {errors?.userPrimaryaddress?.message}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register("userOtheraddress")}
                      fullWidth
                      size="small"
                      label="Other Address"
                      multiline
                      rows={4}
                      error={errors?.userOtheraddress}
                    />
                    <div className="error">
                      {errors?.userOtheraddress?.message}
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="row submit-button">
                <Grid item xs={2}>
                  <Button>Cancel</Button>
                </Grid>
                <Grid item xs={4}>
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      color="primary"
                      className="submit-btn"
                    >
                      submit
                    </Button>
                  )}
                </Grid>
              </div>
            </form>
          </div>
        </Grid>
      </Box>
    </div>
  );
};

export default AddUser;
