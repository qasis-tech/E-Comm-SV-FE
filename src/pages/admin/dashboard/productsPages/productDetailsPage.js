import { Box, Button, MenuItem, TextField } from "@mui/material";
import * as React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

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
const ProductDetails = () => {
  const [currency, setCurrency] = React.useState("Fruits");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box
          component="form"
          sx={{ flexGrow: 1 }}
          noValidate
          autoComplete="off"
        >
          <h3>Product Details</h3>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth variant="outlined" label="Name" />
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
            <Grid item xs={4}>
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
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="Unit"
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
            <Grid item xs={4}>
              <TextField fullWidth variant="outlined" label="Quantity" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Features"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth variant="outlined" label="Price" />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="Unit"
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
            <Grid item xs={4}>
              <TextField fullWidth variant="outlined" label="Quantity" />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth variant="outlined" label="Offer Price" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth variant="outlined" type="file" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth variant="outlined" type="file" />
            </Grid>
          </Grid>
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained" color="primary">
            submit
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default ProductDetails;
