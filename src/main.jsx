import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './components/context.jsx'


createRoot(document.getElementById('root')).render(

  <ContextProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </ContextProvider>
)
