import React from 'react';
import { Box, Container, Typography, Grid, Chip, Paper, Button, Stack } from '@mui/material';
import { Navigation, Sparkles, MapPin, Compass, Clock, CheckCircle2 } from 'lucide-react';
import TempleCircuitMap from '../components/TempleCircuitMap';
import PanoramaViewer from '../components/PanoramaViewer';
import CTASection from '../components/CTASection';
import DisclaimerBanner from '../components/DisclaimerBanner';

export default function CircuitPage({ onOpenEnquiry }) {
  return (
    <Box sx={{ py: { xs: 4, md: 7 }, backgroundColor: '#FBF7F0' }}>
      <Container maxWidth="xl">
        
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Chip
            icon={<Navigation size={16} color="#800000" />}
            label="पवित्र त्रिकोण यात्रा"
            sx={{ backgroundColor: 'rgba(128, 0, 0, 0.1)', color: '#800000', fontWeight: 700, mb: 1.5 }}
          />
          <Typography variant="h2" sx={{ fontWeight: 800, color: '#800000', fontSize: { xs: '1.9rem', md: '2.8rem' }, mb: 1.5 }}>
            विंध्याचल त्रिकोण परिक्रमा गाइड
          </Typography>
          <Typography variant="body1" sx={{ color: '#5C4941', maxWidth: 740, mx: 'auto', fontSize: '1.05rem' }}>
            विंध्य पर्वतमाला में स्थित तीनों महाशक्तियों — माँ विंध्यवासिनी, माँ काली खोह और माँ अष्टभुजा की संपूर्ण परिक्रमा विधि, क्रम एवं समय प्रबंधन।
          </Typography>
        </Box>

        <DisclaimerBanner sx={{ mb: 4 }} />

        {/* Interactive Map/Step Viewer */}
        <TempleCircuitMap onOpenEnquiry={onOpenEnquiry} />

        {/* 360 Visuals */}
        <PanoramaViewer />

        {/* Recommended Itinerary */}
        <Paper
          elevation={1}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            backgroundColor: '#FFFFFF',
            border: '2px solid rgba(217, 119, 6, 0.25)',
            my: 6,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#800000', mb: 3, textAlign: 'center' }}>
            आदर्श 1-दिवसीय त्रिकोण परिक्रमा योजना (Sample Itinerary)
          </Typography>

          <Grid container spacing={3}>
            {[
              { time: '05:30 AM - 07:00 AM', title: 'पक्का घाट पर पावन गंगा स्नान व संकल्प', desc: 'गंगा तट पर पवित्र स्नान एवं दर्शन हेतु संकल्प ग्रहण।' },
              { time: '07:00 AM - 09:00 AM', title: 'माँ विंध्यवासिनी मुख्य मंदिर दर्शन व पूजन', desc: 'महालक्ष्मी स्वरूप माँ विंध्यवासिनी का चरण दर्शन एवं प्रसाद अर्पण।' },
              { time: '09:30 AM - 11:00 AM', title: 'काली खोह गुफा मंदिर दर्शन', desc: 'पहाड़ी मार्ग से माँ महाकाली की गुफा में दर्शन व तांत्रिक शक्तिपीठ दर्शन।' },
              { time: '11:30 AM - 01:30 PM', title: 'माँ अष्टभुजा देवी दर्शन (रोपवे / सीढ़ी)', desc: 'महासरस्वती स्वरूप माँ अष्टभुजा व गेरुआ तालाब का विहंगम दृश्य।' },
              { time: '02:00 PM - 03:30 PM', title: 'शुद्ध शाकाहारी सात्विक महाप्रसाद / भोजन', desc: 'विंध्य क्षेत्र के भोजनालय में परिवार सहित विश्राम व प्रसाद ग्रहण।' },
            ].map((slot, i) => (
              <Grid item xs={12} md={6} key={i}>
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    backgroundColor: '#FFFDF8',
                    border: '1.5px solid rgba(217, 119, 6, 0.2)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 2,
                      backgroundColor: 'rgba(128, 0, 0, 0.1)',
                      color: '#800000',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {slot.time}
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#800000', mb: 0.5 }}>
                      {slot.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#5C4941', fontSize: '0.9rem' }}>
                      {slot.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        <CTASection onOpenEnquiry={onOpenEnquiry} />

      </Container>
    </Box>
  );
}
