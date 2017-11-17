import React from 'react';
import ReactDOM from 'react-dom';

// import LandingScreen from './Containers/LandingScreenContainer'
// import DiscriptionScreen from './Containers/DiscriptionScreenContainer'

// import ProductListComponent from './Components/ProductListComponent'

import Routes from './routes';

//create a component that output html
const App = () => {
    return (
        <Routes />
        );
}

//add the component to DOM
ReactDOM.render(<App/>, document.querySelector(".container"));
