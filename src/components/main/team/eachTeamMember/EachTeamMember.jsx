import CONFIG from '../../../../config';
import './EachTeamMember.css';

function EachTeamMember() {
    const { teamInfo } = CONFIG;
    return (
        teamInfo.map((val) => {
            const { id, img, name, posInTeam, about, socialIcons} = val;
            return(
                <div key={id} className="each-member">
                    <img src={img} alt="" />
                    <h3>{name}</h3>
                    <div className="team-info">
                        <p className="position-in-team">{posInTeam}</p>
                        <span></span>
                    </div>
                    <p className="description">{about}</p>
                    <ul className="team-icon">
                        <li>
                            {socialIcons.map((val,i) => {
                                const { icon } = val;
                                return (
                                    <a href="#media-icon" className="media-icon" key={i}>
                                        {icon}
                                    </a>
                                );
                            })}
                        </li>
                    </ul>
                </div>
            );
        })
    );
}

export default EachTeamMember;
