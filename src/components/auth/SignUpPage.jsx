import { useFormValidation, validateName, validateEmail, validatePassword, validateConfirmPassword } from '../../utils/validation';
import GlassCard from '../ui/GlassCard';
import Input from '../ui/Input';
import Button from '../ui/Button';
import SocialLoginButtons from './SocialLoginButtons';
import '../../styles/auth.css';

function SignUpPage({ onNavigate }) {
  const { values, errors, touched, handleChange, handleBlur, validateAll } = useFormValidation(
    { name: '', email: '', password: '', confirmPassword: '' },
    {
      name: validateName,
      email: validateEmail,
      password: validatePassword,
      confirmPassword: (value, allValues) => validateConfirmPassword(allValues.password, value)
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      console.log('Sign up attempt:', values);
    }
  };

  return (
    <div className="auth-container">
      <GlassCard className="auth-card">
        <h1 className="auth-title">Hesap Oluştur</h1>
        <p className="auth-subtitle">Başlamak için bilgilerinizi girin</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Ad Soyad</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Adınız Soyadınız"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name}
            />
            {touched.name && errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

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

          <div className="input-group">
            <label htmlFor="password">Şifre</label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && errors.password}
            />
            {touched.password && errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Şifre Tekrar</label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="••••••••"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.confirmPassword && errors.confirmPassword}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>

          <Button type="submit">Kayıt Ol</Button>
        </form>

        <div className="divider">veya</div>

        <SocialLoginButtons />

        <p className="auth-footer">
          Zaten hesabınız var mı?{' '}
          <button
            className="link-button"
            onClick={() => onNavigate('login')}
          >
            Giriş yapın
          </button>
        </p>
      </GlassCard>
    </div>
  );
}

export default SignUpPage;
