import React from "react";

import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";

export const AnimalCard = ({ animal }) => {
  return (
    <Card
      elevation={0}
      style={{ border: "1px #DCDCDC solid", marginBottom: 5 }}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {animal.name}
          </Typography>
          <Typography
            gutterBottom
            variant="small"
            component="small"
            color="#999999"
          >
            #234234
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
