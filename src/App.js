import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Study from './components/Study';
import Online from './components/Online';
import Button from './components/Button';
import Logo from './components/Logo';
import Home from './components/Home'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/Home' element={<Home/>}></Route>
          <Route exact path='/Logo' element={<Logo/>}></Route>
          <Route exact path='/About' element={<About/>}></Route>
          <Route exact path='/StudyMaterial' element={<Study/>}></Route>
          <Route exact path='/OnlineExam' element={<Online/>}></Route>
          <Route exact path='/Contact' element={<Contact/>}></Route>
          <Route exact path='/Login' element={<Button/>}></Route>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
