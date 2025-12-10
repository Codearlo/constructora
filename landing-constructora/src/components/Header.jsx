// src/components/Header.jsx
import React from 'react';
import { motion } from 'framer-motion';
import logoImage from '../assets/logo-lk-full.png'; 

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{
        background: '#fff',
        paddingTop: '20px',
        paddingBottom: '10px'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo">
          <img src={logoImage} alt="L&K Logo" style={{ height: '45px', objectFit: 'contain' }} />
        </div>

        <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {['Nosotros', 'Servicios', 'Portafolio', 'Proceso'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              style={{ 
                textDecoration: 'none', 
                color: 'var(--text-main)', 
                fontSize: '1rem', // Un poco más grande para mejor lectura
                fontWeight: '500'
              }}
            >
              {item}
            </a>
          ))}
          <a href="#contacto" className="btn-outline" style={{ padding: '8px 24px' }}>
            Contacto
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;