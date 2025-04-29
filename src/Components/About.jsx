import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Avatar,
  Link,
  useTheme,
  Stack,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import SecurityIcon from "@mui/icons-material/Security";
import GroupIcon from "@mui/icons-material/Group";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { alpha } from "@mui/system";
import { styled } from "@mui/material/styles";

// Color palette
const colors = {
  primary: "#4141DA",
  secondary: "#6A5ACD",
  light: "#F8F9FF",
  dark: "#1A1A2E",
  accent: "#FF6B6B",
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Team data
const teamMembers = [
  {
    name: "Ahmed Wael",
    role: "Software Engineer",
    linkedin: "#",
    github: "#",
    avatarColor: "#4E79A7",
  },
  {
    name: "Alaa Hosny",
    role: "Software Engineer",
    linkedin: "#",
    github: "#",
    avatarColor: "#F28E2B",
  },
  {
    name: "Asmaa Abdo",
    role: "Software Engineer",
    linkedin: "#",
    github: "#",
    avatarColor: "#E15759",
  },
  {
    name: "Haneen Khaled",
    role: "Software Engineer",
    linkedin: "#",
    github: "#",
    avatarColor: "#76B7B2",
  },
  {
    name: "Ismail Khaleel",
    role: "Software Engineer",
    linkedin: "#",
    github: "#",
    avatarColor: "#59A14F",
  },
  {
    name: "Mohamed Ayman",
    role: "Software Engineer",
    linkedin: "#",
    github: "#",
    avatarColor: "#EDC948",
  },
];

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6') center/cover no-repeat fixed`,
  height: "500px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "white",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
  },
}));

const GradientText = styled(Typography)({
  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
});

const Card = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "16px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  background: `linear-gradient(135deg, ${alpha(colors.primary, 0.05)}, ${alpha(colors.secondary, 0.05)})`,
  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.05)`,
  transition: "all 0.3s ease",
  border: `1px solid ${alpha(colors.primary, 0.1)}`,
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: `0 15px 30px rgba(65, 65, 218, 0.1)`,
    border: `1px solid ${alpha(colors.primary, 0.2)}`,
  },
}));

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "16px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  background: `linear-gradient(135deg, ${alpha(colors.primary, 0.05)}, ${alpha(colors.secondary, 0.05)})`,
  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.05)`,
  transition: "all 0.3s ease",
  border: `1px solid ${alpha(colors.primary, 0.1)}`,
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: `0 15px 30px rgba(65, 65, 218, 0.1)`,
    border: `1px solid ${alpha(colors.primary, 0.2)}`,
  },
}));

const StatsSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
  color: "white",
  padding: theme.spacing(8, 0),
  textAlign: "center",
  margin: theme.spacing(8, 0),
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 60%)",
  },
}));

