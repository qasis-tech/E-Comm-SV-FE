import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { URLS } from "../../../../config/urls.config";

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
  Fab,
  TablePagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";

import { formatDate } from "../../../../utils/dateFormat";
import "./list-stock.styles.scss";

const StockList = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const [listData, setListdata] = React.useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdlZXRodUB0ZXN0LmNvbSIsImlhdCI6MTY2MDI5NzkwNiwiZXhwIjoxNjYxMTYxOTA2fQ.qhDBNneysBl7A_MRi-0f0t8nsq034wp07EODXDEh2Eg";
  console.log("listdata", listData);
  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}${URLS.stock}`, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("ress", res);
        setListdata(res.data.data.totalStock);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  const navigate = useNavigate();
  return (
    <Box className="list-stock">
      <Grid container spacing={2} className="stock-search">
        <Grid item xs={11}>
          <TextField
            label="Search"
            fullWidth
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={1}>
          <div>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <FilterListIcon />
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        marginTop={2}
        className="shorthand-main-section"
      >
        <Grid item xs={4}>
          <Box
            sx={{
              width: 300,
              height: 125,
              backgroundColor: "primary.dark",
              display: "flex",
            }}
          >
            <div className="col-md-4">
              <ShoppingCartIcon className="cart-icon-section" />
            </div>
            <div className="col-md-8 shorthand-section">
              <h3>In Stock</h3>
              <h3>100</h3>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4} className="out-stock">
          <Box
            sx={{
              width: 300,
              height: 125,
              backgroundColor: "primary.dark",
              display: "flex",
            }}
          >
            <div className="col-md-4">
              <ShoppingCartCheckoutIcon className="cart-icon-section" />
            </div>
            <div className="col-md-8 shorthand-section">
              <h3>Out Stock</h3>
              <h3>100</h3>
            </div>
          </Box>
        </Grid>
      </Grid>
      <TableContainer className="stock-table-wrapper" component={Paper}>
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
            {listData?.map((listitem) => {
              return (
                <TableRow
                  hover
                  className="stock-row-section"
                  key={listitem._id}
                  onClick={() => navigate("/stock-details")}
                >
                  <TableCell component="th" scope="row">
                    {listitem.category}
                  </TableCell>
                  <TableCell>{listitem.subCategory}</TableCell>
                  <TableCell>{listitem.product}</TableCell>
                  <TableCell>{listitem.quantity}</TableCell>
                  <TableCell>{formatDate(listitem?.createdAt)}</TableCell>
                  <TableCell>{formatDate(listitem?.updatedAt)}</TableCell>
                  <TableCell>
                    <Button>
                      <DeleteIcon className="delete-icon" />
                    </Button>
                    <Button>
                      <CreateIcon className="edit-icon" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination-section">
        <TablePagination
          component="div"
          count={20}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
      <div style={{ position: "fixed", bottom: "2em", right: "1em" }}>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => navigate("/admin/add-stock")}
        >
          <AddIcon />
        </Fab>
      </div>
    </Box>
  );
};

export default StockList;
