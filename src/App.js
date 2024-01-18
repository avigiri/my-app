import logo from './logo.svg';
import './App.css';
import { Component, Header } from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { New } from './New';
import About from './component/About';
import Home from './component/Home'

function App() {
  return (
    <>
    <BrowserRouter> 
    <Header /> 
    <Routes>
    <Route path="/" element={<Home/>}/>
<Route path="/About" element={<About/>}/>

    </Routes>
    
    </BrowserRouter>


    </>
  );
}

export default App;
