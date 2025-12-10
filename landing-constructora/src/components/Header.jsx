// src/components/Header.jsx
import React from 'react';
import { motion } from 'framer-motion';

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
        padding: '20px 5%',
        background: 'rgba(255, 255, 255, 0.9)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
      }}
    >
      <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--primary-color)' }}>
        CONSTRUCTORA
      </div>
      <nav>
        <a href="#catalog" style={{ margin: '0 15px', textDecoration: 'none', color: 'var(--text-dark)' }}>Catálogo</a>
        <a href="#payment" style={{ margin: '0 15px', textDecoration: 'none', color: 'var(--text-dark)' }}>Pago</a>
        <a href="tel:+79001931383" style={{ marginLeft: '25px', color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 'bold' }}>
          +7 900 193-13-83
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;