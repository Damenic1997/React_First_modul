import React, {useState} from 'react';


 export default function UseStateObject() {


  

    //const obj = {firstName: '', lastName: '', age:0};

    const [name, setName] = useState({firstName: '', lastName: '', age:0});


    return (
        <form>
            <input type='text' value={name.firstName} onChange={e=>setName({...name, firstName: e.target.value})}></input>
            <input type='text' value={name.lastName} onChange={e=>setName({...name, lastName: e.target.value})}></input>
            <input type='number' value={name.age} onChange={e=>setName({...name, age: e.target.value})}></input>


            <h2>Your firstname is: {name.firstName}</h2>
            <h2>Your lastname is: {name.lastName}</h2>
            <h2>Your age is: {name.age}</h2>


        </form>
    )
}