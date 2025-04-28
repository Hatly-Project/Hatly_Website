import React from 'react';
import { Grid, Typography, Container, useTheme, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import { Slide, Fade, Zoom } from "react-awesome-reveal";

import shipping from "../images/affordableshipping.png";
import money from "../images/earn money.png";
import eco from "../images/eco.png";

const FeatureCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  borderRadius: '16px',
  background: 'white',
  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(31, 38, 135, 0.15)'
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
  }
}));

const FeatureImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '350px',
  height: 'auto',
  objectFit: 'contain',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    height: '250px',
    '&:hover': {
      transform: 'scale(1.03)'
    }
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '3px',
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: '3px'
  }
}));

const InfoBadge = styled(Box)(({ theme, gradientcolors }) => ({
  background: gradientcolors 
    ? `linear-gradient(135deg, ${gradientcolors.start || '#f6f7ff'}, ${gradientcolors.end || '#e0e1ff'})`
    : 'linear-gradient(135deg, #f6f7ff, #e0e1ff)',
  borderRadius: '12px',
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
  width: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)'
  }
}));

function PlatformFeatures() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      title: "Affordable Shipping",
      description: "By using travelers as couriers, Hatly provides a cheaper alternative to traditional international shipping companies.",
      image: shipping,
      direction: "left",
      info: {
        title: "Cost Savings",
        items: [
          "Traditional shipping: $50-$100",
          "Hatly shipping: $20-$40",
          "Save up to 60% on costs"
        ],
        gradient: { start: '#f3f4ff', end: '#d9dbff' }
      }
    },
    {
      title: "Earn While You Travel",
      description: "Travelers can earn money effortlessly without much extra effort, making it an attractive option for people already planning trips.",
      image: money,
      direction: "right",
      info: {
        title: "Earning Potential",
        items: [
          "Average earnings per trip:",
          "$50 - $200",
          "Flexible package sizes"
        ],
        gradient: { start: '#fff4f4', end: '#ffdfdf' }
      }
    },
    {
      title: "Eco-Friendly",
      description: "Since travelers are already going to their destinations, we reduce environmental impact compared to traditional shipping methods.",
      image: eco,
      direction: "left",
      info: {
        title: "Environmental Impact",
        items: [
          "Reduces carbon emissions by:",
          "70-80%",
          "Compared to air freight"
        ],
        gradient: { start: '#f0fff4', end: '#d0ffdf' }
      }
    }
  ];

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #f9f9ff 0%, #ffffff 100%)',
      py: { xs: 5, md: 8 }
    }}>
      <Container maxWidth="lg" sx={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Fade>
          <Box textAlign="center" mb={6}>
            <SectionTitle variant="h4" component="h2">
              Why We're Different
            </SectionTitle>
            <Typography variant="subtitle1" color="textSecondary" maxWidth="700px" margin="0 auto" mt={3}>
              Discover what makes Hatly unique
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Slide 
                direction="right" cascade
              >
                <FeatureCard>
                  <Zoom>
                    <FeatureImage src={feature.image} alt={feature.title} />
                  </Zoom>
                  <Box textAlign="center" width="100%">
                    <Fade direction="up">
                      <Typography variant="h5" component="h3" gutterBottom sx={{ 
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        mb: 3
                      }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="textSecondary" sx={{ 
                        lineHeight: 1.7,
                        mb: 3
                      }}>
                        {feature.description}
                      </Typography>
                    </Fade>

                    <Slide direction="right" cascade>
                      <InfoBadge gradientcolors={feature.info.gradient}>
                        <Typography variant="subtitle1" component="h4" gutterBottom sx={{ 
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                          mb: 2
                        }}>
                          {feature.info.title}
                        </Typography>
                        <Box sx={{ 
                          '& > div': {
                            mb: 1.5,
                            fontSize: '0.95rem',
                            color: theme.palette.text.secondary
                          },
                          '& > div:nth-of-type(2)': {
                            fontWeight: 600,
                            color: theme.palette.primary.dark,
                            fontSize: '1.1rem'
                          }
                        }}>
                          {feature.info.items.map((item, i) => (
                            <div key={i}>{item}</div>
                          ))}
                        </Box>
                      </InfoBadge>
                    </Slide>
                  </Box>
                </FeatureCard>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default PlatformFeatures;