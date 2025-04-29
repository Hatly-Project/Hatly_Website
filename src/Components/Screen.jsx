import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Fade, Slide } from "react-awesome-reveal";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import StarRateIcon from '@mui/icons-material/StarRate';
import middltImg from "../images/phone screen1-Photoroom.png";

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: "#4141DA",
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  position: 'relative',
  textAlign: 'center',
  
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '3px',
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: '3px'
  }
}));

const GradientPaper = styled(Paper)(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  overflow: 'hidden',
  width: '300px',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '5px',
    background: 'linear-gradient(90deg, #4141DA, #FF8E53)',
    animation: 'gradientMove 3s linear infinite',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '5px',
    background: 'linear-gradient(90deg, #FF8E53, #4141DA)',
    animation: 'gradientMove 3s linear infinite',
  },
  '@keyframes gradientMove': {
    '0%': {
      background: 'linear-gradient(90deg, #4141DA, #FF8E53)',
    },
    '50%': {
      background: 'linear-gradient(90deg, #FF8E53, #4141DA)',
    },
    '100%': {
      background: 'linear-gradient(90deg, #4141DA, #FF8E53)',
    }
  }
}));

const services = [
  {
    icon: <LocalShippingIcon sx={{ fontSize: 50 }} />,
    title: "Shipment Posting",
    desc: "Shoppers can create shipment listings on the platform."
  },
  {
    icon: <AccountCircleIcon sx={{ fontSize: 50 }} />,
    title: "Traveler Profiles",
    desc: "Travelers can create profiles showcasing their itineraries."
  },
  {
    icon: <PaymentIcon sx={{ fontSize: 50 }} />,
    title: "Secure Payments",
    desc: "Secure transactions with funds held in escrow."
  },
  {
    icon: <StarRateIcon sx={{ fontSize: 50 }} />,
    title: "Rating and Reviews",
    desc: "Rate and review to build trust within the community."
  }
];

const OurServices = () => (
  <Box sx={{ background: "#f5f5f5", py: 8, textAlign: "center" }}>
    <Fade>
      <Box textAlign="center" mb={6}>
        <SectionTitle variant="h4" component="h2">
          Inside The Platform
        </SectionTitle>
       
      </Box>
    </Fade>

    <Box sx={{ 
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      px: 2
    }}>
      {/* Left Cards Column */}
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        width: { md: '300px' }
      }}>
        <Slide direction="left" triggerOnce>
          <GradientPaper>
            <Box sx={{
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#fff",
              transition: "all 0.5s ease",
              "&:hover": {
                backgroundColor: "#4141DA",
                color: "#fff",
                "& .icon": {
                  color: "#fff",
                  transform: "scale(1.5)",
                }
              }
            }}>
              <Box mb={2} className="icon" sx={{ transition: "all 0.3s ease", color: "#4141DA" }}>
                {services[0].icon}
              </Box>
              <Typography variant="h6" fontWeight={700} mb={1}>
                {services[0].title}
              </Typography>
              <Typography fontSize="0.9rem" textAlign="center">
                {services[0].desc}
              </Typography>
            </Box>
          </GradientPaper>
        </Slide>

        <Slide direction="left" triggerOnce delay={200}>
          <GradientPaper>
            <Box sx={{
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#fff",
              transition: "all 0.5s ease",
              "&:hover": {
                backgroundColor: "#4141DA",
                color: "#fff",
                "& .icon": {
                  color: "#fff",
                  transform: "scale(1.5)",
                }
              }
            }}>
              <Box mb={2} className="icon" sx={{ transition: "all 0.3s ease", color: "#4141DA" }}>
                {services[1].icon}
              </Box>
              <Typography variant="h6" fontWeight={700} mb={1}>
                {services[1].title}
              </Typography>
              <Typography fontSize="0.9rem" textAlign="center">
                {services[1].desc}
              </Typography>
            </Box>
          </GradientPaper>
        </Slide>
      </Box>

      {/* Middle Image */}
      <Fade triggerOnce>
        <Box sx={{
          width: { xs: '100%', md: '400px' },
          flexShrink: 0,
          px: { xs: 0, md: 2 }
        }}>
          <Box
            component="img"
            src={middltImg}
            alt="Platform overview"
            sx={{
              width: '100%',
              height: '100%',
              // borderRadius: '20px',
              // boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              minHeight: '700px',
              objectFit: 'cover'
            }}
          />
        </Box>
      </Fade>

      {/* Right Cards Column */}
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        width: { md: '300px' }
      }}>
        <Slide direction="right" triggerOnce>
          <GradientPaper>
            <Box sx={{
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#fff",
              transition: "all 0.5s ease",
              "&:hover": {
                backgroundColor: "#4141DA",
                color: "#fff",
                "& .icon": {
                  color: "#fff",
                  transform: "scale(1.5)",
                }
              }
            }}>
              <Box mb={2} className="icon" sx={{ transition: "all 0.3s ease", color: "#4141DA" }}>
                {services[2].icon}
              </Box>
              <Typography variant="h6" fontWeight={700} mb={1}>
                {services[2].title}
              </Typography>
              <Typography fontSize="0.9rem" textAlign="center">
                {services[2].desc}
              </Typography>
            </Box>
          </GradientPaper>
        </Slide>

        <Slide direction="right" triggerOnce delay={200}>
          <GradientPaper>
            <Box sx={{
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#fff",
              transition: "all 0.5s ease",
              "&:hover": {
                backgroundColor: "#4141DA",
                color: "#fff",
                "& .icon": {
                  color: "#fff",
                  transform: "scale(1.5)",
                }
              }
            }}>
              <Box mb={2} className="icon" sx={{ transition: "all 0.3s ease", color: "#4141DA" }}>
                {services[3].icon}
              </Box>
              <Typography variant="h6" fontWeight={700} mb={1}>
                {services[3].title}
              </Typography>
              <Typography fontSize="0.9rem" textAlign="center">
                {services[3].desc}
              </Typography>
            </Box>
          </GradientPaper>
        </Slide>
      </Box>
    </Box>
  </Box>
);

export default OurServices;