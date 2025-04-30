

import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Fade, Slide } from "react-awesome-reveal";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CalculateIcon from '@mui/icons-material/Calculate';
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
    background: 'linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})',
    borderRadius: '3px'
  }
}));

const GradientPaper = styled(Paper)(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  overflow: 'hidden',
  width: '300px',
  boxShadow: 'none',
  backgroundColor: 'transparent',
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    }
  }
}));

const services = [
  {
    icon: <SyncAltIcon sx={{ fontSize: 50 }} />,
    title: "Matching Algorithm",
    desc: "Hatly uses an intelligent algorithm that matches travelers to shipments based on their travel route, available luggage space, and the reward being offered.",
  },
  {
    icon: <NotificationsActiveIcon sx={{ fontSize: 50 }} />,
    title: "Tracking and Notifications",
    desc: "Shoppers and travelers can track the progress of their shipments in real-time. Both parties receive notifications about the status of the delivery.",
  },
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 50 }} />,
    title: "Shipment Insurance",
    desc: "Shoppers can opt for additional insurance to cover any damage or loss during the shipment process, providing more peace of mind.",
  },
  {
    icon: <CalculateIcon sx={{ fontSize: 50 }} />,
    title: "Custom Fees Calculation",
    desc: "Hatly automatically calculates the total cost for the shopper, including platform fees, traveler compensation, and shipping-related costs, factoring in weight, value, and destination.",
  },
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
      alignItems: { xs: 'center', md: 'flex-end' },
      justifyContent: 'center',
      gap: 6,
      px: 2
    }}>
      {/* Left Cards Column */}
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
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
              backgroundColor: "transparent",
              transition: "all 0.5s ease",
              "&:hover": {
                "& .icon": {
                  color: "#4141DA",
                  transform: "scale(1.5)",
                }
              }
            }}>
              <Box mb={2} className="icon" sx={{ 
                transition: "all 0.3s ease", 
                color: "#4141DA",
                padding: '14px',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: '50%',
                  padding: '3px',
                  background: 'linear-gradient(90deg, #4141DA, #FF8E53)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  animation: 'rotate 1s linear infinite',
                }
              }}>
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
              backgroundColor: "transparent",
              transition: "all 0.5s ease",
              "&:hover": {
                "& .icon": {
                  color: "#4141DA",
                  transform: "scale(1.5)",
                }
              }
            }}>
              <Box mb={2} className="icon" sx={{ 
                transition: "all 0.3s ease", 
                color: "#4141DA",
                padding: '14px',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: '50%',
                  padding: '3px',
                  background: 'linear-gradient(90deg, #4141DA, #FF8E53)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  animation: 'rotate 1s linear infinite',
                }
              }}>
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
  <Box
    sx={{
      display: { xs: 'none', md: 'block' }, // hide on xs and show on md+
      width: { xs: '100%', md: '400px' },
      flexShrink: 0,
      px: { xs: 0, md: 2 },
    }}
  >
    <Box
      component="img"
      src={middltImg}
      alt="Platform overview"
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        top: '20px',
        minHeight: '700px',
        objectFit: 'cover',
      }}
    />
  </Box>
</Fade>


      {/* Right Cards Column */}
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
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
              backgroundColor: "transparent",
              transition: "all 0.5s ease",
              "&:hover": {
                "& .icon": {
                  color: "#4141DA",
                  transform: "scale(1.5)",
                }
              }
            }}>
              <Box mb={2} className="icon" sx={{ 
                transition: "all 0.3s ease", 
                color: "#4141DA",
                padding: '14px',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: '50%',
                  padding: '3px',
                  background: 'linear-gradient(90deg, #4141DA, #FF8E53)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  animation: 'rotate 1s linear infinite',
                }
              }}>
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
              backgroundColor: "transparent",
              transition: "all 0.5s ease",
              "&:hover": {
                "& .icon": {
                  color: "#4141DA",
                  transform: "scale(1.5)",
                }
              }
            }}>
              <Box mb={2} className="icon" sx={{ 
                transition: "all 0.3s ease", 
                color: "#4141DA",
                padding: '14px',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: '50%',
                  padding: '3px',
                  background: 'linear-gradient(90deg, #4141DA, #FF8E53)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  animation: 'rotate 1s linear infinite',
                }
              }}>
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