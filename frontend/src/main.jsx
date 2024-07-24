import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { socket, WebSocketProvider } from '../contexts/websocket-context.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WebSocketProvider value={socket}>
      <App />
    </WebSocketProvider>
  </React.StrictMode>
);
