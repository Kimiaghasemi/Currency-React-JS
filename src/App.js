import React from 'react'
import Currency from './Currency'
import './App.css'
import Footer from './Footer'


function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Currency />
        <Footer />
      </div>
    </div>
  );
}

export default App;
