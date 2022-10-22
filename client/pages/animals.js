import React from "react";

import { AnimalCard } from "../components/AnimalCard";

import { Container, Typography } from "@mui/material";

import { animalsMock } from "../mocks/animals";

const Animals = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        component="h4"
        fontWeight="medium"
        style={{ marginBottom: 20, marginTop: 20 }}
      >
        Meus Animais
      </Typography>

      {animalsMock.map((animal) => (
        <AnimalCard animal={animal} />
      ))}
    </Container>
  );
};

export default Animals;
