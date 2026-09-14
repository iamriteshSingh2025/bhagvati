import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  MenuItem,
  Typography,
  Box,
  IconButton,
  Alert,
  Fade,
} from '@mui/material';
import { X as CloseIcon, MessageCircle, PhoneCall, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveLead, formatWhatsAppMessage } from '../utils/leadStore';
import { BRAND_INFO } from '../data/pilgrimageData';

const SERVICE_OPTIONS = [
  'प्रातः दर्शन (सुबह 5-8 बजे, 0 दक्षिणा - गेट नं. 5 हनुमान गली)',
  'होटल AC रूम (₹1,100 विशेष ऑफर)',
  'प्रसाद व बड़ी दिव्य माला सेवा (₹121)',
  'मुंडन संस्कार एवं नाई (Barber) सेवा',
  'सामान्य दर्शन सहायता',
  'विशेष / VIP दर्शन सहायता मार्गदर्शन',
  'वैदिक पूजा (संकल्प / सप्तशती / हवन)',
  'विद्वान पंडित जी समन्वय',
  'माँ का श्रृंगार सेवा',
  'वरिष्ठ नागरिक एवं परिवार सहायता',
  'होटल एवं धर्मशाला स्टे',
  'शुद्ध शाकाहारी भोजन व्यवस्था',
  'स्थानीय वाहन (स्टेशन पिकअप / त्रिकोण यात्रा)',
  'संपूर्ण तीर्थ पैकेज समन्वय',
];

export default function EnquiryModal({ open, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || SERVICE_OPTIONS[0],
    visitDate: '',
    visitors: '2',
    seniorCount: '0',
    childrenCount: '0',
    specialRequests: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('कृपया अपना नाम और मोबाइल नंबर अवश्य दर्ज करें।');
      return;
    }
    if (formData.phone.replace(/\D/g, '').length < 10) {
      setError('कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।');
      return;
    }

    setError('');
    // Save to local leads database
    saveLead(formData);

    // Format WhatsApp query URL
    const url = formatWhatsAppMessage(formData);
    setWhatsappLink(url);
    setSubmitted(true);

    // Trigger celebration confetti
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleResetAndClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          backgroundColor: '#FFFDF8',
          border: '2px solid rgba(217, 119, 6, 0.3)',
          boxShadow: '0 20px 60px rgba(128, 0, 0, 0.25)',
          overflow: 'hidden',
        },
      }}
    >
      {/* Modal Header */}
      <DialogTitle
        sx={{
          background: 'linear-gradient(135deg, #800000 0%, #5E0000 100%)',
          color: '#FFFDF8',
          py: 2,
          px: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              backgroundColor: 'rgba(253, 230, 138, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FDE68A',
            }}
          >
            <Sparkles size={20} />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.15rem', color: '#FFFDF8', lineHeight: 1.2 }}>
              तीर्थ सहायता अनुरोध भेजें
            </Typography>
            <Typography variant="caption" sx={{ color: '#FDE68A', fontSize: '0.75rem' }}>
              RAKA Mishra (8739000333) • विंध्याचल स्थानीय सहायता
            </Typography>
          </Box>
        </Box>
        <IconButton onClick={handleResetAndClose} sx={{ color: '#FDE68A' }}>
          <CloseIcon size={20} />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: { xs: 2.5, sm: 3 } }}>
        {submitted ? (
          <Fade in={submitted}>
            <Box sx={{ textAlign: 'center', py: 3, px: 1 }}>
              <Box
                sx={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2,
                }}
              >
                <CheckCircle size={44} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#800000', mb: 1 }}>
                अनुरोध सफलतापूर्वक दर्ज हुआ!
              </Typography>
              <Typography variant="body1" sx={{ color: '#4A3B32', mb: 3, fontSize: '0.98rem', lineHeight: 1.6 }}>
                जय माँ विंध्यवासिनी! आपकी सेवा का अनुरोध प्राप्त हो गया है। शीघ्र संपर्क व त्वरित पुष्टि के लिए आप इसे सीधे व्हाट्सएप पर भेज सकते हैं:
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, maxWidth: 360, mx: 'auto' }}>
                <Button
                  variant="contained"
                  fullWidth
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<MessageCircle size={20} />}
                  sx={{
                    backgroundColor: '#25D366',
                    color: '#FFF',
                    fontWeight: 700,
                    py: 1.4,
                    fontSize: '1rem',
                    boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                    '&:hover': {
                      backgroundColor: '#1EBE5D',
                    }
                  }}
                >
                  WhatsApp पर अभी भेजें
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  href={`tel:${BRAND_INFO.phone}`}
                  startIcon={<PhoneCall size={18} />}
                  sx={{
                    borderColor: '#800000',
                    color: '#800000',
                    fontWeight: 700,
                    py: 1.2,
                  }}
                >
                  सीधे कॉल करें (8739000333)
                </Button>

                <Button
                  onClick={handleResetAndClose}
                  sx={{ color: '#78655C', fontSize: '0.88rem', mt: 1 }}
                >
                  बंद करें
                </Button>
              </Box>
            </Box>
          </Fade>
        ) : (
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            {error && (
              <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>
                {error}
              </Alert>
            )}

            <Box sx={{ p: 1.5, mb: 2, borderRadius: 2, backgroundColor: 'rgba(217, 119, 6, 0.08)', border: '1px solid rgba(217, 119, 6, 0.2)' }}>
              <Typography variant="caption" sx={{ color: '#92400E', fontWeight: 600, display: 'block', lineHeight: 1.4 }}>
                * यह एक निजी सहायता सेवा है। सभी सेवाएं उपलब्धता एवं मंदिर के वर्तमान नियमों पर निर्भर हैं।
              </Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="आपका शुभ नाम (Full Name)"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="उदा. राहुल शर्मा"
                  size="small"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="मोबाइल नंबर (Mobile No.)"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10 अंकों का नंबर"
                  size="small"
                  inputProps={{ maxLength: 12 }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="आवश्यक सेवा (Service Required)"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  size="small"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <MenuItem key={opt} value={opt}>
                      {opt}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="संभावित दर्शन तिथि (Visit Date)"
                  name="visitDate"
                  value={formData.visitDate}
                  onChange={handleChange}
                  size="small"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  fullWidth
                  type="number"
                  label="कुल सदस्य"
                  name="visitors"
                  value={formData.visitors}
                  onChange={handleChange}
                  size="small"
                  inputProps={{ min: 1 }}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  fullWidth
                  type="number"
                  label="वरिष्ठ जन"
                  name="seniorCount"
                  value={formData.seniorCount}
                  onChange={handleChange}
                  size="small"
                  inputProps={{ min: 0 }}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  fullWidth
                  type="number"
                  label="छोटे बच्चे"
                  name="childrenCount"
                  value={formData.childrenCount}
                  onChange={handleChange}
                  size="small"
                  inputProps={{ min: 0 }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="विशेष आवश्यकता (उदा. व्हीलचेयर, एसी रूम, स्टेशन पिकअप)"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="यदि कोई विशेष व्यवस्था चाहिए तो लिखें..."
                  size="small"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  label="संदेश या अन्य विवरण (Message)"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="आपकी यात्रा से जुड़ी कोई अन्य जानकारी..."
                  size="small"
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 3, display: 'flex', gap: 1.5 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<Sparkles size={18} />}
                sx={{ py: 1.2, fontWeight: 700, fontSize: '0.96rem' }}
              >
                दर्शन सहायता अनुरोध भेजें
              </Button>
            </Box>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
