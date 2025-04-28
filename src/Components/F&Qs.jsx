import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, keyframes, styled } from '@mui/material';

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
      mb: 4,
      fontWeight: 600,
      color: '#4141DA',
      fontSize: { xs: '1.5rem', md: '1.75rem' },
      overflow: 'hidden'
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

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{
      maxWidth: '800px',
      margin: '60px auto',
      padding: '0 16px',
      animation: `${fadeIn} 0.4s both`
    }}>
      {/* Animated Main Title */}
      <AnimatedTitle text="Frequently Asked Questions" />

      {/* Shoppers Section */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="subtitle1" sx={{
          mb: 2,
          color: '#4141DA',
          fontWeight: 700,
          fontSize: '1.1rem',
          display: 'flex',
          alignItems: 'center',
          '&:after': {
            content: '""',
            flex: 1,
            ml: 2,
            height: '1px',
            backgroundColor: 'rgba(65, 65, 218, 0.15)'
          }
        }}>
          Shoppers
        </Typography>

        <BeautifulAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <BeautifulAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#4141DA', fontSize: '1.25rem' }} />}>
            <Typography sx={{ fontWeight: 500, color: '#4141DA', fontSize: '0.95rem' }}>
              What payment methods do you accept?
            </Typography>
          </BeautifulAccordionSummary>
          <BeautifulAccordionDetails>
            <Typography sx={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6 }}>
              We accept Visa, MasterCard, American Express, PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are secured with 256-bit SSL encryption.
            </Typography>
          </BeautifulAccordionDetails>
        </BeautifulAccordion>

        <BeautifulAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <BeautifulAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#4141DA', fontSize: '1.25rem' }} />}>
            <Typography sx={{ fontWeight: 500, color: '#4141DA', fontSize: '0.95rem' }}>
              How long does shipping take?
            </Typography>
          </BeautifulAccordionSummary>
          <BeautifulAccordionDetails>
            <Typography sx={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Standard shipping takes 3-5 business days. Express shipping (2-day) and overnight options are available at checkout for an additional fee.
            </Typography>
          </BeautifulAccordionDetails>
        </BeautifulAccordion>

        <BeautifulAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <BeautifulAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#4141DA', fontSize: '1.25rem' }} />}>
            <Typography sx={{ fontWeight: 500, color: '#4141DA', fontSize: '0.95rem' }}>
              What is your return policy?
            </Typography>
          </BeautifulAccordionSummary>
          <BeautifulAccordionDetails>
            <Typography sx={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6 }}>
              We offer a 30-day return policy for most items. Items must be unused, in original packaging with tags attached. Some items like perishables or personalized products may be exempt.
            </Typography>
          </BeautifulAccordionDetails>
        </BeautifulAccordion>

        <BeautifulAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <BeautifulAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#4141DA', fontSize: '1.25rem' }} />}>
            <Typography sx={{ fontWeight: 500, color: '#4141DA', fontSize: '0.95rem' }}>
              Do you offer international shipping?
            </Typography>
          </BeautifulAccordionSummary>
          <BeautifulAccordionDetails>
            <Typography sx={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Yes, we ship to over 100 countries worldwide. International shipping rates and delivery times vary by destination. All customs fees and import taxes are the responsibility of the recipient.
            </Typography>
          </BeautifulAccordionDetails>
        </BeautifulAccordion>

        <BeautifulAccordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <BeautifulAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#4141DA', fontSize: '1.25rem' }} />}>
            <Typography sx={{ fontWeight: 500, color: '#4141DA', fontSize: '0.95rem' }}>
              How can I track my order?
            </Typography>
          </BeautifulAccordionSummary>
          <BeautifulAccordionDetails>
            <Typography sx={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Once your order ships, you'll receive a tracking number via email. You can track your package through our website or directly with the carrier using this number.
            </Typography>
          </BeautifulAccordionDetails>
        </BeautifulAccordion>
      </Box>

      {/* Travelers Section */}
      <Box>
        <Typography variant="subtitle1" sx={{
          mb: 2,
          color: '#4141DA',
          fontWeight: 700,
          fontSize: '1.1rem',
          display: 'flex',
          alignItems: 'center',
          '&:after': {
            content: '""',
            flex: 1,
            ml: 2,
            height: '1px',
            backgroundColor: 'rgba(65, 65, 218, 0.15)'
          }
        }}>
          Travellers
        </Typography>

        <BeautifulAccordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <BeautifulAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#4141DA', fontSize: '1.25rem' }} />}>
            <Typography sx={{ fontWeight: 500, color: '#4141DA', fontSize: '0.95rem' }}>
              What travel documents are required?
            </Typography>
          </BeautifulAccordionSummary>
          <BeautifulAccordionDetails>
            <Typography sx={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6 }}>
              You'll need a valid passport (with 6+ months validity beyond your stay) and possibly visas depending on your destination. We recommend checking entry requirements 90 days before travel.
            </Typography>
          </BeautifulAccordionDetails>
        </BeautifulAccordion>

        <BeautifulAccordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <BeautifulAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#4141DA', fontSize: '1.25rem' }} />}>
            <Typography sx={{ fontWeight: 500, color: '#4141DA', fontSize: '0.95rem' }}>
              Can I modify my booking after payment?
            </Typography>
          </BeautifulAccordionSummary>
          <BeautifulAccordionDetails>
            <Typography sx={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Modifications are possible up to 14 days before departure, subject to availability. Name changes may incur fees. For major changes, we recommend travel insurance.
            </Typography>
          </BeautifulAccordionDetails>
        </BeautifulAccordion>

        <BeautifulAccordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
          <BeautifulAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#4141DA', fontSize: '1.25rem' }} />}>
            <Typography sx={{ fontWeight: 500, color: '#4141DA', fontSize: '0.95rem' }}>
              What's included in the travel package?
            </Typography>
          </BeautifulAccordionSummary>
          <BeautifulAccordionDetails>
            <Typography sx={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Our packages typically include flights, accommodations, airport transfers, guided tours, and some meals. Each package details specific inclusions. Optional upgrades are available.
            </Typography>
          </BeautifulAccordionDetails>
        </BeautifulAccordion>

        <BeautifulAccordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
          <BeautifulAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#4141DA', fontSize: '1.25rem' }} />}>
            <Typography sx={{ fontWeight: 500, color: '#4141DA', fontSize: '0.95rem' }}>
              Do I need travel insurance?
            </Typography>
          </BeautifulAccordionSummary>
          <BeautifulAccordionDetails>
            <Typography sx={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6 }}>
              While not mandatory, we strongly recommend comprehensive travel insurance to cover trip cancellations, medical emergencies, lost luggage, and other unforeseen circumstances.
            </Typography>
          </BeautifulAccordionDetails>
        </BeautifulAccordion>

        <BeautifulAccordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
          <BeautifulAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#4141DA', fontSize: '1.25rem' }} />}>
            <Typography sx={{ fontWeight: 500, color: '#4141DA', fontSize: '0.95rem' }}>
              What health precautions should I take?
            </Typography>
          </BeautifulAccordionSummary>
          <BeautifulAccordionDetails>
            <Typography sx={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Check CDC recommendations for your destination. Some countries require specific vaccinations. Bring any prescription medications in original containers, plus a copy of your prescriptions.
            </Typography>
          </BeautifulAccordionDetails>
        </BeautifulAccordion>

        <BeautifulAccordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
          <BeautifulAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#4141DA', fontSize: '1.25rem' }} />}>
            <Typography sx={{ fontWeight: 500, color: '#4141DA', fontSize: '0.95rem' }}>
              How do I handle currency exchange?
            </Typography>
          </BeautifulAccordionSummary>
          <BeautifulAccordionDetails>
            <Typography sx={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6 }}>
              We recommend exchanging a small amount before departure and using ATMs at your destination for better rates. Notify your bank of travel plans to avoid card blocks. Many places accept credit cards.
            </Typography>
          </BeautifulAccordionDetails>
        </BeautifulAccordion>
      </Box>
    </Box>
  );
}