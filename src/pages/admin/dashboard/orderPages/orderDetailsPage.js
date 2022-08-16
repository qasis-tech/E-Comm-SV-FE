import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { URLS } from "../../../../config/urls.config";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box, Button, MenuItem, TextField } from "@mui/material";

const orderdetailsSchema = yup
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
const currencies = [
  {
    value: "Fruits",
    label: "Fruits",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
const OrderDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(orderdetailsSchema),
  });

  const [currency, setCurrency] = React.useState("Fruits");
  const handleOrderDetails = () => {};

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1 }} noValidate autoComplete="off">
          <form onSubmit={handleSubmit(handleOrderDetails)}>
            <h3>Order Details</h3>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  {...register("orderName")}
                  id="outlined-read-only-input"
                  label="Name"
                  defaultValue="Apple"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("orderCategory")}
                  id="outlined-read-only-input"
                  label="Category"
                  defaultValue="Fruits"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("orderSubcategory")}
                  id="outlined-read-only-input"
                  label="Subcategory"
                  defaultValue="Dry fruits"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("orderEmail")}
                  id="outlined-read-only-input"
                  label="Email"
                  defaultValue="abc@gmail.com"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("orderAddress")}
                  fullWidth
                  id="outlined-multiline-static"
                  label="Address"
                  defaultValue="jhbguydfwdixkwsuxdsuhxsx"
                  multiline
                  rows={4}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("orderLocation")}
                  id="outlined-read-only-input"
                  label="Location"
                  defaultValue="Kaloor"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("orderMobilenumber")}
                  id="outlined-read-only-input"
                  label="Phone Number"
                  defaultValue="+91-76490254"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("orderPincode")}
                  id="outlined-read-only-input"
                  label="Pincode"
                  defaultValue="680586"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-select-currency"
                  select
                  label="Subcategory"
                  value={currency}
                  onChange={handleChange}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Button variant="outlined">Cancel</Button>
            <Button variant="contained" color="primary">
              Change
            </Button>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default OrderDetails;
