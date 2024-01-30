import React from 'react';
import "./BusinessPromote.scss";
import woman from "../../../assets/business-promote-images/business-woman.png"
import BusinessPromoteHead from './business-promote-header/BusinessPromoteHead';
import BusinessPromoteBody from './business-promote-body/BusinessPromoteBody';

const BussinessPromote = () => {

  return (
    <div className='business'>
        <img src={woman} alt="" />
        <div className='business-promote'>
        <div className='business-promote-head'>
          <h1>Ready To Promote Your Business?</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but <br /> majority have suffered alteration by new randomised words.</p>
        </div>
          <BusinessPromoteBody />
        </div>
    </div>
  )
}

export default BussinessPromote
