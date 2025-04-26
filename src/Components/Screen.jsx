import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import img from "../images/mobile.png";

function Screen() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 3, md: 10 },
        py: { xs: 5, md: 8 },
        gap: 6,
        backgroundColor: "rgb(245, 245, 245)",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* Text Content */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        sx={{ flex: 1 }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            color: "#222",
            fontSize: { xs: "1.8rem", md: "2rem" },
            mb: 3,
            // lineHeight: 1.4,
            fontFamily: "Glancyr, sans-serif",
          }}
        >
          Hatly: Revolutionizing Cross-Border Delivery
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#555",
            fontSize: { xs: "1rem", md: "1.125rem" },
            lineHeight: 1.8,
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
         <b>Hatly</b>  is an innovative e-commerce and delivery service startup designed
          to connect shoppers with travelers for convenient and cost-effective
          delivery of goods across borders. Whether you're sending or receiving,
          Hatly ensures faster and smarter logistics—powered by real people.
        </Typography>
      </Box>

      {/* Image */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        sx={{ flex: 1, display: "flex", justifyContent: "center" }}
      >
        <img
          src={img}
          alt="App preview"
          style={{
            width: isSmallScreen ? "80%" : "600px",
            height: "auto",
            maxHeight: "640px",
          }}
        />
      </Box>
    </Box>
  );
}

export default Screen;
