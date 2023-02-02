/** @format */

import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import {
  AppBar,
  BottomNavigation,
  Box,
  Icon,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';

const Footer = () => {
  return (
    <>
      {/*  <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, mt: 2 }}
        elevation={3}
      >
        <BottomNavigation>
          <Typography>&copy; Dauwstappers</Typography>
        </BottomNavigation>
      </Paper> */}
      <Paper
        sx={{
          position: 'relative',
          bottom: 0,
          left: 0,
          right: 0,
          color: 'white',
          backgroundColor: 'red',
          mt: 3,
        }}
        elevation={3}
        variant="outlined"
        square
      >
        <Toolbar>
          <Box>
            <Typography>&copy; De Dauwstappers</Typography>
          </Box>
        </Toolbar>
      </Paper>
    </>
  );
};

export default Footer;
