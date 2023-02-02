/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

const NotFoundPage = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ textAlign: 'center', color: 'black' }}>
        <h1>404 - Not Found!</h1>
        <h3>De pagina die je wou bezoeken was niet terug te vinden!</h3>
        <Button variant="outlined" color="error" component={Link} to="/">
          <Typography sx={{ color: 'red' }}>
            Ga terug naar de homepagina
          </Typography>
        </Button>
      </Container>
    </>
  );
};

export default NotFoundPage;
