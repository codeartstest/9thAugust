import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme/theme.js';
import AppBarNav from './components/app-bar.jsx';
import Hero from './components/hero.jsx';
import AboutSection from './components/about-section.jsx';
import HighlightsSection from './components/highlights-section.jsx';
import Footer from './components/footer.jsx';

/**
 * Root application component.
 * Wraps all section components in the MUI ThemeProvider (warm earthy
 * palette) and CssBaseline (consistent baseline styles). Sections are
 * composed in document order inside a layout Box so vertical flow is
 * predictable and the sticky AppBar sits above the page content.
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBarNav />
        <Box component="main" sx={{ flex: 1 }}>
          <Hero />
          <AboutSection />
          <HighlightsSection />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;