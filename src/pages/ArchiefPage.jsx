/** @format */

import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardMedia } from '@mui/material';

const ArchiefPage = () => {
  const [foto, setFoto] = useState(fotos);

  return (
    <>
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Archief in de maak
        </Typography>
      </Container>
      {/* <Container maxWidth="lg">
        <Grid container>
          <Grid xs={12} md={3}>
            {foto.map((item) => (
              <Grid item key={item.id}>
                <Card variant="outlined">
                  <CardMedia
                    component="img"
                    alt={item.album_name}
                    src={`${item.image_url}`}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container> */}
    </>
  );
};

export default ArchiefPage;

const fotos = [
  {
    id: 1,
    album_name: 'denderhoutem',
    album_year: 2022,
    image_url: '/images/content/2022/denderhoutem/Denderhoutem1.jpg',
  },
  {
    id: 2,
    album_name: 'denderhoutem',
    album_year: 2022,
    image_url: '/images/content/2022/denderhoutem/Denderhoutem2.jpg',
  },
  {
    id: 3,
    album_name: 'denderhoutem',
    album_year: 2022,
    image_url: '/images/content/2022/denderhoutem/Denderhoutem3.jpg',
  },
  {
    id: 4,
    album_name: 'denderhoutem',
    album_year: 2022,
    image_url: '/images/content/2022/denderhoutem/Denderhoutem4.jpg',
  },
  {
    id: 5,
    album_name: 'denderhoutem',
    album_year: 2022,
    image_url: '/images/content/2022/denderhoutem/Denderhoutem5.jpg',
  },
  {
    id: 6,
    album_name: 'denderhoutem',
    album_year: 2022,
    image_url: '/images/content/2022/denderhoutem/Denderhoutem6.jpg',
  },
  {
    id: 7,
    album_name: 'denderhoutem',
    album_year: 2022,
    image_url: '/images/content/2022/denderhoutem/Denderhoutem7.jpg',
  },
  {
    id: 8,
    album_name: 'denderhoutem',
    album_year: 2022,
    image_url: '/images/content/2022/denderhoutem/Denderhoutem8.jpg',
  },
  {
    id: 9,
    album_name: 'denderhoutem',
    album_year: 2022,
    image_url: '/images/content/2022/denderhoutem/Denderhoutem9.jpg',
  },
  {
    id: 10,
    album_name: 'denderhoutem',
    album_year: 2022,
    image_url: '/images/content/2022/denderhoutem/Denderhoutem10.jpg',
  },
];
