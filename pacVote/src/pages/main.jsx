import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'
import Login from './Login.jsx'
import CreateAccount from './CreateAccount.jsx'
import Home from './Home.jsx'
import Results from './Results.jsx'
import Confirm from './Confirm.jsx'
import Review from './Review.jsx'
import Ballot from './Ballot.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home /> 
  </StrictMode>,
)
