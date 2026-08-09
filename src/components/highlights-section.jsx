import { Box, Container, Typography, Grid } from '@mui/material';
import { temples } from '../data/temples.js';
import TempleCard from './temple-card.jsx';

/**
 * Temple Highlights section.
 * Sand background with a responsive grid of TempleCard components
 * populated from the static temples data module.
 *
 * Responsive grid columns:
 *   xs=12 (1 col) | sm=6 (2 cols) | md=4 (3 cols) | lg=3 (4 cols)
 *
 * The `id="highlights"` anchor is the scroll target for the AppBar
 * and Footer "Highlights" navigation links.
 */
function HighlightsSection() {
  return (
    <Box
      id="highlights"
      component="section"
      sx={{
        backgroundColor: '#F5E6C8',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 4 }}>
          Temple Highlights
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {temples.map((temple) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={temple.name}>
              <TempleCard {...temple} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default HighlightsSection;