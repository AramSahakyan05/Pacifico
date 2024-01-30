import './Services.scss';
import EachService from './eachService/EachService';
import Phone from './phone/Phone';
import ServiceTitle from './title/ServiceTitle';
const Services = () => {
    return(
        <div className="services" id='services'>
            <ServiceTitle />
            <div className="services-wrap">
                <EachService />
            </div>
            <Phone />
        </div>
    )
}

export default Services;