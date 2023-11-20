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
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="sticky" style={{ backgroundColor: "transparent" }}>
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
                  ContactMe
                </Link>
              </MenuItem>
            </Menu>

            {/*<Link
              href="https://github.com/lemyoo/"
              color="inherit"
              underline="none"
              target="_blank"
              rel="noopener">
              <GitHubIcon />
            </Link>
            <Link href="#" color="inherit" underline="none" rel="noopener">
              Home
            </Link>
            <Link href="#services" color="inherit" underline="none" rel="noopener">
              Services
            </Link>*/}
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
              <Link href="#" color="inherit" underline="none" rel="noopener">
                Home
              </Link>
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
              <Link href="#services" color="inherit" underline="none" rel="noopener">
                Services
              </Link>
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
              <Link href="#projects" color="inherit" underline="none" rel="noopener">
                Projects
              </Link>
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
              <Link href="#contactme" color="inherit" underline="none" rel="noopener">
                Contact
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
