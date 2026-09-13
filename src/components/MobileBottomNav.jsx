import React from 'react';
import { Box, Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Sparkles, MessageCircle, PhoneCall, HelpCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BRAND_INFO } from '../data/pilgrimageData';

export default function MobileBottomNav({ onOpenEnquiry }) {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = () => {
    if (location.pathname === '/') return 0;
    if (location.pathname === '/darshan') return 1;
    if (location.pathname === '/contact' || location.pathname === '/notices') return 4;
    return -1;
  };

  return (
    <Paper
      elevation={8}
      sx={{
        display: { xs: 'block', md: 'none' },
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        backgroundColor: '#FFFDF8',
        borderTop: '2px solid #D97706',
        boxShadow: '0 -4px 16px rgba(128, 0, 0, 0.12)',
      }}
    >
      <BottomNavigation
        showLabels
        value={getActiveTab()}
        sx={{
          height: 64,
          backgroundColor: 'transparent',
          '& .MuiBottomNavigationAction-root': {
            minWidth: 'auto',
            padding: '4px 0',
            color: '#78655C',
            '&.Mui-selected': {
              color: '#800000',
              fontWeight: 700,
            },
            '& .MuiBottomNavigationAction-label': {
              fontSize: '0.72rem',
              fontWeight: 600,
              mt: 0.3,
            },
          },
        }}
      >
        <BottomNavigationAction
          label="होम"
          icon={<Home size={20} />}
          onClick={() => navigate('/')}
        />

        <BottomNavigationAction
          label="दर्शन"
          icon={<Sparkles size={20} />}
          onClick={() => navigate('/darshan')}
        />

        <BottomNavigationAction
          label="WhatsApp"
          icon={<MessageCircle size={22} color="#059669" />}
          component="a"
          href={BRAND_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#065F46 !important',
            '& .MuiBottomNavigationAction-label': {
              color: '#065F46 !important',
              fontWeight: 700,
            }
          }}
        />

        <BottomNavigationAction
          label="कॉल"
          icon={<PhoneCall size={20} color="#800000" />}
          component="a"
          href={`tel:${BRAND_INFO.phone}`}
          sx={{
            color: '#800000 !important',
            '& .MuiBottomNavigationAction-label': {
              color: '#800000 !important',
              fontWeight: 700,
            }
          }}
        />

        <BottomNavigationAction
          label="सहायता"
          icon={<HelpCircle size={20} />}
          onClick={() => {
            if (onOpenEnquiry) {
              onOpenEnquiry('सामान्य सहायता अनुरोध');
            } else {
              navigate('/contact');
            }
          }}
        />
      </BottomNavigation>
    </Paper>
  );
}
