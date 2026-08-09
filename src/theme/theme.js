import { createTheme } from '@mui/material/styles';

/**
 * MUI v5 theme for the Cambodia Website.
 * Warm earthy palette inspired by Cambodian temple aesthetics:
 *   - Gold (#D4AF37)   — primary, accents, borders
 *   - Deep Red (#8B0000) — secondary, AppBar, Footer
 *   - Sand (#F5E6C8)   — page background
 *   - Dark Brown (#3E2723) — body text
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#D4AF37',
      light: '#E6C86E',
      dark: '#B8941F',
      contrastText: '#3E2723',
    },
    secondary: {
      main: '#8B0000',
      light: '#B22222',
      dark: '#5C0000',
      contrastText: '#F5E6C8',
    },
    background: {
      default: '#F5E6C8',
      paper: '#FFFAF0',
    },
    text: {
      primary: '#3E2723',
      secondary: '#6D4C41',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      color: '#F5E6C8',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#8B0000',
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#3E2723',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#3E2723',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#8B0000',
          color: '#D4AF37',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        containedPrimary: {
          backgroundColor: '#D4AF37',
          color: '#3E2723',
          '&:hover': {
            backgroundColor: '#B8941F',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #D4AF37',
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;