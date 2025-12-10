// src/components/PortfolioSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const PortfolioSection = () => {
    return (
        <section className="container" id="portafolio">
            <div style={{ marginBottom: '50px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Nuestro Portafolio</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
                    Explora una selección de nuestros trabajos más recientes, donde la precisión técnica se encuentra con el diseño estético.
                </p>
            </div>

            <motion.div 
                style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    autoRows: '300px', 
                    gap: '20px' 
                }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }} // Repite animación al scrollear
            >
                {/* Item Grande */}
                <motion.div 
                    variants={itemVariants}
                    whileHover={{ scale: 0.98 }}
                    style={{ 
                        gridColumn: 'span 2', 
                        gridRow: 'span 2', 
                        borderRadius: 'var(--radius-lg)', 
                        overflow: 'hidden', 
                        position: 'relative',
                        minHeight: '300px'
                    }}
                >
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" alt="Edificio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '30px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: '#fff' }}>
                        <h3 style={{ color: '#fff' }}>Torre Empresarial Lima</h3>
                        <p style={{ opacity: 0.8 }}>Construcción Integral / 2024</p>
                    </div>
                </motion.div>

                {/* Items Normales */}
                <motion.div variants={itemVariants} whileHover={{ scale: 0.98 }} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative' }}>
                    <img src="https://images.unsplash.com/photo-1590345753043-412f7182274b?auto=format&fit=crop&w=800&q=80" alt="Residencial" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: '#fff', fontWeight: '600', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Condominio "Los Alamos"</div>
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ scale: 0.98 }} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative' }}>
                    <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" alt="Industrial" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: '#fff', fontWeight: '600', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Planta Industrial Sur</div>
                </motion.div>
                
                 <motion.div variants={itemVariants} whileHover={{ scale: 0.98 }} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                        <h3 style={{ color: '#fff', fontSize: '1.5rem' }}>125+</h3>
                        <p style={{ color: '#aaa' }}>Proyectos más en nuestro historial</p>
                        <button style={{ marginTop: '15px', background: 'transparent', border: '1px solid #fff', color: '#fff', padding: '8px 20px', borderRadius: '50px', cursor: 'pointer' }}>Ver Todos</button>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default PortfolioSection;