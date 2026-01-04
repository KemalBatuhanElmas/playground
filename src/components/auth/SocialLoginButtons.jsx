import Button from '../ui/Button';
import googleIcon from '../../assets/google-icon.svg';
import appleIcon from '../../assets/apple-icon.svg';
import '../../styles/auth.css';

function SocialLoginButtons() {
  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleAppleLogin = () => {
    console.log('Apple login clicked');
  };

  return (
    <div className="social-buttons">
      <Button variant="social" onClick={handleGoogleLogin}>
        <img src={googleIcon} alt="Google" width="20" height="20" />
        Google ile devam et
      </Button>
      <Button variant="social" onClick={handleAppleLogin}>
        <img src={appleIcon} alt="Apple" width="20" height="20" />
        Apple ile devam et
      </Button>
    </div>
  );
}

export default SocialLoginButtons;
