import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URLS } from "../../../../config/urls.config";
import { getValue } from "@testing-library/user-event/dist/utils";

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
    userLocation: yup.string().required(),
    userPrimaryaddress: yup.string().required(),
    userOtheraddress: yup.string().required(),
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
  console.log("parms ==>", id);

  React.useEffect(() => {
    getDetailsApi();
  }, []);

  const getDetailsApi = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}${URLS.signup}/${id}`)
      .then((res) => {
        console.log("ress =>>", res);
        setValue("userFirstName", res.data.data.firstName);
        setValue("userLastName", res.data.data.lastName);
        setValue("userMobilenumber", res.data.data.mobileNumber);
        setValue("userEmail", res.data.data.email);
        setValue("userPincode", res.data.data.pinCode);
        setValue("userGender", res.data.data.gender);
      })
      .then(() => {
        console.log("getvalues", getValues("userGender"));
      })
      .catch((err) => {
        console.log("err in Category LIst", err);
      });
  };

  const handleUserDetails = ({
    userLocation,
    userPrimaryaddress,
    userOtheraddress,
  }) => {
    // console.log("UserDetailspage Details", data);
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
            <form onSubmit={handleSubmit(handleUserDetails)}>
              <div className="main-heading">
                <h5 className="heading">User Details</h5>
              </div>
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
                      defaultValue="Location"
                      error={errors?.userLocation}
                    />
                    <p>{errors?.userLocation?.message}</p>
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
                      defaultValue="Primary Address"
                      multiline
                      rows={4}
                      error={errors?.userPrimaryaddress}
                    />
                    <p>{errors?.userPrimaryaddress?.message}</p>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      {...register("userOtheraddress")}
                      id="outlined-helperText"
                      fullWidth
                      label="Other Address"
                      defaultValue="Other Address"
                      multiline
                      rows={4}
                      error={errors?.userOtheraddress}
                    />
                    <p>{errors?.userOtheraddress?.message}</p>
                  </Grid>
                </Grid>
              </div>
              <div className="row submit-button">
                <Grid item xs={2}>
                  <Button>Cancel</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="submit-btn"
                  >
                    submit
                  </Button>
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
