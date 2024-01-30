import { useState, useEffect } from 'react';

const EachBodyElement = ({images, description}) => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 5450);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
      window.removeEventListener("scroll", handleScroll);
      };
  }, []);

    return images.map((item, i) => {
        return (
            <div key={Math.random()} className={`${isScrolled ? "scrolled-item" : ""}`}>
                <img src={item} alt="" />
                <p>{description[i]}</p>
            </div>
        )
      })
}

export default EachBodyElement
