import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  Button,
  Box,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import Chip from "@mui/material/Chip";

import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <TableContainer component={Paper}>
        <h1>User</h1>
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
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell> Phone Number</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Created Date</TableCell>
              <TableCell>Updated Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow onClick={() => navigate("/user-details")}>
              <TableCell component="th" scope="row">
                Vaishna
              </TableCell>
              <TableCell component="th" scope="row">
                vaishnakp@gmail.com
              </TableCell>
              <TableCell>+91-764389026</TableCell>
              <TableCell>Thrissur</TableCell>
              <TableCell>25-03-2022</TableCell>
              <TableCell>25-03-2022</TableCell>
              <TableCell>
                <Chip label="Active" color="success" />
                <Chip label="Inactive" color="error" />
              </TableCell>
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

export default UserList;
