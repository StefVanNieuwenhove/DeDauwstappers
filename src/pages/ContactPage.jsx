/** @format */

import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Button,
} from '@mui/material';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

const ContactPage = () => {
  return (
    <>
      <Container
        disableGutters
        maxWidth="xs"
        xs={{ display: 'flex', alignItems: 'center', mt: 2 }}
      >
        <Card variant="outlined">
          <CardMedia
            component="img"
            src="/images/Jean_Pierre_De_Braekeleer.jpg"
            alt="Jean Pierre De Braekeleer"
            sx={{ height: 500 }}
          />
          <CardContent>
            <Typography variant="h6" color="black" sx={{ textAlign: 'center' }}>
              Jean Pierre De Braekeleer
            </Typography>
            <Button
              variant="contained"
              color="error"
              endIcon={<MailOutlinedIcon />}
              sx={{ width: '100%' }}
              component="a"
              href="mailto:debraekeleer.jp@telenet.be"
            >
              <Typography>mail</Typography>
            </Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default ContactPage;
