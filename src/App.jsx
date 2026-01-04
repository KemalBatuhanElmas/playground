import { useState } from 'react';
import LoginPage from './components/auth/LoginPage';
import ForgotPasswordPage from './components/auth/ForgotPasswordPage';
import SignUpPage from './components/auth/SignUpPage';

function App() {
  const [currentView, setCurrentView] = useState('login');

  return (
    <>
      {currentView === 'login' && (
        <LoginPage onNavigate={setCurrentView} />
      )}
      {currentView === 'forgot-password' && (
        <ForgotPasswordPage onNavigate={setCurrentView} />
      )}
      {currentView === 'signup' && (
        <SignUpPage onNavigate={setCurrentView} />
      )}
    </>
  );
}

export default App;
