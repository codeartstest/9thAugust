import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

/**
 * Helper: smoothly scroll to an element by its DOM id.
 * Falls back to scrolling to the top of the page when the target
 * is not found (e.g. the "Home" link).
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

const navLinks = [
  { label: 'Home', target: 'top' },
  { label: 'About', target: 'about' },
  { label: 'Highlights', target: 'highlights' },
];

/**
 * Sticky top navigation bar.
 * Deep red background with gold text is applied via the MuiAppBar
 * theme override; this component only composes the content.
 */
function AppBarNav() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          component="span"
          sx={{ fontWeight: 700, letterSpacing: 1, flexGrow: 1 }}
        >
          Cambodia
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {navLinks.map((link) => (
            <Button
              key={link.label}
              color="inherit"
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
      </Toolbar>
    </AppBar>
  );
}

export default AppBarNav;