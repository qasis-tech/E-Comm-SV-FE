import { Box, Button, MenuItem, TextField } from "@mui/material";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
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
const StockAdd = () => {
  const [currency, setCurrency] = React.useState("Fruits");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          component="form"
          sx={{ flexGrow: 1 }}
          noValidate
          autoComplete="off"
        >
          <h3>Stock</h3>
          <Grid container spacing={2}>
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
            <Grid item xs={6}>
              <TextField id="outlined-read-only-input" label="Name" />
            </Grid>
            <Grid item xs={6}>
              <TextField id="outlined-read-only-input" label="Quantity" />
            </Grid>
            <Grid item xs={6}>
              <TextField id="outlined-read-only-input" label="Created Date" />
            </Grid>
            <Grid item xs={6}>
              <TextField id="outlined-read-only-input" label="Updated Date" />
            </Grid>
          </Grid>
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default StockAdd;
