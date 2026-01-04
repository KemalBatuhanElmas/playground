import '../../styles/glassmorphism.css';

function Input({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  ...props
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`glass-input ${error ? 'error' : ''}`}
      {...props}
    />
  );
}

export default Input;
