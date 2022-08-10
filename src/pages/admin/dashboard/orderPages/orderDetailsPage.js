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
const OrderDetails = () => {
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
          <h3>Order Details</h3>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
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
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default OrderDetails;