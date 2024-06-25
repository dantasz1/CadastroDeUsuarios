import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'  // nesse caso nao precisa / index.jsx, tova vez q o arquivo se chama index vai automatico
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
