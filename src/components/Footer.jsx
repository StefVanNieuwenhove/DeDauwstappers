/** @format */

import React from "react";
import { Box, Paper, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Paper
        sx={{
          position: "relative",
          bottom: 0,
          left: 0,
          right: 0,
          color: "white",
          backgroundColor: "red",
          mt: 3,
          textAlign: "center",
        }}
        elevation={3}
        variant="outlined"
        square
      >
        <Toolbar>
          <Box>
            <Typography sx={{ textAlign: "center" }}>
              &copy; De Dauwstappers
            </Typography>
          </Box>
        </Toolbar>
      </Paper>
    </>
  );
};

export default Footer;
