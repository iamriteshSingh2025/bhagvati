import React from 'react';
import { Card, CardContent, Typography, Box, Button, Chip } from '@mui/material';
import {
  Sparkles,
  Crown,
  Flame,
  UserCheck,
  HeartHandshake,
  ShieldCheck,
  Hotel,
  Utensils,
  Car,
  ChevronRight,
  Check,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ICON_MAP = {
  Sparkles: <Sparkles size={26} />,
  Crown: <Crown size={26} />,
  Flame: <Flame size={26} />,
  UserCheck: <UserCheck size={26} />,
  HeartHandshake: <HeartHandshake size={26} />,
  ShieldCheck: <ShieldCheck size={26} />,
  Hotel: <Hotel size={26} />,
  Utensils: <Utensils size={26} />,
  Car: <Car size={26} />,
};

export default function ServiceCard({ service, onOpenEnquiry }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3.5,
        backgroundColor: '#FFFFFF',
        border: '1.5px solid rgba(217, 119, 6, 0.16)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 16px 36px -4px rgba(128, 0, 0, 0.14)',
          borderColor: '#800000',
        },
      }}
    >
      {/* Top Accent Strip */}
      <Box sx={{ height: 4, background: service.bgGrad || 'linear-gradient(90deg, #800000, #D97706)' }} />

      <CardContent sx={{ p: { xs: 2.5, sm: 3 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Header with Icon and Badge */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
          <Box
            sx={{
              width: 52,
              height: 52,
              borderRadius: 3,
              backgroundColor: 'rgba(128, 0, 0, 0.07)',
              color: '#800000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(128, 0, 0, 0.15)',
            }}
          >
            {ICON_MAP[service.icon] || <Sparkles size={24} />}
          </Box>

          {service.badge && (
            <Chip
              label={service.badge}
              size="small"
              sx={{
                fontSize: '0.72rem',
                fontWeight: 700,
                backgroundColor: 'rgba(217, 119, 6, 0.12)',
                color: '#B45309',
                borderRadius: 1.5,
              }}
            />
          )}
        </Box>

        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000', mb: 0.5, fontSize: '1.18rem' }}>
          {service.title}
        </Typography>
        <Typography variant="caption" sx={{ color: '#8C776D', display: 'block', mb: 1.5, fontWeight: 500 }}>
          {service.englishTitle}
        </Typography>

        {/* Description */}
        <Typography variant="body2" sx={{ color: '#4A3B32', mb: 2.5, lineHeight: 1.6, flexGrow: 1 }}>
          {service.description}
        </Typography>

        {/* Features bullet list */}
        {service.features && (
          <Box sx={{ mb: 2.5 }}>
            {service.features.map((feat, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.6 }}>
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(5, 150, 105, 0.15)',
                    color: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 10,
                  }}
                >
                  <Check size={11} />
                </Box>
                <Typography variant="caption" sx={{ color: '#5C4941', fontWeight: 600 }}>
                  {feat}
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        {/* Buttons */}
        <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => onOpenEnquiry && onOpenEnquiry(service.title)}
            sx={{ py: 1, fontSize: '0.88rem', fontWeight: 700 }}
          >
            {service.actionText || 'जानकारी लें'}
          </Button>

          {service.link && (
            <Button
              component={Link}
              to={service.link}
              variant="outlined"
              sx={{
                minWidth: 44,
                px: 1.2,
                borderColor: 'rgba(128, 0, 0, 0.25)',
                color: '#800000',
                '&:hover': { borderColor: '#800000', backgroundColor: 'rgba(128, 0, 0, 0.05)' }
              }}
            >
              <ChevronRight size={18} />
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
