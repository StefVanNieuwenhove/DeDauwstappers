/** @format */

import React, { useState } from "react";
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
} from "@mui/material";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const kalender = [
  {
    datum: "02/07/2023",
    uur: "9:00",
    plaats: "Teralfene",
  },
  {
    datum: "09/07/2023",
    uur: "8:30",
    plaats: "Wandelzoektocht",
  },
  {
    datum: "16/07/2023",
    uur: "9:00",
    plaats: "Wandelzoektocht",
  },
  {
    datum: "23/07/2023",
    uur: "8:30",
    plaats: "Welle meersen",
  },
  {
    datum: "30/07/2023",
    uur: "9:00",
    plaats: "Teralfene",
  },
  {
    datum: "06/08/2023",
    uur: "8:30",
    plaats: "Liedekerke bos",
  },
  {
    datum: "13/08/2023",
    uur: "9:00",
    plaats: "Teralfene",
  },
  {
    datum: "20/08/2023",
    uur: "8:30",
    plaats: "Affligem - abdij",
  },
  {
    datum: "27/08/2023",
    uur: "9:00",
    plaats: "Teralfene",
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
                <TableCell colSpan={3} sx={{ textAlign: "center" }}>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Kalender Juli en Augustus 2023
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Datum
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Uur
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Plaats
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.datum} sx={{ textAlign: "center" }}>
                  <TableCell>
                    <Typography variant="h6">{item.datum}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">{item.uur}</Typography>
                  </TableCell>
                  <TableCell sx={{ width: "40%" }}>
                    <Typography variant="h6">{item.plaats}</Typography>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow sx={{ textAlign: "center" }}>
                <TableCell>
                  <Typography variant="h6">04/09/2023</Typography>
                </TableCell>
                <TableCell
                  rowSpan={2}
                  sx={{ display: "flex", width: "100%", flexWrap: "none" }}
                >
                  <Typography variant="h6">
                    Maandag Teralfene kermis - Barbeque en gerre bolling
                    Natekenshof
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "black" }}
                  >
                    Voor de verplaatsing, beter een auto te veel dan één te
                    weinig!
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3} sx={{ textAlign: "center" }}>
                  <Button
                    component="a"
                    href="/pdf/Kalender_JuliAugustus_2023.pdf"
                    download="Kalender_juliAugustus_2023.pdf"
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
