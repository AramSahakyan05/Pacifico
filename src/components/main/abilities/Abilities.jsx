import "./Abilities.scss";
import EachAbility from "./each-ability/EachAbility";

function Abilities() {
    return(
        <div className='abilities'>
            <EachAbility />
        </div>
    );
}

export default Abilities;