import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/Context.jsx'
import { Auth0Provider } from '@auth0/auth0-react'



ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain="dev-xfjojh1td120cprv.us.auth0.com"
    clientId="99Fh1KKlcxzx4122ztWZsidwFJyfEw0k"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
   <ContextProvider>
      <App />
      
      </ContextProvider>
      </Auth0Provider>
    
  
)
