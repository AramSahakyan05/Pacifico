import React from 'react'
import { FaHeart, FaUmbrella, FaTrophy, FaCoffee, FaComments } from "react-icons/fa"

const icons = [ 
    <FaHeart />,
    <FaUmbrella />,
    <FaTrophy />,
    <FaCoffee />,
    <FaComments/>
];
const count = [
    "1050+",
    "217k",
    "1210",
    "2137",
    "24/7"
]
const description = [
    "Projects Completed",
    "Happy Clients",
    "Design Awards",
    "Cups Of Coffee",
    "Fast Support"
]
const EachAbility = () => {

 return icons.map((item, i) => {
     return (
         <div className='ability' key={Math.random()}>
             <span>{item}</span>
             <p className='count'>{count[i]}</p>
             <p className='description'>{description[i]}</p>
         </div>
     )
 })
  
}

export default EachAbility;
