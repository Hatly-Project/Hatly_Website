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
  Divider,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Security as SecurityIcon,
  Group as GroupIcon,
  Lightbulb as LightbulbIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  LocalShipping as LocalShippingIcon,
  RocketLaunch as RocketIcon,
  TrendingUp as GrowthIcon,
  Code as CodeIcon,
} from "@mui/icons-material";
import { alpha } from "@mui/system";
import { styled } from "@mui/material/styles";

// Enhanced color palette
const colors = {
  primary: "#4361ee",
  secondary: "#3a0ca3",
  light: "#f8f9fa",
  dark: "#212529",
  accent: "#f72585",
  teal: "#4cc9f0",
  purple: "#7209b7",
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
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

const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const cascadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

// Team data
const teamMembers = [
  {
    name: "Ahmed Wael",
    role: "Software Developer",
    linkedin: "#",
    github: "#",
    avatarColor: "#4E79A7",
    icon: <CodeIcon />,
  },
  {
    name: "Alaa Hosny",
    role: "Software Developer",
    linkedin: "#",
    github: "#",
    avatarColor: "#F28E2B",
    icon: <CodeIcon />,
  },
  {
    name: "Asmaa Abdo",
    role: "Software Developer",
    linkedin: "#",
    github: "#",
    avatarColor: "#E15759",
    icon: <CodeIcon />,
  },
  {
    name: "Haneen Khaled",
    role: "Software Developer",
    linkedin: "#",
    github: "#",
    avatarColor: "#76B7B2",
    icon: <CodeIcon />,
  },
  {
    name: "Ismail Khaleel",
    role: "Software Developer",
    linkedin: "#",
    github: "#",
    avatarColor: "#59A14F",
    icon: <CodeIcon />,
  },
  {
    name: "Mohamed Ayman",
    role: "Software Developer",
    linkedin: "#",
    github: "#",
    avatarColor: "#EDC948",
    icon: <CodeIcon />,
  },
];

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${alpha(colors.primary, 0.6)}, ${alpha(
    colors.secondary,
    0.6
  )}), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat`,
  height: "100vh",
  minHeight: "600px",
  maxHeight: "1200px",
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
    background: `radial-gradient(circle at 75% 50%, ${alpha(
      colors.teal,
      0.15
    )} 0%, transparent 50%)`,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(circle at 25% 80%, ${alpha(
      colors.teal,
      0.15
    )} 0%, transparent 50%)`,
  },
}));

const GradientText = styled(Typography)({
  background: `linear-gradient(135deg, ${colors.teal}, ${colors.purple})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
});

const GlowCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "20px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  background: `linear-gradient(135deg, ${alpha(colors.light, 0.9)}, ${alpha(
    colors.light,
    0.95
  )})`,
  boxShadow: `0 8px 32px ${alpha(colors.dark, 0.1)}`,
  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  border: `1px solid ${alpha(colors.primary, 0.1)}`,
  overflow: "hidden",
  position: "relative",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `0 12px 40px ${alpha(colors.primary, 0.2)}`,
    "&::before": {
      opacity: 1,
    },
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${alpha(colors.primary, 0.03)}, ${alpha(
      colors.secondary,
      0.03
    )})`,
    opacity: 0,
    transition: "opacity 0.4s ease",
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
  background: `linear-gradient(135deg, ${alpha(colors.primary, 0.05)}, ${alpha(
    colors.secondary,
    0.05
  )})`,
  boxShadow: `0 5px 15px ${alpha(colors.dark, 0.05)}`,
  transition: "all 0.3s ease",
  border: `1px solid ${alpha(colors.primary, 0.1)}`,
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: `0 15px 30px ${alpha(colors.primary, 0.1)}`,
    border: `1px solid ${alpha(colors.primary, 0.2)}`,
  },
}));

const AnimatedDivider = styled(Divider)(({ theme }) => ({
  height: "4px",
  width: "80px",
  background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
  margin: theme.spacing(3),
  borderRadius: "2px",
}));

const AnimatedButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
  color: "white",
  fontWeight: 600,
  padding: theme.spacing(1.5, 4),
  borderRadius: "12px",
  boxShadow: `0 4px 20px ${alpha(colors.primary, 0.3)}`,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: `0 6px 24px ${alpha(colors.primary, 0.4)}`,
    background: `linear-gradient(135deg, ${colors.secondary}, ${colors.primary})`,
  },
}));

const TeamMemberCard = ({ member }) => {
  const theme = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      <GlowCard>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            mx: "auto",
            mb: 2,
            fontSize: "2rem",
            fontWeight: 600,
            background: `linear-gradient(135deg, ${member.avatarColor}, ${alpha(
              member.avatarColor,
              0.7
            )})`,
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
            fontSize: "1.2rem",
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          {member.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "0.95rem",
            color: colors.primary,
            fontWeight: 500,
            textAlign: "center",
            mb: 2,
          }}
        >
          {member.role}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={member.linkedin}
              target="_blank"
              rel="noopener"
              sx={{
                color: colors.primary,
                "&:hover": { color: colors.secondary },
              }}
            >
              <LinkedInIcon fontSize="medium" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={member.github}
              target="_blank"
              rel="noopener"
              sx={{
                color: colors.primary,
                "&:hover": { color: colors.secondary },
              }}
            >
              <GitHubIcon fontSize="medium" />
            </Link>
          </motion.div>
        </Stack>
      </GlowCard>
    </motion.div>
  );
};

