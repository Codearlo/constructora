// src/components/ServicesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
    { id: '01', title: "Construcción Civil", desc: "Ejecución de obras de gran envergadura con estándares internacionales.", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80" },
    { id: '02', title: "Inversiones", desc: "Gestión estratégica de proyectos inmobiliarios de alto retorno.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" },
    { id: '03', title: "Arquitectura", desc: "Diseño innovador y funcional adaptado a cada necesidad.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" },
    { id: '04', title: "Consultoría", desc: "Asesoramiento técnico y legal para tus proyectos.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" }
];

const ServicesSection = () => {
    return (
        <section className="container" id="servicios">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px' }}>
                <h2 style={{ fontSize: '2.5rem', maxWidth: '500px' }}>Soluciones integrales que ofrecemos</h2>
                {/* Botón decorativo estilo flecha */}
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    <ArrowRight />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
                {services.map((item, index) => (
                    <motion.div 
                        key={index}
                        whileHover={{ y: -10 }}
                        style={{ cursor: 'pointer' }}
                    >
                        <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '320px', marginBottom: '20px' }}>
                            <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                            <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(5px)', padding: '5px 12px', borderRadius: '20px', color: '#fff', fontWeight: 'bold', border: '1px solid rgba(255,255,255,0.3)' }}>
                                {item.id}
                            </div>
                        </div>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{item.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;