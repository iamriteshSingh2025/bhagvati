import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Chip, Stack } from '@mui/material';
import { UserCheck, ShieldCheck, Sparkles, BookOpen, Flame, PhoneCall, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/pilgrimageData';
import CTASection from '../components/CTASection';
import DisclaimerBanner from '../components/DisclaimerBanner';

export default function PanditPage({ onOpenEnquiry }) {
  return (
    <Box sx={{ py: { xs: 4, md: 7 }, backgroundColor: '#FBF7F0' }}>
      <Container maxWidth="xl">
        
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Chip
            icon={<UserCheck size={16} color="#800000" />}
            label="तीर्थ पुरोहित समन्वय"
            sx={{ backgroundColor: 'rgba(128, 0, 0, 0.1)', color: '#800000', fontWeight: 700, mb: 1.5 }}
          />
          <Typography variant="h2" sx={{ fontWeight: 800, color: '#800000', fontSize: { xs: '1.9rem', md: '2.8rem' }, mb: 1.5 }}>
            पंडित जी से पूजा करवाएं
          </Typography>
          <Typography variant="body1" sx={{ color: '#5C4941', maxWidth: 720, mx: 'auto', fontSize: '1.05rem' }}>
            विंध्याचल के पारंपरिक व वेदोक्त विधा में निपुण तीर्थ पुरोहितों से विधि-विधान पूर्वक पूजन संपन्न कराएं।
          </Typography>
        </Box>

        <DisclaimerBanner sx={{ mb: 4 }} />

        {/* Real Profile Notice (Authenticity Rule) */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 3.5,
            backgroundColor: '#FFFFFF',
            border: '1.5px solid rgba(217, 119, 6, 0.25)',
            mb: 5,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
            <ShieldCheck size={24} color="#059669" />
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000' }}>
              सत्यनिष्ठा व शुचिता का आश्वासन (Purity Assurance)
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: '#4A3B32', lineHeight: 1.8, mb: 2 }}>
            हम कोई भी कृत्रिम अथवा भ्रामक पंडित प्रोफाइल प्रदर्शित नहीं करते हैं। आपके अनुष्ठान की प्रकृति (संकल्प, मुंडन, रुद्राभिषेक, सप्तशती पाठ या चंडी महायज्ञ) के अनुसार विंध्य क्षेत्र के अधिकृत व अनुभवी तीर्थ पुरोहितों से आपका प्रत्यक्ष समन्वय कराया जाता है।
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            <Chip label="✓ गोत्र व कुल परंपरा संकल्प" sx={{ backgroundColor: '#F5ECE1', color: '#800000', fontWeight: 600 }} />
            <Chip label="✓ शास्त्रोक्त मंत्रोच्चार" sx={{ backgroundColor: '#F5ECE1', color: '#800000', fontWeight: 600 }} />
            <Chip label="✓ दक्षिणा व विधि की पहले से स्पष्टता" sx={{ backgroundColor: '#F5ECE1', color: '#800000', fontWeight: 600 }} />
            <Chip label="✓ मुंडन संस्कार हेतु नाई (Barber) समन्वय" sx={{ backgroundColor: '#FEE2E2', color: '#DC2626', fontWeight: 700 }} />
          </Box>
        </Paper>

        {/* 6 Step Service Flow */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#800000', textAlign: 'center', mb: 4 }}>
            पंडित जी सेवा प्रक्रिया (Step-by-Step Flow)
          </Typography>

          <Grid container spacing={2.5}>
            {[
              { num: '01', title: 'पूजा की आवश्यकता बताएं', desc: 'मनोकामना, संकल्प, मुंडन अथवा विशेष हवन का चयन करें।' },
              { num: '02', title: 'तारीख व समय चुनें', desc: 'विंध्याचल पहुँचने का दिन व शुभ मुहूर्त का निर्धारण करें।' },
              { num: '03', title: 'श्रद्धालु की जानकारी दें', desc: 'यजमान का नाम, गोत्र व कुलदेवी का विवरण प्रदान करें।' },
              { num: '04', title: 'पंडित जी की पुष्टि', desc: 'योग्य तीर्थ पुरोहित की समय उपलब्धता की पुष्टि प्राप्त करें।' },
              { num: '05', title: 'पूजा सामग्री व्यवस्था', desc: 'शुद्ध सामग्री, हवन कुंड एवं स्थान की पूर्ण तैयारी।' },
              { num: '06', title: 'पूजा संपन्न व आशीर्वाद', desc: 'वेदोक्त विधि से पूजन पूर्ण एवं माँ का पावन प्रसाद ग्रहण।' },
            ].map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    height: '100%',
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid rgba(217, 119, 6, 0.2)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      borderColor: '#800000',
                      boxShadow: '0 8px 24px rgba(128, 0, 0, 0.1)',
                    }
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: 900, color: 'rgba(217, 119, 6, 0.3)', mb: 1, lineHeight: 1 }}>
                    {item.num}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#800000', mb: 0.8 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#5C4941', lineHeight: 1.6 }}>
                    {item.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Availability CTA Box */}
        <Paper
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            background: 'linear-gradient(135deg, #FFFDF8 0%, #F5ECE1 100%)',
            border: '2px solid #D97706',
            textAlign: 'center',
            mb: 6,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#800000', mb: 1.5 }}>
            विद्वान पंडित जी की उपलब्धता पूछें
          </Typography>
          <Typography variant="body1" sx={{ color: '#4A3B32', maxWidth: 650, mx: 'auto', mb: 3 }}>
            अपने शुभ कार्य हेतु अनुभवी तीर्थ पुरोहित की अग्रिम उपलब्धता सुनिश्चित करने के लिए RAKA Mishra से संपर्क करें।
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => onOpenEnquiry && onOpenEnquiry('पंडित जी की उपलब्धता समन्वय')}
              startIcon={<UserCheck size={18} />}
              sx={{ py: 1.4, px: 4, fontWeight: 700 }}
            >
              पंडित जी की उपलब्धता पूछें
            </Button>

            <Button
              variant="contained"
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<MessageCircle size={18} />}
              sx={{ backgroundColor: '#25D366', color: '#FFF', py: 1.4, px: 4, fontWeight: 700, '&:hover': { backgroundColor: '#1EBE5D' } }}
            >
              WhatsApp पर पूछें
            </Button>
          </Stack>
        </Paper>

        <CTASection onOpenEnquiry={onOpenEnquiry} />

      </Container>
    </Box>
  );
}
