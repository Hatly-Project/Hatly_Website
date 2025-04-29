


import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import AppStoreGooglePlayButtons from "./Installation";
import img from "../images/Hatly Landing Page (20).png";
import phone from "../images/1-removebg-preview.png";

export default function FirstSection() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientY / innerHeight - 0.5) * 15;
    const y = (e.clientX / innerWidth - 0.5) * 15;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <Box
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        pb: { xs: 8, md: 12 },
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Static Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -2,
          background: "rgba(0,0,0,0.7)",
        }}
      >
        <img
          src={img}
          alt="Background"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.6,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, rgba(65,65,218,0.2) 0%, rgba(0,0,0,0.5) 100%)",
          }}
        />
      </Box>

      {/* Content Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 3, md: 6, lg: 10 },
          py: { xs: 10, md: 12 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 6, md: 10 },
        }}
      >
        {/* Text Content */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={3}
              sx={{
                color: "white",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
                lineHeight: 1.2,
                letterSpacing: "0.5px",
                fontFamily: "'Poppins', sans-serif",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              Get what you need from anywhere <br/>in the world <br/>

            
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #ffff, #4141DA)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Hatly brings it
              </Box>{" "}
              straight to you.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "rgba(255,255,255,0.85)",
                mt: 2,
                mb: 4,
                fontSize: { xs: "1rem", md: "1.1rem" },
                maxWidth: "600px",
                lineHeight: 1.7,
              }}
            >
              With Hatly, the world is within your reach <br/>
              Order from anywhere and let reliable travelers bring it to you.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <Box sx={{ mt: 4, width: "100%", maxWidth: { xs: "100%", sm: "400px", md: "100%" } }}>
              <AppStoreGooglePlayButtons />
            </Box>
          </motion.div>
        </Box>

       


      </Box>

      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(65,65,218,0.3) 0%, rgba(65,65,218,0) 70%)",
          filter: "blur(5px)",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(65,65,218,0.3) 0%, rgba(65,65,218,0) 70%)",
          filter: "blur(10px)",
          zIndex: -1,
        }}
      />
    </Box>
  );
}