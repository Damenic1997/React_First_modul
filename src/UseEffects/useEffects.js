import React, {useState, useEffect} from 'react';

export default function Apps() {
    const [resourceType, setResourseType] = useState('Post');
    const [items, setItems] = useState([]);

        // console.log('render');

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //         .then(response => response.json())
    //         .then(json => setItems(json))
    // });
    // console.log(items)
    return (
       <>
        <div>
        <button onClick={() => setResourseType('Posts')}>Posts</button>
        <button onClick={() => setResourseType('users')}>Users</button>
        <button onClick={() => setResourseType('comments')}>comments</button>
        </div>

        <h1>{resourceType}</h1>



        </>
    )
    
}