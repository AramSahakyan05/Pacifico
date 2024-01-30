import React from 'react'
import CONFIG from "../../../../config";
const EachNews = () => {
  return CONFIG.latestNews.map(({id, img, title, name, position, description, btn}) => {
    return (
            <div key={id} className='latest-news-body-item'>
                <div className='news-img'>
                  <img src={img} alt="" />
                  <div className='black-background'></div>
                </div>
                <h3>{title}</h3>
                <div className='name-pos'>
                  <span className='name'>{name}</span>
                  <span>{position}</span>
                </div>
                <p>{description}</p>
                <a href="#readMore">{btn}</a>
            </div>
    )
  })
}

export default EachNews
