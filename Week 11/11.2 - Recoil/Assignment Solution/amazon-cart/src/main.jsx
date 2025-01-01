import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <Router>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </Router>
)