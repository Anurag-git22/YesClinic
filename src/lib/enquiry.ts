import { clinicData } from '@/data/clinic';

export interface AppointmentEnquiry {
  fullName: string;
  phone: string;
  email?: string;
  preferredDate: string;
  preferredTime: string;
  serviceOrDoctor: string;
  reasonForVisit: string;
  honeypot?: string; // Bot deterrent field
}

export interface EnquiryResult {
  success: boolean;
  message: string;
  whatsappUrl?: string;
}

/**
 * Single submission gateway for appointment enquiries.
 * Can be effortlessly swapped with Formspree, EmailJS, Webhook, or custom backend API.
 * Currently defaults to formatting a clean, professional WhatsApp message and returning a deep link.
 */
export async function submitEnquiry(enquiry: AppointmentEnquiry): Promise<EnquiryResult> {
  // Honeypot check - if filled, silently reject as spam bot
  if (enquiry.honeypot && enquiry.honeypot.trim() !== '') {
    return {
      success: true,
      message: "Thank you. Your appointment request has been received. The clinic will contact you shortly."
    };
  }

  // Basic validation
  if (!enquiry.fullName.trim() || !enquiry.phone.trim()) {
    return {
      success: false,
      message: "Please enter your full name and valid phone number."
    };
  }

  // Clean phone input
  const cleanPhone = enquiry.phone.replace(/[^\d+]/g, '');
  if (cleanPhone.length < 10) {
    return {
      success: false,
      message: "Please enter a valid 10-digit mobile number."
    };
  }

  // Format WhatsApp enquiry text
  const textLines = [
    `*NEW APPOINTMENT ENQUIRY - YES DAY CARE CLINIC*`,
    `----------------------------------------`,
    `*Patient Name:* ${enquiry.fullName.trim()}`,
    `*Phone:* ${enquiry.phone.trim()}`,
    enquiry.email ? `*Email:* ${enquiry.email.trim()}` : null,
    `*Preferred Date:* ${enquiry.preferredDate || 'Earliest available'}`,
    `*Preferred Slot:* ${enquiry.preferredTime || 'Any convenient'}`,
    `*Department / Doctor:* ${enquiry.serviceOrDoctor || 'General Consultation'}`,
    enquiry.reasonForVisit ? `*Reason for Visit:* ${enquiry.reasonForVisit.trim()}` : null,
    `----------------------------------------`,
    `_Sent via Website Enquiry Portal_`
  ].filter(Boolean);

  const formattedMessage = textLines.join('\n');
  const encodedText = encodeURIComponent(formattedMessage);
  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodedText}`;

  // Simulate network dispatch delay for realistic UI feedback
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    message: "Thank you. Your appointment request has been received. The clinic will contact you shortly.",
    whatsappUrl
  };
}
