import React from 'react'
import Currency from './Currency'
import Gold from './Gold'
import './App.css'
import Footer from './Footer'


function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Currency />
        <Gold />
        <Footer />
      </div>
    </div>
  );
}

export default App;
