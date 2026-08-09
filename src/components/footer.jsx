import { Box, Container, Typography, Button } from '@mui/material';

/**
 * Helper: smoothly scroll to an element by its DOM id.
 * Mirrors the scrollToId pattern used in app-bar.jsx so that
 * the "Home" link scrolls to the top of the page and the
 * "About"/"Highlights" links scroll to their section anchors.
 */
const scrollToId = (id) => {
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const footerNavLinks = [
  { label: 'Home', target: 'top' },
  { label: 'About', target: 'about' },
  { label: 'Highlights', target: 'highlights' },
];

/**
 * Page footer.
 * Deep red background with gold/sand text. Displays a copyright
 * notice and navigation buttons that smoothly scroll to the
 * corresponding sections.
 */
function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#8B0000',
        color: '#D4AF37',
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            mb: 3,
          }}
        >
          <Typography
            variant="h6"
            component="span"
            sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 1 }}
          >
            Cambodia
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {footerNavLinks.map((link) => (
              <Button
                key={link.label}
                color="inherit"
                size="small"
                onClick={() => scrollToId(link.target)}
                sx={{
                  color: '#D4AF37',
                  '&:hover': {
                    backgroundColor: 'rgba(212, 175, 55, 0.12)',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Box>
        <Typography
          variant="body2"
          component="p"
          sx={{ color: '#F5E6C8', textAlign: 'center' }}
        >
          &copy; 2026 Cambodia &mdash; Discover Angkor Wat. All rights
          reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;