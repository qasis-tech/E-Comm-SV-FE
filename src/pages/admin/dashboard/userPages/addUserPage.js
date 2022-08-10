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

const userdetailspageSchema = yup
  .object()
  .shape({
    userName: yup.string().required(),
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
  })
  .required();

const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userdetailspageSchema),
  });

  const handleUserDetailspage = (data) => {
    console.log("UserDetailspage Details", data);
  };
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1 }} noValidate autoComplete="off">
          <form onSubmit={handleSubmit(handleUserDetailspage)}>
            <h3>User </h3>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  {...register("userName")}
                  id="outlined-read-only-input"
                  label="Name"
                  error={errors?.userName}
                />
                <p>{errors?.userName?.message}</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("userEmail")}
                  id="outlined-read-only-input"
                  label="Email"
                  error={errors?.userEmail}
                />
                <p>{errors?.userEmail?.message}</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("userMobilenumber")}
                  id="outlined-read-only-input"
                  label="Phone Number"
                  error={errors?.userMobilenumber}
                />
                <p>{errors?.userMobilenumber?.message}</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("userLocation")}
                  id="outlined-read-only-input"
                  label="Location"
                  error={errors?.userLocation}
                />
                <p>{errors?.userLocation?.message}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("userPrimaryaddress")}
                  fullWidth
                  id="outlined-multiline-static"
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
                  id="outlined-multiline-static"
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
                  id="outlined-read-only-input"
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
