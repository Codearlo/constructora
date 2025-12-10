// src/components/TechnologySection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const featureData = [
    { title: "Alta Resistencia", desc: "La estructura proporciona una resistencia excepcional y durabilidad." },
    { title: "Aislamiento Térmico", desc: "Diseño que mantiene el calor en invierno y el frescor en verano." },
    { title: "Montaje Rápido", desc: "La tecnología de armazón permite un montaje ágil y limpio." },
];

const cardVariants = {
  offscreen: { opacity: 0, x: -50 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const TechnologySection = () => {
  return (
    <section 
        className="technology-section"
        style={{ padding: '60px 5%', background: '#fff' }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '40px', textAlign: 'center', fontWeight: 'bold' }}>
        Construimos casas con <span style={{ color: 'var(--accent-color)' }}>tecnología de armazón</span>
      </h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', alignItems: 'flex-start' }}>
        
        {/* Columna de Diagrama/Estructura */}
        <motion.div 
            style={{ flex: '1 1 500px' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <div style={{ minHeight: '350px', background: '#e0e0e0', border: '1px solid #ddd', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#666' }}>
                [Diagrama de Estructura de Casa de Armazón]
            </div>
        </motion.div>

        {/* Columna de Características (las tarjetas del lado derecho) */}
        <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.5 }}
              style={{ 
                  padding: '20px 30px', 
                  background: 'var(--secondary-color)', 
                  boxShadow: '0 4px 10px rgba(0,0,0,0.03)', 
                  borderRadius: '8px',
                  borderLeft: `5px solid var(--accent-color)` // Detalle de acento
              }}
            >
              <h3 style={{ marginBottom: '5px', color: 'var(--primary-color)' }}>{feature.title}</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;