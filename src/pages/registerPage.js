import React from "react";
import {
  Typography,
  InputAdornment,
  IconButton,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Container,
  Box,
  FormControl,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import "../styles/register.styles.css";
import login from "../assets/login.jpg";

const signupSchema = yup
  .object()
  .shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    mobilenumber: yup
      .string()
      .phone("IN", true, "Mobile Number is invalid")
      .required(),
  })
  .required();

function RegisterPage() {
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

  const handleRegister = (data) => {
    const result = replaceHyphen(data.mobilenumber);
    data.mobilenumber = result;
    console.log("Registration Details", data);
    console.log(errors);
  };

  return (
    <React.Fragment>
      <Container className="container">
        <Box
          sx={{ flexGrow: 1 }}
          noValidate
          autoComplete="off"
          className="wrapper"
        >
<<<<<<< Updated upstream
          <FormControlLabel
            {...register("gender", { required: true })}
            type="radio"
            value="female"
            control={<Radio />}
            label="Female"
          />

          <FormControlLabel
            {...register("gender", { required: true })}
            type="radio"
            value="male"
            control={<Radio />}
            label="Male"
          />
        </RadioGroup>
      </FormControl>

      <TextField
        id="filled-basic"
        label="OTP for email"
        variant="filled"
        fullWidth
      />
      <TextField
        id="filled-basic"
        label="OTP for mobile"
        variant="filled"
        fullWidth
      />
      <Button type="submit" variant="contained">
        Register
      </Button>
    </form>
=======
          <Grid container direction="row" className="register-container">
            <Grid item xs={4} className="image-wrapper">
              <img src={login} alt="login image" />
            </Grid>
            <Grid item xs={8} className="form-section">
              <form onSubmit={handleSubmit(handleRegister)}>
                <Grid item xs={12} className="main-head">
                  <h3 fw-bold>CREATE YOUR ACCOUNT</h3>
                </Grid>
                <Grid
                  container
                  direction="row"
                  marginBottom={1}
                  justifyContent="space-between"
                >
                  <Grid item>
                    <TextField
                      id="filled-basic"
                      label="FirstName"
                      {...register("firstName", {})}
                      variant="outlined"
                      size="small"
                    />
                    <p>{errors?.firstName?.message}</p>
                  </Grid>
                  <Grid item>
                    <TextField
                      id="filled-basic"
                      label="LastName"
                      {...register("lastName")}
                      variant="outlined"
                      size="small"
                    />
                    <p>{errors?.lastName?.message}</p>
                  </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="space-between">
                  <Grid item>
                    <TextField
                      id="filled-basic"
                      label="email"
                      {...register("email")}
                      variant="outlined"
                      size="small"
                    />
                    <p>{errors?.email?.message}</p>
                  </Grid>
                  <Grid item>
                    <TextField
                      id="filled-basic"
                      label="Mobile Number"
                      type="numeric"
                      variant="outlined"
                      size="small"
                      {...register("mobilenumber")}
                    />
                    <p>{errors?.mobilenumber?.message}</p>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  marginBottom={1}
                  justifyContent="space-between"
                >
                  <Grid item xs={6}>
                    <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                          {...register("gender", { required: true })}
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                          {...register("gender", { required: true })}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="date"
                      label="DOB"
                      type="date"
                      fullWidth
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>
                <TextField
                  id="filled-basic"
                  label="Pin"
                  variant="outlined"
                  size="small"
                />
                <Grid
                  marginBottom={5}
                  container
                  direction="row"
                  marginTop={2}
                  justifyContent="space-between"
                >
                  <Grid item>
                    <TextField
                      id="filled-basic"
                      label="OTP for email"
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="filled-basic"
                      label="OTP for mobile"
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                </Grid>
                <Button type="submit" variant="contained">
                  Register
                </Button>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
>>>>>>> Stashed changes
  );
}

export default RegisterPage;
