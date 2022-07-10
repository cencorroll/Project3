import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/styles/main.scss'

createRoot(document.getElementById('root')).render(<App />)