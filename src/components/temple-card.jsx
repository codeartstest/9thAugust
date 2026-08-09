import { Card, CardMedia, CardContent, Typography } from '@mui/material';

/**
 * Single temple highlight card.
 *
 * Props:
 *   - name        (string): Temple name shown as the card title.
 *   - description (string): Short descriptive paragraph.
 *   - image       (string): CSS gradient string applied as the CardMedia
 *                           background (no external image assets required).
 *   - location    (string): Geographic location shown in deep red.
 *
 * The gold border accent is applied via the MuiCard theme override.
 */
function TempleCard({ name, description, image, location }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFAF0',
      }}
    >
      <CardMedia
        sx={{
          height: 160,
          background: image,
        }}
        component="div"
      />
      <CardContent sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
        <Typography variant="h5" component="h5" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ color: '#8B0000', fontWeight: 700 }}
        >
          {location}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TempleCard;