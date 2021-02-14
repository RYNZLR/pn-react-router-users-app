import React from 'react';
import { NavLink } from 'react-router-dom';




export default  function Navigation(){


    return(
        <div className="nav-container">
            <h1>[<span>SPA</span>] - React Router tutorial</h1>
        <nav>
            <ul>
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/users">Users</NavLink></li>

            </ul>
        </nav>
        </div>

    )

}