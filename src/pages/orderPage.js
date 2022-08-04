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
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Chip from "@mui/material/Chip";
import SearchIcon from "@mui/icons-material/Search";
const OrderList = () => {
  return (
    <Box>
      <TableContainer component={Paper}>
        <h1>Order</h1>
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
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Category</TableCell>
              <TableCell> Subcategory</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                #80632
              </TableCell>
              <TableCell component="th" scope="row">
                Fruits
              </TableCell>
              <TableCell>dry fruits</TableCell>
              <TableCell>+91-8953013692</TableCell>
              <TableCell>
                <Chip label="Shipped" color="primary" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ position: "absolute", bottom: "4em", right: "4em" }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </Box>
  );
};

export default OrderList;
