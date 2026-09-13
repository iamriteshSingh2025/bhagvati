import React, { useState, useEffect } from 'react';
import { Box, Fab, Tooltip, Zoom } from '@mui/material';
import { MessageCircle, PhoneCall, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from '../data/pilgrimageData';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 80, md: 32 },
        right: { xs: 16, md: 32 },
        zIndex: 1150,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1.5,
      }}
    >
      {/* Scroll to Top */}
      <Zoom in={showScrollTop}>
        <Tooltip title="ऊपर जाएं" placement="left" arrow>
          <Fab
            size="small"
            onClick={scrollToTop}
            sx={{
              backgroundColor: '#FFFDF8',
              color: '#800000',
              boxShadow: '0 4px 14px rgba(35, 24, 21, 0.15)',
              border: '1px solid rgba(217, 119, 6, 0.3)',
              '&:hover': {
                backgroundColor: '#FDE68A',
              }
            }}
          >
            <ArrowUp size={20} />
          </Fab>
        </Tooltip>
      </Zoom>

      {/* Floating Call Button */}
      <Tooltip title="कॉल करें: 8739000333" placement="left" arrow>
        <Fab
          component="a"
          href={`tel:${BRAND_INFO.phone}`}
          className="pulse-call"
          sx={{
            width: { xs: 48, md: 54 },
            height: { xs: 48, md: 54 },
            backgroundColor: '#800000',
            color: '#FFFDF8',
            boxShadow: '0 6px 20px rgba(128, 0, 0, 0.4)',
            border: '2px solid #F59E0B',
            '&:hover': {
              backgroundColor: '#5E0000',
              transform: 'scale(1.08)',
            }
          }}
        >
          <PhoneCall size={24} />
        </Fab>
      </Tooltip>

      {/* Floating WhatsApp Button */}
      <Tooltip title="WhatsApp पर सहायता लें" placement="left" arrow>
        <Fab
          component="a"
          href={BRAND_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pulse-whatsapp"
          sx={{
            width: { xs: 54, md: 60 },
            height: { xs: 54, md: 60 },
            backgroundColor: '#25D366',
            color: '#FFFFFF',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
            border: '2px solid #FFFFFF',
            '&:hover': {
              backgroundColor: '#1EBE5D',
              transform: 'scale(1.08)',
            }
          }}
        >
          <MessageCircle size={30} />
        </Fab>
      </Tooltip>
    </Box>
  );
}
