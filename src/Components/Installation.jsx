import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import AppStoreIcon from '@mui/icons-material/Apple'; // App Store Icon
import GooglePlayIcon from '@mui/icons-material/Android'; // Google Play Icon
import { Link } from 'react-router-dom'; 
import { FaGooglePlay } from "react-icons/fa";// For routing if needed

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
            minWidth: '220px',
            height: '60px',
            background: 'linear-gradient(135deg, rgba(41, 41, 42, 0.7) 0%, rgba(66, 66, 73, 0.7) 100%)',
            color: '#fff',
            borderRadius: '12px',
            boxShadow: '0px 8px 20px rgba(0,0,0,0.25), 0px 4px 10px rgba(0,0,0,0.15)',
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'none',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            '&:hover': {
              background: 'linear-gradient(135deg, rgba(51, 51, 204, 0.8) 0%, rgba(90, 90, 201, 0.8) 100%)',
              boxShadow: '0px 10px 25px rgba(0,0,0,0.3), 0px 5px 15px rgba(0,0,0,0.2)',
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
            minWidth: '220px',
            height: '60px',
            background: 'linear-gradient(135deg, rgba(41, 41, 42, 0.7) 0%, rgba(66, 66, 73, 0.7) 100%)',
            color: '#fff',
            borderRadius: '12px',
            boxShadow: '0px 8px 20px rgba(0,0,0,0.25), 0px 4px 10px rgba(0,0,0,0.15)',
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'none',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            '&:hover': {
              background: 'linear-gradient(135deg, rgba(51, 51, 204, 0.8) 0%, rgba(90, 90, 201, 0.8) 100%)',
              boxShadow: '0px 10px 25px rgba(0,0,0,0.3), 0px 5px 15px rgba(0,0,0,0.2)',
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
          <FaGooglePlay/>
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
