import React from 'react';
import "./LatestNews.scss";
import EachNews from './each-news/EachNews'
import LatestNewsHead from './latest-news-header/LatestNewsHead';

const LatestNews = () => {
  return (
    <div className='latest-news'>
      <LatestNewsHead />
      <div className='latest-news-body'>
        <EachNews />
      </div>
    </div>
  )
}

export default LatestNews
