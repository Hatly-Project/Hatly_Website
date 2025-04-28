// import React, { useState } from "react";
// import { Box, Typography } from "@mui/material";
// import { motion } from "framer-motion";
// import StatsSection from "./StateSection";
// import Screen from "./Screen";
// import AppStoreGooglePlayButtons from "./Installation";
// import phone from "../images/1-removebg-preview.png";

// export default function FirstSection() {
//   return (
//     <Box
//       sx={{
//        background: "white",

//         width: "100%",
//         minHeight: "100vh",
//         overflow: "hidden",
//         pb: { xs: 8, md: 12 },
//       }}
//     >
//       {/* Content */}
//       <Box
//         sx={{
//           pt: { xs: 10, md: 16 },
//           px: { xs: 3, md: 10 },
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           alignItems: "center",
//           justifyContent: "space-between",
//           textAlign: { xs: "center", md: "left" },
//         }}
//       >
//         {/* Left Side - Text */}
//         <Box sx={{  flex: 1,
//         width: "100%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "flex-start", }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <Typography
//               variant="h2"
//               fontWeight="bold"
//               mb={2}
//               sx={{
//                 color: "white", // Text color changed to black
//                 fontSize: { xs: "2rem", md: "3rem" },
//                 letterSpacing: "1px",
//                 textTransform: "capitalize",
//                 fontFamily: "Glancyr, sans-serif",
//               }}
//             >
//               Need anything from outside? <br/>Just tell Hatly,<br/> and they'll get it for you.
//             </Typography>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             <Typography
//               fontSize={{ xs: "1rem", md: "1.25rem" }}
//               sx={{
//                 color: "#393E46", // Subtext color updated to gray
//                 mt: 5,
//                 letterSpacing: "0.5px",
                
//               }}
//             >
//              Hatly brings you closer to what you need. Order your product from anywhere<br/> in the world and have it delivered to you by trusted travelers.
//             </Typography>
//           </motion.div>

//           {/* App Store & Google Play Buttons */}
//           <Box mt={5}
//           alignItems={'flex-start'}>
//             <AppStoreGooglePlayButtons />
//           </Box>
//         </Box>

//         {/* Right Side - Phone Image */}
//         {/* <Box
//           sx={{
//             flex: 1,
//             mt: { xs: 8, md: 0 },
//             display: "flex",
//             justifyContent: { xs: "center", md: "flex-end" },
//           }}
//         >
//           <motion.img
//             src={phone}
//             alt="Phone"
//             style={{
//               maxWidth: "400px",
//               width: "100%",
//               height: "auto",
//             }}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 1, duration: 1 }}
//           />
//         </Box> */}
//       </Box>

//       {/* Optional: Stats Section */}
//       {/* <StatsSection /> */}
//     </Box>
//   );
// }


import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import StatsSection from "./StateSection";
import Screen from "./Screen";
import img from "../images/Hatly Landing Page (20).png";
import AppStoreGooglePlayButtons from "./Installation";
import phone from "../images/1-removebg-preview.png";

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
      {/* Background image */}
      <motion.img
        src={img}
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          objectFit:'cover',
          width: "100%",
          height: "100%",
          zIndex: -2,
          background: hover
            ? "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.9))"
            : "linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.9))",
        }}
        
      />

      {/* Gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          // backgroundImage: 'linear-gradient(to right, #4141DA 0%, #FFFFFF 100%)',
          transition: "background 0.3s ease",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          pt: { xs: 10, md: 16 },
          px: { xs: 3, md: 10 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
         

          justifyContent: "space-between",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Left Side - Text */}
        <Box sx={{ flex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              mb={2}
              sx={{
                color: "white",
                fontSize: { xs: "2rem", md: "2.06rem" },
                letterSpacing: "1px",
                textTransform: "capitalize",
                fontFamily: "sans-serif",
              }}
            >
               Need anything from outside? <br/>Just tell Hatly and they'll <br/>get it for you.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Typography
              fontSize={{ xs: "1rem", md: "1rem" }}
              sx={{
                color: "lightgray",
                mt: 6,
                mb:6,
                letterSpacing: "0.5px",
                
              }}
            >
              Hatly brings you closer to what you need. Order your product from <br/>anywhere in the world and have it delivered to you by trusted travelers.
            </Typography>
          </motion.div>
         <Box mt={20}>
           <AppStoreGooglePlayButtons/>
         </Box>

          {/* Optionally, add AppStore buttons */}
          {/* <AppStoreGooglePlayButtons /> */}
        </Box>

        {/* Right Side - Phone Image */}
        {/* <Box
          sx={{
            flex: 1,
            mt: { xs: 8, md: 0 },
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <motion.img
            src={phone}
            alt="Phone"
            style={{
              maxWidth: "900px",
              width: "100%",
              height: "auto",
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          />
        </Box> */}
      </Box>

      {/* Optional: Stats Section */}
      {/* <StatsSection /> */}
    </Box>
  );
} 