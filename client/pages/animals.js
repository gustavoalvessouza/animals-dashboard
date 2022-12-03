import React from "react";
import Head from "next/head";

import { AnimalCard } from "../components/AnimalCard";

import { Container, Grid, Typography, Divider } from "@mui/material";

import { animalsMock } from "../mocks/animals";

const Animals = ({ AnimalsPerLocal, BreedsCount }) => {
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
					{AnimalsPerLocal &&
						Object.keys(AnimalsPerLocal).map((local) => (
							<Grid item style={{ ...styles.animalLocationCard }}>
								{local}
								<small style={{ fontSize: 40 }}>{AnimalsPerLocal[local]}</small>
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
					{BreedsCount &&
						Object.keys(BreedsCount).map((breed) => (
							<Grid item style={{ ...styles.animalLocationCard }}>
								{breed}
								<small style={{ fontSize: 40 }}>{BreedsCount[breed]}</small>
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

export async function getServerSideProps(context) {
	return {
		props: {
			AnimalsPerLocal: {
				Pasture: 5,
				Food: 5,
				Vaccine: 5,
			},
			AnimalWeightAVG: 320,
			AnimalsTotal: 7,
			BreedsCount: {
				Jersey: 2,
				Holandes: 2,
				PardoSuico: 1,
				Gir: 1,
				Girolando: 1,
				Guzera: 0,
				Sindi: 0,
			},
		},
	};
}

export default Animals;
