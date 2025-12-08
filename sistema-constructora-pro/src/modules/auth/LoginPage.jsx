// src/modules/auth/LoginPage.jsx
import { useState } from 'react'
import { supabase } from '../../services/supabase'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'

const LoginPage = () => {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  // Si el usuario ya está logueado, lo mandamos al dashboard
  if (user) {
    navigate('/dashboard', { replace: true })
    return null
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    const toastId = toast.loading('Iniciando sesión...')
    
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    
    if (error) {
      toast.error('Credenciales incorrectas: ' + error.message, { id: toastId })
    } else {
      toast.success('¡Bienvenido!', { id: toastId })
      // El AuthContext detectará el cambio y nos redirigirá
    }
    setLoading(false)
  }

  return (
    <div style={styles.container}>
      <Toaster position="top-center" />
      <div style={styles.formCard}>
        <h2 style={styles.header}>Bienvenido a L&K</h2>
        <p style={styles.subheader}>Ingresa tus credenciales.</p>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email" 
            placeholder="Correo electrónico" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
            style={styles.input}
          />
          <input
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
            style={styles.input}
          />
          <button 
            type="submit" 
            disabled={loading} 
            style={styles.button}
          >
            {loading ? 'Ingresando...' : 'Ingresar al Sistema'}
          </button>
        </form>
        
        <p style={styles.footerLink}>
           ¿Olvidaste tu contraseña? <a href="#" style={{color: 'var(--primary-color)'}}>Recuperar</a>
        </p>
      </div>
    </div>
  )
}

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--bg-color)',
    },
    formCard: {
        width: '100%',
        maxWidth: '400px',
        padding: '3rem',
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        textAlign: 'center',
    },
    header: {
        color: 'var(--text-main)',
        marginBottom: '0.5rem',
        fontSize: '1.8rem'
    },
    subheader: {
        color: 'var(--text-secondary)',
        marginBottom: '2rem',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    input: {
        padding: '1rem',
        borderRadius: '8px',
        border: '1px solid var(--border-light)',
        fontSize: '1rem',
    },
    button: {
        padding: '1rem',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '0.5rem'
    },
    footerLink: {
        marginTop: '1.5rem',
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
    }
}

export default LoginPage