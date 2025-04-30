import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, keyframes, styled, Tabs, Tab, AppBar, Button } from '@mui/material';
import logo from '../images/question.png';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const letterStagger = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Styled Components
const BeautifulAccordion = styled(Accordion)({
  borderRadius: '8px !important',
  marginBottom: '12px',
  transition: 'all 0.25s ease',
  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
  border: '1px solid rgba(65, 65, 218, 0.1)',
  '&:before': { display: 'none' },
  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 12px rgba(65, 65, 218, 0.12)'
  },
  '&.Mui-expanded': {
    margin: '12px 0',
    boxShadow: '0 4px 12px rgba(65, 65, 218, 0.15)'
  }
});

const BeautifulAccordionSummary = styled(AccordionSummary)({
  padding: '12px 20px',
  minHeight: '56px !important',
  '&:hover': { backgroundColor: 'rgba(65, 65, 218, 0.03)' },
  '&.Mui-expanded': {
    backgroundColor: 'rgba(65, 65, 218, 0.03)',
    borderBottom: '1px solid rgba(65, 65, 218, 0.08)'
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    transition: 'transform 0.25s ease',
    '&.Mui-expanded': { transform: 'rotate(180deg)' }
  }
});

const BeautifulAccordionDetails = styled(AccordionDetails)({
  padding: '16px 20px 24px'
});

