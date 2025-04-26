import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const stats = [
  { number: '7k+', text: 'Trusted, satisfied customers.' },
  { number: '8+', text: 'Expertise driving business success.' },
  { number: '24/7', text: 'Support available to assist you.' },
 
];

const StatsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4 },
        backgroundColor: 'transparent',
      }}
    >
      <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ height: '100%' }}
            >
              <Paper
                elevation={6}
                sx={{
                  p: { xs: 3, md: 4 },
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  color: 'white',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    background: 'linear-gradient(135deg,rgb(125, 120, 139) 30%,rgb(156, 148, 148) 90%)',
                    boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ mb: 1, fontSize: { xs: '2rem', md: '2.5rem' } }}
                >
                  {item.number}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.125rem' } }}>
                  {item.text}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
