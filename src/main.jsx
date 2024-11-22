import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {ReactLenis} from 'lenis/dist/lenis-react'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <ReactLenis
    options={{
      lerp:0.3
    }}
    root>
    <App />
    </ReactLenis>
   </BrowserRouter>
  </StrictMode>,
)