const About = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          style={{ position: "relative", zIndex: 1 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              mb: 3,
              fontSize: { xs: "2.5rem", md: "4rem" },
              background: "linear-gradient(45deg, #fff 30%, #f0f0f0 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            About Hatly
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: "800px",
              margin: "auto",
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "rgba(255,255,255,0.95)",
              textShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            Revolutionizing the future of shipping and logistics
          </Typography>
        </motion.div>
      </HeroSection>

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Mission Section with Enhanced Styling */}
          <Box sx={{ 
            mb: 8,
            background: `linear-gradient(135deg, ${alpha(colors.primary, 0.05)}, ${alpha(colors.secondary, 0.05)})`,
            borderRadius: "24px",
            p: 4,
            boxShadow: `0 8px 32px ${alpha(colors.primary, 0.1)}`,
          }}>
            <motion.div variants={fadeInUp}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={4}
                alignItems="center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <LocalShippingIcon
                    sx={{
                      fontSize: "6rem",
                      color: colors.primary,
                      opacity: 0.9,
                      display: { xs: "none", md: "block" },
                    }}
                  />
                </motion.div>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      mb: 3,
                      fontSize: { xs: "1.8rem", md: "2.2rem" },
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      lineHeight: 1.8,
                      color: theme.palette.text.secondary,
                    }}
                  >
                    At Hatly, we're transforming the shipping industry through innovation
                    and technology. Our mission is to make logistics simpler, faster, and
                    more efficient for everyone. We believe in creating solutions that
                    not only meet but exceed our customers' expectations.
                  </Typography>
                </Box>
              </Stack>
            </motion.div>
          </Box>

          {/* About Us Section with Enhanced Styling */}
          <Box sx={{ 
            mb: 8,
            background: `linear-gradient(135deg, ${alpha(colors.secondary, 0.05)}, ${alpha(colors.primary, 0.05)})`,
            borderRadius: "24px",
            p: 4,
            boxShadow: `0 8px 32px ${alpha(colors.secondary, 0.1)}`,
          }}>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h3"
                align="center"
                sx={{
                  fontWeight: 800,
                  mb: 6,
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                About Us
              </Typography>
            </motion.div>

            <Grid container spacing={4}>
              {[
                {
                  title: "Our Journey",
                  content: "We are a team of passionate developers who met at the Information Technology Institute (ITI) during an intensive code camp. Our shared passion for technology and innovation brought us together to create something meaningful.",
                },
                {
                  title: "The Project",
                  content: "Hatly is our graduation project, born from the desire to revolutionize the shipping and logistics industry. We combined our diverse skills in frontend development, mobile development, and UI/UX design to create a platform that makes shipping simpler, faster, and more efficient for everyone.",
                },
                {
                  title: "Our Vision",
                  content: "Through Hatly, we aim to transform the way people think about shipping and logistics. Our platform combines cutting-edge technology with user-friendly design to create a seamless experience for both businesses and individuals.",
                },
              ].map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Card sx={{ 
                      height: "100%",
                      p: 3,
                      background: `linear-gradient(135deg, ${alpha(colors.primary, 0.08)}, ${alpha(colors.secondary, 0.08)})`,
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${alpha(colors.primary, 0.15)}`,
                    }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          fontSize: "1.2rem",
                          color: colors.primary,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "1rem",
                          color: theme.palette.text.secondary,
                          lineHeight: 1.8,
                        }}
                      >
                        {item.content}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Stats Section with Enhanced Styling */}
          <Box sx={{ 
            mb: 8,
            background: `linear-gradient(135deg, ${alpha(colors.primary, 0.05)}, ${alpha(colors.secondary, 0.05)})`,
            borderRadius: "24px",
            p: 4,
            boxShadow: `0 8px 32px ${alpha(colors.primary, 0.1)}`,
          }}>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h3"
                align="center"
                sx={{
                  fontWeight: 800,
                  mb: 6,
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Achievements
              </Typography>
            </motion.div>

            <Grid container spacing={3} justifyContent="center">
              {[
                { number: "12+", label: "Team Members" },
                { number: "100+", label: "Projects Delivered" },
                { number: "5+", label: "Years Experience" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card sx={{ 
                      p: 3,
                      background: `linear-gradient(135deg, ${alpha(colors.primary, 0.08)}, ${alpha(colors.secondary, 0.08)})`,
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${alpha(colors.primary, 0.15)}`,
                    }}>
                      <Typography
                        variant="h2"
                        sx={{
                          fontWeight: 800,
                          mb: 2,
                          fontSize: { xs: "2rem", md: "2.5rem" },
                          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1rem",
                          color: theme.palette.text.secondary,
                          fontWeight: 500,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Values Section with Enhanced Styling */}
          <Box sx={{ 
            mb: 8,
            background: `linear-gradient(135deg, ${alpha(colors.secondary, 0.05)}, ${alpha(colors.primary, 0.05)})`,
            borderRadius: "24px",
            p: 4,
            boxShadow: `0 8px 32px ${alpha(colors.secondary, 0.1)}`,
          }}>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h3"
                align="center"
                sx={{
                  fontWeight: 800,
                  mb: 6,
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Values
              </Typography>
            </motion.div>

            <Grid container spacing={4}>
              {[
                {
                  icon: <SecurityIcon sx={{ fontSize: "3rem", color: colors.primary }} />,
                  title: "Integrity",
                  description: "We prioritize trust and transparency in all our relationships.",
                },
                {
                  icon: <GroupIcon sx={{ fontSize: "3rem", color: colors.primary }} />,
                  title: "Teamwork",
                  description: "Collaboration is at the core of everything we do.",
                },
                {
                  icon: <LightbulbIcon sx={{ fontSize: "3rem", color: colors.primary }} />,
                  title: "Innovation",
                  description: "We embrace new ideas and constantly push for improvement.",
                },
              ].map((value, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card sx={{ 
                      p: 3,
                      height: "100%",
                      background: `linear-gradient(135deg, ${alpha(colors.primary, 0.08)}, ${alpha(colors.secondary, 0.08)})`,
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${alpha(colors.primary, 0.15)}`,
                    }}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Box sx={{ mb: 3 }}>{value.icon}</Box>
                      </motion.div>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          fontSize: "1.2rem",
                          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "1rem",
                          color: theme.palette.text.secondary,
                          lineHeight: 1.8,
                        }}
                      >
                        {value.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Team Section - Moved to End */}
          <Box sx={{ 
            mb: 8,
            background: `linear-gradient(135deg, ${alpha(colors.primary, 0.05)}, ${alpha(colors.secondary, 0.05)})`,
            borderRadius: "24px",
            p: 4,
            boxShadow: `0 8px 32px ${alpha(colors.primary, 0.1)}`,
          }}>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h3"
                align="center"
                sx={{
                  fontWeight: 800,
                  mb: 6,
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Meet Our Team
              </Typography>
            </motion.div>

            <Box sx={{ 
              display: "flex", 
              flexDirection: "row", 
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap"
            }}>
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ flex: "0 0 auto" }}
                >
                  <Card sx={{ 
                    p: 2,
                    background: `linear-gradient(135deg, ${alpha(colors.primary, 0.08)}, ${alpha(colors.secondary, 0.08)})`,
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${alpha(colors.primary, 0.15)}`,
                  }}>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        mx: "auto",
                        mb: 2,
                        fontSize: "2rem",
                        fontWeight: 600,
                        background: `linear-gradient(135deg, ${member.avatarColor}, ${alpha(member.avatarColor, 0.7)})`,
                        boxShadow: `0 8px 32px ${alpha(member.avatarColor, 0.3)}`,
                      }}
                    >
                      {member.name.split(" ")[0][0]}
                      {member.name.split(" ")[1][0]}
                    </Avatar>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        fontSize: "1.1rem",
                        textAlign: "center",
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 2,
                        fontSize: "0.9rem",
                        color: colors.primary,
                        fontWeight: 500,
                        textAlign: "center",
                      }}
                    >
                      {member.role}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="center"
                    >
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener"
                        sx={{
                          color: colors.primary,
                          "&:hover": { color: colors.secondary },
                        }}
                      >
                        <LinkedInIcon />
                      </Link>
                      <Link
                        href={member.github}
                        target="_blank"
                        rel="noopener"
                        sx={{
                          color: colors.primary,
                          "&:hover": { color: colors.secondary },
                        }}
                      >
                        <GitHubIcon />
                      </Link>
                    </Stack>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
