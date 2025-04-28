

import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import StarRateIcon from '@mui/icons-material/StarRate';

const services = [
  {
    icon: <LocalShippingIcon sx={{ fontSize: 50 }} />,
    title: "Shipment Posting",
    desc: "Shoppers can create shipment listings on the platform, providing details such as the package type, weight, destination, and the reward they are offering to the traveler."
  },
  {
    icon: <AccountCircleIcon sx={{ fontSize: 50 }} />,
    title: "Traveler Profiles",
    desc: "Travelers can create profiles on the platform, showcasing their travel itineraries, past delivery experiences, and ratings from previous shoppers."
  },
  {
    icon: <PaymentIcon sx={{ fontSize: 50 }} />,
    title: "Secure Payments",
    desc: "The platform facilitates secure payment transactions between shoppers and travelers, ensuring that funds are held in escrow until the delivery is completed successfully."
  },
  {
    icon: <StarRateIcon sx={{ fontSize: 50 }} />,
    title: "Rating and Reviews",
    desc: "Shoppers and travelers can rate and review each other after a successful delivery, helping to build trust within the community."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring"
    }
  })
};

const OurServices = () => (
  <Box sx={{ background: "#f5f5f5", py: 8, textAlign: "center" }}>
    <Box marginBottom={'30px'}>
           <h1 style={{ color: '#4141DA' ,marginBottom:'15px'}}>Inside The Platform</h1>
           <Box width="20%" height="1px" bgcolor="grey.300" margin={'auto'} />
         </Box>

    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch",
        gap: 1,
        px: 2
      }}
    >
      {services.map((service, idx) => (
        <motion.div
          key={idx}
          custom={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          style={{ flex: "1 1 250px", maxWidth: "300px" }}
        >
          <Paper
            sx={{
              p: 4,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              borderRadius:'20px ',
              
              transition: "all 0.5s ease",
              border: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#4141DA",
                color: "#fff",
                "& .icon": {
                  color: "#fff",
                  transform: "scale(1.5)",
                }
              }
            }}
          >
            <Box mb={2} className="icon" sx={{ transition: "all 0.3s ease", color: "#4141DA" }}>
              {service.icon}
            </Box>
            <Typography variant="h6" fontWeight={700} mb={2}>
              {service.title}
            </Typography>
            <Typography fontSize="1rem">
              {service.desc}
            </Typography>
          </Paper>
        </motion.div>
      ))}
    </Box>
  </Box>
);

export default OurServices;




