import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "leaflet/dist/leaflet.css";
import SearchAppBar from "./SearchAppBar.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchAppBar />
    <App />
  </React.StrictMode>
)
