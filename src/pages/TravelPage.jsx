import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Paper,
  TextField,
  MenuItem,
  Alert,
  Stack,
  Divider,
} from '@mui/material';
import { Car, Train, Plane, MapPin, PhoneCall, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { TRAVEL_GUIDE, BRAND_INFO } from '../data/pilgrimageData';
import { saveLead, formatWhatsAppMessage } from '../utils/leadStore';
import DisclaimerBanner from '../components/DisclaimerBanner';
import CTASection from '../components/CTASection';
import confetti from 'canvas-confetti';

const VEHICLE_TYPES = [
  'ई-रिक्शा (स्थानीय व त्रिकोण परिक्रमा)',
  'ऑटो रिक्शा (स्टेशन पिकअप/ड्रॉप)',
  'सेडान कार (Swift / Dzire)',
  'एसयूवी / बड़ी कार (Innova / Ertiga)',
  'टेम्पो ट्रैवलर (ग्रुप यात्रा)',
];

export default function TravelPage({ onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'स्थानीय वाहन एवं स्टेशन पिकअप',
    pickup: 'विंध्याचल / मिर्ज़ापुर रेलवे स्टेशन',
    drop: 'माँ विंध्यवासिनी मंदिर / होटल',
    visitDate: '',
    time: '',
    visitors: '4',
    vehicleType: VEHICLE_TYPES[0],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('कृपया नाम और मोबाइल नंबर दर्ज करें।');
      return;
    }

    saveLead({
      ...formData,
      specialRequests: `पिकअप: ${formData.pickup}, ड्रॉप: ${formData.drop}, समय: ${formData.time}, वाहन: ${formData.vehicleType}`,
    });

    const url = formatWhatsAppMessage({
      name: formData.name,
      phone: formData.phone,
      service: `वाहन सेवा (${formData.vehicleType})`,
      visitDate: formData.visitDate,
      visitors: formData.visitors,
      specialRequests: `पिकअप: ${formData.pickup} -> ड्रॉप: ${formData.drop} | समय: ${formData.time}`,
      message: formData.message,
    });

    setWhatsappLink(url);
    setSubmitted(true);
    confetti({ particleCount: 60, spread: 60 });
  };

  return (
    <Box sx={{ py: { xs: 4, md: 7 }, backgroundColor: '#FBF7F0' }}>
      <Container maxWidth="xl">
        
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Chip
            icon={<Car size={16} color="#800000" />}
            label="यात्रा मार्गदर्शिका एवं वाहन सहायता"
            sx={{ backgroundColor: 'rgba(128, 0, 0, 0.1)', color: '#800000', fontWeight: 700, mb: 1.5 }}
          />
          <Typography variant="h2" sx={{ fontWeight: 800, color: '#800000', fontSize: { xs: '1.9rem', md: '2.8rem' }, mb: 1.5 }}>
            विंध्याचल कैसे पहुँचें एवं स्थानीय वाहन
          </Typography>
          <Typography variant="body1" sx={{ color: '#5C4941', maxWidth: 740, mx: 'auto', fontSize: '1.05rem' }}>
            ट्रेन, सड़क व हवाई मार्ग से विंध्याचल पहुँचने की सम्पूर्ण जानकारी एवं रेलवे स्टेशन पिकअप/ड्रॉप, त्रिकोण परिक्रमा टैक्सी व ई-रिक्शा।
          </Typography>
        </Box>

        <DisclaimerBanner sx={{ mb: 4 }} />

        {/* Travel Guide: Train / Road / Air */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          
          {/* Train */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 3.5, height: '100%', border: '1.5px solid rgba(217, 119, 6, 0.2)', backgroundColor: '#FFFFFF' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ width: 44, height: 44, borderRadius: 2.5, backgroundColor: 'rgba(128, 0, 0, 0.1)', color: '#800000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Train size={24} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000' }}>
                  {TRAVEL_GUIDE.byTrain.title}
                </Typography>
              </Box>

              <Stack spacing={2}>
                {TRAVEL_GUIDE.byTrain.details.map((item, idx) => (
                  <Box key={idx} sx={{ p: 1.5, borderRadius: 2, backgroundColor: '#FFFDF8', border: '1px solid rgba(217, 119, 6, 0.15)' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#800000' }}>
                      {item.station}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#D97706', fontWeight: 700, display: 'block', mb: 0.3 }}>
                      {item.distance}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#5C4941', display: 'block' }}>
                      {item.notes}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>

          {/* Road */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 3.5, height: '100%', border: '1.5px solid rgba(217, 119, 6, 0.2)', backgroundColor: '#FFFFFF' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ width: 44, height: 44, borderRadius: 2.5, backgroundColor: 'rgba(217, 119, 6, 0.12)', color: '#B45309', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Car size={24} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000' }}>
                  {TRAVEL_GUIDE.byRoad.title}
                </Typography>
              </Box>

              <Stack spacing={2}>
                {TRAVEL_GUIDE.byRoad.details.map((item, idx) => (
                  <Box key={idx} sx={{ p: 1.5, borderRadius: 2, backgroundColor: '#FFFDF8', border: '1px solid rgba(217, 119, 6, 0.15)' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#800000' }}>
                      {item.route}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#D97706', fontWeight: 700, display: 'block', mb: 0.3 }}>
                      {item.distance}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#5C4941', display: 'block' }}>
                      {item.notes}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>

          {/* Air */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 3.5, height: '100%', border: '1.5px solid rgba(217, 119, 6, 0.2)', backgroundColor: '#FFFFFF' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ width: 44, height: 44, borderRadius: 2.5, backgroundColor: 'rgba(5, 150, 105, 0.12)', color: '#065F46', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Plane size={24} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000' }}>
                  {TRAVEL_GUIDE.byAir.title}
                </Typography>
              </Box>

              <Stack spacing={2}>
                {TRAVEL_GUIDE.byAir.details.map((item, idx) => (
                  <Box key={idx} sx={{ p: 1.5, borderRadius: 2, backgroundColor: '#FFFDF8', border: '1px solid rgba(217, 119, 6, 0.15)' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#800000' }}>
                      {item.airport}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#059669', fontWeight: 700, display: 'block', mb: 0.3 }}>
                      {item.distance}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#5C4941', display: 'block' }}>
                      {item.notes}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>

        </Grid>

        {/* Local Transport Enquiry Form */}
        <Paper
          elevation={2}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            backgroundColor: '#FFFFFF',
            border: '2px solid rgba(217, 119, 6, 0.25)',
            maxWidth: 880,
            mx: 'auto',
            mb: 7,
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#800000', mb: 1 }}>
              स्थानीय वाहन व पिकअप अनुरोध फॉर्म
            </Typography>
            <Typography variant="body2" sx={{ color: '#5C4941' }}>
              रेलवे स्टेशन, होटल अथवा त्रिकोण परिक्रमा हेतु वाहन समन्वय
            </Typography>
          </Box>

          {submitted ? (
            <Box sx={{ textAlign: 'center', py: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#059669', mb: 1 }}>
                वाहन अनुरोध दर्ज हुआ!
              </Typography>
              <Typography variant="body2" sx={{ color: '#4A3B32', mb: 3 }}>
                पुष्टि हेतु व्हाट्सएप पर सीधे संदेश भेजें:
              </Typography>
              <Button
                variant="contained"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<MessageCircle size={20} />}
                sx={{ backgroundColor: '#25D366', color: '#FFF', fontWeight: 800, py: 1.3, px: 4 }}
              >
                WhatsApp पर अभी भेजें
              </Button>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleSubmit}>
              {error && <Alert severity="error" sx={{ mb: 2.5 }}>{error}</Alert>}

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth required label="नाम" name="name" value={formData.name} onChange={handleChange} size="small" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth required label="मोबाइल नंबर" name="phone" value={formData.phone} onChange={handleChange} size="small" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="पिकअप स्थान (Pickup)" name="pickup" value={formData.pickup} onChange={handleChange} size="small" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="ड्रॉप स्थान (Drop)" name="drop" value={formData.drop} onChange={handleChange} size="small" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth select label="वाहन का प्रकार" name="vehicleType" value={formData.vehicleType} onChange={handleChange} size="small">
                    {VEHICLE_TYPES.map((v) => (
                      <MenuItem key={v} value={v}>{v}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField fullWidth type="date" label="तारीख" name="visitDate" value={formData.visitDate} onChange={handleChange} size="small" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <TextField fullWidth label="संभावित समय" name="time" value={formData.time} onChange={handleChange} placeholder="उदा. 09:30 AM" size="small" />
                </Grid>
                <Grid item xs={6} sm={12}>
                  <TextField fullWidth multiline rows={2} label="अन्य आवश्यकताएं (Message)" name="message" value={formData.message} onChange={handleChange} size="small" />
                </Grid>
              </Grid>

              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Button type="submit" variant="contained" color="primary" sx={{ py: 1.4, px: 5, fontWeight: 800, fontSize: '1.02rem' }}>
                  वाहन की जानकारी लें
                </Button>
              </Box>
            </Box>
          )}
        </Paper>

        <CTASection onOpenEnquiry={onOpenEnquiry} />

      </Container>
    </Box>
  );
}
