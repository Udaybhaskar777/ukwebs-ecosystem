import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ciggdtmkaazijzyfaefm.supabase.co';
const supabaseAnonKey = 'sb_publishable_3AUtFGpZM8-_9ngHMwzqDw_Cn7zNSf9';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);