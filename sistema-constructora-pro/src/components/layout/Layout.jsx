// src/components/layout/Layout.jsx
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import NotificationBell from '../common/NotificationBell' // Placeholder

const Layout = () => {
  return (
    <div style={styles.appLayout}>
      <Sidebar />
      {/* <NotificationBell /> Aquí iría el componente de la campana */}
      <main style={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  )
}

const styles = {
    appLayout: {
        display: 'flex',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
    },
    mainContent: {
        flex: 1,
        height: '100%',
        overflowY: 'auto',
        padding: '2rem 2.5rem', /* Espacio para el contenido */
    }
}

export default Layout