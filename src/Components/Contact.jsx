import React, { useRef } from "react";
import { Box, Typography, Grid, IconButton, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Facebook,
  MailOutline,
  Phone,
} from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion, useInView } from "framer-motion";

const MotionGrid = motion(Grid);

export default function ContactUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <Box 
      ref={ref} 
      id="contact" 
      px={{ xs: 2, sm: 4, md: 6 }} 
      py={{ xs: 6, sm: 8, md: 10 }}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      minHeight="100vh"
      justifyContent="center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ width: '100%' }}
      >
        <Typography
          variant="h4"
          gutterBottom
          fontFamily="monospace"
          fontWeight="bold"
          mt={2}
          textAlign="left"
        >
          Contact Us
        </Typography>
        <Box width="150px" height="2px" bgcolor="grey.300" mb={6} />
      </motion.div>

      <MotionGrid
        container
        spacing={{ xs: 4, md: 6 }}
        justifyContent="flex-start"
        alignItems="flex-start"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        maxWidth="1200px"
        width="100%"
      >
        {/* Left: Description */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography 
              variant="body1" 
              color="textSecondary" 
              fontWeight="bold"
              textAlign="left"
            >
              We're here to help you every step of the way.
              <br />
              Whether it's about using the app, tracking shipments, or managing your trips — our support team is just a message away.
            </Typography>
          </motion.div>
        </Grid>

        {/* Right: Contact Info */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Box 
              display="flex" 
              flexDirection="column" 
              gap={2}
              alignItems="flex-start"
            >
              {/* Phone */}
              <Box display="flex" alignItems="center" gap={2}>
                <Phone sx={{ color: "rgba(2, 19, 26, 0.73)" }} />
                <Link
                  href="https://wa.me/+971 04545546"
                  color="rgba(2, 19, 26, 0.73)"
                  underline="hover"
                  fontWeight="bold"
                  fontSize={{ xs: 16, sm: 18 }}
                >
                  +971 04545546
                </Link>
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                <MailOutline sx={{ color: "rgba(2, 19, 26, 0.73)" }} />
                <Link
                  href="mailto:hatly160@gmail.com"
                  color="rgba(2, 19, 26, 0.73)"
                  underline="hover"
                  fontWeight="bold"
                  fontSize={{ xs: 16, sm: 18 }}
                >
                  hatly160@gmail.com
                </Link>
              </Box>

              {/* Location */}
              <Box display="flex" alignItems="center" gap={2}>
                <LocationOnIcon sx={{ color: "rgba(2, 19, 26, 0.73)" }} />
                <Link
                  color="rgba(2, 19, 26, 0.73)"
                  underline="hover"
                  fontWeight="bold"
                  fontSize={{ xs: 16, sm: 18 }}
                >
                  Cairo , Egypt
                </Link>
              </Box>

              {/* Social Icons */}
              <Box display="flex" gap={2} mt={2}>
                <IconButton href="https://web.facebook.com/profile.php?id=61561175183049" target="_blank">
                  <Facebook
                    sx={{ color: "rgba(6, 64, 126, 0.73)", fontSize: "25px" }}
                  />
                </IconButton>
                <IconButton href="https://wa.me/+20 100 911 9214" target="_blank">
                  <WhatsAppIcon
                    sx={{ color: "rgba(36, 126, 6, 0.73)", fontSize: "25px" }}
                  />
                </IconButton>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </MotionGrid>
    </Box>
  );
}
