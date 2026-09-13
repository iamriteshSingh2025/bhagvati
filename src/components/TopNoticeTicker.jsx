import React from 'react';
import { Box, Typography, Container, Chip, Link as MuiLink } from '@mui/material';
import { Volume2, PhoneCall, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND_INFO, LIVE_NOTICES } from '../data/pilgrimageData';

export default function TopNoticeTicker() {
  const topNotice = LIVE_NOTICES[0];

  return (
    <Box
      sx={{
        background: 'linear-gradient(90deg, #4D0000 0%, #800000 50%, #4D0000 100%)',
        color: '#FFFDF8',
        py: 0.75,
        px: 2,
        fontSize: '0.85rem',
        borderBottom: '1px solid rgba(245, 158, 11, 0.3)',
      }}
    >
      <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, overflow: 'hidden' }}>
          <Chip
            size="small"
            icon={<Volume2 size={14} color="#F59E0B" />}
            label="लाइव सूचना"
            sx={{
              backgroundColor: 'rgba(217, 119, 6, 0.25)',
              color: '#FDE68A',
              fontWeight: 700,
              fontSize: '0.72rem',
              height: 22,
              border: '1px solid rgba(245, 158, 11, 0.4)',
            }}
          />
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.78rem', md: '0.85rem' },
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: { xs: '260px', sm: '420px', md: '650px', lg: '850px' },
              color: '#FEF3C7',
            }}
          >
            <strong>{topNotice.title}:</strong> {topNotice.description}
          </Typography>
          <MuiLink
            component={Link}
            to="/notices"
            sx={{
              color: '#FBBF24',
              display: { xs: 'none', sm: 'inline-flex' },
              alignItems: 'center',
              fontSize: '0.75rem',
              textDecoration: 'none',
              fontWeight: 600,
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            विस्तार से देखें <ChevronRight size={14} />
          </MuiLink>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: '#FDE68A' }}>
            <PhoneCall size={14} />
            <Typography variant="caption" sx={{ fontSize: '0.8rem', fontWeight: 600 }}>
              तीर्थ सहायता हेल्पलाइन: <strong>{BRAND_INFO.phone}</strong> (RAKA Mishra)
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
