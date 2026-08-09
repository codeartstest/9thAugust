import { Box, Container, Typography } from '@mui/material';
import KeyFactsCard from './key-facts-card.jsx';

/**
 * About Cambodia section.
 * Sand background with informative paragraphs about Cambodia's
 * geography, history, and culture, followed by the KeyFactsCard.
 * The `id="about"` anchor is the scroll target for the Hero CTA
 * and the AppBar/Footer "About" navigation links.
 */
function AboutSection() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        backgroundColor: '#F5E6C8',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" gutterBottom>
          About Cambodia
        </Typography>
        <Typography variant="body1" paragraph>
          Cambodia is a vibrant nation located in the heart of Southeast Asia,
          bordered by Thailand to the west and northwest, Laos to the north,
          Vietnam to the east, and the Gulf of Thailand to the south. Its
          tropical climate and fertile plains have shaped a culture rooted in
          agriculture, fishing, and a deep reverence for the natural world.
        </Typography>
        <Typography variant="body1" paragraph>
          From the 9th to the 15th centuries, the Khmer Empire was one of the
          most powerful civilizations in Southeast Asia. At its height, it
          encompassed much of modern-day Cambodia, Thailand, Laos, and Vietnam.
          The empire's greatest legacy is Angkor Wat, the largest religious
          monument in the world, built in the early 12th century by King
          Suryavarman II as a Hindu temple dedicated to Vishnu and later
          transformed into a Buddhist site.
        </Typography>
        <Typography variant="body1" paragraph>
          Today, Cambodia is a constitutional monarchy whose people
          predominantly practice Theravada Buddhism. The nation's cultural
          heritage is reflected in its classical dance, silk weaving, silver
          smithing, and the enduring symbolism of Angkor Wat, which appears at
          the center of the national flag. Visitors are drawn to its ancient
          temples, bustling markets, and the warmth of Khmer hospitality.
        </Typography>
        <KeyFactsCard />
      </Container>
    </Box>
  );
}

export default AboutSection;