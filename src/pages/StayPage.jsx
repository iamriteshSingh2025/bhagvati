import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Paper,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Stack,
} from '@mui/material';
import { Hotel, Filter, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { DEMO_HOTELS } from '../data/pilgrimageData';
import HotelCard from '../components/HotelCard';
import CTASection from '../components/CTASection';
import DisclaimerBanner from '../components/DisclaimerBanner';

export default function StayPage({ onOpenEnquiry }) {
  const [filterType, setFilterType] = useState('ALL');
  const [onlyAC, setOnlyAC] = useState(false);
  const [onlyParking, setOnlyParking] = useState(false);

  const filteredHotels = DEMO_HOTELS.filter((hotel) => {
    if (filterType !== 'ALL') {
      if (filterType === 'Dharamshala' && !hotel.type.includes('Dharamshala')) return false;
      if (filterType === 'Budget' && !hotel.priceCategory.includes('Budget') && !hotel.priceCategory.includes('Special')) return false;
      if (filterType === 'Premium' && !hotel.priceCategory.includes('Premium')) return false;
    }
    if (onlyAC && !hotel.hasAC) return false;
    if (onlyParking && !hotel.hasParking) return false;
    return true;
  });

  return (
    <Box sx={{ py: { xs: 4, md: 7 }, backgroundColor: '#FBF7F0' }}>
      <Container maxWidth="xl">
        
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Chip
            icon={<Hotel size={16} color="#800000" />}
            label="ठहरने की व्यवस्था (Demo Directory)"
            sx={{ backgroundColor: 'rgba(128, 0, 0, 0.1)', color: '#800000', fontWeight: 700, mb: 1.5 }}
          />
          <Typography variant="h2" sx={{ fontWeight: 800, color: '#800000', fontSize: { xs: '1.9rem', md: '2.8rem' }, mb: 1.5 }}>
            विंध्याचल में कहाँ ठहरें?
          </Typography>
          <Typography variant="body1" sx={{ color: '#5C4941', maxWidth: 720, mx: 'auto', fontSize: '1.05rem' }}>
            मंदिर व रेलवे स्टेशन के समीप स्वच्छ, सुरक्षित व परिवार अनुकूल होटल, गेस्ट हाउस एवं धर्मशाला विकल्प।
          </Typography>
        </Box>

        <DisclaimerBanner sx={{ mb: 4 }} />

        {/* Special AC Room ₹1,100 Offer Banner */}
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2.5, sm: 3.5 },
            mb: 4,
            borderRadius: 4,
            background: 'linear-gradient(135deg, #FFFDF8 0%, #FEF3C7 100%)',
            border: '2px solid #D97706',
            boxShadow: '0 8px 24px rgba(217, 119, 6, 0.15)',
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }} flexWrap="wrap">
                <Chip
                  icon={<Hotel size={16} color="#FFF" />}
                  label="विशेष होटल AC रूम ऑफर"
                  sx={{ backgroundColor: '#D97706', color: '#FFF', fontWeight: 800, fontSize: '0.82rem' }}
                />
                <Chip
                  label="💰 मात्र ₹1,100 / रात्रि"
                  sx={{ backgroundColor: '#800000', color: '#FFF', fontWeight: 800, fontSize: '0.82rem' }}
                />
                <Chip
                  label="मंदिर व गेट नं. 5 के समीप"
                  sx={{ backgroundColor: 'rgba(5, 150, 105, 0.15)', color: '#065F46', fontWeight: 800, fontSize: '0.82rem' }}
                />
              </Stack>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#800000', mb: 1, fontSize: { xs: '1.3rem', sm: '1.7rem' } }}>
                विंध्याचल में मात्र ₹1,100 में स्वच्छ व सुरक्षित AC रूम
              </Typography>
              <Typography variant="body1" sx={{ color: '#4A3B32', lineHeight: 1.7, mb: 1.5 }}>
                माँ विंध्यवासिनी मंदिर एवं गेट नंबर 5 (हनुमान गली) के समीप सुविधाजनक, स्वच्छ व पारिवारिक वातानुकूलित (AC) कमरा। 24 घंटे गर्म पानी, लिफ्ट व फ्री वाई-फाई सुविधा।
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Typography variant="caption" sx={{ color: '#059669', fontWeight: 700 }}>✓ एसी / नॉन-एसी विकल्प उपलब्ध</Typography>
                <Typography variant="caption" sx={{ color: '#059669', fontWeight: 700 }}>✓ परिवार व वरिष्ठ नागरिकों हेतु सुरक्षित</Typography>
                <Typography variant="caption" sx={{ color: '#059669', fontWeight: 700 }}>✓ मंदिर से 200 मीटर दूरी</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'center' } }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => onOpenEnquiry && onOpenEnquiry('होटल AC रूम (₹1,100 विशेष ऑफर)')}
                sx={{ py: 1.5, px: 3.5, fontWeight: 800, fontSize: '1.02rem', borderRadius: 3, width: { xs: '100%', sm: 'auto' } }}
              >
                ₹1,100 AC रूम बुक / पूछें
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Filters Bar */}
        <Paper
          elevation={1}
          sx={{
            p: 2.5,
            borderRadius: 3.5,
            backgroundColor: '#FFFFFF',
            border: '1.5px solid rgba(217, 119, 6, 0.2)',
            mb: 4,
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="small">
                <InputLabel>श्रेणी (Category)</InputLabel>
                <Select value={filterType} label="श्रेणी (Category)" onChange={(e) => setFilterType(e.target.value)}>
                  <MenuItem value="ALL">सभी आवास (All Types)</MenuItem>
                  <MenuItem value="Dharamshala">धर्मशाला एवं ग्रुप हॉल</MenuItem>
                  <MenuItem value="Budget">बजट होटल (Budget Lodges)</MenuItem>
                  <MenuItem value="Premium">प्रीमियम होटल (Premium)</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} sm={4}>
              <FormControlLabel
                control={<Checkbox checked={onlyAC} onChange={(e) => setOnlyAC(e.target.checked)} color="primary" />}
                label="केवल AC रूम्स"
              />
            </Grid>

            <Grid item xs={6} sm={4}>
              <FormControlLabel
                control={<Checkbox checked={onlyParking} onChange={(e) => setOnlyParking(e.target.checked)} color="primary" />}
                label="कार पार्किंग उपलब्ध"
              />
            </Grid>
          </Grid>
        </Paper>

        {/* Hotels Grid */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={hotel.id}>
                <HotelCard hotel={hotel} onOpenEnquiry={onOpenEnquiry} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Paper sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
                <Typography variant="h6" sx={{ color: '#800000', mb: 1 }}>
                  चुने गए फ़िल्टर के अनुसार कोई होटल नहीं मिला
                </Typography>
                <Button variant="outlined" onClick={() => { setFilterType('ALL'); setOnlyAC(false); setOnlyParking(false); }}>
                  फ़िल्टर रीसेट करें
                </Button>
              </Paper>
            </Grid>
          )}
        </Grid>

        <CTASection onOpenEnquiry={onOpenEnquiry} />

      </Container>
    </Box>
  );
}
