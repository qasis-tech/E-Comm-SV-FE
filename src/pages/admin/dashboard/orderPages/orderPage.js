import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
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
  Grid,
  Button,
  TablePagination,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Chip from "@mui/material/Chip";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CheckIcon from "@mui/icons-material/Check";

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

import "./list-order.styles.scss";
const OrderList = () => {
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

  const [orderData, setOrderData] = React.useState([]);
  const [orderShortDetails, setOrderShortDetails] = React.useState(null);
  const [orderListData, setOrderListData] = React.useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdlZXRodUB0ZXN0LmNvbSIsImlhdCI6MTY2MDI5NzkwNiwiZXhwIjoxNjYxMTYxOTA2fQ.qhDBNneysBl7A_MRi-0f0t8nsq034wp07EODXDEh2Eg";
  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}${URLS.order}`, {
        headers: { Authorization: ` ${token}` },
      })
      .then((res) => {
        console.log("product details", res.data);
        setOrderShortDetails(res.data.shorthanddetails);
        setOrderData(res.data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  const navigate = useNavigate();
  return (
    <Box className="list-order">
      <Grid container spacing={2} className="oder-search">
        <Grid item xs={11}>
          <TextField
            label="Search"
            fullWidth
            size="small"
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
        className="order-shorthand-main-section"
      >
        <Grid item xs={2}>
          <Box
            sx={{
              width: 150,
              backgroundColor: "primary.dark",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="col-md-4">
              <ShoppingCartIcon className="order-cart-icon-section" />
            </div>
            <div className="col-md-8 order-shorthand-section">
              <h3>Total Orders</h3>
              <h3>{orderShortDetails?.totalorders}</h3>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4} className="order-out-stock">
          <Box
            sx={{
              width: 300,
              height: 125,
              backgroundColor: "primary.dark",
              display: "flex",
            }}
          >
            <div className="col-md-4">
              <ShoppingCartCheckoutIcon className="order-cart-icon-section" />
            </div>
            <div className="col-md-8 order-shorthand-section">
              <h3>Order Pending</h3>
              <h3>{orderShortDetails?.pendingOrders}</h3>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              width: 320,
              height: 125,
              backgroundColor: "primary.dark",
              display: "flex",
            }}
          >
            <div className="col-md-2">
              <CheckIcon className="order-cart-icon-section" />
            </div>
            <div
              className="col-md-10 order-shorthand-section"
              style={{ paddingLeft: "30px" }}
            >
              <h3>Order Completed</h3>
              <h3>{orderShortDetails?.completedOrders}</h3>
            </div>
          </Box>
        </Grid>
      </Grid>
      <TableContainer className="order-table-wrapper" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order ID </TableCell>
              <TableCell>Category</TableCell>
              <TableCell> Subcategory</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderData?.length
              ? orderData?.map((orderItem) => {
                  return (
                    <TableRow
                      hover
                      className="order-row-section"
                      key={orderItem._id}
                      onClick={() =>
                        navigate(`/admin/order-details/${orderItem._id}`)
                      }
                    >
                      <TableCell component="th" scope="row">
                        #{orderItem?.orderId}
                      </TableCell>
                      <TableCell
                        sx={{ maxWidth: 350 }}
                        className="d-flex flex-wrap"
                      >
                        {orderItem?.product?.length &&
                          orderItem.product.map((e) => {
                            return (
                              <span className="border px-2 py-1 m-1 rounded shadow-sm text-center">
                                {e.category}
                              </span>
                            );
                          })}
                      </TableCell>

                      <TableCell>
                        {orderItem.product.length &&
                          orderItem.product.map((e) => {
                            return (
                              <span className="border px-2 py-1 m-1 rounded shadow-sm text-center">
                                {e.subCategory}
                              </span>
                            );
                          })}
                      </TableCell>
                      <TableCell>{orderItem.user.mobileNumber}</TableCell>
                      <TableCell>
                        <span
                          className={
                            orderItem.status === "pending" ? "pending" : ""
                          }
                        >
                          {orderItem.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  );
                })
              : null}
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
    </Box>
  );
};

export default OrderList;
