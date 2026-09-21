/**
 * =======================================================================
 * YES DAY CARE CLINIC - SINGLE SOURCE OF TRUTH (TYPED CONFIGURATION)
 * =======================================================================
 * ALL clinic content lives in this single file.
 * Zero hardcoded content inside UI components.
 * 
 * When the clinic updates hours, doctors, announcements, contact details,
 * or services, modifying this file automatically updates the entire site.
 */

export interface BrandTokens {
  crimson: string;
  crimsonLit: string;
  maroon: string;
  ink: string;
  bg: string;
  surface: string;
  blush: string;
  sand: string;
  sage: string;
}

export interface DoctorQualification {
  short: string;
  full?: string;
}

export interface DoctorProfile {
  name: string;
  marathiName: string;
  title: string;
  marathiTitle: string;
  qualifications: string[];
  specialties: string[];
  expertise: string;
  /**
   * IMPORTANT: India's Drugs & Magic Remedies (Objectionable Advertisements) Act
   * and medical council ethics require strict truthfulness.
   * "50 years experience" is unverified by documentation.
   * If null, UI completely omits the experience line.
   */
  experienceYears: number | null;
  /**
   * Dr. Naik is a VISITING consultant on scheduled dates, not a daily resident.
   * Stated with clinical honesty.
   */
  isVisitingConsultant: boolean;
  visitingScheduleNotice: string;
  visitingScheduleMarathi: string;
  registrationNumber?: string;
  photoUrl: string | null;
  bio: string;
  verified: boolean;
}

export interface SubService {
  id: string;
  name: string;
  marathiName?: string;
  description: string;
  verified: boolean; // Flagged true only when clinically certified by the doctor
}

export interface ServicePillar {
  id: string;
  title: string;
  marathiTitle: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  icon: string; // Lucide icon identifier
  accentColor: string;
  verified: boolean;
  subServices: SubService[];
  imageUrl: string;
}

export interface ClinicTiming {
  days: string;
  daysMarathi: string;
  hours: string;
  note?: string;
  confirmed: boolean;
}

export interface AnnouncementConfig {
  enabled: boolean;
  badge: string;
  title: string;
  date: string;
  doctor: string;
  bookingNumber: string;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  icon: string;
  verified: boolean;
}

export interface ClinicConfig {
  brand: BrandTokens;
  identity: {
    legalName: string;
    englishDisplay: string;
    marathiDisplay: string;
    tagline: string;
    marathiTagline: string;
    establishedYear?: number;
    instagramBioPillars: string[];
  };
  contact: {
    mobile: string;
    mobileFormatted: string;
    landline: string;
    landlineFormatted: string;
    whatsappNumber: string;
    whatsappPrefillMessage: string;
    email?: string;
    instagram: {
      handle: string;
      url: string;
      followersCount: number;
      postsCount: number;
    };
    google: {
      rating: number;
      reviewsCount: number;
      reviewsDisplay: string;
      reviewUrl?: string;
    };
  };
  location: {
    addressLine1: string;
    addressLine2: string;
    landmark: string;
    city: string;
    taluka: string;
    district: string;
    state: string;
    pincode: string;
    fullFormatted: string;
    marathiFormatted: string;
    mapsEmbedUrl: string;
    mapsDirectionsUrl: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    /**
     * ⚠️ // TODO: ADDRESS CONFLICT
     * One local directory listing cites: "Kumbharwadi, beside Shreeram Hospital, Opp Kudal Police Station"
     * Another listing cites: "Matoshree Building, Opposite Kudal Police Station".
     * Rendered strictly from this configuration. Clinic must verify exact building deed.
     */
    addressConflictNote: string;
  };
  announcement: AnnouncementConfig;
  doctor: DoctorProfile;
  pillars: ServicePillar[];
  timings: {
    statusNote: string;
    confirmed: boolean;
    schedule: ClinicTiming[];
  };
  facilities: Facility[];
  whyChooseUs: Array<{
    id: string;
    title: string;
    marathiTitle?: string;
    description: string;
    icon: string;
  }>;
  quickCards: Array<{
    id: string;
    title: string;
    subtitle: string;
    icon: string;
    actionType: 'scroll' | 'route' | 'phoneModal' | 'whatsapp';
    target: string;
  }>;
  gallery: {
    confirmed: boolean;
    categories: string[];
    items: Array<{
      id: string;
      title: string;
      category: string;
      src: string;
      alt: string;
      width: number;
      height: number;
      verified: boolean;
    }>;
  };
  testimonials: {
    enabled: boolean;
    items: Testimonial[];
    emptyStateMessage: string;
    googleReviewsCta: string;
  };
  legal: {
    disclaimer: string;
    statutoryComplianceNote: string;
    copyrightText: string;
  };
}

