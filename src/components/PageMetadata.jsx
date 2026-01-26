import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles = {
  '/': 'Global Markets Trading',
  '/about/why-radhikafx': 'Why Choose RadhikaFX',
  '/about-us': 'About Us',
  '/about/regulations': 'Regulations',
  '/about/achievements': 'Achievements & Awards',
  '/about/careers': 'Careers',
  '/about/faqs': 'Frequently Asked Questions',
  '/contact-us': 'Contact Us',
  '/partnership/ib-programme': 'IB Programme',
  '/partnership/cpa-affiliate': 'CPA Affiliate',
  '/partnership/liquidity-services': 'Liquidity Services',
  '/products/commodities': 'Commodities Trading',
  '/products/indices': 'Indices Trading',
  '/products/shares': 'Shares Trading',
  '/products/forex': 'Forex Trading',
  '/products/crypto': 'Crypto Trading',
  '/platforms/mt5': 'MetaTrader 5 Platform',
  '/accounts/standard': 'Standard Account',
  '/accounts/pro': 'Pro Account',
  '/accounts/pro-x': 'Pro X Account',
  '/accounts/comparison': 'Account Comparison',
  '/accounts/funding': 'Funding Methods',
  '/accounts/withdrawals': 'Withdrawals',
  '/tools/trading-conditions': 'Trading Conditions',
  '/tools/trading-hours': 'Trading Hours',
  '/tools/economic-calendar': 'Economic Calendar',
  '/tools/calculators': 'Trading Calculators',
  '/tools/education': 'Education & Insights',
  '/risk-disclaimer': 'Risk Disclaimer',
  '/terms-and-conditions': 'Terms and Conditions',
  '/privacy-policy': 'Privacy Policy',
  '/risk-warning': 'Risk Warning',
  '/open-live-account': 'Open Live Account',
  '/open-demo-account': 'Open Demo Account'
};

const PageMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Determine title
    let title = routeTitles[pathname];

    // Handle dynamic routes or fallbacks
    if (!title) {
        if (pathname.startsWith('/tools/education/')) {
            // Placeholder title for blog posts until content loads
            title = 'Market Analysis';
        } else {
            // Default fallback
            title = 'Global Markets Trading';
        }
    }

    document.title = `${title} | RadhikaFX`;

  }, [pathname]);

  return null;
};

export default PageMetadata;
