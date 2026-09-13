import React, { useState, useRef } from 'react';
import { Box, Typography, Button, IconButton, Chip, Stack, Paper } from '@mui/material';
import { Eye, RotateCw, Maximize2, Minimize2, Compass, MapPin, ZoomIn, ZoomOut } from 'lucide-react';
import { PANORAMA_SPOTS_REAL as PANORAMA_SPOTS } from '../utils/assets';

export default function PanoramaViewer() {
  const [activeSpot, setActiveSpot] = useState(PANORAMA_SPOTS[0]);
  const [posX, setPosX] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const delta = clientX - startX;
    setPosX((prev) => {
      let next = prev - delta * 0.12;
      if (next < 0) next = 0;
      if (next > 100) next = 100;
      return next;
    });
    setStartX(clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(() => {});
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  return (
    <Box sx={{ width: '100%', my: { xs: 4, md: 6 } }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Chip
          icon={<Compass size={15} color="#D97706" />}
          label="आभासी दर्शन अनुभव (Visual Experience)"
          sx={{
            backgroundColor: 'rgba(217, 119, 6, 0.12)',
            color: '#B45309',
            fontWeight: 700,
            mb: 1.5,
            border: '1px solid rgba(217, 119, 6, 0.3)',
          }}
        />
        <Typography variant="h3" sx={{ fontWeight: 800, color: '#800000', fontSize: { xs: '1.7rem', md: '2.3rem' }, mb: 1 }}>
          विंध्याचल को 360° / पैनोरमा में देखें
        </Typography>
        <Typography variant="body1" sx={{ color: '#5C4941', maxWidth: 680, mx: 'auto', fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
          माँ के धाम का विहंगम दृश्य — माउस अथवा उंगली से बाएं-दाएं ड्रैग करके अनुभव करें
        </Typography>
      </Box>

      {/* Spot Selectors */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          justifyContent: { xs: 'flex-start', md: 'center' },
          overflowX: 'auto',
          pb: 1.5,
          mb: 2,
          px: 1,
          '&::-webkit-scrollbar': { height: 4 },
        }}
      >
        {PANORAMA_SPOTS.map((spot) => {
          const isActive = activeSpot.id === spot.id;
          return (
            <Button
              key={spot.id}
              onClick={() => {
                setActiveSpot(spot);
                setPosX(50);
              }}
              variant={isActive ? 'contained' : 'outlined'}
              size="small"
              startIcon={<MapPin size={15} />}
              sx={{
                whiteSpace: 'nowrap',
                borderRadius: 3,
                px: 2,
                py: 0.8,
                fontSize: '0.86rem',
                fontWeight: 600,
                ...(isActive
                  ? {
                      backgroundColor: '#800000',
                      color: '#FFFDF8',
                      boxShadow: '0 4px 12px rgba(128, 0, 0, 0.25)',
                    }
                  : {
                      borderColor: 'rgba(217, 119, 6, 0.3)',
                      color: '#4A3B32',
                      backgroundColor: '#FFFDF8',
                      '&:hover': {
                        borderColor: '#800000',
                        backgroundColor: 'rgba(128, 0, 0, 0.05)',
                      },
                    }),
              }}
            >
              {spot.title}
            </Button>
          );
        })}
      </Stack>

      {/* Panorama Canvas Area */}
      <Paper
        ref={containerRef}
        elevation={4}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        sx={{
          position: 'relative',
          height: { xs: 340, sm: 420, md: 500 },
          borderRadius: 4,
          overflow: 'hidden',
          cursor: isDragging ? 'grabbing' : 'grab',
          border: '2px solid rgba(217, 119, 6, 0.3)',
          backgroundImage: `url(${activeSpot.image})`,
          backgroundPosition: `${posX}% center`,
          backgroundSize: `${160 * zoomLevel}% cover`,
          backgroundRepeat: 'no-repeat',
          transition: isDragging ? 'none' : 'background-position 0.2s ease-out',
          userSelect: 'none',
        }}
      >
        {/* Dark Vignette Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(35, 24, 21, 0.3) 0%, transparent 40%, rgba(35, 24, 21, 0.75) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Drag Hint */}
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            backgroundColor: 'rgba(35, 24, 21, 0.75)',
            backdropFilter: 'blur(8px)',
            color: '#FDE68A',
            py: 0.6,
            px: 1.5,
            borderRadius: 2,
            border: '1px solid rgba(245, 158, 11, 0.3)',
            fontSize: '0.8rem',
            fontWeight: 600,
          }}
        >
          <RotateCw size={14} />
          <span>बाएं-दाएं ड्रैग करें (Drag 360°)</span>
        </Box>

        {/* Controls (Zoom, Fullscreen) */}
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <IconButton
            size="small"
            onClick={() => setZoomLevel((z) => Math.min(z + 0.2, 1.8))}
            sx={{
              backgroundColor: 'rgba(35, 24, 21, 0.8)',
              color: '#FFFDF8',
              '&:hover': { backgroundColor: '#800000' }
            }}
          >
            <ZoomIn size={18} />
          </IconButton>

          <IconButton
            size="small"
            onClick={() => setZoomLevel((z) => Math.max(z - 0.2, 1))}
            sx={{
              backgroundColor: 'rgba(35, 24, 21, 0.8)',
              color: '#FFFDF8',
              '&:hover': { backgroundColor: '#800000' }
            }}
          >
            <ZoomOut size={18} />
          </IconButton>

          <IconButton
            size="small"
            onClick={toggleFullscreen}
            sx={{
              backgroundColor: 'rgba(35, 24, 21, 0.8)',
              color: '#FFFDF8',
              '&:hover': { backgroundColor: '#800000' }
            }}
          >
            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </IconButton>
        </Box>

        {/* Spot Info Badge Bottom */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            right: 16,
            backgroundColor: 'rgba(35, 24, 21, 0.85)',
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            p: { xs: 1.5, sm: 2 },
            border: '1px solid rgba(245, 158, 11, 0.3)',
            color: '#FFFDF8',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 1,
          }}
        >
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#FDE68A', fontSize: { xs: '0.95rem', sm: '1.05rem' } }}>
              {activeSpot.title}
            </Typography>
            <Typography variant="body2" sx={{ color: '#F3E8E2', fontSize: '0.82rem', maxWidth: 650 }}>
              {activeSpot.description}
            </Typography>
          </Box>
          <Chip
            size="small"
            label={activeSpot.location}
            sx={{
              backgroundColor: 'rgba(217, 119, 6, 0.3)',
              color: '#FFFDF8',
              fontWeight: 600,
              fontSize: '0.75rem',
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
}
