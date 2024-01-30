import './App.css';
import { Header } from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import CONFIG from './config';
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom, Slide } from 'react-slideshow-image';

function App() {
  const {slider} = CONFIG;
  const settings = {
    transitionDuration: 1000
  }
  return (
    <div className="App">
      <div className='App-slider-container'>
        <Zoom {...settings}>
            {
              slider.map(({id, slide}) => {
                return (
                  <img 
                    key={id}
                    src={slide} 
                    className='slider-image'
                />
                )
              })
            }
        </Zoom>
      </div>
      <div className="blue-background"></div>
      <div className="container">
        <Header/>
        <Main />
        <Footer />
      </div>
    </div>
  );
  
}

export default App;
