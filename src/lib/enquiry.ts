import { clinicData } from '@/data/clinic';
import { supabase, AppointmentRow } from './supabase';

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
  appointmentId?: number;
}

/**
 * Single submission gateway for appointment enquiries.
 * Saves to Supabase database and provides WhatsApp deep link.
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

  try {
    // Prepare appointment data for Supabase
    const appointmentData: AppointmentRow = {
      full_name: enquiry.fullName.trim(),
      phone: enquiry.phone.trim(),
      email: enquiry.email?.trim() || null,
      preferred_date: enquiry.preferredDate || null,
      preferred_time: enquiry.preferredTime || null,
      service_or_doctor: enquiry.serviceOrDoctor || null,
      reason_for_visit: enquiry.reasonForVisit?.trim() || null,
      status: 'pending'
    };

    // Insert into Supabase
    const { data, error } = await supabase
      .from('appointments')
      .insert([appointmentData])
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return {
        success: false,
        message: "Failed to save appointment. Please try again or call the clinic directly."
      };
    }

    // Format WhatsApp enquiry text
    const textLines = [
      `*NEW APPOINTMENT ENQUIRY - YES DAY CARE CLINIC*`,
      `----------------------------------------`,
      `*Appointment ID:* #${data.id}`,
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

    return {
      success: true,
      message: "Thank you. Your appointment request has been received. The clinic will contact you shortly.",
      whatsappUrl,
      appointmentId: data.id
    };

  } catch (err) {
    console.error('Unexpected error during appointment submission:', err);
    return {
      success: false,
      message: "Something went wrong while submitting. Please call the clinic directly."
    };
  }
}
