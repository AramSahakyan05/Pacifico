import './Partner.css';
import IMAGES from './index';


const Partners = () => {
    return(
        <div className='partners'>
            <img src={ IMAGES.firstPartner } alt="" />
            <img src={ IMAGES.secondPartner } alt="" />
            <img src={ IMAGES.thirdPartner } alt="" />
            <img src={ IMAGES.fourthPartner } alt="" />
            <img src={ IMAGES.fifthPartner } alt="" />
        </div>
    );
}

export default Partners;
