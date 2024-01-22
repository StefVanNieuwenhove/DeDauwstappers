/** @format */

import { Card, CardMedia, Container, Typography, Box } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Container maxWidth='md'>
        <Typography
          variant='h4'
          sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          We wensen jullie een zalig kerstfeest en een gelukkig nieuwjaar
        </Typography>
        <Box>
          <Card>
            <CardMedia
              component='img'
              src='/images/groepsfoto.jpg'
              sx={{ borderRadius: 5 }}
              alt='lente'
            />
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
