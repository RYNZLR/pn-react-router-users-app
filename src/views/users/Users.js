import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import repo from "../../data/usersRepo";

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

export default function User(){

    const [users, setUsers] = useState([]);

    const query = useQuery();

    useEffect(() => {
        repo.getUsers(renderUsers);
    }, []);

    function renderUsers(users){
        let search = query.get("search");
        let res =[]

        if(search){
            search = search.toLowerCase();
            res = users.filter(u => u.name.toLowerCase().includes(search));
            console.log(res);
        }else{
            res = users
        }

        setUsers(res);

        
    }


    return(
        <main>
           <h2>Users overview</h2>
           <ul>
               {users.map((u) => {
                   const url =`/users/${u.id}`;
                   return(
                        <li>{u.name} (<Link to={url}>Detail</Link>)</li>
                   );
               })}
           </ul>
        </main>

    )

}