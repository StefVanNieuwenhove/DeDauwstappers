/** @format */

import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const MottoPage = () => {
  return (
    <>
      <Container disableGutters maxWidth="md">
        <Box
          sx={{
            display: { sm: 'flex' },
            flexWrap: { sm: 'wrap' },
            ml: 2,
          }}
        >
          <Typography variant="h6">
            Hallo! <br />
            Ben je er van overtuigd dat wandelen gezond is? <br />
            Denk je ook zo soms eens: ik zou toch wat meer beweging willen, maar
            alleen is maar alleen.. <br />
            Je vindt waarschijnlijk het tempo te hoog in een wandelclub en
            vreest voor een té grote afstand <br />
            Wel, dan stellen wij je graag onze club voor: De Dauwstappers <br />
            Wij zijn een wandelclub uit Affligem (Teralfene) die elke zondag
            samenkomt om er samen op uit te trekken. De ene week vertrekken we
            klokslag 9 uur op de parking aan de kerk van Teralfene voor een
            lokale wandeling. De andere week vertrekken we om 8u30 vanop
            dezelfde locatie voor een wandeling in de streek. Dus als je bang
            was dat we voor dag en dauw vertrekken..niet echt hé <br />
            Onze tochten worden altijd berekend tussen de 6 en de 8 kilometer;
            zwaar kan je dit bezwaarlijk noemen. Het is ons dan ook vooral om de
            beweging en de ongedwongen sfeer te doen. <br />
            Rond 10u30 zit de tocht erop. <br />
            Kom eens af!
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default MottoPage;
