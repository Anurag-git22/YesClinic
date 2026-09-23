-- ============================================
-- YES DAY CARE CLINIC - SUPABASE SETUP
-- ============================================
-- Run this SQL in your Supabase SQL Editor
-- Dashboard: https://supabase.com/dashboard/project/vmgisxlqcuoxqhiwrsqj

-- ============================================
-- 1. CREATE APPOINTMENTS TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS appointments (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    preferred_date DATE,
    preferred_time VARCHAR(100),
    service_or_doctor VARCHAR(255),
    reason_for_visit TEXT,
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- 2. CREATE INDEXES FOR PERFORMANCE
-- ============================================

CREATE INDEX IF NOT EXISTS idx_phone ON appointments(phone);
CREATE INDEX IF NOT EXISTS idx_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_preferred_date ON appointments(preferred_date);
CREATE INDEX IF NOT EXISTS idx_submission_date ON appointments(submission_date);
CREATE INDEX IF NOT EXISTS idx_created_at ON appointments(created_at);

-- ============================================
-- 3. AUTO-UPDATE updated_at TRIGGER
-- ============================================

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to call the function before each update
DROP TRIGGER IF EXISTS update_appointments_updated_at ON appointments;
CREATE TRIGGER update_appointments_updated_at
BEFORE UPDATE ON appointments
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 4. ENABLE ROW LEVEL SECURITY (RLS)
-- ============================================

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous inserts (for website form submissions)
CREATE POLICY "Allow anonymous inserts"
ON appointments
FOR INSERT
TO anon
WITH CHECK (true);

-- Policy: Allow authenticated users to view all appointments
CREATE POLICY "Allow authenticated reads"
ON appointments
FOR SELECT
TO authenticated
USING (true);

-- Policy: Allow authenticated users to update appointments
CREATE POLICY "Allow authenticated updates"
ON appointments
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Policy: Allow authenticated users to delete appointments
CREATE POLICY "Allow authenticated deletes"
ON appointments
FOR DELETE
TO authenticated
USING (true);

-- ============================================
-- 5. CREATE HELPFUL VIEWS
-- ============================================

-- Today's appointments view
CREATE OR REPLACE VIEW todays_appointments AS
SELECT 
    id,
    full_name,
    phone,
    email,
    preferred_time,
    service_or_doctor,
    reason_for_visit,
    status,
    notes
FROM appointments
WHERE preferred_date = CURRENT_DATE
ORDER BY 
    CASE preferred_time
        WHEN 'Morning (10:00 AM - 2:00 PM)' THEN 1
        WHEN 'Evening (4:30 PM - 8:00 PM)' THEN 2
        ELSE 3
    END;

-- Pending appointments dashboard
CREATE OR REPLACE VIEW pending_appointments_dashboard AS
SELECT 
    id,
    full_name,
    phone,
    email,
    preferred_date,
    preferred_time,
    service_or_doctor,
    reason_for_visit,
    submission_date,
    ROUND(EXTRACT(EPOCH FROM (NOW() - submission_date))/3600, 1) as hours_waiting,
    CASE 
        WHEN EXTRACT(EPOCH FROM (NOW() - submission_date))/3600 > 48 THEN 'urgent'
        WHEN EXTRACT(EPOCH FROM (NOW() - submission_date))/3600 > 24 THEN 'high'
        ELSE 'normal'
    END as priority
FROM appointments
WHERE status = 'pending'
ORDER BY submission_date ASC;

-- ============================================
-- 6. INSERT SAMPLE DATA (OPTIONAL - FOR TESTING)
-- ============================================

-- Uncomment to insert test data:
/*
INSERT INTO appointments (
    full_name,
    phone,
    email,
    preferred_date,
    preferred_time,
    service_or_doctor,
    reason_for_visit,
    status
) VALUES
    ('Ramesh Kadam', '9876543210', 'ramesh@example.com', CURRENT_DATE + 1, 'Morning (10:00 AM - 2:00 PM)', 'Dr. Digambar Naik (Cardiology / Echo)', 'Regular BP checkup and ECG screening', 'pending'),
    ('Sunita Patil', '9876543211', 'sunita@example.com', CURRENT_DATE + 2, 'Evening (4:30 PM - 8:00 PM)', 'Diabetes & Heart Care OPD', 'Diabetes follow-up consultation', 'pending'),
    ('Prakash Naik', '9876543212', NULL, CURRENT_DATE + 1, 'Morning (10:00 AM - 2:00 PM)', 'General Health Checkup', 'Annual health screening', 'confirmed');
*/

-- ============================================
-- 7. USEFUL ADMIN QUERIES
-- ============================================

-- View all pending appointments (newest first)
-- SELECT * FROM appointments WHERE status = 'pending' ORDER BY submission_date DESC;

-- View today's schedule
-- SELECT * FROM todays_appointments;

-- View pending appointments dashboard with priority
-- SELECT * FROM pending_appointments_dashboard;

-- Count appointments by status
-- SELECT status, COUNT(*) FROM appointments GROUP BY status;

-- Confirm an appointment by ID
-- UPDATE appointments SET status = 'confirmed', notes = 'Confirmed via phone' WHERE id = 1;

-- Cancel an appointment by ID
-- UPDATE appointments SET status = 'cancelled', notes = 'Patient cancelled' WHERE id = 1;

-- Search by phone number
-- SELECT * FROM appointments WHERE phone = '9876543210' ORDER BY submission_date DESC;

-- Get upcoming appointments (next 7 days)
-- SELECT * FROM appointments 
-- WHERE preferred_date BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '7 days'
-- AND status IN ('pending', 'confirmed')
-- ORDER BY preferred_date, preferred_time;

-- ============================================
-- SETUP COMPLETE!
-- ============================================
-- Your appointments table is ready to receive form submissions
-- from the YES Day Care Clinic website.
