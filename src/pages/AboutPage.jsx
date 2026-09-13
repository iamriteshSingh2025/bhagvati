import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip, Button, Stack } from '@mui/material';
import { ShieldCheck, HeartHandshake, PhoneCall, MessageCircle, MapPin, Sparkles, UserCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/pilgrimageData';
import { IMAGES } from '../utils/assets';
import DisclaimerBanner from '../components/DisclaimerBanner';
import CTASection from '../components/CTASection';

export default function AboutPage({ onOpenEnquiry }) {
  return (
    <Box sx={{ py: { xs: 4, md: 7 }, backgroundColor: '#FBF7F0' }}>
      <Container maxWidth="lg">
        
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Chip
            icon={<UserCheck size={16} color="#800000" />}
            label="संस्थापक एवं सेवा परिचय"
            sx={{ backgroundColor: 'rgba(128, 0, 0, 0.1)', color: '#800000', fontWeight: 700, mb: 1.5 }}
          />
          <Typography variant="h2" sx={{ fontWeight: 800, color: '#800000', fontSize: { xs: '1.9rem', md: '2.8rem' }, mb: 1.5 }}>
            आपकी विंध्याचल यात्रा में स्थानीय सहायता
          </Typography>
          <Typography variant="body1" sx={{ color: '#5C4941', maxWidth: 740, mx: 'auto', fontSize: '1.05rem' }}>
            विंध्याचल के पावन धाम में श्रद्धालुओं के सुगम दर्शन, पूजन व प्रवास हेतु समर्पित व्यक्तिगत तीर्थ सहायता।
          </Typography>
        </Box>

        <DisclaimerBanner sx={{ mb: 4 }} />

        {/* Profile Details Card */}
        <Paper
          elevation={2}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            backgroundColor: '#FFFFFF',
            border: '2px solid rgba(217, 119, 6, 0.25)',
            mb: 6,
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  width: { xs: 180, sm: 220 },
                  height: { xs: 180, sm: 220 },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  mx: 'auto',
                  border: '4px solid #800000',
                  boxShadow: '0 12px 32px rgba(128, 0, 0, 0.2)',
                }}
              >
                <Box
                  component="img"
                  src={IMAGES.rakaMishraPortrait}
                  alt="अभिषेक मिश्रा (RAKA Mishra)"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 800, color: '#800000', mt: 2 }}>
                {BRAND_INFO.founder}
              </Typography>
              <Chip
                label={`Known as: ${BRAND_INFO.founderAlias}`}
                size="small"
                sx={{ backgroundColor: '#FDE68A', color: '#92400E', fontWeight: 700, mt: 0.8 }}
              />
              <Typography variant="body2" sx={{ color: '#5C4941', mt: 1, fontWeight: 600 }}>
                विंध्याचल, मिर्ज़ापुर (उ.प्र.)
              </Typography>
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#800000', mb: 2 }}>
                हमारा उद्देश्य एवं सेवा संकल्प
              </Typography>

              <Typography variant="body1" sx={{ color: '#4A3B32', lineHeight: 1.85, mb: 2.5, fontSize: '1.02rem' }}>
                <strong>RAKA Mishra</strong> का उद्देश्य विंध्याचल आने वाले श्रद्धालुओं को उनकी यात्रा के दौरान आवश्यक स्थानीय सेवाओं और सहायता की जानकारी एक ही जगह उपलब्ध कराना है।
              </Typography>

              <Typography variant="body1" sx={{ color: '#4A3B32', lineHeight: 1.85, mb: 3, fontSize: '1.02rem' }}>
                देश-विदेश से आने वाले भक्त जब माँ के दरबार में पहुँचते हैं, तो उन्हें कतार की स्थिति, बुजुर्गों के लिए सुगम मार्ग, वैदिक पुरोहित समन्वय, स्वच्छ ठहरने की जगह और स्थानीय आवागमन की सटीक जानकारी चाहिए होती है। हम इसी अंतर को भरने हेतु समर्पित व्यक्तिगत सहयोग प्रदान करते हैं।
              </Typography>

              <Box sx={{ p: 2, borderRadius: 2.5, backgroundColor: '#FFFDF8', border: '1px solid rgba(217, 119, 6, 0.2)', mb: 3 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#800000', mb: 0.8 }}>
                  सेवा के मुख्य स्तंभ (Core Values):
                </Typography>
                <Typography variant="body2" sx={{ color: '#5C4941', lineHeight: 1.7 }}>
                  • <strong>पारदर्शिता:</strong> कोई भ्रामक दावा या झूठी वीआईपी गारंटी नहीं।<br />
                  • <strong>बुजुर्गों का आदर:</strong> वरिष्ठ नागरिकों एवं बाल परिवारों को विशेष प्राथमिकता।<br />
                  • <strong>शास्त्र सम्मत विधि:</strong> वैदिक परंपरा और शुचिता का पूर्ण पालन।
                </Typography>
              </Box>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  color="primary"
                  href={`tel:${BRAND_INFO.phone}`}
                  startIcon={<PhoneCall size={18} />}
                  sx={{ py: 1.2, px: 3, fontWeight: 700 }}
                >
                  कॉल करें: {BRAND_INFO.phone}
                </Button>

                <Button
                  variant="outlined"
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<MessageCircle size={18} color="#059669" />}
                  sx={{ borderColor: '#059669', color: '#065F46', py: 1.2, px: 3, fontWeight: 700 }}
                >
                  WhatsApp पर बात करें
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>

        <CTASection onOpenEnquiry={onOpenEnquiry} />

      </Container>
    </Box>
  );
}
