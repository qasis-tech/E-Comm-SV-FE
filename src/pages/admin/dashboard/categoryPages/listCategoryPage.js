import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import NotDataAvailable from "../../../../components/NoDataAvailable";
import { URLS } from "../../../../config/urls.config";
import RouterList from "../../../../routes/routerList";

import "./list-category.styles.scss";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  TablePagination,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";

import NotDataAvailable from "../../../../components/NoDataAvailable";
import { URLS } from "../../../../config/urls.config";
import RouterList from "../../../../routes/routerList";
import Loader from "../../../../components/Loader";

import "./list-category.styles.scss";

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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Pagination from "@mui/material/Pagination";
import SearchIcon from "@mui/icons-material/Search";
import { formatDate } from "../../../../utils/dateFormat";

const ListSubCat = ({ item }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {item?.subCategory?.length ? (
        item?.subCategory?.map((e, index) => {
          return (
            <span
              key={index}
              className="border px-2 py-1 m-1 rounded shadow-sm text-center"
            >
              {e.label}
            </span>
          );
        })
      ) : (
        <sapn>No sub categories</sapn>
      )}
    </div>
  );
};

const ListCategory = () => {
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

  const [categoryList, setCategoryList] = useState([]);
  const [count, setCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const [isLoading, setLoader] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [page, rowsPerPage]);

  const handleSearch = (searchValue) => {
    setLoader(true);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdlZXRodUB0ZXN0LmNvbSIsImlhdCI6MTY2MDI5NzkwNiwiZXhwIjoxNjYxMTYxOTA2fQ.qhDBNneysBl7A_MRi-0f0t8nsq034wp07EODXDEh2Eg";
    setSearchInput(searchValue);

    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}${
          URLS.category
        }?limit=${rowsPerPage}&skip=${page * rowsPerPage}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        setLoader(false);
        if (res) {
          setCategoryList(res.data.data);
          setCount(res.data.count);
        }
      })
      .catch((err) => {
        setLoader(false);
        console.log("err in Category LIst", err);
        setCategoryList([]);
      });
  };

  return (
    <Box className="list-category">
      <Grid container spacing={2} className="category-search">
        <Grid item xs={11}>
          <TextField
            label="Search"
            fullWidth
            size="small"
            onChange={(e) => handleSearch(e.target.value)}
            value={searchInput}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{ visibility: searchInput ? "visible" : "hidden" }}
                    onClick={() => handleSearch("")}
                  >
                    <CloseIcon />
                  </IconButton>
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
      <TableContainer className="table-wrapper" component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="table-heading">Category</TableCell>
              <TableCell className="table-heading"> Subcategory</TableCell>
              <TableCell className="table-heading">Created Date</TableCell>
              <TableCell className="table-heading">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <Loader />
            ) : categoryList?.length ? (
              categoryList?.map((item, index) => {
                return (
                  <TableRow hover className="row-section" key={item?._id}>
                    <TableCell
                      component="th"
                      scope="row"
                      onClick={() =>
                        navigate(
                          `${RouterList.admin.admin}/${RouterList.admin.addCategory}`
                        )
                      }
                    >
                      {item.label}
                    </TableCell>

                    <TableCell className="max-width-sc">
                      <ListSubCat item={item} />
                    </TableCell>

                    <TableCell>{formatDate(item?.createdAt)}</TableCell>
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
      {!isLoading ? (
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
          onClick={() =>
            navigate(
              `${RouterList.admin.admin}/${RouterList.admin.addCategory}`
            )
          }
        >
          <AddIcon />
        </Fab>
      </div>
    </Box>
  );
};

export default ListCategory;
