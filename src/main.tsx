import React from 'react'
import ReactDOM from 'react-dom/client'

import AppProvider from '@/providers'

import "@/normalize.css"
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>,
)
