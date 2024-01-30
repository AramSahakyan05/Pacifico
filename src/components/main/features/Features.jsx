import imageSection from './image-section.jpg';
import './Features.scss';
import Collapsible from './collapse/Collapse';
import { useState } from 'react';

const Features = () => {


    return (
        <div className="features">
            <div className='features-collapse'>
                <h2>Get ready to discover all the benefits and<br /> secrets of a perfect launch</h2>
                <div className='collapse-block'>
                    <Collapsible/>
                </div>
            </div>
            <div>
                <img src={imageSection} alt="" />
            </div>
        </div>
    )
}

export default Features;