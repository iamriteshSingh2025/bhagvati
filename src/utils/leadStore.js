// Utility for managing leads, enquiry submissions, and direct WhatsApp formatting

const LEADS_STORAGE_KEY = 'vindhya_pilgrim_leads_v1';

export const getStoredLeads = () => {
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    if (!raw) return getDefaultDemoLeads();
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading leads from storage', err);
    return getDefaultDemoLeads();
  }
};

export const saveLead = (leadData) => {
  try {
    const existing = getStoredLeads();
    const newLead = {
      id: 'LEAD-' + Date.now().toString(36).toUpperCase(),
      createdAt: new Date().toISOString(),
      status: 'New', // 'New' | 'Contacted' | 'Confirmed' | 'Completed' | 'Cancelled'
      ...leadData,
    };
    const updated = [newLead, ...existing];
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
    return newLead;
  } catch (err) {
    console.error('Error saving lead', err);
    return leadData;
  }
};

export const updateLeadStatus = (leadId, newStatus) => {
  try {
    const existing = getStoredLeads();
    const updated = existing.map(item => item.id === leadId ? { ...item, status: newStatus } : item);
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Error updating lead status', err);
    return [];
  }
};

export const formatWhatsAppMessage = ({
  name = '',
  phone = '',
  service = 'दर्शन एवं तीर्थ सहायता',
  visitDate = '',
  visitors = '',
  seniorCount = '',
  childrenCount = '',
  message = '',
  specialRequests = '',
}) => {
  let text = `🙏 *जय माँ विंध्यवासिनी* 🙏\n`;
  text += `*तीर्थ सहायता अनुरोध (Mangalam Vindhyachal Dham)*\n\n`;
  if (name) text += `👤 *श्रद्धालु का नाम:* ${name}\n`;
  if (phone) text += `📞 *मोबाइल:* ${phone}\n`;
  if (service) text += `📌 *आवश्यक सेवा:* ${service}\n`;
  if (visitDate) text += `📅 *यात्रा तिथि:* ${visitDate}\n`;
  if (visitors) text += `👥 *कुल सदस्य:* ${visitors}\n`;
  if (seniorCount && seniorCount !== '0') text += `🧓 *वरिष्ठ नागरिक:* ${seniorCount}\n`;
  if (childrenCount && childrenCount !== '0') text += `👶 *बच्चे:* ${childrenCount}\n`;
  if (specialRequests) text += `✨ *विशेष आवश्यकता:* ${specialRequests}\n`;
  if (message) text += `💬 *संदेश:* ${message}\n\n`;
  text += `📍 *सेवा प्रदाता:* अभिषेक मिश्रा (RAKA Mishra), विंध्याचल`;

  return `https://wa.me/918739000333?text=${encodeURIComponent(text)}`;
};

function getDefaultDemoLeads() {
  return [
    {
      id: 'LEAD-DEMO-01',
      createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
      name: 'रमेश कुमार शर्मा',
      phone: '9876543210',
      service: 'विशेष / VIP दर्शन सहायता एवं वरिष्ठ नागरिक',
      visitDate: '2026-09-18',
      visitors: '4',
      seniorCount: '2',
      childrenCount: '0',
      specialRequests: '72 वर्षीय माताजी हेतु व्हीलचेयर सहायता',
      message: 'हम लखनऊ से आ रहे हैं, कृपया सुबह के समय सुगम दर्शन में सहयोग करें।',
      status: 'New'
    },
    {
      id: 'LEAD-DEMO-02',
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
      name: 'संजय त्रिपाठी',
      phone: '9450123456',
      service: 'पंडित जी एवं संकल्प पूजा',
      visitDate: '2026-09-22',
      visitors: '6',
      seniorCount: '1',
      childrenCount: '1',
      specialRequests: 'दुर्गा सप्तशती पाठ व हवन',
      message: 'परिवार की सुख समृद्धि हेतु विशेष अनुष्ठान कराना है।',
      status: 'Contacted'
    },
    {
      id: 'LEAD-DEMO-03',
      createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
      name: 'अमित कुमार श्रीवास्तव',
      phone: '9839876543',
      service: 'संपूर्ण त्रिकोण परिक्रमा एवं होटल',
      visitDate: '2026-09-25',
      visitors: '5',
      seniorCount: '0',
      childrenCount: '2',
      specialRequests: 'मंदिर के पास एसी रूम एवं टैक्सी',
      message: 'मिर्ज़ापुर स्टेशन से पिकअप और तीनों मंदिर दर्शन की योजना बनानी है।',
      status: 'Confirmed'
    }
  ];
}
