// SecondScreen.jsx

import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Fade, Slide } from "react-awesome-reveal";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CalculateIcon from '@mui/icons-material/Calculate';
import middltImg from "../images/phone screen1-Photoroom.png";

// Styled components
const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  position: "relative",
  textAlign: "center",
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80px",
    height: "3px",
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: "3px",
  },
}));

const GradientPaper = styled(Paper)(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
  width: "280px",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    padding: "2px",
    borderRadius: "20px",
    background: "linear-gradient(270deg, #4141DA, #FF8E53, #4141DA)",
    backgroundSize: "400% 400%",
    zIndex: 1,
    pointerEvents: "none",
    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    animation: "moveGradientBorder 4s linear infinite",
  },
  "@keyframes moveGradientBorder": {
    "0%": { backgroundPosition: "0% 50%" },
    "100%": { backgroundPosition: "100% 50%" },
  },
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

// Helper for rendering service cards
const ServiceCard = ({ service, delay = 0, direction = "left" }) => (
  <Slide direction={direction} triggerOnce delay={delay}>
    <GradientPaper>
      <Box
        sx={{
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
            },
          },
        }}
      >
        <Box
          mb={2}
          className="icon"
          sx={{ transition: "all 0.3s ease", color: "#4141DA" }}
        >
          {service.icon}
        </Box>
        <Typography variant="h6" fontWeight={700} mb={1}>
          {service.title}
        </Typography>
        <Typography fontSize="0.9rem" textAlign="center">
          {service.desc}
        </Typography>
      </Box>
    </GradientPaper>
  </Slide>
);

// Main Component
const SecondScreen = () => (
  <Box sx={{ background: "#f5f5f5", py: 4, textAlign: "center" }}>
    

    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        px: 2,
      }}
    >
      {/* Left Column */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          width: { md: "280px" },
        }}
      >
        <ServiceCard service={services[0]} direction="left" />
        <ServiceCard service={services[1]} direction="left" delay={200} />
      </Box>

      {/* Middle Image */}
      <Fade triggerOnce>
        <Box
          sx={{
            width: { xs: "100%", md: "400px" },
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
             
              minHeight: '700px',
              objectFit: 'cover'
            }}
          />
        </Box>
      </Fade>

      {/* Right Column */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          width: { md: "280px" },
        }}
      >
        <ServiceCard service={services[2]} direction="right" />
        <ServiceCard service={services[3]} direction="right" delay={200} />
      </Box>
    </Box>
  </Box>
);

export default SecondScreen;
