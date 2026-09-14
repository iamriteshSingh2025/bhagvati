import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip, Paper, Stack } from '@mui/material';
import { Flame, Sparkles, BookOpen, Shield, Heart, Gift, UserCheck, MessageCircle, PhoneCall, Scissors } from 'lucide-react';
import { PUJA_CATEGORIES, BRAND_INFO } from '../data/pilgrimageData';
import { Link } from 'react-router-dom';
import DisclaimerBanner from '../components/DisclaimerBanner';
import CTASection from '../components/CTASection';

const ICON_MAP = {
  Sparkles: <Sparkles size={24} />,
  BookOpen: <BookOpen size={24} />,
  Flame: <Flame size={24} />,
  Shield: <Shield size={24} />,
  Heart: <Heart size={24} />,
  Gift: <Gift size={24} />,
  Scissors: <Scissors size={24} />,
};

export default function PujaPage({ onOpenEnquiry }) {
  return (
    <Box sx={{ py: { xs: 4, md: 7 }, backgroundColor: '#FBF7F0' }}>
      <Container maxWidth="xl">
        
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Chip
            icon={<Flame size={16} color="#DC2626" />}
            label="शास्त्रोक्त वैदिक पूजा सेवा"
            sx={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', color: '#DC2626', fontWeight: 700, mb: 1.5 }}
          />
          <Typography variant="h2" sx={{ fontWeight: 800, color: '#800000', fontSize: { xs: '1.9rem', md: '2.8rem' }, mb: 1.5 }}>
            माँ विंध्यवासिनी वैदिक पूजा एवं अनुष्ठान
          </Typography>
          <Typography variant="body1" sx={{ color: '#5C4941', maxWidth: 740, mx: 'auto', fontSize: '1.05rem' }}>
            विंध्याचल के विद्वान तीर्थ पुरोहितों द्वारा नाम, गोत्र व कुल परंपरा अनुसार शास्त्र सम्मत पूजन।
          </Typography>
        </Box>

        {/* Essential Confirmation Notice */}
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 3,
            borderRadius: 3,
            backgroundColor: '#FFFBEB',
            border: '1.5px dashed #D97706',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: '#92400E', fontWeight: 700, fontSize: '0.94rem' }}>
            🔔 "पूजा की उपलब्धता, शास्त्रीय विधि एवं दक्षिणा/शुल्क की जानकारी यात्रा से पहले RAKA Mishra अथवा पंडित जी से पुष्टि करें।"
          </Typography>
        </Paper>

        {/* Mundan Sanskar & Experienced Nai/Barber Service Highlight */}
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2.5, sm: 3.5 },
            mb: 4,
            borderRadius: 4,
            background: 'linear-gradient(135deg, #FFFDF8 0%, #FEE2E2 100%)',
            border: '2px solid #DC2626',
            boxShadow: '0 8px 24px rgba(220, 38, 38, 0.12)',
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }} flexWrap="wrap">
                <Chip
                  icon={<Scissors size={16} color="#FFF" />}
                  label="मुंडन संस्कार एवं नाई सेवा"
                  sx={{ backgroundColor: '#DC2626', color: '#FFF', fontWeight: 800, fontSize: '0.82rem' }}
                />
                <Chip
                  label="✂️ अनुभवी व स्वच्छ नाई (Barber) उपलब्ध"
                  sx={{ backgroundColor: '#800000', color: '#FFF', fontWeight: 800, fontSize: '0.82rem' }}
                />
                <Chip
                  label="गंगा तट व मंदिर प्रांगण"
                  sx={{ backgroundColor: 'rgba(5, 150, 105, 0.15)', color: '#065F46', fontWeight: 800, fontSize: '0.82rem' }}
                />
              </Stack>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#800000', mb: 1, fontSize: { xs: '1.3rem', sm: '1.7rem' } }}>
                बच्चों के मुंडन संस्कार हेतु अनुभवी नाई (Barber) की उत्तम सुविधा
              </Typography>
              <Typography variant="body1" sx={{ color: '#4A3B32', lineHeight: 1.7, mb: 1.5 }}>
                माँ विंध्यवासिनी के प्रांगण अथवा पावन गंगा तट (पक्का घाट) पर बच्चों के मुंडन संस्कार हेतु दक्ष, निपुण व स्वच्छ नाई (हजाम) की पूर्ण व्यवस्था की जाती है। वेदोक्त संकल्प, पुरोहित समन्वय एवं नाई सेवा हेतु पहले से संपर्क कर समय सुनिश्चित करें।
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Typography variant="caption" sx={{ color: '#DC2626', fontWeight: 700 }}>✓ स्वच्छ व सुरक्षित बाल कटाई</Typography>
                <Typography variant="caption" sx={{ color: '#DC2626', fontWeight: 700 }}>✓ गंगा स्नान व रक्षा सूत्र संकल्प</Typography>
                <Typography variant="caption" sx={{ color: '#DC2626', fontWeight: 700 }}>✓ तीर्थ पुरोहित द्वारा वेदोक्त संस्कार</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'center' } }}>
              <Button
                variant="contained"
                size="large"
                sx={{ backgroundColor: '#DC2626', color: '#FFF', py: 1.5, px: 3.5, fontWeight: 800, fontSize: '1.02rem', borderRadius: 3, '&:hover': { backgroundColor: '#B91C1C' }, width: { xs: '100%', sm: 'auto' } }}
                onClick={() => onOpenEnquiry && onOpenEnquiry('मुंडन संस्कार एवं नाई (Barber) सेवा')}
              >
                मुंडन / नाई सेवा पूछें
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Puja Cards Grid */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {PUJA_CATEGORIES.map((puja) => (
            <Grid item xs={12} sm={6} md={4} key={puja.id}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3.5,
                  border: puja.hasBarberService ? '2px solid #DC2626' : '1.5px solid rgba(217, 119, 6, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 30px rgba(128, 0, 0, 0.12)',
                    borderColor: '#800000',
                  }
                }}
              >
                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2.5,
                        backgroundColor: 'rgba(220, 38, 38, 0.1)',
                        color: '#DC2626',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {ICON_MAP[puja.icon] || <Flame size={24} />}
                    </Box>
                    <Chip label={puja.duration} size="small" sx={{ backgroundColor: '#F5ECE1', color: '#800000', fontWeight: 600, fontSize: '0.72rem' }} />
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000', mb: 1, fontSize: '1.15rem' }}>
                    {puja.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: '#4A3B32', mb: 2, lineHeight: 1.6, flexGrow: 1 }}>
                    {puja.description}
                  </Typography>

                  {puja.hasBarberService && (
                    <Box sx={{ mb: 1.5, p: 1.2, borderRadius: 2, backgroundColor: 'rgba(220, 38, 38, 0.08)', border: '1px solid rgba(220, 38, 38, 0.25)' }}>
                      <Typography variant="caption" sx={{ color: '#DC2626', fontWeight: 800, display: 'block' }}>
                        ✂️ अनुभवी नाई (Barber) सेवा उपलब्ध • मुंडन हेतु संपर्क करें
                      </Typography>
                    </Box>
                  )}

                  <Box sx={{ mb: 2.5, p: 1.2, borderRadius: 2, backgroundColor: 'rgba(217, 119, 6, 0.08)' }}>
                    <Typography variant="caption" sx={{ color: '#B45309', fontWeight: 700, display: 'block' }}>
                      उपयुक्त: {puja.recommendedFor}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={() => onOpenEnquiry && onOpenEnquiry(`पूजा सेवा: ${puja.title}`)}
                      sx={{ py: 1, fontWeight: 700, fontSize: '0.86rem' }}
                    >
                      जानकारी लें
                    </Button>

                    <Button
                      variant="outlined"
                      component={Link}
                      to="/pandit-ji"
                      sx={{ borderColor: '#800000', color: '#800000', minWidth: 44, px: 1 }}
                    >
                      <UserCheck size={18} />
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pandit Ji Flow Card */}
        <Paper
          elevation={1}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            backgroundColor: '#FFFFFF',
            border: '2px solid rgba(217, 119, 6, 0.25)',
            mb: 6,
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#800000', mb: 1 }}>
              पंडित जी से पूजा करवाने की प्रक्रिया (Service Flow)
            </Typography>
            <Typography variant="body2" sx={{ color: '#5C4941' }}>
              सरल, पारदर्शी और वेदोक्त 6-चरणीय समन्वय व्यवस्था
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {[
              { step: '1', title: 'पूजा आवश्यकता बताएं', desc: 'अपनी मनोकामना या अनुष्ठान का प्रकार चुनें' },
              { step: '2', title: 'तारीख व समय तय करें', desc: 'विंध्याचल आगमन की संभावित तिथि बताएं' },
              { step: '3', title: 'श्रद्धालु जानकारी दें', desc: 'नाम, गोत्र व संकल्प हेतु आवश्यक विवरण' },
              { step: '4', title: 'पंडित जी पुष्टि', desc: 'योग्य तीर्थ पुरोहित की उपलब्धता की पुष्टि' },
              { step: '5', title: 'सामग्री की तैयारी', desc: 'शुद्ध वैदिक पूजा सामग्री का उचित प्रबंध' },
              { step: '6', title: 'पूजा संपन्न', desc: 'मंत्रोच्चार व आशीर्वाद सहित पूजन पूर्ण' },
            ].map((st, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2.5,
                    backgroundColor: '#FFFDF8',
                    border: '1px solid rgba(217, 119, 6, 0.2)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      backgroundColor: '#800000',
                      color: '#FFFDF8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    {st.step}
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#800000' }}>
                      {st.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#78655C' }}>
                      {st.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/pandit-ji"
              startIcon={<UserCheck size={18} />}
              sx={{ py: 1.4, px: 4, fontWeight: 800, fontSize: '1rem' }}
            >
              पंडित जी की उपलब्धता पूछें
            </Button>
          </Box>
        </Paper>

        <CTASection onOpenEnquiry={onOpenEnquiry} />

      </Container>
    </Box>
  );
}
