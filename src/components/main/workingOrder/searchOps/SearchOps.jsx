function SearchOps(props) {
    const { img, title, description } = props.config;
    // console.log(img);
    return (
        <div>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default SearchOps;