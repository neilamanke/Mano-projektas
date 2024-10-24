import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from '../useContext/ThemeProvider.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Authentication/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
     <App /> 
     </AuthProvider>
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
