// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

// ===============================================
// SOLUCIÓN: Definiciones de las variantes de animación (ESTO DEBE ESTAR AQUÍ)
// ===============================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

// ===============================================

const HeroSection = () => {
  return (
    <section 
      className="hero-section"
      style={{ padding: '0 5% 60px 5%', background: 'var(--secondary-color)' }}
    >
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants} // Usa containerVariants
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0',
                backgroundColor: 'white',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
            }}
        >
            {/* Contenido de la Tarjeta (Lado Izquierdo) */}
            <div className="hero-content" style={{ flex: '1 1 500px', padding: '60px 40px', background: '#fff' }}>
                
                <motion.h1 variants={itemVariants} style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '20px' }}>
                    Casa prefabricada terminada <br />
                    <span style={{ color: 'var(--accent-color)' }}>desde 100 m²</span> llave en mano en 2 meses
                </motion.h1>

                <motion.p variants={itemVariants} style={{ fontSize: '1rem', marginBottom: '30px', color: '#666' }}>
                    Construimos una casa duradera y confiable con un enfoque industrializado y profesionalismo.
                </motion.p>

                <motion.button variants={itemVariants} className="cta-button" style={{ marginBottom: '40px' }}>
                    Obtener presupuesto %
                </motion.button>

                {/* Bloque de Estadísticas */}
                <motion.div variants={itemVariants} className="stats-bar" style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '400px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                    {['65~', '7+', '180+'].map((num, index) => (
                        <div key={index} className="stat-item" style={{ textAlign: 'center', flex: 1 }}>
                            <span style={{ display: 'block', fontSize: '2.2rem', fontWeight: '700', color: 'var(--primary-color)' }}>{num}</span>
                            <span style={{ display: 'block', fontSize: '0.8rem', color: '#666' }}>{
                                index === 0 ? 'Clientes' : 
                                index === 1 ? 'Años experiencia' : 'Días Garantía'
                            }</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Imagen (Lado Derecho) */}
            <motion.div 
                className="hero-image-container"
                variants={itemVariants} // Usa itemVariants
                style={{ 
                    flex: '1 1 400px', 
                    minHeight: '450px', 
                    background: 'url("path_to_house_image.jpg") center/cover',
                    position: 'relative',
                    minWidth: '300px'
                }}
            >
                {/* Espacio para la imagen grande de la casa */}
            </motion.div>
        </motion.div>
    </section>
  );
};

export default HeroSection;