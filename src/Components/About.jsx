import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Avatar,
  Link,
  useTheme,
  Stack
} from '@mui/material';
import { motion } from 'framer-motion';
import SecurityIcon from '@mui/icons-material/Security';
import GroupIcon from '@mui/icons-material/Group';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';

// Color palette
const colors = {
  primary: '#4141DA',
  secondary: '#6A5ACD',
  light: '#F8F9FF',
  dark: '#1A1A2E',
  accent: '#FF6B6B'
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Team data
const teamMembers = [
  {
    name: 'Ahmed Wael',
    role: 'Frontend Developer',
    linkedin: '#',
    github: '#',
    avatarColor: '#4E79A7'
  },
  {
    name: 'Alaa Hosny',
    role: 'Mobile Developer',
    linkedin: '#',
    github: '#',
    avatarColor: '#F28E2B'
  },
  {
    name: 'Asmaa Abdo',
    role: 'Frontend Developer',
    linkedin: '#',
    github: '#',
    avatarColor: '#E15759'
  },
  {
    name: 'Haneen Khaled',
    role: 'Frontend Developer',
    linkedin: '#',
    github: '#',
    avatarColor: '#76B7B2'
  },
  {
    name: 'Ismail Khaleel',
    role: 'Mobile Developer',
    linkedin: '#',
    github: '#',
    avatarColor: '#59A14F'
  },
  {
    name: 'Mohamed Ayman',
    role: 'Frontend Developer',
    linkedin: '#',
    github: '#',
    avatarColor: '#EDC948'
  }
];

// Styled components
const GradientPaper = styled(Paper)(({ theme }) => ({
  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
  color: theme.palette.common.white,
  borderRadius: '16px',
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 10px 20px rgba(65, 65, 218, 0.2)`,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 15px 30px rgba(65, 65, 218, 0.3)`
  }
}));

const ValueCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '16px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  background: theme.palette.background.paper,
  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.05)`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 15px 30px rgba(65, 65, 218, 0.1)`,
    borderBottom: `4px solid ${colors.primary}`
  }
}));

const GradientText = styled(Typography)({
  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block'
});

const About = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div variants={fadeInUp}>
            <GradientText
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
              }}
            >
              About Hatly
            </GradientText>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h6"
              sx={{
                maxWidth: '800px',
                margin: 'auto',
                color: theme.palette.text.secondary,
                lineHeight: 1.6
              }}
            >
              Hatly is your gateway to a smarter way of shipping. Shoppers post their delivery needs,
              while travelers earn rewards by accepting and transporting these shipments.
              With Hatly, enjoy secure, efficient, and mutually beneficial connections on every journey.
            </Typography>
          </motion.div>
        </Box>

        {/* Our Story */}
        <Box sx={{ my: 10 }}>
          <motion.div variants={fadeInUp}>
            <GradientPaper>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                Our Story
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: '800px', textAlign: 'center' }}>
                We met during the Intensive Code Camp at the Information Technology Institute (ITI),
                where we specialized in the Frontend and Cross-Platform Mobile Development track.
                Hatly is the result of our collaboration and creativity — a graduation project turned
                into a real-world solution.
              </Typography>
            </GradientPaper>
          </motion.div>
        </Box>

        {/* Core Values */}
        <Box sx={{ my: 10 }}>
          <motion.div variants={fadeInUp}>
            <GradientText
              variant="h4" // Changed from h3 to h4 for smaller size
              align="center"
              sx={{
                fontWeight: 800,
                mb: 6,
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                  borderRadius: '2px'
                }
              }}
            >
              Our Core Values
            </GradientText>
          </motion.div>

          <Grid container spacing={4} justifyContent="center">
            {[{
              icon: <SecurityIcon sx={{ fontSize: 40, color: '#fff' }} />,
              title: 'Security First',
              text: 'Every user undergoes rigorous verification. All shipments are tracked and insured. Your trust and safety are our top priorities.'
            },
            {
              icon: <GroupIcon sx={{ fontSize: 40, color: '#fff' }} />,
              title: 'Community Powered',
              text: 'We believe in the power of human connections. Our platform brings people together to help each other in meaningful ways.'
            },
            {
              icon: <LightbulbIcon sx={{ fontSize: 40, color: '#fff' }} />,
              title: 'Continuous Innovation',
              text: 'We\'re constantly improving our platform based on user feedback and the latest technology to serve you better.'
            }].map((value, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}> {/* Adjusted grid sizing */}
                <motion.div variants={fadeInUp}>
                  <ValueCard>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3
                      }}
                    >
                      {value.icon}
                    </Box>
                    <GradientText variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                      {value.title}
                    </GradientText>
                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                      {value.text}
                    </Typography>
                  </ValueCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team Section */}
        <Box sx={{ my: 10 }}>
          <motion.div variants={fadeInUp}>
            <GradientText
              variant="h4" // Changed from h3 to h4 for smaller size
              align="center"
              sx={{
                fontWeight: 800,
                mb: 6,
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                  borderRadius: '2px'
                }
              }}
            >
              Meet the Team
            </GradientText>
          </motion.div>

          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}> {/* Adjusted grid sizing */}
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: '16px',
                      textAlign: 'center',
                      height: '100%',
                      background: theme.palette.background.paper,
                      boxShadow: `0 5px 15px rgba(0, 0, 0, 0.05)`,
                      border: `1px solid ${theme.palette.divider}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: `0 15px 30px rgba(65, 65, 218, 0.1)`
                      }
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 100,
                        height: 100,
                        mx: 'auto',
                        mb: 3,
                        fontSize: '2.5rem',
                        fontWeight: 600,
                        bgcolor: member.avatarColor,
                        color: '#fff'
                      }}
                    >
                      {member.name.split(' ')[0][0]}
                      {member.name.split(' ')[1][0]}
                    </Avatar>
                    <GradientText variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                      {member.name}
                    </GradientText>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        color: colors.primary,
                        fontWeight: 500
                      }}
                    >
                      {member.role}
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent="center">
                      <Link href={member.linkedin} target="_blank" rel="noopener" color="inherit">
                        <LinkedInIcon />
                      </Link>
                      <Link href={member.github} target="_blank" rel="noopener" color="inherit">
                        <GitHubIcon />
                      </Link>
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>
    </Container>
  );
};

export default About;
