import { supabase } from './supabase';
import { TEAMS } from './team-utils';

export interface MatchCategory {
  id: string;
  name: string;
  sub_name?: string;
  price: number;
  seats_available: number;
  total_seats: number;
  label?: 'hottest' | 'best_price' | 'top_choice' | 'fan_favorite' | 'last_tickets' | 'fast_filling';
  rating?: number;
  rating_label?: string;
  features?: string[];
}

export interface Match {
  id: string;
  match_no: number;
  date: string;
  time: string;
  home_team: string;
  away_team: string;
  venue: string;
  status: 'Upcoming' | 'Live' | 'Finished' | 'Cancelled';
  title?: string;
  description?: string;
  header_image_url?: string;
  categories?: MatchCategory[];
}

/**
 * Fetches all upcoming matches from the database.
 * Optimized for the TATA IPL 2026 fixture list.
 */
export async function getMatches(): Promise<Match[]> {
  try {
    const { data, error } = await supabase
      .from('matches')
      .select('*')
      .order('match_no', { ascending: true });

    if (error) {
      console.error('DATABASE_ERROR: Failed to fetch fixtures:', error.message);
      return [];
    }

    return (data as Match[]) || [];
  } catch (err) {
    console.error('SYSTEM_ERROR: Supabase connection failed:', err);
    return [];
  }
}

/**
 * Fetches a single match detail by ID, including its seat categories.
 */
export async function getMatchById(id: string): Promise<Match | null> {
  try {
    const { data, error } = await supabase
      .from('matches')
      .select('*, categories:match_categories(*)')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code !== 'PGRST116') { // Ignore "not found" errors for logging
        console.error('DATABASE_ERROR: Match lookup failed:', error.message);
      }
      return null;
    }

    return data as Match;
  } catch (err) {
    console.error('SYSTEM_ERROR: Match retrieval failed:', err);
    return null;
  }
}
