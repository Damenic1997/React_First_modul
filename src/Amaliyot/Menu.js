import React from 'react';
import {Link, NavLink} from 'react-router-dom';


function Menu() {
    return (
        <div className='bg-dark fixed-top'>
            <nav className="navbar navbar-expand-md  navbar-dark container">
                <NavLink exact className="navbar-brand font-weight-bold px-5" activeClassName={Menu.actives} to='/'>Uzbek IT</NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact className="nav-link text-light font-weight-bold px-5" activeClassName={Menu.actives} to='/html'>HTML</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link text-light font-weight-bold px-5" activeClassName={Menu.actives} to='/css'>CSS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link text-light font-weight-bold px-5" activeClassName={Menu.actives} to='/javascript'>JAVASCRIPT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link text-light font-weight-bold px-5" activeClassName={Menu.actives} to='/reactjs'>reactjs</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default Menu;