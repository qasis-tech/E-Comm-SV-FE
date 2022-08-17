import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import FilterListIcon from "@mui/icons-material/FilterList";

import NotDataAvailable from "../../../../components/NoDataAvailable";
import { URLS } from "../../../../config/urls.config";
import RouterList from "../../../../routes/routerList";

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

  React.useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = (searchValue) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdlZXRodUB0ZXN0LmNvbSIsImlhdCI6MTY2MDI5NzkwNiwiZXhwIjoxNjYxMTYxOTA2fQ.qhDBNneysBl7A_MRi-0f0t8nsq034wp07EODXDEh2Eg";
    setSearchInput(searchValue);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}${URLS.category}`, {
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
    <Box className="list-category">
      <Grid container spacing={2} className="category-search">
        <Grid item xs={11}>
          <TextField
            fullWidth
            size="small"
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
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="sticky table">
          <TableHead className="sticky">
            <TableRow>
              <TableCell className="table-heading">Sl No</TableCell>
              <TableCell className="table-heading">Category</TableCell>
              <TableCell className="table-heading"> Subcategory</TableCell>
              <TableCell className="table-heading">Created Date</TableCell>
              <TableCell className="table-heading">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categoryList?.length ? (
              categoryList?.map((item, index) => {
                return (
                  <TableRow
                    className="row-section"
                    key={item?._id}
                    onClick={() =>
                      navigate(
                        `${RouterList.admin.admin}/${RouterList.admin.addCategory}`
                      )
                    }
                  >
                    <TableCell>{index}</TableCell>
                    <TableCell component="th" scope="row">
                      {item.label}
                    </TableCell>

                    <TableCell className="max-width-sc">
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
                        <span>No sub categories</span>
                      )}
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
      <div className="pagination-section">
        <Pagination count={10} color="primary" />
      </div>
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
