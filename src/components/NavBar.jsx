/** @format */

import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  CssBaseline,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Avatar,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
  'Home',
  'Bestuur',
  'Kalender',
  'Motto',
  /* 'Archief', */ 'Contact',
];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const activeStyle = {
    textDecoration: 'underline',
  };

  const activeStyleDrawer = {
    textDecoration: 'underline',
    backgroundColor: 'red',
    color: 'white',
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', backgroundColor: 'red', color: 'white' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        De Dauwstappers
      </Typography>
      <Divider sx={{ color: 'black' }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              component={NavLink}
              to={item}
              style={({ isActive }) =>
                isActive ? activeStyleDrawer : undefined
              }>
              <ListItemText>
                <Typography variant='h6'>{item}</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  function HideOnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction='down' in={!trigger}>
        {children}
      </Slide>
    );
  }

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          component='nav'
          sx={{ backgroundColor: 'red', color: 'white', height: 90 }}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'block', lg: 'none' } }}>
              <MenuIcon />
            </IconButton>
            <Box>
              <Avatar
                src='/images/logo_dauwstappers_icon.ico'
                alt='De dauwstappers'
                variant='rounded'
                sx={{
                  width: 90,
                  height: 90,
                  display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
                  mr: 2,
                }}
              />
            </Box>
            <Typography
              variant='h4'
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}>
              De Dauwstappers
            </Typography>
            <Box
              sx={{
                display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
              }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  size='large'
                  sx={{ color: '#fff', mx: 1, '&:hover': { color: '#000' } }}
                  component={NavLink}
                  to={item}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  <Typography variant='h6'>{item}</Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default NavBar;
