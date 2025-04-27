import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import AppStoreIcon from '@mui/icons-material/Apple'; // App Store Icon
import GooglePlayIcon from '@mui/icons-material/Android'; // Google Play Icon
import { Link } from 'react-router-dom'; // For routing if needed

export default function AppStoreGooglePlayButtons() {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px',
        textAlign: 'center',
        animation: 'fadeIn 1s ease-in-out', // Fade in animation for the component
      }}
    >
      

      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%', // Set width of the box to 100%
          maxWidth: '400px', // Optional: to limit maximum width
        }}
      >
        {/* App Store Button */}
        <Button
          variant="outlined" // Make the button transparent
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent', // Transparent background
            color: '#fff', // White text and icon color
            border: 'none', // Remove border
            borderRadius: '10px',
            padding: '10px 0',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
            width: '100%', // Ensure both buttons are the same width
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slight dark background on hover
              transform: 'scale(1.05)', // Slight scaling effect on hover
              transition: 'transform 0.3s ease, background-color 0.3s ease', // Smooth transition
            },
            '& svg': {
              marginRight: '10px',
              fontSize: '30px',
            }
          }}
          component={Link} // Optional if you want the button to be a link
          to="#"
        >
          <AppStoreIcon sx={{ color: '#fff' }} />
          <Typography variant="body1" sx={{ color: '#fff' }}>
            App Store
          </Typography>
        </Button>

        {/* Google Play Button */}
        <Button
          variant="outlined" // Make the button transparent
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent', // Transparent background
            color: '#fff', // White text and icon color
            border: 'none', // Remove border
            borderRadius: '10px',
            padding: '10px 0',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
            width: '100%', // Ensure both buttons are the same width
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slight dark background on hover
              transform: 'scale(1.05)', // Slight scaling effect on hover
              transition: 'transform 0.3s ease, background-color 0.3s ease', // Smooth transition
            },
            '& svg': {
              marginRight: '10px',
              fontSize: '30px',
            }
          }}
          component={Link} // Optional if you want the button to be a link
          to="#"
        >
          <GooglePlayIcon sx={{ color: '#fff' }} />
          <Typography variant="body1" sx={{ color: '#fff' }}>
            Google Play
          </Typography>
        </Button>
      </Box>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </Box>
  );
}
