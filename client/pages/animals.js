import React from "react";
import Head from "next/head";

import { AnimalCard } from "../components/AnimalCard";

import { Container, Grid, Typography, Divider } from "@mui/material";

import { animalsMock } from "../mocks/animals";

const animalLocations = [
  { location: "Pasto", value: 1 },
  { location: "Comida", value: 3 },
  { location: "Vascina", value: 1 },
];

const animalActions = [
  { action: "Comendo", value: 1 },
  { action: "Vascinando", value: 3 },
];

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
          Dashboard
        </Typography>

        <Typography
          variant="h5"
          component="h5"
          fontWeight="medium"
          style={{ marginTop: 30 }}
        >
          Animais por local
        </Typography>

        <div style={{ ...styles.animalLocationContainer }}>
          {animalLocations.map((a) => (
            <Grid item style={{ ...styles.animalLocationCard }}>
              {a?.location}
              <small style={{ fontSize: 40 }}>{a?.value}</small>
            </Grid>
          ))}
        </div>

        <Typography
          variant="h5"
          component="h5"
          fontWeight="medium"
          style={{ marginTop: 30 }}
        >
          Animais executando ação
        </Typography>

        <div style={{ ...styles.animalLocationContainer }}>
          {animalActions.map((a) => (
            <Grid item style={{ ...styles.animalLocationCard }}>
              {a?.action}
              <small style={{ fontSize: 40 }}>{a?.value}</small>
            </Grid>
          ))}
        </div>

        <Divider style={{ marginTop: 60, marginBottom: 40 }} />

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

const styles = {
  animalLocationContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  animalLocationCard: {
    background: "#FAFAFA",
    border: "1px #EEEEEE solid",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    marginRight: 5,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default Animals;
