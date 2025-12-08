// src/modules/common-admin/DashboardPage.jsx
import { useAuth } from '../../contexts/AuthContext'

// Importamos el contenido de los dashboards
import EngineerDashboardContent from './_EngineerDashboardContent' 
import FinanceDashboardContent from './_FinanceDashboardContent'   
// ... Agregaremos más imports según el rol.

const DashboardPage = () => {
    const { role, user } = useAuth()
    
    // 1. Lógica de Redirección (Si un rol tiene su propio Dashboard)
    if (role === 'trabajador') {
        // Redirigir al trabajador a su dashboard dedicado (ruta /mi-dashboard)
        // No debería ver esta página.
        return <h1 style={{color: 'var(--warning-color)'}}>Acceso no autorizado a Dashboard Central.</h1>
    }
    
    // 2. Selección de Contenido
    let DashboardContent;
    switch (role) {
        case 'contabilidad':
            DashboardContent = FinanceDashboardContent
            break;
        case 'rrhh':
        case 'ingeniero':
        default:
            DashboardContent = EngineerDashboardContent
    }
    
    // 3. Renderizado
    return (
        <div>
            <h1 style={{color: 'var(--text-main)', fontSize: '1.8rem'}}>
                Bienvenido, {user.email.split('@')[0]}
            </h1>
            <p style={{color: 'var(--text-secondary)', marginBottom: '1.5rem'}}>
                Tu rol ({role.toUpperCase()}) te da acceso a la siguiente información clave:
            </p>
            <DashboardContent />
        </div>
    )
}

export default DashboardPage