import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './components/context.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(

  <BrowserRouter>

      <ContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
      </ContextProvider>
  </BrowserRouter>
)
