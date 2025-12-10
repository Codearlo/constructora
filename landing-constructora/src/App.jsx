// src/App.jsx
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
// Puedes reusar tu PaymentSection anterior al final si deseas, o quitarlo para limpiar
import Footer from './components/Footer';

function App() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;