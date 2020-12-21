import React , { useEffect , useState } from 'react'
import './Currency.css'

function Gold() {
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
        {(typeof currency.Gold != "undefined") ? (
            <div>
                <div className="show_box"  > 
                     {currency.Gold[0].Coin}
                </div>
            </div>
         ): ('')}
        </div>
    )
}

export default Gold
