import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Helmet, HelmetProvider } from 'react-helmet-async'
ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
    <Helmet>
      <title>Gify search</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
