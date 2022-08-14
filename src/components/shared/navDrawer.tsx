import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

const NavDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem>
            <Button
              variant="text"
              color="inherit"
              onClick={() => {
                setTimeout(() => {
                  setOpenDrawer(false);
                  navigate("/");
                }, theme.transitions.duration.shorter);
              }}
              sx={{ textTransform: "none" }}
            >
              <Typography variant="h5" color="textPrimary" noWrap>
                FrightFlex
              </Typography>
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="text"
              color="inherit"
              onClick={() => {
                setTimeout(() => {
                  setOpenDrawer(false);
                  navigate("/cloudEngineering");
                }, theme.transitions.duration.shorter);
              }}
              sx={{ textTransform: "none" }}
            >
              <Typography variant="h6" color="textPrimary">
                Cloud engineering
              </Typography>
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="text"
              color="inherit"
              onClick={() => {
                setTimeout(() => {
                  setOpenDrawer(false);
                  navigate("/dataAndAnalytics");
                }, theme.transitions.duration.shorter);
              }}
              sx={{ textTransform: "none" }}
            >
              <Typography variant="h6" color="textPrimary">
                Data and Analytics
              </Typography>
            </Button>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <Button
              variant="text"
              color="inherit"
              onClick={() => {
                setTimeout(() => {
                  setOpenDrawer(false);
                  navigate("/contact");
                }, theme.transitions.duration.shorter);
              }}
              sx={{ textTransform: "none" }}
            >
              <Typography variant="h6" color="textPrimary" noWrap>
                Contact
              </Typography>
            </Button>
          </ListItem>
        </List>
      </Drawer>
      <IconButton sx={{ ml: 2 }} onClick={() => setOpenDrawer(true)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default NavDrawer;
