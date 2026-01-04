import { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Section from '../ui/Section';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'success' | 'error' | ''

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      setStatus('error');
      return;
    }

    // TODO: Integrate with backend API
    console.log('Newsletter signup:', email);
    setStatus('success');
    setEmail('');

    // Reset status after 3 seconds
    setTimeout(() => setStatus(''), 3000);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (status === 'error') {
      setStatus('');
    }
  };

  return (
    <Section className="newsletter-section" id="newsletter">
      <div className="newsletter-content">
        <h2 className="newsletter-title">Stay Updated</h2>
        <p className="newsletter-description">
          Subscribe to our newsletter for the latest updates and productivity tips.
        </p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="newsletter-input-wrapper">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleChange}
              error={status === 'error'}
              aria-label="Email address for newsletter"
              aria-describedby={status ? 'newsletter-status' : undefined}
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            className="newsletter-button"
            aria-label="Subscribe to newsletter"
          >
            Subscribe
          </Button>
        </form>
        {status && (
          <div
            id="newsletter-status"
            className={`newsletter-message ${status}`}
            role="status"
            aria-live="polite"
          >
            {status === 'success'
              ? 'Thank you for subscribing! Check your email for confirmation.'
              : 'Please enter a valid email address.'}
          </div>
        )}
      </div>
    </Section>
  );
}

export default Newsletter;
