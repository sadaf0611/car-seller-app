import React from 'react';
import './App.css';
import Header from './components/header/Header';
import CarList from './components/car/CarList';
import Footer from './components/footer/Footer';

function App() {
  return <>
    <Header/>
    <main>
      <CarList/>
    </main>
    <Footer/>
    
  </>
}

export default App;
