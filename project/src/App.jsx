import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router'
import './App.css'
import { createContext, useContext } from 'react';
import Credentials from './components/context/context'
import Signup from './components/signup';
import Login from './components/login';

function App() {
  return (
    <>
      <Router>
        <Credentials.Provider creds>
          <Route exact path='/signup' Component={Signup} ></Route>
        </Credentials.Provider>
      </Router>
    </>
  )
}

export default App
