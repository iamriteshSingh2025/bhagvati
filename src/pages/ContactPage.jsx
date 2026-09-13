import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  MenuItem,
  Alert,
  Stack,
  Chip,
  Divider,
} from '@mui/material';
import { PhoneCall, MessageCircle, MapPin, Mail, Sparkles, Shield, Clock } from 'lucide-react';
import { BRAND_INFO } from '../data/pilgrimageData';
import { saveLead, formatWhatsAppMessage } from '../utils/leadStore';
import EmergencyHelpCard from '../components/EmergencyHelpCard';
import DisclaimerBanner from '../components/DisclaimerBanner';
import confetti from 'canvas-confetti';

const SERVICE_OPTIONS = [
  'दर्शन सहायता',
  'विशेष / VIP दर्शन सहायता मार्गदर्शन',
  'वैदिक पूजा एवं पंडित जी',
  'माँ का श्रृंगार सेवा',
  'वरिष्ठ नागरिक एवं परिवार सहायता',
  'होटल एवं ठहरने की व्यवस्था',
  'भोजन व्यवस्था',
  'स्थानीय वाहन एवं स्टेशन पिकअप',
  'अन्य सामान्य जानकारी',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICE_OPTIONS[0],
    visitDate: '',
    visitors: '2',
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
      setError('कृपया नाम और मोबाइल नंबर अवश्य दर्ज करें।');
      return;
    }

    saveLead(formData);
    const url = formatWhatsAppMessage(formData);
    setWhatsappLink(url);
    setSubmitted(true);
    confetti({ particleCount: 70, spread: 60 });
  };

  return (
    <Box sx={{ py: { xs: 4, md: 7 }, backgroundColor: '#FBF7F0' }}>
      <Container maxWidth="xl">
        
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Chip
            icon={<PhoneCall size={16} color="#800000" />}
            label="तीर्थ सहायता केंद्र"
            sx={{ backgroundColor: 'rgba(128, 0, 0, 0.1)', color: '#800000', fontWeight: 700, mb: 1.5 }}
          />
          <Typography variant="h2" sx={{ fontWeight: 800, color: '#800000', fontSize: { xs: '1.9rem', md: '2.8rem' }, mb: 1.5 }}>
            हमसे संपर्क करें (Contact & Support)
          </Typography>
          <Typography variant="body1" sx={{ color: '#5C4941', maxWidth: 740, mx: 'auto', fontSize: '1.05rem' }}>
            माँ विंध्यवासिनी दर्शन, पूजा, पंडित जी, होटल एवं स्थानीय वाहन से जुड़े किसी भी प्रश्न या सहायता हेतु RAKA Mishra से तुरंत संपर्क करें।
          </Typography>
        </Box>

        <DisclaimerBanner sx={{ mb: 4 }} />

        <Grid container spacing={4} sx={{ mb: 6 }}>
          
          {/* Left Column: Direct Contact Details Card */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={2}
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: 4,
                backgroundColor: '#FFFFFF',
                border: '2px solid rgba(217, 119, 6, 0.25)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#800000', mb: 1 }}>
                प्रत्यक्ष संपर्क विवरण
              </Typography>
              <Typography variant="body2" sx={{ color: '#5C4941', mb: 3 }}>
                अभिषेक मिश्रा (RAKA Mishra) • विंध्याचल तीर्थ सहायक
              </Typography>

              <Stack spacing={2.5} sx={{ mb: 4, flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <Box sx={{ width: 42, height: 42, borderRadius: 2.5, backgroundColor: 'rgba(128, 0, 0, 0.1)', color: '#800000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <PhoneCall size={20} />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#78655C', fontWeight: 600 }}>
                      सीधा फोन / हेल्पलाइन
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000' }}>
                      {BRAND_INFO.phoneFormatted}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#059669', fontWeight: 600 }}>
                      24 घंटे सहायता उपलब्ध
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <Box sx={{ width: 42, height: 42, borderRadius: 2.5, backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageCircle size={20} />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#78655C', fontWeight: 600 }}>
                      व्हाट्सएप सहायता
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#065F46' }}>
                      +91 8739000333
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#78655C' }}>
                      त्वरित संदेश व सूचना प्रेषण
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <Box sx={{ width: 42, height: 42, borderRadius: 2.5, backgroundColor: 'rgba(217, 119, 6, 0.12)', color: '#B45309', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#78655C', fontWeight: 600 }}>
                      स्थान / सेवा क्षेत्र
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#231815' }}>
                      {BRAND_INFO.location}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#78655C' }}>
                      माँ विंध्यवासिनी मंदिर परिक्षेत्र
                    </Typography>
                  </Box>
                </Box>
              </Stack>

              <Stack direction="row" spacing={1.5}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  href={`tel:${BRAND_INFO.phone}`}
                  startIcon={<PhoneCall size={18} />}
                  sx={{ py: 1.3, fontWeight: 700 }}
                >
                  Call Now
                </Button>

                <Button
                  fullWidth
                  variant="contained"
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<MessageCircle size={18} />}
                  sx={{ backgroundColor: '#25D366', color: '#FFF', py: 1.3, fontWeight: 700, '&:hover': { backgroundColor: '#1EBE5D' } }}
                >
                  WhatsApp
                </Button>
              </Stack>
            </Paper>
          </Grid>

          {/* Right Column: Contact Inquiry Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={2}
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: 4,
                backgroundColor: '#FFFFFF',
                border: '2px solid rgba(217, 119, 6, 0.25)',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#800000', mb: 1 }}>
                तीर्थ सहायता संदेश फॉर्म
              </Typography>
              <Typography variant="body2" sx={{ color: '#5C4941', mb: 3 }}>
                नीचे दिया फॉर्म भरें — हम आपसे शीघ्र संपर्क कर आपकी यात्रा की पूरी व्यवस्था करेंगे।
              </Typography>

              {submitted ? (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#059669', mb: 1.5 }}>
                    आपका संदेश प्राप्त हो गया है!
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#4A3B32', mb: 3 }}>
                    त्वरित प्रतिक्रिया के लिए कृपया नीचे दिए बटन से इसे व्हाट्सएप पर भेजें:
                  </Typography>
                  <Button
                    variant="contained"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<MessageCircle size={20} />}
                    sx={{ backgroundColor: '#25D366', color: '#FFF', fontWeight: 800, py: 1.4, px: 4 }}
                  >
                    WhatsApp पर अभी भेजें
                  </Button>
                </Box>
              ) : (
                <Box component="form" onSubmit={handleSubmit}>
                  {error && <Alert severity="error" sx={{ mb: 2.5 }}>{error}</Alert>}

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth required label="आपका नाम" name="name" value={formData.name} onChange={handleChange} size="small" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth required label="मोबाइल नंबर" name="phone" value={formData.phone} onChange={handleChange} size="small" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth select label="इच्छित सेवा" name="service" value={formData.service} onChange={handleChange} size="small">
                        {SERVICE_OPTIONS.map((s) => (
                          <MenuItem key={s} value={s}>{s}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <TextField fullWidth type="date" label="यात्रा तिथि" name="visitDate" value={formData.visitDate} onChange={handleChange} size="small" InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <TextField fullWidth type="number" label="कुल सदस्य" name="visitors" value={formData.visitors} onChange={handleChange} size="small" inputProps={{ min: 1 }} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth multiline rows={3} label="आपका संदेश या आवश्यकता" name="message" value={formData.message} onChange={handleChange} placeholder="विस्तार से अपनी जरूरत लिखें..." size="small" />
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 3 }}>
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={{ py: 1.3, fontWeight: 800, fontSize: '1rem' }}>
                      संदेश भेजें
                    </Button>
                  </Box>
                </Box>
              )}
            </Paper>
          </Grid>

        </Grid>

        {/* Emergency Card */}
        <EmergencyHelpCard />

      </Container>
    </Box>
  );
}
