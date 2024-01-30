import './Discover.css';
import checkIcon from './check.png';
// import playIcon from './play.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
// import React, { useState } from 'react';
// import VideoModal from './video-modal/VideoModal';

const Discover = () => {

    // const [modalOpen, setModalOpen] = useState(false);

    // const handlePlayClick = () => {
    //     setModalOpen(true);
    // };
    // const handleCloseModal = () => {
    //     setModalOpen(false);
    // };
    // const modalStyle = {
    //     content: {
    //         position: 'absolute',
    //         top: '50%',
    //         left: '50%',
    //         transform: 'translate(-50%, -50%)',
    //         width: '80%',
    //         maxWidth: '800px',
    //         maxHeight: '80%',
    //         background: '#fff',
    //         borderRadius: '8px',
    //         outline: 'none',
    //         padding: '20px',
    //       }
    // };
    return (
        <div className='discover'>
            <div className='discover-inner-content'>
            <div className="youtube-video-wrapper">
            <div className="popup-gallery">
                {/* <img src={playIcon} alt="" className='play-button'/> */}
                <FontAwesomeIcon icon={faPlay}/>
                {/* <VideoModal isOpen={modalOpen} onClose={handleCloseModal} /> */}
            </div>

            </div>
                <div className='discover-inner-content-description'>
                    <h1>Get ready to discover all the benefits and secrets of a perfect launch</h1>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum lorem fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque et poris ratione sequi enim ipsam voluptatem quia volupti tempor ante netsum quia magni.</p>
                    <div className="advantages">
                        <p>
                            <span>
                                <img src={checkIcon} alt="" />
                            </span>
                            Netsum esq, qui ipsum quiaim netsum sequi net tempor.
                        </p>
                        <p>
                            <span>
                                <img src={checkIcon} alt="" />
                            </span>
                            Etiam tempor ante acu ipsum finibus, atimus urnas.
                        </p>
                        <p>
                            <span>
                                <img src={checkIcon} alt="" />
                            </span>
                            Atimus urnas netsudat, qui ipsum quiaim netsum.
                        </p>
                        <p>
                            <span>
                                <img src={checkIcon} alt="" />
                            </span>
                            Etiam tempor ante acum ipsum et finibus.
                        </p>
                    </div>
                    <button className='discover-button'>Discover More</button>
                </div>
            </div>
        </div>
    );
}

export default Discover;

