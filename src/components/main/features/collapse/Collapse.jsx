import { useState } from 'react';
import CONFIG from '../../../../config';
import './Collapse.scss';

const Collapsible = () => {
  const [selected, setSelected] = useState(null);
  const { collapse } = CONFIG;
  const toggle = (i) => {
    if(selected === i) {
        return setSelected(null);
    }
    setSelected(i);
  }

  return collapse.map(({id, title, icon, description}, i) => {
    return (
        <div key={id} className='collapse'>
            <p onClick={() => {toggle(i)}} className='each-collapse' style={{borderBottom: selected === i ? "3px solid #4285f4" : "none"}}>
                {icon} <span>{title}</span> {selected === i ? '-' : '+'}
            </p>
            {selected === i && <div className='collapse-description active'>{description}</div>}
        </div>
    )
  })
};

export default Collapsible;




