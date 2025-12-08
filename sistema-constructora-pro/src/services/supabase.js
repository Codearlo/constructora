// src/services/supabase.js
import { createClient } from '@supabase/supabase-js'

// Vite usa import.meta.env para leer las variables del archivo .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Verifica que las claves existan para evitar errores
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Faltan variables de entorno SUPABASE en el archivo .env")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)