import React from 'react';
import { Box, Container, Typography, Paper, Divider, List, ListItem, ListItemText } from '@mui/material';

function PrivacyPolicy() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            background: 'white',
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              mb: 3,
              textAlign: 'center',
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

          <Typography
            variant="subtitle1"
            sx={{
              textAlign: 'center',
              color: '#64748b',
              mb: 4,
              fontStyle: 'italic',
            }}
          >
            Last updated: 1/5/2025
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
            <List dense sx={{ pl: 2, listStyleType: 'disc', listStylePosition: 'inside' }}>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Full name" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Email address" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Phone number" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Country and location" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Profile photo" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Payment information (processed securely by Stripe)" sx={{ m: 0 }} />
              </ListItem>
            </List>

            <Typography variant="body1" sx={{ mb: 2, mt: 2, color: '#475569', lineHeight: 1.7 }}>
              b. Verification Data (Travelers Only)
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
              To verify travelers and ensure platform safety, we collect:
            </Typography>
            <List dense sx={{ pl: 2, listStyleType: 'disc', listStylePosition: 'inside' }}>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Passport Photo – used to verify identity and match it to the user profile." sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Flight Ticket Photo – used to verify the authenticity and timing of the traveler's trip." sx={{ m: 0 }} />
              </ListItem>
            </List>
            <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
              This information is used only for internal verification and is not shared with other users.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, mt: 2, color: '#475569', lineHeight: 1.7 }}>
              c. Shipment and Deal Data
            </Typography>
            <List dense sx={{ pl: 2, listStyleType: 'disc', listStylePosition: 'inside' }}>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Shipment details (description, weight, reward)" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Deal history (confirmed, canceled, delivered)" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Trip details and statuses" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Support and report submissions" sx={{ m: 0 }} />
              </ListItem>
            </List>

            <Typography variant="body1" sx={{ mb: 2, mt: 2, color: '#475569', lineHeight: 1.7 }}>
              d. Technical and Usage Data
            </Typography>
            <List dense sx={{ pl: 2, listStyleType: 'disc', listStylePosition: 'inside' }}>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Device type, IP address, browser type" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="App usage logs and crash reports" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
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
            <List dense sx={{ pl: 2, listStyleType: 'disc', listStylePosition: 'inside' }}>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Provide and maintain our services" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Match shoppers with travelers" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Verify the identity of travelers" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Process payments securely" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Detect fraud and violations" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Respond to support requests and disputes" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
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
              We may share your information with:
            </Typography>
            <List dense sx={{ pl: 2, listStyleType: 'disc', listStylePosition: 'inside' }}>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Stripe: For secure payment processing." sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Service Providers: Who help with verification, hosting, analytics, or customer support." sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Legal Authorities: If required by law, or to respond to legal processes." sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Other Users: Limited data may be shown (e.g., name, profile photo) during a deal." sx={{ m: 0 }} />
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
              We take reasonable technical and organizational measures to protect your data, including:
            </Typography>
            <List dense sx={{ pl: 2, listStyleType: 'disc', listStylePosition: 'inside' }}>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="End-to-end encryption for sensitive data" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Secure cloud storage" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Access control for internal personnel" sx={{ m: 0 }} />
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
            <List dense sx={{ pl: 2, listStyleType: 'disc', listStylePosition: 'inside' }}>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Access your personal data" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Correct or update your information" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Delete your account and associated data" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Object to certain types of processing" sx={{ m: 0 }} />
              </ListItem>
              <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
                <ListItemText primary="Withdraw consent where applicable" sx={{ m: 0 }} />
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
        </Paper>
      </Container>
    </Box>
  );
}

export default PrivacyPolicy;