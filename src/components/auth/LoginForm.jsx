import { useFormValidation, validateEmail, validatePassword } from '../../utils/validation';
import Input from '../ui/Input';
import Button from '../ui/Button';
import '../../styles/auth.css';

function LoginForm({ onSubmit }) {
  const { values, errors, touched, handleChange, handleBlur, validateAll } = useFormValidation(
    { email: '', password: '' },
    { email: validateEmail, password: validatePassword }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      onSubmit(values);
    }
  };

  return (
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

      <Button type="submit">Giriş Yap</Button>
    </form>
  );
}

export default LoginForm;
