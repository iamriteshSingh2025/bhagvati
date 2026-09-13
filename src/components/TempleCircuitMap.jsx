import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Chip, Button, Stack, Step, Stepper, StepLabel, StepContent, Paper } from '@mui/material';
import { MapPin, Navigation, Clock, Sparkles, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { TEMPLE_CIRCUIT } from '../data/pilgrimageData';
import imgVindhyavasini from '../assets/maa photo/maavindhyvashi laxmimandir.jpeg';
import imgKaliMandir from '../assets/maa photo/maakalimandir.jpeg';
import imgAshtabhuja from '../assets/maa photo/maaasbhujamandir.jpeg';

const LOCAL_IMAGES = {
  vindhyavasini: imgVindhyavasini,
  'kali-khoh': imgKaliMandir,
  ashtabhuja: imgAshtabhuja,
};

export default function TempleCircuitMap({ onOpenEnquiry }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box sx={{ my: { xs: 4, md: 7 } }}>
      <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 5 } }}>
        <Chip
          icon={<Navigation size={15} color="#800000" />}
          label="त्रिकोण परिक्रमा महात्म्य"
          sx={{
            backgroundColor: 'rgba(128, 0, 0, 0.1)',
            color: '#800000',
            fontWeight: 700,
            mb: 1.5,
            border: '1px solid rgba(128, 0, 0, 0.2)',
          }}
        />
        <Typography variant="h3" sx={{ fontWeight: 800, color: '#800000', fontSize: { xs: '1.7rem', md: '2.4rem' }, mb: 1 }}>
          विंध्याचल त्रिकोण तीर्थ परिक्रमा
        </Typography>
        <Typography variant="body1" sx={{ color: '#5C4941', maxWidth: 700, mx: 'auto', fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
          माँ विंध्यवासिनी (महालक्ष्मी), माँ काली खोह (महाकाली) और माँ अष्टभुजा (महासरस्वती) — तीनों महाशक्तियों के संपूर्ण दर्शन की पावन यात्रा
        </Typography>
      </Box>

      {/* Interactive Step Navigator */}
      <Grid container spacing={3} alignItems="center">
        {/* Left Side: Step Selector Cards */}
        <Grid item xs={12} md={5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {TEMPLE_CIRCUIT.map((spot, idx) => {
              const isSelected = activeStep === idx;
              return (
                <Paper
                  key={spot.id}
                  onClick={() => setActiveStep(idx)}
                  elevation={isSelected ? 4 : 0}
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    backgroundColor: isSelected ? '#FFFDF8' : 'rgba(255, 255, 255, 0.6)',
                    border: isSelected ? '2px solid #800000' : '1px solid rgba(217, 119, 6, 0.2)',
                    boxShadow: isSelected ? '0 8px 24px rgba(128, 0, 0, 0.12)' : 'none',
                    '&:hover': {
                      borderColor: '#800000',
                      backgroundColor: '#FFFDF8',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          backgroundColor: isSelected ? '#800000' : '#F4ECE1',
                          color: isSelected ? '#FFFDF8' : '#800000',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          fontSize: '0.9rem',
                        }}
                      >
                        {spot.step}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: isSelected ? '#800000' : '#231815', fontSize: '1rem' }}>
                          {spot.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#78655C' }}>
                          {spot.distance} • समय: {spot.approxTime}
                        </Typography>
                      </Box>
                    </Box>
                    <ChevronRight size={18} color={isSelected ? '#800000' : '#B45309'} />
                  </Box>
                </Paper>
              );
            })}
          </Box>
        </Grid>

        {/* Right Side: Detailed Spot Focus Card */}
        <Grid item xs={12} md={7}>
          {(() => {
            const spot = TEMPLE_CIRCUIT[activeStep];
            return (
              <Card
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: '2px solid rgba(217, 119, 6, 0.25)',
                  boxShadow: '0 12px 36px rgba(128, 0, 0, 0.1)',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <Box sx={{ position: 'relative', height: { xs: 220, sm: 280 } }}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={LOCAL_IMAGES[spot.id] || spot.image}
                    alt={spot.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 14,
                      left: 14,
                      backgroundColor: 'rgba(128, 0, 0, 0.88)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFFDF8',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 2,
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.8,
                    }}
                  >
                    <Sparkles size={14} color="#FDE68A" />
                    <span>चरण {spot.step} / 4</span>
                  </Box>

                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 12,
                      right: 12,
                      backgroundColor: 'rgba(35, 24, 21, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: '#FDE68A',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 2,
                      fontWeight: 600,
                      fontSize: '0.78rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.6,
                    }}
                  >
                    <Clock size={14} />
                    <span>{spot.approxTime}</span>
                  </Box>
                </Box>

                <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                  <Chip
                    label={spot.highlight}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(217, 119, 6, 0.12)',
                      color: '#B45309',
                      fontWeight: 700,
                      mb: 1.5,
                      borderRadius: 1.5,
                    }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#800000', mb: 1 }}>
                    {spot.name}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#4A3B32', mb: 2, lineHeight: 1.7, fontSize: '0.98rem' }}>
                    {spot.significance}
                  </Typography>

                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: '#FFFBEB',
                      border: '1px solid rgba(217, 119, 6, 0.25)',
                      mb: 2.5,
                    }}
                  >
                    <Typography variant="caption" sx={{ color: '#92400E', fontWeight: 600, display: 'block' }}>
                      💡 <strong>दर्शन सलाह (Tips):</strong> {spot.tips}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => onOpenEnquiry && onOpenEnquiry(`त्रिकोण परिक्रमा सहायता: ${spot.name}`)}
                      startIcon={<Navigation size={17} />}
                      sx={{ fontWeight: 700 }}
                    >
                      परिक्रमा योजना बनाएं
                    </Button>

                    <Button
                      variant="text"
                      onClick={() => setActiveStep((prev) => (prev + 1) % TEMPLE_CIRCUIT.length)}
                      endIcon={<ArrowRight size={17} />}
                      sx={{ color: '#800000', fontWeight: 600 }}
                    >
                      अगला धाम देखें
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            );
          })()}
        </Grid>
      </Grid>
    </Box>
  );
}
