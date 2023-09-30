import React from 'react';
import Container from '@mui/material/Container'
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography'
import Paper from "@mui/material/Paper";
import ImageCollage from '../components/ImagCollage';
import CustomizedAccordions from "../components/Accordian";
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BasicModal from '../components/Modal';


const Tour = () =>{
    return (
      <Container sx={{ width: 900, marginBottom: 10 }}>
        <Typography variant="h3" component="h1" marginTop={3}>
          Explore the World in Vegas
        </Typography>
        <Box marginTop={3} sx={{ display: "flex" }}>
          <img
            src="https://media.timeout.com/images/105124791/750/422/image.jpg"
            alt=""
            height={325}
          />
          <ImageCollage />
        </Box>   
        <Box>
          <Typography variant="h6" component="h4" marginTop={3}>
            About this ticket
          </Typography>
          <Typography variant="paragraph" component="p" marginTop={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, vero nesciunt hic quibusdam nostrum ipsam, delectus
            autem quia rem maxime optio quam, doloremque numquam corporis
            mollitia debitis voluptate adipisci porro dolores unde sit explicabo
            quas. Cum mollitia excepturi magnam ullam.
          </Typography>
        </Box>
        <Box marginBottom={10}>
          <Typography variant="h6" component="h4" marginTop={3}>
            ControlledAccordionsns
          </Typography>
          <CustomizedAccordions />
        </Box>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation >
            <BasicModal/>
            </BottomNavigation>
        </Paper>
      </Container>
    );
}

export default Tour