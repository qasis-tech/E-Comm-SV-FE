import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { URLS } from "../../../../config/urls.config";
import { useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box, Button, MenuItem, TextField } from "@mui/material";

const orderdetailsSchema = yup
  .object()
  .shape({
    orderName: yup.string().required(),
    orderCategory: yup.string().required(),
    orderSubcategory: yup.string().required(),
    orderEmail: yup.string().email().required(),
    orderAddress: yup.string().required(),

    orderMobilenumber: yup
      .string()
      .phone("IN", true, "Mobile Number is invalid")
      .required(),
    orderPincode: yup
      .string()
      .matches(/^[1-9][0-9]{5}$/, "Invalid zipcode (682315)"),
    orderStatus: yup.string().required(),
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

  const { orderId } = useParams();
  console.log("parms ==>", orderId);

  React.useEffect(() => {
    getOrderDetailsApi();
  }, []);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdlZXRodUB0ZXN0LmNvbSIsImlhdCI6MTY2MDI5NzkwNiwiZXhwIjoxNjYxMTYxOTA2fQ.qhDBNneysBl7A_MRi-0f0t8nsq034wp07EODXDEh2Eg";

  const getOrderDetailsApi = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}${URLS.order}/${orderId}`, {
        headers: { Authorization: ` ${token}` },
      })
      .then((res) => {
        console.log("ress =>>", res);
        // setValue("orderName", res.data.data);
        // setValue("userLastName", res.data.data.lastName);
        // setValue("userMobilenumber", res.data.data.mobileNumber);
        // setValue("userEmail", res.data.data.email);
        // setValue("userPincode", res.data.data.pinCode);
        // setValue("userGender", res.data.data.gender);
      })

      .catch((err) => {
        console.log("err in Category LIst", err);
      });
  };

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
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("orderStatus")}
                  fullWidth
                  id="outlined-select-currency"
                  select
                  label="Status"
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
