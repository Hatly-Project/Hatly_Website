import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import StatsSection from "./StateSection";
import Screen from "./Screen";
import img from "../images/plane.png";

export default function FirstSection() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientY / innerHeight - 0.5) * 20;
    const y = (e.clientX / innerWidth - 0.5) * 20;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setHover(false);
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  return (
    <Box
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        pb: { xs: 8, md: 12 },
      }}
    >
      {/* Background image with motion tilt */}
      <motion.img
        src={img}
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />

      {/* Gradient overlay for better text visibility with hover color change */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: hover
            ? "linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.8))"
            : "linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
          zIndex: -1,
          transition: "background 0.3s ease",
        }}
      />

      {/* Centered Text */}
      <Box
        sx={{
          pt: { xs: 10, md: 16 },
          px: { xs: 3, md: 10 },
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            mt={4}
            sx={{
              color: "white",
              fontSize: { xs: "2rem", md: "3rem" },
              letterSpacing: "1px",
              textTransform: "capitalize",
              fontFamily: "Glancyr, sans-serif",
            }}
          >
            Delivering the World to<br />Your Doorstep
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* <Typography
            fontSize={{ xs: "1rem", md: "1.25rem" }}
            sx={{
              color: "white",
              mt: 5,
              letterSpacing: "0.5px",
              fontStyle: "italic",
            }}
          >
            From There to Here, We Make It Clear
          </Typography> */}
        </motion.div>
      </Box>

      {/* Responsive Stats Section */}
      <Box
        sx={{
          mt: { xs: 10, md: 16 },
          px: { xs: 3, md: 8 },
          zIndex: 1,
        }}
      >
        <StatsSection />
      </Box>
    </Box>
  );
}
