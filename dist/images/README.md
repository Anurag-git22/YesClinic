# YES DAY CARE CLINIC — Media & Photography Requirements

To replace the temporary abstract vector placeholders with authentic, high-resolution photography of the clinic, please supply the following assets according to the guidelines below.

---

## 1. Brand Logo Assets (Urgent Request)
- **File types required:** `.svg` (vector) and `.png` (high-resolution with transparent background, minimum 1200×1200px).
- **Clean Circular Mark:** A version of the circular seal containing only the flowing script "Yes" and the Devanagari text "डे केअर क्लिनिक" **without phone numbers** embedded inside the ring. (Phone numbers inside small 44px navbar icons are illegible and cause clutter; the clean mark will be utilized for headers, favicons, watermarks, and app icons).
- **Full Seal Stamp:** The complete emblem with contact numbers and border perimeter for large print and footer wax-seal applications.

---

## 2. Real Photography Checklist
Please photograph the premises during good daytime lighting (avoiding flash reflections).

| Asset Description | Suggested File Name | Target Resolution | Recommended Aspect Ratio |
|---|---|---|---|
| **Exterior Façade & Entrance** (Showing the ground-floor clinic board opposite Kudal Police Station) | `clinic-exterior.webp` / `.jpg` | 1920×1080px | 16:9 or 4:3 |
| **Patient Reception & Front Desk** | `clinic-reception.webp` / `.jpg` | 1600×1200px | 4:3 |
| **Patient Waiting Area** (Clean chairs, ambient warm lighting) | `waiting-area.webp` / `.jpg` | 1600×1200px | 4:3 |
| **Doctor Consultation Suite** (Desk, examination couch) | `consultation-room.webp` / `.jpg` | 1600×1200px | 4:3 |
| **2D Echocardiography & ECG Station** (Ultrasound unit and monitor) | `echo-equipment.webp` / `.jpg` | 1600×1200px | 4:3 |
| **Day Care Recovery Beds** (Observation unit, clean linens) | `daycare-beds.webp` / `.jpg` | 1600×1200px | 4:3 |
| **Dr. Digambar Naik Portrait** (Professional medical coat / formal attire) | `dr-digambar-naik.webp` / `.jpg` | 1200×1200px | 1:1 (Square) |
| **Nursing & Clinical Staff in Action** (Checking vitals, taking ECG) | `clinical-staff.webp` / `.jpg` | 1600×1200px | 4:3 |
| **Health Camps & Community Events** (Patient awareness camps, inauguration) | `health-camp-1.webp` / `.jpg` | 1600×1200px | 4:3 |

---

## 3. Strict Patient Privacy & Legal Notice
- **Patient Privacy Consent:** Any photograph depicting patients undergoing examination or treatment requires explicit, written consent from the patient or legal guardian.
- **Stock Photos:** Never download stock photos of random doctors from the internet to represent Dr. Digambar Naik or clinic staff. Using non-staff images risks regulatory violation by state medical councils.

---

## 4. How to Update Images in Code
Once files are saved into `/public/images/`:
1. Open `src/data/clinic.ts`.
2. Update the `imageUrl` in `clinicData.pillars` and `src` paths in `clinicData.gallery.items`.
3. Set `doctor.photoUrl` to `"/images/dr-digambar-naik.webp"`.
4. Toggle `verified: true` for the corresponding items in `clinic.ts`.
