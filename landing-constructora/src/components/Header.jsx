// src/components/Header.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Asegúrate de que esta ruta sea correcta para tu logo
import logoImage from '../assets/logo-lk-full.png'; 

const headerVariants = {
  hidden: { y: -100 },
  visible: { y: 0, transition: { type: 'spring', stiffness: 120 } }
};

const Header = () => {
  return (
    <motion.header
      className="header"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 5%', 
        background: 'rgba(255, 255, 255, 0.95)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
      }}
    >
      <div className="logo-container">
        <img 
          src={logoImage} 
          alt="L&K Constructora e Inversiones Logo" 
          style={{ height: '40px', maxWidth: '180px' }}
        />
      </div>
      
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <a href="#catalog" style={{ margin: '0 15px', textDecoration: 'none', color: 'var(--text-dark)', fontWeight: '500' }}>Catálogo</a>
        <a href="#payment" style={{ margin: '0 15px', textDecoration: 'none', color: 'var(--text-dark)', fontWeight: '500' }}>Pago</a>
        {/* Número de teléfono con color de acento para destacar */}
        <a href="tel:+79001931383" style={{ marginLeft: '25px', color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 'bold', border: `2px solid var(--accent-color)`, padding: '5px 10px', borderRadius: '5px' }}>
          +7 900 193-13-83
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;