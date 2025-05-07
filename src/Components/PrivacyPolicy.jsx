import React from 'react';
import { Box, Container, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';

function PrivacyPolicy() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'white',
        py: 8,
      }}
    >
      <Container sx={{ pl: { xs: 2, md: 4 }, pr: { xs: 2, md: 4 } }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            mb: 3,
            color: '#4f46e5',
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '2.75rem' },
            letterSpacing: '-0.5px',
            background: 'linear-gradient(90deg, #4f46e5, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Hatly Privacy Policy
        </Typography>

        

        <Divider sx={{ mb: 4, borderColor: '#e2e8f0' }} />

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: '#475569',
            lineHeight: 1.8,
            fontSize: '1.05rem',
          }}
        >
          Hatly ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile app or website ("Platform").
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: '#475569',
            lineHeight: 1.8,
            fontSize: '1.05rem',
          }}
        >
          By using Hatly, you agree to the practices described in this Privacy Policy.
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            1. Information We Collect
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            a. Personal Information
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            We may collect the following personal information from you:
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Full name" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Email address" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Phone number" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Country and location" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Profile photo" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Payment information (processed securely by Stripe)" sx={{ m: 0 }} />
            </ListItem>
          </List>

          <Typography variant="body1" sx={{ mb: 2, mt: 2, color: '#475569', lineHeight: 1.7 }}>
            b. Verification Data (Travelers Only)
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            To verify travelers and ensure platform safety, we collect:
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Passport Photo – used to verify identity and match it to the user profile." sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Flight Ticket Photo – used to verify the authenticity and timing of the traveler's trip." sx={{ m: 0 }} />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            This information is used only for internal verification and is not shared with other users.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, mt: 2, color: '#475569', lineHeight: 1.7 }}>
            c. Shipment and Deal Data
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Shipment details (description, weight, reward)" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Deal history (confirmed, canceled, delivered)" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Trip details and statuses" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Support and report submissions" sx={{ m: 0 }} />
            </ListItem>
          </List>

          <Typography variant="body1" sx={{ mb: 2, mt: 2, color: '#475569', lineHeight: 1.7 }}>
            d. Technical and Usage Data
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Device type, IP address, browser type" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="App usage logs and crash reports" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Location data (with permission)" sx={{ m: 0 }} />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            2. How We Use Your Information
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            We use your data to:
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Provide and maintain our services" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Match shoppers with travelers" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Verify the identity of travelers" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Process payments securely" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Detect fraud and violations" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Respond to support requests and disputes" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Improve platform performance and user experience" sx={{ m: 0 }} />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            3. How We Share Your Information
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            We do not sell or rent your personal information.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            We may share your data with:
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Other users (only what's necessary for the service)" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Service providers (payment processors, cloud storage)" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Law enforcement (when required by law)" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Business partners (with your consent)" sx={{ m: 0 }} />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            4. Data Security
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            We protect your data through:
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Encryption of sensitive data" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Secure servers and networks" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Regular security audits" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Access controls and authentication" sx={{ m: 0 }} />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            Verification documents (passport and ticket) are stored securely and accessed only by authorized staff.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            5. Data Retention
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            Account and transaction data are retained as long as your account is active or as needed for legal obligations.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            Verification documents are retained only for as long as necessary to verify identity, prevent fraud, and meet legal compliance.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            6. Your Rights
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            Depending on your location, you may have the right to:
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Access your personal data" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Correct inaccurate data" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Request data deletion" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Object to data processing" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'flex', alignItems: 'flex-start', px: 0, py: 0.5, color: '#475569' }}>
              <Box component="span" sx={{ mr: 1, color: '#4f46e5' }}>•</Box>
              <ListItemText primary="Data portability" sx={{ m: 0 }} />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            To exercise your rights, contact us at privacy@haily.net.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            7. Children's Privacy
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            Haily is not intended for children under the age of 18. We do not knowingly collect personal information from minors.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            8. Changes to This Policy
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            We may update this Privacy Policy. If changes are material, we will notify you via email or in-app message.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: '#1e293b',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                bgcolor: '#4f46e5',
                mr: 1.5,
              }}
            />
            9. Contact Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            If you have questions or concerns about this policy, please contact us at:
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary="Email: privacy@haily.net"
                sx={{ m: 0, color: '#475569' }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary="Website: www.haily.net"
                sx={{ m: 0, color: '#475569' }}
              />
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ my: 4, borderColor: '#e2e8f0' }} />

        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: '#64748b',
            fontStyle: 'italic',
          }}
        >
          Thank you for trusting Hatly with your information.
        </Typography>
      </Container>
    </Box>
  );
}

export default PrivacyPolicy;