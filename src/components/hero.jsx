import { Box, Container, Typography, Button } from '@mui/material';

/**
 * Hero banner section.
 * Full-width Box with a dark-brown to gold linear gradient background,
 * centered title, subtitle, and a CTA button that smoothly scrolls
 * to the About section (#about).
 */
function Hero() {
  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'linear-gradient(135deg, #3E2723 0%, #5C0000 50%, #D4AF37 100%)',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 3,
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          Discover Cambodia
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            color: '#F5E6C8',
            fontWeight: 400,
            maxWidth: '40rem',
          }}
        >
          Explore the majestic Angkor Wat temple complex and the rich heritage
          of the Kingdom of Cambodia
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={handleExploreClick}
          sx={{ mt: 2 }}
        >
          Explore Angkor Wat
        </Button>
      </Container>
    </Box>
  );
}

export default Hero;