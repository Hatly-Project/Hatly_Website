import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";

import logo from "../images/logo RGB-09 (1).png"; // Adjust the path to your logo image
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "ContactUs", path: "/contact-us" },
  { name: "AboutUs", path: "/about-us" },
  { name: "Home", path: "/" },
];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="absolute"
      sx={{
        height: "100px",
        justifyContent: "center",
        backgroundColor: "transparent",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",

        zIndex: 10,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            alt="LOGO"
            src={logo}
            sx={{ width: 150, height: 150, display: { md: "flex" } }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: { xs: "flex", md: "none" },
                    justifyContent: "flex-end",
                    textAlign: "right",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "black",
                      textTransform: "none",
                      fontSize: 15,
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(page.path);
                }}
                sx={{
                  px: 5,
                  my: 2,
                  color: "white",
                  display: "block",
                  textTransform: "none",
                  fontSize: 15,
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <Avatar alt="LOGO" src={logo} sx={{ width: 160, height: 160 }} />
            </Tooltip>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
