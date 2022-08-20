import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NotDataAvailable from "../../../../components/NoDataAvailable";
import { URLS } from "../../../../config/urls.config";
import RouterList from "../../../../routes/routerList";

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
  Grid,
  TablePagination,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import SearchIcon from "@mui/icons-material/Search";
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

import "./list-product.styles.scss";
import Loader from "../../../../components/Loader";

const ListProduct = () => {
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
  const [productData, setProductData] = React.useState([]);
  const [searchInput, setSearchInput] = useState("");

  const [count, setCount] = useState(0);
  const [isLoading, setLoader] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    getProductListApi();
  }, []);

  useEffect(() => {
    getProductListApi();
  }, [page, rowsPerPage]);

  useEffect(() => {
    if (searchInput === "") {
      getProductListApi();
    }
  }, [searchInput]);

  const getProductListApi = () => {
    setLoader(true);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdlZXRodUB0ZXN0LmNvbSIsImlhdCI6MTY2MDI5NzkwNiwiZXhwIjoxNjYxMTYxOTA2fQ.qhDBNneysBl7A_MRi-0f0t8nsq034wp07EODXDEh2Eg";
    let URL =
      searchInput !== ""
        ? `${process.env.REACT_APP_BASE_URL}${
            URLS.product
          }?search=${searchInput}&limit=${rowsPerPage}&skip=${
            page * rowsPerPage
          }`
        : `${process.env.REACT_APP_BASE_URL}${
            URLS.product
          }?limit=${rowsPerPage}&skip=${page * rowsPerPage}`;

    axios
      .get(URL, {
        headers: { Authorization: ` ${token}` },
      })
      .then((res) => {
        setLoader(false);
        setProductData(res.data.data);
        setCount(res.data.count);
      })
      .catch((err) => {
        setLoader(false);
        console.log("error", err);
        setProductData([]);
      });
  };
  const navigate = useNavigate();

  return (
    <Box className="list-product">
      <Grid container spacing={2} className="product-search">
        <Grid item xs={11}>
          <TextField
            fullWidth
            label="Search"
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
                  <IconButton onClick={() => getProductListApi()}>
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
      <TableContainer className="product-table-wrapper" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell> Subcategory</TableCell>
              <TableCell>Unit</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <Loader />
            ) : productData?.length ? (
              productData?.map((product) => {
                return (
                  <TableRow
                    hover
                    className="product-row-section"
                    key={product._id}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      onClick={() =>
                        navigate(
                          `${RouterList.admin.admin}/${RouterList.admin.productDetails}`
                        )
                      }
                    >
                      {product.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {product.category}
                    </TableCell>
                    <TableCell>{product.subCategory}</TableCell>
                    <TableCell>{product.unit}</TableCell>
                    <TableCell>{product.price}</TableCell>
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
              })
            ) : (
              <NotDataAvailable />
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {!isLoading && count > 10 ? (
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
      ) : null}
      <div style={{ position: "fixed", bottom: "2em", right: "1em" }}>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => navigate("/admin/add-products")}
        >
          <AddIcon />
        </Fab>
      </div>
    </Box>
  );
};

export default ListProduct;
