import React from 'react';

import {BrowserRouter as Router,
		Route,
		Switch,
	} from 'react-router-dom';

import LandingScreen from './Containers/LandingScreenContainer';
import DiscriptionScreen from './Containers/DiscriptionScreenContainer';
import CartScreenContainer from './Containers/CartScreenContainer';
import NoPageFoundScreen from './Containers/NoPageFoundScreen';

const routes = () => (
	<Router>
		<div>
			<Switch>
				<Route exact path="/" component={LandingScreen}/>
				<Route exact path="/details" component={DiscriptionScreen}/>
				<Route exact path="/cart" component={CartScreenContainer}/>
				<Route path="*" component={NoPageFoundScreen}/>
			</Switch>
		</div>
	</Router>
);

export default routes;