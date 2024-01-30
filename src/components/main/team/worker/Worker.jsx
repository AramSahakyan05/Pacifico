import WorkerSlider from "./workerSlider/WorkerSlider";
import './Worker.scss';
import { useState } from "react";
import CONFIG from "../../../../config";

function Worker() {

    const [activeIndex, setActiveIndex] = useState(0);
    const innerStyle = {
        transform: `translate(-${activeIndex * 100}%)`
    }
    const updateIndex = (newIndex) => {
        if(newIndex < 0) {
            newIndex = 0;
        } else if(newIndex >= CONFIG.workers.length) {
            newIndex = CONFIG.workers.length - 1;
        }
        setActiveIndex(newIndex);
    }
    return (
        <div className="worker-container">
            <div className="worker-container-inner" style={innerStyle}>
                <WorkerSlider />
            </div>
            <div className="indicators">
                {
                    CONFIG.workers.map((item, index) => {
                        return (
                            <button 
                                key={index}     className="indicator-buttons"
                                onClick={() => {
                                    updateIndex(index)
                                }}
                            >
                                <span className={`material-symbols-outlined ${index === activeIndex ? "indicator-symbol-active" : "indicator-symbol"}`}>
                                    radio_button_unchecked
                                </span>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Worker;