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
