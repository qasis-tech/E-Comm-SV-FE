import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { startCase } from "lodash";

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
  Chip,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import { formatDate } from "../../../../utils/dateFormat";
import { URLS } from "../../../../config/urls.config";
import NotDataAvailable from "../../../../components/NoDataAvailable";
import RouterList from "../../../../routes/routerList";
import Loader from "../../../../components/Loader";
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
  const handleChangePage = (e, newPage) => setPage(newPage);
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
    setLoader(true);
    let URL =
      searchInput !== ""
        ? `${URLS.user}?search=${searchInput}&limit=${rowsPerPage}&skip=${
            page * rowsPerPage
          }`
        : `${URLS.user}?limit=${rowsPerPage}&skip=${page * rowsPerPage}`;
    axios
      .get(URL, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setLoader(false);
        setUserData(res.data);
        setCount(res.data.count);
      })
      .catch((err) => {
        setLoader(false);
        console.error("error in User List API", err);
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
                    onClick={() => setSearchInput("")}
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
      {isLoading ? (
        <Loader />
      ) : userData?.length ? (
        <TableContainer className="user-table-wrapper" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Created Date</TableCell>
                <TableCell>Updated Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData?.map((useritem) => {
                return (
                  <TableRow
                    hover
                    key={useritem._id}
                    onClick={() =>
                      navigate(
                        `${RouterList.admin}/${RouterList.admin.userDetails}/${useritem._id}`
                      )
                    }
                    className="user-row-section"
                  >
                    <TableCell component="th" scope="row">
                      {`${startCase(useritem.firstName)} ${startCase(
                        useritem.lastName
                      )}`}
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

              {userData?.map((useritem) => {
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
              })}
            </TableBody>
          </Table>
          {!!count > 10 && (
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
