import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import Routes from "./Routes";
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return(
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </div>
  )
}


export default App;
