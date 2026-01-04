import { useNavigate } from 'react-router-dom';
import Hero from './landing/Hero';
import Features from './landing/Features';
import Newsletter from './landing/Newsletter';
import CTA from './landing/CTA';
import Button from './ui/Button';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="header-container">
          <div className="header-logo">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <span className="logo-text">TaskFlow</span>
          </div>
          <nav className="header-nav" aria-label="Main navigation">
            <Button
              variant="outline"
              onClick={handleLogin}
              className="header-button"
              aria-label="Log in to your account"
            >
              Log In
            </Button>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Newsletter />
        <CTA />
      </main>

      <footer className="landing-footer">
        <div className="footer-container">
          <p className="footer-text">
            &copy; 2025 TaskFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
