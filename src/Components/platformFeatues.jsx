import React from 'react';
import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import ResponsiveAppBar from "./components/SearchAppBar/SearchAppBar";
// import mainImg from "./assets/images/green-sofa-and-pink-chair-sit-in-a-living-room_COMPRESSED.jpg";
// import ShopByCategory from "./components/ShopByCategory/ShopByCategory";

import connect from "../images/connect.png";
// import connect1 from "../images/connect.png";
// import connect2 from "../images/connect.png";
// import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

function PlatformFeatues() {
    return (
        <box sx={{ background: "#f5f5f5"}}>
            {/* ---------Section1----- */}
            {/* ---------Section1----- */}
      <Box sx={{ paddingBlock: "10px", textAlign: "center" , background: "#f5f5f5"}}>
        <Grid container spacing={1}>

          <Grid size={{ xs: 12, md: 6 }}>
            <Slide direction="left" cascade>
              <Box
                component="img"
                src={connect}
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
                  sx={{ paddingTop: { xs: "0", md: "60px" } }}
                >
                  AS LOW AS 0% APR FINANCING UPON APPROVAL WITH AFFIRM
                </Typography>
                <Typography variant="subtitle1" sx={{}}>
                  Affirm provides flexible payment solutions, allowing you to
                  buy better and pay over time.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "black", width: "fit-content" }}
                >
                  Learn More
                </Button>
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
                  sx={{ paddingTop: { xs: "0", md: "60px" } }}
                >
                  AS LOW AS 0% APR FINANCING UPON APPROVAL WITH AFFIRM
                </Typography>
                <Typography variant="subtitle1" sx={{}}>
                  Affirm provides flexible payment solutions, allowing you to
                  buy better and pay over time.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "black", width: "fit-content" }}
                >
                  Learn More
                </Button>
              </Box>
            </Slide>
          </Grid>
           <Grid size={{ xs: 12, md: 6 }}>
            <Slide direction="right" cascade>
              <Box
                component="img"
                src={connect}
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
                src={connect}
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
                  sx={{ paddingTop: { xs: "0", md: "60px" } }}
                >
                  AS LOW AS 0% APR FINANCING UPON APPROVAL WITH AFFIRM
                </Typography>
                <Typography variant="subtitle1" sx={{}}>
                  Affirm provides flexible payment solutions, allowing you to
                  buy better and pay over time.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "black", width: "fit-content" }}
                >
                  Learn More
                </Button>
              </Box>
            </Slide>
          </Grid>

        </Grid>
      </Box>
     
        </box>
    )
}

export default PlatformFeatues
