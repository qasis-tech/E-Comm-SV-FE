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
    <React.Fragment>
      <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1 }} noValidate autoComplete="off">
          <form onSubmit={handleSubmit(handleUserDetails)}>
            <h3>User Details</h3>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-helperText"
                  label="Name"
                  {...register("userFirstName")}
                  defaultValue="Firstname"
                  error={errors?.userFirstName}
                />
                <p>{errors?.userFirstName?.message}</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("userLastName")}
                  placeholder="LastName"
                  error={errors?.userLastName}
                />
                <p>{errors?.userLastName?.message}</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("userEmail")}
                  placeholder="Email"
                  error={errors?.userEmail}
                />
                <p>{errors?.userEmail?.message}</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("userMobilenumber")}
                  placeholder="Phone Number"
                  error={errors?.userMobilenumber}
                />
                <p>{errors?.userMobilenumber?.message}</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("userLocation")}
                  placeholder="Location"
                  error={errors?.userLocation}
                />
                <p>{errors?.userLocation?.message}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("userPrimaryaddress")}
                  fullWidth
                  placeholder="Primary Address"
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
                  placeholder="Other Address"
                  multiline
                  rows={4}
                  error={errors?.userOtheraddress}
                />
                <p>{errors?.userOtheraddress?.message}</p>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  {...register("userPincode")}
                  placeholder="Pin"
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

export default UserDetails;
