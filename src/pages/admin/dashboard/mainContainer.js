import { useState } from "react";
import { Outlet, useNavigate, useLocation, Router } from "react-router-dom";
import { startCase } from "lodash";

import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
  ListItemSecondaryAction,
} from "@mui/material";

import ListItemIcon from "@mui/material/ListItemIcon";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Button from "@mui/material/Button";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ProductIcon from "../../../assets/icons/products.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import GroupIcon from "@mui/icons-material/Group";

import "../../../styles/common.styles.scss";
import "./mainContainer.styles.scss";
import RouterList from "../../../routes/routerList";
import { authLogout } from "../../../routes/auth";

const drawerWidth = 240;

function DashboardPage() {
  let navigate = useNavigate();
  const location = useLocation();

  const [routeList] = useState([
    { path: RouterList.admin.admin, title: "Dashboard", icon: DashboardIcon },
    {
      path: RouterList.admin.categoryList,
      title: "Category",
      icon: CategoryIcon,
    },
    {
      path: RouterList.admin.productList,
      title: "Products",
      icon: WidgetsIcon,
    },
    {
      path: RouterList.admin.orderList,
      title: "Orders",
      icon: ShoppingCartIcon,
    },
    { path: RouterList.admin.stockList, title: "Stocks", icon: WarehouseIcon },
    { path: RouterList.admin.userList, title: "Users", icon: GroupIcon },
  ]);

  const getPathName = () => {
    if (location?.pathname.split("/").length === 4) {
      return startCase(location?.pathname.split("/").reverse()[1]);
    } else {
      return startCase(
        location?.pathname.split("/").pop() === "admin"
          ? "Dashboard"
          : location?.pathname.split("/").pop()
      );
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <div className="row appbar-heading-section">
          <Toolbar>
            <div className="col-md-2 logo">
              <Typography variant="h6" noWrap component="div">
                Company Logo
              </Typography>
            </div>
            <div className="row col-md-8">
              {location?.pathname.split("/").length === 4 && (
                <div className="col-auto px-0 pointer">
                  <ArrowBackIosIcon onClick={() => navigate(-1)} />
                </div>
              )}
              <div className="col-auto px-0">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {getPathName()}
                </Typography>
              </div>
            </div>
            <div className="col-md-2 logout-section">
              <Tooltip title="Logout" className="pointer">
                <LogoutIcon
                  onClick={() =>
                    authLogout(() => {
                      navigate(`${RouterList.user.login}`, { replace: true });
                    })
                  }
                />
              </Tooltip>
            </div>
          </Toolbar>
        </div>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <div>
          <Box sx={{ overflow: "auto" }}>
            <List>
              {routeList.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={() => navigate(item.path)}>
                    <ListItemIcon>
                      {item.icon ? <item.icon /> : null}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Divider />
        </div>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default DashboardPage;
