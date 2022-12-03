import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Container, Typography } from "@mui/material";

const animalHistory = [
  { name: "Idade", key: "age", value: 8 },
  { name: "Peso", key: "weight", value: "10kg" },
  { name: "Raça", key: "type", value: "Pitbull" },
  { name: "Genêro", key: "gender", value: "Boi" },
];

const actionHistory = [{ location: "Pasto", value: "Pastando" }];

const Animal = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container maxWidth="lg">
      <div style={{ ...style }}>
        <Image
          src="/dog.png"
          quality={100}
          width={1000}
          height={400}
          objectFit="cover"
          style={{ ...imageStyle }}
        />

        <Typography
          variant="h4"
          component="h4"
          fontWeight="medium"
          style={{ ...textStyle }}
        >
          Cachorro
        </Typography>

        <Typography
          variant="small"
          component="small"
          fontSize={20}
          style={{ ...subtitleStyle }}
        >
          #{id}
        </Typography>

        <Typography
          variant="h5"
          component="h5"
          fontSize={30}
          color="#4B4B4B"
          style={{ marginTop: 40, marginBottom: 10 }}
        >
          Histórico
        </Typography>

        <div style={{ ...historyStlye }}>
          {animalHistory.map(({ name, key, value }) => (
            <div
              key={key}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: 40,
              }}
            >
              <Typography
                variant="p"
                component="p"
                fontSize={22}
                color="#4B4B4B"
              >
                {name}
              </Typography>

              <Typography
                variant="small"
                component="small"
                color="#7E7E7E"
                fontSize={16}
              >
                {value}
              </Typography>
            </div>
          ))}
        </div>

        <Typography
          variant="h5"
          component="h5"
          fontSize={30}
          color="#4B4B4B"
          style={{ marginTop: 40, marginBottom: 10 }}
        >
          Atividades
        </Typography>

        <div style={{ ...historyStlye }}>
          {actionHistory.map(({ location, value }) => (
            <div
              key={value}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: 40,
              }}
            >
              <Typography
                variant="p"
                component="p"
                fontSize={22}
                color="#4B4B4B"
              >
                {location}
              </Typography>

              <Typography
                variant="small"
                component="small"
                color="#7E7E7E"
                fontSize={16}
              >
                {value}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const style = {
  display: "flex",
  flexDirection: "column",
  marginTop: 20,
};

const imageStyle = {
  borderRadius: 5,
};

const textStyle = {
  marginTop: 20,
  color: "#4B4B4B",
};

const subtitleStyle = {
  color: "#8B8B8B",
};

const historyStlye = {
  background: "#FAFAFA",
  border: "1px #EEEEEE solid",
  padding: 15,
  borderRadius: 5,
  marginTop: 10,
  width: "100%",
  display: "flex",
};

export default Animal;
