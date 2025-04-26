import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';  // Import the Auth0Provider
import AuthProvider from './context/AuthProvider.jsx';  // Keep your custom AuthProvider

const domain = "dev-5k5jzy1g25epq2i6.us.auth0.com"; // Your Auth0 domain
const clientId = "EALdReQsJNlUXz4OMPA0pRkcyiUFxsxl"; // Your Auth0 client ID

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{ redirect_uri: window.location.origin }}  // Ensure redirect_uri is set
      >
        <div className='dark:bg-slate-900 dark:text-white'>
          <App />
        </div>
      </Auth0Provider>
    </AuthProvider>
  </BrowserRouter>
);








// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import AuthProvider from './context/AuthProvider.jsx'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//      <AuthProvider>
//      <div className='dark:bg-slate-900 dark:text-white'>
//        <App />
//        </div>
//      </AuthProvider>
//   </BrowserRouter>
    
  
// )
