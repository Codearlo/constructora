// src/modules/common-admin/_FinanceDashboardContent.jsx
import React from 'react'

const FinanceDashboardContent = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid var(--border-light)', borderRadius: '12px', marginTop: '1.5rem', background: '#e8f5e9' }}>
      <h2 style={{ color: 'var(--success-color)' }}>Vista: Contabilidad y Finanzas</h2>
      <p style={{ color: 'var(--text-main)' }}>Aquí se visualizarán los **KPIs calculados automáticamente** basados en la Página 1 de tu diseño:</p>
      
      {/* KPIs Financieros (Página 1) */}
      <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
         <div style={{ padding: '10px 15px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <strong>Presupuesto Global (84,000):</strong> S/ 84,000.00
         </div>
         <div style={{ padding: '10px 15px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <strong>Costos Registrados (8.472.10):</strong> S/ 8,472.10
         </div>
         <div style={{ padding: '10px 15px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <strong>Utilidad Neta (5.472.10):</strong> S/ 5,472.10
         </div>
      </div>
    </div>
  )
}

export default FinanceDashboardContent