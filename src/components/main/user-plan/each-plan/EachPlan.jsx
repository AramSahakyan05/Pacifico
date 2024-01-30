import React from 'react'
import CONFIG from "../../../../config";
const EachPlan = () => {
  return CONFIG.userPlan.map(({id, type, price, priceType, btn, support, bandwith, themes }) => {
    return (
        <div key={id} className='user-plan-body-item'> 
            <div>
                <h2>{type}</h2>
                <h1>{price}</h1>
                <p>{priceType}</p>
            </div>
            <a href="#getStarted">{btn}</a>
            <div>
                <p>{support}</p>
                <p>{bandwith}</p>
                <p>{themes}</p>
            </div>
        </div>
    )
  })
}

export default EachPlan
