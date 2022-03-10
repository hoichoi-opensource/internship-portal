import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.sbProjectURL
const supabaseAnonKey = process.env.sbAPIKey

export const supabase = createClient(supabaseUrl, supabaseAnonKey)