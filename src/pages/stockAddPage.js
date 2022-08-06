import { Box, Button, MenuItem, TextField } from "@mui/material";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
const StockAdd = () => {
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
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1 }} noValidate autoComplete="off">
          <form onSubmit={handleSubmit(handleStockAddpage)}>
            <h3>Stock</h3>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Name"
                  {...register("productname")}
                />
                <p>{errors?.productname?.message}</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Quantity"
                  {...register("productquantity")}
                />
                <p>{errors?.productquantity?.message}</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-select-currency"
                  select
                  label="Category"
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
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default StockAdd;
