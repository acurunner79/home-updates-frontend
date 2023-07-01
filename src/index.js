import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { AppState } from './AppState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
      <React.StrictMode>
        <AppState>
          <Routes>
            <Route path="/*" element={<App />}/>
            {/* <Route path="/home" element={<HomePage />}/> */}
            {/* <Route path="/dashboard" element={<Dashboard />}/> */}
            {/* <Route path="/create" element={<CreateProjectForm />}/> */}
          </Routes>
        </AppState>
      </React.StrictMode>
    </Router>
    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
