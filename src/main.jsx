import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { LazyMotion, domAnimation } from "framer-motion"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Wrap entire app in LazyMotion */}
      <LazyMotion features={domAnimation}>
        <App  />
      </LazyMotion>
    </BrowserRouter>
  </React.StrictMode>,
)