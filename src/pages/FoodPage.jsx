import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Paper } from '@mui/material';
import { Utensils, MapPin, MessageCircle, PhoneCall, Sparkles, Check } from 'lucide-react';
import { DEMO_RESTAURANTS, BRAND_INFO } from '../data/pilgrimageData';
import CTASection from '../components/CTASection';
import DisclaimerBanner from '../components/DisclaimerBanner';

export default function FoodPage({ onOpenEnquiry }) {
  return (
    <Box sx={{ py: { xs: 4, md: 7 }, backgroundColor: '#FBF7F0' }}>
      <Container maxWidth="xl">
        
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Chip
            icon={<Utensils size={16} color="#D97706" />}
            label="शुद्ध वैष्णव भोजनालय (Demo Directory)"
            sx={{ backgroundColor: 'rgba(217, 119, 6, 0.12)', color: '#B45309', fontWeight: 700, mb: 1.5 }}
          />
          <Typography variant="h2" sx={{ fontWeight: 800, color: '#800000', fontSize: { xs: '1.9rem', md: '2.8rem' }, mb: 1.5 }}>
            विंध्याचल में शुद्ध शाकाहारी भोजन की सुविधा
          </Typography>
          <Typography variant="body1" sx={{ color: '#5C4941', maxWidth: 720, mx: 'auto', fontSize: '1.05rem' }}>
            100% शुद्ध शाकाहारी, सात्विक वैष्णव थाली, व्रत फलाहार एवं पारिवारिक भोजनालय विकल्प।
          </Typography>
        </Box>

        <DisclaimerBanner sx={{ mb: 4 }} />

        {/* Restaurant Cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {DEMO_RESTAURANTS.map((rest) => {
            const whatsappText = `नमस्ते RAKA Mishra जी, मुझे विंध्याचल में '${rest.name}' अथवा शुद्ध भोजन व्यवस्था के बारे में जानकारी चाहिए।`;
            const whatsappUrl = `https://wa.me/918739000333?text=${encodeURIComponent(whatsappText)}`;

            return (
              <Grid item xs={12} sm={6} md={4} key={rest.id}>
                <Card
                  sx={{
                    borderRadius: 3.5,
                    overflow: 'hidden',
                    border: '1.5px solid rgba(217, 119, 6, 0.2)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 14px 30px rgba(128, 0, 0, 0.12)',
                    }
                  }}
                >
                  <Box sx={{ height: 190, overflow: 'hidden', position: 'relative' }}>
                    <CardMedia component="img" height="100%" image={rest.image} alt={rest.name} sx={{ objectFit: 'cover' }} />
                    <Chip
                      label="DEMO LISTING"
                      size="small"
                      sx={{ position: 'absolute', top: 10, left: 10, backgroundColor: 'rgba(35, 24, 21, 0.85)', color: '#FDE68A', fontWeight: 700, fontSize: '0.68rem' }}
                    />
                  </Box>

                  <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#78655C', mb: 0.5 }}>
                      <MapPin size={14} color="#D97706" />
                      <Typography variant="caption" sx={{ fontWeight: 600 }}>{rest.location}</Typography>
                    </Box>

                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000', mb: 0.5, fontSize: '1.15rem' }}>
                      {rest.name}
                    </Typography>

                    <Typography variant="body2" sx={{ color: '#059669', fontWeight: 700, mb: 1 }}>
                      {rest.foodType}
                    </Typography>

                    <Typography variant="caption" sx={{ color: '#B45309', fontWeight: 700, display: 'block', mb: 2 }}>
                      अनुमानित मूल्य: {rest.priceRange}
                    </Typography>

                    <Box sx={{ mb: 2.5, flexGrow: 1 }}>
                      <Typography variant="caption" sx={{ color: '#78655C', fontWeight: 700, display: 'block', mb: 0.8 }}>
                        प्रमुख व्यंजन:
                      </Typography>
                      {rest.specialties.map((item, idx) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 0.8, mb: 0.4 }}>
                          <Check size={12} color="#D97706" />
                          <Typography variant="caption" sx={{ color: '#4A3B32' }}>{item}</Typography>
                        </Box>
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => onOpenEnquiry && onOpenEnquiry(`भोजन सहायता: ${rest.name}`)}
                        sx={{ py: 0.9, fontWeight: 700, fontSize: '0.85rem' }}
                      >
                        भोजन समन्वय पूछें
                      </Button>

                      <Button
                        variant="outlined"
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ borderColor: '#059669', color: '#065F46', minWidth: 44, px: 1.2 }}
                      >
                        <MessageCircle size={18} />
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <CTASection onOpenEnquiry={onOpenEnquiry} />

      </Container>
    </Box>
  );
}
