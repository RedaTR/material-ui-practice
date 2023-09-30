import React from "react";
import TourCard from "../components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import '../App.css';
import cities from "../data/data.json";

const Home = () => {
    return (
      <div className="App">
        <Container sx={{ marginY: 5 }}>
          {cities.map((city) => (
            <>
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={3}
              >
                Top {city.name} Tour
              </Typography>
              <Grid container spacing={5}>
                {city.tours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </Grid>
            </>
          ))}
        </Container>
      </div>
    );
}

export default Home