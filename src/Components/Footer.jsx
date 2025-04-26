import React from "react";
import { Box, Container, Grid, Typography, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(1, 33, 50)",
        color: "white",
        py: { xs: 5, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", sm: "row" }}
        >
          {/* Brand Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              fontWeight="bold"
              gutterBottom
              fontFamily="monospace"
              fontSize={{ xs: 22, sm: 26 }}
            >
             HATLY
            </Typography>
            <Typography
              variant="body2"
              color="gray"
              fontSize={{ xs: 13, sm: 14 }}
              maxWidth={300}
            >
              From here to here , We make it Clear.
            </Typography>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ xs: "center", sm: "flex-start" }}
              textAlign={{ xs: "center", sm: "left" }}
            >
              <Typography fontWeight="bold" gutterBottom>
                Follow Us
              </Typography>
              <Stack direction="row" spacing={2}>
                <IconButton
                  color="inherit"
                  href="https://web.facebook.com/profile.php?id=61561175183049"
                  target="_blank"
                >
                  <FacebookIcon />
                </IconButton>
               
                
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Copyright */}
        <Box
          textAlign="center"
          borderTop="1px solid rgba(255,255,255,0.1)"
          mt={5}
          pt={3}
        >
          <Typography
            variant="body2"
            color="gray"
            fontSize={{ xs: 12, sm: 14 }}
          >
            &copy; {new Date().getFullYear()} Hatly. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
