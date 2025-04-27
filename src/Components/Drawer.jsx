import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';
import img from "../images/logo RGB-09 (1).png"; 
import img2 from "../images/Capture.png"; 
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

export default function TemporaryDrawer() {
    const pages = [
      { name: "Home", path: "/" },
      { name: "F&Qs", path: "/faqs" },
      { name: "About Us", path: "/about-us" },
      { name: "Contact Us", path: "/contact-us" }
    ];

    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate(); // Declare the useNavigate hook

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const handleNavigation = (path) => {
      navigate(path); // Navigate to the selected path
      setOpen(false); // Close the drawer after navigating
    };

    const DrawerList = (
      <Box sx={{ width: 210, color: "#4141DA", fontWeight: "bold", fontSize: "25px" }} role="presentation" onClick={toggleDrawer(false)}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
          {/* Logo positioned at the top-right corner */}
          <img src={img} width={"220"} height={"180"} alt="Logo" style={{ position: 'absolute', top: '20px', right: '20px' }} />
        </Box>

        {/* List of Menu Items */}
        <List>
             <img
          src={img2}
          width="200"
          height="200"
          alt="Logo"
          style={{
            position: 'relative',
            
          }}
        />
          {pages.map((page, index) => (
            <ListItem key={page.name} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(page.path)} // Navigate based on path
                sx={{
                  '&:hover': {
                    backgroundColor: '#f1f1f1', // Change background color on hover
                    transform: 'scale(1.05)', // Slightly scale the item on hover
                    transition: 'transform 0.2s ease-in-out', // Smooth transition for the scaling effect
                  },
                }}
              >
                <ListItemIcon>
                  {index === 0 ? <HomeIcon sx={{ color: "grey", fontSize: "23px" }} /> :
                   index === 1 ? <HelpIcon sx={{ color: "grey", fontSize: "23px" }} /> :
                   index === 2 ? <InfoIcon sx={{ color: "grey", fontSize: "23px" }} /> :
                   <PhoneIcon sx={{ color: "grey", fontSize: "23px" }} />}
                </ListItemIcon>
                <ListItemText primary={page.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    return (
      <div>
        {/* Menu Icon Button */}
        <IconButton
          onClick={toggleDrawer(true)}
          sx={{
            position: 'absolute', 
            top: 20,  
            left: 20, 
            padding: '10px',
            zIndex: 1000, 
          }}
        >
          <MenuIcon sx={{ color: '#fff', fontSize: "35px" }} />
        </IconButton>

        {/* Drawer component */}
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          sx={{
            '.MuiDrawer-paper': {
              animation: 'fadeSlideIn 0.5s ease-out', 
            }
          }}
        >
          {DrawerList}
        </Drawer>

        {/* Logo at the top-right corner of the page */}
        <img
          src={img}
          width="200"
          height="200"
          alt="Logo"
          style={{
            position: 'absolute',
            // top: '10px',
            right: '20px',
            zIndex: 1001, // Ensure the logo is on top of everything else
          }}
        />

        {/* CSS for animation */}
        <style>
          {`
            @keyframes fadeSlideIn {
              from {
                transform: translateX(-100%); /* Start off the screen to the left */
                opacity: 0; /* Start as invisible */
              }
              to {
                transform: translateX(0); /* Move into its original position */
                opacity: 1; /* Fade in */
              }
            }
          `}
        </style>
      </div>
    );
}
