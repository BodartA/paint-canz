import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import Stash from './pages/Stash.tsx';
import NewVault from './pages/NewVault.tsx';
import Vault from './pages/Vault.tsx';
import LoginPage from './pages/LoginPage.tsx';
import SignUpPage from './pages/SignUpPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/stash' element={<Stash />}></Route>
        <Route path='/newvault' element={<NewVault />}></Route>
        <Route path='/vault' element={<Vault />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup' element={<SignUpPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
