import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import NotDataAvailable from "../../../../components/NoDataAvailable";
import { URLS } from "../../../../config/urls.config";
import RouterList from "../../../../routes/routerList";
import Loader from "../../../../components/Loader";

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
import CloseIcon from "@mui/icons-material/Close";

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

  const [listData, setListdata] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [stockShortDetails, setStockShortDetails] = useState(null);

  const [count, setCount] = useState(0);
  const [isLoading, setLoader] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const navigate = useNavigate();

  const handleChangePage = (e, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    getStockListApi();
  }, []);

  useEffect(() => {
    getStockListApi();
  }, [page, rowsPerPage]);

  useEffect(() => {
    if (searchInput === "") {
      getStockListApi();
    }
  }, [searchInput]);

  const getStockListApi = () => {
    setLoader(true);
    let URL =
      searchInput !== ""
        ? `${URLS.stock}?search=${searchInput}&limit=${rowsPerPage}&skip=${
            page * rowsPerPage
          }`
        : `${URLS.stock}?limit=${rowsPerPage}&skip=${page * rowsPerPage}`;
    axios
      .get(URL, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setLoader(false);
        setListdata(res.data.totalStock);
        setCount(res.count);
        setStockShortDetails(res.shorthanddetails);
      })
      .catch((err) => {
        setLoader(false);
        console.error("Error in stock List API", err);
        setListdata([]);
      });
  };

  return (
    <Box className="list-stock">
      <Grid container spacing={2} className="stock-search">
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
                  <IconButton onClick={() => getStockListApi()}>
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
      {!!listData?.length && (
        <Grid
          container
          spacing={2}
          marginTop={2}
          className="stock-shorthand-main-section"
        >
          <Grid item xs={3}>
            <Box className="shorthand">
              <div className="col-md-8 stock-shorthand-section">
                <h3 className="head">In Stock</h3>
                <h3 className="order-number">{stockShortDetails?.inStock}</h3>
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
              <div className="col-md-8 stock-shorthand-section">
                <h3 className="head">Out Stock</h3>
                <h3 className="order-number">{stockShortDetails?.outStock}</h3>
              </div>
              <div className="col-md-4 icon-part">
                <div className="cart-order-icon">
                  <ShoppingCartCheckoutIcon className="order-cart-icon-section" />
                </div>
              </div>
            </Box>
          </Grid>
        </Grid>
      )}
      {isLoading ? (
        <Loader />
      ) : listData?.length ? (
        <TableContainer className="stock-table-wrapper" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Subcategory</TableCell>
                <TableCell>Name</TableCell>
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
                  >
                    <TableCell
                      onClick={() =>
                        navigate(`/admin/stock-details/${listitem._id}`)
                      }
                      component="th"
                      scope="row"
                    >
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
      <div style={{ position: "fixed", bottom: "2em", right: "1em" }}>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() =>
            navigate(`${RouterList.admin.admin}/${RouterList.admin.addStock}`)
          }
        >
          <AddIcon />
        </Fab>
      </div>
    </Box>
  );
};

export default StockList;
