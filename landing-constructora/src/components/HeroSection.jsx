// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Importación de imagen con fallback
let bannerImg;
try {
  bannerImg = new URL('../assets/hero-banner.jpg', import.meta.url).href;
} catch (e) {
  bannerImg = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1470&auto=format&fit=crop";
}

const HeroSection = () => {
  return (
    // Reduje el padding superior para que el banner suba un poco más
    <section style={{ padding: '20px 0 40px', background: '#fff' }}>
      
      {/* Usamos la clase .container definida en index.css (94% de ancho) */}
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            width: '100%',
            height: '550px', // Un poco más alto para mayor impacto
            borderRadius: '20px', // Bordes redondeados sutiles
            overflow: 'hidden',
            boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
            position: 'relative',
            background: '#f0f0f0'
          }}
        >
          <img 
            src={bannerImg} 
            alt="Construcción Banner" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              objectPosition: 'center'
            }} 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;