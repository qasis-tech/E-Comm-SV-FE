import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  Box,
  InputAdornment,
  IconButton,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

import { useNavigate } from "react-router-dom";
const StockList = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <TableContainer component={Paper}>
        <h1>Stock</h1>
        <TextField
          label="Search"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box
              sx={{
                width: 300,
                height: 125,
                backgroundColor: "primary.dark",
              }}
            >
              <ShoppingCartIcon />
              <h3>In Stock</h3>
              <h3>100</h3>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                width: 300,
                height: 125,
                backgroundColor: "primary.dark",
              }}
            >
              <ShoppingCartCheckoutIcon />
              <h3>Out Stock</h3>
              <h3>100</h3>
            </Box>
          </Grid>
        </Grid>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell> Subcategory</TableCell>
              <TableCell> Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Created Date</TableCell>
              <TableCell>Updated Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Fruits
              </TableCell>
              <TableCell>dry fruits</TableCell>
              <TableCell>Apple</TableCell>
              <TableCell>100</TableCell>
              <TableCell>20-01-2021</TableCell>
              <TableCell>28-02-2021</TableCell>
              <TableCell>
                <Button variant="outlined">
                  <DeleteIcon />
                </Button>
                <Button variant="outlined">
                  <CreateIcon />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StockList;
