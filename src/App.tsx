import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './ui/i18n/config';
import { Header } from './ui/app-components';
import { ToastProvider, BreakpointProvider } from './ui/components';
import AppRoutes from './routes';
import { isTokenValid, validateToken, doLogout } from './ui/utils/auth';
import './ui/styles/theme.scss';

const App = () => {
  useEffect(() => {
    // check token
    const appToken = localStorage.getItem('appToken') || '';
    if (appToken) {
      // if token exists, validate in server
      if (!isTokenValid(appToken) || !validateToken(appToken)) {
        doLogout();
        window.location.href = '/';
      }
    }
  }, []);

  return (
    <BrowserRouter basename="/">
      <ToastProvider>
        <BreakpointProvider>
          <Header />
          <AppRoutes />
        </BreakpointProvider>
      </ToastProvider>
    </BrowserRouter>
  );
};

export default App;
