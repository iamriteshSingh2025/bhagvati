import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Chip, Button, Stack } from '@mui/material';
import { MapPin, PhoneCall, MessageCircle, Wifi, Wind, Car, Check, Shield } from 'lucide-react';
import { BRAND_INFO } from '../data/pilgrimageData';

export default function HotelCard({ hotel, onOpenEnquiry }) {
  const whatsappText = `नमस्ते RAKA Mishra जी, मुझे विंध्याचल में '${hotel.name}' अथवा इससे संबंधित होटल/धर्मशाला के बारे में जानकारी चाहिए।`;
  const whatsappUrl = `https://wa.me/918739000333?text=${encodeURIComponent(whatsappText)}`;

  return (
    <Card
      sx={{
        borderRadius: 3.5,
        overflow: 'hidden',
        border: '1.5px solid rgba(217, 119, 6, 0.2)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 14px 32px rgba(128, 0, 0, 0.12)',
        }
      }}
    >
      <Box sx={{ position: 'relative', height: 180 }}>
        <CardMedia
          component="img"
          height="100%"
          image={hotel.image}
          alt={hotel.name}
          sx={{ objectFit: 'cover' }}
        />
        <Chip
          label="DEMO LISTING"
          size="small"
          sx={{
            position: 'absolute',
            top: 10,
            left: 10,
            backgroundColor: 'rgba(35, 24, 21, 0.85)',
            color: '#FDE68A',
            fontWeight: 700,
            fontSize: '0.68rem',
          }}
        />
        {hotel.tag && (
          <Chip
            label={hotel.tag}
            size="small"
            sx={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              backgroundColor: '#800000',
              color: '#FFFDF8',
              fontWeight: 700,
              fontSize: '0.72rem',
            }}
          />
        )}
      </Box>

      <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#78655C', mb: 0.5 }}>
          <MapPin size={14} color="#D97706" />
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            {hotel.location}
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000', mb: 0.5, fontSize: '1.15rem' }}>
          {hotel.name}
        </Typography>

        <Typography variant="body2" sx={{ color: '#B45309', fontWeight: 700, mb: 1.5 }}>
          {hotel.approxPrice}
        </Typography>

        {/* Amenities */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2, flexGrow: 1 }}>
          {hotel.amenities.map((amenity, idx) => (
            <Chip
              key={idx}
              label={amenity}
              size="small"
              sx={{
                fontSize: '0.72rem',
                backgroundColor: '#F5ECE1',
                color: '#4A3B32',
                fontWeight: 500,
              }}
            />
          ))}
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => onOpenEnquiry && onOpenEnquiry(`होटल सहायता: ${hotel.name}`)}
            startIcon={<PhoneCall size={15} />}
            sx={{ py: 0.9, fontSize: '0.84rem', fontWeight: 700 }}
          >
            कमरा पूछें
          </Button>

          <Button
            variant="outlined"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderColor: '#059669',
              color: '#065F46',
              minWidth: 44,
              px: 1.2,
              '&:hover': { backgroundColor: 'rgba(16, 185, 129, 0.08)' }
            }}
          >
            <MessageCircle size={18} />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
