import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
        <Toolbar sx={{gap: 3}} variant="dense">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SONGVUT
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Resume</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
