import React from 'react';
import ReactDOM from 'react-dom';

import LandingScreen from './Containers/LandingScreenContainer'
import DiscriptionScreen from './Containers/DiscriptionScreenContainer'

import Product from './Components/Product'


//create a component that output html
const App = () => {
    return (
        <div>
          <Product />
        </div>
        );
}

//add the component to DOM
ReactDOM.render(<App/>, document.querySelector(".container"));
