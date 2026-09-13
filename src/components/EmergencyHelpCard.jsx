import React from 'react';
import { Box, Typography, Grid, Paper, Chip, Button } from '@mui/material';
import { PhoneCall, ShieldCheck, AlertTriangle } from 'lucide-react';
import { EMERGENCY_NUMBERS, BRAND_INFO } from '../data/pilgrimageData';

export default function EmergencyHelpCard() {
  return (
    <Box sx={{ my: { xs: 4, md: 6 } }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2.5, sm: 3.5 },
          borderRadius: 4,
          backgroundColor: '#FFF1F2',
          border: '1.5px solid #FDA4AF',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: '#BE123C',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AlertTriangle size={22} />
          </Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#9F1239', fontSize: { xs: '1.2rem', sm: '1.4rem' } }}>
              विंध्याचल तीर्थ यात्री जरूरी सहायता (Emergency & Helplines)
            </Typography>
            <Typography variant="caption" sx={{ color: '#BE123C', fontWeight: 600 }}>
              आपात स्थिति में केवल प्रमाणित सरकारी व स्थानीय हेल्पलाइन का उपयोग करें
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={2}>
          {EMERGENCY_NUMBERS.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Box
                sx={{
                  p: 1.8,
                  borderRadius: 2.5,
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #FECDD3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography variant="caption" sx={{ color: '#881337', fontWeight: 600, display: 'block' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#BE123C', mt: 0.2 }}>
                    {item.number}
                  </Typography>
                </Box>
                <Button
                  size="small"
                  variant="outlined"
                  href={`tel:${item.number}`}
                  startIcon={<PhoneCall size={14} />}
                  sx={{
                    borderColor: '#BE123C',
                    color: '#BE123C',
                    fontWeight: 700,
                    fontSize: '0.78rem',
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: '#FFE4E6',
                      borderColor: '#9F1239',
                    }
                  }}
                >
                  कॉल
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}
