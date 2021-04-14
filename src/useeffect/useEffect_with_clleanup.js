import React, {useState} from 'react';
import HookMouse from "../UseEffects/HookMouse";

function UseEffectWithClleanup() {


    const [dpl, setDpl] = useState(true);
        return (
            <div>

                <button onClick={() => setDpl(!dpl)} >Toggle display</button>

                {dpl && <HookMouse/>}

            </div>
        );
}

export default UseEffectWithClleanup;