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
          We wensen jullie een prettige lente toe!
        </Typography>
        <Box>
          <Card>
            <CardMedia
              component="img"
              src="/images/content/spring.jpg"
              sx={{ borderRadius: 5 }}
              alt="lente"
            />
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
