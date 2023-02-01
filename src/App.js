import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import CreateProjectForm from './components/CreateProjectForm';
import { AppState } from './AppState';

import './App.css';

const App = () => {
  return (
    <AppState>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/create" element={<CreateProjectForm />}/>
        </Routes>
      </Router>
    </AppState>
  )
}

  

export default App;
