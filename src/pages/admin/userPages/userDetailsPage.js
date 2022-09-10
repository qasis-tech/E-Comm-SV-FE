import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";

import { URLS } from "../../../config/urls.config";
import Loader from "../../../components/Loader";
import RouterList from "../../../routes/routerList";

import { Box, Button, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import "./user-details.styles.scss";

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
    userLocation: yup.string().required("Location is required"),
    userPrimaryaddress: yup.string().required("PrimaryAddress is required"),
    userOtheraddress: yup.string().required("OtherAddress is required"),
    userPincode: yup
      .string()
      .matches(/^[1-9][0-9]{5}$/, "Invalid zipcode (682315)"),
    userGender: yup.string().required(),
  })
  .required();

const UserDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(userdetailsSchema),
  });

  const { id } = useParams();

  const navigate = useNavigate();

  const [isLoading, setLoader] = useState(false);
  const [userDetailData, setUserDetailData] = useState([]);

  useEffect(() => {
    getDetailsApi();
  }, []);

  const getDetailsApi = () => {
    setLoader(true);
    axios
      .get(`${URLS.user}/${id}`)
      .then((res) => {
        setLoader(false);
        setUserDetailData(res.data);
        setValue("userFirstName", res.data.firstName);
        setValue("userLastName", res.data.lastName);
        setValue("userMobilenumber", res.data.mobileNumber);
        setValue("userEmail", res.data.email);
        setValue("userPincode", res.data.pinCode);
        setValue("userGender", res.data.gender);
      })
      .catch((err) => {
        setLoader(false);
        setUserDetailData([]);
        console.log("err in Category LIst", err);
      });
  };

  const putUserDetailsApi = ({
    userLocation,
    userPrimaryaddress,
    userOtheraddress,
    userPincode,
  }) => {
    setLoader(true);
    let payload = {
      location: userLocation,
      primaryAddress: userPrimaryaddress,
      userPrimaryaddress: userOtheraddress,
      pinCode: userPincode,
    };
    axios
      .put(`${URLS.addUser}/${id}`, payload, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setLoader(false);
        if (res) {
          navigate(`${RouterList.admin.admin}/${RouterList.admin.userList}`);
        }
      })
      .catch((err) => {
        setLoader(false);
        console.log("Error in put api user===>>>", err);
      });
  };
  return (
    <div className="details-user">
      <Box noValidate autoComplete="off" className="user-details-wrapper">
        <Grid
          container
          direction="row"
          spacing={2}
          className="details-user-container"
        >
          <div className="user-details-form-section col-md-8">
            <form onSubmit={handleSubmit(putUserDetailsApi)}>
              <div className="main-heading">
                <h5 className="heading">User Details</h5>
              </div>
              {isLoading ? (
                <Loader />
              ) : (
                <div className="main-form-container">
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-helperText"
                        fullWidth
                        size="small"
                        label="First Name"
                        {...register("userFirstName")}
                        defaultValue="Firstname"
                        error={errors?.userFirstName}
                      />
                      <p>{errors?.userFirstName?.message}</p>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-helperText"
                        fullWidth
                        size="small"
                        label="Last Name"
                        {...register("userLastName")}
                        defaultValue="LastName"
                        error={errors?.userLastName}
                      />
                      <p>{errors?.userLastName?.message}</p>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-helperText"
                        fullWidth
                        size="small"
                        label="Email"
                        {...register("userEmail")}
                        defaultValue="Email"
                        error={errors?.userEmail}
                      />
                      <p>{errors?.userEmail?.message}</p>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-helperText"
                        fullWidth
                        size="small"
                        label="Location"
                        {...register("userLocation")}
                        error={errors?.userLocation}
                      />
                      <div className="error">
                        {errors?.userLocation?.message}
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <TextField
                        id="outlined-helperText"
                        fullWidth
                        size="small"
                        label="Phone Number"
                        {...register("userMobilenumber")}
                        defaultValue="Phone Number"
                        error={errors?.userMobilenumber}
                      />
                      <p>{errors?.userMobilenumber?.message}</p>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        id="outlined-helperText"
                        fullWidth
                        size="small"
                        label="Pincode"
                        {...register("userPincode")}
                        defaultValue="Pin"
                        error={errors?.userPincode}
                      />
                      <p>{errors?.userPincode?.message}</p>
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
                            {...register("userGender")}
                            value=""
                            control={<Radio />}
                            label="Female"
                            checked={userDetailData.gender === "female"}
                          />
                          <FormControlLabel
                            {...register("userGender")}
                            value=""
                            control={<Radio />}
                            label="Male"
                            checked={userDetailData.gender === "male"}
                          />
                        </RadioGroup>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-helperText"
                        fullWidth
                        label="Primary Address"
                        {...register("userPrimaryaddress")}
                        multiline
                        rows={4}
                        error={errors?.userPrimaryaddress}
                      />
                      <div className="error">
                        {errors?.userPrimaryaddress?.message}
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        {...register("userOtheraddress")}
                        id="outlined-helperText"
                        fullWidth
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
              )}
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

export default UserDetails;
