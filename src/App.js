import React from 'react';
import Container from './containers/Container.js';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MainPage from './containers/MainPage.js';
function App() {
  return (
  	<BrowserRouter>
    <div className="App">
    <MainPage />
   
    </div>
    </BrowserRouter>
  );
}

export default App;
