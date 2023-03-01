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
  Box,
} from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const kalender = [
  {
    datum: '05/03/2023',
    uur: '9:00',
    plaats: 'Teralfene',
  },
  {
    datum: '12/03/2023',
    uur: '8:30',
    plaats: 'Mazenzele',
  },
  {
    datum: '19/03/2023',
    uur: '9:00',
    plaats: 'Teralfene',
  },
  {
    datum: '26/03/2023',
    uur: '8:30',
    plaats: 'Lente ontbijt (schettenberg)',
  },
  {
    datum: '02/04/2023',
    uur: '8:30',
    plaats: 'Bekkerzeel',
  },
  {
    datum: '09/04/2023',
    uur: '9:00',
    plaats: 'Teralfene - Pasen',
  },
  {
    datum: '16/04/2023',
    uur: '8:30',
    plaats: 'Ossel',
  },
  {
    datum: '23/04/2023',
    uur: '9:00',
    plaats: 'Teralfene',
  },
  {
    datum: '30/04/2023',
    uur: 'Busreis waarschijnlijk naar Lommel',
    plaats: 'Lommelse sahara (info volgt)',
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
      <Container maxWidth="md">
        <TableContainer component={Paper} elevation={10}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={3} sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    Kalender Maart en April 2023
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Datum
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Uur
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Plaats
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.datum} sx={{ textAlign: 'center' }}>
                  <TableCell>
                    <Typography variant="h6">{item.datum}</Typography>
                  </TableCell>
                  <TableCell sx={{ width: '40%' }}>
                    <Typography variant="h6">{item.uur}</Typography>
                  </TableCell>
                  <TableCell sx={{ width: '40%' }}>
                    <Typography variant="h6">{item.plaats}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h6"
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
                    component="a"
                    href="/pdf/Kalender_maartApril_2023.pdf"
                    download="Kalender_maartApril_2023.pdf"
                    variant="contained"
                    size="lg"
                    OnClick={handleClick}
                    color="error"
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
