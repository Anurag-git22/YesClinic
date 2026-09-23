# 🔗 Supabase Integration Setup Guide

## ✅ Installation Complete

The YES Day Care Clinic website is now connected to Supabase for appointment management!

---

## 📋 Setup Steps

### 1️⃣ **Create the Database Table**

1. Go to your Supabase Dashboard:
   ```
   https://supabase.com/dashboard/project/vmgisxlqcuoxqhiwrsqj
   ```

2. Click on **SQL Editor** in the left sidebar

3. Click **New Query**

4. Copy the entire contents of `supabase-setup.sql` file

5. Paste into the SQL Editor

6. Click **Run** (or press `Ctrl/Cmd + Enter`)

✅ This will create:
- `appointments` table with all required columns
- Indexes for fast queries
- Auto-update triggers for `updated_at`
- Row Level Security (RLS) policies
- Helpful views for admin queries

---

## 🔒 Security Configuration (Row Level Security)

The setup automatically configures RLS policies:

- ✅ **Anonymous users** (website visitors) can **INSERT** appointments
- ✅ **Authenticated users** (admin) can **SELECT**, **UPDATE**, **DELETE**
- 🔐 Website form submissions work without authentication
- 🔐 Admin operations require Supabase authentication

---

## 🧪 Test the Integration

### Option 1: Use the Website Form

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open: `http://localhost:5173`

3. Navigate to the appointment form section

4. Fill out and submit the form

5. Check your Supabase Dashboard → **Table Editor** → `appointments` table

### Option 2: Test with SQL

Run this in the SQL Editor:

```sql
-- View all appointments
SELECT * FROM appointments ORDER BY submission_date DESC;

-- Count by status
SELECT status, COUNT(*) FROM appointments GROUP BY status;
```

---

## 📊 Viewing Appointments

### In Supabase Dashboard:

1. Go to **Table Editor** in the left sidebar
2. Select `appointments` table
3. You'll see all form submissions in real-time

### Using SQL Queries:

```sql
-- Today's appointments
SELECT * FROM todays_appointments;

-- Pending appointments with priority
SELECT * FROM pending_appointments_dashboard;

-- Search by phone
SELECT * FROM appointments WHERE phone = '9876543210';

-- Upcoming this week
SELECT * FROM appointments 
WHERE preferred_date BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '7 days'
ORDER BY preferred_date;
```

---

## 🛠️ Admin Operations

### Confirm an Appointment:

```sql
UPDATE appointments 
SET status = 'confirmed', 
    notes = 'Confirmed via phone call'
WHERE id = 1;
```

### Cancel an Appointment:

```sql
UPDATE appointments 
SET status = 'cancelled',
    notes = 'Patient rescheduling requested'
WHERE id = 1;
```

### Mark as Completed:

```sql
UPDATE appointments 
SET status = 'completed'
WHERE id = 1;
```

### Add Notes:

```sql
UPDATE appointments 
SET notes = 'Patient requested evening slot. Dr. Naik available.'
WHERE id = 1;
```

---

## 🔄 How It Works

### Frontend (Website):

1. User fills appointment form
2. Form data validated
3. Data sent to Supabase via `submitEnquiry()` function
4. Success confirmation shown
5. WhatsApp link generated with appointment ID

### Backend (Supabase):

1. Appointment saved to `appointments` table
2. Auto-assigned `id` (primary key)
3. `submission_date` auto-populated
4. Status defaults to `'pending'`
5. `created_at` and `updated_at` timestamps set
6. Row Level Security enforced

---

## 📁 File Structure

```
src/
├── lib/
│   ├── supabase.ts              # Supabase client & types
│   ├── enquiry.ts               # Form submission logic (updated)
│   └── appointments-admin.ts    # Admin helper functions
├── components/
│   └── AppointmentForm.tsx      # Form UI (unchanged)

Root:
├── supabase-setup.sql           # Database schema & setup
└── SUPABASE-SETUP.md           # This file
```

---

## 🔧 Admin Helper Functions

Use these functions in your admin dashboard (requires authentication):

```typescript
import {
  getAppointments,
  getTodaysAppointments,
  getPendingAppointments,
  getUpcomingAppointments,
  confirmAppointment,
  cancelAppointment,
  completeAppointment,
  getPatientHistory,
  searchAppointmentsByName,
  getAppointmentStats
} from '@/lib/appointments-admin';

// Example: Get all pending appointments
const { data, error } = await getPendingAppointments();

// Example: Confirm appointment #5
await confirmAppointment(5, 'Confirmed for 11:00 AM slot');

// Example: Get patient history
const history = await getPatientHistory('9876543210');

// Example: Get statistics
const stats = await getAppointmentStats();
```

---

## 🚀 Deployment Checklist

### For Vercel Deployment:

✅ Supabase credentials are **hardcoded** in `src/lib/supabase.ts`  
✅ No `.env` file needed (public anon key is safe to commit)  
✅ Build command: `npm run build`  
✅ Output directory: `dist`

### After Deployment:

1. Test form submission on production URL
2. Verify data appears in Supabase dashboard
3. Test WhatsApp deep link generation
4. Check that appointment ID shows in WhatsApp message

---

## 🔐 Environment Variables (Optional)

If you want to use `.env` instead of hardcoded values:

### Create `.env.local`:

```bash
VITE_SUPABASE_URL=https://vmgisxlqcuoxqhiwrsqj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtZ2lzeGxxY3VveHFoaXdyc3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAxODA2NDMsImV4cCI6MjEwNTc1NjY0M30.Mt4If2ZJGB5QJioudzJFIxL-SFTpQiO39fplIaBInXA
```

### Update `src/lib/supabase.ts`:

```typescript
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
```

### Add to Vercel:

Dashboard → Settings → Environment Variables → Add both variables

---

## 📞 Support

If you encounter issues:

1. Check Supabase Dashboard → **Logs** for errors
2. Check browser console for JavaScript errors
3. Verify RLS policies are enabled: **Authentication** → **Policies**
4. Test with SQL Editor queries first

---

## ✅ Status: READY FOR PRODUCTION

Your appointment form is now:
- ✅ Connected to Supabase
- ✅ Storing data in PostgreSQL
- ✅ Secured with Row Level Security
- ✅ Generating WhatsApp links with appointment IDs
- ✅ Ready for admin dashboard integration

**Next Step:** Run the `supabase-setup.sql` file in your Supabase SQL Editor!
