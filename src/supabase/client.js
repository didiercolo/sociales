import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// The anon key is publishable; row access is enforced by Postgres RLS.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
