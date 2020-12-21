<<<<<<< HEAD
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
=======
import React from 'react';
import './App.css';
import AutorenewIcon from '@material-ui/icons/Autorenew';

//import Table from 'react-bootstrap/Table';
//import { Header, Table, Rating } from 'semantic-ui-react';



function App() {

  return (
    <div className="App">
      
     <main>
       <div className="header">:نرخ ارزها</div>
        <tbody>
          <tr>
          <tr><td className="green">دلار</td></tr> 
          <tr><td className="red">یورو</td></tr>
          <tr><td className="green">پوند انگلیس</td></tr>
            <tr>
                
                <td className="red">درهم امارات</td>
            </tr> 
            <tr>
                <td className="green">لیر ترکیه</td>
            </tr> 
          <tr><td className="red">یوان چین</td></tr> 
          <tr><td className="green">ین ژاپن</td></tr> 
          <tr><td className="red">دلار کانادا</td></tr> 
          <tr><td className="green">دلار استرالیا</td></tr> 
          <tr><td className="red">دلار نیوزلند</td></tr> 
          <tr><td className="green">فرانک سوئیس</td></tr> 
          <tr><td className="red">کرون سوئد</td></tr> 
          <tr><td className="green">روبل روسیه</td></tr> 
          <tr><td className="red">منات آذربایجان</td></tr> 
          <tr><td className="green">درام ارمنستان</td></tr> 
          <tr><td className="red">افغانی افغانستان</td></tr>
         </tr>
        </tbody>
       
        <tr>
          <div className="footer">
            <td >آخرین به روز رسانی </td>
            <AutorenewIcon ></AutorenewIcon>
          </div>
        </tr>
      </main>
   </div>
    
  );

}

export default App;
>>>>>>> c97caf1dd497f0aa903fb10b0c7fda5ad691a9c2
