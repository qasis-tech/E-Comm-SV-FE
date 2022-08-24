import React, { useEffect, useState } from "react";
import { URLS } from "../../../../config/urls.config";
import { useNavigate } from "react-router-dom";
import NotDataAvailable from "../../../../components/NoDataAvailable";
import axios from "axios";
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
  Button,
  Box,
  InputAdornment,
  IconButton,
  Grid,
  TextField,
  Fab,
  TablePagination,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import Chip from "@mui/material/Chip";
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
import "./list-user.styles.scss";

const UserList = () => {
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
  const [userData, setUserData] = React.useState([]);
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

  useEffect(() => {
    getUserListApi();
  }, []);

  useEffect(() => {
    getUserListApi();
  }, [page, rowsPerPage]);

  useEffect(() => {
    if (searchInput === "") {
      getUserListApi();
    }
  }, [searchInput]);

  const getUserListApi = () => {
    console.log("api");
    setLoader(true);
    let URL =
      searchInput !== ""
        ? `${URLS.user}?search=${searchInput}&limit=${rowsPerPage}&skip=${
            page * rowsPerPage
          }`
        : `${URLS.user}?limit=${rowsPerPage}&skip=${page * rowsPerPage}`;
    axios
      .get(URL, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setLoader(false);
        console.log("ressss=>", res);
        setUserData(res.data);
        setCount(res.data.count);
      })
      .catch((err) => {
        setLoader(false);
        console.log("error", err);
        setUserData([]);
      });
  };
  const navigate = useNavigate();

  return (
    <Box className="list-user">
      <Grid container spacing={2} className="user-search">
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
                  <IconButton onClick={() => getUserListApi()}>
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
      <TableContainer className="user-table-wrapper" component={Paper}>
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
            {userData.map((useritem) => {
              return (
                <TableRow
                  hover
                  key={useritem._id}
                  onClick={() =>
                    navigate(`/admin/users-details/${useritem._id}`)
                  }
                  className="user-row-section"
                >
                  <TableCell component="th" scope="row">
                    {useritem.firstName + " " + useritem.lastName}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {useritem.email}
                  </TableCell>
                  <TableCell>{useritem.mobileNumber}</TableCell>
                  <TableCell>{useritem.location}</TableCell>
                  <TableCell>{formatDate(useritem?.createdAt)}</TableCell>
                  <TableCell>{formatDate(useritem?.updatedAt)}</TableCell>
                  <TableCell>
                    <span className="actives">Active</span>
                    <span className="inactive">Inactive</span>
                  </TableCell>
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
            {isLoading ? (
              <Loader />
            ) : userData?.length ? (
              userData.map((useritem) => {
                return (
                  <TableRow
                    hover
                    key={useritem._id}
                    className="user-row-section"
                  >
                    <TableCell
                      onClick={() =>
                        navigate(`/admin/users-details/${useritem._id}`)
                      }
                      component="th"
                      scope="row"
                    >
                      {useritem.firstName + " " + useritem.lastName}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {useritem.email}
                    </TableCell>
                    <TableCell>{useritem.mobileNumber}</TableCell>
                    <TableCell>{useritem.location}</TableCell>
                    <TableCell>{formatDate(useritem?.createdAt)}</TableCell>
                    <TableCell>{formatDate(useritem?.updatedAt)}</TableCell>
                    <TableCell>
                      <Chip label="Active" color="success" />
                      <Chip label="Inactive" color="error" />
                    </TableCell>
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
          onClick={() =>
            navigate(`${RouterList.admin.admin}/${RouterList.admin.addUser}`)
          }
        >
          <AddIcon />
        </Fab>
      </div>
    </Box>
  );
};

export default UserList;
