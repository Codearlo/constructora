// src/components/Header.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import logoImage from '../assets/logo-lk-full.png'; 

const Header = () => {
  // Estado para saber si el header debe estar en su versión pequeña (encogida horizontal y verticalmente)
  const [isShrunk, setIsShrunk] = useState(false); 

  // --- Configuraciones de Tamaño ---
  const SCROLL_THRESHOLD = 50; // Distancia para empezar a encoger

  // Tamaños en el estado FULL (Default)
  // AJUSTE: Reducción de PADDING_V_FULL (Antes 8, ahora 5) para hacerlo más corto verticalmente desde el inicio.
  const PADDING_V_FULL = 0; 
  const HEADER_CONTAINER_WIDTH_FULL = '100%'; 
  const SHADOW_FULL = 'none';
  const BORDER_RADIUS_FULL = 0; 
  const LOGO_SIZE_FULL = 30; // Ajustado ligeramente para un header más compacto

  // Tamaños en el estado SHRUNK (Flotante y Encogido)
  // AJUSTE: Reducción de PADDING_V_SHRUNK (Antes 5, ahora 4) y nuevo ancho al 84%
  const PADDING_V_SHRUNK = 0;
  const HEADER_CONTAINER_WIDTH_SHRUNK = '84%'; // <-- Nuevo ancho solicitado
  const SHADOW_SHRUNK = '0 5px 20px rgba(0,0,0,0.15)'; 
  const BORDER_RADIUS_SHRUNK = 20; 
  const LOGO_SIZE_SHRUNK = 22; // Ajustado ligeramente para armonizar


  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Lógica: Se encoge y se vuelve flotante si hemos bajado más allá del umbral
    if (currentScrollY > SCROLL_THRESHOLD) {
      if (!isShrunk) {
        setIsShrunk(true);
      }
    } 
    // Vuelve al estado FULL solo si estamos en la parte superior
    else {
      if (isShrunk) {
        setIsShrunk(false);
      }
    }
  }, [isShrunk]); 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // --- VARIANTS PARA EL CONTENEDOR INTERNO (motion.header) ---
  const containerVariants = {
    // Estado en el tope de la página (tamaño completo)
    full: {
      paddingTop: PADDING_V_FULL,
      paddingBottom: PADDING_V_FULL,
      borderRadius: BORDER_RADIUS_FULL,
      boxShadow: SHADOW_FULL,
      width: HEADER_CONTAINER_WIDTH_FULL,
      top: 0
    },
    // Estado encogido, flotante y centrado
    shrunk: {
      paddingTop: PADDING_V_SHRUNK,
      paddingBottom: PADDING_V_SHRUNK,
      borderRadius: BORDER_RADIUS_SHRUNK,
      boxShadow: SHADOW_SHRUNK,
      width: HEADER_CONTAINER_WIDTH_SHRUNK, // Encogimiento Horizontal
      top: 15 // Separación del borde superior al flotar
    },
  };

  // Determinar la animación actual
  const currentAnimation = isShrunk ? 'shrunk' : 'full';

  // Variables de estilo dinámicas para el contenido interno
  const logoSize = isShrunk ? LOGO_SIZE_SHRUNK : LOGO_SIZE_FULL;
  const navFontSize = isShrunk ? '0.75rem' : '0.8rem'; // Ajuste de fuente para más compacto
  const navPadding = isShrunk ? '3px 14px' : '4px 16px'; // Ajuste de padding del botón

  return (
    <motion.div
        // Contenedor fijo que ocupa el 100% del ancho del viewport
        style={{
            position: 'fixed', 
            left: 0,
            right: 0,
            zIndex: 1000,
            top: 0, 
            background: 'transparent',
            pointerEvents: 'none'
        }}
    >
        <motion.header
            // Contenedor animado que se encoge y flota
            initial="full" 
            animate={currentAnimation}
            variants={containerVariants}
            transition={{ type: "spring", stiffness: 150, damping: 25 }}
            style={{
                background: 'rgba(255, 255, 255, 0.98)',
                margin: '0 auto', // Centra el header flotante
                backdropFilter: 'blur(10px)',
                pointerEvents: 'auto',
                position: 'relative', 
                maxWidth: '1800px', 
            }}
        >
            {/* Contenido (Logo y Navegación) */}
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 15px' }}>
                <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                    <motion.img 
                        src={logoImage} 
                        alt="L&K Logo" 
                        animate={{ height: logoSize }}
                        style={{ objectFit: 'contain' }} 
                        transition={{ type: "spring", stiffness: 150, damping: 25 }}
                    />
                </div>

                <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                    {['Nosotros', 'Servicios', 'Portafolio', 'Proceso'].map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`}
                            style={{ 
                                textDecoration: 'none', 
                                color: 'var(--text-main)', 
                                fontSize: navFontSize,
                                fontWeight: '500',
                                transition: 'color 0.2s'
                            }}
                        >
                            {item}
                        </a>
                    ))}
                    <a href="#contacto" className="btn-outline" style={{ padding: navPadding, fontSize: navFontSize }}>
                        Contacto
                    </a>
                </nav>
            </div>
        </motion.header>
    </motion.div>
  );
};

export default Header;