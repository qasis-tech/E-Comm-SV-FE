import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";

import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "../styles/header.styles.scss";
import { InputAdornment, MenuItem, TextField, Tooltip } from "@mui/material";
import { authCheck, authLogout, onLogout } from "../routes/auth";

const HeaderComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMenus, setShowMenus] = useState(false);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const { isUser } = authCheck();
    setShowMenus(isUser);
  }, []);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => {
    authLogout(() => navigate("/", { replace: true }));
    window.location.reload();
  };

  const navigate = useNavigate();

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [navbarVisible, setNavbarVisible] = React.useState(false);

  return (
    <div className="header-container">
      <div className="py-1 top-section">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <PhoneIcon className="icons" />
                  </div>
                  <span className="text">+ 1235 2355 98</span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center header-email">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <SendIcon className="icons" />
                  </div>
                  <span className="text">youremail@email.com</span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center header-text text-lg-right">
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
          <div className="mobile-menu">
            <div>
              <span className="navbar-brand" onClick={() => navigate("/")}>
                Vegefoods
              </span>
            </div>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              onClick={() => setNavbarVisible(!navbarVisible)}
            >
              <MenuIcon style={{ color: "black" }} />
            </button>
          </div>
          <TextField
            label="Search"
            size="small"
            variant="outlined"
            className="search-section"
            fullWidth
            style={{ margin: "0 2em" }}
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
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarCollapse"
          >
            <ul
              className={
                getWindowDimensions()?.width <= 960
                  ? navbarVisible
                    ? "navbar-nav-show 1 ml-auto"
                    : "navbar-nav ml-auto"
                  : "navbar-nav ml-auto menu"
              }
            >
              <li className="nav-item ">
                <a onClick={() => navigate("/")} className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  d-flex" href="">
                  Products
                  <KeyboardArrowDownIcon style={{ fontSize: "1rem" }} />
                </a>
                <ul className="menu-gold">
                  <li>
                    <a href="" className="d-flex justify-content-between">
                      Category-1aaaaaaaa
                      <KeyboardArrowRightIcon style={{ fontSize: "1rem" }} />
                    </a>
                    <ul>
                      <li>
                        <a href="">Karim Khan</a>
                      </li>
                      <li>
                        <a href="" className="d-flex justify-content-between">
                          Rahim Khan
                          <KeyboardArrowRightIcon
                            style={{ fontSize: "1rem" }}
                          />
                        </a>
                        <ul>
                          <li>
                            <a href="">PHP</a>
                          </li>
                          <li>
                            <a href="">Mysql</a>
                          </li>
                          <li>
                            <a href="">Node.js</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="">Mahesh Jagadappa</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">category-2</a>
                  </li>
                  <li>
                    <a href="">Category-3</a>
                  </li>
                  <li>
                    <a href="" className="d-flex justify-content-between">
                      Category-4
                      <KeyboardArrowRightIcon style={{ fontSize: "1rem" }} />
                    </a>
                    <ul>
                      <li>
                        <a href="">Karim Khan</a>
                      </li>
                      <li>
                        <a href="" className="d-flex justify-content-between">
                          Rahim Khan
                          <KeyboardArrowRightIcon
                            style={{ fontSize: "1rem" }}
                          />
                        </a>
                        <ul>
                          <li>
                            <a href="">PHP</a>
                          </li>
                          <li>
                            <a href="">Mysql</a>
                          </li>
                          <li>
                            <a href="">Node.js</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="">Mahesh Jagadappa</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">Category-5</a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/about")}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => navigate("/contact")} className="nav-link">
                  Contact
                </a>
              </li>

              {showMenus ? (
                <>
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={() => navigate("/profile")}>
                      <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={() => navigate("/order-list")}>
                      <Avatar /> Order History
                    </MenuItem>
                    <MenuItem onClick={() => navigate("/whishlist")}>
                      <FavoriteBorderIcon /> Wishlist
                    </MenuItem>
                    <Divider />

                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon>
                        <Logout />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <MenuItem onClick={() => navigate("/login")}>
                  <ListItemIcon>
                    <Logout />
                  </ListItemIcon>
                  Login
                </MenuItem>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
