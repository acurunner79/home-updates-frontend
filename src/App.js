import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import CreateProjectForm from './components/CreateProjectForm';
import CreateLocationForm from './components/CreateLocationForm';
import { useAppState } from './AppState.jsx';
import LocationProjects from './pages/LocationProjects';
import Test from './components/TestAccordion';

// import './App.css';

const App = () => {

  const { state } = useAppState()

  
  // console.log('state from Appjs', state)
  return (
 
        <Routes>
          <Route exact path="/home" element={<HomePage {...state}/>}/>
          <Route path="/dashboard" element={<Dashboard {...state}/>}/>
          <Route path="/projects" element={<LocationProjects {...state}/>}/>
          <Route path="/dashboard/:action" element={<CreateProjectForm {...state}/>}/>
          <Route path="/home/:action" element={<CreateLocationForm {...state}/>}/>
          <Route path="/test" element={<Test />}/>
        </Routes>
    

  )
}

  

export default App;
