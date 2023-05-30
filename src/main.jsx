import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PlinksContextProvider } from './context/PlinkContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlinksContextProvider>
      <App />
    </PlinksContextProvider>
  </React.StrictMode>,
)
