import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextAPI from './contexts/ContextAPI.jsx'
import { MobileMenuProvider } from './contexts/MobileMenuContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<ContextAPI>
        <MobileMenuProvider>
          <BrowserRouter>
              <App/>
          </BrowserRouter>
        </MobileMenuProvider>
</ContextAPI>
  </StrictMode>,
)
