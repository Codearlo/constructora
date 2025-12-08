// src/contexts/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../services/supabase'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  // El rol se almacena aquí. Usaremos 'trabajador' como fallback.
  const [role, setRole] = useState(null) 
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true;

    const checkUserAndRole = async (sessionUser) => {
        if (!sessionUser || !mounted) {
            setUser(null);
            setRole(null);
            setLoading(false);
            return;
        }
        
        setUser(sessionUser);
        
        // 1. Buscar rol en la tabla 'profiles'
        const { data: profileData } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', sessionUser.id)
            .single()
            
        if (mounted) {
            if (profileData?.role) {
                setRole(profileData.role)
            } else {
                // Rol por defecto si no se encuentra (para no bloquear)
                setRole('trabajador') 
            }
        }
        setLoading(false);
    }

    // 1. Obtener la sesión actual al montar
    supabase.auth.getSession().then(({ data: { session } }) => {
        if(mounted) checkUserAndRole(session?.user);
    })

    // 2. Escuchar cambios de estado (login/logout)
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      setLoading(true); // Recargamos el rol en cada cambio de estado
      checkUserAndRole(session?.user);
    })

    return () => {
      mounted = false;
      authListener.subscription?.unsubscribe();
    }
  }, [])

  const value = {
    signOut: () => supabase.auth.signOut(),
    user,
    role,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {/* Muestra un simple cargando si el AuthContext está trabajando */}
      {loading ? (
        <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b'}}>
          Cargando sistema de autenticación...
        </div>
      ) : children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)