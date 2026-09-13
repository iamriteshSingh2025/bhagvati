import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { ShieldAlert } from 'lucide-react';
import { BRAND_INFO } from '../data/pilgrimageData';

export default function DisclaimerBanner({ sx = {} }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, md: 2.5 },
        borderRadius: 3,
        backgroundColor: '#FFFBEB',
        border: '1.5px dashed #D97706',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1.5,
        ...sx,
      }}
    >
      <Box sx={{ color: '#B45309', mt: 0.3, flexShrink: 0 }}>
        <ShieldAlert size={22} />
      </Box>
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#92400E', mb: 0.3 }}>
          श्रद्धालुओं के लिए पारदर्शी सूचना (Official Status Disclaimer):
        </Typography>
        <Typography variant="body2" sx={{ color: '#78350F', fontSize: '0.88rem', lineHeight: 1.55 }}>
          {BRAND_INFO.officialDisclaimer}
        </Typography>
        <Typography variant="caption" sx={{ display: 'block', color: '#B45309', fontWeight: 600, mt: 0.5 }}>
          * सभी विशेष दर्शन/प्रवेश, पूजा व ठहरने की व्यवस्था मंदिर एवं प्रशासन के तत्कालीन नियमों तथा उपलब्धता (Availability-based) पर ही निर्भर है।
        </Typography>
      </Box>
    </Paper>
  );
}
