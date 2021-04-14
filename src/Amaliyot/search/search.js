import React, {useState, useEffect} from 'react';
import axios from 'axios';



function Search() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredUser, setFilteredUsers] = useState([]);





    useEffect(() => {
        setLoading(true);
        axios.get(`http://jsonplaceholder.typicode.com/users`)
            .then(res => {
                console.log(res);
                setUsers(res.data);
                setLoading(false);
            }).catch(err => {
            console.log(err);
        })
    }, []);



    useEffect(() => {
        setFilteredUsers(
            users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
        );
    }, [search, users]);



    return (
        <div className='my-5'>
            <div className="container">
                <h2>Hover Rows</h2>
                <p>The .table-hover class enables a hover state (grey background on mouse over) on table rows:</p>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>website</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(user => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )

}


export default Search;