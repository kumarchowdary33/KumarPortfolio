import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
