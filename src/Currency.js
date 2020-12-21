import React , { useEffect , useState } from 'react'
import './Currency.css'

function Currency() {
    const [currency , setCurrency] = useState([])
    const api = "https://currency.jafari.li/json"

    useEffect(() =>{
    fetch(`${api}`)
       .then(res => res.json())
       .then((result) =>{
         setCurrency(result);
        console.log(result);})
      }
     , [])
    return (
        <div>
            <div>
                 <p>نرخ لحظه‌ای ارز و طلا</p>
            </div>
        {(typeof currency.Currency != "undefined") ? (
            <div>
                <div className="show_box"  >
                     {currency.LastModified } , 
                     {currency.Currency[0].Code}
                </div>
            </div>
        ): ('')}
        </div>
    )
}

export default Currency

/*
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
*/