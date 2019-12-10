import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from '~/router/'


class App extends React.Component{
   render(){

      let routesRows = routes.map((route) => {
         return < Route
                  key = {route.path} 
                  path={route.path}
                  component={route.component}
                  exact={route.exact} 
                />
      })

      return <BrowserRouter>
         <div className="container">
            <Switch>
               {routesRows}
            </Switch>
         </div>
      </BrowserRouter> 
   }
}

export default App;