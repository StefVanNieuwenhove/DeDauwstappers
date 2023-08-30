/** @format */

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TableCell,
  Container,
  Button,
} from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const kalender = [
  {
    datum: '03/09/2023',
    uur: '8:30',
    plaats: 'Teralfene',
  },
  {
    datum: '04/09/2023',
    uur: '11:30',
    plaats: 'BBQ en gere bolling t.v.v. de clubkas - Natekeshof',
  },
  {
    datum: '10/09/2023',
    uur: '9:00',
    plaats: 'Teralfene',
  },
  {
    datum: '17/09/2023',
    uur: '8:30',
    plaats: 'O.L.V. Lombeek',
  },
  {
    datum: '24/09/2023',
    uur: '9:00',
    plaats: 'Teralfene',
  },
  {
    datum: '01/10/2023',
    uur: '8:30',
    plaats: 'Leerbeek',
  },
  {
    datum: '08/10/2023',
    uur: '9:00',
    plaats: 'Teralfene',
  },
  {
    datum: '15/10/2023',
    uur: '8:30',
    plaats: 'Gaasbeek',
  },
  {
    datum: '22/20/2023',
    uur: '9:00',
    plaats: 'Teralfene',
  },
  {
    datum: '29/10/2023',
    uur: '8:30',
    plaats: 'Waarbeke',
  },
];

const KalenderPage = () => {
  const [data, setData] = useState(kalender);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <>
      <Container maxWidth='md'>
        <TableContainer component={Paper} elevation={10}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={3} sx={{ textAlign: 'center' }}>
                  <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                    Kalender September en Oktober 2023
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                    Datum
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                    Uur
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                    Plaats
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.datum} sx={{ textAlign: 'center' }}>
                  <TableCell>
                    <Typography variant='h6'>{item.datum}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='h6'>{item.uur}</Typography>
                  </TableCell>
                  <TableCell sx={{ width: '40%' }}>
                    <Typography variant='h6'>{item.plaats}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} sx={{ textAlign: 'center' }}>
                  <Typography
                    variant='h6'
                    sx={{ fontWeight: 'bold', color: 'black' }}
                  >
                    Voor de verplaatsing, beter een auto te veel dan één te
                    weinig!
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3} sx={{ textAlign: 'center' }}>
                  <Button
                    component='a'
                    href='/pdf/Kalender_SepOkt_2023.pdf'
                    download='Kalender_SepOkt_2023.pdf'
                    variant='contained'
                    size='lg'
                    OnClick={handleClick}
                    color='error'
                    endIcon={<ArrowCircleDownIcon />}
                  >
                    <Typography>Download de kalender</Typography>
                  </Button>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default KalenderPage;
