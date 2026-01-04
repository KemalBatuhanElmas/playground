import '../../styles/glassmorphism.css';

function Button({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className: customClassName = '',
  ...props
}) {
  const getClassName = () => {
    const baseClass = variant === 'social' ? 'social-button' :
                      variant === 'secondary' ? 'glass-button-secondary' :
                      variant === 'outline' ? 'glass-button-outline' :
                      'glass-button';
    return `${baseClass} ${customClassName}`.trim();
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={getClassName()}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
