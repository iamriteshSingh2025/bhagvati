import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip, Card, CardContent, Button, Stack } from '@mui/material';
import { Bell, Calendar, Clock, AlertTriangle, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { LIVE_NOTICES, FESTIVALS, BRAND_INFO } from '../data/pilgrimageData';
import CTASection from '../components/CTASection';
import DisclaimerBanner from '../components/DisclaimerBanner';

export default function NoticesPage({ onOpenEnquiry }) {
  return (
    <Box sx={{ py: { xs: 4, md: 7 }, backgroundColor: '#FBF7F0' }}>
      <Container maxWidth="xl">
        
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Chip
            icon={<Bell size={16} color="#800000" />}
            label="दैनिक सूचना एवं पर्व जानकारी"
            sx={{ backgroundColor: 'rgba(128, 0, 0, 0.1)', color: '#800000', fontWeight: 700, mb: 1.5 }}
          />
          <Typography variant="h2" sx={{ fontWeight: 800, color: '#800000', fontSize: { xs: '1.9rem', md: '2.8rem' }, mb: 1.5 }}>
            आज की महत्वपूर्ण जानकारी एवं उत्सव सूचना
          </Typography>
          <Typography variant="body1" sx={{ color: '#5C4941', maxWidth: 740, mx: 'auto', fontSize: '1.05rem' }}>
            मंदिर आरती समय, रोपवे संचालन, भीड़ अपडेट, नवरात्र महामहोत्सव गाइडलाइन्स एवं तीर्थ यात्री परामर्श।
          </Typography>
        </Box>

        <DisclaimerBanner sx={{ mb: 4 }} />

        {/* Live Notices Feed */}
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#800000', mb: 3 }}>
          दैनिक मंदिर व दर्शन सूचनाएं
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {LIVE_NOTICES.map((notice) => (
            <Grid item xs={12} md={4} key={notice.id}>
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 3.5,
                  height: '100%',
                  backgroundColor: '#FFFFFF',
                  border: notice.isUrgent ? '2px solid #DC2626' : '1.5px solid rgba(217, 119, 6, 0.2)',
                  boxShadow: notice.isUrgent ? '0 8px 24px rgba(220, 38, 38, 0.12)' : 'none',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                  <Chip
                    label={notice.tag}
                    size="small"
                    sx={{
                      backgroundColor: notice.isUrgent ? '#FEE2E2' : '#F5ECE1',
                      color: notice.isUrgent ? '#DC2626' : '#800000',
                      fontWeight: 700,
                    }}
                  />
                  <Typography variant="caption" sx={{ color: '#8C776D', fontWeight: 600 }}>
                    {notice.date}
                  </Typography>
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000', mb: 1, fontSize: '1.15rem' }}>
                  {notice.title}
                </Typography>

                <Typography variant="body2" sx={{ color: '#4A3B32', lineHeight: 1.7 }}>
                  {notice.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Festival & Navratri Guide */}
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#800000', mb: 3 }}>
          प्रमुख पर्व एवं नवरात्र मेला मार्गदर्शिका
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {FESTIVALS.map((fest, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card sx={{ height: '100%', borderRadius: 3.5, border: '1.5px solid rgba(217, 119, 6, 0.2)' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#D97706', mb: 1 }}>
                    <Calendar size={16} />
                    <Typography variant="caption" sx={{ fontWeight: 700 }}>
                      {fest.period}
                    </Typography>
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000', mb: 1 }}>
                    {fest.name}
                  </Typography>

                  <Typography variant="body2" sx={{ color: '#4A3B32', mb: 2, lineHeight: 1.6 }}>
                    {fest.significance}
                  </Typography>

                  <Box sx={{ p: 1.5, borderRadius: 2, backgroundColor: '#FFFBEB', border: '1px solid rgba(217, 119, 6, 0.2)' }}>
                    <Typography variant="caption" sx={{ color: '#92400E', fontWeight: 600, display: 'block' }}>
                      💡 <strong>तीर्थ यात्री सलाह:</strong> {fest.tips}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <CTASection onOpenEnquiry={onOpenEnquiry} />

      </Container>
    </Box>
  );
}
