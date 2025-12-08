// src/components/layout/Sidebar.jsx
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { LayoutDashboard, FilePlus, Users, LogOut, Briefcase, DollarSign, Archive, Home } from 'lucide-react'
import { useMemo } from 'react'

const Sidebar = () => {
  const { role, signOut } = useAuth()
  
  // Define los enlaces basados en el rol
  const links = useMemo(() => {
    // Enlaces visibles para todos los roles de administración/gestión
    const adminLinks = [
      { to: '/dashboard', icon: <LayoutDashboard size={22} />, label: 'Centro de Control' },
      { to: '/proyectos', icon: <Home size={22} />, label: 'Proyectos' },
      { to: '/propuestas', icon: <Briefcase size={22} />, label: 'Propuestas' },
      { to: '/licitaciones', icon: <Archive size={22} />, label: 'Licitaciones' },
      { to: '/admin/asistencias', icon: <Users size={22} />, label: 'Asistencia/RRHH' },
      { to: '/admin/finanzas', icon: <DollarSign size={22} />, label: 'Contabilidad' },
    ];
    
    // Links específicos para el Trabajador (Operario)
    const workerLinks = [
      { to: '/mi-dashboard', icon: <LayoutDashboard size={22} />, label: 'Mis Reportes' },
      { to: '/crear-ticket', icon: <FilePlus size={22} />, label: 'Nuevo Reporte' },
      { to: '/mi-perfil', icon: <Users size={22} />, label: 'Mi Perfil' }, 
    ];

    // Permisos según el rol confirmado
    if (role === 'ingeniero' || role === 'rrhh' || role === 'contabilidad') {
        // En un sistema real, se filtrarían aquí los links,
        // pero por ahora, el ingeniero ve todo.
        return adminLinks; 
    }
    
    // Si es trabajador o rol no reconocido, muestra links básicos de obra
    return workerLinks; 
  }, [role]);

  // Usamos el rol para mostrar el nombre (placeholder)
  const roleName = role ? role.charAt(0).toUpperCase() + role.slice(1) : 'Invitado';

  return (
    <aside style={styles.sidebar}>
      
      <div style={styles.sidebarHeader}>
        {/* Aquí iría tu logo L&K */}
        <h2 style={{margin:0, color: 'var(--primary-color)'}}>L&K</h2>
      </div>

      <div style={styles.sidebarUser}>
        <div style={styles.userAvatar}>
           {roleName.charAt(0)}
        </div>
        <div style={styles.userInfo}>
          <p style={styles.userName}>
              {/* Esto mostraría el email hasta que tengamos el nombre real */}
              {roleName}
          </p>
          <span style={styles.userRole}>
              {roleName === 'Trabajador' ? 'Personal de Obra' : roleName}
          </span>
        </div>
      </div>

      <nav style={styles.sidebarNav}>
        {links.map((link) => (
          <NavLink 
            key={link.to} 
            to={link.to}
            style={({ isActive }) => ({
                ...styles.navLink, 
                ...(isActive ? styles.navLinkActive : {})
            })}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>

      <div style={styles.sidebarFooter}>
        <button onClick={signOut} style={styles.logoutBtn}>
          <LogOut size={18} />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  )
}

// Estilos básicos en línea (Luego los moveremos a CSS)
const styles = {
    sidebar: {
        width: '270px', height: '100vh', 
        background: 'white', 
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        display: 'flex', flexDirection: 'column',
        paddingTop: '20px',
        flexShrink: 0
    },
    sidebarHeader: {
        padding: '0 20px 20px', 
        textAlign: 'center',
        borderBottom: '1px solid var(--border-light)'
    },
    sidebarUser: {
        margin: '0 1rem 1rem 1rem', 
        padding: '1rem',
        display: 'flex', alignItems: 'center', gap: '12px',
        background: '#f8fafc',
        borderRadius: '16px',
        border: '1px solid var(--border-light)'
    },
    userAvatar: {
        minWidth: '42px', height: '42px',
        background: 'var(--primary-color)', color: 'white',
        borderRadius: '12px', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        fontWeight: 700, fontSize: '1.1rem',
    },
    userInfo: { overflow: 'hidden' },
    userName: { margin: 0, fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem' },
    userRole: { fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 600 },
    sidebarNav: {
        flex: 1,
        padding: '0 1rem', 
        display: 'flex', flexDirection: 'column', gap: '0.5rem',
        overflowY: 'auto',
    },
    navLink: {
        display: 'flex', alignItems: 'center', gap: '14px',
        padding: '0.9rem 1.2rem',
        color: 'var(--text-secondary)',
        textDecoration: 'none',
        borderRadius: '14px',
        transition: 'all 0.2s ease',
        fontWeight: 500, fontSize: '0.95rem',
    },
    navLinkActive: {
        background: '#e0f2fe',
        color: 'var(--primary-color)',
        fontWeight: 700,
    },
    sidebarFooter: {
        padding: '1.5rem 1rem', 
        borderTop: '1px solid var(--border-light)',
        flexShrink: 0,
    },
    logoutBtn: {
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '10px', padding: '0.9rem', border: 'none',
        background: '#fee2e2', color: '#ef4444', 
        borderRadius: '12px', cursor: 'pointer', fontWeight: 600,
    }
};

export default Sidebar