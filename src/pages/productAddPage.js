import { Box, Button, TextField } from "@mui/material";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";

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
const ProductAdd = () => {
  const [currency, setCurrency] = React.useState("Fruits");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
  return (
    <form>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField fullWidth variant="outlined" label="Name" />
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
        </div>
        <div style={{ display: "flex" }}>
          <TextField
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
          <div style={{ display: "flex" }}>
            <TextField
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
            <TextField variant="outlined" label="Quantity" />
          </div>
        </div>
        <div>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
          />
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Features"
            multiline
            rows={4}
          />
        </div>
        <TextField variant="outlined" label="Price" />
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <TextField
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
            <TextField variant="outlined" label="Quantity" />
          </div>
          <TextField variant="outlined" label="Offer Price" />
        </div>
        <div>
          <TextField fullWidth variant="outlined" type="file" />
          <TextField fullWidth variant="outlined" type="file" />
        </div>
        <Button variant="contained" color="primary">
          submit
        </Button>
      </Box>
    </form>
  );
};

export default ProductAdd;
