import React from 'react';
import { Box, Container, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';

function TermsOfService() {
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
          Hatly Terms and Conditions
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
          Welcome to Hatly! These Terms and Conditions ("Terms") govern your access to and use of Hatly's services, including our mobile application and website (collectively, the "Platform"). By using the Platform, you agree to be bound by these Terms. If you do not agree, do not use the Platform.
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
            1. Definitions
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            <strong>Hatly:</strong> The platform connecting Shoppers and Travelers.
          </Typography>
          <List dense sx={{ pl: 2, mb: 2 }}>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <strong>Shopper:</strong> A user who posts a shipment request and pays for the shipment and reward.
                  </React.Fragment>
                }
                sx={{ m: 0 }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <strong>Traveler:</strong> A user who offers to deliver shipments during their trip in exchange for a reward.
                  </React.Fragment>
                }
                sx={{ m: 0 }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <strong>Shipment:</strong> The item or package to be delivered.
                  </React.Fragment>
                }
                sx={{ m: 0 }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <strong>Trip:</strong> A Traveler's planned journey during which they offer to deliver shipments. Each trip must include details such as departure and arrival locations, dates, and proof of travel (e.g., ticket and passport photo).
                  </React.Fragment>
                }
                sx={{ m: 0 }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <strong>Reward:</strong> The agreed-upon amount the Shopper offers to the Traveler for delivering the Shipment.
                  </React.Fragment>
                }
                sx={{ m: 0 }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <strong>Deal:</strong> A confirmed agreement between a Shopper and a Traveler.
                  </React.Fragment>
                }
                sx={{ m: 0 }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <strong>PIN Code:</strong> A code sent to the Shopper to confirm receipt of the shipment.
                  </React.Fragment>
                }
                sx={{ m: 0 }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <strong>Support Request:</strong> A formal request for help on a deal initiated by any party.
                  </React.Fragment>
                }
                sx={{ m: 0 }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <strong>Report:</strong> A system feature allowing users to flag problems or misconduct for each shipment.
                  </React.Fragment>
                }
                sx={{ m: 0 }}
              />
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
            2. Eligibility
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            To use Hatly, you must:
          </Typography>
          <List dense sx={{ pl: 2, listStyleType: 'disc', }}>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Be at least 18 years old." sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Be capable of entering into legally binding agreements." sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Comply with all applicable local laws and regulations." sx={{ m: 0 }} />
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
            3. Account Registration
          </Typography>
          <List dense sx={{ pl: 2, listStyleType: 'disc', }}>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="You must create an account to use Hatly." sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="You agree to provide accurate, complete, and updated information." sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="You are responsible for maintaining the confidentiality of your account." sx={{ m: 0 }} />
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
            4. How Hatly Works
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <strong>Posting a Shipment:</strong> Shoppers create a request with details, destination, reward, and weight.
                  </React.Fragment>
                }
                sx={{ m: 0, color: '#475569' }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <strong>Offering a Delivery:</strong> Travelers can browse and offer to deliver shipments.
                  </React.Fragment>
                }
                sx={{ m: 0, color: '#475569' }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <strong>Deal Confirmation:</strong> When both parties agree, a Deal is created, and payment is held in escrow.
                  </React.Fragment>
                }
                sx={{ m: 0, color: '#475569' }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <strong>PIN Code System:</strong> When the Traveler updates their trip status to "Meets the Shopper," the system automatically sends the PIN to the Shopper.
                  </React.Fragment>
                }
                sx={{ m: 0, color: '#475569' }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <strong>Completion:</strong> Shopper enters the PIN to confirm delivery, and funds are released to the Traveler.
                  </React.Fragment>
                }
                sx={{ m: 0, color: '#475569' }}
              />
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
            5. Payments and Fees
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            Shoppers pay the total shipment cost upfront, including:
          </Typography>
          <List dense sx={{ pl: 2, listStyleType: 'disc', }}>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Product Price (if any)" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Reward for the Traveler" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Hatly Service Fee" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Stripe Payment Fee (if applicable)" sx={{ m: 0 }} />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ mt: 2, color: '#475569', lineHeight: 1.7 }}>
            Funds are held in escrow via Stripe until successful delivery is confirmed.
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: '#475569', lineHeight: 1.7 }}>
            If the delivery is not confirmed or a dispute is raised, Hatly may investigate and decide on fund release or refund.
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
            6. Traveler Responsibilities
          </Typography>
          <List dense sx={{ pl: 2, listStyleType: 'disc', }}>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Ensure timely and safe delivery of the shipment." sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Comply with all customs and transportation laws." sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Must not deliver prohibited or illegal items." sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Update trip status to 'Meets the Shopper' when appropriate." sx={{ m: 0 }} />
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
            7. Shopper Responsibilities
          </Typography>
          <List dense sx={{ pl: 2, listStyleType: 'disc',}}>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Provide clear, legal, and accurate shipment details." sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Must not request delivery of illegal, dangerous, or restricted items." sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Confirm delivery by entering the PIN only when shipment is received." sx={{ m: 0 }} />
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
            8. Prohibited Items
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            Users must not send or deliver:
          </Typography>
          <List dense sx={{ pl: 2, listStyleType: 'disc', }}>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Illegal drugs" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Weapons or explosives" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Hazardous materials" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Counterfeit goods" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Items prohibited by customs or local laws" sx={{ m: 0 }} />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ mt: 2, color: '#475569', lineHeight: 1.7 }}>
            Hatly reserves the right to suspend accounts that violate this policy.
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
            9. Support and Dispute Resolution
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary="Each party can initiate a Support Request for their deal if an issue arises."
                sx={{ m: 0, color: '#475569' }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary="Support requests will be reviewed by the Hatly team."
                sx={{ m: 0, color: '#475569' }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary="Each shipment includes a Report System to flag suspicious or problematic behavior."
                sx={{ m: 0, color: '#475569' }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary="Hatly may request evidence (photos, receipts, communication) to resolve disputes."
                sx={{ m: 0, color: '#475569' }}
              />
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
            10. Liability and Disclaimer
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary="Hatly acts only as a facilitator between Shoppers and Travelers."
                sx={{ m: 0, color: '#475569' }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary="Hatly does not verify the contents of any shipment and is not liable for delays, damages, or losses."
                sx={{ m: 0, color: '#475569' }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary="Users are responsible for ensuring compliance with applicable laws and shipping regulations."
                sx={{ m: 0, color: '#475569' }}
              />
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
            11. Account Suspension and Termination
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            Hatly may suspend or terminate accounts that:
          </Typography>
          <List dense sx={{ pl: 2, listStyleType: 'disc', }}>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Violate these Terms" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Are involved in fraud or abuse" sx={{ m: 0 }} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', px: 0, py: 0.5, color: '#475569' }}>
              <ListItemText primary="Consistently generate support or report issues" sx={{ m: 0 }} />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ mt: 2, color: '#475569', lineHeight: 1.7 }}>
            Users may also request deletion of their account at any time.
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
            12. Privacy
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            Please refer to our Privacy Policy for details on how we handle personal data.
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
            13. Modifications
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            We reserve the right to update these Terms at any time. Changes will be communicated via email or in-app notification. Continued use of the Platform after changes implies acceptance.
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
            14. Governing Law
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            These Terms are governed by the laws of the State of Wyoming, USA, without regard to conflict of law principles.
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
            15. Contact
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#475569', lineHeight: 1.7 }}>
            For questions or support:
          </Typography>
          <List dense sx={{ pl: 2 }}>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary="Email: support@hatly.net"
                sx={{ m: 0, color: '#475569' }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, py: 0.5 }}>
              <ListItemText
                primary="Website: www.hatly.net"
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
          Thank you for using Hatly!
        </Typography>
      </Container>
    </Box>
  );
}

export default TermsOfService;