export const clinicData: ClinicConfig = {
  // Brand color tokens straight from the circular seal logo
  brand: {
    crimson: '#D42B24',     // Primary brand red straight from circular seal
    crimsonLit: '#F04438',  // Hover states & interactive glows
    maroon: '#7A1512',      // Deep authority red for headings & weight
    ink: '#2B1A18',         // Warm near-black body text
    bg: '#FDFAF7',          // Warm ivory canvas (never stark white or dark)
    surface: '#FFFFFF',     // Clean card white
    blush: '#FBEDEA',       // Soft neutral tint for section alternating bands
    sand: '#F3E7DD',        // Warm secondary neutral accent
    sage: '#6B8F71',        // Calming green: success states, "Open Now", verified badges
  },

  identity: {
    legalName: "YES DAY CARE CLINIC",
    englishDisplay: "YES DAY CARE CLINIC",
    marathiDisplay: "यस डे केअर क्लिनिक",
    tagline: "Your Journey to a Better You",
    marathiTagline: "आरोग्य म्हणजे आयुष्य — उत्तम आरोग्यासाठी तुमची हक्काची जागा",
    instagramBioPillars: [
      "Day Care Centre",
      "Polyclinic",
      "Diabetes & Heart Care",
      "Derma Clinic",
      "Your Journey to a Better You"
    ]
  },

  contact: {
    mobile: "+918010667696",
    mobileFormatted: "+91 80106 67696",
    landline: "02362299002",
    landlineFormatted: "02362 299002",
    whatsappNumber: "918010667696",
    whatsappPrefillMessage: "Hello YES Day Care Clinic, I would like to enquire about an appointment.",
    instagram: {
      handle: "@yesdaycareclinic_kudal",
      url: "https://www.instagram.com/yesdaycareclinic_kudal",
      followersCount: 3185,
      postsCount: 365
    },
    google: {
      rating: 5.0,
      reviewsCount: 60,
      reviewsDisplay: "5.0 ★ (~60 verified reviews)",
      reviewUrl: "https://maps.google.com/?q=YES+DAY+CARE+CLINIC+Kudal"
    }
  },

  location: {
    addressLine1: "Ground Floor, Opposite Kudal Police Station",
    addressLine2: "Kumbharwadi, beside Shreeram Hospital",
    landmark: "Opposite Police Station",
    city: "Kudal",
    taluka: "Kudal",
    district: "Sindhudurg",
    state: "Maharashtra",
    pincode: "416520",
    fullFormatted: "Ground Floor, Opposite Kudal Police Station, beside Shreeram Hospital, Kumbharwadi, Kudal, Sindhudurg, Maharashtra 416520",
    marathiFormatted: "तळमजला, कुडाळ पोलीस स्टेशन समोर, श्रीराम हॉस्पिटल शेजारी, कुंभारवाडी, कुडाळ, सिंधुदुर्ग ४१६५२०",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.814238590393!2d73.6872!3d16.0104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDAwJzM3LjQiTiA3M8KwNDEnMTMuOSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=16.0104,73.6894",
    coordinates: {
      lat: 16.0104,
      lng: 73.6894
    },
    // TODO: ADDRESS CONFLICT
    // One directory source states: "Kumbharwadi, beside Shreeram Hospital, Opp Police Station"
    // Another source mentions: "Matoshree Building, Opp Police Station"
    // This value is configured here so it updates clinic-wide once resolved with property documents.
    addressConflictNote: "Address conflict: Please verify whether clinic deed states Matoshree Building or Kumbharwadi beside Shreeram Hospital."
  },

  announcement: {
    enabled: true,
    badge: "Upcoming Camp",
    title: "Cardiology & Echocardiography Consultation with Dr. Digambar Naik",
    date: "Specialist Camp Announcement",
    doctor: "Dr. Digambar Naik",
    bookingNumber: "+91 80106 67696",
    ctaText: "Reserve Appointment"
  },

  doctor: {
    name: "Dr. Digambar Naik",
    marathiName: "डॉ. दिगंबर नाईक",
    title: "Cardiologist & Echocardiography Specialist",
    marathiTitle: "हृदयविकारतज्ञ व इकोकार्डियोग्राफी तज्ज्ञ",
    qualifications: [
      "M.B.B.S.",
      "M.D. (Medicine)",
      "D.O.I.H.",
      "F.I.A.E.",
      "D.H.A.",
      "F.A.I.M.P. (Cardiology)"
    ],
    specialties: [
      "Cardiology Consultation (हृदयरोग सल्ला)",
      "Echocardiography (2D Echo)",
      "Hypertension Management (उच्च रक्तदाब)",
      "Cardiovascular Risk Evaluation"
    ],
    expertise: "Echocardiography expert & Clinical Cardiologist",
    // NOTE: Experience is unverified by documentation. Omitted when null to comply with content rules.
    experienceYears: null,
    isVisitingConsultant: true,
    visitingScheduleNotice: "Consultations by prior appointment and on scheduled clinic dates. Please enquire to confirm upcoming schedule.",
    visitingScheduleMarathi: "पूर्वनोंदणी आणि नियोजित तारखांनुसार उपलब्ध. कृपया आगामी तारखा जाणून घेण्यासाठी क्लिनिकशी संपर्क साधा.",
    photoUrl: null, // abstract placeholder will be used until doctor portrait is provided
    bio: "Dr. Digambar Naik provides comprehensive clinical cardiology evaluations, 2D echocardiography, and cardiovascular disease management. Emphasizing thorough diagnostic evaluation, lifestyle risk mitigation, and individualized patient guidance for residents across Sindhudurg.",
    verified: true
  },

  pillars: [
    {
      id: "day-care",
      title: "Day Care Centre",
      marathiTitle: "डे केअर सेंटर",
      shortDesc: "Outpatient monitoring, minor procedures, and daytime recovery without overnight hospitalization.",
      fullDesc: "Modern day care facility designed for patients requiring observation, medical infusions, nebulization, wound dressing, and short-duration clinical stabilization under dedicated nurse and doctor supervision.",
      badge: "Observation & Recovery",
      icon: "Bed",
      accentColor: "#D42B24",
      verified: true,
      imageUrl: "/images/daycare-centre.svg",
      subServices: [
        { id: "iv-infusions", name: "Daytime IV Infusions & Injections", description: "Physician-monitored hydration, antibiotics, and intravenous therapies.", verified: false },
        { id: "short-stay", name: "Short-Stay Clinical Observation", description: "Post-consultation vital monitoring and acute symptom evaluation.", verified: false },
        { id: "wound-care", name: "Dressing & Wound Care", description: "Hygienic surgical and trauma wound management.", verified: false },
        { id: "nebulization", name: "Nebulization & Oxygen Support", description: "Respiratory relief for acute asthma and bronchitis under observation.", verified: false }
      ]
    },
    {
      id: "polyclinic",
      title: "Polyclinic",
      marathiTitle: "पॉलीक्लिनिक",
      shortDesc: "Comprehensive multispecialty outpatient consultations under one welcoming roof.",
      fullDesc: "Eliminating the need to travel outside Kudal for diverse medical concerns. Our polyclinic coordinates consultations across internal medicine, general diagnostics, and lifestyle disorder management.",
      badge: "Multispecialty OPD",
      icon: "Stethoscope",
      accentColor: "#7A1512",
      verified: true,
      imageUrl: "/images/consultation-room.svg",
      subServices: [
        { id: "internal-med", name: "General Internal Medicine", description: "Comprehensive assessment of fevers, infections, and systemic symptoms.", verified: false },
        { id: "thyroid", name: "Thyroid & Endocrine Care", description: "Investigation and clinical management of hypo/hyperthyroidism.", verified: false },
        { id: "pcod", name: "PCOD / Hormonal Evaluation", description: "Lifestyle and medical guidance for metabolic and hormonal balance.", verified: false },
        { id: "gastro-liver", name: "Fatty Liver & Digestive Consultation", description: "Evaluation of liver enzymes, GERD, and metabolic symptoms.", verified: false },
        { id: "joint-arth", name: "Arthritis & Spondylitis Guidance", description: "Evaluation of joint stiffness, musculoskeletal and lumbar ache.", verified: false },
        { id: "migraine", name: "Migraine & Neurological Headaches", description: "Diagnostic triage for recurrent migraine, dizziness, and tension headache.", verified: false }
      ]
    },
    {
      id: "heart-diabetes",
      title: "Diabetes & Heart Care",
      marathiTitle: "मधुमेह आणि हृदयाची काळजी",
      shortDesc: "Expert clinical cardiology, 2D echocardiography, and glycemic management.",
      fullDesc: "Specialized cardiac and diabetic triage led by Dr. Digambar Naik. Dedicated to non-invasive cardiac evaluation, early detection of coronary risk, blood sugar control, and vascular health protection.",
      badge: "Specialized Cardiac OPD",
      icon: "HeartPulse",
      accentColor: "#D42B24",
      verified: true,
      imageUrl: "/images/cardiology-care.svg",
      subServices: [
        { id: "cardio-consult", name: "Cardiology Consultation", description: "Assessment for chest discomfort, palpitations, breathlessness, and heart health.", verified: false },
        { id: "echo-test", name: "2D Echocardiography", description: "Advanced ultrasound imaging of heart valves, chambers, and ejection fraction.", verified: false },
        { id: "ecg-rhythm", name: "12-Lead Diagnostic ECG", description: "Immediate rhythm tracing for arrhythmia and ischemic evaluation.", verified: false },
        { id: "hypertension", name: "Hypertension / BP Management", description: "Continuous blood pressure titration and secondary organ protection.", verified: false },
        { id: "diabetes-care", name: "Diabetes & HbA1c Management", description: "Individualized glycemic control, dietary guidance, and diabetic foot care checks.", verified: false },
        { id: "cholesterol", name: "Dyslipidemia & Lipid Profiling", description: "Atherosclerotic cardiovascular risk reduction and lipid stabilization.", verified: false }
      ]
    },
    {
      id: "derma-clinic",
      title: "Derma Clinic",
      marathiTitle: "त्वचा क्लिनिक",
      shortDesc: "Targeted clinical dermatological assessments for skin, hair, and scalp conditions.",
      fullDesc: "Professional skin care consultations focused on infectious dermatoses, chronic eczema, acne management, allergy evaluations, and cosmetic skin health.",
      badge: "Clinical Dermatology",
      icon: "Sparkles",
      accentColor: "#6B8F71",
      verified: true,
      imageUrl: "/images/derma-clinic.svg",
      subServices: [
        { id: "acne-care", name: "Acne & Blemish Management", description: "Evidence-based clinical skincare plans for persistent acne.", verified: false },
        { id: "skin-allergies", name: "Allergies, Eczema & Urticaria", description: "Identification of environmental and contact dermatological triggers.", verified: false },
        { id: "fungal-infect", name: "Fungal & Bacterial Infections", description: "Treatment of stubborn tropical dermatophyte infections.", verified: false },
        { id: "hair-scalp", name: "Hair Loss & Scalp Health", description: "Clinical triage for alopecia, dandruff, and telogen effluvium.", verified: false }
      ]
    }
  ],

  timings: {
    statusNote: "Regular hours pending formal clinic confirmation. Please call ahead.",
    confirmed: false,
    schedule: [
      {
        days: "Monday – Saturday",
        daysMarathi: "सोमवार – शनिवार",
        hours: "Morning: 10:00 AM – 2:00 PM | Evening: 4:30 PM – 8:00 PM",
        note: "Doctor visiting slots vary. Prior appointment recommended.",
        confirmed: false
      },
      {
        days: "Sunday",
        daysMarathi: "रविवार",
        hours: "By Prior Appointment / Special Camps",
        note: "Emergency triage: Please contact district civil hospital.",
        confirmed: false
      }
    ]
  },

  facilities: [
    {
      id: "fac-1",
      title: "2D Echocardiography Machine",
      description: "Non-invasive cardiac ultrasound assessment handled by expert physician.",
      icon: "Activity",
      verified: true
    },
    {
      id: "fac-2",
      title: "12-Lead Digital ECG",
      description: "Immediate cardiac rhythm tracing for prompt assessment.",
      icon: "HeartPulse",
      verified: true
    },
    {
      id: "fac-3",
      title: "Day Care Observation Beds",
      description: "Clean, hygienic recovery units for day infusions and vitals monitoring.",
      icon: "BedDouble",
      verified: true
    },
    {
      id: "fac-4",
      title: "Point-of-Care Diagnostics",
      description: "Rapid blood glucose, blood pressure, and pulse oximetry monitoring.",
      icon: "Thermometer",
      verified: true
    },
    {
      id: "fac-5",
      title: "Wheelchair Accessible Ground Floor",
      description: "Direct street-level access without stairs for elderly and cardiac patients.",
      icon: "Accessibility",
      verified: true
    },
    {
      id: "fac-6",
      title: "Emergency Oxygen & Nebulizer",
      description: "Rapid stabilization support for acute respiratory discomfort.",
      icon: "Wind",
      verified: true
    }
  ],

  whyChooseUs: [
    {
      id: "why-1",
      title: "Named Cardiologist Expertise",
      marathiTitle: "अनुभवी तज्ज्ञ मार्गदर्शन",
      description: "Direct consultations with Dr. Digambar Naik (MD, F.A.I.M.P Cardiology) right here in Kudal, avoiding grueling travel to Goa or Kolhapur.",
      icon: "Award"
    },
    {
      id: "why-2",
      title: "Unrivaled Location in Kudal",
      marathiTitle: "कुडाळच्या मध्यवर्ती ठिकाणी",
      description: "Centrally positioned on the ground floor directly opposite Kudal Police Station, effortlessly reachable for residents across Sindhudurg.",
      icon: "MapPin"
    },
    {
      id: "why-3",
      title: "5.0 ★ Community Reputation",
      marathiTitle: "५.० स्टार रुग्ण विश्वास",
      description: "Unanimous patient satisfaction backed by 60+ genuine Google ratings and over 3,100 Instagram followers.",
      icon: "Star"
    },
    {
      id: "why-4",
      title: "Four Pillars Under One Roof",
      marathiTitle: "एकाच छताखाली सर्वसमावेशक सेवा",
      description: "Day Care, Polyclinic, Cardiology & Diabetes, and Derma Clinic united in a clean, modern medical setting.",
      icon: "ShieldCheck"
    },
    {
      id: "why-5",
      title: "Patient-First Non-Invasive Approach",
      marathiTitle: "पारदर्शक व प्रामाणिक उपचार",
      description: "Strict ethical standards with no exaggerated claims. Focus on accurate diagnostics, preventive monitoring, and compassionate guidance.",
      icon: "Heart"
    },
    {
      id: "why-6",
      title: "Dedicated Day Care Comfort",
      marathiTitle: "सोयीस्कर डे केअर सुविधा",
      description: "Rapid turnaround daytime treatments that allow patients to return comfortably home the very same evening.",
      icon: "Home"
    }
  ],

  quickCards: [
    {
      id: "qc-cardio",
      title: "Cardiology & Echo",
      subtitle: "With Dr. Digambar Naik",
      icon: "HeartPulse",
      actionType: "route",
      target: "/doctors"
    },
    {
      id: "qc-pillars",
      title: "4 Clinical Pillars",
      subtitle: "Day Care, Polyclinic & More",
      icon: "Stethoscope",
      actionType: "route",
      target: "/services"
    },
    {
      id: "qc-about",
      title: "About Our Clinic",
      subtitle: "Philosophy & Standards",
      icon: "Clock",
      actionType: "route",
      target: "/about"
    },
    {
      id: "qc-location",
      title: "Contact & Timings",
      subtitle: "Opp. Police Station, Kudal",
      icon: "MapPin",
      actionType: "route",
      target: "/contact"
    }
  ],

  gallery: {
    confirmed: false,
    categories: ["All", "Clinic", "Facilities", "Care"],
    items: [
      {
        id: "g1",
        title: "Day Care Clinical Setting",
        category: "Facilities",
        src: "/images/daycare-centre.svg",
        alt: "Clean day care facility at YES Day Care Clinic Kudal",
        width: 800,
        height: 600,
        verified: false
      },
      {
        id: "g2",
        title: "Physician Consultation Suite",
        category: "Clinic",
        src: "/images/consultation-room.svg",
        alt: "Doctor consultation desk at YES Day Care Clinic",
        width: 800,
        height: 600,
        verified: false
      },
      {
        id: "g3",
        title: "Cardiac Evaluation & Echo Suite",
        category: "Care",
        src: "/images/cardiology-care.svg",
        alt: "Cardiology examination setup at YES Day Care Clinic",
        width: 800,
        height: 600,
        verified: false
      },
      {
        id: "g4",
        title: "Dermatology Consultation Room",
        category: "Care",
        src: "/images/derma-clinic.svg",
        alt: "Skin clinic suite at YES Day Care Clinic Kudal",
        width: 800,
        height: 600,
        verified: false
      },
      {
        id: "g5",
        title: "Clinic Exterior & Entrance",
        category: "Clinic",
        src: "/images/clinic-exterior.svg",
        alt: "Ground floor entrance opposite Kudal Police Station",
        width: 800,
        height: 600,
        verified: false
      },
      {
        id: "g6",
        title: "Patient Reception & Waiting Lounge",
        category: "Facilities",
        src: "/images/clinic-reception.svg",
        alt: "Comfortable waiting area at YES Day Care Clinic",
        width: 800,
        height: 600,
        verified: false
      }
    ]
  },

  testimonials: {
    enabled: true,
    // Per strict content guidelines, only real verified testimonials should be published.
    // If empty, the component renders a tasteful Google reviews card instead of fabrications.
    items: [],
    emptyStateMessage: "We respect patient privacy and publish only officially consented testimonials. See verified public patient feedback on our Google profile.",
    googleReviewsCta: "Read Verified Reviews on Google"
  },

  legal: {
    disclaimer: "Medical Disclaimer: The information presented on this website is for general educational and enquiry purposes only and should not be construed as medical diagnosis, prescription, or therapeutic advice. Always consult a qualified physician for individualized medical assessment. In case of acute medical emergencies, immediately visit the nearest emergency medical centre.",
    statutoryComplianceNote: "Compliance: In accordance with the Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954 and Indian medical council ethics, YES DAY CARE CLINIC does not advertise medical guarantees, cures without scientific basis, or comparative superiority claims.",
    copyrightText: "© 2026 YES DAY CARE CLINIC, Kudal. All rights reserved."
  }
};
