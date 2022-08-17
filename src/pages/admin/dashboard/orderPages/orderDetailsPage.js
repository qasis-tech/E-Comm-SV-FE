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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const orderdetailsSchema = yup
  .object()
  .shape({
    orderName: yup.string().required(),
    orderCategory: yup.string().required(),
    orderSubcategory: yup.string().required(),
    orderEmail: yup.string().email().required(),
    orderAddress: yup.string().required(),
    orderLocation: yup.string().required(),
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
  const [orderDetailData, setOrderDetail] = React.useState([]);
  const [selectedStatus, setSelectedStatus] = React.useState([]);

  const { id } = useParams();
  console.log("parms ==>", id);

  React.useEffect(() => {
    getOrderDetailsApi();
  }, []);

  const getOrderDetailsApi = () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdlZXRodUB0ZXN0LmNvbSIsImlhdCI6MTY2MDI5NzkwNiwiZXhwIjoxNjYxMTYxOTA2fQ.qhDBNneysBl7A_MRi-0f0t8nsq034wp07EODXDEh2Eg";
    console.log("url", `${process.env.REACT_APP_BASE_URL}${URLS.order}/${id}`);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}${URLS.order}/${id}`, {
        headers: { Authorization: ` ${token}` },
      })
      .then((res) => {
        console.log("ress =>>", res.data.data);
        setOrderDetail(res.data.data);

        setValue("orderMobilenumber", res.data.data.user.mobileNumber);
        setValue("orderEmail", res.data.data.user.email);
        setValue("orderPincode", res.data.data.user.pinCode);
        setValue("orderLocation", res.data.data.user.location);
        setValue("orderAddress", res.data.data.user.primaryAddress);
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
      <Container>
        <Box noValidate autoComplete="off">
          <form onSubmit={handleSubmit(handleOrderDetails)}>
            <h3>Order Details</h3>
            <Grid container spacing={2}>
              {/* <Grid item xs={6}>
                <TextField
                  {...register("orderName")}
                  id="outlined-read-only-input"
                  label="Name"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid> */}
              {/* <Grid item xs={6}>
                <TextField
                  {...register("orderCategory")}
                  id="outlined-read-only-input"
                  label="Category"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid> */}
              {/* <Grid item xs={6}>
                <TextField
                  {...register("orderSubcategory")}
                  id="outlined-read-only-input"
                  label="Subcategory"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid> */}
              <Grid item xs={6}>
                <TextField
                  {...register("orderEmail")}
                  id="outlined-read-only-input"
                  placeholder="Email"
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
                  placeholder="Address"
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
                  placeholder="Location"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("orderMobilenumber")}
                  id="outlined-read-only-input"
                  placeholder="Phone Number"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("orderPincode")}
                  id="outlined-read-only-input"
                  placeholder="Pincode"
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
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">name</TableCell>
                  <TableCell align="right">category</TableCell>
                  <TableCell align="right">Subcategory</TableCell>
                  <TableCell align="right">unit</TableCell>
                  <TableCell align="right">status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderDetailData?.product?.length
                  ? orderDetailData?.product?.map((orderdetail) => {
                      return (
                        <TableRow key={orderdetail._id}>
                          <TableCell align="right">
                            {orderdetail.name}
                          </TableCell>
                          <TableCell align="right">
                            {orderdetail.category}
                          </TableCell>
                          <TableCell align="right">
                            {orderdetail.subCategory}
                          </TableCell>
                          <TableCell align="right">
                            {orderdetail.unit}
                          </TableCell>
                          <TableCell align="right">
                            {orderDetailData.status}
                          </TableCell>
                        </TableRow>
                      );
                    })
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default OrderDetails;
