import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Stack,
  Card,
  CardContent,
} from '@mui/material';
import {
  Users,
  Bell,
  Sparkles,
  Hotel,
  Car,
  CheckCircle,
  Clock,
  PhoneCall,
  MessageCircle,
  Flame,
  UserCheck,
  Shield,
  Eye,
  RefreshCw,
  Plus,
} from 'lucide-react';
import { getStoredLeads, updateLeadStatus } from '../utils/leadStore';
import { LIVE_NOTICES, DEMO_HOTELS, BRAND_INFO } from '../data/pilgrimageData';

export default function AdminDashboard() {
  const [tabIndex, setTabIndex] = useState(0);
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [openStatusModal, setOpenStatusModal] = useState(false);
  const [newStatus, setNewStatus] = useState('New');

  useEffect(() => {
    setLeads(getStoredLeads());
  }, []);

  const handleRefreshLeads = () => {
    setLeads(getStoredLeads());
  };

  const handleOpenStatus = (lead) => {
    setSelectedLead(lead);
    setNewStatus(lead.status || 'New');
    setOpenStatusModal(true);
  };

  const handleSaveStatus = () => {
    if (selectedLead) {
      const updated = updateLeadStatus(selectedLead.id, newStatus);
      setLeads(updated);
      setOpenStatusModal(false);
      setSelectedLead(null);
    }
  };

  const getStatusChip = (status) => {
    switch (status) {
      case 'New':
        return <Chip label="नया अनुरोध (New)" size="small" sx={{ backgroundColor: '#DBEAFE', color: '#1E40AF', fontWeight: 700 }} />;
      case 'Contacted':
        return <Chip label="संपर्क किया गया (Contacted)" size="small" sx={{ backgroundColor: '#FEF3C7', color: '#92400E', fontWeight: 700 }} />;
      case 'Confirmed':
        return <Chip label="पुष्ट (Confirmed)" size="small" sx={{ backgroundColor: '#D1FAE5', color: '#065F46', fontWeight: 700 }} />;
      case 'Completed':
        return <Chip label="संपन्न (Completed)" size="small" sx={{ backgroundColor: '#EDE9FE', color: '#5B21B6', fontWeight: 700 }} />;
      case 'Cancelled':
        return <Chip label="रद्द (Cancelled)" size="small" sx={{ backgroundColor: '#FEE2E2', color: '#991B1B', fontWeight: 700 }} />;
      default:
        return <Chip label={status || 'New'} size="small" />;
    }
  };

  return (
    <Box sx={{ py: { xs: 3, md: 6 }, backgroundColor: '#F8F6F0', minHeight: '80vh' }}>
      <Container maxWidth="xl">
        
        {/* Admin Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, flexWrap: 'wrap', gap: 2 }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Chip label="Admin Control Panel" size="small" sx={{ backgroundColor: '#800000', color: '#FFF', fontWeight: 800 }} />
              <Typography variant="caption" sx={{ color: '#78655C' }}>
                भविष्य के बैकएंड इंटीग्रेशन हेतु तैयार
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#800000', mt: 0.5 }}>
              विंध्याचल तीर्थ सेवा प्रबंधन डैशबोर्ड
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <Button
              variant="outlined"
              onClick={handleRefreshLeads}
              startIcon={<RefreshCw size={16} />}
              sx={{ borderColor: '#800000', color: '#800000', fontWeight: 600 }}
            >
              रिफ्रेश करें
            </Button>
          </Box>
        </Box>

        {/* Top Summary Metrics */}
        <Grid container spacing={2.5} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2.5, borderRadius: 3, backgroundColor: '#FFFFFF', border: '1px solid rgba(217, 119, 6, 0.2)' }}>
              <Typography variant="caption" sx={{ color: '#78655C', fontWeight: 600 }}>
                कुल प्राप्त अनुरोध (Total Leads)
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#800000', mt: 0.5 }}>
                {leads.length}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2.5, borderRadius: 3, backgroundColor: '#FFFFFF', border: '1px solid rgba(217, 119, 6, 0.2)' }}>
              <Typography variant="caption" sx={{ color: '#1E40AF', fontWeight: 600 }}>
                नए अनुरोध (New Inquiries)
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#1E40AF', mt: 0.5 }}>
                {leads.filter((l) => l.status === 'New').length}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2.5, borderRadius: 3, backgroundColor: '#FFFFFF', border: '1px solid rgba(217, 119, 6, 0.2)' }}>
              <Typography variant="caption" sx={{ color: '#065F46', fontWeight: 600 }}>
                पुष्ट सेवाएं (Confirmed)
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#065F46', mt: 0.5 }}>
                {leads.filter((l) => l.status === 'Confirmed' || l.status === 'Completed').length}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2.5, borderRadius: 3, backgroundColor: '#FFFFFF', border: '1px solid rgba(217, 119, 6, 0.2)' }}>
              <Typography variant="caption" sx={{ color: '#92400E', fontWeight: 600 }}>
                सक्रिय दैनिक सूचनाएं (Notices)
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#92400E', mt: 0.5 }}>
                {LIVE_NOTICES.length}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Dashboard Tabs */}
        <Paper sx={{ borderRadius: 3, overflow: 'hidden', mb: 4 }}>
          <Tabs
            value={tabIndex}
            onChange={(e, val) => setTabIndex(val)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid rgba(217, 119, 6, 0.2)',
              '& .MuiTab-root': { fontWeight: 700, fontSize: '0.94rem' },
            }}
          >
            <Tab label="श्रद्धालु अनुरोध (Leads)" icon={<Users size={18} />} iconPosition="start" />
            <Tab label="दैनिक सूचनाएं (Notices)" icon={<Bell size={18} />} iconPosition="start" />
            <Tab label="होटल सूचियां (Stay)" icon={<Hotel size={18} />} iconPosition="start" />
            <Tab label="सिस्टम सेटिंग्स" icon={<Shield size={18} />} iconPosition="start" />
          </Tabs>

          <Box sx={{ p: 3 }}>
            {/* Tab 0: Leads Table */}
            {tabIndex === 0 && (
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000' }}>
                    श्रद्धालु सहायता अनुरोध तालिका
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#78655C' }}>
                    (स्थानीय ब्राउज़र स्टोरेज में संचित)
                  </Typography>
                </Box>

                <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #E5E7EB', borderRadius: 2 }}>
                  <Table>
                    <TableHead sx={{ backgroundColor: '#F9FAFB' }}>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 700 }}>ID / दिनांक</TableCell>
                        <TableCell sx={{ fontWeight: 700 }}>श्रद्धालु नाम</TableCell>
                        <TableCell sx={{ fontWeight: 700 }}>मोबाइल</TableCell>
                        <TableCell sx={{ fontWeight: 700 }}>आवश्यक सेवा</TableCell>
                        <TableCell sx={{ fontWeight: 700 }}>यात्रा तिथि</TableCell>
                        <TableCell sx={{ fontWeight: 700 }}>स्थिति (Status)</TableCell>
                        <TableCell sx={{ fontWeight: 700 }}>क्रिया</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {leads.map((row) => (
                        <TableRow key={row.id} hover>
                          <TableCell>
                            <Typography variant="caption" sx={{ fontWeight: 700, color: '#800000' }}>{row.id}</Typography>
                            <Typography variant="caption" sx={{ display: 'block', color: '#9CA3AF' }}>
                              {new Date(row.createdAt).toLocaleDateString('hi-IN')}
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>{row.name}</TableCell>
                          <TableCell>
                            <Button
                              size="small"
                              href={`tel:${row.phone}`}
                              startIcon={<PhoneCall size={13} />}
                              sx={{ textTransform: 'none', py: 0.2, fontWeight: 700, color: '#800000' }}
                            >
                              {row.phone}
                            </Button>
                          </TableCell>
                          <TableCell sx={{ fontSize: '0.88rem' }}>{row.service}</TableCell>
                          <TableCell sx={{ fontSize: '0.88rem' }}>{row.visitDate || 'अनिर्धारित'}</TableCell>
                          <TableCell>{getStatusChip(row.status)}</TableCell>
                          <TableCell>
                            <Button
                              size="small"
                              variant="outlined"
                              onClick={() => handleOpenStatus(row)}
                              sx={{ textTransform: 'none', fontSize: '0.75rem', fontWeight: 600 }}
                            >
                              स्थिति बदलें
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}

            {/* Tab 1: Notices Manager */}
            {tabIndex === 1 && (
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000', mb: 2 }}>
                  सक्रिय दैनिक एवं पर्व सूचनाएं
                </Typography>
                <Grid container spacing={2}>
                  {LIVE_NOTICES.map((n) => (
                    <Grid item xs={12} md={6} key={n.id}>
                      <Paper sx={{ p: 2.5, borderRadius: 2, border: '1px solid #E5E7EB' }}>
                        <Chip label={n.tag} size="small" sx={{ mb: 1, fontWeight: 700 }} />
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#800000' }}>{n.title}</Typography>
                        <Typography variant="body2" sx={{ color: '#4A3B32', mt: 0.5 }}>{n.description}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* Tab 2: Stay Directory Manager */}
            {tabIndex === 2 && (
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000', mb: 2 }}>
                  होटल व धर्मशाला प्रविष्टियां (Demo Directory)
                </Typography>
                <Grid container spacing={2}>
                  {DEMO_HOTELS.map((h) => (
                    <Grid item xs={12} sm={6} md={3} key={h.id}>
                      <Paper sx={{ p: 2, borderRadius: 2, border: '1px solid #E5E7EB' }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#800000' }}>{h.name}</Typography>
                        <Typography variant="caption" sx={{ color: '#78655C', display: 'block' }}>{h.location}</Typography>
                        <Typography variant="caption" sx={{ color: '#059669', fontWeight: 700, display: 'block', mt: 0.5 }}>{h.approxPrice}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* Tab 3: System Settings */}
            {tabIndex === 3 && (
              <Box sx={{ maxWidth: 600 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#800000', mb: 2 }}>
                  सिस्टम एवं संपर्क सेटिंग्स
                </Typography>
                <Stack spacing={2}>
                  <TextField fullWidth label="सेवा प्रदाता नाम" defaultValue={BRAND_INFO.founder} size="small" />
                  <TextField fullWidth label="उपनाम / पहचान" defaultValue={BRAND_INFO.founderAlias} size="small" />
                  <TextField fullWidth label="हेल्पलाइन मोबाइल नंबर" defaultValue={BRAND_INFO.phone} size="small" />
                  <TextField fullWidth label="स्थान" defaultValue={BRAND_INFO.location} size="small" />
                  <Button variant="contained" color="primary" sx={{ width: 'fit-content', fontWeight: 700 }}>
                    सेटिंग्स सुरक्षित करें
                  </Button>
                </Stack>
              </Box>
            )}
          </Box>
        </Paper>

        {/* Lead Status Update Dialog */}
        <Dialog open={openStatusModal} onClose={() => setOpenStatusModal(false)}>
          <DialogTitle sx={{ fontWeight: 800, color: '#800000' }}>
            अनुरोध स्थिति अपडेट करें ({selectedLead?.name})
          </DialogTitle>
          <DialogContent sx={{ minWidth: 320, pt: 2 }}>
            <TextField
              select
              fullWidth
              label="नई स्थिति (Status)"
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
              size="small"
              sx={{ mt: 1 }}
            >
              <MenuItem value="New">नया अनुरोध (New)</MenuItem>
              <MenuItem value="Contacted">संपर्क किया गया (Contacted)</MenuItem>
              <MenuItem value="Confirmed">पुष्ट (Confirmed)</MenuItem>
              <MenuItem value="Completed">संपन्न (Completed)</MenuItem>
              <MenuItem value="Cancelled">रद्द (Cancelled)</MenuItem>
            </TextField>
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button onClick={() => setOpenStatusModal(false)}>रद्द करें</Button>
            <Button variant="contained" onClick={handleSaveStatus} sx={{ fontWeight: 700 }}>
              सुरक्षित करें
            </Button>
          </DialogActions>
        </Dialog>

      </Container>
    </Box>
  );
}
