// src/components/StatsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: "7+", label: "Años Construyendo Confianza" },
    { value: "125+", label: "Proyectos Culminados" },
    { value: "100%", label: "Calidad Garantizada" },
    { value: "ISO", label: "Certificaciones Internacionales" },
];

const StatsSection = () => {
    return (
        <section className="container" id="nosotros">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                
                {/* Texto Izquierda */}
                <div style={{ flex: '1 1 400px', maxWidth: '500px' }}>
                    <h4 style={{ color: 'var(--primary-brand)', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '10px' }}>Sobre Nosotros</h4>
                    <h2 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '20px' }}>
                        Expertos en construcción e inversiones inmobiliarias.
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '30px' }}>
                        En L&K, transformamos visiones en estructuras sólidas. Nuestro compromiso con la seguridad, la calidad y la innovación nos ha permitido liderar más de 125 proyectos exitosos.
                    </p>
                    {/* Logos de clientes/certificaciones (Placeholder text) */}
                    <div style={{ display: 'flex', gap: '20px', opacity: 0.6, marginTop: '20px' }}>
                         <span style={{ fontWeight: 'bold' }}>SGS HOMOLOGADO</span>
                         <span style={{ fontWeight: 'bold' }}>CIAL</span>
                         <span style={{ fontWeight: 'bold' }}>UTP</span>
                    </div>
                </div>

                {/* Números Derecha */}
                <div style={{ flex: '1 1 450px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 20px' }}>
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 style={{ fontSize: '3.5rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '5px' }}>{stat.value}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.4' }}>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;