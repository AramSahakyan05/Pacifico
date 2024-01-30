import './Team.css';
import "../../../index.css";
import EachTeamMember from './eachTeamMember/EachTeamMember';

function Team() {
    return (
        <div className='team' id='team'>
            <div className='team-members'>
                <EachTeamMember />
            </div>
        </div>
    );
}


export default Team;