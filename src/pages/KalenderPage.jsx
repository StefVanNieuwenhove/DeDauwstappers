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
    datum: '08/01/2023',
    uur: '9:00',
    plaats: 'Teralfene',
  },
  {
    datum: '15/01/2023',
    uur: '8:30',
    plaats: 'Asbeek',
  },
  {
    datum: '22/01/2023',
    uur: '9:00',
    plaats: 'Teralfene',
  },
  {
    datum: '29/01/2023',
    uur: '8:30',
    plaats: 'Kobbegem',
  },
  {
    datum: '05/02/2023',
    uur: '9:00',
    plaats: 'Teralfene',
  },
  {
    datum: '12/02/2023',
    uur: '8:30',
    plaats: 'Gaasbeek',
  },
  {
    datum: '19/02/2023',
    uur: '9:00',
    plaats: 'Teralfene',
  },
  {
    datum: '26/02/2023',
    uur: '8:30',
    plaats: 'Ossel',
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
                    Kalender Januari en Februari 2023
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
                <TableRow key={item.datum}>
                  <TableCell>
                    <Typography variant="h6">{item.datum}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">{item.uur}</Typography>
                  </TableCell>
                  <TableCell>
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
                    href="/pdf/Kalender_janFeb_2023.pdf"
                    download="Kalender_janFeb_2023.pdf"
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
