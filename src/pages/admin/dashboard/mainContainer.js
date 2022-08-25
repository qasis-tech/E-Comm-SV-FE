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
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                Clipped drawer
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item xs={10}>
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                Dashboard
              </Typography>
            </Toolbar>
          </Grid>
        </Grid>
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
          <Box className="logout" onClick={() => navigate("/login")}>
            Logout
          </Box>
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
