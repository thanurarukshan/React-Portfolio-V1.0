import React from 'react';
import './App.css';
import Aboutme from './Aboutme';
import Footer from './Footer';
import Headerbar from './Headerbar';
import Homepage from './Homepage';


function App() {
  return (
    <div className="App">
      <Headerbar />
      <Homepage />
      <Aboutme />
      <Footer />
    </div>
  );
}

export default App;
