import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Chip,
  Paper,
} from '@mui/material';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/pilgrimageData';

export default function FAQAccordion() {
  const [expanded, setExpanded] = useState('panel-0');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ my: { xs: 4, md: 7 } }}>
      <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 5 } }}>
        <Chip
          icon={<HelpCircle size={15} color="#800000" />}
          label="सामान्य प्रश्नोत्तरी (FAQ)"
          sx={{
            backgroundColor: 'rgba(128, 0, 0, 0.1)',
            color: '#800000',
            fontWeight: 700,
            mb: 1.5,
            border: '1px solid rgba(128, 0, 0, 0.2)',
          }}
        />
        <Typography variant="h3" sx={{ fontWeight: 800, color: '#800000', fontSize: { xs: '1.7rem', md: '2.4rem' }, mb: 1 }}>
          श्रद्धालुओं द्वारा पूछे जाने वाले प्रमुख प्रश्न
        </Typography>
        <Typography variant="body1" sx={{ color: '#5C4941', maxWidth: 650, mx: 'auto', fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
          मंदिर दर्शन, पूजा, विशेष सहायता एवं नियमों से जुड़े आपके सभी सवालों के स्पष्ट व प्रमाणिक उत्तर
        </Typography>
      </Box>

      <Box sx={{ maxWidth: 880, mx: 'auto' }}>
        {FAQS.map((faq, index) => {
          const panelId = `panel-${index}`;
          const isCurrentExpanded = expanded === panelId;

          return (
            <Accordion
              key={index}
              expanded={isCurrentExpanded}
              onChange={handleChange(panelId)}
              elevation={0}
              sx={{
                mb: 1.5,
                borderRadius: '16px !important',
                border: isCurrentExpanded ? '1.5px solid #800000' : '1px solid rgba(217, 119, 6, 0.2)',
                backgroundColor: isCurrentExpanded ? '#FFFDF8' : '#FFFFFF',
                boxShadow: isCurrentExpanded ? '0 8px 24px rgba(128, 0, 0, 0.08)' : 'none',
                overflow: 'hidden',
                '&:before': { display: 'none' },
                transition: 'all 0.25s ease',
              }}
            >
              <AccordionSummary
                expandIcon={<ChevronDown color={isCurrentExpanded ? '#800000' : '#78655C'} />}
                sx={{
                  px: { xs: 2, sm: 3 },
                  py: 1,
                  '& .MuiAccordionSummary-content': { my: 1 },
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: isCurrentExpanded ? '#800000' : '#231815',
                    fontSize: { xs: '0.98rem', sm: '1.08rem' },
                    lineHeight: 1.4,
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ px: { xs: 2, sm: 3 }, pb: 2.5, pt: 0 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#4A3B32',
                    lineHeight: 1.75,
                    fontSize: '0.96rem',
                    borderTop: '1px solid rgba(217, 119, 6, 0.12)',
                    pt: 1.5,
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
}
