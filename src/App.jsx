import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

// Components
import TopNoticeTicker from './components/TopNoticeTicker';
import Navbar from './components/Navbar';
import MobileBottomNav from './components/MobileBottomNav';
import FloatingActions from './components/FloatingActions';
import EnquiryModal from './components/EnquiryModal';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import DarshanPage from './pages/DarshanPage';
import PujaPage from './pages/PujaPage';
import PanditPage from './pages/PanditPage';
import ShringarPage from './pages/ShringarPage';
import StayPage from './pages/StayPage';
import FoodPage from './pages/FoodPage';
import TravelPage from './pages/TravelPage';
import CircuitPage from './pages/CircuitPage';
import NoticesPage from './pages/NoticesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminDashboard from './pages/AdminDashboard';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryService, setEnquiryService] = useState('');

  const handleOpenEnquiry = (serviceName = '') => {
    setEnquiryService(serviceName);
    setEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#FBF7F0',
        color: '#231815',
      }}
      className="with-bottom-nav"
    >
      <ScrollToTop />

      {/* Top Alert & Notice Ticker */}
      <TopNoticeTicker />

      {/* Main Navbar */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Page Content Routes */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/darshan" element={<DarshanPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/puja" element={<PujaPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/pandit-ji" element={<PanditPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/shringar" element={<ShringarPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/stay" element={<StayPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/food" element={<FoodPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/travel" element={<TravelPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/circuit" element={<CircuitPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/notices" element={<NoticesPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/about" element={<AboutPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Box>

      {/* Footer */}
      <Footer />

      {/* Global Floating Actions (WhatsApp & Call) */}
      <FloatingActions />

      {/* Sticky Bottom Navigation for Mobile */}
      <MobileBottomNav onOpenEnquiry={handleOpenEnquiry} />

      {/* Global Interactive Enquiry Modal */}
      <EnquiryModal
        open={enquiryOpen}
        onClose={handleCloseEnquiry}
        initialService={enquiryService}
      />
    </Box>
  );
}
