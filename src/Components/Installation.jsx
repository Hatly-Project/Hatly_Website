import React from 'react';
import { Box, Button } from '@mui/material';
import AppStoreIcon from '@mui/icons-material/Apple';
import { FaGooglePlay } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AppStoreGooglePlayButtons() {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: '40px',
      }}
    >
      <Box 
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: '20px',
          flexWrap: 'wrap',
          maxWidth: '500px',
          width: '100%',
        }}
      >
        {/* App Store Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button
            variant="contained"
            sx={{
              flex: 1,
              minWidth: '220px',
              height: '60px',
              background: 'rgba(0, 0, 0, 0.3)',
              color: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
              fontSize: '16px',
              fontWeight: 'bold',
              textTransform: 'none',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                background: 'rgba(0, 0, 0, 0.5)',
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transform: 'translateY(-2px)',
              },
              '& svg': {
                marginRight: '10px',
                fontSize: '30px',
                transition: 'transform 0.3s ease',
              },
              '&:hover svg': {
                transform: 'scale(1.1)',
              }
            }}
            component={Link}
            to="#"
          >
            <AppStoreIcon />
            App Store
          </Button>
        </motion.div>

        {/* Google Play Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button
            variant="contained"
            sx={{
              flex: 1,
              minWidth: '220px',
              height: '60px',
              background: 'rgba(0, 0, 0, 0.3)',
              color: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
              fontSize: '16px',
              fontWeight: 'bold',
              textTransform: 'none',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                background: 'rgba(0, 0, 0, 0.5)',
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transform: 'translateY(-2px)',
              },
              '& svg': {
                marginRight: '10px',
                fontSize: '30px',
                transition: 'transform 0.3s ease',
              },
              '&:hover svg': {
                transform: 'scale(1.1)',
              }
            }}
            component={Link}
            to="#"
          >
            <FaGooglePlay />
            Google Play
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}