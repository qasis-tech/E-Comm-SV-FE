import { Box, Button, TextField } from "@mui/material";
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import axios from "axios";
import { BASE_URL, URLS } from "../../../../config/urls.config";
import { useNavigate } from "react-router-dom";

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
      .post("http://localhost:4000/signup", payload, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("ress=>=>", res);
      })
      .catch((err) => {
        console.log("errors swwer", err);
      });
  };

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1 }} noValidate autoComplete="off">
          <form onSubmit={handleSubmit(handleUserDetails)}>
            <h3>User </h3>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  {...register("userFirstName")}
                  label="UserFirstName"
                  error={errors?.userFirstName}
                />
                <p>{errors?.userFirstName?.message}</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="UserLastName"
                  {...register("userLastName")}
                  variant="outlined"
                  error={errors?.userLastName}
                />
                <p>{errors?.userLastName?.message}</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("userEmail")}
                  label="Email"
                  error={errors?.userEmail}
                />
                <p>{errors?.userEmail?.message}</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("userMobilenumber")}
                  label="Phone Number"
                  error={errors?.userMobilenumber}
                />
                <p>{errors?.userMobilenumber?.message}</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("userLocation")}
                  label="Location"
                  error={errors?.userLocation}
                />
                <p>{errors?.userLocation?.message}</p>
              </Grid>
              <Grid item xs={6} className="dob">
                <TextField
                  id="date"
                  label="DOB"
                  type="date"
                  fullWidth
                  variant="outlined"
                  {...register("userDob")}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="password"
                  label="Password"
                  {...register("userPassword")}
                  variant="outlined"
                  error={errors?.userPassword}
                />
                <p>{errors?.userPassword?.message}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("userPrimaryaddress")}
                  fullWidth
                  label="Primary Address"
                  multiline
                  rows={4}
                  error={errors?.userPrimaryaddress}
                />
                <p>{errors?.userPrimaryaddress?.message}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("userOtheraddress")}
                  fullWidth
                  label="Other Address"
                  multiline
                  rows={4}
                  error={errors?.userOtheraddress}
                />
                <p>{errors?.userOtheraddress?.message}</p>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  {...register("userPincode")}
                  label="Pin"
                  error={errors?.userPincode}
                />
                <p>{errors?.userPincode?.message}</p>
              </Grid>
              <Grid item xs={8}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  defaultValue="female"
                  name="row-radio-buttons-group"
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
            <Button variant="outlined">Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default AddUser;
