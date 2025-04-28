import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const footerLinks = [
    {
      title: "App",
      links: ["Trade", "Explore", "Download"],
    },
    {
      title: "Need Help",
      links: ["About Us", "Contact Us", "Blog"],
    },
    {
      title: "Support",
      links: ["Help Center", "Community", "FAQs"],
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#4141DA",
        width: "100vw",
        minHeight: "400px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "20px", md: "40px 20px" }, // responsive padding
        flexDirection: "column",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "center", md: "flex-start" }}
        sx={{
          width: "100%",
          maxWidth: "1200px",
          flexWrap: "wrap",
          textAlign: { xs: "center", md: "left" },
          gap: { xs: "20px", md: "40px" }
        }}
      >
        <Box
          sx={{
            color: "white",
            flex: { xs: "1 1 100%", md: "1" },
            minWidth: { xs: "100%", md: "200px" }
          }}
        >
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px", fontSize: "30px", fontWeight: "bold" }}>HATLY</li>
            <li style={{ fontSize: "16px" }}>From here to here .. We make it Clear.</li>
          </ul>
        </Box>

        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            flex: { xs: "1 1 100%", md: "2" },
            width: "100%",
            justifyContent: { xs: "center", md: "flex-start" },
            gap: { xs: "20px", md: "40px" }
          }}
        >
          {footerLinks.map((section, index) => (
            <Box key={index} sx={{ 
              color: "white", 
              flex: 1, 
              minWidth: { xs: "100%", md: "120px" },
              textAlign: { xs: "center", md: "left" }
            }}>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ fontSize: "20px", marginBottom: "30px", cursor: 'pointer', fontWeight: "bold" }}>
                  {section.title}
                </li>
                {section.links.map((link, idx) => (
                  <li key={idx} style={{ marginBottom: "10px", cursor: 'pointer', fontSize: "16px" }}>
                    {link}
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Stack>
      </Stack>

      <Box sx={{ width: "90%", borderBottom: "1px solid white", margin: 5 }} />

      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: "100%",
          maxWidth: "1200px",
          flexWrap: "wrap",
          textAlign: { xs: "center", md: "left" },
          gap: { xs: "20px", md: "40px" }
        }}
      >
        <Typography color="white" sx={{ flex: 1, fontSize: { xs: "14px", md: "16px" } }}>
          © {new Date().getFullYear()} HATLY
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ flex: 2, alignItems: "center", justifyContent: { xs: "center", md: "flex-end" } }}
        >
          <Typography color="white" sx={{ cursor: 'pointer', fontSize: { xs: "14px", md: "16px" } }}>Cookie policy</Typography>
          <Typography color="white" sx={{ cursor: 'pointer', fontSize: { xs: "14px", md: "16px" } }}>Privacy policy</Typography>
          <Typography color="white" sx={{ cursor: 'pointer', fontSize: { xs: "14px", md: "16px" } }}>Terms of service</Typography>
          <Typography color="white" sx={{ cursor: 'pointer', fontSize: { xs: "14px", md: "16px" } }}>Careers</Typography>
          <Typography color="white" sx={{ cursor: 'pointer', fontSize: { xs: "14px", md: "16px" } }}>Help center</Typography>
          <Stack direction="row" spacing={1} color="white">
            <a href="https://web.facebook.com/profile.php?id=61561175183049" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
              <FacebookIcon />
            </a>
            <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
              <TwitterIcon />
            </a>
            <a href="https://www.linkedin.com/yourpage" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/hatly_2025/profilecard/?igsh=NHdieXB4aDk1NG4=" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
              <InstagramIcon />
            </a>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;
