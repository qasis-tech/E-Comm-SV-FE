import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { URLS } from "../../../../config/urls.config";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RouterList from "../../../../routes/routerList";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box, Button, MenuItem, TextField, Autocomplete } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./order-details.styles.scss";
const orderdetailsSchema = yup
  .object()
  .shape({
    orderName: yup.string(),
    orderCategory: yup.string(),
    orderSubcategory: yup.string(),
    orderEmail: yup.string().email(),
    orderAddress: yup.string(),
    orderLocation: yup.string(),
    orderMobilenumber: yup
      .string()
      .phone("IN", true, "Mobile Number is invalid"),
    orderPincode: yup
      .string()
      .matches(/^[1-9][0-9]{5}$/, "Invalid zipcode (682315)"),
    orderStatus: yup.string(),
  })
  .required();

const status = [
  {
    label: "Awaiting Order Confirming",
  },
  {
    label: "Awaiting Payment",
  },
  {
    label: "Order Pending",
  },
  {
    label: "Order Received",
  },
  {
    label: "Awaiting Pickup",
  },
  {
    label: "Shipped",
  },
  {
    label: "Cancelled",
  },
  {
    label: "Awaiting Refunding",
  },
  {
    label: "Refunded",
  },
  {
    label: "Delivered",
  },
];

const OrderDetails = () => {
  const [orderDetailData, setOrderDetail] = React.useState([]);
  const [selectedStatus, setSelectedStatus] = React.useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(orderdetailsSchema),
  });

  React.useEffect(() => {
    getOrderDetailsApi();
  }, []);

  const getOrderDetailsApi = () => {
    axios
      .get(`${URLS.order}/${id}`)
      .then((res) => {
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

  const putOrderDetailsApi = () => {
    let payload = {
      status: selectedStatus.label,
    };
    axios
      .put(`${URLS.order}/${id}`, payload, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        if (res) {
          navigate(`${RouterList.admin.admin}/${RouterList.admin.orderList}`);
        }
      })
      .catch((err) => {
        console.log("error in put api===>>>", err);
      });
  };

  const handleChange = (e, val) => {
    setSelectedStatus(val);
  };

  return (
    <div className="order-details">
      <Box noValidate autoComplete="off" className="order-details-wrapper">
        <Grid
          container
          direction="row"
          spacing={2}
          className="order-details-container"
        >
          <div className="order-details-form-section col-md-8">
            <form onSubmit={handleSubmit(putOrderDetailsApi)}>
              <div className="main-order-details-heading">
                <div className="col-md-4">
                  <h5 className="heading">Order Details</h5>
                </div>
                <div
                  className="order-buttons col-md-8"
                  style={{ display: "flex" }}
                >
                  <Grid item xs={2}>
                    <Button className="order-cancel-btn">Cancel</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      fullWidth
                      type="submit"
                      className="order-submit-btn"
                    >
                      Submit
                    </Button>
                  </Grid>
                </div>
              </div>
              <div className="order-details-container ">
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Name"
                      fullWidth
                      size="small"
                      defaultValue="Email"
                      {...register("orderEmail")}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Location"
                      fullWidth
                      size="small"
                      defaultValue="Location"
                      {...register("orderLocation")}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid container spacing={2} marginTop={1} className="address">
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-helperText"
                        label="Location"
                        fullWidth
                        size="small"
                        defaultValue="Address"
                        multiline
                        rows={4}
                        {...register("orderAddress")}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} marginTop={1} className="address">
                    <Grid item xs={4}>
                      <TextField
                        id="outlined-helperText"
                        label="Phone Number"
                        fullWidth
                        size="small"
                        defaultValue="Phone Number"
                        InputProps={{
                          readOnly: true,
                        }}
                        {...register("orderMobilenumber")}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        label="Pincode"
                        fullWidth
                        size="small"
                        defaultValue="Pincode"
                        InputProps={{
                          readOnly: true,
                        }}
                        {...register("orderPincode")}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      {status?.length && (
                        <Autocomplete
                          options={status}
                          getOptionLabel={(option) => option.label || ""}
                          isOptionEqualToValue={(option, value) =>
                            option.label === value.label
                          }
                          value={selectedStatus}
                          onChange={(e, val) => handleChange(e, val)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Status"
                              size="small"
                            />
                          )}
                        />
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </form>
          </div>
        </Grid>
      </Box>

      <TableContainer component={Paper} style={{ marginTop: "2em" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell>category</TableCell>
              <TableCell>Subcategory</TableCell>
              <TableCell>unit</TableCell>
              <TableCell>status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderDetailData?.product?.length
              ? orderDetailData?.product?.map((orderdetail) => {
                  return (
                    <TableRow key={orderdetail._id}>
                      <TableCell>{orderdetail.name}</TableCell>
                      <TableCell>{orderdetail.category}</TableCell>
                      <TableCell>{orderdetail.subCategory}</TableCell>
                      <TableCell>{orderdetail.unit}</TableCell>
                      <TableCell>{orderDetailData.status}</TableCell>
                    </TableRow>
                  );
                })
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrderDetails;
