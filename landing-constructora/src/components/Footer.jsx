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
      <div style={{ marginBottom: '15px' }}>
          <a href="#" style={{ color: 'var(--text-light)', margin: '0 10px', textDecoration: 'none' }}>Política de Privacidad</a> |
          <a href="#" style={{ color: 'var(--text-light)', margin: '0 10px', textDecoration: 'none' }}>Términos y Condiciones</a>
      </div>
      <p>Pasos: 1. Consulta y Diseño, 2. Construcción, 3. Entrega de Llave.</p>
      <p style={{ marginTop: '10px' }}>© 2025 Constructora de Casas. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;