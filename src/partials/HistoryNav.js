import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';


export default function HistoryNav(){

    const history = useHistory();
    const location = useLocation();

    function goBack(){
        history.goBack();
    }

    function goForward(){
        history.goForward();
    }

    function currentLocation(){
        return(
            <p>Current path: <span className="code">{location.pathname}</span> | Current query: <span>{location.search ? location.search : "none"}</span></p>

        )
    }

    return(
        <div className="historyNave">
            <a href="#" onClick={goBack}>&#8592; Backward</a>
            <div>
                {currentLocation()}
            </div>
            <a href="#" onClick={goForward}>Forward &#8594;</a>
        </div>
      
    )

}