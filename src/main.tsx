import './output.css';
import './input.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import React from 'react'
import ReactDOM from 'react-dom/client'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
