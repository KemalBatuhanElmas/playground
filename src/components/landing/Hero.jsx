import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Section from '../ui/Section';
import './Hero.css';

function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <Section className="hero-section" id="hero">
      <div className="hero-content">
        <h1 className="hero-headline">
          Organize Your Life, One Task at a Time
        </h1>
        <p className="hero-subheadline">
          Stay on top of your tasks with smart reminders, seamless collaboration,
          and intuitive organization. Your productivity journey starts here.
        </p>
        <div className="hero-cta">
          <Button
            variant="primary"
            onClick={handleGetStarted}
            className="hero-button"
            aria-label="Get started with todo app"
          >
            Get Started
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
