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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

const CategoryList = () => {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell align="right"> Subcategory</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Fruits
              </TableCell>
              <TableCell align="right">dry fruits</TableCell>
              <TableCell align="right">
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

      <div style={{ position: "absolute", bottom: "4em", right: "4em" }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </Box>
  );
};

export default CategoryList;
