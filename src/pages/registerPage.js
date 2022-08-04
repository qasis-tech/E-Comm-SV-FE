import React from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    mobilenumber: yup
      .string()
      .phone("IN", true, "${path} is invalid")
      .required(),
  })
  .required();

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = (data) => {
    console.log("Data Result", data);
  };

  return (
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
          <FormControlLabel
            {...register("gender", { required: true })}
            type="radio"
            value="other"
            control={<Radio />}
            label="Other"
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
  );
}

export default RegisterPage;
