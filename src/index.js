import React from 'react';
import ReactDOM from 'react-dom';

// import LandingScreen from './Containers/LandingScreenContainer';
// import DiscriptionScreen from './Containers/DiscriptionScreenContainer';
// import CartScreenContainer from './Containers/CartScreenContainer';
// import NoPageFoundScreen from './Containers/NoPageFoundScreen';

import Routes from './routes.js';


//create a component that output html
const App = () => {
    return (
        <div>
          <Routes />
        </div>
        );
}

//add the component to DOM
ReactDOM.render(<App/>, document.querySelector(".container"));