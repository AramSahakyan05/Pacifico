import './Nav.scss';
import '../../../index.css';
export function Nav(props) {
    const { config, isScrolled } = props;
    const { home, about, gallery, team, services, features, pricing, blog, getStarted } = config;
    return (
        <nav  className={isScrolled ? "scrolled" : ""}>
            <ul className="list">
                <li>
                    <a href="#">{home}</a>
                </li>
                <li>
                    <a href="#about">{about}</a>
                </li>
                <li>
                    <a href="#gallery">{gallery}</a>
                </li>
                <li>
                    <a href="#team">{team}</a>
                </li>
                <li>
                    <a href="#services">{services}</a>
                </li>
                <li>
                    <a href="#features">{features}</a>
                </li>
                <li>
                    <a href="#pricing">{pricing}</a>
                </li>
                <li>
                    <a href="#blog">{blog}</a>
                </li>
                <li className="start-list-item">
                    <a href="#">{getStarted}</a>
                </li>
            </ul>
        </nav>
    )
}
