import React from "react";
import Link from "@mui/material/Link";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

/*const Div = styled("div")(({ theme }) => ({
  //backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  height: "30px",
  paddingTop: "10px",
  gap: "10px",
  opacity: 0.9,
  flexGrow: 1,
}));*/

const NavBar = () => {
  const [color, setColor] = React.useState(false);
  const [highlight, setHighLight] = React.useState("HOME");

  const changeColor = () => {
    if (window.scrollY >= 200) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  const changeHighlight = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 330 && window.scrollY < 980) {
      setHighLight("SERVICES");
    } else if (window.scrollY >= 983) {
      setHighLight("PROJECTS");
    } /*else if (window.scrollY >= ) {
      setHighLight("CONTACTS");
    }*/
  };

  window.addEventListener("scroll", changeColor);
  window.addEventListener("scroll", changeHighlight);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="fixed" style={{ backgroundColor: color ? null : "transparent" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              display: { xs: "none", md: "inline-block" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              textAlign: "center",
            }}>
            E.M.L.
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="#" color="inherit" underline="none" rel="noopener">
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="#services" color="inherit" underline="none" rel="noopener">
                  Services
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="#projects" color="inherit" underline="none" rel="noopener">
                  Projects
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="#contactme" color="inherit" underline="none" rel="noopener">
                  Contact
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  href="https://lemyoo.github.io/resume/"
                  color="white"
                  underline="none"
                  rel="noopener"
                  style={{ backgroundColor: "green", padding: 2, borderRadius: 5 }}>
                  Resume / CV
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            E.M.L.
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, textAlign: "center" }}>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                href="#"
                color="inherit"
                underline="none"
                rel="noopener"
                fontWeight={highlight === "HOME" ? "bold" : null}>
                Home
              </Link>
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                href="#services"
                color="inherit"
                underline="none"
                rel="noopener"
                fontWeight={highlight === "SERVICES" ? "bold" : null}>
                Services
              </Link>
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                href="#projects"
                color="inherit"
                underline="none"
                rel="noopener"
                fontWeight={highlight === "PROJECTS" ? "bold" : null}>
                Projects
              </Link>
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
              <Link href="#contactme" color="inherit" underline="none" rel="noopener">
                Contact
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", backgroundColor: "green" }}>
              <Link
                href="https://lemyoo.github.io/resume/"
                color="inherit"
                underline="none"
                rel="noopener">
                Resume / CV
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
