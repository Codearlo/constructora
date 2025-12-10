// src/App.jsx
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TechnologySection from './components/TechnologySection';
import CatalogSection from './components/CatalogSection';
import PaymentSection from './components/PaymentSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <HeroSection />
        <TechnologySection />
        <CatalogSection />
        <PaymentSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;