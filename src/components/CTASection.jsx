import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { PhoneCall, MessageCircle, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/pilgrimageData';

export default function CTASection({ onOpenEnquiry }) {
  return (
    <Box
      sx={{
        my: { xs: 5, md: 8 },
        borderRadius: { xs: 4, md: 6 },
        background: 'linear-gradient(135deg, #4D0000 0%, #800000 60%, #300000 100%)',
        color: '#FFFDF8',
        p: { xs: 3.5, sm: 5, md: 7 },
        position: 'relative',
        overflow: 'hidden',
        border: '2px solid rgba(245, 158, 11, 0.35)',
        boxShadow: '0 20px 50px rgba(77, 0, 0, 0.35)',
        textAlign: 'center',
      }}
    >
      {/* Background Mandala Glow Accent */}
      <Box
        sx={{
          position: 'absolute',
          top: '-30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, rgba(128, 0, 0, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            backgroundColor: 'rgba(245, 158, 11, 0.2)',
            color: '#FDE68A',
            px: 2,
            py: 0.6,
            borderRadius: 3,
            fontSize: '0.85rem',
            fontWeight: 700,
            mb: 2.5,
            border: '1px solid rgba(245, 158, 11, 0.4)',
          }}
        >
          <Sparkles size={16} />
          <span>{BRAND_INFO.taglineHindi}</span>
        </Box>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1.85rem', sm: '2.4rem', md: '2.9rem' },
            mb: 2,
            color: '#FFFDF8',
            fontFamily: '"Noto Sans Devanagari", "Cinzel", serif',
            lineHeight: 1.25,
          }}
        >
          माँ के दर्शन की तैयारी आज ही करें
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#FEF3C7',
            fontSize: { xs: '1rem', md: '1.15rem' },
            maxWidth: 680,
            mx: 'auto',
            mb: 4,
            lineHeight: 1.7,
          }}
        >
          दर्शन, पूजा, पंडित जी, ठहरने, भोजन और स्थानीय सहायता के लिए RAKA Mishra से तुरंत संपर्क करें।
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<MessageCircle size={22} />}
            sx={{
              backgroundColor: '#25D366',
              color: '#FFF',
              fontWeight: 800,
              fontSize: '1.05rem',
              py: 1.5,
              px: 4,
              borderRadius: 3,
              boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                backgroundColor: '#1EBE5D',
              }
            }}
          >
            WhatsApp करें
          </Button>

          <Button
            variant="contained"
            color="secondary"
            href={`tel:${BRAND_INFO.phone}`}
            startIcon={<PhoneCall size={20} />}
            sx={{
              fontWeight: 800,
              fontSize: '1.05rem',
              py: 1.5,
              px: 4,
              borderRadius: 3,
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            Call Now ({BRAND_INFO.phone})
          </Button>

          <Button
            variant="outlined"
            onClick={() => onOpenEnquiry && onOpenEnquiry('सामान्य सहायता अनुरोध')}
            sx={{
              color: '#FFFDF8',
              borderColor: 'rgba(253, 230, 138, 0.4)',
              fontWeight: 700,
              fontSize: '1rem',
              py: 1.5,
              px: 3,
              borderRadius: 3,
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                borderColor: '#FDE68A',
                backgroundColor: 'rgba(253, 230, 138, 0.1)',
              }
            }}
          >
            अनुरोध फॉर्म भरें
          </Button>
        </Stack>

        <Typography
          variant="caption"
          sx={{
            display: 'block',
            color: 'rgba(254, 243, 199, 0.7)',
            mt: 3.5,
            fontSize: '0.8rem',
          }}
        >
          * निजी सहायता सेवा • विंध्याचल, मिर्ज़ापुर, उत्तर प्रदेश
        </Typography>
      </Container>
    </Box>
  );
}
