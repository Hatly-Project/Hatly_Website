import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles'; // Add this import
import { motion } from 'framer-motion';
import deliver from "../images/delivering.png";
import connect from "../images/connecting.png";
import create from "../images/Create Account (5).png";
import { Slide, Fade } from "react-awesome-reveal";

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#4141DA',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  position: 'relative',
  textAlign: 'center',
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

export default function MediaCard() {
  return (
    <div style={{ textAlign: "center", paddingBlock: "70px", background: "#f5f5f5" }}>
      <Fade>
        <Box textAlign="center" mb={6}>
          <SectionTitle variant="h4" component="h2">
            How Hatly Works
          </SectionTitle>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', maxWidth: '700px', margin: '0 auto' }}>
            Three simple steps to get your items delivered through  trusted travellers.
          </Typography>
        </Box>
      </Fade>
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 6 },
          justifyContent: 'center',
          alignItems: 'center',
        }}
        p={4}
      >
        {/* Order Card */}
        <Slide direction="left" cascade>
          <Card
            sx={{
              maxWidth: 345,
              width: { xs: '100%', sm: 300, md: 345 },
              boxShadow: 3,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
              }
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: 250,
                width: '100%',
                objectFit: 'cover',
                borderRadius: '8px 8px 0 0',
                transition: 'transform 0.3s ease',
              }}
              image={create}
              title="Create"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#4141DA', fontWeight: 'bold' }}>
              Post Your Request
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Simply describe what you need shipped, where it's going, and when you need it there. Our intuitive platform makes it easy to create your shipping request in minutes.
              </Typography>
            </CardContent>
          </Card>
        </Slide>

        {/* Connect Card */}
        <Card
          sx={{
            maxWidth: 345,
            width: { xs: '100%', sm: 300, md: 345 },
            boxShadow: 3,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            marginBottom: { xs: '40px', md: '120px' },
            '&:hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
            }
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: 250,
              width: '100%',
              objectFit: 'cover',
              borderRadius: '8px 8px 0 0',
              transition: 'transform 0.3s ease',
            }}
            image={connect}
            title="Connect"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#4141DA', fontWeight: 'bold' }}>
            Match With Travelers
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Our smart matching system connects you with verified travelers heading to your destination. You'll see profiles, ratings, and estimated delivery times.
            </Typography>
          </CardContent>
        </Card>

        {/* Deliver Card */}
        <Slide direction="right" cascade>
          <Card
            sx={{
              maxWidth: 345,
              width: { xs: '100%', sm: 300, md: 345 },
              boxShadow: 3,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
              }
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: 250,
                width: '100%',
                objectFit: 'cover',
                borderRadius: '8px 8px 0 0',
                transition: 'transform 0.3s ease',
              }}
              image={deliver}
              title="Deliver"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#4141DA', fontWeight: 'bold' }}>
                Deliver
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Receive your product safely and quickly, hand-delivered by a trusted traveler. Hatly makes global shopping easy, personal, and secure.
              </Typography>
            </CardContent>
          </Card>
        </Slide>
      </Box>
    </div>
  );
}