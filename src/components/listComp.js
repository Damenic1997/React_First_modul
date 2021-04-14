import React from 'react';

const ListComp = (props) => {
    return (
        <div>
            <ul>{props.list.map(el => (
                <li>{ el }</li>
            ))}</ul>
        </div>
    )
}


export default ListComp;