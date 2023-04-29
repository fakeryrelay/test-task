import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';


import { Router } from './routes/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <Router />
	</React.StrictMode>
)
