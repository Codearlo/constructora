// src/components/CatalogSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const houseModels = [
    { name: "Casa Ática", size: '77m²', price: 'desde 5.000.000₽' },
    { name: "Casa Moderna", size: '92m²', price: 'desde 6.000.000₽' },
    { name: "Casa Minimalista", size: '85m²', price: 'desde 5.500.000₽' },
    { name: "Casa Nórdica", size: '80m²', price: 'desde 5.200.000₽' },
];

const CatalogSection = () => {
    return (
        <section 
            id="catalog"
            style={{ padding: '60px 5%', background: '#fff' }}
        >
            <h2 style={{ fontSize: '2rem', marginBottom: '40px', textAlign: 'center' }}>
                Catálogo de nuestros objetos <span style={{ color: 'var(--accent-color)' }}>para 2024</span>
            </h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
                {houseModels.map((model, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="house-card"
                        style={{ flex: '1 1 250px', maxWidth: '300px', background: 'var(--secondary-color)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}
                    >
                        {/* Placeholder para la imagen de la casa */}
                        <div style={{ height: '200px', background: '#ddd', borderBottom: '1px solid #ccc' }}>
                            [Imagen de {model.name}]
                        </div>
                        <div style={{ padding: '15px' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{model.name}</h3>
                            <p style={{ color: '#666' }}>{model.size}</p>
                            <p style={{ fontWeight: 'bold', marginTop: '10px', color: 'var(--primary-color)' }}>{model.price}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                 <button className="cta-button">Ver Catálogo Completo</button>
            </div>
        </section>
    );
};

export default CatalogSection;