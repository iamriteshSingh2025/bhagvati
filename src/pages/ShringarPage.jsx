import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Paper, Stack } from '@mui/material';
import { HeartHandshake, Sparkles, Shirt, Gift, Crown, MessageCircle, PhoneCall } from 'lucide-react';
import { SHRINGAR_SEVA_LIST, BRAND_INFO } from '../data/pilgrimageData';
import { IMAGES } from '../utils/assets';
import DisclaimerBanner from '../components/DisclaimerBanner';
import CTASection from '../components/CTASection';

const ICON_MAP = {
  Sparkles: <Sparkles size={24} />,
  Shirt: <Shirt size={24} />,
  Gift: <Gift size={24} />,
  Crown: <Crown size={24} />,
};

export default function ShringarPage({ onOpenEnquiry }) {
  return (
    <Box sx={{ py: { xs: 4, md: 7 }, backgroundColor: '#FBF7F0' }}>
      <Container maxWidth="xl">
        
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Chip
            icon={<HeartHandshake size={16} color="#DC2626" />}
            label="दिव्य विग्रह सेवा"
            sx={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', color: '#DC2626', fontWeight: 700, mb: 1.5 }}
          />
          <Typography variant="h2" sx={{ fontWeight: 800, color: '#800000', fontSize: { xs: '1.9rem', md: '2.8rem' }, mb: 1.5 }}>
            माँ का श्रृंगार सेवा
          </Typography>
          <Typography variant="body1" sx={{ color: '#5C4941', maxWidth: 720, mx: 'auto', fontSize: '1.05rem' }}>
            आदिशक्ति माँ विंध्यवासिनी के पावन विग्रह हेतु ताजे सुगंधित पुष्प, जरीदार चुनरी, रेशमी वस्त्र एवं पवित्र सुहाग सामग्री अर्पण।
          </Typography>
        </Box>

        {/* Required Temple Rule Disclaimer */}
        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            borderRadius: 3,
            backgroundColor: '#FFFBEB',
            border: '1.5px dashed #D97706',
            textAlign: 'center',
            mb: 4,
          }}
        >
          <Typography variant="subtitle1" sx={{ color: '#92400E', fontWeight: 800, mb: 0.5 }}>
            🌸 "श्रृंगार सेवा मंदिर की वर्तमान व्यवस्था एवं अनुमति के अनुसार उपलब्ध होगी।"
          </Typography>
          <Typography variant="caption" sx={{ color: '#78350F', display: 'block' }}>
            माँ के विग्रह का श्रृंगार विशेष आरती के समय तीर्थ पुरोहितों एवं मंदिर परंपरा के अनुसार ही किया जाता है।
          </Typography>
        </Paper>

        {/* Mata Ji Respectful Hero Banner */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                border: '3px solid rgba(217, 119, 6, 0.3)',
                boxShadow: '0 16px 40px rgba(128, 0, 0, 0.15)',
                position: 'relative',
              }}
            >
              <Box
                component="img"
                src={IMAGES.matajiShringar}
                alt="माँ विंध्यवासिनी दिव्य श्रृंगार दर्शन"
                sx={{ width: '100%', height: { xs: 300, sm: 400 }, objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 2.5,
                  background: 'linear-gradient(180deg, transparent 0%, rgba(35, 24, 21, 0.95) 100%)',
                  color: '#FFFDF8',
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#FDE68A' }}>
                  माँ विंध्यवासिनी दिव्य स्वरूप
                </Typography>
                <Typography variant="caption" sx={{ color: '#E5D5C5' }}>
                  महालक्ष्मी, महाकाली और महासरस्वती का अखंड दिव्य संगम
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#800000', mb: 2 }}>
              भक्त की ओर से श्रृंगार अर्पण
            </Typography>
            <Typography variant="body1" sx={{ color: '#4A3B32', lineHeight: 1.8, mb: 3 }}>
              श्रद्धालु अपनी कुल परंपरा, मनोकामना पूर्ति अथवा जन्मदिन/वर्षगांठ के पावन अवसर पर माँ के चरणों में सुगंधित पुष्प, रेशमी चुनरी अथवा सोलह श्रृंगार सामग्री अर्पण कराने का समन्वय प्राप्त कर सकते हैं।
            </Typography>

            <Box sx={{ p: 2, borderRadius: 2.5, backgroundColor: '#FFFFFF', border: '1px solid rgba(217, 119, 6, 0.2)', mb: 3 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#800000', mb: 0.5 }}>
                ✨ श्रृंगार सेवा समन्वय में क्या शामिल है?
              </Typography>
              <Typography variant="body2" sx={{ color: '#5C4941', lineHeight: 1.6 }}>
                • शुद्ध एवं ताजे गुलाब, गेंदा व कमल पुष्प माला का प्रबंध<br />
                • बनारसी जरीदार चुनरी व वस्त्र व्यवस्था<br />
                • तीर्थ पुरोहितों द्वारा माता जी को विधिपूर्वक अर्पण<br />
                • भक्त परिवार के नाम का संकल्प
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              onClick={() => onOpenEnquiry && onOpenEnquiry('माँ का श्रृंगार सेवा समन्वय')}
              startIcon={<HeartHandshake size={18} />}
              sx={{ py: 1.3, px: 4, fontWeight: 700 }}
            >
              श्रृंगार सेवा की जानकारी लें
            </Button>
          </Grid>
        </Grid>

        {/* Shringar Categories */}
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#800000', textAlign: 'center', mb: 4 }}>
          उपलब्ध श्रृंगार सेवा श्रेणियां
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {SHRINGAR_SEVA_LIST.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3.5,
                  border: '1.5px solid rgba(217, 119, 6, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 28px rgba(128, 0, 0, 0.12)',
                    borderColor: '#800000',
                  }
                }}
              >
                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2.5,
                      backgroundColor: 'rgba(217, 119, 6, 0.12)',
                      color: '#B45309',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    {ICON_MAP[item.icon] || <Sparkles size={24} />}
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000', mb: 1, fontSize: '1.1rem' }}>
                    {item.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: '#4A3B32', mb: 2, lineHeight: 1.6, flexGrow: 1 }}>
                    {item.description}
                  </Typography>

                  <Chip
                    label={item.timing}
                    size="small"
                    sx={{ backgroundColor: '#F5ECE1', color: '#800000', fontWeight: 600, fontSize: '0.72rem', mb: 2 }}
                  />

                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(`श्रृंगार सेवा: ${item.title}`)}
                    sx={{ py: 0.9, fontWeight: 700, fontSize: '0.86rem' }}
                  >
                    जानकारी लें
                  </Button>
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
