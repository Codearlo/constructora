// src/modules/common-admin/_EngineerDashboardContent.jsx
import React from 'react'

const EngineerDashboardContent = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid var(--border-light)', borderRadius: '12px', marginTop: '1.5rem', background: '#f8f9fa' }}>
      <h2 style={{ color: 'var(--primary-color)' }}>Vista Principal: Ingeniero Jefe</h2>
      <p style={{ color: 'var(--text-secondary)' }}>Aquí se centralizará el control de KPI de Proyectos, Tickets Pendientes y el Flujo de Incidencias.</p>
      
      {/* KPIs Placeholder */}
      <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
         <div style={{ padding: '10px 15px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <strong>Pendientes:</strong> 5
         </div>
         <div style={{ padding: '10px 15px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <strong>En Proceso:</strong> 12
         </div>
      </div>
    </div>
  )
}

export default EngineerDashboardContent