import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { URLS } from "../../../config/urls.config";
import NotDataAvailable from "../../../components/NoDataAvailable";
import Loader from "../../../components/Loader";
import RouterList from "../../../routes/routerList";

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
import CloseIcon from "@mui/icons-material/Close";

import "./list-order.styles.scss";

const OrderList = () => {
  const [state, setState] = useState({
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

  const [orderData, setOrderData] = useState();
  const [orderShortDetails, setOrderShortDetails] = useState(null);

  const [searchInput, setSearchInput] = useState("");
  const [count, setCount] = useState(0);
  const [isLoading, setLoader] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (e, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    getOrderListApi();
  }, []);

  useEffect(() => {
    getOrderListApi();
  }, [page, rowsPerPage]);

  useEffect(() => {
    getOrderListApi();
  }, [searchInput]);

  const getOrderListApi = () => {
    setLoader(true);
    let URL =
      searchInput !== ""
        ? `${URLS.order}?search=${searchInput}&limit=${rowsPerPage}&skip=${
            page * rowsPerPage
          }`
        : `${URLS.order}?limit=${rowsPerPage}&skip=${page * rowsPerPage}`;
    axios
      .get(URL)
      .then((res) => {
        setLoader(false);
        setOrderShortDetails(res.shorthanddetails);
        setOrderData(res.data);
        setCount(res.count);
      })
      .catch((err) => {
        setLoader(false);
        console.error("Error in Order List API ", err);
        setOrderData([]);
      });
  };

  const navigate = useNavigate();

  return (
    <Box className="list-order">
      <Grid container spacing={2} className="oder-search">
        <Grid item xs={11}>
          <TextField
            label="Search"
            fullWidth
            size="small"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{
                      visibility: searchInput !== "" ? "visible" : "hidden",
                    }}
                    onClick={() => {
                      setSearchInput("");
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <IconButton onClick={() => getOrderListApi()}>
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
      {!!orderData?.length && (
        <Grid
          container
          spacing={2}
          marginTop={2}
          className="order-shorthand-main-section"
        >
          <Grid item xs={3}>
            <Box className="shorthand">
              <div className="col-md-8 order-shorthand-section">
                <h3 className="head">Total Orders</h3>
                <h3 className="order-number">
                  {orderShortDetails?.totalorders}
                </h3>
              </div>
              <div className="col-md-4 icon-part">
                <div className="cart-order-icon">
                  <ShoppingCartIcon className="order-cart-icon-section" />
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="shorthand">
              <div className="col-md-8 order-shorthand-section">
                <h3 className="head">Orders Pending</h3>
                <h3 className="order-number">
                  {orderShortDetails?.pendingOrders}
                </h3>
              </div>
              <div className="col-md-4 icon-part">
                <div className="cart-order-icon">
                  <ShoppingCartCheckoutIcon className="order-cart-icon-section" />
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="shorthand">
              <div className="col-md-8 order-shorthand-section">
                <h3 className="head">Order Completed</h3>
                <h3 className="order-number">
                  {orderShortDetails?.completedOrders}
                </h3>
              </div>
              <div className="col-md-4 icon-part">
                <div className="cart-order-icon">
                  <CheckIcon className="order-cart-icon-section" />
                </div>
              </div>
            </Box>
          </Grid>
        </Grid>
      )}
      {isLoading ? (
        <Loader />
      ) : orderData?.length ? (
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
              {orderData?.map((orderItem) => {
                return (
                  <TableRow
                    hover
                    className="order-row-section"
                    key={orderItem._id}
                    onClick={() =>
                      navigate(
                        `${RouterList.admin.admin}/${RouterList.admin.orderDetails}/${orderItem._id}`
                      )
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
                          orderItem.status === "Order Pending"
                            ? "pending"
                            : orderItem.status === "Awaiting order confirming"
                            ? "await"
                            : orderItem.status === "Awaiting payment"
                            ? "await"
                            : orderItem.status === "Awaiting pickup"
                            ? "await"
                            : orderItem.status === "Awaiting refunding"
                            ? "await"
                            : orderItem.status === "Order received"
                            ? "received"
                            : orderItem.status === "Shipped"
                            ? "shipped"
                            : orderItem.status === "Cancelled"
                            ? "cancelled"
                            : orderItem.status === "Refunded"
                            ? "refund"
                            : "delivered"
                        }
                      >
                        {orderItem.status}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          {!isLoading && count > 10 && (
            <div className="pagination-section">
              <TablePagination
                component="div"
                count={count}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
          )}
        </TableContainer>
      ) : (
        <NotDataAvailable />
      )}
    </Box>
  );
};

export default OrderList;
