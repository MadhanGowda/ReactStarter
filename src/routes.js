import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'


import LandingScreenContainer from './Containers/LandingScreenContainer';
import DiscriptionScreenContainer from './Containers/DiscriptionScreenContainer';
import NotFoundComponent from './NotFoundComponent';


const routes = () => (
<Router>
  <div>
    <Switch>
        <Route exact path="/" component={LandingScreenContainer}/>
        <Route exact path="/details/:id" component={DiscriptionScreenContainer}/>
        <Route path="*" component={NotFoundComponent} />
    </Switch>
  </div>
</Router>);

export default routes;
