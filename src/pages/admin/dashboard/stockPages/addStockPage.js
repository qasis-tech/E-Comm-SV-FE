import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { Box, Button, MenuItem, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import "./add-stock.styles.scss";
const stockaddSchema = yup
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
const AddStock = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(stockaddSchema),
  });
  const [currency, setCurrency] = React.useState("Fruits");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleStockAddpage = (data) => {
    console.log("StockAddpage Details", data);
  };
  return (
    <div className="add-stock">
      <Box noValidate autoComplete="off" className="stock-wrapper">
        <Grid
          container
          direction="row"
          spacing={2}
          className="add-stock-container"
        >
          <div className="stock-form-section col-md-8">
            <form onSubmit={handleSubmit(handleStockAddpage)}>
              <div className="main-heading">
                <h5 className="heading">Stock</h5>
              </div>
              <div className="main-form-container">
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-read-only-input"
                      fullWidth
                      label="Name"
                      size="small"
                      error={errors?.productname}
                      {...register("productname", {
                        required: "This is required.",
                      })}
                    />
                    <div className="error">{errors?.productname?.message}</div>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-read-only-input"
                      label="Quantity"
                      size="small"
                      fullWidth
                      error={errors?.productquantity}
                      {...register("productquantity", {
                        required: "This is required.",
                      })}
                    />
                    <div className="error">
                      {errors?.productquantity?.message}
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="outlined-select-currency"
                      select
                      label="Category"
                      size="small"
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
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="outlined-select-currency"
                      select
                      label="Subcategory"
                      size="small"
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

export default AddStock;
