import React from 'react';
import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";


import shipping from "../images/affordableshipping.png";
import money from "../images/earn money.png";
import eco from "../images/eco.png";

import { Slide } from "react-awesome-reveal";

function PlatformFeatues() {
    return (
        <box sx={{ background: "#f5f5f5",marginBlock:'20px'}}>
         <Box paddingBottom={'40px'}>
           <h1 style={{ color: '#4141DA' ,textAlign:'center',paddingBlock:'15px', background: "#f5f5f5"}}>Why We’re Different</h1>
          <Box width="20%" height="1px" bgcolor="grey.300" margin={'auto'} />
         </Box>
          
            {/* ---------Section1----- */}
      <Box sx={{ paddingBlock: "10px", textAlign: "center" , background: "#f5f5f5"}}>
        <Grid container spacing={1}>

          <Grid size={{ xs: 12, md: 6 }}>
            <Slide direction="left" cascade>
              <Box
                component="img"
                src={shipping}
                sx={{
                  width: "80%",
                  height: "350px",
                  objectFit: "contain",
                }}
                alt="two persons"
              />
            </Slide>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Slide direction="right" cascade>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: "center",
                  paddingInline: "20px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ paddingTop: { xs: "0", md: "60px" ,textTransform:'uppercase'}, marginBottom:'40px'}}
                >
                Affordable Shipping Option
                </Typography>
                
                <Typography variant="body1" >
                 By using travelers as couriers, Hatly provides a cheaper alternative to traditional 
international shipping companies. 
                </Typography>
                {/* <Button
                  variant="contained"
                  sx={{ backgroundColor: "black", width: "fit-content" }}
                >
                  Learn More
                </Button> */}
              </Box>
            </Slide>
          </Grid>

        </Grid>
      </Box>

<Box sx={{ paddingBlock: "10px", textAlign: "center", background: "#f5f5f5" }}>
        <Grid container spacing={1}>

         

          <Grid size={{ xs: 12, md: 6 }}>
            <Slide direction="left" cascade>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: "center",
                  paddingInline: "20px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ paddingTop: { xs: "0", md: "60px" }, marginBottom:'40px' }}
                >
                Earn While You Travel
                </Typography>
                <Typography variant="body1" sx={{}}>
                   Travelers can earn money effortlessly without much extra effort, making it an attractive 
option for people who are already planning trips.
                </Typography>
                
              </Box>
            </Slide>
          </Grid>
           <Grid size={{ xs: 12, md: 6 }}>
            <Slide direction="right" cascade>
              <Box
                component="img"
                src={money}
                sx={{
                  width: "80%",
                  height: "350px",
                  objectFit: "contain",
                }}
                alt="two persons"
              />
            </Slide>
          </Grid>
          
        </Grid>
      </Box>
<Box sx={{ paddingBlock: "10px", textAlign: "center", background: "#f5f5f5" }}>
        <Grid container spacing={1}>

          <Grid size={{ xs: 12, md: 6 }}>
            <Slide direction="left" cascade>
              <Box
                component="img"
                src={eco}
                sx={{
                  width: "80%",
                  height: "350px",
                  objectFit: "contain",
                }}
                alt="two persons"
              />
            </Slide>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Slide direction="right" cascade>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: "center",
                  paddingInline: "20px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ paddingTop: { xs: "0", md: "60px" }, marginBottom:'40px' }}
                >
                  Eco-Friendly
                </Typography>
                <Typography variant="subtitle1" sx={{}}>
                 Since travelers are already going to their destinations, the environmental impact is reduced compared 
to traditional shipping methods, which often involve additional emissions from shipping vehicles. 
                </Typography>
                
              </Box>
            </Slide>
          </Grid>

        </Grid>
      </Box>
     
        </box>
    )
}

export default PlatformFeatues
