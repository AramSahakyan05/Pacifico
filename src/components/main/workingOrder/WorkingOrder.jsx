import '../../../index.css';
import './WorkingOrder.scss';
import CONFIG from "../../../config";
import ReachClient from "./reachClient/ReachClient";
import Award from "./awards/Award";
import SearchOps from "./searchOps/SearchOps";


const WorkingOrder = () => {
    const { workingOrder } = CONFIG;
    const { searchOps, reachClient, award } = workingOrder;
    return (
        <div className="working-order" id='about'>
            <h1>How It Works</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration humour, or new randomised words.</p>
            <div className="working-order-content">
                <SearchOps config={searchOps}/>
                <ReachClient config={reachClient}/>
                <Award config={award}/>
            </div>
        </div>  
    )
}

export default WorkingOrder;