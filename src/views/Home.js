import React from 'react';
import { useHistory } from 'react-router-dom';

export default  function Home(){

    const history = useHistory();

    function searchQuery(e){
        e.preventDefault();

        const query = e.target.search.value;
        const url = `/users?search=${query}`;
        history.push(url);
    
    }


    return(
        <main>
           <h2>Homepage</h2>
           <p>This is the homepage of the application. You can reach this page by going to / or /home. Using the JsonPlaceHolder API, you can retrieve a list of fake users in JSON format. This API has been free to use since 2013 and is maintaind by <a href="https://github.com/typicode" target="_blank">typicode</a>.</p>

            <h3>Search in users</h3>
            <form onSubmit={searchQuery}>
                <label for="search">Your query: </label>
                <input type="text" id="search" required/>
                <input type="submit" value="Search!"/>
            </form>
        
        </main>

    )

}