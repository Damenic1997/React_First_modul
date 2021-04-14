import React, {useState, useEffect} from 'react';
import Search from "./search/search";

import Dropdown from './dropdown';


function Amaliyot() {



   const [dpl, setDpl] = useState(true);



   const toogleBtn = () => {
       setTimeout(setDpl(!dpl), 1000)
   };

    return (
        <div className='my-5'>
            <Search/>
            <section>
                <button className='btn btn-primary btn-block' onClick={toogleBtn} >Toggle Data</button>
                {dpl && <Dropdown/>}
            </section>
        </div>
    )

}


export default Amaliyot;