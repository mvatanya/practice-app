import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import Routes from "./Routes";
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return(
    <div className="App">
      <div className="wrapper">
        <div className="head">
        </div>
        <div className="main">
          <BrowserRouter>
            <Navigation />
            <Routes />
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}


export default App;
