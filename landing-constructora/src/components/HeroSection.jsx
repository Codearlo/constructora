// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const HeroSection = () => {
  return (
    <motion.section
      className="hero-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        padding: '80px 5%',
        background: '#fff',
        alignItems: 'center',
      }}
    >
      <div className="hero-content" style={{ flex: '1 1 500px' }}>
        <motion.h1 variants={itemVariants} style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '20px' }}>
          Casa prefabricada terminada <br />
          <span style={{ color: 'var(--accent-color)' }}>desde 100 m²</span> llave en mano en 2 meses
        </motion.h1>

        <motion.p variants={itemVariants} style={{ fontSize: '1.1rem', marginBottom: '40px' }}>
          Construimos una casa duradera y confiable con un enfoque industrializado.
        </motion.p>

        <motion.button variants={itemVariants} className="cta-button">
          Obtener presupuesto %
        </motion.button>

        <motion.div variants={itemVariants} className="stats-bar" style={{ display: 'flex', marginTop: '50px', justifyContent: 'space-between', maxWidth: '400px' }}>
          {['65~', '7+', '180+'].map((num, index) => (
            <div key={index} className="stat-item" style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>{num}</span>
              <span style={{ display: 'block', fontSize: '0.9rem', color: '#666' }}>{
                index === 0 ? 'Clientes' : 
                index === 1 ? 'Años' : 'Garantía'
              }</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="hero-image-container"
        variants={itemVariants}
        style={{ flex: '1 1 400px', minHeight: '500px', background: '#ccc', borderRadius: '10px', overflow: 'hidden' }}
      >
        {/* Usar una imagen real aquí o un fondo placeholder */}
        <div style={{ background: 'url("path_to_your_image.jpg") center/cover', width: '100%', height: '100%' }}>
            [Imagen de la Casa]
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;