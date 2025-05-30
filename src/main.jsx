import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { LoggedIn } from './pages/LoggedIn.jsx'
import DescriptionPage from './pages/DescriptionPage.jsx'

const router = createBrowserRouter([
  {path: '/',
    element: <App/>
  },
  {
    path: "LoggedIn",
    element: <LoggedIn/>
  },
  {
    path: "DescriptionPage",
    element: <DescriptionPage/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
