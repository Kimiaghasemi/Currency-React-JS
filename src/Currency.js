import React , { useEffect , useState } from 'react'
import './Currency.css'

function Currency() {
    const [currency , setCurrency] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    const api = "https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json"
    
    useEffect(() =>{
    fetch(`${api}`)
       .then(res => res.json())
       .then((result) =>{
         setCurrency(result);
         setIsLoading(false)
        console.log(result);})
      }
     , [])
     
    return (
        <div>
            <div>
                 <p>نرخ لحظه‌ای ارز و طلا</p>
            </div>
        { isLoading ?(''): (
            <div>
                <div className="show_box"  >
                     {currency.sana.data[0].p }
                </div>
            </div>
        ) }
        </div>
    )
}

export default Currency