import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import CreateProjectForm from './components/CreateProjectForm';
import { AppState } from './AppState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppState>
    <Router>
      <React.StrictMode>
        <Routes>
          {/* <Route path="/" element={<App />}/> */}
          <Route path="/" element={<HomePage />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/create" element={<CreateProjectForm />}/>
        </Routes>
      </React.StrictMode>
    </Router>
  </AppState>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
