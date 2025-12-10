// src/components/TechnologySection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const featureData = [
    { title: "Alta Resistencia", desc: "La estructura del armazón proporciona una resistencia excepcional." },
    { title: "Aislamiento Térmico", desc: "Mantiene el calor en invierno y el frescor en verano, ahorrando energía." },
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
        style={{ padding: '60px 5%', background: 'var(--secondary-color)' }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '40px', textAlign: 'center' }}>
        Construimos casas <span style={{ color: 'var(--accent-color)' }}>con tecnología de armazón</span>
      </h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
        
        {/* Columna de Diagrama */}
        <motion.div 
            style={{ flex: '1 1 500px' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <div style={{ minHeight: '350px', background: 'url("path_to_diagram.svg") center/contain no-repeat', border: '1px solid #ddd', borderRadius: '8px' }}>
                [Diagrama de Estructura de Casa de Armazón]
            </div>
        </motion.div>

        {/* Columna de Características */}
        <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.5 }}
              style={{ padding: '20px', background: '#fff', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', borderRadius: '8px' }}
            >
              <h3 style={{ marginBottom: '5px', color: 'var(--accent-color)' }}>{feature.title}</h3>
              <p style={{ color: '#666' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;