import React from "react";
import Head from "next/head";

import { AnimalCard } from "../components/AnimalCard";

import { Container, Grid, Typography } from "@mui/material";

import { animalsMock } from "../mocks/animals";

const Animals = () => {
  return (
    <>
      <Head>
        <title>Meus Animais</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h4"
          fontWeight="medium"
          style={{ marginBottom: 30, marginTop: 30 }}
        >
          Meus Animais
        </Typography>

        <Grid container spacing={3}>
          {animalsMock.map((animal) => (
            <AnimalCard animal={animal} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Animals;
