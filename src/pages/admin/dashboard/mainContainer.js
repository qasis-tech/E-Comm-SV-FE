import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

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
  Grid,
} from "@mui/material";

import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import "../../../styles/common.styles.scss";
import "./mainContainer.styles.scss";

const drawerWidth = 240;

function DashboardPage() {
  let navigate = useNavigate();
  const [routeList] = useState([
    { path: "/admin", title: "Dashboard" },
    { path: "category", title: "Category" },
    { path: "products", title: "Products" },
    { path: "order-list", title: "Orders" },
    { path: "stocks", title: "Stocks" },
    { path: "users", title: "Users" },
  ]);
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
                Clipped drawer
              </Typography>
            </div>
            <div className="col-md-8">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Dashboard
              </Typography>
            </div>
            <div className="col-md-2 logout-section">
              <Button color="inherit" onClick={() => navigate("/login")}>
                Logout
              </Button>
            </div>
          </Toolbar>
        </div>

        {/* <div className="row appbar-heading-section">
          <div className="col-md-2">
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                Clipped drawer
              </Typography>
            </Toolbar>
          </div>
          <div className="col-md-10">
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                Dashboard
              </Typography>
            </Toolbar>
          </div>
        </div> */}
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
        style={{ backgroundColor: "green" }}
      >
        <Toolbar />
        <div style={{}}>
          <Box sx={{ overflow: "auto" }}>
            <List>
              {routeList.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={() => navigate(item.path)}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Divider />
          {/* <Box className="logout" onClick={() => navigate("/login")}>
            Logout
          </Box> */}
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
