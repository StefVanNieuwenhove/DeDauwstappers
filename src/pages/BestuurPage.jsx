/** @format */

import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  Container,
} from '@mui/material';

const BestuurPage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          <Grid xs={12} md={4}>
            <Grid item>
              <Card variant="outlined" sx={{ height: { md: 540, lg: 560 } }}>
                <CardMedia
                  component="img"
                  alt="Viktor Bellemans"
                  src="/images/Viktor_Bellemans.jpg"
                  loading="lazy"
                />
                <CardContent>
                  <Typography variant="h5">De voorzitter</Typography>
                  <Typography variant="h5">Viktor Bellemans</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid xs={12} md={4}>
            <Grid item>
              <Card variant="outlined" sx={{ height: { md: 540, lg: 560 } }}>
                <CardMedia
                  component="img"
                  alt="Nicolle Steppe"
                  src="/images/Nicole_Steppe.png"
                  loading="lazy"
                />
                <CardContent>
                  <Typography variant="h5">De secretaris</Typography>
                  <Typography variant="h5">Nicole Steppe</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid xs={12} md={4}>
            <Grid item>
              <Card variant="outlined" sx={{ height: { md: 540, lg: 560 } }}>
                <CardMedia
                  component="img"
                  alt="Jean Pierre De Breakeleer"
                  src="/images/Jean_Pierre_De_Braekeleer.jpg"
                  loading="lazy"
                />
                <CardContent>
                  <Typography variant="h5">De penningmeester</Typography>
                  <Typography variant="h5">
                    Jean Pierre De Breakeleer
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BestuurPage;
