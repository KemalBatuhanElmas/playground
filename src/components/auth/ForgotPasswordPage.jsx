import { useState } from 'react';
import { useFormValidation, validateEmail } from '../../utils/validation';
import GlassCard from '../ui/GlassCard';
import Input from '../ui/Input';
import Button from '../ui/Button';
import '../../styles/auth.css';

function ForgotPasswordPage({ onNavigate }) {
  const [submitted, setSubmitted] = useState(false);
  const { values, errors, touched, handleChange, handleBlur, validateAll } = useFormValidation(
    { email: '' },
    { email: validateEmail }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      console.log('Password reset request for:', values.email);
      setSubmitted(true);
    }
  };

  return (
    <div className="auth-container">
      <GlassCard className="auth-card">
        <h1 className="auth-title">Şifremi Unuttum</h1>
        <p className="auth-subtitle">
          Email adresinizi girin, size şifre sıfırlama linki gönderelim
        </p>

        {submitted ? (
          <div className="success-message">
            Email adresinize şifre sıfırlama linki gönderildi. Lütfen email kutunuzu kontrol edin.
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="ornek@email.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
              />
              {touched.email && errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <Button type="submit">Sıfırlama Linki Gönder</Button>
          </form>
        )}

        <div className="back-link">
          <button
            className="link-button"
            onClick={() => onNavigate('login')}
          >
            ← Giriş sayfasına dön
          </button>
        </div>
      </GlassCard>
    </div>
  );
}

export default ForgotPasswordPage;
