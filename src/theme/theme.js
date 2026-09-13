import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#800000', // Deep Temple Maroon
      light: '#9E1B28',
      dark: '#4D0000',
      contrastText: '#FFFDF8',
    },
    secondary: {
      main: '#D97706', // Sacred Saffron Gold
      light: '#FBBF24',
      dark: '#B45309',
      contrastText: '#231815',
    },
    background: {
      default: '#FBF7F0', // Sacred Cream
      paper: '#FFFFFF',
      subtle: '#F4ECE1',
      dark: '#1C120C',
    },
    text: {
      primary: '#231815',
      secondary: '#5C4941',
      disabled: '#9E8D85',
    },
    sacred: {
      maroon: '#800000',
      deepMaroon: '#54080D',
      gold: '#D97706',
      lightGold: '#FEF3C7',
      goldBorder: '#F59E0B',
      saffron: '#EA580C',
      saffronLight: '#FFF7ED',
      vermillion: '#DC2626',
      sand: '#FDFBF7',
      darkEarth: '#231815',
      greenVerified: '#059669',
      greenLight: '#ECFDF5',
    }
  },
  typography: {
    fontFamily: '"Noto Sans Devanagari", "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Cinzel", "Noto Sans Devanagari", serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.35,
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      lineHeight: 1.4,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
          fontSize: '1rem',
          boxShadow: 'none',
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 8px 20px -4px rgba(128, 0, 0, 0.25)',
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #800000 0%, #600000 100%)',
          border: '1px solid rgba(253, 230, 138, 0.2)',
          color: '#FFFDF8',
          '&:hover': {
            background: 'linear-gradient(135deg, #960f1b 0%, #700000 100%)',
          }
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
          color: '#231815',
          fontWeight: 700,
          '&:hover': {
            background: 'linear-gradient(135deg, #FBBF24 0%, #EA580C 100%)',
          }
        },
        outlinedPrimary: {
          borderColor: '#800000',
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
            backgroundColor: 'rgba(128, 0, 0, 0.05)',
          }
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          border: '1px solid rgba(217, 119, 6, 0.16)',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 4px 20px -2px rgba(35, 24, 21, 0.05)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 16px 32px -4px rgba(128, 0, 0, 0.12)',
            borderColor: 'rgba(217, 119, 6, 0.35)',
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backgroundColor: '#FFFDF8',
            '&:hover fieldset': {
              borderColor: '#D97706',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#800000',
              borderWidth: 2,
            },
          },
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 8,
        }
      }
    }
  }
});
