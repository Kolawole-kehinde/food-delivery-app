import { createClient } from '@supabase/supabase-js'; 

const superbaseurl = import.meta.env.VITE_SUPABASE_URL;
const superbasekey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(superbaseurl, superbasekey);
