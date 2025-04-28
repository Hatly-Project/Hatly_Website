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
        alignItems: 'flex-start', // <<< align left if you want
        marginTop: '40px',
        animation: 'fadeIn 1s ease-in-out',
      }}
    >
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          flexWrap: 'wrap',
          maxWidth: '500px', // <<< Wider container
          width: '100%',
        }}
      >
        {/* App Store Button */}
        <Button
          variant="contained"
          sx={{
            flex: 1,
            minWidth: '220px', // <<< Bigger minimum width
            height: '60px', // <<< Taller buttons
            backgroundColor: '#8181E5',
            color: '#fff',
            borderRadius: '12px',
            boxShadow: '0px 6px 15px rgba(0,0,0,0.25)',
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#3333cc',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease',
            },
            '& svg': {
              marginRight: '10px',
              fontSize: '30px',
            }
          }}
          component={Link}
          to="#"
        >
          <AppStoreIcon />
          App Store
        </Button>

        {/* Google Play Button */}
        <Button
          variant="contained"
          sx={{
            flex: 1,
            minWidth: '220px', // <<< Bigger minimum width
            height: '60px', // <<< Taller buttons
            backgroundColor: '#8181E5',
            color: '#fff',
            borderRadius: '12px',
            boxShadow: '0px 6px 15px rgba(0,0,0,0.25)',
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#3333cc',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease',
            },
            '& svg': {
              marginRight: '10px',
              fontSize: '30px',
            }
          }}
          component={Link}
          to="#"
        >
          <GooglePlayIcon />
          Google Play
        </Button>
      </Box>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
}
