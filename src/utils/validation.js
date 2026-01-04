import { useState } from 'react';

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return 'Email gereklidir';
  if (!regex.test(email)) return 'Geçersiz email formatı';
  return '';
};

export const validatePassword = (password) => {
  if (!password) return 'Şifre gereklidir';
  if (password.length < 8) return 'Şifre en az 8 karakter olmalıdır';
  return '';
};

export const validateName = (name) => {
  if (!name) return 'İsim gereklidir';
  if (name.length < 2) return 'İsim en az 2 karakter olmalıdır';
  return '';
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) return 'Şifre tekrarı gereklidir';
  if (password !== confirmPassword) return 'Şifreler eşleşmiyor';
  return '';
};

export const useFormValidation = (initialValues, validators) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    // Validate on blur
    if (validators[name]) {
      const error = validators[name](values[name], values);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(validators).forEach(key => {
      const error = validators[key](values[key], values);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    setTouched(Object.keys(validators).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return { values, errors, touched, handleChange, handleBlur, validateAll, resetForm };
};
