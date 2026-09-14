import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Paper,
  TextField,
  MenuItem,
  Alert,
  Divider,
  Stack,
} from '@mui/material';
import {
  Sparkles,
  Crown,
  ShieldCheck,
  HeartHandshake,
  Clock,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  AlertTriangle,
} from 'lucide-react';
import { BRAND_INFO } from '../data/pilgrimageData';
import { IMAGES } from '../utils/assets';
import { saveLead, formatWhatsAppMessage } from '../utils/leadStore';
import DisclaimerBanner from '../components/DisclaimerBanner';
import CTASection from '../components/CTASection';
import confetti from 'canvas-confetti';

const DARSHAN_TYPES = [
  'प्रातः दर्शन (सुबह 5-8 बजे, 0 दक्षिणा - गेट नं. 5 हनुमान गली)',
  'सामान्य दर्शन सहायता (General Queue)',
  'विशेष / VIP दर्शन सहायता मार्गदर्शन',
  'वरिष्ठ नागरिक सुगम दर्शन',
  'दिव्यांगजन / व्हीलचेयर सहायता',
  'परिवार एवं बाल सुगम दर्शन',
];

export default function DarshanPage({ onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'विशेष / VIP दर्शन सहायता मार्गदर्शन',
    visitDate: '',
    visitors: '2',
    seniorCount: '0',
    childrenCount: '0',
    specialRequirements: '',
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

    saveLead(formData);
    const url = formatWhatsAppMessage(formData);
    setWhatsappLink(url);
    setSubmitted(true);
    confetti({ particleCount: 60, spread: 60 });
  };

  return (
    <Box sx={{ py: { xs: 4, md: 7 }, backgroundColor: '#FBF7F0' }}>
      <Container maxWidth="xl">
        
        {/* Header Banner */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Chip
            icon={<Sparkles size={16} color="#800000" />}
            label="मंगलम विंध्याचल धाम — दर्शन सेवा"
            sx={{ backgroundColor: 'rgba(128, 0, 0, 0.1)', color: '#800000', fontWeight: 700, mb: 1.5 }}
          />
          <Typography variant="h2" sx={{ fontWeight: 800, color: '#800000', fontSize: { xs: '1.9rem', md: '2.8rem' }, mb: 1.5 }}>
            विंध्याचल दर्शन सहायता एवं मार्गदर्शन
          </Typography>
          <Typography variant="body1" sx={{ color: '#5C4941', maxWidth: 740, mx: 'auto', fontSize: '1.05rem' }}>
            माँ के दरबार में दर्शन को सुगम व शांतिपूर्ण बनाने हेतु स्थानीय समन्वय, वरिष्ठ नागरिक सहयोग एवं मार्ग सहायता।
          </Typography>
        </Box>

        <DisclaimerBanner sx={{ mb: 4 }} />

        {/* Special Website Darshan Offer: 5-8 AM, Gate 5 Hanuman Gali, 0 Dakshina */}
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2.5, sm: 4 },
            mb: 5,
            borderRadius: 4,
            background: 'linear-gradient(135deg, #FFFDF8 0%, #FEF3C7 100%)',
            border: '2px solid #D97706',
            boxShadow: '0 10px 30px rgba(217, 119, 6, 0.15)',
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }} flexWrap="wrap">
                <Chip
                  icon={<Clock size={16} color="#FFF" />}
                  label="सुबह 5:00 से 8:00 बजे दर्शन"
                  sx={{ backgroundColor: '#059669', color: '#FFF', fontWeight: 800, fontSize: '0.82rem' }}
                />
                <Chip
                  icon={<Sparkles size={16} color="#FFF" />}
                  label="0 दक्षिणा (कोई दक्षिणा नहीं)"
                  sx={{ backgroundColor: '#800000', color: '#FFF', fontWeight: 800, fontSize: '0.82rem' }}
                />
                <Chip
                  label="📍 प्रवेश: गेट नंबर 5, हनुमान गली"
                  sx={{ backgroundColor: 'rgba(217, 119, 6, 0.2)', color: '#92400E', fontWeight: 800, fontSize: '0.82rem' }}
                />
              </Stack>

              <Typography variant="h4" sx={{ fontWeight: 800, color: '#800000', mb: 1.5, fontSize: { xs: '1.4rem', sm: '1.8rem' } }}>
                वेबसाइट श्रद्धालुओं हेतु प्रातः दर्शन विशेष सुविधा
              </Typography>
              <Typography variant="body1" sx={{ color: '#4A3B32', lineHeight: 1.8, fontSize: '1.02rem', mb: 2 }}>
                जो भी श्रद्धालु इस वेबसाइट के माध्यम से दर्शन हेतु संपर्क करेंगे, उनसे <strong>सुबह 5:00 AM से 8:00 AM</strong> के मध्य दर्शन सहायता हेतु कोई दक्षिणा शुल्क नहीं लिया जाएगा। <strong>जो भी दान-पुण्य करना हो, सीधे माई (माँ विंध्यवासिनी) के चरणों में करें!</strong>
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#065F46', fontWeight: 700, fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="#059669" />
                  <span>प्रवेश द्वार: गेट नंबर 5, हनुमान गली</span>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#065F46', fontWeight: 700, fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="#059669" />
                  <span>शून्य दक्षिणा (100% पारदर्शी)</span>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#065F46', fontWeight: 700, fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="#059669" />
                  <span>दान केवल माई के चरणों में</span>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'center' } }}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={() => onOpenEnquiry && onOpenEnquiry('प्रातः दर्शन (सुबह 5-8 बजे, 0 दक्षिणा - गेट नं. 5 हनुमान गली)')}
                sx={{ py: 1.6, px: 4, fontWeight: 800, fontSize: '1.05rem', borderRadius: 3, width: { xs: '100%', sm: 'auto' } }}
              >
                प्रातः दर्शन हेतु संपर्क करें
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* 3 Core Darshan Pillars */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          
          {/* 1. General Darshan */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', borderRadius: 3.5, border: '1.5px solid rgba(217, 119, 6, 0.2)' }}>
              <Box sx={{ height: 180, overflow: 'hidden' }}>
                <CardMedia component="img" height="100%" image={IMAGES.templeExterior} alt="सामान्य दर्शन" sx={{ objectFit: 'cover' }} />
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#800000', mb: 1 }}>
                  सामान्य दर्शन सहायता
                </Typography>
                <Typography variant="body2" sx={{ color: '#4A3B32', mb: 2, lineHeight: 1.7 }}>
                  कतार में लगने का सही समय, सुरक्षित जूता स्टैंड, गंगा स्नान व प्रवेश द्वार का उचित मार्गदर्शन।
                </Typography>
                <Box sx={{ mb: 2.5 }}>
                  <Typography variant="caption" sx={{ color: '#059669', fontWeight: 700, display: 'block', mb: 0.5 }}>
                    ✓ भीड़ से बचने का समय सलाह
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#059669', fontWeight: 700, display: 'block' }}>
                    ✓ कतार व प्रवेश द्वार मार्गदर्शन
                  </Typography>
                </Box>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('सामान्य दर्शन सहायता')}
                  sx={{ fontWeight: 700 }}
                >
                  जानकारी प्राप्त करें
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* 2. Special / VIP Darshan Guidance */}
          <Grid item xs={12} md={4} id="vip">
            <Card sx={{ height: '100%', borderRadius: 3.5, border: '2px solid #D97706', boxShadow: '0 8px 28px rgba(217, 119, 6, 0.18)' }}>
              <Box sx={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                <CardMedia component="img" height="100%" image={IMAGES.templeExterior} alt="मंदिर भवन" sx={{ objectFit: 'cover' }} />
                <Chip
                  label="व्यवस्था अनुसार"
                  size="small"
                  sx={{ position: 'absolute', top: 12, right: 12, backgroundColor: '#D97706', color: '#FFF', fontWeight: 700 }}
                />
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#800000', mb: 1 }}>
                  विशेष / VIP दर्शन सहायता
                </Typography>
                <Typography variant="body2" sx={{ color: '#4A3B32', mb: 2, lineHeight: 1.7 }}>
                  मंदिर प्रशासन एवं सुरक्षा नियमावली के अंतर्गत सुगम व कम समय में दर्शन हेतु मार्गदर्शन।
                </Typography>

                <Box sx={{ p: 1.5, borderRadius: 2, backgroundColor: '#FFFBEB', border: '1px dashed #D97706', mb: 2 }}>
                  <Typography variant="caption" sx={{ color: '#92400E', fontWeight: 600, display: 'block' }}>
                    ⚠️ <strong>महत्वपूर्ण नियम:</strong> "विशेष दर्शन/प्रवेश की उपलब्धता मंदिर की वर्तमान व्यवस्था एवं नियमों पर निर्भर करेगी।"
                  </Typography>
                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('विशेष / VIP दर्शन सहायता मार्गदर्शन')}
                  sx={{ fontWeight: 800 }}
                >
                  उपलब्धता पूछें
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* 3. Senior & Divyangjan Assistance */}
          <Grid item xs={12} md={4} id="senior">
            <Card sx={{ height: '100%', borderRadius: 3.5, border: '1.5px solid rgba(5, 150, 105, 0.3)' }}>
              <Box sx={{ height: 180, overflow: 'hidden' }}>
                <CardMedia component="img" height="100%" image={IMAGES.matajiShringar} alt="वरिष्ठ नागरिक सहायता" sx={{ objectFit: 'cover' }} />
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#065F46', mb: 1 }}>
                  वरिष्ठ नागरिक व दिव्यांग सहायता
                </Typography>
                <Typography variant="body2" sx={{ color: '#4A3B32', mb: 2, lineHeight: 1.7 }}>
                  बुजुर्गों, चलने में असमर्थ श्रद्धालुओं एवं छोटे बच्चों वाले परिवारों के लिए व्हीलचेयर समन्वय व सुगम सहयोग।
                </Typography>
                <Box sx={{ mb: 2.5 }}>
                  <Typography variant="caption" sx={{ color: '#059669', fontWeight: 700, display: 'block', mb: 0.5 }}>
                    ✓ व्हीलचेयर उपलब्धता जानकारी
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#059669', fontWeight: 700, display: 'block' }}>
                    ✓ कम सीढ़ियों वाला सुगम मार्ग
                  </Typography>
                </Box>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: '#059669', color: '#FFF', fontWeight: 700, '&:hover': { backgroundColor: '#047857' } }}
                  onClick={() => onOpenEnquiry && onOpenEnquiry('वरिष्ठ नागरिक एवं दिव्यांग सहायता')}
                >
                  परिवार सहायता लें
                </Button>
              </CardContent>
            </Card>
          </Grid>

        </Grid>

        {/* Dedicated Darshan Enquiry Form Section */}
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
              दर्शन सहायता अनुरोध फॉर्म
            </Typography>
            <Typography variant="body2" sx={{ color: '#5C4941' }}>
              अपनी यात्रा का विवरण दर्ज करें — RAKA Mishra सीधे संपर्क कर आपको सही मार्ग व व्यवस्था की जानकारी देंगे।
            </Typography>
          </Box>

          {submitted ? (
            <Box sx={{ textAlign: 'center', py: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#059669', mb: 1 }}>
                अनुरोध सफलतापूर्वक दर्ज हुआ!
              </Typography>
              <Typography variant="body2" sx={{ color: '#4A3B32', mb: 3 }}>
                त्वरित प्रतिक्रिया के लिए नीचे दिए बटन से सीधे व्हाट्सएप पर भेजें:
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
                  <TextField fullWidth required label="श्रद्धालु का नाम" name="name" value={formData.name} onChange={handleChange} size="small" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth required label="मोबाइल नंबर (WhatsApp)" name="phone" value={formData.phone} onChange={handleChange} size="small" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth select label="इच्छित दर्शन प्रकार" name="service" value={formData.service} onChange={handleChange} size="small">
                    {DARSHAN_TYPES.map((t) => (
                      <MenuItem key={t} value={t}>{t}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth type="date" label="दर्शन की तिथि" name="visitDate" value={formData.visitDate} onChange={handleChange} size="small" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item xs={4}>
                  <TextField fullWidth type="number" label="कुल सदस्य" name="visitors" value={formData.visitors} onChange={handleChange} size="small" inputProps={{ min: 1 }} />
                </Grid>
                <Grid item xs={4}>
                  <TextField fullWidth type="number" label="वरिष्ठ नागरिक" name="seniorCount" value={formData.seniorCount} onChange={handleChange} size="small" inputProps={{ min: 0 }} />
                </Grid>
                <Grid item xs={4}>
                  <TextField fullWidth type="number" label="छोटे बच्चे" name="childrenCount" value={formData.childrenCount} onChange={handleChange} size="small" inputProps={{ min: 0 }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="विशेष आवश्यकता (उदा. व्हीलचेयर, कम चलना)" name="specialRequirements" value={formData.specialRequirements} onChange={handleChange} size="small" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth multiline rows={3} label="संदेश या अन्य प्रश्न" name="message" value={formData.message} onChange={handleChange} size="small" />
                </Grid>
              </Grid>

              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Button type="submit" variant="contained" color="primary" sx={{ py: 1.4, px: 5, fontWeight: 800, fontSize: '1.02rem' }}>
                  दर्शन सहायता अनुरोध भेजें
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
