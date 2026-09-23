import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const SUPABASE_URL = 'https://vmgisxlqcuoxqhiwrsqj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtZ2lzeGxxY3VveHFoaXdyc3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAxODA2NDMsImV4cCI6MjEwNTc1NjY0M30.Mt4If2ZJGB5QJioudzJFIxL-SFTpQiO39fplIaBInXA';

// Create Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Database types
export interface AppointmentRow {
  id?: number;
  full_name: string;
  phone: string;
  email?: string | null;
  preferred_date?: string | null;
  preferred_time?: string | null;
  service_or_doctor?: string | null;
  reason_for_visit?: string | null;
  submission_date?: string;
  status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  notes?: string | null;
  created_at?: string;
  updated_at?: string;
}
