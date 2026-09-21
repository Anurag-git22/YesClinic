import React from 'react';
import { Helmet } from 'react-helmet-async';
import { clinicData } from '@/data/clinic';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  type?: 'website' | 'article' | 'profile';
}

export const SEO: React.FC<SEOProps> = ({
  title = "YES Day Care Clinic Kudal | Polyclinic, Diabetes & Heart Care",
  description = "YES Day Care Clinic in Kudal, Sindhudurg offers cardiology, 2D echocardiography, diabetes care, polyclinic services, and day care observation with Dr. Digambar Naik. Located opposite Police Station.",
  canonicalPath = "/",
  type = "website",
}) => {
  const siteUrl = "https://yesdaycareclinic.com";
  const fullUrl = `${siteUrl}${canonicalPath}`;
  const ogImageUrl = `${siteUrl}/og-image.png`;

  // JSON-LD schema generated dynamically from clinicData
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": clinicData.identity.legalName,
    "alternateName": clinicData.identity.marathiDisplay,
    "description": description,
    "url": siteUrl,
    "logo": `${siteUrl}/favicon.svg`,
    "image": ogImageUrl,
    "telephone": [clinicData.contact.mobile, clinicData.contact.landline],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": clinicData.location.addressLine1,
      "addressLocality": clinicData.location.city,
      "addressRegion": clinicData.location.state,
      "postalCode": clinicData.location.pincode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": clinicData.location.coordinates.lat,
      "longitude": clinicData.location.coordinates.lng
    },
    "medicalSpecialty": [
      "Cardiology",
      "GeneralPractice",
      "Dermatology",
      "Endocrinology"
    ],
    "availableService": clinicData.pillars.map((p) => ({
      "@type": "MedicalTherapy",
      "name": p.title,
      "description": p.shortDesc
    })),
    "founder": {
      "@type": "Physician",
      "name": clinicData.doctor.name,
      "medicalSpecialty": "Cardiology"
    },
    "sameAs": [
      clinicData.contact.instagram.url
    ],
    "priceRange": "$$"
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta
        name="keywords"
        content="Yes Day Care Clinic Kudal, doctor in Kudal, cardiologist Kudal, diabetes clinic Kudal, skin clinic Kudal, polyclinic Sindhudurg, ECG Kudal, 2D echo Kudal, doctor near Kudal police station, यस डे केअर क्लिनिक कुडाळ"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* JSON-LD Structured Data Schema */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
