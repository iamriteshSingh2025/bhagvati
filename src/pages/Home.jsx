import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  Paper,
  Stack,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import {
  Sparkles,
  PhoneCall,
  MessageCircle,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  Navigation,
  Compass,
  Hotel,
  Utensils,
  Car,
  ChevronRight,
  Flame,
  UserCheck,
  Calendar,
  Eye,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  BRAND_INFO,
  QUICK_SERVICES,
  PILGRIMAGE_PACKAGES,
  DEMO_HOTELS,
  DEMO_RESTAURANTS,
  FESTIVALS,
  LIVE_NOTICES,
} from '../data/pilgrimageData';
import { IMAGES } from '../utils/assets';
import ServiceCard from '../components/ServiceCard';
import PanoramaViewer from '../components/PanoramaViewer';
import TempleCircuitMap from '../components/TempleCircuitMap';
import FAQAccordion from '../components/FAQAccordion';
import EmergencyHelpCard from '../components/EmergencyHelpCard';
import CTASection from '../components/CTASection';
import DisclaimerBanner from '../components/DisclaimerBanner';

export default function Home({ onOpenEnquiry }) {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '84vh', md: '88vh' },
          display: 'flex',
          alignItems: 'center',
          background: `linear-gradient(180deg, rgba(77, 0, 0, 0.88) 0%, rgba(128, 0, 0, 0.78) 50%, rgba(35, 24, 21, 0.94) 100%), url(${IMAGES.templeExterior}) center/cover no-repeat`,
          color: '#FFFDF8',
          py: { xs: 6, md: 10 },
          borderBottom: '4px solid #D97706',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ maxWidth: 880, mx: 'auto', textAlign: 'center' }}>
            
            {/* Top Badge */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: 'rgba(245, 158, 11, 0.22)',
                backdropFilter: 'blur(8px)',
                color: '#FDE68A',
                px: 2.2,
                py: 0.8,
                borderRadius: 4,
                fontSize: { xs: '0.82rem', md: '0.92rem' },
                fontWeight: 700,
                mb: 3,
                border: '1px solid rgba(245, 158, 11, 0.45)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
              }}
            >
              <Sparkles size={18} color="#F59E0B" />
              <span>विंध्याचल तीर्थ यात्रा सहायता • RAKA Mishra</span>
            </Box>

            {/* Main Headline */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4rem' },
                fontWeight: 800,
                color: '#FFFDF8',
                lineHeight: 1.18,
                mb: 2.5,
                textShadow: '0 4px 24px rgba(0, 0, 0, 0.6)',
                fontFamily: '"Noto Sans Devanagari", "Cinzel", serif',
              }}
            >
              माँ के दरबार में आपका स्वागत है
            </Typography>

            {/* Subheadline */}
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.05rem', sm: '1.25rem', md: '1.45rem' },
                fontWeight: 400,
                color: '#FEF3C7',
                lineHeight: 1.65,
                mb: 4,
                maxWidth: 800,
                mx: 'auto',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              विंध्याचल यात्रा को आसान बनाइए — दर्शन, पूजा, पंडित जी, माँ का श्रृंगार, होटल, भोजन और स्थानीय सहायता एक ही जगह।
            </Typography>

            {/* Primary Action Buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 4 }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={() => onOpenEnquiry && onOpenEnquiry('सामान्य दर्शन सहायता')}
                startIcon={<Sparkles size={20} />}
                sx={{
                  py: 1.6,
                  px: 4,
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  borderRadius: 3,
                  boxShadow: '0 8px 24px rgba(217, 119, 6, 0.45)',
                  width: { xs: '100%', sm: 'auto' },
                }}
              >
                दर्शन सेवा देखें
              </Button>

              <Button
                variant="contained"
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<MessageCircle size={20} />}
                sx={{
                  backgroundColor: '#25D366',
                  color: '#FFF',
                  py: 1.6,
                  px: 4,
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  borderRadius: 3,
                  boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
                  width: { xs: '100%', sm: 'auto' },
                  '&:hover': {
                    backgroundColor: '#1EBE5D',
                  }
                }}
              >
                WhatsApp पर संपर्क करें
              </Button>
            </Stack>

            {/* Subtle Service Trust Indicators (No Fake Stats) */}
            <Grid container spacing={1.5} justifyContent="center" sx={{ maxWidth: 840, mx: 'auto' }}>
              {[
                'स्थानीय तीर्थ सहायता',
                'परिवार एवं वरिष्ठ नागरिकों के लिए सहायता',
                'दर्शन एवं पूजा समन्वय',
                'होटल एवं यात्रा मार्गदर्शन',
              ].map((indicator, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 0.8,
                      backgroundColor: 'rgba(0, 0, 0, 0.35)',
                      backdropFilter: 'blur(6px)',
                      p: 1.2,
                      borderRadius: 2,
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                    }}
                  >
                    <CheckCircle2 size={16} color="#F59E0B" />
                    <Typography variant="caption" sx={{ color: '#FFFDF8', fontWeight: 600, fontSize: '0.8rem' }}>
                      {indicator}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

          </Box>
        </Container>
      </Box>

      {/* 2. TRANSPARENCY NOTICE BANNER */}
      <Container maxWidth="xl" sx={{ mt: 3, mb: 2 }}>
        <DisclaimerBanner />
      </Container>

      {/* 3. QUICK SERVICES SECTION */}
      <Box sx={{ py: { xs: 5, md: 8 }, backgroundColor: '#FBF7F0' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 5 } }}>
            <Chip
              icon={<Sparkles size={15} color="#800000" />}
              label="हमारी सेवाएं"
              sx={{
                backgroundColor: 'rgba(128, 0, 0, 0.1)',
                color: '#800000',
                fontWeight: 700,
                mb: 1.5,
                border: '1px solid rgba(128, 0, 0, 0.2)',
              }}
            />
            <Typography variant="h2" sx={{ fontWeight: 800, color: '#800000', fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: 1 }}>
              आपको किस सेवा की आवश्यकता है?
            </Typography>
            <Typography variant="body1" sx={{ color: '#5C4941', maxWidth: 680, mx: 'auto', fontSize: { xs: '0.98rem', md: '1.08rem' } }}>
              विंध्याचल दर्शन से लेकर ठहरने, भोजन व वाहन तक — आपकी जरूरत के अनुसार व्यक्तिगत सहायता
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {QUICK_SERVICES.map((service) => (
              <Grid item xs={12} sm={6} lg={4} key={service.id}>
                <ServiceCard service={service} onOpenEnquiry={onOpenEnquiry} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. SENIOR CITIZEN & FAMILY ASSISTANCE HIGHLIGHT */}
      <Box
        sx={{
          py: { xs: 6, md: 9 },
          background: 'linear-gradient(135deg, #FFFDF8 0%, #F5ECE1 100%)',
          borderTop: '1px solid rgba(217, 119, 6, 0.2)',
          borderBottom: '1px solid rgba(217, 119, 6, 0.2)',
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip
                icon={<HeartHandshake size={15} color="#059669" />}
                label="विशेष संवेदनशीलता"
                sx={{
                  backgroundColor: 'rgba(5, 150, 105, 0.12)',
                  color: '#065F46',
                  fontWeight: 700,
                  mb: 2,
                }}
              />
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#800000', fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 2 }}>
                बुजुर्गों और परिवारों के लिए विशेष सहायता
              </Typography>
              <Typography variant="body1" sx={{ color: '#4A3B32', mb: 3, lineHeight: 1.8, fontSize: '1.05rem' }}>
                तीर्थ यात्रा में वरिष्ठ नागरिकों एवं छोटे बच्चों की सुरक्षा और सुविधा हमारी सर्वोच्च प्राथमिकता है। भारी भीड़ में बिना किसी परेशानी के सुगम दर्शन का अनुभव प्राप्त करें।
              </Typography>

              <Grid container spacing={2} sx={{ mb: 3.5 }}>
                {[
                  { title: 'कम चलने वाला सुगम मार्ग', desc: 'भीड़भाड़ से अलग सहज प्रवेश' },
                  { title: 'व्हीलचेयर समन्वय', desc: 'आवश्यकतानुसार व्हीलचेयर सूचना' },
                  { title: 'विश्राम व पेयजल व्यवस्था', desc: 'दर्शन के बीच सहज विश्राम' },
                  { title: 'स्टेशन से होटल सीधा वाहन', desc: 'सुरक्षित पारिवारिक आवागमन' },
                ].map((item, idx) => (
                  <Grid item xs={12} sm={6} key={idx}>
                    <Box sx={{ p: 2, borderRadius: 2.5, backgroundColor: '#FFFFFF', border: '1px solid rgba(217, 119, 6, 0.2)' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#800000', mb: 0.3 }}>
                        ✓ {item.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#78655C' }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Button
                variant="contained"
                color="primary"
                onClick={() => onOpenEnquiry && onOpenEnquiry('वरिष्ठ नागरिक एवं परिवार सहायता')}
                startIcon={<HeartHandshake size={18} />}
                sx={{ py: 1.3, px: 3.5, fontWeight: 700 }}
              >
                परिवार सहायता का अनुरोध करें
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', borderRadius: 4, overflow: 'hidden', border: '3px solid rgba(217, 119, 6, 0.25)', boxShadow: '0 16px 40px rgba(128, 0, 0, 0.12)' }}>
                <Box
                  component="img"
                  src={IMAGES.templeExterior}
                  alt="विंध्याचल दर्शन गलियारा"
                  sx={{ width: '100%', height: { xs: 280, sm: 380 }, objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 2.5,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(35, 24, 21, 0.9) 100%)',
                    color: '#FFFDF8',
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#FDE68A' }}>
                    "श्रद्धालु देवो भव:"
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#E5D5C5' }}>
                    हर बुजुर्ग को परिवार के सदस्य की भांति आदर व सहयोग प्रदान करना हमारा कर्तव्य है।
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 5. 360° VISUAL EXPERIENCE */}
      <Container maxWidth="xl">
        <PanoramaViewer />
      </Container>

      {/* 6. TEMPLE CIRCUIT (TRIKON PARIKRAMA) */}
      <Container maxWidth="xl">
        <TempleCircuitMap onOpenEnquiry={onOpenEnquiry} />
      </Container>

      {/* 7. COMPLETE PILGRIMAGE PACKAGES */}
      <Box sx={{ py: { xs: 5, md: 8 }, backgroundColor: '#FFFDF8' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 5 } }}>
            <Chip
              icon={<Sparkles size={15} color="#D97706" />}
              label="संपूर्ण तीर्थ समन्वय"
              sx={{
                backgroundColor: 'rgba(217, 119, 6, 0.12)',
                color: '#B45309',
                fontWeight: 700,
                mb: 1.5,
              }}
            />
            <Typography variant="h2" sx={{ fontWeight: 800, color: '#800000', fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 1 }}>
              आपकी पूरी विंध्याचल यात्रा, एक ही जगह
            </Typography>
            <Typography variant="body1" sx={{ color: '#5C4941', maxWidth: 650, mx: 'auto', fontSize: { xs: '0.96rem', md: '1.05rem' } }}>
              अपनी सुविधा अनुसार सेवा श्रेणी चुनें — कोई पूर्व निर्धारित कठोर पैकेज नहीं, आपकी जरूरत के अनुसार समन्वय
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {PILGRIMAGE_PACKAGES.map((pkg) => (
              <Grid item xs={12} sm={6} lg={3} key={pkg.id}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    borderRadius: 3.5,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1.5px solid rgba(217, 119, 6, 0.2)',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#FFFFFF',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 14px 30px rgba(128, 0, 0, 0.12)',
                      borderColor: pkg.accent,
                    }
                  }}
                >
                  <Chip
                    label={pkg.badge}
                    size="small"
                    sx={{
                      alignSelf: 'flex-start',
                      backgroundColor: `${pkg.accent}15`,
                      color: pkg.accent,
                      fontWeight: 700,
                      mb: 1.5,
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000', mb: 0.5, fontSize: '1.15rem' }}>
                    {pkg.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#78655C', display: 'block', mb: 2, fontWeight: 600 }}>
                    {pkg.target}
                  </Typography>

                  <Box sx={{ mb: 3, flexGrow: 1 }}>
                    {pkg.features.map((feat, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircle2 size={16} color={pkg.accent} style={{ marginTop: 2, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: '#4A3B32', fontSize: '0.88rem' }}>
                          {feat}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(`पैकेज अनुरोध: ${pkg.title}`)}
                    sx={{
                      borderColor: pkg.accent,
                      color: pkg.accent,
                      fontWeight: 700,
                      '&:hover': {
                        backgroundColor: `${pkg.accent}10`,
                        borderColor: pkg.accent,
                      }
                    }}
                  >
                    {pkg.ctaText}
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 8. HOTEL & FOOD PREVIEW SECTION */}
      <Box sx={{ py: { xs: 5, md: 8 }, backgroundColor: '#FBF7F0' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 4, flexWrap: 'wrap', gap: 2 }}>
            <Box>
              <Chip label="ठहरने की व्यवस्था" size="small" sx={{ backgroundColor: '#F4ECE1', color: '#800000', fontWeight: 700, mb: 1 }} />
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#800000', fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                विंध्याचल में कहाँ ठहरें?
              </Typography>
              <Typography variant="body2" sx={{ color: '#5C4941' }}>
                मंदिर व रेलवे स्टेशन के समीप बजट एवं परिवार अनुकूल होटल व धर्मशाला (Demo Directory)
              </Typography>
            </Box>
            <Button component={Link} to="/stay" endIcon={<ChevronRight size={18} />} sx={{ color: '#800000', fontWeight: 700 }}>
              सभी होटल विकल्प देखें
            </Button>
          </Box>

          <Grid container spacing={3}>
            {DEMO_HOTELS.slice(0, 3).map((hotel) => (
              <Grid item xs={12} sm={6} md={4} key={hotel.id}>
                <Card
                  sx={{
                    borderRadius: 3.5,
                    overflow: 'hidden',
                    border: '1.5px solid rgba(217, 119, 6, 0.2)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box sx={{ position: 'relative', height: 180 }}>
                    <CardMedia component="img" height="100%" image={hotel.image} alt={hotel.name} sx={{ objectFit: 'cover' }} />
                    <Chip label="DEMO LISTING" size="small" sx={{ position: 'absolute', top: 10, left: 10, backgroundColor: 'rgba(35, 24, 21, 0.85)', color: '#FDE68A', fontWeight: 700, fontSize: '0.68rem' }} />
                    <Chip label={hotel.tag} size="small" sx={{ position: 'absolute', bottom: 10, right: 10, backgroundColor: '#800000', color: '#FFFDF8', fontWeight: 700, fontSize: '0.72rem' }} />
                  </Box>
                  <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000', mb: 0.5, fontSize: '1.1rem' }}>
                      {hotel.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#B45309', fontWeight: 700, mb: 1.5 }}>
                      {hotel.approxPrice}
                    </Typography>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={() => onOpenEnquiry && onOpenEnquiry(`होटल सहायता: ${hotel.name}`)}
                      sx={{ mt: 'auto', fontWeight: 700 }}
                    >
                      कमरे की जानकारी लें
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 9. ABOUT RAKA MISHRA SECTION */}
      <Box sx={{ py: { xs: 6, md: 9 }, backgroundColor: '#FFFDF8' }}>
        <Container maxWidth="lg">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 5 },
              borderRadius: 4,
              backgroundColor: '#FFFFFF',
              border: '2px solid rgba(217, 119, 6, 0.25)',
              boxShadow: '0 12px 36px rgba(128, 0, 0, 0.08)',
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: { xs: 160, sm: 200 },
                    height: { xs: 160, sm: 200 },
                    borderRadius: '50%',
                    overflow: 'hidden',
                    mx: 'auto',
                    border: '4px solid #D97706',
                    boxShadow: '0 8px 24px rgba(128, 0, 0, 0.2)',
                  }}
                >
                  <Box
                    component="img"
                    src={IMAGES.rakaMishraPortrait}
                    alt="अभिषेक मिश्रा (RAKA Mishra)"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000', mt: 2 }}>
                  {BRAND_INFO.founder}
                </Typography>
                <Chip
                  label={BRAND_INFO.founderAlias}
                  size="small"
                  sx={{ backgroundColor: '#FDE68A', color: '#92400E', fontWeight: 700, mt: 0.5 }}
                />
              </Grid>

              <Grid item xs={12} sm={8}>
                <Chip
                  icon={<ShieldCheck size={14} color="#800000" />}
                  label="स्थानीय तीर्थ सहायक"
                  size="small"
                  sx={{ backgroundColor: 'rgba(128, 0, 0, 0.1)', color: '#800000', fontWeight: 700, mb: 1.5 }}
                />
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#800000', mb: 2, fontSize: { xs: '1.4rem', sm: '1.8rem' } }}>
                  आपकी विंध्याचल यात्रा में स्थानीय सहायता
                </Typography>
                <Typography variant="body1" sx={{ color: '#4A3B32', lineHeight: 1.8, mb: 3 }}>
                  RAKA Mishra का उद्देश्य विंध्याचल आने वाले श्रद्धालुओं को उनकी यात्रा के दौरान आवश्यक स्थानीय सेवाओं और सहायता की जानकारी एक ही जगह उपलब्ध कराना है। हमारा संकल्प है कि हर श्रद्धालु बिना किसी भ्रम या परेशानी के माँ के चरणों में शीश नवा सके।
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href={`tel:${BRAND_INFO.phone}`}
                    startIcon={<PhoneCall size={18} />}
                    sx={{ fontWeight: 700 }}
                  >
                    सीधे बात करें ({BRAND_INFO.phone})
                  </Button>

                  <Button
                    variant="outlined"
                    href={BRAND_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<MessageCircle size={18} color="#059669" />}
                    sx={{ borderColor: '#059669', color: '#065F46', fontWeight: 700 }}
                  >
                    WhatsApp चैट
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* 10. EMERGENCY & IMPORTANT HELPLINES */}
      <Container maxWidth="xl">
        <EmergencyHelpCard />
      </Container>

      {/* 11. FAQ ACCORDION */}
      <Container maxWidth="xl">
        <FAQAccordion />
      </Container>

      {/* 12. FINAL CONVERSION CTA */}
      <Container maxWidth="xl">
        <CTASection onOpenEnquiry={onOpenEnquiry} />
      </Container>

    </Box>
  );
}
