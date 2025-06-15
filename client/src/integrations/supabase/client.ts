import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://iezsqfevbioblwjjthcv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllenNxZmV2YmlvYmx3amp0aGN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NzM5MzAsImV4cCI6MjA2NTM0OTkzMH0.t3gsrUoFE24gCz4qg46R2lsvMBr6psjreL0LHYhRML8";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);