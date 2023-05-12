import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CustomAside } from './sections/aside'
import { CustomArticle } from './sections/article'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <main>
      <CustomAside />
      <CustomArticle />
    </main>
  </React.StrictMode>,
)
