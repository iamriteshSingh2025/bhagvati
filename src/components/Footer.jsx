import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink, Divider, Stack, Chip } from '@mui/material';
import { PhoneCall, MessageCircle, MapPin, Mail, Sparkles, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../data/pilgrimageData';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1E120C',
        color: '#E6D7CE',
        pt: { xs: 6, md: 8 },
        pb: { xs: 12, md: 6 }, // extra bottom padding for mobile sticky nav
        borderTop: '3px solid #D97706',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ mb: 5 }}>
          
          {/* Brand & Mission Column */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box component="img" src="/logo.svg" alt="Logo" sx={{ width: 44, height: 44 }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#FFFDF8', fontSize: '1.2rem', lineHeight: 1.2 }}>
                  {BRAND_INFO.name}
                </Typography>
                <Typography variant="caption" sx={{ color: '#F59E0B', fontWeight: 700 }}>
                  {BRAND_INFO.founderAlias} ({BRAND_INFO.founder})
                </Typography>
              </Box>
            </Box>

            <Typography variant="body2" sx={{ color: '#C4B5A5', mb: 2.5, lineHeight: 1.7, fontSize: '0.92rem' }}>
              विंध्याचल आने वाले श्रद्धालुओं की सुविधा, सुगम दर्शन, वैदिक पूजा, वरिष्ठ नागरिक सहयोग एवं ठहरने-आवागमन हेतु समर्पित स्थानीय तीर्थ सहायता मंच।
            </Typography>

            <Box
              sx={{
                p: 2,
                borderRadius: 2.5,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(217, 119, 6, 0.25)',
              }}
            >
              <Typography variant="caption" sx={{ color: '#FDE68A', fontWeight: 700, display: 'block', mb: 0.5 }}>
                ✨ हमारा संकल्प:
              </Typography>
              <Typography variant="caption" sx={{ color: '#E5D5C5', lineHeight: 1.5, display: 'block' }}>
                "{BRAND_INFO.taglineHindi}"
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links Column */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#FDE68A', mb: 2, fontSize: '1rem' }}>
              मुख्य पृष्ठ
            </Typography>
            <Stack spacing={1.2}>
              {[
                { name: 'होम पेज', path: '/' },
                { name: 'दर्शन सहायता', path: '/darshan' },
                { name: 'वैदिक पूजा', path: '/puja' },
                { name: 'पंडित जी', path: '/pandit-ji' },
                { name: 'माँ श्रृंगार सेवा', path: '/shringar' },
                { name: 'त्रिकोण परिक्रमा', path: '/circuit' },
                { name: 'लाइव सूचनाएं', path: '/notices' },
              ].map((link) => (
                <MuiLink
                  key={link.path}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: '#C4B5A5',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#F59E0B' }
                  }}
                >
                  {link.name}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Services Column */}
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#FDE68A', mb: 2, fontSize: '1rem' }}>
              तीर्थ सेवाएं
            </Typography>
            <Stack spacing={1.2}>
              {[
                { name: 'वरिष्ठ नागरिक सहायता', path: '/darshan#senior' },
                { name: 'होटल एवं धर्मशाला', path: '/stay' },
                { name: 'शुद्ध सात्विक भोजन', path: '/food' },
                { name: 'स्टेशन पिकअप / वाहन', path: '/travel' },
                { name: 'संस्थापक परिचय', path: '/about' },
                { name: 'सहायता केंद्र / संपर्क', path: '/contact' },
                { name: 'प्रशासन डैशबोर्ड', path: '/admin' },
              ].map((link) => (
                <MuiLink
                  key={link.name}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: '#C4B5A5',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#F59E0B' }
                  }}
                >
                  {link.name}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Contact Details Column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#FDE68A', mb: 2, fontSize: '1rem' }}>
              सीधा संपर्क
            </Typography>

            <Stack spacing={1.8}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                <MapPin size={18} color="#D97706" style={{ marginTop: 3, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: '#C4B5A5', fontSize: '0.9rem' }}>
                  {BRAND_INFO.location}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <PhoneCall size={18} color="#D97706" style={{ flexShrink: 0 }} />
                <MuiLink
                  href={`tel:${BRAND_INFO.phone}`}
                  sx={{ color: '#FFFDF8', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}
                >
                  {BRAND_INFO.phoneFormatted}
                </MuiLink>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <MessageCircle size={18} color="#25D366" style={{ flexShrink: 0 }} />
                <MuiLink
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: '#25D366', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}
                >
                  WhatsApp सहायता
                </MuiLink>
              </Box>

              <Box sx={{ pt: 1 }}>
                <Chip
                  icon={<Shield size={14} color="#FDE68A" />}
                  label="सत्यनिष्ठा व पारदर्शी सेवा"
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(217, 119, 6, 0.2)',
                    color: '#FDE68A',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                  }}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 3 }} />

        {/* Legal Disclaimer Box */}
        <Box
          sx={{
            p: 2,
            borderRadius: 2.5,
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            mb: 3,
          }}
        >
          <Typography variant="caption" sx={{ color: '#A8998D', display: 'block', lineHeight: 1.6, textAlign: 'center' }}>
            <strong>महत्वपूर्ण स्पष्टीकरण (Legal Disclaimer):</strong> {BRAND_INFO.officialDisclaimer}
          </Typography>
        </Box>

        {/* Copyright & Sub-links */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <Typography variant="caption" sx={{ color: '#8C776D' }}>
            © {new Date().getFullYear()} {BRAND_INFO.englishName} • अभिषेक (राका) मिश्रा • सर्वाधिकार सुरक्षित।
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <MuiLink component={Link} to="/contact" sx={{ color: '#8C776D', fontSize: '0.75rem', textDecoration: 'none', '&:hover': { color: '#F59E0B' } }}>
              गोपनीयता नीति (Privacy)
            </MuiLink>
            <MuiLink component={Link} to="/contact" sx={{ color: '#8C776D', fontSize: '0.75rem', textDecoration: 'none', '&:hover': { color: '#F59E0B' } }}>
              सेवा शर्तें (Terms)
            </MuiLink>
            <MuiLink component={Link} to="/admin" sx={{ color: '#F59E0B', fontSize: '0.75rem', textDecoration: 'none', fontWeight: 600 }}>
              एडमिन लॉगिन (Admin)
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
