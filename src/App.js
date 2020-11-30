import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Pages/Home';
import Courses from './components/Pages/Courses';
import SignIn from './components/Pages/SignIn';
import Services from './components/Pages/Services';

function App() {
  return (
     <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/courses' component={Courses} />
          <Route path='/signin' component={SignIn} />
        </Switch>
      </Router>
    </>
    
  );
}



export default App;
