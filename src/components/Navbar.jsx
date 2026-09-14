import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Chip,
  useScrollTrigger,
} from '@mui/material';
import {
  Menu as MenuIcon,
  X as CloseIcon,
  PhoneCall,
  MessageCircle,
  Sparkles,
  MapPin,
  Flame,
  UserCheck,
  HeartHandshake,
  Hotel,
  Utensils,
  Car,
  Info,
  Send,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND_INFO } from '../data/pilgrimageData';

const NAV_LINKS = [
  { name: 'होम', path: '/', icon: <Sparkles size={18} /> },
  { name: 'दर्शन', path: '/darshan', icon: <Sparkles size={18} /> },
  { name: 'पूजा सेवा', path: '/puja', icon: <Flame size={18} /> },
  { name: 'पंडित जी', path: '/pandit-ji', icon: <UserCheck size={18} /> },
  { name: 'माँ श्रृंगार', path: '/shringar', icon: <HeartHandshake size={18} /> },
  { name: 'होटल / स्टे', path: '/stay', icon: <Hotel size={18} /> },
  { name: 'भोजन', path: '/food', icon: <Utensils size={18} /> },
  { name: 'यात्रा व वाहन', path: '/travel', icon: <Car size={18} /> },
  { name: 'परिचय', path: '/about', icon: <Info size={18} /> },
  { name: 'संपर्क', path: '/contact', icon: <Send size={18} /> },
];

export default function Navbar({ onOpenEnquiry }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 20 });

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: trigger ? 'rgba(255, 253, 248, 0.98)' : 'rgba(255, 253, 248, 0.95)',
          backdropFilter: 'blur(10px)',
          color: '#231815',
          borderBottom: '1px solid rgba(217, 119, 6, 0.18)',
          transition: 'all 0.3s ease',
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 76 }, justifyContent: 'space-between' }}>
            
            {/* Logo Section */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                gap: 1.5,
              }}
            >
              <Box
                component="img"
                src="/logo.svg"
                alt="मंगलम विंध्याचल धाम"
                sx={{
                  width: { xs: 44, md: 50 },
                  height: { xs: 44, md: 50 },
                  filter: 'drop-shadow(0 2px 4px rgba(128, 0, 0, 0.2))',
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '1.05rem', sm: '1.2rem', md: '1.28rem' },
                    color: '#800000',
                    lineHeight: 1.15,
                    fontFamily: '"Noto Sans Devanagari", "Cinzel", serif',
                    letterSpacing: '-0.01em',
                  }}
                >
                  मंगलम विंध्याचल धाम
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mt: 0.2 }}>
                  <Chip
                    label="RAKA Mishra"
                    size="small"
                    sx={{
                      height: 18,
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      backgroundColor: 'rgba(217, 119, 6, 0.14)',
                      color: '#B45309',
                      borderRadius: 1,
                      px: 0.5,
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: '0.72rem',
                      color: '#5C4941',
                      display: { xs: 'none', sm: 'inline' }
                    }}
                  >
                    विंध्याचल तीर्थ सहायता
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Desktop Navigation Links */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.6 }}>
              {NAV_LINKS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: isActive ? '#800000' : '#4A3B32',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.94rem',
                      py: 0.8,
                      px: 1.2,
                      borderRadius: 2,
                      backgroundColor: isActive ? 'rgba(128, 0, 0, 0.08)' : 'transparent',
                      borderBottom: isActive ? '2px solid #800000' : '2px solid transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(217, 119, 6, 0.08)',
                        color: '#800000',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                );
              })}
            </Box>

            {/* Quick Action CTAs */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* WhatsApp Button */}
              <Button
                variant="outlined"
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<MessageCircle size={17} color="#059669" />}
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  borderColor: 'rgba(5, 150, 105, 0.4)',
                  color: '#065F46',
                  backgroundColor: 'rgba(16, 185, 129, 0.08)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  py: 0.8,
                  px: 1.8,
                  '&:hover': {
                    borderColor: '#059669',
                    backgroundColor: 'rgba(16, 185, 129, 0.16)',
                  },
                }}
              >
                WhatsApp
              </Button>

              {/* Call Now Button */}
              <Button
                variant="contained"
                color="primary"
                href={`tel:${BRAND_INFO.phone}`}
                startIcon={<PhoneCall size={17} />}
                sx={{
                  py: 0.8,
                  px: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '0.84rem', sm: '0.9rem' },
                  fontWeight: 700,
                  borderRadius: 2.5,
                  boxShadow: '0 4px 14px rgba(128, 0, 0, 0.25)',
                }}
              >
                <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>कॉल करें</Box>
                <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>8739000333</Box>
              </Button>

              {/* Mobile Hamburger Menu Toggle */}
              <IconButton
                color="inherit"
                aria-label="open menu"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ display: { lg: 'none' }, ml: 0.5, color: '#800000' }}
              >
                <MenuIcon size={26} />
              </IconButton>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: { xs: 290, sm: 340 },
            backgroundColor: '#FFFDF8',
            p: 2.5,
            borderLeft: '2px solid rgba(217, 119, 6, 0.25)',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
            <Box component="img" src="/logo.svg" alt="Logo" sx={{ width: 36, height: 36 }} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#800000', lineHeight: 1.1 }}>
                मंगलम विंध्याचल धाम
              </Typography>
              <Typography variant="caption" sx={{ color: '#B45309', fontWeight: 600 }}>
                RAKA Mishra • 8739000333
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#5C4941' }}>
            <CloseIcon size={22} />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2, borderColor: 'rgba(217, 119, 6, 0.2)' }} />

        <List sx={{ pt: 0 }}>
          {NAV_LINKS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItem key={item.path} disablePadding sx={{ mb: 0.8 }}>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    borderRadius: 2,
                    backgroundColor: isActive ? 'rgba(128, 0, 0, 0.1)' : 'transparent',
                    color: isActive ? '#800000' : '#231815',
                    py: 1,
                    px: 1.5,
                    borderLeft: isActive ? '4px solid #800000' : '4px solid transparent',
                  }}
                >
                  <Box sx={{ mr: 1.8, color: isActive ? '#800000' : '#D97706' }}>
                    {item.icon}
                  </Box>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '1rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Box sx={{ mt: 'auto', pt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            href={`tel:${BRAND_INFO.phone}`}
            startIcon={<PhoneCall size={18} />}
            sx={{ mb: 1.5, py: 1.2, fontWeight: 700 }}
          >
            कॉल करें (8739000333)
          </Button>

          <Button
            fullWidth
            variant="outlined"
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<MessageCircle size={18} color="#059669" />}
            sx={{
              py: 1.2,
              fontWeight: 700,
              borderColor: '#059669',
              color: '#065F46',
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
            }}
          >
            WhatsApp पर पूछें
          </Button>

          <Typography
            variant="caption"
            sx={{
              display: 'block',
              textAlign: 'center',
              mt: 2,
              color: '#78655C',
              fontSize: '0.72rem',
              lineHeight: 1.4,
            }}
          >
            निजी तीर्थ सहायता • विंध्याचल (मिर्ज़ापुर)
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
