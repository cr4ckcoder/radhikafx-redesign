import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhyRadhika from './pages/WhyRadhika';
import AboutUs from './pages/AboutUs';
import Regulations from './pages/Regulations';
import Achievements from './pages/Achievements';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import IBProgramme from './pages/partnerships/IBProgramme';
import CPAAffiliate from './pages/partnerships/CPAAffiliate';
import Commodities from './pages/products/Commodities';
import Indices from './pages/products/Indices';
import Shares from './pages/products/Shares';
import Forex from './pages/products/Forex';
import Crypto from './pages/products/Crypto';
import MT5 from './pages/platforms/MT5';
import Standard from './pages/accounts/Standard';
import Pro from './pages/accounts/Pro';
import ProX from './pages/accounts/ProX';
import Comparison from './pages/accounts/Comparison';
import Funding from './pages/accounts/Funding';
import Withdrawals from './pages/accounts/Withdrawals';
import TradingConditions from './pages/tools/TradingConditions';
import TradingHours from './pages/tools/TradingHours';
import EconomicCalendar from './pages/tools/EconomicCalendar';
import TradingCalculators from './pages/tools/TradingCalculators';
import { useEffect } from 'react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/why-radhikafx" element={<WhyRadhika />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about/regulations" element={<Regulations />} />
            <Route path="/about/achievements" element={<Achievements />} />
            <Route path="/about/careers" element={<Careers />} />
            <Route path="/about/faqs" element={<FAQ />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/partnership/ib-programme" element={<IBProgramme />} />
            <Route path="/partnership/cpa-affiliate" element={<CPAAffiliate />} />
            <Route path="/products/commodities" element={<Commodities />} />
            <Route path="/products/indices" element={<Indices />} />
            <Route path="/products/shares" element={<Shares />} />
            <Route path="/products/forex" element={<Forex />} />
            <Route path="/products/crypto" element={<Crypto />} />
            <Route path="/platforms/mt5" element={<MT5 />} />
            <Route path="/accounts/standard" element={<Standard />} />
            <Route path="/accounts/pro" element={<Pro />} />
            <Route path="/accounts/pro-x" element={<ProX />} />
            <Route path="/accounts/comparison" element={<Comparison />} />
            <Route path="/accounts/funding" element={<Funding />} />
            <Route path="/accounts/withdrawals" element={<Withdrawals />} />
            <Route path="/tools/trading-conditions" element={<TradingConditions />} />
            <Route path="/tools/trading-hours" element={<TradingHours />} />
            <Route path="/tools/economic-calendar" element={<EconomicCalendar />} />
            <Route path="/tools/calculators" element={<TradingCalculators />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
