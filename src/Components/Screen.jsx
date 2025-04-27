


// import * as React from "react";
// import {
//   Box,
//   Typography,
//   useTheme,
//   useMediaQuery,
//   Paper
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { motion } from "framer-motion";

// import about from "../images/Shipment details.png";
// import villaImg from "../images/Capture.png";
// import flatImg from "../images/Capture.png";
// import studioImg from "../images/Capture.png";

// const ServiceCard = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.primary,
//   backgroundColor: "#f9f9f9",
//   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//   borderRadius: "16px",
//   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
//   overflow: "hidden",
//   "&:hover": {
//     transform: "translateY(-5px) scale(1.02)",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
//   },
// }));

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// export default function AboutUs() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box px={6} mt={5}>
//       {/* <motion.div initial="hidden" animate="visible" variants={fadeUp}>
//         <Typography
//           variant="h4"
//           gutterBottom
          
//           fontFamily={"monospace"}
//           fontWeight={"bold"}
//         >
//           Hatly Revolutionizing <br/>Cross-Border Delivery
//         </Typography>
     
//       </motion.div> */}

//       <Box
//         display="flex"
//         flexDirection={isMobile ? "column" : "row"}
//         alignItems="center"
//         justifyContent="space-between"
//         gap={6}
//       >
//         <Box flex={1}>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
            
//             <Typography
//               variant="h6"
//               color="rgb(72, 75, 76)"
//               letterSpacing={1}
              
//             >
//               <span style={{ fontWeight: "bold",variant:"h4"}}>HATLY </span>is an innovative e-commerce and delivery service startup designed
//            to connect shoppers with travelers for convenient and cost-effective
//            delivery of goods across borders. Whether you're sending or receiving,
//            Hatly ensures faster and smarter logistics — powered by real people.
//             </Typography>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
            
//             <Typography
//               variant="h6"
//               color="rgb(72, 75, 76)"
//               letterSpacing={1}
//               mt={3}
              
//             >
//               In exchange for delivering packages, 
// travelers earn a reward, and shoppers benefit from the delivery service, often at a lower cost than traditional courier 
// services. 
//             </Typography>
//           </motion.div>
//         </Box>

//         <Box flex={1} textAlign="center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <img
//               src={about}
//               alt="screen hatly"
//               style={{
//                 width: "80%",
//                 maxWidth: 350,
//                 height: "300",
//                 // boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
//                 borderRadius: "16px"
//               }}
//             />
//           </motion.div>
//         </Box>
//       </Box>

//       {/* Services Section */}
//       <Box mt={4}>
//       <Box width="150px" height="2px" bgcolor="grey.200" />
//       <Typography
//         variant="h4"
//         gutterBottom
//         fontFamily={"monospace"}
//         fontWeight={"bold"}
//         mt={3}
//       >
//         Platform Features
//       </Typography>
//       <Typography variant="h6" color="rgb(72, 75, 76)" letterSpacing={1} mt={3}>
//         Offering a wide range of Rental Properties:
//       </Typography>

//       <Box
//         mt={4}
//         display="flex"
//         flexWrap
//         flexDirection={isMobile ? "column" : "row"}
//         justifyContent="center"
//         alignItems="stretch"
//         gap={4}
//       >
//         {/* Villas */}
//         {[...Array(3)].map((_, index) => (
//           <motion.div
//             key={index}
//             custom={index + 1}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <ServiceCard>
//               <Box
//                 sx={{
//                   width: "120px", // Set image width smaller
//                   height: "120px", // Set image height smaller
//                   borderRadius: "50%", // Make the image circular
//                   overflow: "hidden",
//                   margin: "0 auto", // Center the image inside the card
//                 }}
//               >
//                 <img
//                   src={villaImg}
//                   alt="Shipment Posting"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                   }}
//                 />
//               </Box>
//               <Typography variant="h6" fontWeight="bold" mt={2} gutterBottom>
//                 Shipment Posting
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Shoppers can create shipment listings on the platform, providing details such as the package type, weight, destination, and the reward they are offering to the traveler.
//               </Typography>
//             </ServiceCard>
//           </motion.div>
//         ))}
//       </Box>
//     </Box>
//     </Box>
//   );
// }

import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import StarRateIcon from '@mui/icons-material/StarRate';

const services = [
  {
    icon: <LocalShippingIcon sx={{ fontSize: 50, color: "#4141DA" }} />,
    title: "Shipment Posting",
    desc: "Shoppers can create shipment listings on the platform, providing details such as the package type, weight, destination, and the reward they are offering to the traveler."
  },
  {
    icon: <AccountCircleIcon sx={{ fontSize: 50, color: "#4141DA" }} />,
    title: "Traveler Profiles",
    desc: "Travelers can create profiles on the platform, showcasing their travel itineraries, past delivery experiences, and ratings from previous shoppers."
  },
  {
    icon: <PaymentIcon sx={{ fontSize: 50, color: "#4141DA" }} />,
    title: "Secure Payments",
    desc: "The platform facilitates secure payment transactions between shoppers and travelers, ensuring that funds are held in escrow until the delivery is completed successfully."
  },
  {
    icon: <StarRateIcon sx={{ fontSize: 50, color: "#4141DA" }} />,
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
    <Typography variant="h3" fontWeight={700} mb={1} color="#333">
      Our Services
    </Typography>

    {/* Tiny separator */}
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 5, gap: 1 }}>
      <Box sx={{ width: 70, height: 3, bgcolor: "#ff3b6f" }} />
      <Box sx={{ width: 40, height: 3, bgcolor: "#ff3b6f" }} />
    </Box>

    {/* Responsive flexbox layout */}
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch",
        gap: 4,
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
            elevation={0}
            sx={{
              p: 4,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #ddd",
              borderRadius: "16px",
              backgroundColor: "white",
            }}
          >
            <Box mb={2}>{service.icon}</Box>
            <Typography variant="h6" fontWeight={700} mb={2} color="#333">
              {service.title}
            </Typography>
            <Typography color="#555" fontSize="1rem">
              {service.desc}
            </Typography>
          </Paper>
        </motion.div>
      ))}
    </Box>
  </Box>
);

export default OurServices;


