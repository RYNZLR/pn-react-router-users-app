import {
    Switch,
    Route
} from "react-router-dom";

import {Home, Users, UserDetail, Error} from '../views/viewImports';


export default function AppRouter(){

return(

    <Switch>
         <Route exact path={["/", "/home"]} component={Home} />

         <Route exact path="/users" component={Users} />

         <Route exact path="/users/:id" component={UserDetail} />

         <Route exact path="/*" component={Error} />
       

    </Switch>
)
}
