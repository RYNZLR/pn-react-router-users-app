import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import repo from "../../data/usersRepo";

export default  function UserDetail(){

    const [user, setUser] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        repo.getUser(id, setUser);
    }, []);


    function renderUser() {
        if(user){
            return(
                <React.Fragment>
                    <h2>{user.username}</h2>
                    <ul>
                        <li><strong>Id:</strong> {user.id}</li>
                        <li><strong>Fullname:</strong> {user.name}</li>
                        <li><strong>E-mail:</strong> {user.email}</li>
                        <li><strong>Phone:</strong> {user.phone}</li>
                        <li><strong>Website:</strong> {user.website}</li>
                    </ul>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
            </React.Fragment>
        );
        
    }


    return(
        <main>
            {renderUser()}
        </main>

    )

}