// Animated Title Component
const AnimatedTitle = ({ text }) => {
  const letters = text.split('');
  
  return (
    <Typography variant="h4" sx={{
      textAlign: 'center',
      mb: 6,
      fontWeight: 600,
      color: '#4141DA',
      fontSize: { xs: '1.3rem', md: '1.5rem' },
      overflow: 'hidden',
      width: '100%'
    }}>
      {letters.map((letter, index) => (
        <span 
          key={index}
          style={{
            display: 'inline-block',
            animation: `${letterStagger} 0.4s both`,
            animationDelay: `${index * 0.05}s`,
            transformOrigin: 'bottom'
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </Typography>
  );
};

export default function FrequentlyAsked() {
  const [expanded, setExpanded] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState(0);
  const [showAllShoppers, setShowAllShoppers] = React.useState(false);
  const [showAllTravelers, setShowAllTravelers] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const toggleShoppers = () => {
    setShowAllShoppers(!showAllShoppers);
  };

  const toggleTravelers = () => {
    setShowAllTravelers(!showAllTravelers);
  };

  const shoppersQuestions = [
    {
      id: 'panel1',
      question: 'What payment methods do you accept?',
      answer: 'We accept Visa, MasterCard, American Express, PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are secured with 256-bit SSL encryption.'
    },
    {
      id: 'panel2',
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days. Express shipping (2-day) and overnight options are available at checkout for an additional fee.'
    },
    {
      id: 'panel3',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Items must be unused, in original packaging with tags attached. Some items like perishables or personalized products may be exempt.'
    },
    {
      id: 'panel4',
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to over 100 countries worldwide. International shipping rates and delivery times vary by destination. All customs fees and import taxes are the responsibility of the recipient.'
    },
    {
      id: 'panel5',
      question: 'How can I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can track your package through our website or directly with the carrier using this number.'
    }
  ];

  const travelersQuestions = [
    {
      id: 'panel6',
      question: 'What travel documents are required?',
      answer: 'You\'ll need a valid passport (with 6+ months validity beyond your stay) and possibly visas depending on your destination. We recommend checking entry requirements 90 days before travel.'
    },
    {
      id: 'panel7',
      question: 'Can I modify my booking after payment?',
      answer: 'Modifications are possible up to 14 days before departure, subject to availability. Name changes may incur fees. For major changes, we recommend travel insurance.'
    },
    {
      id: 'panel8',
      question: 'What\'s included in the travel package?',
      answer: 'Our packages typically include flights, accommodations, airport transfers, guided tours, and some meals. Each package details specific inclusions. Optional upgrades are available.'
    },
    {
      id: 'panel9',
      question: 'Do I need travel insurance?',
      answer: 'While not mandatory, we strongly recommend comprehensive travel insurance to cover trip cancellations, medical emergencies, lost luggage, and other unforeseen circumstances.'
    },
    {
      id: 'panel10',
      question: 'What health precautions should I take?',
      answer: 'Check CDC recommendations for your destination. Some countries require specific vaccinations. Bring any prescription medications in original containers, plus a copy of your prescriptions.'
    },
    {
      id: 'panel11',
      question: 'How do I handle currency exchange?',
      answer: 'We recommend exchanging a small amount before departure and using ATMs at your destination for better rates. Notify your bank of travel plans to avoid card blocks. Many places accept credit cards.'
    }
  ];

  return (
    <Box sx={{
      maxWidth: '1200px',
      margin: '60px auto',
      padding: { xs: '0 16px', md: '0 24px' },
      animation: `${fadeIn} 0.4s both`,
      display: 'flex',
      flexDirection: 'column',
      gap: '70px'
    }}>
      {/* Title */}
      <Box sx={{ width: '100%' }}>
        <AnimatedTitle text="Frequently Asked Questions" />
      </Box>

      {/* Content Container */}
      <Box sx={{ 
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '50px',
        alignItems: 'flex-start'
      }}>
        {/* Left Column */}
        <Box sx={{ 
          flex: 1,
          maxWidth: { xs: '100%', md: '600px' },
          width: '100%'
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                sx={{
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#4141DA',
                  },
                  '& .MuiTab-root': {
                    color: '#000000',
                    fontWeight: 600,
                    '&.Mui-selected': {
                      color: '#000000',
                    },
                    mx: { xs: 3, sm: 6, md: 12 },
                  },
                }}
              >
                <Tab label="Shoppers" />
                <Tab label="Travelers" />
              </Tabs>
            </AppBar>
          </Box>

          {/* Shoppers Accordion */}
          {activeTab === 0 && (
            <Box sx={{ mb: 5 }}>
              {(showAllShoppers ? shoppersQuestions : shoppersQuestions.slice(0, 4)).map((item) => (
                <BeautifulAccordion 
                  key={item.id} 
                  expanded={expanded === item.id} 
                  onChange={handleChange(item.id)}
                >
                  <BeautifulAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#4141DA', fontSize: '1.25rem' }} />}>
                    <Typography sx={{ fontWeight: 500, color: '#4141DA', fontSize: '0.95rem' }}>
                      {item.question}
                    </Typography>
                  </BeautifulAccordionSummary>
                  <BeautifulAccordionDetails>
                    <Typography sx={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {item.answer}
                    </Typography>
                  </BeautifulAccordionDetails>
                </BeautifulAccordion>
              ))}
              {shoppersQuestions.length > 4 && (
                <Button 
                  variant="outlined" 
                  onClick={toggleShoppers}
                  sx={{
                    mt: 2,
                    backgroundColor: '#4141DA',
                    borderColor: '#4141DA',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#5c5ce6',
                      borderColor: '#4141DA',
                      color: 'white',
                    }
                  }}
                >
                  {showAllShoppers ? 'Show Less' : 'Show More'}
                </Button>
              )}
            </Box>
          )}

          {/* Travelers Accordion */}
          {activeTab === 1 && (
            <Box>
              {(showAllTravelers ? travelersQuestions : travelersQuestions.slice(0, 4)).map((item) => (
                <BeautifulAccordion 
                  key={item.id} 
                  expanded={expanded === item.id} 
                  onChange={handleChange(item.id)}
                >
                  <BeautifulAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#4141DA', fontSize: '1.25rem' }} />}>
                    <Typography sx={{ fontWeight: 500, color: '#4141DA', fontSize: '0.95rem' }}>
                      {item.question}
                    </Typography>
                  </BeautifulAccordionSummary>
                  <BeautifulAccordionDetails>
                    <Typography sx={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {item.answer}
                    </Typography>
                  </BeautifulAccordionDetails>
                </BeautifulAccordion>
              ))}
              {travelersQuestions.length > 4 && (
                <Button 
                  variant="outlined" 
                  onClick={toggleTravelers}
                  sx={{
                    mt: 2,
                    backgroundColor: '#4141DA',
                    borderColor: '#4141DA',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#5c5ce6',
                      borderColor: '#4141DA',
                      color: 'white',
                    }
                  }}
                >
                  {showAllTravelers ? 'Show Less' : 'Show More'}
                </Button>
              )}
            </Box>
          )}
        </Box>

        {/* Right Column - Logo */}
       <Box sx={{ 
  display: { xs: 'none', md: 'flex' }, // Hidden on xs, visible on md+
  alignItems: 'center',
  justifyContent: 'center',
  width: { xs: '100%', md: '400px' },
  height: 'fit-content',
  alignSelf: { xs: 'center', md: 'flex-start' },
  mt: { xs: 4, md: 0 },
  animation: 'float 3s ease-in-out infinite'
}}>
  <img 
    src={logo} 
    alt="Logo" 
    style={{ 
      height: 'auto',
      maxHeight: '300px',
      width: 'auto',
      marginTop: '20px',
      transform: 'rotate(-10deg)'
    }} 
  />
</Box>

      </Box>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
}
