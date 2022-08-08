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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import "./register.styles.scss";

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
    <div className="main-container">
      <Box noValidate autoComplete="off" className="wrapper">
        <Grid container direction="row" className="register-container">
          <form onSubmit={handleSubmit(handleRegister)}>
            <h1>REGISTRATION FORM</h1>
            <TextField
              id="filled-basic"
              label="FirstName"
              {...register("firstName", {})}
              variant="filled"
              fullWidth
            />
            <p>{errors?.firstName?.message}</p>
            <TextField
              id="filled-basic"
              label="LastName"
              {...register("lastName")}
              variant="filled"
              fullWidth
            />
            <p>{errors?.lastName?.message}</p>
            <TextField
              id="filled-basic"
              label="email"
              {...register("email")}
              variant="filled"
              fullWidth
            />
            <p>{errors?.email?.message}</p>
            <TextField type="numeric" {...register("mobilenumber")} />
            <p>{errors?.mobilenumber?.message}</p>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
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
        </Grid>
      </Box>
    </div>
  );
}

export default RegisterPage;
