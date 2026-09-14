// =====================================================================
// REAL LOCAL ASSETS - माँ विंध्यवासिनी दर्शन
// All photos provided by the service provider (Abhishek/RAKA Mishra)
// =====================================================================

// --- Maa Vindhyavasini Real Photos ---
import matajiMain from '../assets/maa photo/WhatsApp Image 2026-09-05 at 10.45.54 PM.jpeg';
import matajiShringar from '../assets/maa photo/WhatsApp Image 2026-09-06 at 1.42.36 PM.jpeg';
import matajiRajshriAarti from '../assets/maa photo/WhatsApp Image 2026-09-06 at 8.50.38 PM.jpeg';
import matajiSayankaal from '../assets/maa photo/WhatsApp Image 2026-09-07 at 8.11.05 PM.jpeg';
import matajiFeetPrasad from '../assets/maa photo/WhatsApp Image 2026-09-07 at 8.11.06 PM.jpeg';
import matajiFull1 from '../assets/maa photo/WhatsApp Image 2026-09-06 at 8.50.37 PM.jpeg';
import matajiFull2 from '../assets/maa photo/WhatsApp Image 2026-09-07 at 1.35.59 PM.jpeg';
import matajiPhool from '../assets/maa photo/WhatsApp Image 2026-09-06 at 1.42.37 PM.jpeg';
import matajiDarshan1 from '../assets/maa photo/WhatsApp Image 2026-09-06 at 1.42.38 PM.jpeg';
import matajiNight from '../assets/maa photo/WhatsApp Image 2026-09-06 at 10.54.51 PM.jpeg';
import matajiUtsav from '../assets/maa photo/WhatsApp Image 2026-09-07 at 10.49.04 AM.jpeg';
import matajiPuja from '../assets/maa photo/WhatsApp Image 2026-09-08 at 12.23.35 PM.jpeg';
import matajiKhul from '../assets/maa photo/WhatsApp Image 2026-09-08 at 2.23.05 PM.jpeg';

// --- Temple & Location Photos ---
import homepagebg from '../assets/maa photo/homepagebg.jpeg';

// --- 360° / Drone Aerial View ---
import view360 from '../assets/maa photo/360 view.jpeg';

// --- Abhishek Mishra (RAKA Mishra / Panda) Portrait ---
import rakaMishraPortrait from '../assets/maa photo/PandaAbhisek mishra.jpeg';

// --- Gallery Photos (all Maa images for gallery section) ---
import gallery1 from '../assets/maa photo/WhatsApp Image 2026-09-06 at 1.42.36 PM (1).jpeg';
import gallery2 from '../assets/maa photo/WhatsApp Image 2026-09-06 at 1.42.36 PM (2).jpeg';
import gallery3 from '../assets/maa photo/WhatsApp Image 2026-09-07 at 1.35.59 PM (1).jpeg';
import gallery4 from '../assets/maa photo/WhatsApp Image 2026-09-07 at 1.36.00 PM (1).jpeg';
import gallery5 from '../assets/maa photo/WhatsApp Image 2026-09-07 at 1.36.00 PM.jpeg';

// =====================================================================
// IMAGES OBJECT — Use this across all components
// =====================================================================
export const IMAGES = {
  // Hero & Temple Background
  homepagebg,

  // Maa Vindhyavasini — Main Divine Photo (used in Hero, Shringar, About sections)
  matajiMain,
  matajiShringar,
  matajiRajshriAarti,
  matajiSayankaal,
  matajiFeetPrasad,
  matajiFull1,
  matajiFull2,
  matajiPhool,
  matajiDarshan1,
  matajiNight,
  matajiUtsav,
  matajiPuja,
  matajiKhul,

  // Convenience aliases used across pages
  matajiAlt: matajiShringar,
  matajiAltar: matajiRajshriAarti,
  templeExterior: homepagebg,
  templeCorridor: matajiSayankaal,
  gangaGhat: matajiFeetPrasad,
  gangaAarti: matajiNight,
  ashtabhujaHill: matajiFull1,
  kaliKhohCave: matajiFull2,
  trikonParikrama: matajiUtsav,

  // 360° Aerial View
  view360,

  // RAKA Mishra / Panda Portrait (real photo — do NOT alter face)
  rakaMishraPortrait,

  // Gallery carousel
  galleryImages: [
    { src: matajiMain, caption: 'माँ विंध्यवासिनी — महालक्ष्मी दर्शन' },
    { src: matajiShringar, caption: 'माँ का दिव्य श्रृंगार — राजश्री आरती' },
    { src: matajiRajshriAarti, caption: 'सायंकाल आरती दर्शन' },
    { src: matajiFull2, caption: 'माँ का भव्य पुष्प श्रृंगार' },
    { src: matajiPhool, caption: 'ताजे पुष्पों का अर्पण' },
    { src: matajiDarshan1, caption: 'माँ के दिव्य चरण दर्शन' },
    { src: matajiNight, caption: 'रात्रि आरती दर्शन' },
    { src: matajiUtsav, caption: 'उत्सव काल श्रृंगार' },
    { src: matajiPuja, caption: 'पवित्र पूजा अर्पण' },
    { src: homepagebg, caption: 'माँ विंध्यवासिनी मंदिर — विंध्याचल' },
    { src: gallery1, caption: 'दर्शन दृश्य' }, 
    { src: gallery3, caption: 'माँ के दरबार में' },
  ],
};

// 360° Panorama Spots — now with real local Vindhyachal images
export const PANORAMA_SPOTS_REAL = [
  {
    id: 'temple-aerial',
    title: 'माँ विंध्यवासिनी मंदिर परिसर — एरियल दृश्य',
    location: 'विंध्याचल धाम (Drone View)',
    description: 'विंध्याचल नगर के मध्य स्थित माँ विंध्यवासिनी मंदिर परिसर का विहंगम ड्रोन दृश्य — त्रिकोण यात्रा मार्ग एवं भक्त प्रांगण।',
    image: view360,
  },
  {
    id: 'mataji-main',
    title: 'माँ विंध्यवासिनी का दिव्य श्रृंगार दर्शन',
    location: 'मुख्य गर्भगृह, विंध्याचल',
    description: 'आदिशक्ति महालक्ष्मी माँ विंध्यवासिनी का भव्य पुष्प एवं स्वर्ण श्रृंगार — राजश्री आरती के समय का दर्शन।',
    image: matajiShringar,
  },
  {
    id: 'mataji-darshan',
    title: 'सायंकाल आरती — माँ का प्रत्यक्ष दर्शन',
    location: 'आरती मंडप, विंध्याचल',
    description: 'संध्या आरती के पावन क्षणों में माँ विंध्यवासिनी का अलौकिक सायंकाल श्रृंगार दर्शन।',
    image: matajiRajshriAarti,
  },
  {
    id: 'temple-bhavan',
    title: 'माँ विंध्यवासिनी मंदिर भवन',
    location: 'विंध्याचल नगर, मिर्ज़ापुर',
    description: 'माँ विंध्यवासिनी का पावन मंदिर प्रांगण — जहां हजारों श्रद्धालु प्रतिदिन माँ के दरबार में शीश नवाते हैं।',
    image: homepagebg,
  },
];
