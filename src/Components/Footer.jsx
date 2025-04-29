import { Box, Stack, Typography, IconButton, Link } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

function Footer() {
  const footerLinks = [
    {
      title: "App",
      links: ["Trade", "Download"],
    },
    {
      title: "Need Help",
      links: ["About Us", "FAQs"],
    }
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #4141DA 0%, #6A6AFF 100%)",
        width: "100%",
        minHeight: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "20px", md: "60px " },
        flexDirection: "column",
        color: "white",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 -10px 30px rgba(65, 65, 218, 0.3)",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)",
        },
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(65,65,218,0) 70%)",
          transform: "translate(30%, 30%)",
          zIndex: 1,
        }}
      />
      
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(65,65,218,0) 70%)",
          transform: "translate(-30%, -30%)",
          zIndex: 1,
        }}
      />

      {/* Animated floating circles */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "15%",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.3)",
          animation: "float 6s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0) translateX(0)" },
            "50%": { transform: "translateY(-20px) translateX(10px)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "30%",
          left: "20%",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.2)",
          animation: "float2 5s ease-in-out infinite",
          "@keyframes float2": {
            "0%, 100%": { transform: "translateY(0) translateX(0)" },
            "50%": { transform: "translateY(15px) translateX(-5px)" },
          },
        }}
      />

      <Box
        sx={{
          width: "100%",
          maxWidth: "1400px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "center", md: "flex-start" }}
          spacing={{ xs: 4, md: 0 }}
          sx={{
            width: "100%",
            flexWrap: "wrap",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Brand Info Column */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "1" },
              minWidth: { xs: "100%", md: "300px" },
              mb: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                mb: 2,
                background: "linear-gradient(90deg, #FFFFFF, #E0E0FF)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                fontSize: { xs: "1.8rem", md: "2.2rem" },
              }}
            >
              HATLY
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 2, 
                opacity: 0.9,
                fontStyle: "italic",
                position: "relative",
                display: "inline-block",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: "100%",
                  height: "1px",
                  background: "linear-gradient(90deg, rgba(255,255,255,0.5), transparent)",
                }
              }}
            >
              From here to here .. We make it Clear.
            </Typography>
            
            {/* Social Icons */}
            <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
              <IconButton
                href="https://web.facebook.com/profile.php?id=61561175183049"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  bgcolor: "rgba(255,255,255,0.2)",
                  "&:hover": {
                    bgcolor: "#1877F2",
                    transform: "translateY(-3px)",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  },
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(5px)",
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://twitter.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  bgcolor: "rgba(255,255,255,0.2)",
                  "&:hover": {
                    bgcolor: "#1DA1F2",
                    transform: "translateY(-3px)",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  },
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(5px)",
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  bgcolor: "rgba(255,255,255,0.2)",
                  "&:hover": {
                    bgcolor: "#0A66C2",
                    transform: "translateY(-3px)",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  },
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(5px)",
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/hatly_2025/profilecard/?igsh=NHdieXB4aDk1NG4="
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  bgcolor: "rgba(255,255,255,0.2)",
                  "&:hover": {
                    background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                    transform: "translateY(-3px)",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  },
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(5px)",
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Stack>

            {/* Contact Info */}
            <Stack spacing={1.5} sx={{ opacity: 0.9 }}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <EmailIcon fontSize="small" sx={{ color: "#E0E0FF" }} />
                <Link
                  href="mailto:contact@hatly.com"
                  underline="hover"
                  color="inherit"
                  sx={{ 
                    cursor: 'pointer',
                    "&:hover": {
                      color: "white",
                    }
                  }}
                >
                  <Typography variant="body2">contact@hatly.com</Typography>
                </Link>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1.5}>
                <PhoneIcon fontSize="small" sx={{ color: "#E0E0FF" }} />
                <Link
                  href="tel:+15551234567"
                  underline="hover"
                  color="inherit"
                  sx={{ 
                    cursor: 'pointer',
                    "&:hover": {
                      color: "white",
                    }
                  }}
                >
                  <Typography variant="body2">+1 (555) 123-4567</Typography>
                </Link>
              </Stack>

              <Stack direction="row" alignItems="flex-start" spacing={1.5}>
                <LocationOnIcon fontSize="small" sx={{ color: "#E0E0FF", mt: 0.5 }} />
                <Typography 
                  variant="body2" 
                  color="inherit"
                  sx={{ 
                    cursor: 'pointer',
                    "&:hover": {
                      color: "white",
                    }
                  }}
                >
                  Cairo, Egypt
                </Typography>
              </Stack>
            </Stack>
          </Box>

          {/* Links Columns */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 4, sm: 6, md: 8 }}
            sx={{
              flex: { xs: "1 1 100%", md: "2" },
              justifyContent: "space-between",
            }}
          >
            {footerLinks.map((section, index) => (
              <Box key={index}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 3,
                    position: "relative",
                    fontSize: "1.1rem",
                    letterSpacing: "0.5px",
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      bottom: -8,
                      left: { xs: "50%", md: 0 },
                      transform: { xs: "translateX(-50%)", md: "none" },
                      width: "40px",
                      height: "3px",
                      background: "linear-gradient(90deg, #FFFFFF, #E0E0FF)",
                      borderRadius: "2px",
                      transition: "width 0.3s ease",
                    },
                    "&:hover:after": {
                      width: "60px",
                    }
                  }}
                >
                  {section.title}
                </Typography>
                <Stack spacing={1.5}>
                  {section.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href="#"
                      underline="none"
                      sx={{
                        color: "rgba(255,255,255,0.9)",
                        "&:hover": {
                          color: "white",
                          transform: "translateX(5px)",
                          textShadow: "0 0 5px rgba(255,255,255,0.5)",
                        },
                        transition: "all 0.2s ease",
                        fontSize: "0.95rem",
                        display: "inline-block",
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Stack>

        {/* Divider */}
        <Box
          sx={{
            width: "100%",
            height: "1px",
            bgcolor: "rgba(255,255,255,0.2)",
            my: 5,
            position: "relative",
            "&:before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              width: "100px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
            }
          }}
        />

        {/* Bottom Section */}
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              opacity: 0.8,
              fontSize: "0.85rem",
            }}
          >
            © {new Date().getFullYear()} HATLY. All rights reserved.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 3 }}
            divider={
              <Box
                sx={{
                  width: "1px",
                  height: "16px",
                  bgcolor: "rgba(255,255,255,0.3)",
                  display: { xs: "none", sm: "block" },
                  my: "auto",
                }}
              />
            }
            sx={{
              textAlign: { xs: "center", sm: "left" },
              "& a": {
                color: "rgba(255,255,255,0.9)",
                textDecoration: "none",
                fontSize: "0.85rem",
                "&:hover": {
                  color: "white",
                  textDecoration: "underline",
                  textShadow: "0 0 5px rgba(255,255,255,0.3)",
                },
                transition: "all 0.2s ease",
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "0%",
                  height: "1px",
                  bgcolor: "white",
                  transition: "width 0.3s ease",
                },
                "&:hover:after": {
                  width: "100%",
                }
              },
            }}
          >
            <Link href="#">Cookie policy</Link>
            <Link href="#">Privacy policy</Link>
            <Link href="#">Terms of service</Link>
            <Link href="#">Help center</Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default Footer;