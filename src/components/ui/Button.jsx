import '../../styles/glassmorphism.css';

function Button({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  ...props
}) {
  const className = variant === 'social' ? 'social-button' : 'glass-button';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