const About = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Box sx={{ overflowX: "hidden" }}>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative", zIndex: 1 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                mb: 3,
                fontSize: { xs: "2.5rem", md: "4.5rem" },
                lineHeight: 1.2,
                background: 'white',
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 2px 10px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h5"
              component={motion.p}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              sx={{
                maxWidth: "800px",
                margin: "auto",
                fontSize: { xs: "1rem", md: "1.4rem" },
                color: "rgba(255,255,255,0.9)",
                fontWeight: 300,
                mb: 4,
                textAlign: "center",
                lineHeight:'40px',
             
               
                
              }}
            >
              At Hatly, we're transforming the shipping industry through innovation
              and technology. Our mission is to make logistics simpler, faster, and
              more efficient for everyone. We believe in creating solutions that
              not only meet but exceed our customers' expectations.
            </Typography>
          </motion.div>
        </Container>

        {/* Animated background elements */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 1 }}
          sx={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${colors.teal} 0%, transparent 70%)`,
            filter: "blur(20px)",
          }}
        />
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          sx={{
            position: "absolute",
            bottom: "15%",
            right: "15%",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${colors.purple} 0%, transparent 70%)`,
            filter: "blur(30px)",
          }}
        />
      </HeroSection>

      <Container maxWidth="xl" sx={{ py: 8, position: "relative" }}>
        {/* Background decorative elements */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "300px",
            height: "300px",
            background: `radial-gradient(circle, ${alpha(
              colors.teal,
              0.1
            )} 0%, transparent 70%)`,
            filter: "blur(40px)",
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "400px",
            height: "400px",
            background: `radial-gradient(circle, ${alpha(
              colors.purple,
              0.1
            )} 0%, transparent 70%)`,
            filter: "blur(50px)",
            zIndex: -1,
          }}
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {/* Our Story Section */}
          <Box sx={{ 
            mb: { xs: 8, md: 12 }, 
            position: "relative",
            px: { xs: 2, md: 8 },
            maxWidth: "1400px",
            mx: "auto"
          }}>
            <motion.div variants={fadeInUp}>
              <Stack
                direction={{ xs: "column", md: "row-reverse" }}
                spacing={{ xs: 4, md: 6 }}
                alignItems="center"
              >
                <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ flex: 1 }}
                >
                  <Box
                    sx={{
                      borderRadius: "24px",
                      overflow: "hidden",
                      boxShadow: `0 20px 40px ${alpha(colors.dark, 0.2)}`,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${alpha(
                          colors.primary,
                          0.2
                        )}, ${alpha(colors.secondary, 0.2)})`,
                      },
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                      alt="Male developers working together"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </Box>
                </motion.div>
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ flex: 1 }}
                >
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        mb: 3,
                        fontSize: { xs: "1.8rem", md: "2.5rem" },
                        lineHeight: 1.2,
                        color: theme.palette.text.primary,
                      }}
                    >
                      Our Story
                    </Typography>
                    <AnimatedDivider />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: theme.palette.text.secondary,
                        mb: 4,
                      }}
                    >
                      Hatly was born from a shared vision to revolutionize the shipping industry. Our journey began at the Information Technology Institute (ITI), where six passionate developers came together during an intensive code camp. United by our frustration with outdated logistics systems, we set out to build a platform that combines cutting-edge technology with human-centered design.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: theme.palette.text.secondary,
                      }}
                    >
                      What started as a graduation project quickly evolved into a mission to simplify shipping for businesses and individuals alike. Today, Hatly stands as a testament to innovation, collaboration, and the power of technology to transform traditional industries.
                    </Typography>
                  </Box>
                </motion.div>
              </Stack>
            </motion.div>
          </Box>

          {/* Stats Section with cascade effect */}
          <Box
            sx={{
              mb: { xs: 8, md: 12 },
              background: `linear-gradient(135deg, ${alpha(
                colors.primary,
                0.03
              )}, ${alpha(colors.secondary, 0.03)})`,
              borderRadius: "24px",
              p: { xs: 3, md: 6 },
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234361ee' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                opacity: 0.5,
              },
            }}
          >
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h3"
                align="center"
                sx={{
                  fontWeight: 800,
                  mb: 6,
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  color: theme.palette.text.primary,
                  position: "relative",
                  textAlign: "center",
                }}
              >
                By The Numbers
              </Typography>
            </motion.div>

            <Grid container spacing={4} justifyContent="center" alignItems="center">
              {[
                {
                  number: "10K+",
                  label: "Shipments Processed",
                  icon: <LocalShippingIcon sx={{ fontSize: "2.5rem" }} />,
                  color: colors.primary,
                },
                {
                  number: "98%",
                  label: "Customer Satisfaction",
                  icon: <GroupIcon sx={{ fontSize: "2.5rem" }} />,
                  color: colors.accent,
                },
                {
                  number: "24/7",
                  label: "Support Availability",
                  icon: <SecurityIcon sx={{ fontSize: "2.5rem" }} />,
                  color: colors.teal,
                },
                {
                  number: "5x",
                  label: "Faster Than Industry Avg",
                  icon: <RocketIcon sx={{ fontSize: "2.5rem" }} />,
                  color: colors.purple,
                },
              ].map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <motion.div
                    custom={index}
                    variants={cascadeVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    style={{ width: '100%', maxWidth: '300px' }}
                  >
                    <GlowCard sx={{ p: 3 }}>
                      <Box
                        sx={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: `linear-gradient(135deg, ${alpha(
                            stat.color,
                            0.1
                          )}, ${alpha(stat.color, 0.2)})`,
                          mb: 3,
                          color: stat.color,
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Typography
                        variant="h2"
                        sx={{
                          fontWeight: 400,
                          mb: 1,
                          fontSize: { xs: "1.4rem", md: "1.8rem" },
                          color: theme.palette.text.primary,
                          lineHeight: 1,
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "1rem",
                          color: theme.palette.text.secondary,
                          fontWeight: 500,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </GlowCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Values Section with cascade effect */}
          <Box
            sx={{
              mb: { xs: 8, md: 12 },
              position: "relative",
            }}
          >
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h3"
                align="center"
                sx={{
                  fontWeight: 800,
                  mb: 6,
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  color: theme.palette.text.primary,
                  textAlign: "center",
                }}
              >
                Our Core Values
              </Typography>
            </motion.div>

            <Grid container spacing={4} justifyContent="center" alignItems="center">
              {[
                {
                  icon: (
                    <SecurityIcon
                      sx={{ fontSize: "3rem", color: colors.primary }}
                    />
                  ),
                  title: "Integrity",
                  description:
                    "We believe in doing the right thing, even when no one is watching. Trust is the foundation of all our relationships.",
                  color: colors.primary,
                },
                {
                  icon: (
                    <GroupIcon sx={{ fontSize: "3rem", color: colors.accent }} />
                  ),
                  title: "Collaboration",
                  description:
                    "Great things are never done alone. We work together across disciplines to create exceptional solutions.",
                  color: colors.accent,
                },
                {
                  icon: (
                    <LightbulbIcon
                      sx={{ fontSize: "3rem", color: colors.teal }}
                    />
                  ),
                  title: "Innovation",
                  description:
                    "We challenge the status quo and push boundaries to create transformative logistics solutions.",
                  color: colors.teal,
                },
                {
                  icon: (
                    <GrowthIcon
                      sx={{ fontSize: "3rem", color: colors.purple }}
                    />
                  ),
                  title: "Growth",
                  description:
                    "We're committed to continuous learning and improvement, both as individuals and as a company.",
                  color: colors.purple,
                },
              ].map((value, index) => (
                <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <motion.div
                    custom={index}
                    variants={cascadeVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    style={{ width: '100%', maxWidth: '300px' }}
                  >
                    <GlowCard sx={{ p: 4, height: '100%' }}>
                      <motion.div
                        ref={ref}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                          },
                        }}
                      >
                        <Box
                          sx={{
                            mb: 3,
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {value.icon}
                        </Box>
                      </motion.div>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          fontSize: "1.3rem",
                          color: theme.palette.text.primary,
                          textAlign: "center",
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
                          textAlign: "center",
                        }}
                      >
                        {value.description}
                      </Typography>
                    </GlowCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Team Section */}
          <Box sx={{ mb: { xs: 8, md: 12 }, position: "relative" }}>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h3"
                align="center"
                sx={{
                  fontWeight: 800,
                  mb: 6,
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  color: theme.palette.text.primary,
                }}
              >
                Meet The Team
              </Typography>
            </motion.div>

            <Grid 
              container 
              spacing={4} 
              justifyContent="center" 
              alignItems="stretch"
              sx={{ maxWidth: "1400px", mx: "auto" }}
            >
              {/* First Row */}
              <Grid item xs={12} container spacing={4} justifyContent="center">
                {teamMembers.slice(0, 3).map((member, index) => (
                  <Grid item xs={12} sm={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: '100%', maxWidth: '320px' }}>
                      <motion.div
                        ref={ref}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                          },
                        }}
                      >
                        <TeamMemberCard member={member} />
                      </motion.div>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              {/* Second Row */}
              <Grid item xs={12} container spacing={4} justifyContent="center">
                {teamMembers.slice(3, 6).map((member, index) => (
                  <Grid item xs={12} sm={4} key={index + 3} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: '100%', maxWidth: '320px' }}>
                      <motion.div
                        ref={ref}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                          },
                        }}
                      >
                        <TeamMemberCard member={member} />
                      </motion.div>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;