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
        { isLoading ? ('') : (
            <div>
            <div className="header">:نرخ ارزها</div>
            <div className="money">
             <div className="arz" >
               <div><img alt="US" src="http://catamphetamine.gitlab.io/country-flag-icons/3x2/US.svg"/></div>
               <div className="type">دلار آمریکا</div>
                 <div>
                   <div className="cost">
                   <div>:قیمت</div>
                   <div className="cost-s">{currency.sana.data[0].p}</div>
                   </div>
                 </div>
             </div>   
             <div className="arz">
             <div><img alt="Euro" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png"/></div>
                <div className="type">یورو</div>
                 <div>
                   <div className="cost">
                   <div>:قیمت</div>
                   <div className="cost-s">{currency.sana.data[1].p}</div>
                   </div>
                 </div>
                </div>
                 <div className="arz">
                 <div><img alt="AE" src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/AE.svg"/></div>
                 <div className="type">درهم امارات</div>
                 <div>
                   <div className="cost">
                   <div>:قیمت</div>
                   <div className="cost-s">{currency.sana.data[2].p}</div>
                   </div>
                 </div>
                 </div>
                 <div className="arz">
                <div><img alt="IN" src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/IN.svg"/></div>
                 <div className="type">روپیه هند</div>
                 <div>
                   <div className="cost">
                   <div>:قیمت</div>
                   <div className="cost-s">{currency.sana.data[3].p}</div>
                   </div>
                 </div>
                 </div>
                 <div className="arz">
                 <div><img alt="TR" src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/TR.svg"/></div>
                 <div className="type">لیر ترکیه</div>
                 <div>
                   <div className="cost">
                   <div>:قیمت</div>
                   <div className="cost-s">{currency.sana.data[4].p}</div>
                   </div>
                 </div>
                 </div>
                 <div className="arz">
                 <div><img alt="RY" src="http://catamphetamine.gitlab.io/country-flag-icons/3x2/RU.svg"/></div>
                 <div className="type">روبل روسیه</div>
                 <div>
                   <div className="cost">
                   <div>:قیمت</div>
                   <div className="cost-s">{currency.sana.data[5].p}</div>
                   </div>
                 </div>
                 </div>
                 <div className="arz">
                 <div><img alt="CN " src="http://catamphetamine.gitlab.io/country-flag-icons/3x2/CN.svg"/></div>
                 <div className="type">یوان چین</div>
                 <div>
                   <div className="cost">
                   <div>:قیمت</div>
                   <div className="cost-s">{currency.sana.data[6].p}</div>
                   </div>
                 </div>
                 </div>
                 <div className="arz">
                 <div><img alt="KR" src="http://catamphetamine.gitlab.io/country-flag-icons/3x2/KR.svg"/></div>
                 <div className="type">وون کره جنوبی</div>
                 <div>
                   <div className="cost">
                   <div>:قیمت</div>
                   <div className="cost-s">{currency.sana.data[7].p}</div>
                   </div>
                 </div>
                 </div>
                 <div className="arz">
                 <div><img alt="CH" src="http://catamphetamine.gitlab.io/country-flag-icons/3x2/CH.svg"/></div>
                 <div className="type">فرانک سوئیس</div>
                 <div>
                   <div className="cost">
                   <div>:قیمت</div>
                   <div className="cost-s">{currency.sana.data[8].p}</div>
                   </div>
                 </div>
                 </div>
                 <div className="arz">
                 <div><img alt="JP" src="http://catamphetamine.gitlab.io/country-flag-icons/3x2/JP.svg"/></div>
                 <div className="type">ین ژاپن</div>
                 <div>
                   <div className="cost">
                   <div>:قیمت</div>
                   <div className="cost-s">{currency.sana.data[9].p}</div>
                   </div>
                 </div>
                 </div>
                 <div className="arz">
                 <div><img alt="CA" src="http://catamphetamine.gitlab.io/country-flag-icons/3x2/CA.svg"/></div>
                 <div className="type">دلار کانادا</div>
                 <div>
                   <div className="cost">
                   <div>:قیمت</div>
                   <div className="cost-s">{currency.sana.data[10].p}</div>
                   </div>
                 </div>
                 </div>
                 <div className="arz">
                <div><img alt="GB" src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/GB.svg"/></div>
                 <div className="type">پوند انگلیس</div>
                 <div>
                   <div className="cost">
                   <div>:قیمت</div>
                   <div className="cost-s">{currency.sana.data[11].p}</div>
                   </div>
                 </div>
                 </div>
                 <div className="arz">
                 <div><img alt="SE" src="http://catamphetamine.gitlab.io/country-flag-icons/3x2/SE.svg"/></div>
                 <div className="type">کرون سوئد</div>
                 <div>
                   <div className="cost">
                   <div>:قیمت</div>
                   <div className="cost-s">{currency.sana.data[12].p}</div>
                   </div>
                 </div>
                 </div>
                 <div className="arz">
                 <div><img alt="NO" src="http://catamphetamine.gitlab.io/country-flag-icons/3x2/NO.svg"/></div>
                 <div className="type">کرون نروژ</div>
                 <div>
                   <div className="cost">
                   <div>:قیمت</div>
                   <div className="cost-s">{currency.sana.data[13].p}</div>
                   </div>
                 </div>
                 </div>
                 <div className="arz">
                 <div><img alt="IQ" src="http://catamphetamine.gitlab.io/country-flag-icons/3x2/IQ.svg"/></div>
                 <div className="type">دینار عراق</div>
                 <div>
                   <div className="cost">
                   <div>:قیمت</div>
                   <div className="cost-s">{currency.sana.data[14].p}</div>
                   </div>
                 </div>
                 </div>
                 <div className="arz">
                 <div><img alt="AU" src="http://catamphetamine.gitlab.io/country-flag-icons/3x2/AU.svg"/></div>
                 <div className="type">دلار استرالیا</div>
                 <div>
                   <div className="cost">
                   <div> :قیمت </div>
                   <div className="cost-s">{currency.sana.data[15].p}</div>
                   </div>
                 </div>
                 </div>
                 </div>
                 </div>
        ) }
        </div>
    )
}

export default Currency

  

