import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


createRoot(document.getElementById('root')).render(
  <Auth0Provider
      domain="dev-2tmvsgf0y3tgkhni.us.auth0.com"
      clientId="U47nLS4wytcchK3kHEa4xpYG147SYbjW"
      authorizationParams={{
        audience: "https://dev-2tmvsgf0y3tgkhni.us.auth0.com/api/v2/",
        redirect_uri: window.location.origin
      }}
    >
    <App />
  </Auth0Provider>,
)