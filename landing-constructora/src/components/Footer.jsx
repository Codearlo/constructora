// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        padding: '40px 5%',
        background: 'var(--primary-color)',
        color: 'var(--text-light)',
        textAlign: 'center',
        fontSize: '0.9rem'
      }}
    >
        <h3 style={{ color: 'var(--text-light)', marginBottom: '15px' }}>Tres pasos hacia tu nuevo hogar</h3>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '25px' }}>
            <div style={{ maxWidth: '180px' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '5px' }}>1. Consulta y Diseño</div>
                <p style={{ fontSize: '0.8rem' }}>Obtén una consulta detallada y un presupuesto exacto.</p>
            </div>
            <div style={{ maxWidth: '180px' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '5px' }}>2. Construcción</div>
                <p style={{ fontSize: '0.8rem' }}>Ejecución del proyecto por equipos especializados.</p>
            </div>
            <div style={{ maxWidth: '180px' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '5px' }}>3. Entrega de Llave</div>
                <p style={{ fontSize: '0.8rem' }}>Firma del acto y mudanza a tu nuevo hogar.</p>
            </div>
        </div>

        <p style={{ borderTop: '1px solid #444', paddingTop: '15px' }}>
            © 2025 L&K Constructora e Inversiones. Todos los derechos reservados.
        </p>
    </footer>
  );
};

export default Footer;