# YES DAY CARE CLINIC — Production Marketing Website

A high-performance, visually stunning marketing website built for **YES DAY CARE CLINIC, Kudal (Sindhudurg, Maharashtra, India)**.

Built with **React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion + Lenis**. All clinic content lives in one single typed file: `src/data/clinic.ts`.

---

## 🎨 Visual System & Brand Palette

The site's visual identity is derived directly from the clinic's circular crimson seal:

| Token | Hex / Value | Usage |
|---|---|---|
| `--crimson` | `#D42B24` | Brand red, logo mark, CTAs, ECG line, icon strokes |
| `--crimson-lit` | `#F04438` | Interactive hover states & radial glows |
| `--maroon` | `#7A1512` | Deep authority red for headlines & heavy typographic weight |
| `--ink` | `#2B1A18` | Warm near-black body text |
| `--bg` | `#FDFAF7` | Warm ivory canvas (never stark white or dark) |
| `--surface` | `#FFFFFF` | Clean card background |
| `--blush` | `#FBEDEA` | Subtle neutral section bands |
| `--sand` | `#F3E7DD` | Secondary warm neutral |
| `--sage` | `#6B8F71` | Success states, "Open Now", verified badges |

---

## 🚀 Quick Start (Development & Production)

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (Typecheck + Vite build)
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🛠 How the Clinic Owner Manages the Website

### 1. How to Edit Clinic Content
Open `src/data/clinic.ts`. Every single string on the website is configured here:
- **Phone numbers & WhatsApp:** Update `clinicData.contact.mobile`, `landline`, or `whatsappNumber`.
- **Address:** Modify `clinicData.location`.
- **Clinic Hours:** Update `clinicData.timings.schedule`. Set `confirmed: true` once verified.
- **Doctor Qualifications & Bio:** Update `clinicData.doctor`. Note: `experienceYears: null` will hide the experience line until verified.
- **Services & OPD Pillars:** Modify `clinicData.pillars`. Change `verified: true` to remove the "CONTENT REQUIRED" chips.

### 2. How to Toggle the Top Announcement Bar
In `src/data/clinic.ts`, navigate to `clinicData.announcement`:
```typescript
announcement: {
  enabled: true, // Change to false to hide the announcement banner
  badge: "Upcoming Camp",
  title: "Cardiology & Echocardiography Consultation with Dr. Digambar Naik",
  date: "Specialist Camp Announcement",
  doctor: "Dr. Digambar Naik",
  bookingNumber: "+91 80106 67696",
  ctaText: "Reserve Appointment"
}
```

### 3. How to Swap the Appointment Form Backend
The form submission is centralized behind a single function in `src/lib/enquiry.ts`:
- **Default behavior:** Validates inputs, skips spam bots via honeypot, formats a WhatsApp text message, and returns a direct WhatsApp deep link.
- **Connecting Formspree, EmailJS, or API:** Open `src/lib/enquiry.ts` and replace the simulated delay with your API request (e.g., `fetch("https://formspree.io/f/your_id", ...)`).

### 4. How to Add Photos to the Gallery
1. Place your `.webp` or `.jpg` photo into the `public/images/` directory.
2. Open `src/data/clinic.ts` and locate `clinicData.gallery.items`.
3. Add an entry:
```typescript
{
  id: "g7",
  title: "Modern Ultrasound Suite",
  category: "Facilities", // "Clinic" | "Facilities" | "Care"
  src: "/images/your-photo-name.webp",
  alt: "2D Echocardiography unit at YES Day Care Clinic",
  width: 800,
  height: 600,
  verified: true
}
```

### 5. How to Update the Logo
- When you receive a clean SVG/PNG mark (without the baked-in phone numbers), place it in `public/images/logo-mark.svg`.
- You can customize the SVG rendering directly in `src/components/ui/Seal.tsx`.

---

## 📱 Mobile Architecture
- **Fixed Bottom Bar:** Provides direct one-tap access to ☎ Call, 💬 WhatsApp, and 📅 Appointment.
- **Call Selection Sheet:** Offers both Mobile (`+91 80106 67696`) and Landline (`02362 299002`).
- **Smooth Scrolling:** Powered by Lenis, automatically disabled for users with `prefers-reduced-motion`.
- **48px+ Tap Targets:** Touch targets meet WCAG AA mobile accessibility benchmarks.

---

## ⚖️ Legal & Medical Compliance
- **No Cure Guarantees:** Strictly follows India's *Drugs & Magic Remedies (Objectionable Advertisements) Act, 1954*. Copy is phrased as *"consultation and management"* without guarantees or claims of surgery-free heart cures.
- **Visiting Consultant Notice:** Transparently declares Dr. Digambar Naik's availability as scheduled visiting camps without implying daily residency.
- **Enquiry System:** The appointment form is an enquiry workflow, clearly stated as pending clinic confirmation.
