import React from "react";
import Head from "next/head";

import axios from "axios";

import { AnimalCard } from "../components/AnimalCard";

import { Container, Grid, Typography, Divider } from "@mui/material";

const Animals = (props) => {
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
					{props?.data?.animalsPerLocal?.AnimalsPerLocal &&
						Object.keys(props?.data?.animalsPerLocal?.AnimalsPerLocal).map(
							(local) => (
								<Grid item style={{ ...styles.animalLocationCard }}>
									{local}
									<small style={{ fontSize: 40 }}>
										{AnimalsPerLocal[local]}
									</small>
								</Grid>
							)
						)}
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
					{props?.data?.animalsPerLocal?.BreedsCount &&
						Object.keys(props?.data?.animalsPerLocal?.BreedsCount).map(
							(breed) => (
								<Grid item style={{ ...styles.animalLocationCard }}>
									{breed}
									<small style={{ fontSize: 40 }}>{BreedsCount[breed]}</small>
								</Grid>
							)
						)}
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
					{props?.data?.animalsList &&
						props?.data?.animalsList.map((animal) => (
							<AnimalCard animal={animal} key={animal?.id} />
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

export async function getServerSideProps() {
	const url = `http://localhost:8080/api/backoffice/animals/list`;

	const response = await axios({ method: "get", url });

	return {
		props: { data: response?.data },
	};
}

// animalsPerLocal: {
// 	AnimalsPerLocal: {
// 		Pasture: 5,
// 		Food: 5,
// 		Vaccine: 5,
// 	},
// 	AnimalWeightAVG: 320,
// 	AnimalsTotal: 7,
// 	BreedsCount: {
// 		Jersey: 2,
// 		Holandes: 2,
// 		PardoSuico: 1,
// 		Gir: 1,
// 		Girolando: 1,
// 		Guzera: 0,
// 		Sindi: 0,
// 	},
// },
// animalsList: [
// 	{
// 		id: "713b8d46-11ba-4c31-8a3c-8a83706e5754",
// 		Breed: "Jersey",
// 		Gender: "Macho",
// 		weight: 350,
// 		image:
// 			"https://s2.glbimg.com/J4t2oY-w6f0jcnBHoapgvX9UARU=/0x0:695x394/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/b/Q/ibQsuaQRmo9YSNqAmoTw/vaca-oculos-realidade-1.jpg",
// 	},
// ],

export default Animals;
