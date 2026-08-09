import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { keyFacts } from '../data/temples.js';

/**
 * Key Facts card.
 * Displays four key facts about Cambodia (Capital, Population,
 * Language, Currency) in a responsive 2x2 grid using MUI Grid.
 * White/cream background with gold border accent comes from the
 * MuiCard theme override.
 */
function KeyFactsCard() {
  return (
    <Card sx={{ mt: 4, backgroundColor: '#FFFAF0' }}>
      <CardContent sx={{ p: { xs: 2, md: 3 } }}>
        <Typography variant="h3" component="h3" gutterBottom>
          Key Facts
        </Typography>
        <Grid container spacing={2}>
          {keyFacts.map((fact) => (
            <Grid item xs={12} sm={6} key={fact.label}>
              <Box
                sx={{
                  p: 2,
                  borderLeft: '4px solid #D4AF37',
                  backgroundColor: 'rgba(245, 230, 200, 0.4)',
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="span"
                  sx={{
                    display: 'block',
                    fontWeight: 700,
                    color: '#8B0000',
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    fontSize: '0.875rem',
                  }}
                >
                  {fact.label}
                </Typography>
                <Typography
                  variant="body1"
                  component="span"
                  sx={{ display: 'block', color: '#3E2723', fontWeight: 600 }}
                >
                  {fact.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default KeyFactsCard;