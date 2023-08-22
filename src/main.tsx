import ReactDOM from 'react-dom/client'
import App from './frontend/App.tsx'
import { BrowserRouter } from  'react-router-dom'
import { ModalContext } from './frontend/context/Context.tsx'

import './frontend/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
      <ModalContext>
        <App />
      </ModalContext>
    </BrowserRouter>
  </>
)
