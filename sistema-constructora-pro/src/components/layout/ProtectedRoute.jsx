// src/components/layout/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const ProtectedRoute = () => {
  const { user, loading } = useAuth()

  if (loading) {
    // El AuthContext ya maneja la pantalla de "Cargando", pero esto es un fallback.
    return (
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: '#64748b',
        fontFamily: 'sans-serif'
      }}>
        Verificando acceso... 🔒
      </div>
    )
  }

  // Si no hay usuario, redirige al login
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // Si hay usuario, permite la navegación
  return <Outlet />
}

export default ProtectedRoute