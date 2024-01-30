// import logo from '../images/award.png';

function Award (props) {
    const { img, title, description } = props.config;
    return (
        <div>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Award;