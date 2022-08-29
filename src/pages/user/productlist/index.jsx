import * as React from "react";

import { useNavigate } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import Pagination from "@mui/material/Pagination";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, MenuItem, TextField, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ListItem from "@mui/material/ListItem";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import BackgroundImage from "../../../assets/bg_1.jpg";
import ProductImage from "../../../assets/product-1.jpg";
import Product1 from "../../../assets/product-2.jpg";
import Product2 from "../../../assets/product-3.jpg";
import Product3 from "../../../assets/product-4.jpg";

import "./productlist.styles.scss";
import HeaderComponent from "../../../components/Header";
import FooterComponent from "../../../components/Footer";
import ProductComponent from "../../../components/product";

export default function CustomerProductDetails() {
  const navigation = useNavigate();
  const style = { backgroundImage: "url('../../../assets/bg_1.jpg')" };

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleCategoryClick = () => {
    setOpen1(!open1);
  };

  const handleSubcategoryClick = () => {
    setOpen2(!open2);
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  const PrettoSlider = styled(Slider)({
    color: "#52af77",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#52af77",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  const styles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="product-list-container">
      <HeaderComponent />

      <div
        className="product-list-wrap hero-bread"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">Home</a>
                </span>{" "}
                <span>Product List</span>
              </p>
              <h1 className="mb-0 bread">Product List</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="product-filter-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                className="list-container"
              >
                <ListItemButton className="list-heading" onClick={handleClick}>
                  <ListItemText primary="Filter by Price" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton>
                      <PrettoSlider
                        className="slider"
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                      />
                    </ListItemButton>
                    <ListItemButton>
                      <a href="#" className="btn btn-success  px-4">
                        Filter
                      </a>
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                component="nav"
                className="list-container"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton
                  className="list-heading"
                  onClick={() => {
                    setOpen1(!open1);
                  }}
                >
                  <ListItemText primary="Category" />
                  {open1 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open1} timeout="auto" unmountOnExit>
                  <List
                    component="div"
                    className="checkbox-section"
                    disablePadding
                  >
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                      component="nav"
                      className="list-container"
                      aria-labelledby="nested-list-subheader"
                    >
                      <ListItemButton>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Category1"
                          onClick={handleSubcategoryClick}
                        />
                      </ListItemButton>
                      <Collapse in={open2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton>
                            <ListItemButton>
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Subcategory1"
                              />
                            </ListItemButton>
                          </ListItemButton>
                          <ListItemButton>
                            <ListItemButton>
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Subcategory2"
                              />
                            </ListItemButton>
                          </ListItemButton>
                          <ListItemButton className="more-section">
                            <a href="#" className="more-btn">
                              MORE
                            </a>
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </List>

                    <ListItemButton>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Low Calorie"
                      />
                    </ListItemButton>
                    <ListItemButton>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="No Sugar Added"
                      />
                    </ListItemButton>
                    <ListItemButton>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Vegetarian"
                      />
                    </ListItemButton>
                    <ListItemButton>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Low Fat"
                      />
                    </ListItemButton>
                    <ListItemButton>
                      <FormControlLabel
                        control={<Checkbox className="checkbox-color" />}
                        label="Whole Grain"
                      />
                    </ListItemButton>
                    <ListItemButton className="more-section">
                      <a href="#" className="more-btn">
                        MORE
                      </a>
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </div>
            <div className="col-md-8 productlist-main-section">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group d-flex">
                    <label>SORT BY :</label>
                    <div className="select-wrap">
                      <div className="icon">
                        <KeyboardArrowDownIcon />
                      </div>
                      <select name="" id="" className="form-control">
                        <option value="">Sort by popularity</option>
                        <option value="">Medium</option>
                        <option value="">Large</option>
                        <option value="">Extra Large</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <TextField
                    label="Search"
                    size="small"
                    variant="outlined"
                    className="search-section"
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
                </div>
              </div>

              <section className="pt-5 ps-2">
                <div className="container">
                  <div className="col-md-12 col-sm-2">
                    <Stack direction="row" spacing={1}>
                      <Chip
                        label="Subcategory1"
                        variant="outlined"
                        onDelete={handleDelete}
                        className="chip-color"
                      />
                      <Chip
                        label="Subcategory2"
                        variant="outlined"
                        onDelete={handleDelete}
                        className="chip-color"
                      />
                    </Stack>
                  </div>
                </div>
              </section>
              <section className="pb-3 pt-5">
                <div className="container">
                  <div className="row">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((items, index) => {
                      return <ProductComponent key={index} />;
                    })}
                  </div>
                </div>
              </section>
              <div className="pb-4 pagination-section">
                <Pagination count={11} defaultPage={6} siblingCount={0} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterComponent />
    </div>
  );
}
