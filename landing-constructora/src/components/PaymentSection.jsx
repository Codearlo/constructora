// src/components/PaymentSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const paymentOptions = [
    { title: "Crédito Bancario", desc: "Ayuda con la solicitud y consultas con una tasa de 5.5%." },
    { title: "Capital Materno", desc: "El capital se puede usar como pago inicial o para pagar el préstamo." },
    { title: "Subsidios", desc: "Aceptamos certificados de subsidios federales y regionales." },
    { title: "Pago Sin Efectivo", desc: "Aceptamos pagos directos y transferencias bancarias sin límites." },
];

const PaymentSection = () => {
    return (
        <section 
            id="payment"
            style={{ padding: '60px 5%', background: 'var(--secondary-color)' }}
        >
            <h2 style={{ fontSize: '2rem', marginBottom: '40px', textAlign: 'center' }}>
                Te ofrecemos <span style={{ color: 'var(--accent-color)' }}>métodos de pago</span>
            </h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {paymentOptions.map((option, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="payment-card"
                        style={{ flex: '1 1 250px', maxWidth: '300px', padding: '25px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', textAlign: 'center' }}
                    >
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>{option.title}</h3>
                        <p style={{ color: '#666', fontSize: '0.9rem' }}>{option.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PaymentSection;