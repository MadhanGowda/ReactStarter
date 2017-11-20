import React from 'react';

import {BrowserRouter as Router,
		Route,
		Switch,
	} from 'react-router-dom';

import LandingScreen from './Containers/LandingScreenContainer';
import DiscriptionScreen from './Containers/DiscriptionScreenContainer';
import CartScreenContainer from './Containers/CartScreenContainer';
import NoPageFoundScreen from './Containers/NoPageFoundScreen';
import Layout from  './Containers/layout';

const routes = () => (
	<Layout>
		<Router>
			<Switch>
				<Route exact path="/" component={LandingScreen}/>
				<Route exact path="/details/:id" component={DiscriptionScreen}/>
				<Route exact path="/cart" component={CartScreenContainer}/>
				<Route path="*" component={NoPageFoundScreen}/>
			</Switch>
		</Router>
	</Layout>
);

export default routes;