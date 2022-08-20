import { Box, Button, MenuItem, TextField } from "@mui/material";
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./stock-details.styles.scss";
const stockaddpageSchema = yup
  .object()
  .shape({
    productname: yup.string().required(),
    productquantity: yup.string().required(),
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
const StockDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(stockaddpageSchema),
  });
  const [currency, setCurrency] = React.useState("Fruits");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleStockAddpage = (data) => {
    console.log("StockAddpage Details", data);
  };
  return (
    <div className="details-stock">
      <Box noValidate autoComplete="off" className="stock-details-wrapper">
        <Grid
          container
          direction="row"
          spacing={2}
          className="details-stock-container"
        >
          <div className="stock-details-form-section col-md-8">
            <form onSubmit={handleSubmit(handleStockAddpage)}>
              <div className="main-heading">
                <h5 className="heading">Stock Details</h5>
              </div>
              <div className="main-form-container">
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Name"
                      fullWidth
                      size="small"
                      defaultValue="Kiwi"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Quantity"
                      fullWidth
                      size="small"
                      defaultValue="100"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} marginTop={1}>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="category"
                      fullWidth
                      size="small"
                      defaultValue="Fruits"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-helperText"
                      label="Subcategory"
                      fullWidth
                      size="small"
                      defaultValue="Fresh"
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="row submit-button">
                <Grid item xs={2}>
                  <Button>Cancel</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="submit-btn"
                  >
                    submit
                  </Button>
                </Grid>
              </div>
            </form>
          </div>
        </Grid>
      </Box>
    </div>
  );
};

export default StockDetails;
