import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const NavBar = () => {
  const TITLE = "GIRLS WHO CODE";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" data-testid="navbar">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {TITLE}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
