import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Section from '../ui/Section';
import './CTA.css';

function CTA() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <Section className="cta-section" id="cta">
      <div className="cta-content">
        <h2 className="cta-title">Ready to Get Started?</h2>
        <p className="cta-description">
          Join thousands of users who are already organizing their lives better.
          Start your productivity journey today!
        </p>
        <div className="cta-buttons">
          <Button
            variant="primary"
            onClick={handleSignUp}
            className="cta-button"
            aria-label="Sign up for todo app"
          >
            Sign Up Free
          </Button>
          <Button
            variant="outline"
            onClick={handleLogin}
            className="cta-button"
            aria-label="Log in to your account"
          >
            Log In
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default CTA;
