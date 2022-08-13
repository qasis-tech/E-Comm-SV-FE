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
import SearchIcon from "@mui/icons-material/Search";
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
import NotDataAvailable from "../../../../components/NoDataAvailable";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ListCategory = () => {
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
  const [categoryList, setCategoryList] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdlZXRodUB0ZXN0LmNvbSIsImlhdCI6MTY2MDI5NzkwNiwiZXhwIjoxNjYxMTYxOTA2fQ.qhDBNneysBl7A_MRi-0f0t8nsq034wp07EODXDEh2Eg";
  React.useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = (searchValue) => {
    setSearchInput(searchValue);
    axios
      .get("http://localhost:4000/category", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        if (res) {
          setCategoryList(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err in Category LIst", err);
        setCategoryList([]);
      });
  };

  const navigate = useNavigate();
  return (
    <Box>
      <TableContainer component={Paper}>
        <Grid item xs={2} style={{ display: "flex" }}>
          <Grid item xs={4}>
            <TextField
              onChange={(e) => handleSearch(e.target.value)}
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
              <TableCell>ID</TableCell>
              <TableCell>Category</TableCell>
              <TableCell> Subcategory</TableCell>
              <TableCell>Created Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categoryList?.length
              ? categoryList?.map((item) => {
                  return (
                    <TableRow key={item}>
                      <TableCell>{item._id}</TableCell>
                      <TableCell component="th" scope="row">
                        {item.label}
                      </TableCell>

                      {item?.subCategory?.length ? (
                        <TableCell
                          sx={{ maxWidth: 350 }}
                          className="d-flex flex-wrap"
                        >
                          {item?.subCategory?.map((e) => {
                            return (
                              <span className="border px-2 py-1 m-1 rounded shadow-sm text-center">
                                {e.label}
                              </span>
                            );
                          })}
                        </TableCell>
                      ) : (
                        <TableCell>No sub categories</TableCell>
                      )}

                      <TableCell>{item.createdAt}</TableCell>
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
                })
              : null}
          </TableBody>
        </Table>
      </TableContainer>

      {!categoryList?.length && <NotDataAvailable />}

      <div style={{ position: "absolute", bottom: "4em", right: "4em" }}>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => navigate("/admin/add-category")}
        >
          <AddIcon />
        </Fab>
      </div>
    </Box>
  );
};

export default ListCategory;
