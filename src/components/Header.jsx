import React from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import "../styles/header.styles.scss";
import { InputAdornment, TextField } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const HeaderComponent = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div className="py-1 top-section">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <span className="text">+ 1235 2355 98</span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <i className="fa fa-paper-plane-o"></i>
                  </div>
                  <span className="text">youremail@email.com</span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center text-lg-right">
                  <span className="text">
                    3-5 Business days delivery &amp; Free Returns
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar  ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <div>
            <span className="navbar-brand" onClick={() => navigate("/")}>
              Vegefoods
            </span>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="oi oi-menu"></span> Menu
            </button>
          </div>
          <TextField
            label="Search"
            size="small"
            variant="outlined"
            fullWidth
            style={{ margin: "0 2em" }}
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

          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="ftco-nav"
          >
            <ul className="navbar-nav ml-auto">
              {/* <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  style={{ marginTop: "1em", width: "15ch" }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search> */}
              <li className="nav-item active">
                <a href="index.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                {/* <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown04"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown04">
                  <a className="dropdown-item" href="#">
                    Shop
                  </a>
                  <a className="dropdown-item" href="#">
                    Wishlist
                  </a>
                  <a className="dropdown-item" href="#">
                    Single Product
                  </a>
                  <a className="dropdown-item" href="#">
                    Cart
                  </a>
                  <a className="dropdown-item" href="#">
                    Checkout
                  </a>
                </div> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("about")}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <PersonIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
