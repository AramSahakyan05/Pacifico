import React from 'react'
import like from "../../../../assets/business-promote-images/like.svg"
import plane from "../../../../assets/business-promote-images/plane.svg"
import tools from "../../../../assets/business-promote-images/tools.svg"
import umbrella from "../../../../assets/business-promote-images/umbrella.svg"
import EachBodyElement from './each-body-element/EachBodyElement'
const images = [
    plane, tools, umbrella, like
]
const description = [
    "Tendis tempor ante acu ipsum finibus, et atimus etims urnatis quisle ratione lorem nets et sequi tempor.",
    "Neque tempor ante acu ipsum nis finibus, atime quiamis ets qui tempor magni ets ipsum finibus.",
    "Lorem tempor ante acu ipsum net finibus, atimus veilite nistris qui tempor ratione estimat ipsum.",
    "Etiam tempor ante acu ipsum net finibus, atimus veilite nis qui tempor ratione estimat ipsum."
]

const BusinessPromoteBody = () => {
  return (
    <div className='business-promote-body'>
            <EachBodyElement images={images} description={description}/>
    </div>
  )
}

export default BusinessPromoteBody
