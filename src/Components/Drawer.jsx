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
import img from "../images/mainLogo.png"; 

import { useLocation, useNavigate } from 'react-router-dom'; // Import the useNavigate hook

export default function TemporaryDrawer() {
    const pages = [
      { name: "Home", path: "/" },
      
      { name: "About Us", path: "/about-us" },
      { name: "F&Qs", path: "/frequently-asked" },
      { name: "Contact Us", path: "/contact-us" },
     
    ];
      const location = useLocation();
      const path = location.pathname;

   const isSpecialPage =  path ===  "/frequently-asked" ;

    const [open, setOpen] = React.useState(false);
    const [isWhiteBackground, setIsWhiteBackground] = React.useState(false);
    const navigate = useNavigate(); // Declare the useNavigate hook

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Get the element at the current scroll position
            const element = document.elementFromPoint(window.innerWidth / 2, 50);
            if (element) {
                const computedStyle = window.getComputedStyle(element);
                const backgroundColor = computedStyle.backgroundColor;
                // Check if the background is white or light colored
                const isLightBackground = backgroundColor.includes('255, 255, 255') || 
                                        backgroundColor.includes('rgba(255, 255, 255') ||
                                        backgroundColor.includes('rgb(255, 255, 255');
                setIsWhiteBackground(isLightBackground);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const handleNavigation = (path) => {
      navigate(path); // Navigate to the selected path
      setOpen(false); // Close the drawer after navigating
    };

    const DrawerList = (
      <Box sx={{ width: 250, color: "#4141DA", fontWeight: "bold", fontSize: "25px", }} role="presentation" onClick={toggleDrawer(false)}>
       
        {/* List of Menu Items */}
        <List>
             <img
          src={img}
          width="100%"
          height="110"
          padding="0"
          alt="Logo"
          style={{
            position: 'relative',
            
          }}
        />
        <Box width="100%" height="1px" bgcolor="grey.300"  />

          {pages.map((page, index) => (
            <ListItem key={page.name} disablePadding>
              <ListItemButton
  onClick={() => handleNavigation(page.path)}
  sx={{
    paddingBlock: "12px",
    backgroundColor: "transparent",
    transition: 'all 0.5s ease',
    '&:hover': {
      backgroundColor: "#4141DA",
      '& .MuiListItemIcon-root': {
        color: 'white',
      },
      '& .MuiTypography-root': { // targets ListItemText
        color: 'white',
      },
    },
  }}
>
  <ListItemIcon sx={{ color: "black" }}>
    {index === 0 ? (
      <HomeIcon sx={{ fontSize: "23px" }} />
    ) : index === 1 ? (
      <HelpIcon sx={{ fontSize: "23px" }} />
    ) : index === 2 ? (
      <InfoIcon sx={{ fontSize: "23px" }} />
    ) : (
      <PhoneIcon sx={{ fontSize: "23px" }} />
    )}
  </ListItemIcon>

  <ListItemText 
    primary={page.name}
    primaryTypographyProps={{
      sx: { color: "black", fontSize: "18px" },
    }}
  />
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
            position: 'fixed', 
            top: 20,  
            left: 20, 
            padding: '10px',
            zIndex: 1000,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }
          }}
        >
          <MenuIcon sx={{ 
            color: isSpecialPage?'#4141DA':'white',
            fontSize: "35px"
          }} />
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

        {/* Logo at the top-right corner of the page
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
        /> */}

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
