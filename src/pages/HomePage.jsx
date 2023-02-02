/** @format */

import { Card, CardMedia, Container, Typography, Box } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', fontWeight: 'bold' }}
        >
          We wensen jullie een romantische en een gezellige Valentijn
        </Typography>
        <Box>
          <Card>
            <CardMedia
              component="img"
              src="/images/content/valentijn.jpg"
              sx={{ borderRadius: 5 }}
            />
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
