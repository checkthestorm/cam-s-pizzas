import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ftszvzifyxuaqplwjnpw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0c3p2emlmeXh1YXFwbHdqbnB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxOTgzMjUsImV4cCI6MjA3ODc3NDMyNX0.I_NbndnfQtlbxTR97uwTSjJVA7C23XslkrTMBerUL2I'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase