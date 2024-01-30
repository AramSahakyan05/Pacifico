import { useEffect, useState } from 'react';
import iphone from '../../../../assets/companyServiceImages/iphone.png';
import './Phone.scss'

const Phone = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;;
            setIsScrolled(scrollPosition > 3800);
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    return (
        <img src={iphone} className={`extra-image ${isScrolled ? "phone-scrolled" : ""} `} />
    )
}

export default Phone;