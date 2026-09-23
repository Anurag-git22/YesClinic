/**
 * Admin helper functions for managing appointments
 * These require authentication - use in admin dashboard only
 */

import { supabase, AppointmentRow } from './supabase';

export type AppointmentStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

/**
 * Get all appointments with optional filtering
 */
export async function getAppointments(filters?: {
  status?: AppointmentStatus;
  date?: string;
  phone?: string;
  limit?: number;
}) {
  let query = supabase.from('appointments').select('*');

  if (filters?.status) {
    query = query.eq('status', filters.status);
  }

  if (filters?.date) {
    query = query.eq('preferred_date', filters.date);
  }

  if (filters?.phone) {
    query = query.eq('phone', filters.phone);
  }

  query = query.order('submission_date', { ascending: false });

  if (filters?.limit) {
    query = query.limit(filters.limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching appointments:', error);
    return { success: false, data: null, error };
  }

  return { success: true, data, error: null };
}

/**
 * Get today's appointments
 */
export async function getTodaysAppointments() {
  const today = new Date().toISOString().split('T')[0];
  return getAppointments({ date: today });
}

/**
 * Get pending appointments (awaiting confirmation)
 */
export async function getPendingAppointments() {
  return getAppointments({ status: 'pending' });
}

/**
 * Get upcoming appointments (next 7 days)
 */
export async function getUpcomingAppointments() {
  const today = new Date().toISOString().split('T')[0];
  const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const { data, error } = await supabase
    .from('appointments')
    .select('*')
    .gte('preferred_date', today)
    .lte('preferred_date', nextWeek)
    .in('status', ['pending', 'confirmed'])
    .order('preferred_date', { ascending: true });

  if (error) {
    console.error('Error fetching upcoming appointments:', error);
    return { success: false, data: null, error };
  }

  return { success: true, data, error: null };
}

/**
 * Update appointment status
 */
export async function updateAppointmentStatus(
  id: number,
  status: AppointmentStatus,
  notes?: string
) {
  const updateData: Partial<AppointmentRow> = { status };
  if (notes) {
    updateData.notes = notes;
  }

  const { data, error } = await supabase
    .from('appointments')
    .update(updateData)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating appointment:', error);
    return { success: false, data: null, error };
  }

  return { success: true, data, error: null };
}

/**
 * Confirm appointment
 */
export async function confirmAppointment(id: number, notes?: string) {
  return updateAppointmentStatus(id, 'confirmed', notes || 'Confirmed via phone call');
}

/**
 * Cancel appointment
 */
export async function cancelAppointment(id: number, notes?: string) {
  return updateAppointmentStatus(id, 'cancelled', notes || 'Cancelled by patient');
}

/**
 * Mark appointment as completed
 */
export async function completeAppointment(id: number, notes?: string) {
  return updateAppointmentStatus(id, 'completed', notes || 'Consultation completed');
}

/**
 * Delete appointment (use with caution)
 */
export async function deleteAppointment(id: number) {
  const { error } = await supabase
    .from('appointments')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting appointment:', error);
    return { success: false, error };
  }

  return { success: true, error: null };
}

/**
 * Search appointments by patient name
 */
export async function searchAppointmentsByName(name: string) {
  const { data, error } = await supabase
    .from('appointments')
    .select('*')
    .ilike('full_name', `%${name}%`)
    .order('submission_date', { ascending: false });

  if (error) {
    console.error('Error searching appointments:', error);
    return { success: false, data: null, error };
  }

  return { success: true, data, error: null };
}

/**
 * Get patient appointment history by phone
 */
export async function getPatientHistory(phone: string) {
  const { data, error } = await supabase
    .from('appointments')
    .select('*')
    .eq('phone', phone)
    .order('preferred_date', { ascending: false });

  if (error) {
    console.error('Error fetching patient history:', error);
    return { success: false, data: null, error };
  }

  return { success: true, data, error: null };
}

/**
 * Get appointment statistics
 */
export async function getAppointmentStats() {
  const { data, error } = await supabase
    .from('appointments')
    .select('status');

  if (error) {
    console.error('Error fetching stats:', error);
    return { success: false, stats: null, error };
  }

  const stats = {
    total: data.length,
    pending: data.filter(a => a.status === 'pending').length,
    confirmed: data.filter(a => a.status === 'confirmed').length,
    cancelled: data.filter(a => a.status === 'cancelled').length,
    completed: data.filter(a => a.status === 'completed').length,
  };

  return { success: true, stats, error: null };
}

/**
 * Add notes to appointment
 */
export async function addAppointmentNotes(id: number, notes: string) {
  const { data, error } = await supabase
    .from('appointments')
    .update({ notes })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error adding notes:', error);
    return { success: false, data: null, error };
  }

  return { success: true, data, error: null };
}
