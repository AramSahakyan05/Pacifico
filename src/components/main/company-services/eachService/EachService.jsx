import CONFIG from "../../../../config";

const EachService = () => {
    const { services } = CONFIG;
    
    return (
        services.map(val => {
            const { id, icon, title, description } = val;
            return (
                <div className="each-service" key={id}>
                    <img src={icon} alt="" />
                    <div className="service-description">
                        <h3 className="service-head">{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            )
        })
    )
}

export default EachService;