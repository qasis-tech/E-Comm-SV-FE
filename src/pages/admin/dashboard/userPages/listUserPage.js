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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import Chip from "@mui/material/Chip";
import * as React from "react";

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
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

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
  React.useEffect(() => {
    axios
      .get("http://localhost:4000/signup", {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("ressss=>", res);
        setUserData(res.data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  const navigate = useNavigate();
  return (
    <Box>
      <TableContainer component={Paper}>
        <h1>User</h1>
        <Grid item xs={2} style={{ display: "flex" }}>
          <Grid item xs={4}>
            <TextField
              label="Search"
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
          <Grid item xs={2}>
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
                  key={useritem._id}
                  onClick={() => navigate("/admin/users-details")}
                >
                  <TableCell component="th" scope="row">
                    {useritem.firstName + " " + useritem.lastName}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {useritem.email}
                  </TableCell>
                  <TableCell>{useritem.mobileNumber}</TableCell>
                  <TableCell>thrissur</TableCell>
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
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ position: "absolute", bottom: "4em", right: "4em" }}>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => navigate("/admin/add-user")}
        >
          <AddIcon />
        </Fab>
      </div>
    </Box>
  );
};

export default UserList;
