import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/reset.scss'
import './main.scss'
import { BrowserRouter } from 'react-router-dom'
import ProviderWrapper from './context/ProviderWrapper.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <ProviderWrapper>
        <App />
      </ProviderWrapper>
    </BrowserRouter>
)
