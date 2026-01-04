import { useNavigate } from 'react-router-dom';
import GlassCard from '../ui/GlassCard';
import LoginForm from './LoginForm';
import SocialLoginButtons from './SocialLoginButtons';
import '../../styles/auth.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    console.log('Login attempt:', formData);
  };

  return (
    <div className="auth-container">
      <GlassCard className="auth-card">
        <h1 className="auth-title">Hoş Geldiniz</h1>
        <p className="auth-subtitle">Devam etmek için giriş yapın</p>

        <LoginForm onSubmit={handleLogin} />

        <div className="forgot-password">
          <button
            className="link-button"
            onClick={() => navigate('/forgot-password')}
          >
            Şifrenizi mi unuttunuz?
          </button>
        </div>

        <div className="divider">veya</div>

        <SocialLoginButtons />

        <p className="auth-footer">
          Hesabınız yok mu?{' '}
          <button
            className="link-button"
            onClick={() => navigate('/signup')}
          >
            Kayıt olun
          </button>
        </p>
      </GlassCard>
    </div>
  );
}

export default LoginPage;
