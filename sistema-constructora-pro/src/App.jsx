// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './components/layout/ProtectedRoute'
import Layout from './components/layout/Layout'

// Vistas Modulares (Crearemos estos archivos después)
import LoginPage from './modules/auth/LoginPage'
import AdminDashboard from './modules/common-admin/DashboardPage' 

// Trabajador
import WorkerDashboard from './modules/worker/WorkerDashboardPage' 
import CreateTicket from './modules/worker/CreateTicketPage'

// Administradores (Ingeniero, RRHH, Contabilidad)
import UserManagement from './modules/admin/UserManagementPage'
import RolesManagement from './modules/admin/RolesManagementPage' // ¡Nueva!
import AttendanceManagement from './modules/finance-hr/AttendanceManagementPage'

// Módulos de Negocio
import ProjectsPage from './modules/projects/ProjectsPage'
import ProposalsPage from './modules/proposals/ProposalsPage'
import TendersPage from './modules/tenders/TendersPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        {/* RUTAS PROTEGIDAS (REQUIERE AUTENTICACIÓN) */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
             {/* RUTAS GENERALES (Acceso restringido por rol dentro del componente) */}
             <Route path="/dashboard" element={<AdminDashboard />} />
             <Route path="/mi-dashboard" element={<WorkerDashboard />} />

             {/* MÓDULOS DE TICKETS Y PERFIL */}
             <Route path="/crear-ticket" element={<CreateTicket />} />
             <Route path="/mi-perfil" element={<WorkerProfile />} /> 

             {/* MÓDULOS ADMINISTRATIVOS */}
             <Route path="/admin/usuarios" element={<UserManagement />} />
             <Route path="/admin/roles" element={<RolesManagement />} />
             <Route path="/admin/asistencias" element={<AttendanceManagement />} />

             {/* MÓDULOS DE NEGOCIO */}
             <Route path="/proyectos" element={<ProjectsPage />} />
             <Route path="/propuestas" element={<ProposalsPage />} />
             <Route path="/licitaciones" element={<TendersPage />} />
             
             {/* REDIRECCIÓN INICIAL */}
             <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Route>
        
        {/* CUALQUIER OTRA RUTA VA AL DASHBOARD O LOGIN */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  )
}

export default App